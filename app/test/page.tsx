

import {createUser} from "@/app/libs/crud"

function createPage() {
  return (
    <div className='max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen'>
        <h1 className='text-4xl text-gray-800'>Creating new user</h1>
        <div>
            <form action={createUser }>
                <button type='submit' className='px-10 py-1 border border-blue-700'>Create User</button>
            </form>
        </div>
      
    </div>
  )
}

export default createPage
