const fs = require("fs");
const path = require("path");

const chapters = [
  { slug: "how-ai-thinks", title: "How AI Actually \"Thinks\" at a High Level", difficulty: "Beginner", time: "25-40 minutes" },
  { slug: "data-fuel-of-ai", title: "Data: The Fuel Behind AI", difficulty: "Beginner", time: "25-35 minutes" },
  { slug: "training-vs-using-ai", title: "Training vs Using AI", difficulty: "Beginner", time: "20-30 minutes" },
  { slug: "how-ai-learns", title: "How AI Learns: Supervised, Unsupervised, and Reinforcement Learning", difficulty: "Beginner", time: "30-40 minutes" },
  { slug: "main-families-of-ai", title: "Main Families of AI Today", difficulty: "Beginner", time: "25-35 minutes" },
  { slug: "branches-of-ai", title: "Branches of AI: NLP, Computer Vision, and Robotics", difficulty: "Beginner", time: "25-35 minutes" },
  { slug: "generative-ai-and-llms", title: "Generative AI and Large Language Models", difficulty: "Beginner-Intermediate", time: "30-45 minutes" },
  { slug: "ai-agents", title: "AI Agents: When AI Takes Action", difficulty: "Beginner-Intermediate", time: "20-30 minutes" },
  { slug: "ai-in-daily-life", title: "Where AI Shows Up in Daily Life", difficulty: "Beginner", time: "20-30 minutes" },
  { slug: "popular-ai-tools", title: "Popular AI Tools You Can Try Today", difficulty: "Beginner", time: "20-30 minutes" },
  { slug: "ai-limitations", title: "AI Limitations and Failure Modes", difficulty: "Beginner", time: "25-35 minutes" },
  { slug: "responsible-ai-and-next-steps", title: "Responsible AI, Safety, and the Road Ahead", difficulty: "Beginner-Intermediate", time: "25-40 minutes" },
];

const BASE = path.join(__dirname, "..", "content", "ai-foundations");

for (const ch of chapters) {
  const dir = path.join(BASE, ch.slug);
  fs.mkdirSync(dir, { recursive: true });

  const metadata = `title: ${ch.title}\ndifficulty: ${ch.difficulty}\ntime: ${ch.time}\ntags:\n  - ai\n  - foundations\n`;

  fs.writeFileSync(path.join(dir, "metadata.yaml"), metadata);
  fs.writeFileSync(path.join(dir, "overview.md"), "");
  fs.writeFileSync(path.join(dir, "lesson.md"), "");
  fs.writeFileSync(path.join(dir, "resources.md"), "");

  console.log(`Created: ${ch.slug}`);
}