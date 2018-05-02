import exios from 'axios';

export const postScam = (name, scamContent) => {
  console.log('posting enw scam', scamContent);
  if (!name || !scamContent || !scamContent.title || !scamContent.description) {
    return console.error('Missing Params', name, scamContent);
  }

  const content = {
    name,
    newScam: {
      title: scamContent.title,
      description: scamContent.description,
      prevImg: scamContent.prevImg,
    },
  };

  const requestApi = exios
    .post('http://localhost:3000/city/scams', content);

  return {
    type: 'POST_NEW',
    payload: requestApi,
  };
};
