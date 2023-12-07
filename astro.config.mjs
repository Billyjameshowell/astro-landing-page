import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://owexlabs.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    sitemap()
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
