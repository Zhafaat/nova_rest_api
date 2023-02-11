const {sequelize} = require('../models')


class TransaksisController {
    static async readAllTransaksi(req, res, next){
        try {
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id ;`) 
            res.status(200).json(data[0])
        } catch (error) {
            next(error)          
        }
    }

    static async readOneTransaksi(req, res, next){
        try {
            const id = req.params.id
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id 
            where t.id = ${id};`)
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

    static async readTransaksiInMonth(req, res, next){
        try {
            const month = req.body.month
            const data = await sequelize.query(`select t.id , k.nama , p.harga , t.tanggal_transaksi , t.stock_keluar , t.total_harga  from transakses t 
            join products p on t.product_id = p.id 
            join kategoris k on p.kategori_id = k.id 
            where month(t.tanggal_transaksi) = ${month};`)
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

module.exports = TransaksisController