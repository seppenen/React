import React,{ useState, useEffect } from 'react';

export default function Fetch2() {
    
const [data, setData]=useState([]);

const fetchUrl = async()=> {
   
    try {

        const response =await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        const json = await response.json();
        setData(json.meals);
    
    } catch (error) {
      
    }  
}

useEffect( () => { fetchUrl() }, []);

const MapItems =({strMeal})=>{

    return(    

       <div> <span> {strMeal} </span></div>       
        
       )}
    
return (

    <ul>
    
    {      
    data.map(data => <MapItems key={data.idMeal} {...data} />)  
    }
  </ul>
)}