/** *
  * Optical Character Recognition
  * Credit: ibnusyawall
  * pliese don't delete credit author.
  */

const tesseract = require("node-tesseract-ocr")

const readTextInImage = (buffer) => {
    return new Promise((resolve, reject) => {
        const config = {
            lang: "eng",
            oem: 1,
            psm: 3,
        }
        tesseract.recognize(buffer, config)
            .then(result => {
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = readTextInImage
