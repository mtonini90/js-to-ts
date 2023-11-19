import {Equal} from '../../test';

/**
 * Replicates the JavaScript filter method of array
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
 *
 * TODO add check for any
 *
 * @example
 * ```ts
 * Filter<['a', true, 'b', false, false, 0], boolean> // [true, false, false]
 * Filter<[0], number> // [0]
 * Filter<[0], 1> // []
 * ```
 *
 * @alpha
 *
 * @typeParam L - List to filter
 * @typeParam V - Value to match
 * @returns Filtered list
 */
export type Filter<L extends unknown[], V> = L extends [infer C, ...infer R]
  ? C extends V
    ? [C, ...Filter<R, V>]
    : Filter<R, V>
  : [];

/**
 * Replicates the JavaScript revers method of array
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse}
 *
 * @example
 * ```ts
 * Reverse<[0, 1, 2, 3]> // [3, 2, 1, 0]
 * ```
 *
 * @typeParam L - List to reverse
 * @returns Reversed list
 */
export type Reverse<L extends unknown[]> = L extends [infer F, ...infer R] ? [...Reverse<R>, F] : L;

/**
 * Replicates the JavaScript join method of array
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join}
 *
 * @example
 * ```ts
 * Join<['a', 'b', 'c']> // 'a,b,c'
 * Join<['a', 'b', 'c'], '.'> // 'a.b.c'
 * Join<['a', 'b', 'c'], 1> // 'a1b1c'
 * Join<[string, ''], '.'> // `${string}.`
 * ```
 *
 * @typeParam L - Strings list
 * @typeParam S - Separator character; Default is ,
 * @returns Joined string
 */
export type Join<L extends string[], S extends string | number = ','> = L extends [
  infer F extends string,
  ...infer R extends string[],
]
  ? R extends []
    ? `${F}`
    : `${F}${S}${Join<R, S>}`
  : '';

/**
 * This is a private type, I don't want to give the ability to change the value of A
 *
 * @hidden
 * @typeParam L - List to watch
 * @typeParam E - Element to search
 * @typeParam A - Accumulator used to retrieve the index
 * @returns Element position
 */
type IndexOfImpl<L extends unknown[], E, A extends void[] = []> = L extends [infer F, ...infer R]
  ? Equal<E, F> extends true
    ? A['length']
    : IndexOfImpl<R, E, [void, ...A]>
  : -1;

/**
 * Replicates the JavaScript indexOf method of array
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 *
 * TODO add fromIndex
 *
 * @example
 * ```ts
 * IndexOf<[0, 1, 2, 3], 2> // 2
 * IndexOf<[0, 1, 2, 3], 7> // -1
 * IndexOf<[string, 1, any], any> // 2
 * ```
 *
 * @alpha
 *
 * @typeParam L - List to watch
 * @typeParam E - Element to search
 * @returns Element position
 */
export type IndexOf<L extends unknown[], E> = IndexOfImpl<L, E>;

/**
 * Replicates the JavaScript lastIndexOf method of array
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf}
 *
 * TODO add fromIndex
 *
 * @example
 * ```ts
 * LastIndexOf<[0, 0, 0, 0, 0, 6], 0> // 4
 * LastIndexOf<[any, string, 1, any], any> // 3
 * ```
 *
 * @alpha
 *
 * @typeParam L - List to watch
 * @typeParam E - Element to search
 * @returns Element position
 */
export type LastIndexOf<L extends unknown[], E> = L extends [...infer R, infer S]
  ? Equal<E, S> extends true
    ? R['length']
    : LastIndexOf<R, E>
  : -1;
