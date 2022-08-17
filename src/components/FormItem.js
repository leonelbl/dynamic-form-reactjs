import React from 'react'

function FormItem({ id, element, handleChange, handleRemove }) {
  return (
    <div className='item'>
      <div className='form-row'>
        <label htmlFor={'first_name-' + id}>First name</label>
        <input 
          type="text" 
          name={'first_name-' + id} 
          value={element['firt_name-' + id]} 
          onChange={(e)=> { handleChange(e, id) }} />
      </div>
      <div className='form-row'>
        <label htmlFor={'last_name-' + id}>Last name</label>
        <input 
          type="text" 
          name={'last_name-' + id}
          value={element['last_name-' + id]}
          onChange={(e)=> { handleChange(e, id) }} />
      </div>
      <div className='form-row'>
        <label htmlFor={'email-' + id}>Email</label>
        <input 
          type="email" 
          name={'email-' + id}
          value={element['email-' + id]}
          onChange={(e)=> { handleChange(e, id) }} />
        <button onClick={(e) => { handleRemove(e, id)}}>Remove item</button>
      </div>
    </div>
  )
}

export default FormItem