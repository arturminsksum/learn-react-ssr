const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(info => {
  return `${info.message} : ${info.timestamp}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new winston.transports.File({ filename: './logger/logger.log' }),
  ],
});

module.exports = logger;
