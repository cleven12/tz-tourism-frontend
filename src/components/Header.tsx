import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold">
            🗺️ TZ Tourism
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/attractions" className="hover:text-gray-600">
              Attractions
            </Link>
            <Link href="/regions" className="hover:text-gray-600">
              Regions
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
