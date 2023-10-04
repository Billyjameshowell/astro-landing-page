import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://owexlabs.com",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});