Static Import :
 The module is loaded immediately when the file starts executing.
import { add } from './math.js';

Dynamic Import :
The module is loaded only when needed during runtime.
const module = await import('./math.js');