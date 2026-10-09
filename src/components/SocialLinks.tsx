import { Mail } from "lucide-react";
import { links } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

const items = [
  { href: `mailto:${links.email}`, label: "Email", Icon: Mail },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.github, label: "GitHub", Icon: GitHubIcon },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            <Icon className="size-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
