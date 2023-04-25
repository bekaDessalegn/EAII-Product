import React from 'react'

const categories = [
   { name: "Health"},
   { name: "Health"},
   { name: "Health"},
   { name: "Health"},
   { name: "Health"},
]

const CategoriesComponent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col justify-center items-center'>
        <div className='border-2 p-6 rounded-lg bg-surface'>
      <div className="sm:flex sm:items-center justify-between">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Categories</h1>
        </div>
        <div className="sm:ml-16 sm:mt-0 sm:flex-none">
        <div className='bg-primaryColor text-onPrimary px-4 py-1 rounded-lg cursor-pointer hover:bg-secondaryColor'>
            Add Category
            </div>
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {category.name}
                    </td>
                    <td className="flex flex-row relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div className=''>
                      <a href="#" className="text-primaryColor">
                        Edit
                      </a>
                      </div>
                      <div className='px-3'>
                      <a href="#" className=" text-red-600">
                        Delete
                      </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CategoriesComponent