const express = require("express");
const cors = require("cors");
const usuario = require('./router/userRoute'); // Arquivo de Rota do Usuário 

const app = express();

const port = 8080;

app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
));

app.use("/users", usuario); // Chamando as rotas do Usuario

app.get("/", (req,res) => {
    res.send({
        message: "Bem Vindo ao Github Finder"
    });
});

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})