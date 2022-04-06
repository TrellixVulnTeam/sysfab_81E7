import axios from 'axios'
import {useState,useEffect} from "react"

import { useNavigate,useParams } from 'react-router-dom'

const URI="http://localhost:8080/Usuarios/";

const CompEditUsuario=()=>{
    const [Nombre, setNombre] = useState('')
    const [NickName, setNickName] = useState('')
    const [Pass, setPass] = useState('')
    const [PrimerMedioContacto, setPrimerMedioContacto] = useState('')
    const [ApellidoPaterno, setApellidoPaterno] = useState('')
    const [ApellidoMaterno, setApellidoMaterno] = useState('')
    const [FechaNacimiento, setFechaNacimiento] = useState('')
    const [Ciudad, setCiudad] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()


    const update= async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{ 
            Nombre:Nombre,
            NickName:NickName,
            Pass:Pass,
            PrimerMedioContacto:PrimerMedioContacto  
        })
        navigate("/")

    }


    useEffect( ()=>{
        getUsuariobyId()   
   
    },[])

    const  getUsuariobyId = async (e) =>{
        const res = await axios.get(URI+id).then(function (response) {
            setNombre(response.data[0].Nombre)
            setNickName(response.data[0].NickName)
            setPass(response.data[0].Pass)
            setPrimerMedioContacto(response.data[0].PrimerMedioContacto)

            setApellidoPaterno(response.data[0].ApellidoPaterno)
            setApellidoMaterno(response.data[0].ApellidoMaterno)
            setFechaNacimiento(response.data[0].FechaNacimiento)
            setCiudad(response.data[0].Ciudad)

          })
        

    }


    return (
        <div>
        <h3>Editar Creado</h3>
        <form onSubmit={update}>
            <div className="mb-3">

                <label className="form-label" >Nombre</label>
                <input 
                value={Nombre}
                onChange={  (e)=> setNombre(e.target.value)  }
                type="text"
                className="formControl"    
                />


            </div>

            <div className="mb-3">
                    <label className="form-label" >Apellido Paterno</label>
                    <input 
                    value={ApellidoPaterno}
                    onChange={  (e)=> setApellidoPaterno(e.target.value)  }
                    type="text"
                    className="formControl"    
                    />
                </div>

            <div className="mb-3">
                <label className="form-label" >Apellido Materno</label>
                <input 
                value={ApellidoMaterno}
                onChange={  (e)=> setApellidoMaterno(e.target.value)  }
                type="text"
                className="formControl"    
                />
            </div>

            <div className="mb-3">
                <label className="form-label" >NickName</label>
                <input value={NickName}
                onChange={  (e)=> setNickName(e.target.value)  }
                type="text"
                className="formControl"    
                />
            </div>

            <div className="mb-3">

                <label className="form-label" >Pass</label>
                <input value={Pass}
                onChange={  (e)=> setPass(e.target.value)  }
                type="password"
                className="formControl"    
                />
            </div>


        <div className="mb-3">

           <label className="form-label" >PrimerMedioContacto</label>
           <input value={PrimerMedioContacto}
           onChange={  (e)=> setPrimerMedioContacto(e.target.value)  }
           type="text"
           className="formControl"    
           />
        </div>

        <div className="mb-3">
                    <label className="form-label" >Fecha de Nacimiento</label>
                    <input 
                    value={FechaNacimiento}
                    onChange={  (e)=> setFechaNacimiento(e.target.value)  }
                    type="date"
                    className="formControl"    
                    />
                </div>


        <div className="mb-3">

            <label className="form-label" >Ciudad</label>
            <input value={Ciudad}
            onChange={  (e)=> setCiudad(e.target.value)  }
            type="text"
            className="formControl"    
            />
        </div>  
            

            <button type="submit" className="btn btn-primary" >Store</button>
        </form>


    </div>

    )

}

export default CompEditUsuario;