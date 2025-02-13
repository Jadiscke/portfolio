import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-primary-100/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="flex gap-6">
            <Link href="/" className="text-white hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/#projects" className="text-white hover:text-primary-500 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-white hover:text-primary-500 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-white hover:text-primary-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;