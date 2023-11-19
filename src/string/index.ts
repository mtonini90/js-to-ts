/**
 * This is a private type, I don't want to give the ability to change the value of A
 *
 * @hidden
 * @typeParam S string
 * @typeParam D separator
 * @typeParam L limit
 * @typeParam A accumulator
 */
type SplitImpl<
  S extends string,
  D extends string,
  L extends number = -1,
  A extends string[] = [],
> = string extends S
  ? string[]
  : L extends A['length']
  ? A
  : S extends `${infer F}${D}${infer E}`
  ? SplitImpl<E, D, L, [...A, F]>
  : D extends ''
  ? A
  : [...A, S];

/**
 * Replicate the javascript split method of string
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 *
 *  @example
 * ```ts
 * Split<'.a.b.c.', '.'> // ['', 'a', 'b', 'c', '']
 * Split<'.a.b.c.', ''> // ['.', 'a', '.', 'b', '.', 'c', '.']
 * Split<string, 'whatever'> // string[]
 * Split<'.a.b.c.', '.', 2> // ['', 'a']
 * ```
 *
 * @typeParam S - String to split
 * @typeParam D - String separator
 * @typeParam L - Limit on the number of substrings to be included in the array; Default -1
 * @returns Splitted string
 */
export type Split<S extends string, D extends string, L extends number = -1> = SplitImpl<S, D, L>;

/**
 * This is a private type, I don't want to give the ability to change the value of M
 *
 * @hidden
 * @typeParam S - string
 * @typeParam P - pattern
 * @typeParam R - replacement
 * @typeParam M - multiple replace
 * @returns string
 */
type ReplaceImpl<
  S extends string,
  P extends string,
  R extends string,
  M extends boolean,
> = S extends ''
  ? R
  : P extends ''
  ? S
  : S extends `${infer S1}${P}${infer S2}`
  ? `${S1}${R}${M extends true ? ReplaceImpl<S2, P, R, M> : S2}`
  : S;

/**
 * Replicate the javascript replace method of string
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace}
 *
 * @example
 * ```ts
 * Replace<'.a.b.c.', '.', ''> // 'a.b.c.'
 * Replace<'', '', '-'> // '-'
 * ```
 *
 * @typeParam S - String to check
 * @typeParam P - String to find for replacement
 * @typeParam R - String to use for replacement
 * @returns String with replaced characters
 */
export type Replace<S extends string, P extends string, R extends string> = ReplaceImpl<
  S,
  P,
  R,
  false
>;

/**
 * Replicate the javascript replaceAll method of string
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceall}
 *
 * ```ts
 * ReplaceAll<'.a.b.c.', '.', ''> // 'abc'
 * ReplaceAll<'.a. b .c . ', 'd', '$'> // '.a. b .c . '
 * ```
 *
 * @typeParam S - String to check
 * @typeParam P - String to find for replacement
 * @typeParam R - String to use for replacement
 * @returns String with replaced characters
 */
export type ReplaceAll<S extends string, P extends string, R extends string> = ReplaceImpl<
  S,
  P,
  R,
  true
>;

/**
 * Replicate the javascript length property of string
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length}
 *
 * ```ts
 * Length<''> // 0
 * Length<'12345'> // 5
 * Length<string> // 0
 * ```
 *
 * @typeParam S - String from which to retrieve the length
 * @returns Length of the string
 */
export type Length<S extends string> = string extends S ? 0 : Split<S, ''>['length'];
