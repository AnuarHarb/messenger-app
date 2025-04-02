import { useState } from "react";
import { db, storage } from "@/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const NewUserForm = ({ setModal }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState();

  const clickHandler = async () => {
    const imagePath = await uploadImage(imageFile);
    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, {
      id: userRef.id,
      name: name,
      lastName: lastName,
      phone: phone,
      image: imagePath || "Parrilla Barranqui.IA.jpg",
    });

    setModal(false);
  };

  const closeHandler = (event) => {
    if (event.target.id === "modal") {
      setModal(false);
    }
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `user-images/${file.name}`);
    const response = await uploadBytes(storageRef, file, {
      contentType: file.type,
    });
    return response.metadata.fullPath;
  };

  return (
    <section
      id="modal"
      onClick={(event) => closeHandler(event)}
      className="absolute w-full h-full bg-black/50 top-0 left-0 flex justify-center items-center"
    >
      <article
        id="modal-card"
        className="bg-gray-100 text-black p-6 h-100 w-100 flex flex-col gap-2"
      >
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
          <label>Imagen:</label>
          <input
            type="file"
            className="border-amber-950 border-2"
            onChange={(event) => setImageFile(event.target.files[0])}
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
