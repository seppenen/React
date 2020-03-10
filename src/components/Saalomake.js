import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';

function Saalomake () {
    const [saatieto, setSaatieto] = useState( {
        paikkakunta: '',
        kuva: '',
        lampotila: '',
        kuvaus: '',
        tuuli: ''
    } );
    const[virhe, setVirhe] = useState('');
    const[paikkakunta, setPaikkakunta] = useState('');

    const fetchUrl = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lang=fi&q=' + paikkakunta + '&units=metric&APPID=33df15b4c8ad553eed0e98c07beca9bc');
            const json = await response.json();
            setSaatieto(
                {
                    paikkakunta: json.name,
                    kuva: 'http://api.openweathermap.org/img/w/' + json.weather[0].icon,
                    lampotila: json.main.temp.toFixed(1),
                    kuvaus: json.weather[0].description,
                    tuuli: json.wind.speed.toFixed(0)
                }
            );
            setVirhe('');
        } catch (error) {
            setVirhe('Haku ei onnistunut. Lisää oma APPID');
        }
    }

    const hae = (e) => {
        if (paikkakunta.length > 0) {
            fetchUrl();
        } else {
            setVirhe('Anna paikkakunta');
        }
    }

    return (
        
            <Paper style={ {padding:'10px', margin:'30px' } }>

            
            <form>
                <label htmlFor='paikkakunta'>Paikkunta</label>
                <input type='text' name='paikkakunta' id='paikkakunta' value={ paikkakunta } onChange={ (e) => setPaikkakunta(e.target.value) } />
                <input type='button' name='hae' value='Hae' onClick={ (e) =>  hae(e)  } />
            </form>
            {
                saatieto.paikkakunta.length > 0 && virhe.length === 0 ?
                <div>
                    <h3>{ saatieto.paikkakunta }</h3>
                    <img src={ saatieto.kuva } alt={ 'kuva' } /> 
                    { saatieto.lampotila } &#8451;<br />
                    { saatieto.kuvaus } <br />
                    { saatieto.tuuli } m/s
                </div>
                : <p>{ virhe }</p>
            }       
            </Paper>   
        
    );
}
export default Saalomake;