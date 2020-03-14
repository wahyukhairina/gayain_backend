const connection = require('../configs/connection')

module.exports = {
    getAll : (searchName, sortBy, limit, page, category) => {
        return new Promise((resolve, reject) => {
            const firstProduct = ((limit * page) - limit)
            // connection.query(`SELECT p.id, p.name, c.name as category, p.price, p.stock, p.image, p.created, 
            //             p.updated FROM product p LEFT JOIN category c ON p.category = c.category_id WHERE p.name
            //             LIKE '%${searchName}%' AND c.name LIKE '%${category}%' ORDER BY ${sortBy} ASC LIMIT ${firstProduct},${limit}`, (error, result) => {
                connection.query(`SELECT * FROM product`, (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getDetail : (productId) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM product WHERE id = ?', productId , (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    inputProduct : (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO product SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateProduct : (data, productId) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE product SET ? WHERE id = ?', [data, productId], (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteProduct : (productId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM product WHERE id = ?', productId , (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}