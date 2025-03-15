export const ContactCard = ({ user, activeUser, setActiveUser }) => {
  return (
    <article
      className={`${
        activeUser?.name?.last === user.name.last ? "bg-amber-500" : "bg-white"
      } text-black rounded-lg px-4 flex gap-4 items-center hover:bg-amber-100 cursor-pointer`}
      onClick={() => setActiveUser(user)}
    >
      <div className="rounded-lg overflow-hidden">
        <img className="w-full" src={user.picture.thumbnail}></img>
      </div>
      <div>
        <h3>{user.name.first}</h3>
        <p>{user.location.city}</p>
        <p>{user.phone}</p>
      </div>
    </article>
  );
};
