export const clone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Creates a random ID of a given length
 * @param {number} length
 * @return {string}
 */
export function createId(length = 16) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }
  return result;
}