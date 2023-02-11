const {sequelize} = require('../models')

class ProductsController {
    static async readAllProductKategoris(req, res, next){
        try {
            const data = await sequelize.query(`select p.id , k.nama , p.tahun_keluaran , p.warna , p.harga  from products p 
            join kategoris k on p.kategori_id = k.id ;`)
            res.status(200).json(data[0])
        } catch (error) {
            next(error)            
        }
    }

    static async readOneProductKategoris(req, res, next){
        try {
            const id = req.params.id
            const data = await sequelize.query(`select p.id , k.nama , p.tahun_keluaran , p.warna , p.harga  from products p 
            join kategoris k on p.kategori_id = k.id 
            where p.id = ${id} ;`)
            if (!data[0].length) {
                throw {
                    status: 404,
                    msg: 'Not Found'
                }
            } else {
                res.status(200).json(data[0])
                
            }
        } catch (error) {
            next(error)            
        }
    }
}

module.exports = ProductsController
