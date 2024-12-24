import React from "react";
import Link from "next/link";
import { links } from "../../constants";
import { NavContainer } from "./style";

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        {links.map(({ id, label, route, icon }) => (
          <li key={id}>
            <Link href={route}>
              <span>
                {icon} {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Navbar;
