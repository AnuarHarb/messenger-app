"use client";

import { useState } from "react";
import Header from "./components/header";
import ContactList from "./components/contactList";
import Chat from "./components/chat";

export default function Home() {
  const [activeUser, setActiveUser] = useState("");

  return (
    <section>
      <Header />
      <div className="flex">
        <ContactList setActiveUser={setActiveUser} />
        <Chat activeUser={activeUser} />
      </div>
    </section>
  );
}
