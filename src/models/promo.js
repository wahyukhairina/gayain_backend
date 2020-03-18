const connection = require('../configs/connection')

module.exports = {
    listPromo : (name) =>{
        console.log(name)
        console.log('ini')
        return new Promise((resolve, reject) =>{
            connection.query(`SELECT * FROM promo WHERE name LIKE '%${name}%'`, (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    inputPromo : (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO promo SET ?", data , (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            } )
        })
    },
    editPromo : (data, promoId) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE promo SET ? WHERE promo_id = ?", [data, promoId], (error, result) =>{
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deletePromo : (promoId) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM promo WHERE promo_id = ? ", promoId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}