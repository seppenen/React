import React from 'react';
<<<<<<< HEAD

/* import TabMUI from './nav/TabMUI' */
import DrawerMUI from './nav/DrawerMUI'
import MenuMUI from './nav/MenuMUI'


const matkat = [ { id: 1,
  otsikko: 'Lomalla',
  paiva: '26.5.2020',
  paikka: 'Lohja',
  saa: 'Aurinkoista, 10',
  kuvaus: 'Lomalla Lohjalla',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
  },
  { id: 2,
  otsikko: 'Mökillä',
  paiva: '8.6.2020',
  paikka: 'Savonlinna',
  saa: 'Aurinkoinen, 21',
  kuvaus: 'Mökillä Itä-Suomessa',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/lumpeet.PNG'
  },
  { id: 3,
  otsikko: 'Sukuloimassa',
  paiva: '20.5.2020',
  paikka: 'Vantaa',
  saa: 'Pilvinen, 9',
  kuvaus: 'Kahvihetki',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/kakku.jpg'
  } ];


function MatkaApp () {
   return (
    <div>
     
    {/*  <DrawerMUI data={matkat} /> */}
    <MenuMUI />
   
    {/*  <MatkalistaMUI matkat={ matkat } />
     <MatkalomakeMUI /> */}
       {/*  <Saalomake /> */}
    </div>
   );
}
export default MatkaApp;
=======
import Saa from './components/Saa'
// import Matka from './components/Matka';
/* import Matkalista from './components/Matkalista';



const data = [{
	nimi: "Virtanen Matti", 
	alkupaiva: "2020-06-01", 
	loppupaiva: "2020-06-30",
	}, 
	{
	nimi: "Laaksonen Lisaa", 
	alkupaiva: "2020-06-26", 
	loppupaiva: "2020-07-27",
	}, {
		nimi: "Korhonen Maija", 
		alkupaiva: "2020-08-03", 
		loppupaiva: "2020-08-30",
	}, ];
	
	
	
 */
function App (){

	return (
		<div> 
		
	{/* 	{  <Matka test={ matkat }/>  }
		<Matkalista data={data} /> */}
<Saa/>

		</div>);

}

export default App;
>>>>>>> 2bb3dc350265849995404c1ded4454fff5db48b9
