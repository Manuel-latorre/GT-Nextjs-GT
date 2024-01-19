"use client"
import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { validate } from './validation/validation';
import './Contacto.css'


const Contacto = () => {
  const formulario = useRef();
  const [openAlert, setOpenAlert]= useState(false);
  
  const [form, setForm]= useState({
    name:'',
    email:'',
    tel:'',
    text:''
  })
  const [errors, setErrors]= useState({});

  const handleChange= (event)=>{
    setForm({...form, [event.target.name]: event.target.value})
    setErrors(validate({...form, [event.target.name]: event.target.value}))
  }
 
  const disabled=()=>{
    if(errors.name || errors.email || errors.tel || errors.text || !form.email || !form.name || !form.text) return true;
    else return false
  }
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    
    setOpenAlert(true)
    setTimeout(() => {
      
      setOpenAlert(false)
    }, 5000);
    emailjs.sendForm('service_k8v9j6h', 'template_1o992gh', formulario.current, 'zYxLAVDYmQaJG4_j3')
    .then((result) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su consulta fue enviada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setForm({
      name:'',
      email:'',
      tel:'',
      text:''
    })
    setErrors({})
  }
  return (
    <div id='contacto'>
        <p className='contactoP'>CONTACTO</p>

        <form className='form' onSubmit={handleSubmit} ref={formulario}>
          
            <input className='inputForm' type="text" placeholder='Nombre' name='name' value={form.name} onChange={handleChange} />
            {errors.name && <p className='errors'>{errors.name}</p>}

            <input className='inputForm' type="text" placeholder='Email' name='email' value={form.email} onChange={handleChange}/>
            {errors.email && <p className='errors'>{errors.email}</p>}

            <input className='inputForm' type="tel" placeholder='Teléfono' name='tel' value={form.tel} onChange={handleChange}/>
            {errors.tel && <p className='errors'>{errors.tel}</p>}

            <textarea className='textArea' placeholder='Contanos en qué podemos ayudarte:' name='text' value={form.text} onChange={handleChange}></textarea>
            {errors.text && <p className='errors'>{errors.text}</p>}

            <button className='btnEnviar' disabled={disabled()}> ENVIAR </button>
        </form>
        
    </div>
  )
}


export default Contacto