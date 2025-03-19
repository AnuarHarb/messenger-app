import { useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const NewUserForm = ({ setModal }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const clickHandler = async () => {
    const savedUser = await addDoc(collection(db, "users"), {
      name: name,
      lastName: lastName,
      phone: phone,
      image: image,
    });

    setModal(false);
  };

  return (
    <section
      id="modal"
      className="absolute w-full h-full bg-black/50 top-0 left-0 flex justify-center items-center"
    >
      <article className="bg-gray-100 text-black p-6 h-100 w-100 flex flex-col gap-2">
        <h2 className="text-xl bold">Agregar contacto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            className="border-amber-950 border-2"
            onChange={(event) => setName(event.target.value)}
            value={name}
          ></input>
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            className="border-amber-950 border-2"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          ></input>
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            className="border-amber-950 border-2"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          ></input>
        </div>
        <div>
          <label>Url de Imagen:</label>
          <input
            type="text"
            className="border-amber-950 border-2"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          ></input>
        </div>
        <button
          onClick={() => clickHandler()}
          className="bg-gray-300 p-1 rounded-md text-black hover:bg-gray-100 cursor-pointer active:-translate-y-0.5"
        >
          Agregar
        </button>
      </article>
    </section>
  );
};
