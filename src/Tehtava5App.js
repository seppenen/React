import React from 'react';
import Tehtava5MUI from './components/Tehtava5MUI';
import Grid from '@material-ui/core/Grid';

const data = [ {
    id: 1, otsikko: 'Assi', paiva: '2020-02-29',
    picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/assi.jpg", },
    {
    id: 2, otsikko: 'Myynti', paiva: '2020-03-01',
    picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/myynti.jpg",
    }, {
    id: 3, otsikko: 'Tiko', paiva: '2020-06-24',
    picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg", },
    {
    id: 4, otsikko: 'Bite', paiva: '2020-05-31',
    picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen1.jpg",
    }, {
    id: 5, otsikko: 'Muu', paiva: '2020-02-29',
    picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen2.jpg" },
    ];

    export default function Tehtava5App (){


        return(

            <div>
                 <Grid container spacing={4}>
                 {
                data.map(data => <Tehtava5MUI {...data} />)
                }
                
                </Grid>
            </div>
        )
    }