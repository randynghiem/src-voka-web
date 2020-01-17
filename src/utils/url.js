/**
 * return a full URL from its root link and params object
 * @param {*} link root link
 * @param {*} params URL params to be converted
 */
export const convertToUrl = (link, params) => {
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return link + '?' + queryString;
}

/**
 * to extract value of named parameter from a given link
 * @param {*} link Link to be extracted
 * @param {*} name name of the parameter
 */
export function getUrlParameter(link, name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(link);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};