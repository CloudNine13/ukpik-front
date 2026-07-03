export type CursorType = 'default' | 'text' | 'hidden';

export type CursorContextProps = {
  type: CursorType;
  text: string;
  setCursor: (type: CursorType, text?: string) => void;
};
