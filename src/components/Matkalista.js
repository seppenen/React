import React from 'react';

function Matkalista(props){

return(

    <div className="main_div">
        {
            props.data.map(data => {
                return (
                    <p>
                    Nimi: {data.nimi} <br/>
                    Alkaa: {data.alkupaiva}<br/>
                    Päättyy: {data.loppupaiva}<br/>
                    </p>
                )

            })
        }
    </div>
);

}

export default Matkalista;