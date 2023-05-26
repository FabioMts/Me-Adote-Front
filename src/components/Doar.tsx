import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import PageHeader from "./PageHeader/PageHeader";

const Doar = () => {
  return (
    <div className="w-full">
      <PageHeader title="Fazer uma Doação ❤️" />;
      
      <div className="flex justify-center items-center gap-12">
        <Card className="teste" sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            className="h-64"
            image="https://animais.dantetesta.com.br/wp-content/uploads/2022/06/pix-300x300.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {"Doe via Pix"}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {"Chave:Email"}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {"fabio.thunder@hotmail.com"}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="teste" sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            className="h-64"
            image="https://animais.dantetesta.com.br/wp-content/uploads/2022/06/mercado-pago-300x300.jpg"
          />
          <CardContent></CardContent>
          <CardActions>
            <div className="lowercase grid grid-flow-col gap-x-8 w-full">
              <Button
                className="flex justify-center items-center w-100 h-100"
                variant="contained"
                color="primary"
              >
                Doar com MercadoPago
              </Button>
            </div>
          </CardActions>
        </Card>
        <Card className="teste" sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            className="h-64"
            image="https://animais.dantetesta.com.br/wp-content/uploads/2022/06/paypal-300x300.jpg"
          />
          <CardContent></CardContent>
          <CardActions>
            <div className="lowercase grid grid-flow-col gap-x-8 w-full">
              <Button
                className="flex justify-center items-center w-100 h-100"
                variant="contained"
                color="primary"
              >
                Doar com PayPal
              </Button>
            </div>
          </CardActions>
        </Card>
        <Card className="teste" sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            className="h-64"
            image="https://animais.dantetesta.com.br/wp-content/uploads/2022/06/pag-seguro-300x300.jpg"
          />
          <CardContent></CardContent>
          <CardActions>
            <div className="lowercase grid grid-flow-col gap-x-8 w-full">
              <Button
                className="flex justify-center items-center w-100 h-100"
                variant="contained"
                color="primary"
              >
                Doar com PagSeguro
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Doar;
