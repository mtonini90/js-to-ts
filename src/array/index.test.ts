import {Filter, IndexOf, Join, LastIndexOf, Reverse} from '.';
import {Equal, Expect} from '../../test';

type FilterCases = [
  Expect<Equal<Filter<['a', true, 'b', false, false, 0], boolean>, [true, false, false]>>,
  Expect<Equal<Filter<['a', true, 'b', false, false, 0], string>, ['a', 'b']>>,
  Expect<Equal<Filter<['a', true, 'b', false, false, 0], 'a'>, ['a']>>,
  Expect<Equal<Filter<[string, string, number], string>, [string, string]>>,
  Expect<Equal<Filter<[], boolean>, []>>,
  Expect<Equal<Filter<[0], number>, [0]>>,
  Expect<Equal<Filter<[0], 1>, []>>,
];

type ReverseCases = [
  Expect<Equal<Reverse<[0, 1, 2, 3]>, [3, 2, 1, 0]>>,
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<[any]>, [any]>>,
  Expect<Equal<Reverse<any[]>, any[]>>,
];

type JoinCases = [
  Expect<Equal<Join<['a', 'b', 'c'], '.'>, 'a.b.c'>>,
  Expect<Equal<Join<['a', '0', 'c'], '.'>, 'a.0.c'>>,
  Expect<Equal<Join<['0'], '.'>, '0'>>,
  Expect<Equal<Join<['a', 'b', 'c'], 1>, 'a1b1c'>>,
  Expect<Equal<Join<['a', 'b', 'c']>, 'a,b,c'>>,
  Expect<Equal<Join<[''], '.'>, ''>>,
  Expect<Equal<Join<['', ''], '.'>, '.'>>,
  Expect<Equal<Join<['a'], 'b'>, 'a'>>,
  Expect<Equal<Join<[string, ''], '.'>, `${string}.`>>,
  Expect<Equal<Join<[string], '.'>, string>>,
];

type IndexOfCases = [
  Expect<Equal<IndexOf<[0, 1, 2, 3], 2>, 2>>,
  Expect<Equal<IndexOf<[0, 1, 2, 3], 7>, -1>>,
  Expect<Equal<IndexOf<[], 7>, -1>>,
  Expect<Equal<IndexOf<[number, string, 3], string>, 1>>,
  Expect<Equal<IndexOf<[string, 1, any], any>, 2>>,
];

type LastIndexOfCases = [
  Expect<Equal<LastIndexOf<[0, 1, 2, 3], 2>, 2>>,
  Expect<Equal<LastIndexOf<[0, 1, 2, 3], 7>, -1>>,
  Expect<Equal<LastIndexOf<[], 7>, -1>>,
  Expect<Equal<LastIndexOf<[number, string, 3], string>, 1>>,
  Expect<Equal<LastIndexOf<[string, 1, any], any>, 2>>,
  Expect<Equal<LastIndexOf<[any, string, 1, any], any>, 3>>,
  Expect<Equal<LastIndexOf<[0, 0, 0, 0, 0, 6], 0>, 4>>,
];
