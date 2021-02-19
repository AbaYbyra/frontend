import './ButtonAY.css';

function ButtonAY(props){
  let {onClick, theme, className, children,type,form, disabled} = props;

  return(
    
    <button
      className= {`button-ay button-${theme} ${className}`}
      onClick={onClick}
      type={type}
      form={form}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonAY;
