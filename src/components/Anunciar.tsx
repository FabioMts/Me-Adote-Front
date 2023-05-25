import React, { useState } from "react";
import axios from "axios";
import PageHeader from "./PageHeader/PageHeader";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Anunciar: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    especie: "",
    porte: "",
    sexo: "",
    faixaEtaria: "",
    nomeTutor: "",
    telefoneTutor: "",
    descricao: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/animal", formData);
      console.log(response.data); // Faça o que for necessário com a resposta
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setFormData({
      ...formData,
      [event.target.name as string]: event.target.value as string,
    });
  };
  return (
    <div>
      <PageHeader title="Anuncie seu Pet para ganhar um novo Lar! 🐕" />

      <div className="flex flex-col justify-center items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Nome do Animal"
              name="name"
              value={formData.name}
              multiline
              maxRows={4}
            />
            <TextField
              label="Nome do Tutor"
              name="nomeTutor"
              value={formData.nomeTutor}
              multiline
            />
            <TextField
              label="Telefone tutor"
              name="telefoneTutor"
              value={formData.telefoneTutor}
              multiline
            />
          </div>
        </Box>
      </div>

      <div className="flex justify-center items-center gap-12">
        <div>
          <Box sx={{ m: 1, width: "25ch" }}>
            <FormControl fullWidth onSubmit={handleSubmit}>
              <InputLabel>Especie</InputLabel>
              <Select name="especie" value={formData.especie} label="Especie">
                <MenuItem value="gato">Gato</MenuItem>
                <MenuItem value="cachorro">Cachorro</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ m: 1, width: "25ch" }}>
            <FormControl fullWidth>
              <InputLabel>Faixa Etaria</InputLabel>
              <Select
                name="faixaEtaria"
                value={formData.faixaEtaria}
                label="Descricao"
              >
                <MenuItem value="filhote">Filhote</MenuItem>
                <MenuItem value="jovem">Jovem</MenuItem>
                <MenuItem value="adulto">Adulto</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ m: 1, width: "25ch" }}>
            <FormControl fullWidth>
              <InputLabel>Porte</InputLabel>
              <Select name="porte" value={formData.porte} label="Porte">
                <MenuItem value="pequeno">Pequeno</MenuItem>
                <MenuItem value="medio">Medio</MenuItem>
                <MenuItem value="grande">Grande</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ m: 1, width: "25ch" }}>
            <FormControl fullWidth>
              <InputLabel>Sexo</InputLabel>
              <Select name="sexo" value={formData.sexo} label="Sexo">
                <MenuItem value="macho">Macho</MenuItem>
                <MenuItem value="femea">Fêmea</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex justify-center items-center gap-x-6">
            <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              rows={4}
              defaultValue=""
            />

            <FormGroup>
              <div className="">
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Agressivo"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Brincalhão"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Castrado"
                />
              </div>
              <div className="">
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Sociável"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Vacinado"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="Carente"
                />
              </div>
            </FormGroup>
          </div>
        </Box>
      </div>
      <Button
        className="flex justify-center items-center w-full"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default Anunciar;
