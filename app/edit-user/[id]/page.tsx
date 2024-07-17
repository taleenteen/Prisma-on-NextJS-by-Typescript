'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import EditUserContainer from '@/app/components/auth/EditUser'

const EditUser = ({ params }: { params: { id: string } }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()
  const { id } = params

  useEffect(() => {
    if (id) {
      fetchUser(id)
    }
  }, [id])

  const fetchUser = async (id: string) => {
    try {
      const res = await axios.get(`/api/user/${id}`)
      const user = res.data
      setName(user.name)
      setEmail(user.email)
      setImage(user.image)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`/api/user/${id}`, { name, email, image })
      router.push('/manage-user')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <EditUserContainer
      handleSubmit={handleSubmit}
      title={`Edit User ${id}`}
      nameValue={name}
      onNameChange={(e) => setName(e.target.value)}
      emailValue={email}
      onEmailChange={(e) => setEmail(e.target.value)}
      imageValue={image}
      onImageChange={(e) => setImage(e.target.value)}
    />
  )
}

export default EditUser