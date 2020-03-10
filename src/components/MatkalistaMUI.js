import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

function MatkalistaMUI (props) {
  
  return (
    <Grid container spacing={4}>
    { 
    props.matkat.map(matka=> {

      return(
        <Grid item key={matka.id}>
          <Card style={ {minWidth:200, minHeight:200}}>
            <CardHeader 
            title={matka.otsikko}
            subheader={matka.paiva}  />
            <CardContent>

            {
              matka.kuva ?
              <CardMedia image={ matka.kuva }  title={matka.otsikko} style={{height: 150, width: 200}} />
              : <Typography>Ei kuvaa</Typography>
            }

            <Typography> {matka.paikka}</Typography>
            <Typography color='primary'> {matka.saa}</Typography>
            <Typography> {matka.kuvaus}</Typography>
            </CardContent>
            
            <CardActions>
              <Button startIcon={<EditIcon />} title='test' href='#'/>
              <Button startIcon={<DeleteIcon />}/>

            </CardActions>
          </Card>
          </Grid>
      )
    })
    }
    </Grid>
    
  )
}
/* asasdd
 */
export default MatkalistaMUI;
