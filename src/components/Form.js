import React, { Fragment } from 'react'
import { useForm } from '../hooks/useForm'
import FormItem from './FormItem';

const formFields = {
  first_name: '',
  last_name: '',
  email: ''
}

function Form() {

  const {
    form, 
    inputList,
    handleChange,
    handleSubmit,
    handleAdd,
    handleRemove
  } = useForm(formFields);
  
  return (
    <Fragment>
      {inputList.map((item, i) => (
        <FormItem 
          key={i} 
          id={i} 
          element={item} 
          handleChange={handleChange}
          handleRemove={handleRemove} />
      ))}
      <div className='form-options'>
        <button onClick={handleAdd} >Add</button>        
        <button onClick={handleSubmit} >Submit</button>
      </div>
    </Fragment>
  )
}

export default Form