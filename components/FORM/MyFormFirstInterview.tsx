import React from 'react'
import styleMyForm from './MyFormFirstInterview.module.css'

const MyFormFirstInterview = () => {
  return (
    <div>
        
        <form className={styleMyForm.boxForm}>
        <h3>Formulario entrevista inicial</h3>
            
            <div className={styleMyForm.personalDataBox}>
            <h4>Datos iniciales</h4>
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
                <h4>Antecedentes y  motivo de consulta</h4>
               <label>Diagnóstico</label>
               <input type='text'></input> 
               <label>Historial previo</label>
               <textarea></textarea>
               <label>Motivo de consulta</label>
               <textarea></textarea>
            </div>
            <div>
                <h4>Áreas de ocupación</h4>
                <label>Actividades de la Vida Diaria AVD</label>
                <input type='checkbox'></input>
                <label>Actividades Instrumentales de la Vida diaria AIVD</label>
                <input type='checkbox'></input>
                <label>Descanso y Sueño</label>
                <input type='checkbox'></input>
                <label>Educación</label>
                <input type='checkbox'></input>
                <label>Juego</label>
                <input type='checkbox'></input>
                <label>Participación Social</label>
                <input type='checkbox'></input>
            </div>
        </form>



    </div>
  )  
}

export default MyFormFirstInterview