
declare module 'stats' {
  type Comparator<T> = (a: T, b: T) => number

  type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number

  export const getMaxIndex: GetIndex
  export const getMinIndex: GetIndex
  export const getMedianIndex: GetIndex

  type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null

  export const getMaxElement: GetElement
  export const getMedianElement: GetElement
  export const getMinElement: GetElement

  export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null

  // export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
  // export function getMaxElement<T>(input: T[], comparator: Comparator<T, T>): number;
  // export function getAverageValue<T>(input: T[], comparator: Comparator<T, T>): number;
  // export function getMedianElement<T>(input: T[], comparator: Comparator<T, T>): number;
  // export function getMedianIndex<T>(input: T[], comparator: Comparator<T, T>): number;
  // export function getMinIndex<T>(input: T[], comparator: Comparator<T, T>): number;

}
