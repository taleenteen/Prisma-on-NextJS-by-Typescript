'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()


  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'authenticated' && session?.user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <p>
            Welcome, <b>{session.user.name}!</b>
          </p>
          <p>Email: {session.user.email}</p>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  // Handle edge case where session is not loaded or authenticated
  return <div className="flex h-screen items-center justify-center">
  <div className="bg-white p-6 rounded-md shadow-md">
    <p>
      Pls Login First to access this page.
    </p>
    <button
     
      className="w-full bg-blue-500 text-white py-2 rounded"
    >
      Signin
    </button>
  </div>
</div>
}