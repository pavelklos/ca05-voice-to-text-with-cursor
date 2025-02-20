export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Doctor Notes. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 