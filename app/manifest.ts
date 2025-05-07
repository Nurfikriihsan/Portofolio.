import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nurfikri Ihsan - Portfolio",
    short_name: "Nurfikri Portfolio",
    description: "Portfolio website of Nurfikri Ihsan, a Fullstack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/images/fabicon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/images/fabicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
