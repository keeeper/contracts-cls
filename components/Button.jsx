const Button = ({name, type, onClickHandler, isDisabled}) => {
  return (
    <button className='button' disabled={isDisabled} type={type} onClick={onClickHandler}>
      {name}
    </button>
  )
}

export default Button;