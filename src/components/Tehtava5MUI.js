import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    root: {
      
      color: 'red',
      
    }
  });


export default function Tehtava5MUI ({id, otsikko, paiva, picture}){

    
    const classes = useStyles();

    return (

        <Grid item key={id}>
        <Card style={{minWidth:100, minHeight:200}}>
        <CardActions>
            <Button startIcon={<AccountCircleIcon />}  href='#'>Näytä</Button>
            <Button className={classes.root} startIcon={<DeleteIcon />}>Poista</Button>

          </CardActions>
          <CardHeader 
          title={otsikko}
          subheader={paiva}  />
          <CardContent>

          {
            picture ?
            <CardMedia image={ picture }  title={otsikko} style={{height: 150, width: 200}} />
            : <Typography>Ei kuvaa</Typography>
          }

          {/* <Typography> {otsikko}</Typography> */}
       
          
          </CardContent>
          
          
        </Card>
        </Grid>
    )
}