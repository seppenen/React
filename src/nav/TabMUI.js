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

function TabMUI (props) {

    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }
      
  return (
    <div>
      
<AppBar position='static'>
<Tabs value={ value }
onChange={ handleChange } >

<Tab label='Etusivu' icon={<HomeIcon />} /> 
<Tab label='Lisää' icon={<CreateIcon />} /> 
<Tab label='Listaa' icon={<ListIcon />} />
<Tab label='Sää' icon={<CloudQueueIcon />} />


</Tabs>
</AppBar>

{ value === 0 && <Sananlasku /> }
{ value === 1 && <MatkalomakeMUI /> }
{ value === 2 && <MatkalistaMUI matkat={props.data} /> }
{ value === 3 && <Saalomake  /> }

</div>
  
    
  );
}

export default TabMUI;
