import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../config/api';
import { Pet } from '../types/Pet.type';

export default function PetDetail() {
    const { id } = useParams();

    const [pet, setPet] = useState<Pet>();


    useEffect(() => {
        const run = async () => {
            if(id) {
                const response = await api.get('/animal/'+id);
                setPet(response.data)
            }
        }

        run()
    }, [id])

  return (
    <div>PetDetails: {JSON.stringify(pet)}</div>
  )
}
