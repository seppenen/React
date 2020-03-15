import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import Saalomake from './../components/Saalomake'
import Sananlasku from './../components/Sananlasku'
import MatkalomakeMUI from './../components/MatkalomakeMUI';
import MatkalistaMUI from './../components/MatkalistaMUI';
import PaivakirjaApp from './../AjopaivakirjaApp'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Lomake from './../components/ObjectHook'
import Fetch2 from './../components/fetchTehtava2'
import Tehtava5MUI from './../Tehava5_2'
import DrawerMUI from './DrawerMUI'

function TabMUI (props) {


    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }
      
  return (
    <div  >
      
<AppBar position='static'>
<Tabs variant="fullWidth" value={ value }
onChange={ handleChange } >

<Tab label='Ajopäiväkirja' icon={<DriveEtaIcon />} /> 
<Tab label='Arviointi' icon={<CreateIcon />} /> 
<Tab label='Ruokahaku' icon={<FastfoodIcon />} />
<Tab label='Lomake' icon={<CreateIcon />} />
<Tab label='Menu' icon={<ListIcon />} />


</Tabs>
</AppBar>

{ value === 0 && <PaivakirjaApp /> }
{ value === 1 && <Lomake /> }
{ value === 2 && <Fetch2 /> }
{ value === 3 && <Tehtava5MUI  /> }
{ value === 4 && <DrawerMUI  /> }

</div>
  
    
  );
}

export default TabMUI;
