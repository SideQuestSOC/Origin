import React, { useState } from 'react';
import{supabase} from './client';

const { v4: uuidv4 } = require('uuid');
const userId = uuidv4();

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

async function handleSubmit(e){ 
e.preventDefault()


const { data, error } = await supabase.from('users').insert([
  {

    id: userId,
    first_name: formData.firstName,
    last_name: formData.lastName,
  }

]);

if (error) {
  console.error('Error inserting data:', error);
} else {
  console.log('Data inserted successfully:', data);
}



}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='firstName'
          name='firstName'
          onChange={handleChange}
        />
        <input
          placeholder='lastName'
          name='lastName'
          onChange={handleChange}
        />
        <input
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          placeholder='password'
          name='password'
          type='password'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
