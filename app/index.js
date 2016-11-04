import express from 'express';
import pino from 'pino';
import Flickr from 'flickrapi';

const app = express();
const log = pino();
const port = 4040;

const flickrOptions = {
  api_key: process.env.flickr_api_key,
  secret: process.env.flickr_secret
}

app.get('/', (req, res) => {
  Flickr.tokenOnly(flickrOptions, (err, flickr) => {
    if (err) {
      handleError(req, res, err);
    }
    // Make request for images
    flickr.photos.search({
      tags: 'photography,art,amateur',
      page: 1,
      per_page: 150,
      sort: 'date-posted-desc',
      extras: "description,owner_name,views,url_m,url_l,url_o"
    }, (err, result) => {
      if (err) {
        handleError(req, res, err);
      }
      res.json({
        success: true,
        result
      })
    });
  });
});

function handleError(req, res, err) {
  // Log and send status code
  pino.error(new Error(err));
  res.status(500).json({
    success:false,
    reason: err
  })
}


app.listen(port, () => {
  log.info(`Port:${port} is now listening for requests`);
})
