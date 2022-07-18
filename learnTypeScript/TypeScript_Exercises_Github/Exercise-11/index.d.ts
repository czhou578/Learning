declare module 'str-utils' {
  // export const ...
  // export function ...
  type StrUtil = (input: string) => string
  export const strReverse: StrUtil
  export const strToLower: StrUtil
  export const strToUpper: StrUtil
  export const strRandomize: StrUtil
  export const strInvertCase: StrUtil
}

