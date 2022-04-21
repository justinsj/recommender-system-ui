import {shuffle} from "../helpers/list.helpers";

export const Interfaces = {
  control: 'control',
  small_short: 'small_short',
  large_short: 'large_short',
  small_long: 'small_long',
  large_long: 'large_long',
}

export const InterfaceOrdering = [
  Interfaces.control,
  Interfaces.small_short,
  Interfaces.large_short,
  Interfaces.small_long,
  Interfaces.large_long,
]

const baseInterfaces = [
  {label: 'Control', value: Interfaces.control},
  {label: 'Small Image, Short Text', value: Interfaces.small_short},
  {label: 'Small Image, Long Text', value: Interfaces.small_long},
  {label: 'Large Image, Short Text', value: Interfaces.large_short},
  {label: 'Large Image, Long Text', value: Interfaces.large_long},
];

export function getInterfaces(seed){
  const array = JSON.parse(JSON.stringify(baseInterfaces));
  return shuffle(array, seed);
}