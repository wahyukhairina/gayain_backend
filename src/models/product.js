const connection = require('../configs/connection')

module.exports = {
  countData: (searchName, cat) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT count(*) as totalData FROM product p
                LEFT JOIN category tc ON p.category = tc.category_id
            WHERE p.name LIKE '%${searchName}%' AND tc.name LIKE '%${cat}%'
                `, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result[0].totalData)
      })
    })
  },
  getAll: (searchName, pagination, category) => {
    return new Promise((resolve, reject) => {
      const totalData = connection.query('SELECT count(*) FROM product')
      const firstData = ((pagination.limit * pagination.activePage) - pagination.limit)
      connection.query(`SELECT
          product.id,
          product.name,
          category.name AS category,
          product.image,
          product.price,
          product.stock,
          product.created,
          product.updated
      FROM
          category,
          product
      WHERE
          product.category = category.category_id
            AND
            product.name LIKE '%${searchName}%' AND category.category_id LIKE '%${category}%'
            ORDER BY product.${pagination.sortBy} ${pagination.sort}
            LIMIT ${firstData},${pagination.limit}
            `, (error, result) => {
            if (error) reject(new Error(error))
            resolve(result)
          })
        })
      },

      getNew: () => {
        return new Promise((resolve, reject) => {
          connection.query(
            "SELECT * FROM product ORDER BY created DESC LIMIT 4", (error, result) => {
              if (error) reject (new Error(error));
              resolve(result);
            }
          ) 
        })
      },


  getDetail: productId => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM product WHERE id = ?',
        productId,
        (error, result) => {
          if (error) reject(new Error(error))
          resolve(result)
        }
      )
    })
  },
  inputProduct: data => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  updateProduct: (data, productId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE product SET ? WHERE id = ?',
        [data, productId],
        (error, result) => {
          if (error) reject(new Error(error))
          resolve(result)
        }
      )
    })
  },
  deleteProduct: productId => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM product WHERE id = ?',
        productId,
        (error, result) => {
          if (error) reject(new Error(error))
          resolve(result)
        }
      )
    })
  }
}
