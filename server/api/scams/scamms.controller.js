export const getScammsByCity = (req, res, next) => {
  console.log('---- scams controller called');
  if (!params || !params.cityId) {
    loggerT.error('Invalid request Missing term');
    return next(new errors.MissingParameterError('Missing term'));
  }

  return rentRepo.find({
      cityId: params.cityId,
    })
    .then(docs => {
      res.send(docs);
      return next(docs);
    })
    .catch(err => {
      loggerT.error(err);
      return next(new errors.RestError(err.errors.name.message));
    })
  ;
};