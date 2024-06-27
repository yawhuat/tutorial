import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";    

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Link href="/Services">Services</Link>
      <br />
      <Link href='/contactus'>Contact Us</Link>
    </main>
  );
}
