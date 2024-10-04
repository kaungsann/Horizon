"use client";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer flex items-center gap-2 "
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Myanbank logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">MyanBank</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link text-10 font-semibold text-black-2", {
                "bg-bank-gradient text-white": isActive,
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
