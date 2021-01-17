import React from 'react'
import {useFetch} from "./useFetch"


function ApiSearch({login}){
    const {data, loading, error} = useFetch(`https://api.github.com/users/${login}`);

    if(loading) return <div><h1>loading...</h1></div>;

    if(error){
        return(
            <div>
                <pre>{JSON.stringify(error)}</pre>
            </div>
        );
    }

    return(
        <div>
            <pre>{JSON.stringify(data.login)}</pre>
        </div>    
    );

}

export default ApiSearch;