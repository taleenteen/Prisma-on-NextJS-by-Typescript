interface EditUserContainerProps {
    handleSubmit: (e: React.FormEvent) => void
    title: string
    nameValue: string
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    emailValue: string
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    imageValue: string
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  const EditUserContainer: React.FC<EditUserContainerProps> = ({
    handleSubmit,
    title,
    nameValue,
    onNameChange,
    emailValue,
    onEmailChange,
    imageValue,
    onImageChange,
  }) => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={nameValue}
              onChange={onNameChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailValue}
              onChange={onEmailChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={imageValue}
              onChange={onImageChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    )
  }

  export default EditUserContainer