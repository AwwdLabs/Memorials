import fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles");

export default function handler(req, res) {
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const filePath = path.join(articlesDirectory, fileName);

    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
      slug,
      content: fileContents,
    };
  });

  res.status(200).json(articles);
}
