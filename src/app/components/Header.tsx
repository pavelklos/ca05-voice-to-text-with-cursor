import { FaUserMd } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <FaUserMd className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold">Doctor Notes</h1>
        </div>
      </div>
    </header>
  )
} 