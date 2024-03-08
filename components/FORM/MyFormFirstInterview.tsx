import React from 'react'

const MyFormFirstInterview = () => {
  return (
    <div>
        <h3>Formulario entrevista inicial</h3>
        <form>
            <div>
               <label>Nombre</label>
               <input type='text'></input> 
               <label>Apellidos</label>
               <input type='text'></input> 
            </div>
            <div>
               <label>Familiares</label>
               <input type='text'></input> 
               <label>Fecha de nacimiento</label>
               <input type='text'></input> 
               <label>Fecha de entrevista</label>
               <input type='text'></input> 
            </div>
            <div>
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