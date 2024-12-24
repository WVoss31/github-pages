import { A } from "@solidjs/router";
import Hero from "~/components/Hero";
import { isVisible } from "~/helpers/isIntersecting";
import { Button } from "@/components/ui/button";

export default function Home() {
  let ref: HTMLElement | null = null;
  const isVisibleBool = isVisible(() => ref);
  return (
    <>
      <Hero
        title="Under Active Development"
        subtitle="Please check back later"
        actionName="About Me"
      />
      {/* Beginning of Animated Cover Page */}
      <div class="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div
          ref={(element) => (ref = element)}
          class={`text-center transition-opacity ease-in duration-700 ${
            isVisibleBool() ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 class="text-4xl font-bold mb-4">About this Webpage</h2>
          <p class="text-xl mb-8 ml-4 mr-4">
            Read about the technology stack and development process
          </p>
          <Button color="primary">View Devlog</Button>
        </div>
      </div>
      <h2 class="text-4xl font-bold text-center mt-5">Preview My Projects</h2>
      <div>{/* Cards go Here */}</div>
    </>
  );
}
