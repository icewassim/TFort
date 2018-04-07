import scammsAPI from '../api/scams/index';

const routes = server => {
  scammsAPI(server);
}

export default routes;
