import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
// dirname refers to utils dir, sadly it won't work
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
