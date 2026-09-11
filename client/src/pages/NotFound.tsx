import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal">
      <div className="text-center px-4">
        <p className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
          Page Not Found
        </h1>
        <p className="text-cream/60 mb-8 max-w-md mx-auto">
          Looks like this page missed a step. Let us get you back on the dance
          floor.
        </p>
        <Link href="/">
          <Button className="bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
