import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from "next/app";
import {Button, Tooltip} from "@material-ui/core";
import {useState} from "react";
import P from './NowWhat'


export default function Home() {

    let [pie, setPie] = useState(0);
    return (
        <div className={styles.container}>
            <P/>
            <h2>{pie}</h2>
            <Tooltip title={pie}>
                <div>
                    <Button variant='outlined' onClick={() => {
                        setPie(pie + 1);
                    }}>
                        Add One
                    </Button>
                </div>
            </Tooltip>
        </div>
    )
}

