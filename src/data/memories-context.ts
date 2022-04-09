import React from 'react';

export interface Memory{
  id: string;
  imagePath: string;
  title: string;
  type: 'good' | 'bad';
  base64url: string;
  lati: number;
  long: number;
}

const MemoriesContext = React.createContext<{
  memories: Memory[];
  addMemory: (path: string, base64url: string, title: string, type: 'good'|'bad', lati:number, long:number) => void;
  initContext: () => void;
}>({
  memories: [],
  addMemory: () => {},
  initContext: () => {},
});

export default MemoriesContext;
