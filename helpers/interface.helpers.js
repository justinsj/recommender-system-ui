import {InterfaceOrdering} from './../constants/Interfaces';

export function getInterfaceIndex(interfaces, interfaceId) {
  return interfaces.map(opt=>opt.value).indexOf(interfaceId)
}

export function getNextIndex(interfaces, interfaceId){
  const interfaceIndex = getInterfaceIndex(interfaces, interfaceId);
  const nextIndex = (interfaceIndex + 1) % interfaces.length;
  return nextIndex;
}
