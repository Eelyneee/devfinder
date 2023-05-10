import {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import classes from './Content.module.css'

export default function Content(){
    const [user,setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [click,setClick] = useState(false);
    const [httpError, setHttpError] = useState();

    const fetchData = async (url)=>{
        setHttpError()
        setClick(true);
        const response =  await fetch(url)
        if (!response.ok) {
          setHttpError('User not found.')
        }
        const responseData = await response.json();

        setUser(responseData);
        setIsloading(false);
        setClick(false);
    }

    return(<>
        <SearchBar onConfirm={fetchData} />
        {isLoading && click && <p className={classes.loading}>loading...</p>}
        {
            httpError && <p  className={classes.error}>{httpError}</p>
        }
        {
            (JSON.stringify(user) !== '{}' && !httpError) && <UserCard info={user}/>
        }
        {
            (JSON.stringify(user)==='{}' && !httpError) && <p className={classes.default}>Looking for someone?</p>
        }
    </>);
}