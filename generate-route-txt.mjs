import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// 为镜像站点生成 route.txt 文件
export default function generateRouteTxt() {
  let siteFromConfig = "";
  return {
    name: "generate-route-txt",
    hooks: {
      "astro:config:setup": ({ config }) => {
        siteFromConfig = config.site || "";
      },
      "astro:build:done": async ({ pages, dir, logger }) => {
        const site = process.env.KS_SITE || siteFromConfig || "";
        const lines = pages.map((page) => {
          const path = page.pathname.startsWith("/")
            ? page.pathname
            : "/" + page.pathname;
          return site + path;
        });
        const output = lines.join("\n");
        writeFileSync(fileURLToPath(new URL("route.txt", dir)), output);
        logger.info("Generated route.txt");
      },
    },
  };
}
