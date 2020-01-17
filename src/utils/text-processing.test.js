import * as TP from "./text-processing";

describe("text-processing.js", () => {
  test("should return an array of sentences", () => {
    const text =
      'Dazu kommt ein sogenannter "Mechanismus für einen gerechten Übergang". Von der Leyen will damit Regionen, die beispielsweise stark von der Kohleverstromung abhängen, beim Strukturwandel helfen. Am Dienstagnachmittag diskutiert das Europaparlament, das zuletzt reichlich reißerisch den "Klimanotstand" ausgerufen hatte.';
    const expected = [
      'Dazu kommt ein sogenannter "Mechanismus für einen gerechten Übergang".',
      'Von der Leyen will damit Regionen, die beispielsweise stark von der Kohleverstromung abhängen, beim Strukturwandel helfen.',
      'Am Dienstagnachmittag diskutiert das Europaparlament, das zuletzt reichlich reißerisch den "Klimanotstand" ausgerufen hatte.'
    ];

    expect(TP.parseText(text)).toEqual(expected);
  });

  test('should return null when the input is blank', () => {
    const text = '    ';
    expect(TP.parseText(text)).toBeNull();
  })
  
});
