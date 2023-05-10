import {useRef, useState} from 'react'
import { Icon } from '@iconify/react';
import classes from './SearchBar.module.css'
import '../App.css'

export default function SearchBar(props){
    const usernameRef = useRef();

    const submitHandler = async (event)=>{
        event.preventDefault();
        const username = usernameRef.current.value;
        const url = `https://api.github.com/users/${username}`
        props.onConfirm(url)
  
    }
    

    return (<>
        <form onSubmit={submitHandler} className={`${classes.form} card`}>
        <div className={classes.box}>
            <Icon className={classes.icon} icon="ph:magnifying-glass-bold" />
            <label htmlFor="username"></label>
            <input className={`${classes.input} input`} id="username" type="text" ref={usernameRef} placeholder='Search Github username...'></input>
        </div>
            <button className={classes.searchBtn}>Search</button>
        </form>
    </>)
}