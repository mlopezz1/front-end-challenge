export const applyIfSome = <T, R>(
  func: (data: T) => R,
  data: T | null | undefined,
) => {
  if (data === null || data === undefined) return undefined;
  return func(data);
};
