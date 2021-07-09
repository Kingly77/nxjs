import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from "next/app";
import {Button, Card, CardContent, Grid, GridListTileBar, makeStyles, Tooltip, Typography} from "@material-ui/core";
import {createContext, useState} from "react";
import axios from "axios";
import Plap from "./NowWhat";


function Pop(props:any)
{

    let [stat , setStat] = useState(404);

    (async ()=> {

        try {
            let x =  await axios.get('./api/hello')
            setStat(x.data.age);
            return x.data;
        }
        catch (e) {
            return 404;
        }
    })()

    return(
        <>
        <h1>{props.children}</h1>
            <p>{stat}</p>
        </>
    )
}


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(63deg, #FE6B88 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },

    card:
        {
            background: 'black',
            color:'white',
            boxShadow: '0 3px 5px 2px',
        }

});



function Bog(props:any)
{
    const classes = useStyles();

    let {ros,callMe} = props;

    let [rock, roll] = useState(0);

    return(
        <Card className={classes.card}>
            <CardContent>
                <h1> {callMe} </h1>
                <h3>{rock}</h3>
                <Tooltip title={rock}>
                    <div>
                        <Button className={classes.root} variant='contained' color='primary' onClick={
                            () => {
                               if(ros())
                                   roll(rock+1);
                            }}>
                            Add One
                        </Button>
                    </div>
                </Tooltip>

            </CardContent>

        </Card>
    )
}

export default function Home() {

    let [pie, setPie] = useState(0);

    let toBog = (val:number = 1)=>{setPie(pie+val); return pie};
    let toNo = () =>{
        if(pie > 0) {
            setPie(0)
            return true;
        }
        return false;
    };

    return (
        <div className={styles.container}>
            <Plap/>
            <Tooltip title={`This Should:${pie}`}>
            <div><h2>{pie}</h2></div>
            </Tooltip>

            <Grid container justifyContent="center" spacing={4}>
                <Grid item>
                    <Bog callMe="One" ros={toBog}/>
                </Grid>
                <Grid item>
                    <Bog callMe="Two" ros={toBog}/>
                </Grid>
                <Grid item>
                    <Bog callMe="Reset" ros={toNo}/>
                </Grid>
            </Grid>

        </div>
    )
}

