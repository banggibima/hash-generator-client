"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-4 sm:px-4 sm:py-4 mt-auto">
      <p className="text-xs tracking-normal font-semibold space-y-4 text-neutral-600 dark:text-neutral-400">
        {currentYear} Banggi Bima Edriantino. All rights reserved.
      </p>
    </footer>
  );
}
