"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import ContactList from "./components/contactList";
import Chat from "./components/chat";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [activeUser, setActiveUser] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      //   const response = await fetch("https://randomuser.me/api/?results=5"); // GET - POST - PUT - DELETE
      //   const resp = await response.json();
      //   setUsersList(resp.results);

      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const users = usersSnapshot.docs.map((user) => user.data());
      console.log(users);
      setUsersList(users);
    };
    getUsers();
  }, []);

  return (
    <section className="bg-linear-to-bl from-sky-400 to-purple-950">
      <Header />
      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
        <ContactList
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          usersList={usersList}
        />
        {activeUser ? (
          <Chat activeUser={activeUser} />
        ) : (
          <p>Seleccióna un usuario</p>
        )}
      </div>
    </section>
  );
}
