const url = require('url');

export const fullUrl = req => {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl,
  });
};

export const handleError = (text, next) => {
  const err = new Error(text);
  err.status = 404;
  next(err);
};

export const port = '3000';
