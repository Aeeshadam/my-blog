import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../../lib/constants";
import { NavContainer, NavItem } from "./style";

const Navbar = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <ul>
        {links?.map(({ id, label, route, icon }) => {
          const isActive = router.pathname === route;
          return (
            <NavItem key={id} $isactive={isActive}>
              <Link href={route}>
                <span>
                  {icon} {label}
                </span>
              </Link>
            </NavItem>
          );
        })}
      </ul>
    </NavContainer>
  );
};

export default Navbar;
