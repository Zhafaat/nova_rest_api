const WebTOken = require("../helper/webToken")

class LoginController {
    static async login(req, res, next){
        try {
            const body = req.body
            // console.log(Object.keys(body).length === 0)
            if (Object.keys(body).length !== 0) {
                if (body.username == 'novaAccount') {
                    if (body.password == 'novaPassword') {
                        const access_token = WebTOken.getToken(body)
                        // req.body.access_token = access_token
                        res.status(200).json({
                            message: 'Success Login',
                            access_token: access_token
                        })
                    } else {
                        throw {
                            status: 404,
                            msg: 'Wrong Password'
                        }
                    }
                } else {
                    throw {
                        status: 404,
                        msg: 'Wrong Username'
                    }
                }
            } else {
                throw {
                    status: 404,
                    msg: 'Please Login'
                }
            }
        } catch (error) {
            // console.log(error.stack.split("\n")[1])
            next(error)            
        }
    }
}

module.exports = LoginController