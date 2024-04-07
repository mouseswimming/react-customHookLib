import { useSyncExternalStore } from "react";

const subscribe = (cb: (event: Event) => void) => {
  window.addEventListener("languagechange", cb);

  return () => window.removeEventListener("languagechange", cb);
};

const getSnapshot = () => {
  return navigator.language;
};

const getServerSnapshot = () => {
  throw Error("usePreferredLanguage is client only hook");
};

export default function usePreferredLanguage() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
