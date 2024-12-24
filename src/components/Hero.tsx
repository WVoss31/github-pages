import { Button } from "@/components/ui/button";
import { JSX } from "solid-js";

const Hero = ({
  title,
  subtitle,
  actionName,
}: {
  title: string;
  subtitle: string;
  actionName: string;
}): JSX.Element => (
  <div class="h-screen bg-cover bg-center flex items-center justify-center text-white">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-4">{title}</h1>
      <p class="text-xl mb-8">{subtitle}</p>
      <Button>{actionName}</Button>
    </div>
  </div>
);

export default Hero;
