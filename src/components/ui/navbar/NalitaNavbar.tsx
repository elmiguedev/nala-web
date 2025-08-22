'use client'

import PawIcon from "@/components/icons/PawIcon";
import { signOut } from "next-auth/react";

export default function NalitaNavbar() {

  const handleLogout = async () => {
    signOut();
  };

  return (
    <div className="navbar fixed z-10 bg-base-100 shadow-sm lg:px-30">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl text-success ">
          <PawIcon className="text-neutral" />
          <span className="text-base-content">Nalita</span>
        </a>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            {/* <li><a>Settings</a></li> */}
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}