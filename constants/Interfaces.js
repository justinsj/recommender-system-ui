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

function shuffle(array, seed) {                // <-- ADDED ARGUMENT
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE

    // And swap it with the current element.
    swap(array, m, i);
    ++seed                                     // <-- ADDED LINE
  }

  return array;
}

function swap(array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function random(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function getInterfaces(seed){
  return shuffle(baseInterfaces, seed);
}