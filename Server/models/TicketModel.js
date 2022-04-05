import db from "../database/db.js";
import { DataTypes } from "sequelize";




const TicketModel= db.define("Ticket",{
   
    Usuaria:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },


    Semaforo_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate:{
            isInt: true,
            isIn:{
                   args:[[1,2,3,4,5,6,7,8,9,10]],
                   msg:"El semaforo no es valido "
               }
        }
      },
      
    
    Descripcion:{
        type:DataTypes.STRING,
        allowNull: true,
        validate:{
            len:{
                   args:[15,300],
                   msg:"La descripcion  tiene que estar entre 15 y 300 catacteres"
               }
        }
      
    }, 

   
}, { timestamps: false,  freezeTableName: true});

export default TicketModel;