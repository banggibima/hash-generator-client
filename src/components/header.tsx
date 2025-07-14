"use client";

export function Header({ title }: { title?: string }) {
  return (
    <header className="px-4 py-4 sm:px-4 sm:py-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl tracking-normal font-bold uppercase text-neutral-800 dark:text-neutral-200">{title}</h1>
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </div>
    </header>
  );
}
