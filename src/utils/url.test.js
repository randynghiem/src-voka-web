import * as urlUtils from "./url";
/**
 * Test case for url-based methods
 */
describe("utils/url.js", () => {

  describe("convertToUrl", () => {
    test("should return the correct formated URL", () => {
      const link = "https://randynghiem.github.io";
      const params = { key: 'value' };  
      expect(urlUtils.convertToUrl(link, params)).toEqual("https://randynghiem.github.io?key=value");
    });
  });

  describe('getUrlParameter', () => {
    test('should return the correct value when the param is present', () => {
      const link = "https://randynghiem.github.io?k1=v1&k2=v2";
      const key = 'k1';
      expect(urlUtils.getUrlParameter(link, key)).toEqual('v1');
    });

    test('should return null when the param is missing', () => {
      const link = "https://randynghiem.github.io?k1=v1&k2=v2";
      const key = 'k3';
      expect(urlUtils.getUrlParameter(link, key)).toBeNull();
    });

  });
  
});
