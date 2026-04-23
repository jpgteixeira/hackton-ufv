import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-black p-6 flex justify-center items-center gap-8 uppercase tracking-widest text-sm bg-white sticky top-0 z-50">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/details" className="hover:underline">Details</Link>
            <Link href="/register" className="hover:underline">Register & Content</Link>
            <Link href="/map-location" className="hover:underline">Map</Link>

        </nav>
    );
}