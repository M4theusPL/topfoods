import React from 'react';

export const isLogged=()=>{
    if(localStorage.getItem('login-haslo')==='admin-admin'){
        return true;
    } else {
        return false;
    }
}