import React, { useState } from 'react';

function Lomake () {
// tilamuuttujat ja niiden muuttamiskutsu
  const [data, setValues] = useState({
      nimi: '',
      day: '',
      arvosana: '',
  });

  const [viesti , setViesti]= useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...data,
       [e.target.name]: e.target.value,
       [e.target.day]: e.target.value,
       [e.target.arvosana]: e.target.value,
     });
     setViesti('');
    
   };



// Funktio painikkeen painallukselle
  const lisaa= (e) => {
    e.preventDefault();

    if (data.nimi.length=== 0 || data.day.length===0 || data.arvosana.length===0)
    {

      setViesti('Kakissa kentiessä pitää olla arvot');
    }

    setValues({
      nimi: '',
      day: '',
      arvosana: '',
    });

   
  
  }

  return (
    <form>
        <label htmlFor='nimi'>Nimi </label>
        <input type='text' name='nimi' value={ data.nimi} onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='day'>Päivä </label>
        <input type='text' name='day' value={ data.day } onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='Arvosana'>Arvosana </label>
        <input type='text' name='arvosana' value={ data.arvosana } onChange={ (e) => muuta(e) } /><br />
        <input type='submit' value='Lisää' onClick={ (e) => lisaa(e) } />
        <p> { viesti } </p>
         </form>
    
  );
}

export default Lomake;
