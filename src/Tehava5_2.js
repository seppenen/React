import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
       
      '& > *': {
        margin: theme.spacing(1),
        
        padding: 5,
        
      },
    },

    text:{

        paddingTop: 10,
    }
   
  }));

  const marks = [
    {
        value: 0,
        label: '0',
      },
      
      {
      value: 20,
      label: '1',
    },
    {
      value: 40,
      label: '2',
    },
    {
      value: 60,
      label: '3',
    },
    {
      value: 80,
      label: '4',
    },
    {
        value: 100,
        label: '5',
      },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) ;
  }
  
  
export default function Lomake(){

    const [state, setState] = useState({
        
        checked: true,
      });
    
      const handleChange = (e) => {
        setState({ ...state, checked: e.target.checked });
        
      };
    
    const classes = useStyles();

    return(
        <Grid container > 
        <Card className={classes.root} style={ {minWidth:500, minHeight:200}}>
        <form  noValidate autoComplete="off">
      
      <TextField style={{ width: '100%' }} id="outlined-search" label="Nimi" type="search" variant="outlined" />
      
      <Typography className={classes.text}  id="discrete-slider-restrict" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={10}
        marks={marks}/>
       <FormLabel component="legend">Suosittelen</FormLabel>
      
       <Switch
        checked={state.checked}
        onChange={(e)=> handleChange(e)}
        color="primary"
        
      /> <br/>
      <div className={classes.root} ><Button variant="outlined" color="primary" href='#'>Lisää</Button>
    <Button  variant="outlined" color="secondary"  >Peruuta</Button></div >
    

      </form>
      </Card>
      </Grid>

    )
}