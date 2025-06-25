require("dotenv").config(); //Busca en la raiz del proyecto y los carga en una variable (es necesario crear un archivo .env)
let express = require('express');
let app = express();
let tareasRoutes = require('./routes/tareas');
let mongose = require("mongoose")

mongose 
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("Conectado a MongoDB Atlas"))
    .catch((err)=> console.error("Error", err));

app.use(express.json());
app.use('/tareas', tareasRoutes);

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
});