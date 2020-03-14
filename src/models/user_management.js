const connection = require('../configs/connection');

module.exports = {
  register: data => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user_management WHERE email = ?',
        data.email,
        (error, result) => {
          if (result.length > 0) {
            reject(new Error('User has been added'));
          } else {
            connection.query(
              'INSERT INTO user_management SET ?',
              data,
              (error, result) => {
                if (error) reject(new Error(error));
                resolve(result);
              }
            );
          }
        }
      );
    });
  },
  checkEmail: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user_management WHERE email = ?',
        email,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
  getUser: name => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user_management WHERE name LIKE '%${name}%'`,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
  updateData: (data, userId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user_management SET ? WHERE id = ?',
        [data, userId],
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
  deleteData: userId => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM user_management WHERE id = ?',
        userId,
        (error, result) => {
          if (error) reject(new Error(error));
          resolve(result);
        }
      );
    });
  },
};
