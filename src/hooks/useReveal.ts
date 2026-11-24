import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to elements with the `reveal` class when they scroll into view.
 *
 * Pass as `deps` anything that remounts the observed children (e.g. the active
 * language, since translated card keys change) so the fresh DOM nodes get
 * observed again — already-revealed nodes are left untouched.
 */
export function useReveal<T extends HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = (
      root.classList.contains("reveal")
        ? [root]
        : Array.from(root.querySelectorAll<HTMLElement>(".reveal"))
    ).filter((el) => !el.classList.contains("is-visible"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      // Fire once the element's top passes 88% of the viewport. A ratio threshold
      // (e.g. 0.15) never fires for blocks taller than ~6 screens, which on phones
      // left the whole services panel stuck at opacity 0.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
