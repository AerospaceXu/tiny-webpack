import fs from 'fs/promises';

import { encode } from './utils/encode';

const createAsset = async (filePath: string) => {
  try {
    const id = encode(filePath);
    const fileName = (filePath.match(/\/[^/]+$/g) || [''])[0].slice(1);
    const fileCode = await fs.readFile(filePath, 'utf-8');
    return {
      id,
      fileName,
      code: fileCode,
    };
  } catch (e) {
    console.error(`something wrong ${e}`);
  }
};
