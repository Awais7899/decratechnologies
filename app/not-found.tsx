import Link from "next/link";
import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <div className="text-center px-4">
        <h1 className="text-9xl font-black text-[#FF7A00] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#666666] mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="md">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}

