import { create } from "zustand";
import { HashVerifierState } from "@/types/hash-verifier";

export const useHashVerifierStore = create<HashVerifierState>((set) => ({
  textInput: "",
  hashInput: "",
  hashAlgorithm: "sha256",
  hashedText: "",
  isHashing: false,
  setTextInput: (val) => set({ textInput: val }),
  setHashInput: (val) => set({ hashInput: val }),
  setHashAlgorithm: (val) => set({ hashAlgorithm: val }),
  setHashedText: (val) => set({ hashedText: val }),
  setIsHashing: (val) => set({ isHashing: val }),
  clearAll: () =>
    set({
      textInput: "",
      hashInput: "",
      hashAlgorithm: "sha256",
      hashedText: "",
      isHashing: false,
    }),
}));
