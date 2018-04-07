import citiesApi from '../api/cities/index';

const routes = server => {
  citiesApi(server);
}

export default routes;
