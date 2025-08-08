'use client'

import NalitaPrimaryButton from "@/components/ui/buttons/NalitaPrimaryButton";
import NalitaTextField from "@/components/ui/input/NalitaTextField";
import useRegister from "@/hooks/domain/auth/useRegister";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const { register, loading } = useRegister();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await register({
      email,
      password,
      name
    });

    router.push("/");

  };

  return (
    <div className="">
      <img src="/img/icons/dog.svg" alt="dog" width={200} />
      <h1 className="is-size-2 has-text-weight-extrabold has-text-nalita-dark mb-5">
        Register
      </h1>
      <form onSubmit={handleSubmit} className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <div style={{ width: "300px" }}>
          <NalitaTextField type="text" placeholder="Name" name="name" />
          <NalitaTextField type="email" placeholder="Email" name="email" />
          <NalitaTextField type="password" placeholder="Password" name="password" />
          <NalitaTextField type="password" placeholder="Repeat Password" name="repeatPassword" />
          <NalitaPrimaryButton loading={loading} className="p-3" label="Register" type={"submit"} fullWidth />
        </div>
      </form>
    </div>
  )
}