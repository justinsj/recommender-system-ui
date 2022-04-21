import {shuffle} from "../helpers/list.helpers";

const baseTasks = [
  {label: 'Refrigerator', value: 'refrigerator'},
]

export function getTasks(seed){
  return shuffle(baseTasks, seed);
}