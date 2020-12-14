import path from 'path';

export const encode = (filePath: string): number => {
  if (!filePath.startsWith('/')) {
    throw new Error('Please use absolute path!!!');
  }
  const wholePath = path.join(filePath);
  let hash = 1315423911;
  let i: number;
  let ch: number;
  for (i = wholePath.length - 1; i >= 0; i--) {
    ch = wholePath.charCodeAt(i);
    hash ^= (hash << 5) + ch + (hash >> 2);
  }
  return hash & 0x7fffffff;
};
