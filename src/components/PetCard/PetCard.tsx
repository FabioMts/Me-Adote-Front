import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export default function PetCard({
  title,
  description,
  faixaEtaria,
  porte,
  sexo,
  className,
}: any) {
  return (
    <Card className={className} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        className="h-64"
        image="https://gcdnb.pbrd.co/images/kWgpTGdag4UZ.jpg?o=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="lowercase grid grid-flow-col gap-x-8 w-full">
        <Chip label={faixaEtaria} color="primary" />
        <Chip label={porte} color="primary" />
        <Chip label={sexo} color="primary" />
        </div>
      </CardActions>
    </Card>
  );
}
