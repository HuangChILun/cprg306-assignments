import Link from "next/link";


export default function StudentInfo() {
    const linkStyles = "underline text-cyan-500 hover:text-cyan-300";
    return (
      <div>
      <h1>my name is Chilun</h1>
      <Link className={linkStyles} href="https://github.com/HuangChILun/cprg306-assignments">GitHub repository </Link>
      </div>
    );
  }