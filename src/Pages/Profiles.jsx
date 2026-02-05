import React from 'react'
import { useParams } from 'react-router-dom'
import { users } from './User'

const Profiles = () => {
  const { id } = useParams()
  const user = users.find(u => u.id === id)

  if (!user) {
    return <h2 className="text-center mt-10">User not found</h2>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          {user.name}
        </h1>

        {/* Username */}
        <p className="text-center text-gray-600 mb-4">
          @{user.username}
        </p>

        {/* Details */}
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>

        {/* Website */}
        <div className="mt-4 text-center">
          <a
            href={user.website}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profiles
