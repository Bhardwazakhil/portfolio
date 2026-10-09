import { GraduationCap } from "lucide-react";
import { about, education, skills } from "../data/content";
import { Reveal, Section } from "./Reveal";

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title={about.heading}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="space-y-4 text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="pt-4">
            <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
              <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              Education
            </h3>
            <ul className="mt-3 space-y-3 text-base">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-fg">{e.degree}</p>
                  <p className="text-sm">
                    {e.school} <span className="font-mono">· {e.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="space-y-6">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <h3 className="text-sm font-semibold">{s.group}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {s.items.map((skill) => (
                  <li key={skill} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
