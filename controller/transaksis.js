const {sequelize} = require('../models')


class TransaksisController {
    static async readAllTransaksi(req, res, next){
        try {
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id ;`) 
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'bad request'})          
        }
    }

    static async readOneTransaksi(req, res, next){
        try {
            const id = req.params.id
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id 
            where t.id = ${id};`)
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'bad request'})            
        }
    }

    static async readTransaksiInMonth(req, res, next){
        try {
            const month = req.body.month
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id 
            where month(t.tanggal_transaksi) = ${month};`)
            res.status(200).json(data[0])
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'bad request'})
        }
    }
}

module.exports = TransaksisController