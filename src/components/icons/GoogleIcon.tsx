import Image from "next/image";
import googleIcon from "./svg/google-white.svg";

export default function GoogleIcon() {
  return <Image
    src={googleIcon}
    alt="Google icon"
    style={{ fill: "white" }}
  />;
}