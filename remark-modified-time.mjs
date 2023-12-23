import { statSync } from "fs";

//获取文章最后更新时间
export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const result = statSync(filepath);
    file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
  };
}