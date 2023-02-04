const {sequelize} = require('../models')


class KategorisController {
    static async readAllStockProduct(req, res, next){
        try {
            const data = await sequelize.query(`select k.id , k.nama , s.stock from kategoris k 
            join products p on k.id = p.kategori_id  
            join stocks s on p.id = s.product_id; `)
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "bad request"})        
        }
    }

    static async readOneStockProduct(req, res, next){
        try {
            const id = req.params.id;
            const data = await sequelize.query(`select k.id , k.nama , s.stock from kategoris k 
            join products p on k.id = p.kategori_id  
            join stocks s on p.id = s.product_id 
            where k.id = ${id}; `)
            res.status(200).json(data[0])
        } catch (error) {
          console.log(error)
          res.status(400).json({message: 'bad request'})  
        }
    }
}

module.exports = KategorisController