import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Link href="/de">DE</Link>
    </main>
  );
}
