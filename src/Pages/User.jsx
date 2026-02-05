import React from 'react'
import { Link } from 'react-router-dom'

export const users = [
  {
    id: '101',
    name: 'Love Kumar',
    username: 'lovekumar',
    email: 'love@example.com',
    phone: '+91 9876543210',
    address: '123 Street, Delhi, India',
    website: 'https://lovekumar.vercel.app',
    company: 'LoveTech Solutions',
    profilePic: 'https://lovekumar.vercel.app/images/Lovek.png',
  },
  {
    id: '102',
    name: 'Imran Khan',
    username: 'imrankhan',
    email: 'imran@example.com',
    phone: '+91 9123456780',
    address: '45 Park Lane, Mumbai, India',
    website: 'https://imran.dev',
    company: 'ImranSoft Pvt Ltd',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '103',
    name: 'Sarah Smith',
    username: 'sarahsmith',
    email: 'sarah@example.com',
    phone: '+1 555 123 4567',
    address: '77 Elm Street, New York, USA',
    website: 'https://sarahsmith.dev',
    company: 'Smith Industries',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '104',
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '+1 555 987 6543',
    address: '22 Baker Street, London, UK',
    website: 'https://johndoe.dev',
    company: 'Doe Enterprises',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '105',
    name: 'Emma Watson',
    username: 'emmawatson',
    email: 'emma@example.com',
    phone: '+44 1234 567890',
    address: '12 Oxford Street, London, UK',
    website: 'https://emmawatson.dev',
    company: 'Watson Media',
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '106',
    name: 'Michael Scott',
    username: 'michaelscott',
    email: 'michael@example.com',
    phone: '+1 555 321 9876',
    address: '1725 Slough Avenue, Scranton, USA',
    website: 'https://michaelscott.dev',
    company: 'Dunder Mifflin',
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: '107',
    name: 'Jennifer Lopez',
    username: 'jlo',
    email: 'jlo@example.com',
    phone: '+1 555 654 3210',
    address: '50 Sunset Blvd, Los Angeles, USA',
    website: 'https://jlo.dev',
    company: 'JLo Entertainment',
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: '108',
    name: 'Robert Downey',
    username: 'rdj',
    email: 'robert@example.com',
    phone: '+1 555 111 2222',
    address: '108 Hollywood St, Los Angeles, USA',
    website: 'https://robertdowney.dev',
    company: 'RDJ Studios',
    profilePic: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: '109',
    name: 'Natalie Portman',
    username: 'natalieportman',
    email: 'natalie@example.com',
    phone: '+1 555 333 4444',
    address: '23 Broadway, New York, USA',
    website: 'https://natalie.dev',
    company: 'Portman Media',
    profilePic: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: '110',
    name: 'Chris Evans',
    username: 'chrisevans',
    email: 'chris@example.com',
    phone: '+1 555 555 6666',
    address: '77 Fifth Ave, New York, USA',
    website: 'https://chrisevans.dev',
    company: 'Evans Productions',
    profilePic: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
]


const User = () => {


   return (
     <div className="min-h-screen bg-gray-100 p-6 select-none">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Users List
      </h1>

      <div className="max-w-md mx-auto space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-xl transition-shadow border-l-4 border-yellow-400"
          >
            {/* Dynamic link to user profile page */}
            <Link
              to={`/user/${user.id}`}
            
              className="text-lg font-semibold text-gray-900 hover:text-yellow-500 transition-colors"
            >
              {user.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User