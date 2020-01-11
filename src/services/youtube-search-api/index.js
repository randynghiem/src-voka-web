/**
 * More details about API search
 * https://developers.google.com/youtube/v3/docs/search/list#parameters
 */
import fetch from 'isomorphic-unfetch';
import { convertToUrl } from '../../utils/url';

export const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const YoutubeSearch = (options = {}) => new Promise((resolve, reject) => {
  if (!options.key || !options.q || !options.part || !options.type) {
    reject(new Error('Please make sure that the required fields are inserted'));
  }

  const link = convertToUrl(ROOT_URL, options);

  fetch(link)
    .then((response) => resolve(response.json()))
    .catch(reject);
});

export default YoutubeSearch;