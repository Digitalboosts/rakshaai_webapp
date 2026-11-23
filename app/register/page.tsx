'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, BellRing, CalendarDays, CheckCircle2, History, Loader2, Mail, Phone, RefreshCw, ShieldCheck, Sparkles, UserRound, UsersRound } from 'lucide-react'
import DefaultLayout from '@/components/DefaultLayout'

const inputClass = 'h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-3 text-sm text-slate-950 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:h-14 sm:rounded-2xl sm:pl-12 sm:pr-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-indigo-950'

export default function UserRegisterPage() {
    const router = useRouter()
    const [form, setForm] = useState({ fullName: '', phone: '', birthDate: '', gender: '', email: '' })
    const [step, setStep] = useState<'details' | 'otp' | 'success'>('details')
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [resendCountdown, setResendCountdown] = useState(0)

    const updateField = (field: keyof typeof form, value: string) => {
        setForm((current) => ({ ...current, [field]: value }))
        setError('')
    }

    useEffect(() => {
        if (resendCountdown <= 0) return
        const timer = window.setTimeout(() => setResendCountdown((value) => value - 1), 1000)
        return () => window.clearTimeout(timer)
    }, [resendCountdown])

    const registrationPayload = () => ({ full_name: form.fullName.trim(), phone: form.phone.replace(/\D/g, ''), birth_date: form.birthDate, gender: form.gender, email: form.email.trim().toLowerCase(), role: 'user' })

    const sendOtp = async () => {
        const response = await fetch('/api/user-auth/registration/send-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(registrationPayload()) })
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || 'Unable to send OTP.')
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        setLoading(true)
        try {
            await sendOtp()
            setStep('otp')
            setResendCountdown(60)
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : 'Unable to send OTP.')
        } finally {
            setLoading(false)
        }
    }

    const handleVerify = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!/^\d{6}$/.test(otp)) { setError('Enter the complete 6-digit OTP.'); return }
        setError('')
        setLoading(true)
        try {
            const response = await fetch('/api/user-auth/registration/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.trim().toLowerCase(), role: 'user', otp }) })
            const data = await response.json()
            if (!response.ok) throw new Error(data.error || 'Invalid or expired OTP.')
            setStep('success')
            router.replace('/')
            router.refresh()
        } catch (requestError) {
            setError(requestError instanceof Error ? requestError.message : 'Unable to verify OTP.')
        } finally {
            setLoading(false)
        }
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
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
                </div>

                <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center sm:min-h-[calc(100vh-8rem)]">
                    <div className="grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-indigo-950/10 sm:rounded-[2rem] xl:grid-cols-[1.05fr_0.95fr]">
                        <section
                            className="relative hidden min-h-[820px] overflow-hidden border-r border-white/10 p-10 xl:flex 2xl:p-12"
                            style={{ background: 'linear-gradient(145deg, #312e81 0%, #5b21b6 48%, #111827 100%)', flexDirection: 'column' }}
                        >
                            <div aria-hidden="true" className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
                            <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

                            <Link href="/" className="relative inline-flex w-fit items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg shadow-indigo-950/30">
                                    <Image src="/rakshaai-logo.svg" alt="RakshaAI" width={38} height={38} priority />
                                </span>
                                <span>
                                    <span className="block text-xl font-extrabold tracking-tight text-white">RakshaAI</span>
                                    <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400">Safer India</span>
                                </span>
                            </Link>

                            <div className="relative mt-12 w-full max-w-lg">
                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
                                    <Sparkles className="h-3.5 w-3.5" /> Free personal safety account
                                </div>
                                <h1 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">Build your personal shield against online scams.</h1>
                                <p className="mt-5 max-w-md text-base leading-7 text-indigo-100/80">Create one secure place for your checks, reports, and alerts while keeping RakshaAI&apos;s public scam tools free.</p>
                            </div>

                            <div className="relative mt-10 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">Included with your account</p>
                                <div className="mt-5 space-y-4">
                                    {[
                                        { icon: History, title: 'Save your scam checks', detail: 'Return to previous website, phone, and UPI results.' },
                                        { icon: BellRing, title: 'Follow important alerts', detail: 'Keep track of updates connected to your reports.' },
                                        { icon: ShieldCheck, title: 'Manage activity privately', detail: 'Your personal account stays separate from business access.' },
                                    ].map(({ icon: Icon, title, detail }) => (
                                        <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-100"><Icon className="h-5 w-5" /></span>
                                            <span>
                                                <span className="block text-sm font-bold text-white">{title}</span>
                                                <span className="mt-1 block text-xs leading-5 text-indigo-200">{detail}</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mt-auto flex items-center gap-3 pt-8 text-sm text-indigo-100/80">
                                <CheckCircle2 className="h-5 w-5 text-emerald-300" /> No credit card required
                            </div>
                        </section>

                        <section className="bg-white p-5 sm:p-8 md:p-10 xl:p-12 dark:bg-slate-900">
                            <div className="mx-auto max-w-lg xl:max-w-md">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-600 sm:text-sm sm:tracking-[0.18em] dark:text-indigo-400">{step === 'details' ? 'Create user account' : step === 'otp' ? 'Verify your email' : 'Registration complete'}</p>
                                    <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:mt-3 sm:text-3xl dark:text-white">{step === 'details' ? 'Join RakshaAI' : step === 'otp' ? 'Enter your OTP' : 'You are verified'}</h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                        {step === 'details' && 'Set up your free personal safety account.'}
                                        {step === 'otp' && <>We sent a 6-digit code to <strong className="break-all text-slate-700 dark:text-slate-200">{form.email}</strong>.</>}
                                        {step === 'success' && 'Your account is ready and you are now signed in.'}
                                    </p>
                                </div>

                                {step === 'details' && (
                                    <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8">
                                        <Field label="Full name" id="full-name" icon={<UserRound className="h-5 w-5" />}>
                                            <input id="full-name" type="text" value={form.fullName} onChange={(event) => updateField('fullName', event.target.value)} placeholder="Your full name" autoComplete="name" required className={inputClass} />
                                        </Field>
                                        <Field label="Phone number" id="phone" icon={<Phone className="h-5 w-5" />}>
                                            <input id="phone" type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} value={form.phone} onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10-digit mobile number" autoComplete="tel" required className={inputClass} />
                                        </Field>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <Field label="Birth date" id="birth-date" icon={<CalendarDays className="h-5 w-5" />}>
                                                <input id="birth-date" type="date" max={new Date().toISOString().split('T')[0]} value={form.birthDate} onChange={(event) => updateField('birthDate', event.target.value)} autoComplete="bday" required className={`${inputClass} pr-3`} />
                                            </Field>
                                            <Field label="Gender" id="gender" icon={<UsersRound className="h-5 w-5" />}>
                                                <select id="gender" value={form.gender} onChange={(event) => updateField('gender', event.target.value)} required className={`${inputClass} appearance-none pr-4`}><option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>
                                            </Field>
                                        </div>
                                        <Field label="Email address" id="email" icon={<Mail className="h-5 w-5" />}>
                                            <input id="email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" autoComplete="email" required className={inputClass} />
                                        </Field>
                                        <label className="flex items-start gap-3 text-xs leading-5 text-slate-600 dark:text-slate-300"><input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /><span>I agree to the <Link href="/terms-of-service" className="font-semibold text-indigo-600 dark:text-indigo-400">Terms of Service</Link> and <Link href="/privacy-policy" className="font-semibold text-indigo-600 dark:text-indigo-400">Privacy Policy</Link>.</span></label>
                                        {error && <ErrorMessage message={error} />}
                                        <SubmitButton loading={loading}>Send verification OTP</SubmitButton>
                                    </form>
                                )}

                                {step === 'otp' && (
                                    <form onSubmit={handleVerify} className="mt-10 space-y-6">
                                        <OTPInput value={otp} onChange={(value) => { setOtp(value); setError('') }} />
                                        {error && <ErrorMessage message={error} />}
                                        <SubmitButton loading={loading}>Verify and create account</SubmitButton>
                                        <div className="flex flex-col gap-3 text-xs min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
                                            <button type="button" onClick={() => { setStep('details'); setOtp(''); setError('') }} className="flex items-center gap-1.5 font-semibold text-slate-500 hover:text-indigo-600"><ArrowLeft className="h-3.5 w-3.5" />Edit details</button>
                                            <button type="button" onClick={handleResend} disabled={loading || resendCountdown > 0} className="flex items-center gap-1.5 font-semibold text-indigo-600 disabled:text-slate-400"><RefreshCw className="h-3.5 w-3.5" />{resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend OTP'}</button>
                                        </div>
                                    </form>
                                )}

                                {step === 'success' && (
                                    <div className="mt-10 text-center">
                                        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60"><CheckCircle2 className="h-10 w-10" /></span>
                                        <p className="mt-6 text-sm leading-6 text-slate-500">Registration successful. Taking you to RakshaAI...</p>
                                        <Loader2 className="mx-auto mt-5 h-5 w-5 animate-spin text-indigo-600" />
                                    </div>
                                )}

                                {step === 'details' && <><div className="my-7 flex items-center gap-4"><div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" /><span className="text-xs font-medium uppercase tracking-wider text-slate-400">Already registered?</span><div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" /></div><Link href="/login" className="flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-indigo-950/40">Back to user login</Link></>}

                                <p className="mt-7 text-center text-xs text-slate-400">Are you a business owner? <Link href="/business-login" className="font-semibold text-indigo-600 dark:text-indigo-400">Use business registration</Link></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

function Field({ label, id, icon, children }: { label: string; id: string; icon: React.ReactNode; children: React.ReactNode }) {
    return <div><label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</label><div className="relative"><span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400">{icon}</span>{children}</div></div>
}

function ErrorMessage({ message }: { message: string }) {
    return <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">{message}</div>
}

function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
    return <button type="submit" disabled={loading} className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70 sm:h-14 sm:rounded-2xl sm:px-5 dark:shadow-none">{loading ? <><Loader2 className="h-4 w-4 animate-spin" />Please wait</> : <>{children}<ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></>}</button>
}

function OTPInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    const refs = useRef<(HTMLInputElement | null)[]>([])

    const updateDigit = (index: number, digit: string) => {
        if (!/^\d?$/.test(digit)) return
        const digits = value.padEnd(6, ' ').split('')
        digits[index] = digit || ' '
        onChange(digits.join('').replace(/ /g, ''))
        if (digit && index < 5) refs.current[index + 1]?.focus()
    }

    return (
        <div>
            <label className="mb-3 block text-center text-sm font-semibold text-slate-700 dark:text-slate-200">Verification code</label>
            <div className="grid grid-cols-6 gap-1.5 sm:gap-3">
                {Array.from({ length: 6 }).map((_, index) => <input key={index} ref={(element) => { refs.current[index] = element }} aria-label={`OTP digit ${index + 1}`} type="text" inputMode="numeric" autoComplete={index === 0 ? 'one-time-code' : 'off'} maxLength={1} value={value[index] || ''} onChange={(event) => updateDigit(index, event.target.value)} onKeyDown={(event) => { if (event.key === 'Backspace' && !value[index] && index > 0) refs.current[index - 1]?.focus() }} className="h-11 min-w-0 w-full rounded-lg border-2 border-slate-200 bg-slate-50 text-center text-lg font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:h-14 sm:rounded-xl sm:text-xl sm:focus:ring-4" />)}
            </div>
        </div>
    )
}
