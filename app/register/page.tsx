import AuthShell, { AuthHeading, AuthSwitch, Field } from "@/components/AuthShell";

export default function Register() {
  return (
    <AuthShell title="Sign up and come in" blurb="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <AuthHeading eyebrow="Create an Account">Welcome to ByteSpace</AuthHeading>
      <form className="mt-8 flex flex-col">
        <Field label="Full Name" type="text" placeholder="Jamie Davis" />
        <Field label="Email" type="email" placeholder="designer@example.com" />
        <Field label="Password" type="password" placeholder="********" />
        <button className="mt-6 h-[46px] self-end rounded-full bg-lime px-8 text-lg">Continue</button>
      </form>
      <AuthSwitch text="Already have an account?" href="/login" cta="Login" />
    </AuthShell>
  );
}
