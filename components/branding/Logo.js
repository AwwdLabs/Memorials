import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="">
      <Link href="/">
        <Image src="/marcos-slate.png" width={200} height={200} />
      </Link>
    </div>
  );
}
