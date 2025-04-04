import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-amber-300 flex justify-between align-middle text-black py-4">
      <h2>Chatapp</h2>
      <ul>
        <Link href="/">Chats</Link>
        <li>Perfil</li>
      </ul>
    </nav>
  );
}
