import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="grid grid-cols-4 w-full py-8 bg-white">
      <div className="col-start-2 flex items-center justify-center w-full h-full">
        <Image src="/rugojato.png" alt="logo" width={200} height={100} />
      </div>
      <div className="flex flex-col w-full gap-4 h-full items-center justify-end">
        <div className="flex items-center justify-end gap-2 text-primary w-full">
          <Link
            href="#"
            className="transform hover:-translate-y-1 transition duration-400"
          >
            <IconBrandInstagram className="size-6" />
          </Link>
          <Link
            href="#"
            className="transform hover:-translate-y-1 transition duration-400"
          >
            <IconBrandFacebook className="size-5" />
          </Link>
          <Link
            href="#"
            className="transform hover:-translate-y-1 transition duration-400"
          >
            <IconBrandWhatsapp className="size-5" />
          </Link>
        </div>
        <div className="flex items-end gap-4 w-full h-5 text-secondary justify-end">
          <Link
            href="#"
            className="uppercase font-bold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
          >
            Home
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="#"
            className="uppercase font-bold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
          >
            Sobre nós
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="#"
            className="uppercase font-bold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
          >
            Serviços
          </Link>
          <Separator orientation="vertical" />
          <Link
            href="#"
            className="uppercase font-bold tracking-wide text-sm transform hover:-translate-y-1 transition duration-400"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};
