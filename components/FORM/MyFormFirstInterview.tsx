import React from 'react'
import styleMyForm from './MyFormFirstInterview.module.css'

const MyFormFirstInterview = () => {
  return (
    <div>
        
        <form className={styleMyForm.boxForm}>
        <h3>Formulario entrevista inicial</h3>
            <div className={styleMyForm.personalDataBox}>
                <div className={styleMyForm.nameBox}>
                    <label>Nombre</label>
                    <input type='text'></input> 
                    <label>Apellidos</label>
                    <input type='text'></input> 
                    <label>Familiares</label>
                    <input type='text'></input> 
                </div>
                <div className={styleMyForm.dateDataBox}> 
                    <label>Fecha de nacimiento</label>
                    <input type='date'></input> 
                    <label>Fecha de entrevista</label>
                    <input type='date'></input> 
                    <label>Contacto</label>
                    <input type='number'></input> 
                </div>
            </div>
            <div className={styleMyForm.medicalDataBox}>
               <label>Diagnóstico</label>
               <input type='text'></input> 
               <label>Motivo de consulta</label>
               <input type='text'></input> 
               <label>Historial previo</label>
               <input type='text'></input> 
            </div>
            
        </form>



    </div>
  )  
}

export default MyFormFirstInterview