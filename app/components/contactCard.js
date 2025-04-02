export const ContactCard = ({ user, activeUser, setActiveUser }) => {
  return (
    <article
      className={`${
        activeUser?.name === user.name ? "bg-amber-500" : "bg-white"
      } text-black rounded-lg px-4 flex gap-4 items-center hover:bg-amber-100 cursor-pointer`}
      onClick={() => setActiveUser(user)}
    >
      <div className="rounded-lg overflow-hidden">
        <img className="w-[100px]" src={user.image}></img>
      </div>
      <div>
        <h3>{user.name}</h3>
        <p>{user.lastName}</p>
        <p>{user.phone}</p>
      </div>
    </article>
  );
};
