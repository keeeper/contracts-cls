const getRegularFromCamelCase = (text) => {
  const regularCaseString = text.replace(/([A-Z])(?=[a-z])/g, ' $1');
  return regularCaseString.charAt(0).toUpperCase() + regularCaseString.slice(1).toLowerCase();
}

export default getRegularFromCamelCase;