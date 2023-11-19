import {Equal, Expect} from '../../test';
import {IsNegative, ParseInt, Addition, ToPositive} from '.';

type ToNumberCases = [
  Expect<Equal<ParseInt<'5'>, 5>>,
  Expect<Equal<ParseInt<''>, never>>,
  Expect<Equal<ParseInt<'-5'>, -5>>,
  Expect<Equal<ParseInt<string>, never>>,
  Expect<Equal<ParseInt<'0.5'>, 0>>,
  Expect<Equal<ParseInt<'-5.2'>, -5>>,
  Expect<Equal<ParseInt<'-5.2s'>, '-5.2s'>>,
  //   Expect<Equal<ToNumber<'1000000000000000'>, 100000>>,
];

type IsNegativeCases = [
  Expect<Equal<IsNegative<-5>, true>>,
  Expect<Equal<IsNegative<5>, false>>,
  Expect<Equal<IsNegative<0>, false>>,
  Expect<Equal<IsNegative<'-5'>, true>>,
  Expect<Equal<IsNegative<'5'>, false>>,
  Expect<Equal<IsNegative<'0'>, false>>,
  Expect<Equal<IsNegative<string>, never>>,
  Expect<Equal<IsNegative<string | string | string>, never>>,
  Expect<Equal<IsNegative<number>, never>>,
  Expect<Equal<IsNegative<number | number | number>, never>>,
];

type ToPositiveCases = [
  Expect<Equal<ToPositive<-5>, 5>>,
  Expect<Equal<ToPositive<-5 | -8>, 5 | 8>>,
  Expect<Equal<ToPositive<'-5' | -8>, 5 | 8>>,
  Expect<Equal<ToPositive<string | -8>, never>>,
  Expect<Equal<ToPositive<string | number>, never>>,
  Expect<Equal<ToPositive<string>, never>>,
  Expect<Equal<ToPositive<number>, never>>,
];

type SumCases = [
  Expect<Equal<Addition<0, 0>, 0>>,
  Expect<Equal<Addition<5, 0>, 5>>,
  //   Expect<Equal<Addition<1_000_000_000_000n, 1>, 10000000000001>>,
];
