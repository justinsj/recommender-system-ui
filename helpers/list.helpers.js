export function getSlice(results, idx, mod) {
  return results.filter((item, i) => i % mod == idx);
}