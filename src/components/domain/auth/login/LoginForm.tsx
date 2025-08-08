'use client';
import { useRouter } from "next/navigation";
import GoogleButton from "./GoogleButton";

export default function LoginForm() {
  const router = useRouter();

  return (
    <div className="">
      <img src="/img/icons/dog.svg" alt="dog" width={200} />
      <h1 className="is-size-2 has-text-weight-extrabold has-text-nalita-dark mb-5">
        Nalita
      </h1>
      <GoogleButton />
    </div>
  )
}