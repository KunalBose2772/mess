'use client';

import { useEffect } from 'react';
import { RotateCw, ArrowLeft } from 'lucide-react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly for telemetry/debugging
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 bg-[#FCFBF7]">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-[#E8E2D8] bg-white p-6 sm:p-10 text-center shadow-sm">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-[#FBF4DE] text-[#9E7A1C] mb-4">
            <RotateCw className="size-6" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2B18]">
            Something went unexpectedly wrong
          </h1>
          <p className="mt-2 text-sm text-[#45514A] leading-relaxed">
            We encountered a temporary technical glitch while loading this page. Please try
            refreshing or return to our homepage.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={() => reset()} variant="primary" size="sm" className="w-full sm:w-auto">
              <RotateCw className="size-4 mr-2" /> Try Reloading
            </Button>
            <ButtonLink href="/" variant="secondary" size="sm" className="w-full sm:w-auto">
              <ArrowLeft className="size-4 mr-2" /> Return to Homepage
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
