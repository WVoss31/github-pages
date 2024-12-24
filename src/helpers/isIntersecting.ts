import { createSignal, createEffect, Accessor } from "solid-js";

export function isVisible(ref: HTMLElement): Accessor<boolean> {
  const [isIntersecting, setIntersecting] = createSignal(false);

  createEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
}
