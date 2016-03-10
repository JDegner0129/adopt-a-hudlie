'use strict';

const collections = require('../collections');

const InterestCollection = collections.InterestCollection;
const UserCollection = collections.UserCollection;

class SearchService {
  static search(query, callback) {
    // Search interests for interests that match the query
    InterestCollection.getInterests({ $text: { $search: query }}, (err, interests) => {
      if (err) throw err;

      let interestIds = interests.map(i => i._id) || [];

      let userQuery;
      const textQuery = { $text: { $search: query } };

      // If any interests match up, OR the results into the query for users
      if (interestIds.length) {
        userQuery = {
          $or: [
            {
              'interests.interestId': { $in: interestIds },
            },
            textQuery,
          ],
        };
      } else {
        userQuery = textQuery;
      }

      UserCollection.getUsers(userQuery, callback);
    });
  }
}

module.exports = SearchService;
