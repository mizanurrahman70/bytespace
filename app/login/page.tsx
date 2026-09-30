import AuthShell, { AuthHeading, AuthSwitch, Field } from "@/components/AuthShell";

export default function Login() {
  return (
    <AuthShell title="Sign in with ease" blurb="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <AuthHeading eyebrow="Sign In">Welcome Back</AuthHeading>
      <form className="mt-8 flex flex-col">
        <Field label="Email" type="email" placeholder="designer@example.com" />
        <Field label="Password" type="password" placeholder="********" />
        <button className="mt-6 h-[46px] self-end rounded-full bg-lime px-8 text-lg">Sign In</button>
      </form>
      <div className="mt-12 flex items-center gap-4 text-neutral-500"><hr className="flex-1 border-line" />or<hr className="flex-1 border-line" /></div>
      <div className="mt-10 flex justify-center gap-4">
        {[["Facebook", "f"], ["Google", "G"]].map(([n, g]) => (
          <button key={n} aria-label={`Continue with ${n}`} className="grid size-[72px] place-items-center rounded-2xl border border-line text-2xl font-bold">{g}</button>
        ))}
      </div>
      <AuthSwitch text="New user?" href="/register" cta="Create an account" />
    </AuthShell>
  );
}
