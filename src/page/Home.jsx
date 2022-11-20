import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../component/card';
import Produk from '../component/listProduk';



export default function Home() {
    const navigate = useNavigate();
    navigate(0);

    const localData = localStorage.getItem("LOGIN_STATUS");
    const data = JSON.parse(localData);
    let getLogin = data;
    return(
           <>
            <Card/>
            <Produk getLogin={getLogin} />
           </>
    )
}