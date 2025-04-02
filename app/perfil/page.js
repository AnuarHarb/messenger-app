"use client";
import Header from "../components/header";
import { useSearchParams } from "next/navigation";

const ProfileQuery = () => {
  const params = useSearchParams();
  const userName = params.get("userName");

  return (
    <section>
      <Header />
      <h2>Perfil de {userName}</h2>
    </section>
  );
};

export default ProfileQuery;
