import axios from 'axios';
/**
 * https://voka.azurewebsites.net/api/v1/sets/a1/1
 * @param {string} level current level of a set
 * @param {number} id identity of a set
 */
export const getSetById = (level, id) => new Promise((resolve, reject) => {
  const url = `https://voka.azurewebsites.net/api/v1/sets/${level}/${id}`;
  axios
    .get(url)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err);
    });
});

