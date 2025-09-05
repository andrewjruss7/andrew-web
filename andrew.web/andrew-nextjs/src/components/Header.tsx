'use client';

export default function Header() {

  return (
    <header className="site-header sticky top-0 bg-black z-20 border-b border-gray-800">
      <nav className="nav flex items-center justify-between min-h-16 container">
        <a className="brand no-underline text-white text-4xl" href="#hero" aria-label="Volver al inicio" style={{fontFamily: 'Corinthia, cursive', fontWeight: '900'}}>
          Andrew J. Russ
        </a>
      </nav>
    </header>
  );
}

