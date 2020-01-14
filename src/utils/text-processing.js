export function parseText (text) {
  if(!text || !text.trim()){
    return null;
  }

  // eslint-disable-next-line
  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g );
  return sentences.map(s => s.trim());
}
