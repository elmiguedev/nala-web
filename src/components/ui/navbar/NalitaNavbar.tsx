'use client'

import useLogout from "@/hooks/domain/auth/useLogout";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NalitaNavbarProps {

}

export default function NalitaNavbar(props: NalitaNavbarProps) {
  const { logout } = useLogout();
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/login");
  }

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item is-flex is-align-items-center" href="/">
            <img style={{ color: "white" }} src="/img/icons/paw.svg" height="40" />
            <span className="nalita-font-brand has-text-nalita-light">
              Nalita
            </span>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a onClick={handleLogout} className="button  is-outlined">
                <strong>Logout</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}