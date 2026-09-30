"use client";
import { useState } from "react";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const about = [
  `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
  `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
  `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.`,
];
const keyPoints = ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"];
const modules = [
  ["Module 1: Introduction to Digital Assets", "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."],
  ["Module 2: Design Principles for Impact", "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."],
  ["Module 4: User-Centric Design Strategies", "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."],
  ["Module 5: Interactive Media and Engagement", "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."],
  ["Module 6: Project Showcase and Critique", "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."],
  ["Module 7: Optimizing Digital Assets for Various Platforms", "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."],
];
const bars = [[720, 90], [120, 34], [21, 8], [12, 4], [16, 5]];
const reviews = [
  ["PurePearl Studio", "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"],
  ["Albert Flores", "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"],
  ["Cody Fisher", "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."],
  ["Brooklyn Simmons", "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."],
];

const H3 = "font-display text-lg font-semibold";
const stars = (n = 5) => "★".repeat(n);

export default function CourseTabs() {
  const [tab, setTab] = useState<Tab>("About");
  return (
    <div className="pb-4 pt-12">
      <div role="tablist" className="flex gap-3">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2.5 text-sm ${tab === t ? "bg-lime font-medium" : "bg-chip"}`}>{t}</button>
        ))}
      </div>

      {tab === "About" && (
        <div className="mt-8 space-y-6 text-sm leading-7 text-neutral-600">
          <h3 className={`${H3} text-ink`}>Description</h3>
          {about.map((p, i) => <p key={i}>{p}</p>)}
          <h3 className={`${H3} text-ink`}>Sneak Peak</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[0, 1, 2, 3].map((i) => <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-neutral-300 to-neutral-500" />)}
          </div>
          <h3 className={`${H3} text-ink`}>Key Points</h3>
          <ul className="space-y-3.5">
            {keyPoints.map((k) => <li key={k} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-brand text-[10px] text-white">✓</span>{k}</li>)}
          </ul>
        </div>
      )}

      {tab === "Lessons" && (
        <div className="mt-8 text-sm leading-7 text-neutral-600">
          <h3 className={`${H3} text-ink`}>Explore the Modules</h3>
          <p className="mt-3">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
          <h3 className={`${H3} mt-6 text-ink`}>Lesson List</h3>
          <ul className="mt-4 space-y-5">
            {modules.map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-lime text-ink" aria-hidden>▶</span>
                <div><p className="text-ink">{t}</p><p className="text-neutral-500">{d}</p></div>
              </li>
            ))}
          </ul>
          <h3 className={`${H3} mt-8 text-ink`}>Lesson Content</h3>
          <p className="mt-3">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
          <h3 className={`${H3} mt-8 text-ink`}>Lesson Progress Tracking</h3>
          <p className="mt-3">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
          <div className="mt-5 rounded-2xl border border-line p-4">
            <p className="text-xs text-ink">Learning Progress</p>
            <p className="font-display text-4xl font-semibold text-ink">55%</p>
            <div className="mt-2 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
          </div>
        </div>
      )}

      {tab === "Reviews" && (
        <div className="mt-8 text-sm leading-7 text-neutral-600">
          <h3 className={`${H3} text-ink`}>What Learners Are Saying</h3>
          <p className="mt-3">Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
          <div className="mt-6 flex items-center gap-6 rounded-2xl border border-line p-5">
            <div className="grid size-28 shrink-0 place-items-center rounded-xl bg-lime text-center text-ink"><div><p className="text-xs">Ratings</p><p className="font-display text-4xl font-semibold">4.7</p></div></div>
            <ul className="flex-1 space-y-1.5">
              {bars.map(([n, w], i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 rounded-full bg-neutral-200"><div style={{ width: `${w}%` }} className="h-full rounded-full bg-lime" /></div>
                  <span className="hidden text-neutral-700 sm:block">{stars()}</span>
                  <span className="w-9 text-right text-xs">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <h3 className={`${H3} mt-8 text-ink`}>Individual Reviews:</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full bg-lime px-4 py-2 text-ink">All rating</button>
            {[5, 4, 3, 2, 1].map((n) => <button key={n} className="rounded-full bg-chip px-5 py-2">★ {n}</button>)}
          </div>
          <ul className="mt-5 space-y-5">
            {reviews.map(([name, text]) => (
              <li key={name} className="rounded-2xl border border-line p-5">
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-full bg-neutral-300" aria-hidden />
                  <div className="flex-1 leading-tight"><p className="text-ink">{name}</p><p className="text-xs">UI/UX Designer</p></div>
                  <span className="text-xs">a year ago</span>
                </div>
                <p className="mt-4 text-neutral-700">{stars()}</p>
                <p className="mt-3">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
