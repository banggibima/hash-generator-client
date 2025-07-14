import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HashGenerator } from "@/components/hash-generator";
import { HashVerifier } from "@/components/hash-verifier";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-y-0 h-screen font-mono">
        <Header title="Hash Generator" />
        <main className="px-4 py-4 sm:px-4 sm:py-4 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="col-span-1 sm:col-span-1 flex flex-col gap-y-4">
              <HashGenerator />
            </div>
            <div className="col-span-1 sm:col-span-1 flex flex-col gap-y-4">
              <HashVerifier />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
