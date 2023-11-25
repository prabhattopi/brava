"use client";
import { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
let links = [
  { id: 1, title: "brand", url: "/" },
  { id: 2, title: "shop", url: "/menu" },
  { id: 3, title: "premium", url: "/" },
  { id: 4, title: "giftcards", url: "/contact" },
];
const MenuPage = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div onClick={() => setOpen(!open)}>
      {!open ? (
        <RxHamburgerMenu className="text-yellow-500" size={25} />
      ) : (
        <RxCross2 className="text-yellow-500" size={25} />
      )}
      {open && (
        <div className="bg-gray-500 text-white w-full absolute left-0 top-12 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10">
          {links.map((e) => (
            <Link onClick={() => setOpen(false)} href={e.url} key={e.id}>
              {e.title}
            </Link>
          ))}

          <Link href="/login">
            <LuUser2 size={25} />
          </Link>
          <Link href="/">
            <FiShoppingBag size={25} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default MenuPage;
