import {Replace} from '../string';

/**
 * Replicate the javascript parseint method of number
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseint}
 *
 * @example
 * ```ts
 * ParseInt<'5'> // 5
 * ParseInt<'-5.2'> // -5
 * ParseInt<''> // never
 * ```
 *
 * @typeParam S - String to transform
 * @returns Transformed string
 */
export type ParseInt<S extends string> = S extends ''
  ? never
  : string extends S
  ? never
  : S extends `${infer N extends number}.${number}`
  ? N
  : S extends `${infer N extends number}`
  ? N
  : S;

/**
 * Check if a number or a string number is negative.
 *
 * @remark
 * This is only a utils type used in combination whit oters types
 *
 * @example
 * ```ts
 * IsNegative<-5> // true
 * IsNegative<'-5'> // true
 * IsNegative<5> // false
 * ```
 *
 * @typeParam N - Number or string number
 * @returns Returns if N is a negative number
 */
export type IsNegative<N extends number | string> = number extends N
  ? never
  : string extends N
  ? never
  : `${N}` extends `-${number}`
  ? true
  : false;

/**
 * Transform a negative number into a positive one
 *
 * @remark
 * This is only a utils type used in combination whit oters types
 *
 * @typeParam N - Number or string number
 * @returns Number or string number transformed into a positive one
 */
export type ToPositive<N extends number | string> = IsNegative<N> extends never
  ? never
  : ParseInt<Replace<`${N}`, '-', ''>>;

/**
 * This is a private type, I don't want to give the ability to change the value of A or B
 *
 * @hidden
 *
 * @typeParam X - Number
 * @typeParam Y - Number
 * @typeParam A - Accumulator for X
 * @typeParam B - Accumulator for Y
 * @returns The length of A + B
 */
type AdditionImpl<
  X extends number,
  Y extends number,
  A extends void[] = [],
  B extends void[] = [],
> = X extends A['length']
  ? Y extends B['length']
    ? [...A, ...B]['length']
    : AdditionImpl<X, Y, A, [...B, void]>
  : AdditionImpl<X, Y, [...A, void], B>;

/**
 * Addition two non negative numbers
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition}
 *
 * TODO should work with negative numbers and very big numbers
 *
 * 1 + -1 = 0
 *
 * -1 + -1 = -2
 *
 * @example
 * ```ts
 * Addition<0, 0> // 0
 * Addition<5, 0> // 5
 * ```
 *
 * @typeParam X - Number
 * @typeParam Y - Number
 * @returns The sum of X and Y
 *
 */
export type Addition<X extends number, Y extends number> = AdditionImpl<X, Y>;
