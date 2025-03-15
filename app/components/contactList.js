import { ContactCard } from "./contactCard";

export default function ContactList({ activeUser, setActiveUser, usersList }) {
  return (
    <section className="p-8">
      <h2>Contact List</h2>
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
