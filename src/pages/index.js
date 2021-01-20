import React from 'react';
import Header from '../templates/Header/';
import Cover from '../components/section/Cover/';
import SobreLP from '../components/section/SobreLP/';
import BlogLP from '../components/section/BlogLP';
import ContatoLP from '../components/section/ContatoLP/';
import Footer from '../templates/Footer';

export default function PaginaInicial(){

  return(
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Cover />
        <SobreLP />
        <BlogLP /> 
        <ContatoLP />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}