/* eslint-disable jest/no-identical-title */
import { gooseFilter, validateWord } from '../../Questao2';

describe('Questaoi 1 Testes', () => {
  test('Checa se retorna dado certo', () => {
    const res1 = gooseFilter([
      'Mallard',
      'Hook Bill',
      'African',
      'Crested',
      'Pilgrim',
      'Toulouse',
      'Blue Swedish',
    ]);
    expect(res1).toEqual(
      expect.arrayContaining([
        'Mallard',
        'Hook Bill',
        'Crested',
        'Blue Swedish',
      ]),
    );
  });
  test('Checa se retorna dado certo', () => {
    const res1 = gooseFilter([
      'Mallard',
      'Barbary',
      'Hook Bill',
      'Blue Swedish',
      'Crested',
    ]);
    expect(res1).toEqual(
      expect.arrayContaining([
        'Mallard',
        'Barbary',
        'Hook Bill',
        'Blue Swedish',
        'Crested',
      ]),
    );
  });
  test('Checa se retorna dado certo', () => {
    const res1 = gooseFilter([
      'African',
      'Roman Tufted',
      'Toulouse',
      'Pilgrim',
      'Steinbacher',
    ]);
    expect(res1).toEqual(expect.arrayContaining([]));
  });
});

describe('Questaoi 2 Testes', () => {
  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('abcabc');
    expect(res1).toEqual(true);
  });

  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('Abcabc');
    expect(res1).toEqual(true);
  });

  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('abc123');
    expect(res1).toEqual(true);
  });

  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('abcabcd');
    expect(res1).toEqual(false);
  });

  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('abc!abc!');
    expect(res1).toEqual(true);
  });

  test('Checa se retorna dado certo', () => {
    const res1 = validateWord('abc:abc');
    expect(res1).toEqual(false);
  });
});
