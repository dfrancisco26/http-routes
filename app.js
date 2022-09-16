import cats from './lib/routes/cats.js';
import candies from './lib/routes/candies.js';
import sauces from './lib/routes/sauces.js';
import notFound from './lib/not-found.js';
import bodyParser from './lib/bodyParser.js';

const logPrefix = (...args) => console.log('[SERVER]', ...args);

const routes = {
  candies,
  cats,
  sauces
};

export default async function (req, res) {
  const httpMethod = req.method.toLowerCase();
  logPrefix('Method: ', httpMethod);
  const parts = req.url.split('/');
  logPrefix('Parts:', (parts.length && parts[1] === 'api'));
  if (parts.length && parts[1] === 'api') {
    req.body = await bodyParser(req);
    console.log(req.body);
    const resourcePath = parts[parts.length - 1];
    const resource = routes[resourcePath];
    logPrefix('resource: ', resource);
    const handler = resource[httpMethod];
    if (!handler) {
      notFound(req, res);
    } else {
      handler(req, res);
    }
  } else {
  notFound(req, res);
  }
}

// if (httpMethod !== 'get' || 'post' )