'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import FormContainer from '../components/post/Form'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchCategories()
  }, [])

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
      await axios.post('/api/posts', { title, content, categoryId })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormContainer
      handleSubmit={handleSubmit}
      title="Create a New Post"
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

export default CreatePost