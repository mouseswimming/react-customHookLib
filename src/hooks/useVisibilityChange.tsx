import { useSyncExternalStore } from "react";

type VisibilityChangeCallback = (this: Document, ev: Event) => void;
const subsrcibe = (callback: VisibilityChangeCallback) => {
  document.addEventListener("visibilitychange", callback);

  return () => document.removeEventListener("visibilitychange", callback);
};

const getSnapshot = () => {
  return document.visibilityState;
};

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

export default function useVisibilityChange() {
  const visibilityState = useSyncExternalStore(
    subsrcibe,
    getSnapshot,
    getServerSnapshot
  );
  return visibilityState === "visible";
}
