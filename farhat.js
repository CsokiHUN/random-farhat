const gis = require('g-i-s')

module.exports.randomFarhat = (cb) => {
    const promise = new Promise((resolve, reject) => {
        gis('farhát', (err, result) => {
            if (err) {
                reject(err)
            }
        
            const random = result[Math.floor(Math.random() * result.length)]
            
            resolve(random)
        })
    })
    return promise
}