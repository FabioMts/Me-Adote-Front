import React from "react";
import api from "../config/api";
import PetCard from "./PetCard/PetCard";
import PageHeader from "./PageHeader/PageHeader";
import { Pet } from "../types/Pet.type";
import { useNavigate } from "react-router";

const Pets = () => {
  
  const [pets, setPets] = React.useState<Pet[]>([]);
  const navigate = useNavigate()

  const getPets = async () => {
    const response = await api.get("/animal");
    setPets(response.data);
  };
  React.useEffect(() => {
    getPets();
  }, []);

  const goToPetPage = (id: number) => {
    navigate(`/pet/${id}`)
  }

  return (
    <div className="w-full">
      <PageHeader title="Encontre seu novo melhor amigo(a) 🐶🐱"/>
      <div className="m-24 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-12 justify-items-center">
        {pets.map((pet) => {
          return (
            <PetCard
              className="w-full"
              title={pet.name}
              description={pet.descricao}
              faixaEtaria={pet.faixaEtaria}
              porte={pet.porte}
              sexo={pet.sexo}
              onClick={() => goToPetPage(pet.id!!)}
            ></PetCard>
          );
        })}
      </div>
    </div>
  );
};

export default Pets;
