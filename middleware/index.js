const WebTOken = require("../helper/webToken")

class middleware {
    static errorHandler(err, req, res, next){
        if (err.status) {
            res.status(err.status).json({message: err.msg})
        } else if (err.name == 'SequelizeDatabaseError' || err.name == 'SequelizeConnectionRefusedError') {
            res.status(400).json({
                name: err.name,
                message: err.message,
            })
        } else if (err.name == 'TypeError') {
            res.status(500).json({
                message: err.message,
                location: err.stack.split("\n")[1]
            })
        } else {
            res.status(500).json({message: 'internal server error'})
        }
    }

    static async autentication(req, res, next) {
        try {
            const access_token = req.headers.access_token
            const decode = await WebTOken.hasToken(access_token)
            if (decode) {
                next()
            } else {
                throw {
                    status: 401,
                    msg: 'Please Login'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = middleware