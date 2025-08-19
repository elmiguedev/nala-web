'use client'

import useLogout from "@/hooks/domain/auth/useLogout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NalitaNavbar() {
  const { logout } = useLogout();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

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

          {/* Hamburguesa con toggle */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
            style={{ color: "white" }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Menú colapsable */}
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a onClick={handleLogout} className="button is-outlined">
                  <strong>Logout</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}