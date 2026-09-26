import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

const CONTENT_DIR = path.join(process.cwd(), "..", "..", "content");

export function getChapterContent(book: string, chapter: string) {
  const chapterDir = path.join(CONTENT_DIR, book, chapter);

  if (!fs.existsSync(chapterDir)) {
    return null;
  }

  const metadataPath = path.join(chapterDir, "metadata.yaml");
  const overviewPath = path.join(chapterDir, "overview.md");
  const lessonPath = path.join(chapterDir, "lesson.md");
  const resourcesPath = path.join(chapterDir, "resources.md");

const metadata = fs.existsSync(metadataPath)
  ? (yaml.load(fs.readFileSync(metadataPath, "utf-8")) as Record<string, unknown>)
  : {};

  const overview = fs.existsSync(overviewPath)
    ? fs.readFileSync(overviewPath, "utf-8")
    : "";

  const lesson = fs.existsSync(lessonPath)
    ? fs.readFileSync(lessonPath, "utf-8")
    : "";

  const resources = fs.existsSync(resourcesPath)
    ? fs.readFileSync(resourcesPath, "utf-8")
    : "";

  return { metadata, overview, lesson, resources };
}