'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Lock,
  User,
  ShieldCheck,
  Loader2,
  Utensils,
  ArrowRight,
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to authenticate');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07170C] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C59B27]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Brand identity pill */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59B27]/30 bg-[#0F2B18] backdrop-blur-md mb-4 shadow-sm">
            <Utensils className="size-3.5 text-[#F3CF7A]" />
            <span className="text-xs uppercase tracking-widest font-bold text-white">
              Student&apos;s Mess Ranchi
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Kitchen Operations CRM
          </h1>
          <p className="text-xs sm:text-sm text-white/70 mt-1.5">
            Internal administrative portal &amp; conversion telemetry
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0F2B18] border border-[#C59B27]/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 border border-[#C59B27]/30 text-[#F3CF7A]">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">Administrator Access</h2>
              <p className="text-xs text-white/70">Sign in to manage leads &amp; live kitchen operations</p>
            </div>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-rose-500/30 bg-rose-950/40 p-3.5 text-xs font-medium text-rose-300 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-bold uppercase tracking-wider text-[#F3CF7A] mb-1.5"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/60 pointer-events-none">
                  <User className="size-4" />
                </span>
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full rounded-xl border border-white/20 bg-[#07170C]/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[#C59B27] focus:outline-none focus:ring-1 focus:ring-[#C59B27] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold uppercase tracking-wider text-[#F3CF7A] mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/60 pointer-events-none">
                  <Lock className="size-4" />
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-white/20 bg-[#07170C]/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-[#C59B27] focus:outline-none focus:ring-1 focus:ring-[#C59B27] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C59B27] hover:bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#07170C] shadow-sm transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin text-[#07170C]" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to CRM Portal</span>
                  <ArrowRight className="size-4 text-[#07170C]" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <p className="text-[11px] text-white/50">
              Protected by military-grade PBKDF2 + JWT session encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
