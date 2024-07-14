'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import FormContainer from '@/app/components/post/Form'

const Edit = ({ params }: { params: { id: string } }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const router = useRouter()
  const { id } = params

  useEffect(() => {
    if (id) {
      fetchPost(id)
      fetchCategories()
    }
  }, [id])

  const fetchPost = async (id: string) => {
    try {
      const res = await axios.get(`/api/posts/${id}`)
      setTitle(res.data.title)
      setContent(res.data.content)
      setCategoryId(res.data.categoryId)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories')
      setCategories(res.data)
    } catch (error) {
      console.error('Failed to fetch categories', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`/api/posts/${id}`, {
        title,
        content,
        categoryId,
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormContainer
      handleSubmit={handleSubmit}
      title={`Edit Post ${id}`}
      titleValue={title}
      onTitleChange={(e) => setTitle(e.target.value)}
      contentValue={content}
      onContentChange={(e) => setContent(e.target.value)}
      categoryId={categoryId}
      onCategoryChange={(e) => setCategoryId(e.target.value)}
      categories={categories}
    />
  )
}

export default Edit