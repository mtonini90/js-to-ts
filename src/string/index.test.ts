import {Length, Replace, ReplaceAll, Split} from '.';
import {Equal, Expect} from '../../test';

type SplitCases = [
  Expect<Equal<Split<'.a.b.c.', '.'>, ['', 'a', 'b', 'c', '']>>,
  Expect<Equal<Split<'.a.b.c.', ''>, ['.', 'a', '.', 'b', '.', 'c', '.']>>,
  Expect<Equal<Split<'.a.b.c.', 'd'>, ['.a.b.c.']>>,
  Expect<Equal<Split<'.a.b.c.', 'a'>, ['.', '.b.c.']>>,
  Expect<Equal<Split<'.a.b.c.', '.a'>, ['', '.b.c.']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
  Expect<Equal<Split<'.a.b.c.', '.a', 0>, []>>,
  Expect<Equal<Split<'.a.b.c.', '.', 2>, ['', 'a']>>,
  Expect<Equal<Split<'.a.b.c.', '.', 10>, ['', 'a', 'b', 'c', '']>>,
  Expect<Equal<Split<'.a.b.c.', '.', -10>, ['', 'a', 'b', 'c', '']>>,
  Expect<Equal<Split<'.a.b.c.', 'd', 1>, ['.a.b.c.']>>,
  Expect<Equal<Split<'.a.b.c.', 'a', 1>, ['.']>>,
  Expect<Equal<Split<'.a.b.c.', '.a'>, ['', '.b.c.']>>,
  Expect<Equal<Split<'', '', 5>, []>>,
  Expect<Equal<Split<string, 'whatever', 5>, string[]>>,
];

type ReplaceCases = [
  Expect<Equal<Replace<'.a.b.c.', '.', ''>, 'a.b.c.'>>,
  Expect<Equal<Replace<'.a. b .c . ', ' ', ''>, '.a.b .c . '>>,
  Expect<Equal<Replace<'.a. b .c . ', 'd', '$'>, '.a. b .c . '>>,
  Expect<Equal<Replace<'$a. b .c . ', '$', '.'>, '.a. b .c . '>>,
  Expect<Equal<Replace<'$a. b .c . ', '', ''>, '$a. b .c . '>>,
  Expect<Equal<Replace<' a. b .c . ', '.', ''>, ' a b .c . '>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
  Expect<Equal<Replace<'', '', '-'>, '-'>>,
];

type ReplaceAllCases = [
  Expect<Equal<ReplaceAll<'.a.b.c.', '.', ''>, 'abc'>>,
  Expect<Equal<ReplaceAll<'.a. b .c . ', ' ', ''>, '.a.b.c.'>>,
  Expect<Equal<ReplaceAll<'.a. b .c . ', 'd', '$'>, '.a. b .c . '>>,
  Expect<Equal<ReplaceAll<'$a. b .c . ', '$', '.'>, '.a. b .c . '>>,
  Expect<Equal<ReplaceAll<'$a. b .c . ', '', ''>, '$a. b .c . '>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
  Expect<Equal<ReplaceAll<' ', '', '-'>, ' '>>,
  Expect<Equal<ReplaceAll<'', '', '-'>, '-'>>,
];

type LengthCases = [
  Expect<Equal<Length<''>, 0>>,
  Expect<Equal<Length<'12345'>, 5>>,
  Expect<Equal<Length<'123 45'>, 6>>,
  Expect<Equal<Length<string>, 0>>,
  Expect<Equal<Length<'000000000000000000000000000000000000000000000'>, 45>>,
  // TODO
  //   Expect<
  //     Equal<
  //       Length<'0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'>,
  //       1000
  //     >
  //   >,
];
