"use client";

import { generateHash } from "@/app/actions";
import { algorithms } from "@/constants/algorithms";
import { useHashGeneratorStore } from "@/stores/use-hash-generator";

export function HashGenerator() {
  const {
    textInput,
    hashAlgorithm,
    hashedText,
    isHashCopied,
    isHashing,
    setTextInput,
    setHashAlgorithm,
    setHashedText,
    setIsHashCopied,
    setIsHashing,
    clearAll,
  } = useHashGeneratorStore();

  const selectedAlgorithm = algorithms.find((a) => a.value === hashAlgorithm);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsHashCopied(true);
      setTimeout(() => setIsHashCopied(false), 2000);
    });
  };

  const handleGenerateHash = async () => {
    if (!textInput) return;
    setIsHashing(true);
    try {
      const result = await generateHash(textInput, hashAlgorithm);
      setHashedText(result);
    } catch (error) {
      console.error("Hash generation error:", error);
      setHashedText("Error generating hash");
    } finally {
      setIsHashing(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 px-4 py-4 rounded-md bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xs tracking-normal font-semibold text-neutral-800 dark:text-neutral-200">Generate Hash</h1>
        <p className="text-xs tracking-normal font-semibold text-neutral-600 dark:text-neutral-400">
          Generate a hash from a password using various algorithms. Input the text, select the algorithm, and generate the
          hash.
        </p>
      </div>
      <hr className="border-neutral-200 dark:border-neutral-800" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <div className="col-span-2 flex flex-col gap-y-2">
          <label
            htmlFor="input-text"
            className="text-xs tracking-normal font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Input Text
          </label>
          <input
            id="input-text"
            type="text"
            name="input-text"
            autoComplete="off"
            placeholder="Enter text to generate hash from here"
            className="px-4 py-2 text-xs tracking-normal font-semibold border rounded-md focus:outline-none border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-y-2">
          <label
            htmlFor="hash-algorithm"
            className="text-xs tracking-normal font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Hash Algorithm
          </label>
          <select
            id="hash-algorithm"
            name="hash-algorithm"
            className="px-4 py-2 text-xs tracking-normal font-semibold border rounded-md appearance-none focus:outline-none border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
            value={hashAlgorithm}
            onChange={(e) => setHashAlgorithm(e.target.value)}
          >
            {algorithms.map((algo) => (
              <option key={algo.value} value={algo.value}>
                {algo.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2">
          <p className="text-xs tracking-normal font-semibold text-neutral-800 dark:text-neutral-200">
            Algorithm Description
          </p>
          <p className="text-xs tracking-normal font-semibold text-neutral-600 dark:text-neutral-400">
            {selectedAlgorithm?.description}
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2">
          <label htmlFor="Output" className="text-xs tracking-normal font-semibold text-neutral-800 dark:text-neutral-200">
            Output
          </label>
          <textarea
            id="Output"
            name="Output"
            disabled
            readOnly
            rows={4}
            placeholder="Generated hash will appear here"
            className="px-4 py-2 text-xs tracking-normal font-semibold border rounded-md resize-none focus:outline-none border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
            value={hashedText}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <button
          onClick={() => copyToClipboard(hashedText)}
          className="col-span-2 sm:col-span-1 px-4 py-2 text-xs tracking-normal font-semibold rounded-md cursor-pointer transition-colors focus:outline-none text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          {isHashCopied ? "Copied!" : "Copy Hash"}
        </button>
        <button
          onClick={clearAll}
          className="col-span-2 sm:col-span-1 px-4 py-2 text-xs tracking-normal font-semibold rounded-md cursor-pointer transition-colors focus:outline-none text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          Clear
        </button>
        <button
          onClick={handleGenerateHash}
          className="col-span-2 px-4 py-2 text-xs tracking-normal font-semibold rounded-md cursor-pointer transition-colors focus:outline-none text-white dark:text-black bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-300"
        >
          {isHashing ? "Generating..." : "Generate Hash"}
        </button>
      </div>
    </div>
  );
}
