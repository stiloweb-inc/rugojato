import Link from "next/link";
import { MenuFluid, MenuItem } from "../menu-fluid";

export const Header = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Sobre nós",
      href: "#about",
    },
    {
      label: "Serviços",
      href: "#services",
    },
    {
      label: "Contato",
      href: "#contact",
    },
  ];

  return (
    <header className="flex items-center justify-center h-[6rem] w-full fixed my-4 z-40">
      <div className="grid grid-cols-3 w-4/5 h-full gap-4 rounded-4xl bg-white px-12 shadow-lg">
        <div className="flex items-center justify-start">
          <Link href="#home">
            <img src="/rugojato.png" alt="logo" className="w-48" />
          </Link>
        </div>
        <div className="col-span-2 flex items-center gap-12 w-full justify-end">
          <MenuFluid menuItems={items} />
          <div className="flex items-center gap-4 justify-center">
            <Link
              href="#"
              className="uppercase font-semibold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
            >
              <img src="/icons/facebook.svg" alt="logo" className="size-5" />
            </Link>
            <Link
              href="#"
              className="uppercase font-semibold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
            >
              <img src="/icons/instagram.svg" alt="logo" className="size-5" />
            </Link>
            <Link
              href="#"
              className="uppercase font-semibold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
            >
              <img src="/icons/whatsapp.svg" alt="logo" className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
