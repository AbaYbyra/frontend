import {useState, useEffect } from 'react';


import ProfilePic from '../../components/ProfilePic';
import ButtonAY from '../../components/ButtonAY';
import InputFile from '../../components/InputFile';

export default function UpdateProfilePicture(props){
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState('profile-picture-default.png')
  const [changeImage,setChangeImage] = useState(false)
  useEffect(()=>{
    if(!selectedFile){
      setPreview('profile-picture-default.png')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return() => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e =>{
    if (!e.target.files || e.target.files.length === 0){
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }
  
  return(
    <>
      <ProfilePic profilePic={preview} newURL={selectedFile? true : false}/>
      <ButtonAY theme="primary" onClick={()=> setChangeImage(!changeImage)}>
        {changeImage ? "Cancelar" : "Alterar imagem"}        
      </ButtonAY>
      {changeImage &&
        <InputFile theme="primary" onChange={onSelectFile}/>
      }
    </>
  )
}