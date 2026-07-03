import { useState, type ReactNode } from 'react';
import type { CursorType } from './types';
import CursorContext from './CursorContext';

const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<CursorType>('default');
  const [text, setText] = useState<string>('');

  const setCursor = (newType: CursorType, newText: string = '') => {
    setType(newType);
    setText(newText);
  };

  return (
    <CursorContext.Provider value={{ type, text, setCursor }}>{children}</CursorContext.Provider>
  );
};

export default CursorProvider;
