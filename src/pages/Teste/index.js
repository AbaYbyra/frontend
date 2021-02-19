import React, {useState} from 'react';
import CardBlog from '../../components/CardBlog';
import CardMaterial from '../../components/CardMaterial';
import CardSession from '../../components/CardSession';
import CardProfile from '../../components/CardProfile';
import ProfilePic from '../../components/ProfilePic';

import './Teste.css'
import SideMenu from '../../templates/SideMenu';
import HeaderProf from '../../templates/Header/HeaderProf';
import HeaderSchool from '../../templates/Header/HeaderSchool';
import HeaderStudent from '../../templates/Header/HeaderStudent';

import ImageUpload from './ImageUpload';

export default function Teste(props){
  const [picture, setPicture ] = useState([])
  const [pictureURL, setPictureURL ] = useState("ola-contato.jpg")

  function onDrop (pictureFiles, pictureDataURLs){
    console.log("ENTROU")
    setPicture(pictureFiles)
    setPictureURL(pictureDataURLs)
    console.log("PICTURES: " , pictureFiles, '\n', pictureDataURLs[0])
  }
  return(
    <div className="teste-container">
      <br/>
      <ProfilePic profilePic={pictureURL}/>
      <ImageUpload/>
      <div className="row-teste-container">
        <HeaderProf/>
      </div>
        
      <div className="row-teste-container">
        <HeaderSchool/>
        
      </div>
      <div className="row-teste-container">
        <HeaderStudent/>
      </div>
      <div className="row-teste-container">
        <SideMenu theme="professor">
      
        </SideMenu>
        <CardProfile 
          theme="professor" 
          image="blog/guri-morro-mineira.svg"
          name="Pedro Gomes"
          active={true}
          path="#"
        />
        <CardProfile 
          theme="student" 
          image="blog/ankor-wat.svg"
          name="Jaquelina Giovana Souza"
          active={false}
          path="#"
        />
      </div>
      <div className="row-teste-container">

        <CardMaterial icon="icon_material_book.svg" color="school" path="#" text="Séries"/>

        <CardMaterial icon="icon_material_file.svg" color="student" path="#" text="Artigos"/>

        <CardMaterial icon="icon_material_video.svg" color="professor" path="#" text="Tutoriais"/>
      </div>
      <br/>
      <div className="row-teste-container">
        <CardBlog 
          theme="professor" 
          image="blog/guri-morro-mineira.svg"
          title="Morro da Mineira"
          preview="Conheça a história de Renato, um menino de 12 anos morador da comunidade Morro da Mineira e estudante do Abá Ybyrá"
          path="#"
        />
        <CardBlog 
          theme="student" 
          image="blog/ankor-wat.svg"
          title="Acordar cedo estimula a mente"
          preview="Acordar cedo e meditação estimula a mente e auxilia foco nos estudos"
          path="#"
        />
      </div>
      <ProfilePic profilePic="ola-contato.jpg"/>
      <br/>
      <CardSession text="Blog" bg_image="teste/foto-teste-cao.jpg" path="#"/>
      <br/>
      <CardSession text="Material de ensino e estudos" bg_image="teste/foto-teste-cao.jpg" path="#"/>
    </div>
  )
}