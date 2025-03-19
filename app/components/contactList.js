import { useState } from "react";
import { LuBookUser } from "react-icons/lu";
import { ContactCard } from "./contactCard";
import { NewUserForm } from "./newUserForm";

export default function ContactList({ activeUser, setActiveUser, usersList }) {
  const [modal, setModal] = useState(false);

  return (
    <section className="p-8">
      {modal && <NewUserForm setModal={setModal} />}

      <div className="flex justify-between py-4">
        <h2 className="text-3xl bold">Contact List</h2>
        <button
          onClick={() => setModal(true)}
          className="bg-gray-300 p-1 rounded-md text-black hover:bg-gray-100 cursor-pointer active:-translate-y-0.5"
        >
          <LuBookUser />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {usersList &&
          usersList.map((user, index) => (
            <ContactCard
              key={index}
              user={user}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          ))}
      </div>
    </section>
  );
}
