const {sequelize} = require('../models')

class ProductsController {
    static async readAllProductKategoris(req, res, next){
        try {
            const data = await sequelize.query(`select p.id , k.nama , p.tahun_keluaran , p.warna , p.harga  from products p 
            join kategoris k on p.kategori_id = k.id ;`)
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'bad request'})            
        }
    }

    static async readOneProductKategoris(req, res, next){
        try {
            const id = req.params.id
            const data = await sequelize.query(`select p.id , k.nama , p.tahun_keluaran , p.warna , p.harga  from products p 
            join kategoris k on p.kategori_id = k.id 
            where p.id = ${id} ;`)
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'bad request'})            
        }
    }
}

module.exports = ProductsController
