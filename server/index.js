import express from 'express';
import pino from 'pino';
import path from 'path';
import Flickr from 'flickrapi';
import compression from 'compression';

const app = express();
const log = pino();
const port = 4040;

const flickrOptions = {
  api_key: process.env.flickr_api_key || '',
  secret: process.env.flickr_secret || ''
}


app.use(compression()); //use compression
app.use('/public', express.static(path.join(__dirname, '../client/public/')))

const homePage = path.join(__dirname, '../client/index.html');

app.get('/', (req, res) => {
  res.sendFile(homePage);
})

app.get('/api', (req, res) => {
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
        return handleError(req, res, err);
      }
      res.json({
        success: true,
        result: parseResult(result)
      })
    });
  });
});

function parseResult(data){
  let photoData = data.photos.photo.map(photoData => {
    return {
      id: photoData.id,
      owner: {
        ownerId: photoData.owner,
        ownerName: photoData.ownername,
      },
      title: photoData.title,
      description: photoData.description,
      views: photoData.views,
      originalUrl: photoData.url_o,
      largeUrl: photoData.url_l
    }
  });
  return shuffle(photoData);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function handleError(req, res, err) {
  // Log and send status code
  log.error(new Error(err));
  res.status(500).json({
    success:false,
    reason: err
  })
}


app.listen(port, () => {
  log.info(`Port:${port} is now listening for requests`);
})
