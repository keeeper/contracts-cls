const Button = ({name, type, onClickHandler, isDisabled, testId}) => {
  return (
    <button className='button' disabled={isDisabled} type={type} onClick={onClickHandler} data-testid={testId}>
      {name}
    </button>
  )
}

export default Button;