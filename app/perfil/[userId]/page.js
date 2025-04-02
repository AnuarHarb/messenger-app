"use client";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import { useParams } from "next/navigation";
import Header from "../../components/header";

// Este es resultado de una ruta dinámica
const ProfileDynamic = () => {
  const params = useParams();
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const userRef = doc(db, "users", params.userId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      setUser(userData);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      const imageRef = ref(storage, user.image);
      const imageUrl = await getDownloadURL(imageRef);
      setImage(imageUrl);
    };

    if (user) {
      getImage();
    }
  }, [user]);

  return (
    <section>
      <Header />
      {user ? (
        <section>
          <h2>Perfil de usuario: {user.name}</h2>
          <img src={image}></img>
        </section>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};

export default ProfileDynamic;
