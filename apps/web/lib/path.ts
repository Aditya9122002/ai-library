export type LearningPath = {
  title: string;
  description: string;
  href: string | null;
  status: "available" | "coming-soon";
};

export const paths: LearningPath[] = [
  {
    title: "AI Foundations",
    description: "Start here — core concepts, history, and how AI actually works.",
    href: "/ai-foundations/what-is-ai",
    status: "available",
  },
  {
    title: "Machine Learning",
    description: "Algorithms, training, and model evaluation.",
    href: null,
    status: "coming-soon",
  },
  {
    title: "Deep Learning",
    description: "Neural networks, architectures, and modern AI systems.",
    href: null,
    status: "coming-soon",
  },
];