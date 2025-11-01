"use client";

import PillNav from "../PillNav/PillNav";

const Navbar = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-20 py-4 bg-transparent">
      <div className="container mx-auto flex justify-center">
        <PillNav
          logo="/file.svg"
          items={items}
          baseColor="transparent"
          pillColor="#121212"
          pillTextColor="#ffffff"
          hoveredPillColor="#ffffff"
          hoveredPillTextColor="#121212"
        />
      </div>
    </header>
  );
};

export default Navbar;
