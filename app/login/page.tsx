'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, BellRing, CheckCircle2, Globe2, History, Loader2, Mail, RefreshCw, ShieldCheck, Sparkles, Smartphone } from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'

export default function UserLoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [step, setStep] = useState<'email' | 'otp' | 'success'>('email')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [resendCountdown, setResendCountdown] = useState(0)

    useEffect(() => {
        if (resendCountdown <= 0) return
        const timer = window.setTimeout(() => setResendCountdown((value) => value - 1), 1000)
        return () => window.clearTimeout(timer)
    }, [resendCountdown])

    const sendOtp = async () => {
        const response = await fetch('/api/user-auth/login/send-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim().toLowerCase() }) })
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || 'Unable to send login OTP.')
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true); setError('')
        try { await sendOtp(); setStep('otp'); setResendCountdown(60) } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to send login OTP.') } finally { setLoading(false) }
    }

    const handleVerify = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!/^\d{6}$/.test(otp)) { setError('Enter the complete 6-digit OTP.'); return }
        setLoading(true); setError('')
        try {
            const response = await fetch('/api/user-auth/login/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim().toLowerCase(), otp }) })
            const data = await response.json()
            if (!response.ok) throw new Error(data.error || 'Invalid or expired OTP.')
            const requestedNext = new URLSearchParams(window.location.search).get('next')
            const destination = requestedNext?.startsWith('/') && !requestedNext.startsWith('//') ? requestedNext : '/'
            router.replace(destination)
            router.refresh()
        } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to verify OTP.') } finally { setLoading(false) }
    }

    const handleResend = async () => {
        if (loading || resendCountdown > 0) return
        setLoading(true); setError(''); setOtp('')
        try { await sendOtp(); setResendCountdown(60) } catch (requestError) { setError(requestError instanceof Error ? requestError.message : 'Unable to resend OTP.') } finally { setLoading(false) }
    }

    return (
        <DefaultLayout>
        <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
                <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-100/60 blur-3xl" />
                <div className="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center sm:min-h-[calc(100vh-8rem)]">
                <div className="grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-indigo-950/10 sm:rounded-[2rem] xl:grid-cols-[1.05fr_0.95fr]">
                    <section
                        className="relative hidden min-h-[760px] overflow-hidden border-r border-white/10 p-10 xl:flex xl:flex-col 2xl:p-12"
                        style={{
                            background: 'linear-gradient(145deg, #312e81 0%, #5b21b6 48%, #111827 100%)',
                            flexDirection: 'column',
                        }}
                    >
                        <div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
                        <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="relative w-full shrink-0">
                            <Link href="/" className="inline-flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg shadow-indigo-950/30">
                                    <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={38} height={38} priority />
                                </span>
                                <span>
                                    <span className="block text-xl font-extrabold tracking-tight text-white">RakshaAI</span>
                                    <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400">Safer India</span>
                                </span>
                            </Link>

                            <div className="mt-12 w-full max-w-lg">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-200">
                                    <Sparkles className="h-3.5 w-3.5" /> Your personal safety space
                                </div>
                                <h1 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">
                                    Keep every scam check close and every warning closer.
                                </h1>
                                <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                                    Sign in to revisit checks, follow reports, and keep your personal safety activity together in one secure place.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-8 w-full shrink-0 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">Safety overview</p>
                                    <p className="mt-1 text-lg font-bold text-white">Your recent activity</p>
                                </div>
                                <span className="rounded-full border border-emerald-300/20 bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Protected</span>
                            </div>

                            <div className="mt-5 space-y-3">
                                {[
                                    { icon: Globe2, title: 'Website safety check', detail: 'example-store.in', status: 'Safe', tone: 'text-emerald-200 bg-emerald-400/15' },
                                    { icon: Smartphone, title: 'Phone number check', detail: '+91 98••• ••210', status: 'Caution', tone: 'text-amber-200 bg-amber-400/15' },
                                    { icon: ShieldCheck, title: 'Community report', detail: 'Report status updated', status: 'Reviewed', tone: 'text-sky-200 bg-sky-400/15' },
                                ].map(({ icon: Icon, title, detail, status, tone }) => (
                                    <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/20 p-3.5">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white"><Icon className="h-5 w-5" /></span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm font-semibold text-white">{title}</span>
                                            <span className="block truncate text-xs text-indigo-200">{detail}</span>
                                        </span>
                                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${tone}`}>{status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
                            {[
                                { icon: History, label: 'Saved checks' },
                                { icon: BellRing, label: 'Safety alerts' },
                                { icon: ShieldCheck, label: 'Private access' },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <Icon className="mb-3 h-5 w-5 text-indigo-300" />
                                    <p className="text-xs font-semibold text-slate-200">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-5 sm:p-8 md:p-10 xl:p-12 dark:bg-slate-900">
                        <div className="mx-auto max-w-lg xl:max-w-md">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600 sm:text-sm sm:tracking-[0.18em] dark:text-indigo-400">{step === 'email' ? 'User login' : step === 'otp' ? 'Verify your email' : 'Login complete'}</p>
                                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:mt-3 sm:text-3xl dark:text-white">{step === 'email' ? 'Welcome back' : step === 'otp' ? 'Enter your OTP' : 'You are signed in'}</h2>
                                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    {step === 'email' && 'Enter your registered email address to receive a login code.'}
                                    {step === 'otp' && <>We sent a 6-digit code to <strong className="break-all text-slate-700 dark:text-slate-200">{email}</strong>.</>}
                                    {step === 'success' && 'Login verified. Taking you to your saved activity.'}
                                </p>
                            </div>

                            {step === 'email' && <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-9"><div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email address</label><div className="relative"><Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" /><input id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} placeholder="you@example.com" autoComplete="email" required className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-950 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:h-14 sm:rounded-2xl sm:pl-12 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-800 dark:focus:ring-indigo-950" /></div></div>{error && <LoginError message={error} />}<LoginSubmit loading={loading}>Send login OTP</LoginSubmit></form>}

                            {step === 'otp' && <form onSubmit={handleVerify} className="mt-8 space-y-6 sm:mt-10"><LoginOTPInput value={otp} onChange={(value) => { setOtp(value); setError('') }} />{error && <LoginError message={error} />}<LoginSubmit loading={loading}>Verify and login</LoginSubmit><div className="flex flex-col gap-3 text-xs min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between"><button type="button" onClick={() => { setStep('email'); setOtp(''); setError('') }} className="flex items-center gap-1.5 font-semibold text-slate-500 hover:text-indigo-600"><ArrowLeft className="h-3.5 w-3.5" />Change email</button><button type="button" onClick={handleResend} disabled={loading || resendCountdown > 0} className="flex items-center gap-1.5 font-semibold text-indigo-600 disabled:text-slate-400"><RefreshCw className="h-3.5 w-3.5" />{resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend OTP'}</button></div></form>}

                            {step === 'success' && <div className="mt-10 text-center"><span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60"><CheckCircle2 className="h-10 w-10" /></span><p className="mt-6 text-sm text-slate-500">Login successful. Loading your saved activity...</p><Loader2 className="mx-auto mt-5 h-5 w-5 animate-spin text-indigo-600" /></div>}

                            {step === 'email' && <><div className="my-6 flex items-center gap-3 sm:my-8 sm:gap-4"><div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" /><span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">New to RakshaAI?</span><div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" /></div><Link href="/register" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 sm:rounded-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40">Create a free user account</Link><div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50 p-4 sm:mt-8 sm:rounded-2xl dark:bg-slate-800/70"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /><p className="text-xs leading-5 text-slate-500 dark:text-slate-400">Scam checking remains free. Login is required to run checks and keep your activity protected.</p></div><p className="mt-6 text-center text-xs text-slate-400 sm:mt-7">Are you a business owner? <Link href="/business-login" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Use business login</Link></p></>}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </DefaultLayout>
    )
}

function LoginError({ message }: { message: string }) {
    return <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700 sm:rounded-2xl dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">{message}</div>
}

function LoginSubmit({ loading, children }: { loading: boolean; children: React.ReactNode }) {
    return <button type="submit" disabled={loading} className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70 sm:h-14 sm:rounded-2xl dark:shadow-none">{loading ? <><Loader2 className="h-4 w-4 animate-spin" />Please wait</> : <>{children}<ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></>}</button>
}

function LoginOTPInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    const refs = useRef<(HTMLInputElement | null)[]>([])
    const updateDigit = (index: number, digit: string) => {
        if (!/^\d?$/.test(digit)) return
        const digits = value.padEnd(6, ' ').split('')
        digits[index] = digit || ' '
        onChange(digits.join('').replace(/ /g, ''))
        if (digit && index < 5) refs.current[index + 1]?.focus()
    }
    return <div><label className="mb-3 block text-center text-sm font-semibold text-slate-700 dark:text-slate-200">Login verification code</label><div className="grid grid-cols-6 gap-1.5 sm:gap-3">{Array.from({ length: 6 }).map((_, index) => <input key={index} ref={(element) => { refs.current[index] = element }} aria-label={`OTP digit ${index + 1}`} type="text" inputMode="numeric" autoComplete={index === 0 ? 'one-time-code' : 'off'} maxLength={1} value={value[index] || ''} onChange={(event) => updateDigit(index, event.target.value)} onKeyDown={(event) => { if (event.key === 'Backspace' && !value[index] && index > 0) refs.current[index - 1]?.focus() }} className="h-11 min-w-0 w-full rounded-lg border-2 border-slate-200 bg-slate-50 text-center text-lg font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:h-14 sm:rounded-xl sm:text-xl sm:focus:ring-4" />)}</div></div>
}
