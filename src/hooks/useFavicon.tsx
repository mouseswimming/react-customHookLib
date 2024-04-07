import { useEffect } from "react";

export default function useFavicon(url: string) {
  useEffect(() => {
    // try to select the favicon link
    let link = document.querySelector(`link[rel~="icon"]`) as HTMLLinkElement;

    if (!link) {
      link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = url;
  }, [url]);

  return null;
}
