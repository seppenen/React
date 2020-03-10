import React,{ useState, useEffect } from 'react';

export default function Fetch() {
    
    const [data, setData]=useState({

    name: '',
    user:'',
    city:'',
})


const fetchUrl = async()=> {

    try {
        const response =await fetch('https://jsonplaceholder.typicode.com/users/5');
        const json = await response.json();
       
        
        setData(
            {
                name: json.name,
                user: json.username,
                city: json.address.city,
              
            }
        );
       
    } catch (error) {
      
    }
}

useEffect( () => { fetchUrl() }, []);

return (
    <div>
        <p><b>Tehtävä 2</b></p>
       
        
        { data.name } <br />
        { data.user } <br />
        { data.city } 
    </div>
    
);
}