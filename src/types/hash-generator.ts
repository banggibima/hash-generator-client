export interface HashGeneratorState {
  textInput: string;
  hashAlgorithm: string;
  hashedText: string;
  isHashCopied: boolean;
  isHashing: boolean;
  setTextInput: (val: string) => void;
  setHashAlgorithm: (val: string) => void;
  setHashedText: (val: string) => void;
  setIsHashCopied: (val: boolean) => void;
  setIsHashing: (val: boolean) => void;
  clearAll: () => void;
}
