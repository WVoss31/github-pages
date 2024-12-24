import { createSignal, For, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = createSignal(false);
  const location = useLocation(); // Get the current location

  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <header class="bg-white dark:bg-gray-800 shadow-md">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <A href="/" class="text-2xl font-bold text-gray-800 dark:text-white">
          MyBrand
        </A>

        {/* Desktop Menu */}
        <nav class="hidden md:flex space-x-6">
          <For each={routes}>
            {(route) => (
              <A
                href={route.path}
                class={`text-gray-800 dark:text-white transition ${active(
                  route.path,
                )}`}
              >
                {route.name}
              </A>
            )}
          </For>
        </nav>

        {/* Mobile Menu Button */}
        <button
          class="md:hidden text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen())}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={
                isMobileMenuOpen()
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <Show when={isMobileMenuOpen()}>
        <nav class="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div class="space-y-2 px-6 py-4">
            <For each={routes}>
              {(route) => (
                <A
                  href={route.path}
                  class={`block text-gray-800 dark:text-white transition ${active(
                    route.path,
                  )}`}
                >
                  {route.name}
                </A>
              )}
            </For>
          </div>
        </nav>
      </Show>
    </header>
  );
};

export default Navbar;
