const getInputType = (name) => {
  let type;
  switch(name) {
      case 'firstName':
      case 'lastName':
      case 'category':
      case 'email':
          type = 'text';
          break;
      case 'status':
          type = 'select';
          break;
      case 'startDate':
      case 'cancelationDate':
      case 'cancellationDate':
          type = 'date'
          break;
      default:
          type = 'text'
  }
  return type;
}

export default getInputType;