// 'use client';
import Link from 'next/link';
import'./Header.css';

export default function Header() {
  return (
    <header className="header" id='header'>
      <nav className="nav">
        {/* <Link href="/" className="link">Home</Link>
        <Link href="/about" className="link">About</Link>
        <Link href="/services" className="link">Services</Link>
        <Link href="/contact" className="link">Contact</Link> */}
        <Link href="/" className="link">Home</Link>
        <Link href="/hotels" className="link">Hotels</Link>
        <Link href="/rooms" className="link">Rooms</Link>
        <Link href="/booked" className="link">Booked Rooms</Link>
      </nav>
    </header>
  );
}
