import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-cyan-500 hover:text-cyan-300";
  return (
    <main>
       <h1>CPRG 306: Web Development 2 - Assignments</h1>
       <Link className={linkStyles} href="./week-2">Week2</Link>
       <div>
       <Link className={linkStyles} href="./week-3">week3</Link>
       </div>
    </main>
  );
}
