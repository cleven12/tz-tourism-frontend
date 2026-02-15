export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">TZ Tourism</h3>
            <p className="text-sm text-gray-600">
              Open-source tourism platform for Tanzania
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="/about">About</a></li>
              <li><a href="/api-docs">API Docs</a></li>
              <li><a href="https://github.com/yourusername/tz-tourism-web">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} TZ Tourism. Open-source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
