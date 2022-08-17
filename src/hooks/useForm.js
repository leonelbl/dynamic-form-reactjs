import { useState } from "react"

export const useForm = (formFields) => {
  const [form, setForm] = useState();
  const [errors, setErrors] = useState({});
  const [inputList, setInputList] = useState([]);

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const key = name.split('-')[0];

    inputList[i] = {...inputList[i], [key]: value};
    setInputList(inputList);
    setForm({...form, inputList});
  }

  const handleSubmit = (e) => {
    alert('check your browser console');
    console.log('=========form data============');
    console.log(form);
    console.log('=======================');
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setInputList([...inputList, formFields]);
  }

  const updateInputValues = (key, id, item) => {
    document.querySelector('[name="' + key + '-' + id + '"]').value = item[key];
  }

  const handleRemove = (e, i) => {
    e.preventDefault();
    inputList.splice(i, 1);

    if(inputList.length > 0) {
      const keys = Object.keys(inputList[0]);
      inputList.forEach((item, id) => {
        keys.forEach((key) => {
          updateInputValues(key, id, item)
        })
      });

      setInputList(inputList);
    } else {
      setInputList([]);
    }
    setForm({...form, inputList});
  }

  return {
    form,
    errors,
    inputList,
    handleChange,
    handleSubmit,
    handleAdd,
    handleRemove,
    setErrors,
  }
}