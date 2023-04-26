import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  const content = {
    logo: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "AI Daily",
    },

    menus: [
      {
        title: "Home",
        link: "/",
        active: true,
      },
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Contact Me",
        link: "/contact",
      },
    ],
    button: "Login",
  };
  return (
    <header className="flex w-full py-6">
      <nav className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex cursor-pointer flex-row items-center space-x-2">
          <span className="text-yellow-600">{content?.logo?.icon}</span>
          <span className="text-2xl font-bold text-sky-800">
            {content?.logo?.title}
          </span>
        </div>
        {/* Menu Items */}
        <ul className="flex flex-row space-x-8">
          {content?.menus &&
            content?.menus.map((item, i) => (
              <Link href={item?.link} key={i}>
                <li
                  className={`${
                    item?.active ? "font-medium text-sky-700" : "text-sky-600"
                  } transition hover:text-sky-900`}
                >
                  {item?.title}
                </li>
              </Link>
            ))}
        </ul>

        {/* Buttons */}
        {/* <button className="rounded-md bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-900/90 focus:outline-none">
          {content?.button}
        </button> */}
      </nav>
    </header>
  );
}
