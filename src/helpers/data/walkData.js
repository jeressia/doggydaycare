import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const firebaseUrl = firebaseConfig.apiKeys.databaseURL;

const getMyWalks = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        walks.push(res.data[fbKey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const deleteWalk = walkId => axios.delete(`${firebaseUrl}/walks/${walkId}.json`);

export default { getMyWalks, deleteWalk };
