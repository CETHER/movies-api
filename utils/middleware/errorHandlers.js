const boom = require('@hapi/boom');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    //spreed operator porque llegan más parámetros en el error boom
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err)
}

//Cuándo el error no sea de tipo boom
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

function errorHandler(err, req, res, next) {
  const { output: { statusCode, payload } } = err;

  // res.status(err.status || 500);
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
};