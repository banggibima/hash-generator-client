"use server";

import crypto from "crypto";
import bcrypt from "bcryptjs";
import argon2 from "argon2";

export async function generateHash(text: string, hashAlgorithm: string): Promise<string> {
  try {
    switch (hashAlgorithm) {
      case "sha256":
        const sha256Hash = crypto.createHash("sha256");
        sha256Hash.update(text);
        return sha256Hash.digest("hex").toString();
      case "sha512":
        const sha512Hash = crypto.createHash("sha512");
        sha512Hash.update(text);
        return sha512Hash.digest("hex").toString();
      case "md5":
        const md5Hash = crypto.createHash("md5");
        md5Hash.update(text);
        return md5Hash.digest("hex").toString();
      case "bcrypt":
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(text, salt);
      case "argon2":
        return await argon2.hash(text);
      default:
        return "Unsupported hash algorithm";
    }
  } catch (error) {
    console.error("Error generating hash:", error);
    return "Error generating hash";
  }
}

export async function verifyHash(textInput: string, hashInput: string, hashAlgorithm: string): Promise<boolean> {
  try {
    switch (hashAlgorithm) {
      case "sha256":
        const sha256Hash = crypto.createHash("sha256");
        sha256Hash.update(textInput);
        return hashInput === sha256Hash.digest("hex").toString();
      case "sha512":
        const sha512Hash = crypto.createHash("sha512");
        sha512Hash.update(textInput);
        return hashInput === sha512Hash.digest("hex").toString();
      case "md5":
        const md5Hash = crypto.createHash("md5");
        md5Hash.update(textInput);
        return hashInput === md5Hash.digest("hex").toString();
      case "bcrypt":
        const isBcryptMatch = await bcrypt.compare(textInput, hashInput);
        return isBcryptMatch;
      case "argon2":
        const isArgon2Match = await argon2.verify(hashInput, textInput);
        return isArgon2Match;
      default:
        return false;
    }
  } catch (error) {
    console.error("Error verifying hash:", error);
    return false;
  }
}
