export const convertToUrl = (link, params) => {
  var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return link + '?' + queryString;
}