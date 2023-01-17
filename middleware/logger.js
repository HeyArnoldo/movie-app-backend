const moment = require("moment")

const logger = (req, res, next) => {
    console.log(`${req.method} on ${req.protocol}://${req.get("host")}${req.originalUrl} Time=${moment().format()} Request=${req.body}`)
    next()
}

module.exports = logger