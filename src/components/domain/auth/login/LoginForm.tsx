'use client'

import NalitaIcon from "@/components/icons/NalitaIcon"
import GoogleButton from "./GoogleButton";

export default function LoginPage() {
  return (
    <main className="min-h-dvh relative flex items-start justify-center pt-30">

      {/* Contenido */}
      <section className="relative z-10 w-full max-w-md px-4 text-center">

        {/*  icon with red stroke */}
        <NalitaIcon className="mx-auto w-32 h-32 m-0 p-0" />
        <h1 className="text-6xl font-bold text-[#6ec7a2]">Nalita</h1>
        <div className="mt-6 flex justify-center">
          <GoogleButton />
        </div>

      </section>
    </main>
  );
}
