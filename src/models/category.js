const connection = require('../configs/connection')

module.exports = {
    listCategory : (searchName) =>{
        return new Promise((resolve, reject) =>{
            connection.query(`SELECT * FROM category WHERE name LIKE '%${searchName}%'`, (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    inputCategory : (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category SET ?", data , (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            } )
        })
    },
    editCategory : (data, categoryId) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE category SET ? WHERE category_id = ?", [data, categoryId], (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteCategory : (categoryId) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category WHERE category_id = ? ", categoryId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}