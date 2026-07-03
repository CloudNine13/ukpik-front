import { createContext } from 'react';
import type { CursorContextProps } from './types';

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export default CursorContext;
