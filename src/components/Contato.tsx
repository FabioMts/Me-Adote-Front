import React from "react";
import PageHeader from "./PageHeader/PageHeader";
import { Box, Button, TextField } from "@mui/material";

const Contato = () => {
  return (
    <div>
      <PageHeader title="Entre em contato 📞" />
      <div className="flex flex-col justify-center items-center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex flex-col justify-center items-center ">
            <div className="">
              <TextField label="Nome" name="name" multiline maxRows={4} />
            </div>
            <TextField label="Email" name="nomeTutor" multiline />
            <TextField label="Whatsapp" name="telefoneTutor" multiline />
            <TextField
              label="Mensagem"
              name="descricao"
              multiline
              rows={4}
              defaultValue=""
            />
          </div>
        </Box>
        <Button
          className="flex justify-center items-center w-100 h-100"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
      
    </div>
  );
};

export default Contato;
