import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from "next/app";
import {Button, Tooltip} from "@material-ui/core";
import {createContext, useState} from "react";
import P from './NowWhat'
import axios from "axios";



let data= {

}

let Gbl = createContext(data);


function Pop(props:any)
{

    let [stat , setStat] = useState(404);

    let stuff = (async ()=> {

       let x =  await axios.get('/api/hello')

       // console.log(x);

        setStat(x.data.age);
        return x.data;

    })

    return(
        <>
            <Gbl.Provider value={stuff()}/>

        <h1>{props.children}</h1>
        </>
    )
}

export default function Home() {

    let [pie, setPie] = useState(0);

    return (
        <div className={styles.container}>
            <P/>
            <Tooltip title={`This Should:${pie}`}>
            <div><h2>{pie}</h2></div>
            </Tooltip>

            <Tooltip title={pie}>
                <div>
                    <Button variant='contained' color='primary' onClick={() => {
                        setPie(pie + 1);
                    }}>
                        Add One
                    </Button>
                </div>
            </Tooltip>


            <Pop> test </Pop>

        </div>
    )
}

