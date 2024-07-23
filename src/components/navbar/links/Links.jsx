"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  // TEMPORARY
  
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
            <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
          </>
        ) : (
          <NavLink item={{ path: "/login", title: "Login" }} />
        )}
      </div>
      {!open ? (
        <Image
          className={styles.menuButton}
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuButton}
        >
          X
        </button>
      )}

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              key={link.title}
              item={link}
            />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}

              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ path: "/login", title: "Login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
