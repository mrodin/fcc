// https://www.freecodecamp.org/challenges/convert-html-entities

function convertHTML(str) {
  const CHAR_MAP = { "&" : "&​amp;", "<" : "&​lt;", ">" : "&​gt;", "\"" : "&​quot;", "'" : "&​apos;" };

  let result = str.replace(/[&<>"']/g, c => CHAR_MAP[c]);

  return result;
}

convertHTML("Dolce & Gabbana");