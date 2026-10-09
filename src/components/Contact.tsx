import { Mail } from "lucide-react";
import { contact, links, profile } from "../data/content";
import SocialLinks from "./SocialLinks";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="max-w-xl">
          <p className="font-mono text-sm text-primary">04. Contact</p>
          <h2 id="contact-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-muted sm:text-lg">{contact.text}</p>
          <a
            href={`mailto:${links.email}`}
            className="mt-8 inline-flex h-11 max-w-full items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-on-primary shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-110"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{links.email}</span>
          </a>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </Reveal>
        <p className="mt-16 text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
