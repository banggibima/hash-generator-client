export const algorithms = [
  {
    value: "sha256",
    label: "SHA-256",
    description:
      "SHA-256 is a cryptographic hash function that produces a 256-bit hash value, commonly used in security applications and protocols.",
  },
  {
    value: "sha512",
    label: "SHA-512",
    description:
      "SHA-512 is a cryptographic hash function that produces a 512-bit hash value, providing a higher level of security than SHA-256.",
  },
  {
    value: "md5",
    label: "MD5",
    description:
      "MD5 is a widely used hash function producing a 128-bit hash value, but it is considered weak against collision attacks.",
  },
  {
    value: "bcrypt",
    label: "Bcrypt",
    description:
      "Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks, widely used in web applications.",
  },
  {
    value: "argon2",
    label: "Argon2",
    description:
      "Argon2 is a modern password hashing algorithm that won the Password Hashing Competition in 2015, designed to resist GPU-based attacks.",
  },
];