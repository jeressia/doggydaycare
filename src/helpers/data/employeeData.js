import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const firebaseUrl = firebaseConfig.apiKeys.databaseURL;

const getMyEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/employees.json`)
    .then((res) => {
      const employees = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        employees.push(res.data[fbKey]);
      });
      resolve(employees);
    })
    .catch(err => reject(err));
});

export default { getMyEmployees };
