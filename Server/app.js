import express from 'express';
import session from 'express-session';
import cors from 'cors';
import db from './database/db.js';



import usersRoutes from './routes/usersRoutes.js'
import ticketsRoutes from './routes/ticketsRoutes.js'
import asignacionCasoRoutes from './routes/asignacionCasoRoutes.js'

import appRoues from './routes/appRoutes.js'


//middlewares

import sessionMiddleware from './middleware/session.js'


const app= express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(session({secret: "6e3df1e2bccb9e5eea0d1822814ed45f"})); //Palabra secreta para sesiones
//FAB en MD5 = 6e3df1e2bccb9e5eea0d1822814ed45f

//middlewares implementaciones
app.use("/Usuarios",sessionMiddleware);
app.use("/Tickets",sessionMiddleware);
app.use("/AsignacionCaso",sessionMiddleware);


//URL App
app.use("/",appRoues);

/**API*/
app.use("/Usuarios",usersRoutes);
app.use("/Tickets",ticketsRoutes);
app.use("/AsignacionCaso",asignacionCasoRoutes);



//app.use("/Catalogos",asignacionCasoRoutes);


try {
    await db.authenticate();
    console.log("Conexxion a la BD")
} catch (error) {

    console.log(`Error en la conexxion:  ${error} `)
}




app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})



app.listen(8080,()=>{
    console.log("Servidor corriendo")
})