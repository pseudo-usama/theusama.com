import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}