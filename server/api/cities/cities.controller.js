import CityRepo from '../../models/city.model';

export const getCityInfos = ({ params }, res, next) => {
  if (!params || !params.name) {
    loggerT.error('Invalid request Missing term');
    return next(new errors.MissingParameterError('Missing term'));
  }

  return CityRepo.findOne({
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

  const city = new CityRepo(params);
  return city.save({
    params,
  })
    .then(doc => {
      res.send(doc);
      return next(doc);
    })
    .catch(err => {
      loggerT.error(err);
      return next(new errors.RestError(err.errors.name.message));
    })
  ;
};

export const addScam = ({ params }, res, next) => {
  if (!params || !params.name || !params.newScam) {
    loggerT.error('Invalid request Missing content', params);
    return next(new errors.MissingParameterError('Missing content'));
  }

  //const cityR = new CityRepo(params);
  return CityRepo.findOneAndUpdate(
    { name: params.name },
    {
      $addToSet: { scams: params.newScam },
    })
    .then(doc => {
      console.log('===> city saved', doc);
      return res.send(doc);
    })
    .catch(err => {
      loggerT.error(err);
      return next(new errors.RestError(err.errors.name.message));
    })
  ;
};
