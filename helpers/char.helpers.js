export function convertStringToInt(string){
  string = string.toLowerCase()
  result = 0
  for (const i in string){
    const value = string.charCodeAt(i) - '0'.charCodeAt(0) + 1;
    result += value;
  }
  return result
}