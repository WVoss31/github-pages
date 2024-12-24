import { createSignal, createEffect, Accessor } from "solid-js";

export function isVisible(ref: () => HTMLElement | null): Accessor<boolean> {
  const [isIntersecting, setIntersecting] = createSignal(false);

  createEffect(() => {
    const element = ref();
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
}
