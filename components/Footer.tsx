import { Logo } from "./Navbar";
import { footerCols } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line pt-14">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <div className="[&_a]:text-ink [&_span]:text-brand"><Logo /></div>
          <p className="mt-3 text-sm">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form className="mt-8 flex gap-4">
            <input type="email" placeholder="Enter your email" className="h-12 flex-1 rounded-full border border-line px-5 text-sm outline-none focus:border-brand" />
            <button className="h-12 rounded-full bg-lime px-6 text-sm font-medium">Search</button>
          </form>
          <p className="mt-4 max-w-sm text-[11px] text-muted">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          {footerCols.map((col, i) => (
            <ul key={i} className="space-y-4">{col.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          ))}
        </div>
      </div>
      <div className="container-x mt-24 flex flex-wrap justify-between gap-3 border-t border-line py-6 text-[11px] text-muted">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span>
      </div>
    </footer>
  );
}
