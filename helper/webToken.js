const jwt = require('jsonwebtoken')

class WebTOken {
    static getToken(payload){
        const token = jwt.sign(payload, 'zhafaat')
        return token
    }

    async hasToken(token){
        try {
             const decode = await jwt.verify(token, 'zhafaat')
             return decode                           
        } catch (error) {
            throw {
                status: 401,
                msg: 'Please Login'
            }
        }
    }
}

module.exports = WebTOken