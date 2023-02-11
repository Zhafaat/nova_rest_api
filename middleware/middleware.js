class middleware {
    static errorHandler(err, req, res, next){
        if (err.status) {
            res.status(err.status).json({message: err.msg})
        } else if (err.name == 'SequelizeDatabaseError') {
            res.status(400).json({message: err.message})
        } else {
            res.status(500).json({message: 'internal server error'})
        }
    }
}

module.exports = middleware