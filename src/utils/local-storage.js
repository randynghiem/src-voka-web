const KEY = "randy-nghiem-voka-web";

/**
 * Get cached object from local storage
 * @returns Stored object if existing, null otherwise.
 */
export const getCache = () => {
  const cache = window.localStorage;
  const storedValue = cache.getItem(KEY);
  if (storedValue === null) return null;

  const storedObject = JSON.parse(storedValue);
  return storedObject;
};

/**
 * Cache an object into local storage
 * @param {object} obj - Object to be stored
 */
export const setCache = obj => {
  const cache = window.localStorage;
  const storedValue = JSON.stringify(obj);
  cache.setItem(KEY, storedValue);
};
