import Link from "next/link";
import { Metadata } from "next";

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
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#FF9A33] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
