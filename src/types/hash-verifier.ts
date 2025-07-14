export interface HashVerifierState {
  textInput: string;
  hashInput: string;
  hashAlgorithm: string;
  hashedText: string;
  isHashing: boolean;
  setTextInput: (val: string) => void;
  setHashInput: (val: string) => void;
  setHashAlgorithm: (val: string) => void;
  setHashedText: (val: string) => void;
  setIsHashing: (val: boolean) => void;
  clearAll: () => void;
}
