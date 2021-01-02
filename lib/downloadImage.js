const fs = require('fs');
const axios = require('axios');
function downloadImage (url, image_path){
  axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),

);
}

exports.downloadImage = downloadImage
