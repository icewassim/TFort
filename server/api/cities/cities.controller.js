import cityRepo from '../../models/city.model';

export const getCityInfos = ({ params }, res, next) => {
  if (!params || !params.name) {
    loggerT.error('Invalid request Missing term');
    return next(new errors.MissingParameterError('Missing term'));
  }

  return cityRepo.findOne({
      name: params.name,
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

export const addCity = ({ params }, res, next) => {
  if (!params || !params.name) {
    loggerT.error('Invalid request Missing term');
    return next(new errors.MissingParameterError('Missing term'));
  }

  const city = new cityRepo(params);

  return city.save({
      params,
    })
    .then(docs => {
      res.send(docs);
      return next(docs);
    })
    .catch(err => {
      loggerT.error(err);
      return next(new errors.RestError(err.errors.name.message));
    })
  };
  ;
