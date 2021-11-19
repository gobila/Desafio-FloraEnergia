export function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  /* Retore um array contendo todas as palavras no array de entrada "birds"
  a nao ser que a palavra esteja dentro do array "geese" */
  const result = birds.filter((bird) => !geese.includes(bird));
  return result;
}
export function validateWord(s) {
  // Codigo aqui
  const array = s.toLowerCase().split('');
  const novaArr = array.filter((este, i) => array.indexOf(este) !== i);
  const result = array.filter((i) => !novaArr.includes(i));
  if (result.length > 0) {
    return false;
  }

  return true;
}
