import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../config/api';
import { Pet } from '../types/Pet.type';
import { Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';

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
    <div className="flex justify-center items-center">
    <Card className={pet?.name} sx={{ maxWidth: 1200, maxHeight: 1200 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        className="h-64"
        image="https://gcdnb.pbrd.co/images/kWgpTGdag4UZ.jpg?o=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet?.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="lowercase grid grid-flow-col gap-x-8 w-full">
        
        </div>
      </CardActions>
    </Card>
    
    
    </div>
  )
}
