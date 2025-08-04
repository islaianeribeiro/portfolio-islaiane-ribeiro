import { useTheme } from "@/contexts/ThemeProvider";
import { ThemeToggle } from "@/components/ui";

type MenuItem = {
  url: string;
  label: string;
};

type NavBarProps = {
  openMenu: boolean;
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
  menuItems: MenuItem[];
};

export default function ClientNavBar({
  openMenu,
  activeIndex,
  setActiveIndex,
  menuItems,
}: NavBarProps) {
  const { isDark } = useTheme();

  return (
    <nav
      id="navbar"
      className={`fixed top-17 w-full p-4 transition-[right] duration-300 ease-in-out
        ${openMenu ? "right-0" : "right-[-100%]"} 
      ${
        isDark ? "bg-dark" : "bg-light"
      } md:static md:flex md:bg-transparent md:ml-20 md:justify-end md:w-lg`}
    >
      <ul className="flex flex-col items-center md:flex-row">
        {menuItems.map((item, index) => (
          <li
            className="p-1 md:inline-block md:py-0 md:px-2.5 lg:px-4"
            key={index}
          >
            <a
              href={item.url}
              onClick={() => setActiveIndex(index)}
              className={`no-underline font-medium text-base block
                ${
                  activeIndex === index
                    ? "border-b md:text-white border-accent scale-[1.08] md:border-0"
                    : ""
                }
                ${
                  isDark ? "text-light" : "text-dark"
                } md:text-white md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-[1.08] `}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="p-1 md:inline-block md:py-0 md:pl-4">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
