import React from 'react';
import Navbar from "../components/Navbar";
import Products from './Products';
import Footer from '../components/Footer';

export default function Home() {
    return(<div>
        <Navbar/>
        <Products/>
        <Footer/>

        </div>);
}