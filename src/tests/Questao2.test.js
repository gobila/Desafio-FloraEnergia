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
  test('2.1 Checa se retorna dado certo', () => {
    const res1 = validateWord('abcabc');
    expect(res1).toEqual(true);
  });

  test('2.2 Checa se retorna dado certo', () => {
    const res1 = validateWord('Abcabc');
    expect(res1).toEqual(true);
  });

  test('2.3 Checa se retorna dado certo', () => {
    const res1 = validateWord('abc123');
    expect(res1).toEqual(true);
  });

  test('2.4 Checa se retorna dado certo', () => {
    const res1 = validateWord('abcabcd');
    expect(res1).toEqual(false);
  });

  test('2.5 Checa se retorna dado certo', () => {
    const res1 = validateWord('abc!abc!');
    expect(res1).toEqual(true);
  });

  test('2.6 Checa se retorna dado certo', () => {
    const res1 = validateWord('abc:abc');
    expect(res1).toEqual(false);
  });
});
