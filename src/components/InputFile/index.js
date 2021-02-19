import '../ButtonAY/ButtonAY.css';

function ButtonAY(props){
  let {onChange, theme, className, form} = props;
  //console.log(props)
  return(
    <label className= {`button-ay button-${theme} ${className}`}> Escolha a imagem
      <input
        id="input-file"
        style={{display:'none'}}
        
        onChange={onChange}
        type='file'
        form={form}
      />
    </label>
  );
}

export default ButtonAY;
