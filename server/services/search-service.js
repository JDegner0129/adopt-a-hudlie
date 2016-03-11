'use strict';

const collections = require('../collections');

const InterestCollection = collections.InterestCollection;
const UserCollection = collections.UserCollection;

class SearchService {
  static search(query, callback) {
    const interestQuery = { name: { $regex: query, $options: 'i' } };

    // Search interests for interests that match the user's query
    InterestCollection.getInterests(interestQuery, (err, interests) => {
      if (err) {
        callback(err);
        return;
      }

      let interestIds = interests.map(i => i._id) || [];

      const userQuery = {
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { location: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } },
        ]
      };

      // If any interests match up, OR the results into the query for users
      if (interestIds.length) {
        userQuery.$or.push({
          'interests.interestId': { $in: interestIds },
        });
      }

      // TODO: order these results by some priorities:
      // 1. Interest rating
      // 2. Number of keywords matched per user
      // 3. Availability
      UserCollection.getUsers(userQuery, (err, users) => {
        if (err) {
          callback(err);
          return;
        }

        if (!users || !users.length) {
          callback(err, users);
          return;
        }

        for (var j = 0; j < users.length; j++) {
          const user = users[j];

          // if a user result has interests, populate fields from that
          // TODO: consider using Mongoose's population for this logic
          if (user.interests) {
            const userInterestIds = user.interests.map(i => i.interestId);
            const k = j; // need to store j's present value for callback func

            InterestCollection.getInterests({ _id: { $in: userInterestIds } }, (err, interests) => {
              if (err) {
                callback(err);
                return;
              }

              user.interests.forEach(interest => {
                interest.name = interests.find(i => i._id.equals(interest.interestId)).name;
              });

              if (k === users.length - 1) {
                callback(err, users);
              }
            });
          } else if (j === users.length - 1) {
            callback(err, users);
          }
        }
      });
    });
  }
}

module.exports = SearchService;
