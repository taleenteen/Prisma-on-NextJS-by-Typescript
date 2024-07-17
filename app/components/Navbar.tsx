"use client"
import Link from "next/link";
import Image from "next/image";
import { FcHome } from "react-icons/fc";
import { useSession, signOut } from 'next-auth/react'

interface CustomUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
}

interface CustomSession {
  user?: CustomUser;
}

export default function NavBar() {
  const { data: session, status } = useSession() as { data: CustomSession, status: string };

  if (session?.user?.role === "USER") {
    const user = session.user;
    console.log(user.role);

    return (
      <nav className="flex items-center justify-between py-4 px-16 bg-white fixed w-full">
        <Link href="/">
          <FcHome className="text-4xl mr-2" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blog
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="rounded-md bg-red-400 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
  if (session?.user?.role === "ADMIN") {
    return (
      <nav className="flex items-center justify-between py-4 px-16 bg-white fixed w-full">
        <Link href="/">
          <FcHome className="text-4xl mr-2" />
        </Link>
        <div className="flex items-center justify-center gap-4">
        <Link
            href="/blog"
            className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blog
          </Link>
          <Link
            href="/manage-user"
            className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Manage User
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="rounded-md bg-red-400 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
      
  else
  return (
    <nav className="flex items-center justify-between py-4 px-16 bg-white fixed w-full">
      <Link href="/">
      <FcHome className="text-4xl mr-2" />
      </Link>
      <div className="flex items-center justify-center gap-4">
      <Link
          href="/blog"
          className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Blog
        </Link>
        <Link
          href="/signin"
          className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}