"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import ContactList from "./components/contactList";
import Chat from "./components/chat";

export default function Home() {
  const [activeUser, setActiveUser] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5"); // GET - POST - PUT - DELETE
      const resp = await response.json();
      setUsersList(resp.results);
    };
    getUsers();
  }, []);

  return (
    <section className="h-[100vh]">
      <Header />
      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
        <ContactList
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          usersList={usersList}
        />
        <Chat activeUser={activeUser} />
      </div>
    </section>
  );
}
