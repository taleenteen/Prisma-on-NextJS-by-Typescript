import React, { FC } from 'react';

interface ContainerProps {
  title: string;
  content: string;
  categoryId: string
  categories: { id: string; name: string }[]
}

const DataContainer: FC<ContainerProps> = ({ title, content,categoryId,categories }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Title
          </label>
          <div className="mt-1 text-lg text-gray-900">{title}</div>
        </div>
        <div>
          <img className="rounded-t-lg w-full max-h-96 object-cover" src="https://www.travelandleisure.com/thmb/YsanesblBhPN7H53wooN4wNdaK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grand-prismatic-yellowstone-national-park-YELLOWSTONEFACTS0222-e004c4c1e068437c8972ea82858b7e53.jpg" alt="" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Category
          </label>
          <div className="flex space-x-4">
  {categories
    .filter((cat) => cat.id === categoryId)
    .map((cat) => (
      <div
        key={cat.id}
        className={`px-4 py-2 border rounded-md bg-blue-500 mt-3 text-white`}
      >
        {cat.name}
      </div>
    ))}
</div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Content
          </label>
          <div className="mt-1 text-gray-700">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default DataContainer;