'use client'

import React, { FC, FormEvent } from 'react'

interface FormContainerProps {
  handleSubmit: (e: FormEvent) => void
  title: string
  titleValue: string
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  contentValue: string
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  categoryId: string
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  categories: { id: string; name: string }[]
}

const FormContainer: FC<FormContainerProps> = ({
  handleSubmit,
  title,
  titleValue,
  onTitleChange,
  contentValue,
  onContentChange,
  categoryId,
  onCategoryChange,
  categories
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={titleValue}
            onChange={onTitleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            required
            rows={4}
            value={contentValue}
            onChange={onContentChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <select
          value={categoryId}
          onChange={onCategoryChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormContainer