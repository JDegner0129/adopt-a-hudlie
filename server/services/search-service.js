'use strict';

const collections = require('../collections');

const InterestCollection = collections.InterestCollection;
const UserCollection = collections.UserCollection;

class SearchService {
  static search(query, callback) {
    const interestQuery = {
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { 'keywords.term': { $regex: query, $options: 'i' } },
      ],
    };

    // Search interests for interests that match the user's query
    InterestCollection.getInterests(interestQuery, (err, interests) => {
      if (err) throw err;

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
      UserCollection.getUsers(userQuery, callback);
    });
  }
}

module.exports = SearchService;
