export function parseText (text) {
  if(!text || !text.trim()){
    return null;
  }

  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g );
  return sentences.map(s => s.trim());
}
