'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// Define a custom user type to include role
interface CustomUser {
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string | null
}

// Extend the session type to include the custom user type
interface CustomSession {
  user?: CustomUser
}

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'authenticated' && session?.user) {
    const user = session.user as CustomUser

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="text-center mb-4">
            {user.image && (
              <img
                src={user.image}
                alt="User profile"
                className="rounded-full w-20 h-20 mx-auto"
              />
            )}
          </div>
          <p>
            Welcome, <b>{user.name}!</b>
          </p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p> {/* Ensure role is part of the custom user type */}
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
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>
          Please Login First to access this page.
        </p>
        <button
          onClick={() => router.push('/signin')}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Signin
        </button>
      </div>
    </div>
  )
}