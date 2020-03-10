import React from 'react';


function Paivakirja (props){
 
	return (
		<div className="main_div">
	{ /* näytettään objektin tiedot */ }
Nimi: {props.data.laatija} <br/>
Rekisterinumero: {props.data.rekisterinro} <br/>
Matka: {props.data.loppu.lukema - props.data.alku.lukema } <br/><br/>
Tekija: {props.nimi}  <br/>

</div>

		);
}

export default Paivakirja;  



