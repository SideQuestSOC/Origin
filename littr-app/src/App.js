import React, { useState } from 'react';
import{supabase} from './client';

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


const { data, error } = await supabase.from('User Table').insert([
  {
    user_id: "bda61010-05db-11ee-be56-0242ac120002",
    first_name: formData.firstName,
    last_name: formData.lastName,
  },
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
