'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import DataContainer from '@/app/components/post/Blog'

const BlogDetail = ({ params }: { params: { id: string } }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
    const router = useRouter();
    const { id } = params;
  
    useEffect(() => {
      if (id) {
        fetchPost(id);
        fetchCategories();
      }
    }, [id]);
  
    const fetchPost = async (id: string) => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
        setCategoryId(res.data.categoryId);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories');
        setCategories(res.data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };
  
    return (
      <DataContainer
        title={title}
        content={content}
        categoryId={categoryId}
        categories={categories}
      />
    );
  };

export default BlogDetail