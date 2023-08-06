import path from 'path';
import fs from 'fs/promises';
import remark from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'pages', 'articles');

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getArticleSlugs() {
  const fileNames = await fs.readdir(articlesDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getArticleBySlug(slug) {
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const contentHtml = await markdownToHtml(fileContents);

  return {
    slug,
    contentHtml,
  };
}
