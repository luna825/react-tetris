import { blockTypes, StorageKey } from './const';

export function getNextType(){
  const len = blockTypes.length
  return blockTypes[Math.floor(Math.random() * len)]
}