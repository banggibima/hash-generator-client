import { create } from "zustand";
import { HashGeneratorState } from "@/types/hash-generator";

export const useHashGeneratorStore = create<HashGeneratorState>((set) => ({
  textInput: "",
  hashAlgorithm: "sha256",
  hashedText: "",
  isHashCopied: false,
  isHashing: false,
  setTextInput: (val) => set({ textInput: val }),
  setHashAlgorithm: (val) => set({ hashAlgorithm: val }),
  setHashedText: (val) => set({ hashedText: val }),
  setIsHashCopied: (val) => set({ isHashCopied: val }),
  setIsHashing: (val) => set({ isHashing: val }),
  clearAll: () =>
    set({
      textInput: "",
      hashAlgorithm: "sha256",
      hashedText: "",
      isHashCopied: false,
      isHashing: false,
    }),
}));
