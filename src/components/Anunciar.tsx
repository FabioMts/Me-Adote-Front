import React, { useState } from "react";
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
import { Pet } from "../types/Pet.type";
import api from "../config/api";
import { useNavigate } from "react-router";

const Anunciar: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<Pet>({
    name: "",
    especie: "",
    porte: "",
    sexo: "",
    faixaEtaria: "",
    nomeTutor: "",
    telefoneTutor: "",
    descricao: "",
    agressivo: false,
    brincalhao: false,
    carente: false,
    castrado: false,
    sociavel: false,
    vacinado: false,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await api.post("/animal", formData);
      navigate('/pet/'+response.data.id)
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

  const handleSelectChange = (campo: string, e: any) => {
    setFormData({
      ...formData,
      [campo]: e.target.value,
    });
  };

  const handleCheckboxChange = (campo: string, e: any) => {
    setFormData({
      ...formData,
      [campo]: e.target.checked,
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
              onChange={handleChange}
            />
            <TextField
              label="Nome do Tutor"
              name="nomeTutor"
              value={formData.nomeTutor}
              multiline
              onChange={handleChange}
            />
            <TextField
              label="Telefone tutor"
              name="telefoneTutor"
              value={formData.telefoneTutor}
              multiline
              onChange={handleChange}
            />
          </div>
        </Box>
      </div>

      <div className="flex justify-center items-center gap-12">
        <div>
          <Box sx={{ m: 1, width: "25ch" }}>
            <FormControl fullWidth onSubmit={handleSubmit}>
              <InputLabel>Especie</InputLabel>
              <Select
                name="especie"
                value={formData.especie}
                label="Especie"
                onChange={(value) => handleSelectChange("especie", value)}
              >
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
                onChange={(value) => handleSelectChange("faixaEtaria", value)}
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
              <Select
                name="porte"
                value={formData.porte}
                label="Porte"
                onChange={(value) => handleSelectChange("porte", value)}
              >
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
              <Select
                name="sexo"
                value={formData.sexo}
                label="Sexo"
                onChange={(value) => handleSelectChange("sexo", value)}
              >
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
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              multiline
              rows={4}
              defaultValue=""
            />

            <FormGroup>
              <div className="">
                <FormControlLabel
                  value={formData.agressivo}
                  control={<Checkbox />}
                  label="Agressivo"
                  onChange={(e) => handleCheckboxChange("agressivo", e)}
                />
                <FormControlLabel
                  value={formData.brincalhao}
                  control={<Checkbox />}
                  label="Brincalhão"
                  onChange={(e) => handleCheckboxChange("brincalhao", e)}
                />
                <FormControlLabel
                  value={formData.castrado}
                  control={<Checkbox />}
                  label="Castrado"
                  onChange={(e) => handleCheckboxChange("castrado", e)}
                />
              </div>
              <div className="">
                <FormControlLabel
                  value={formData.sociavel}
                  control={<Checkbox />}
                  label="Sociável"
                  onChange={(e) => handleCheckboxChange("sociavel", e)}
                />
                <FormControlLabel
                  value={formData.vacinado}
                  control={<Checkbox />}
                  label="Vacinado"
                  onChange={(e) => handleCheckboxChange("vacinado", e)}
                />
                <FormControlLabel
                  value={formData.carente}
                  control={<Checkbox />}
                  label="Carente"
                  onChange={(e) => handleCheckboxChange("carente", e)}
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
