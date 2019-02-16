function Upper(name){
    return name == name.toUpperCase();
}
function noUpper(name){
    return name != name.toUpperCase();
}


function greet(name) {
  if (name == null) {
    return "Hello, my friend."; //req2
  } else if (Array.isArray(name)) {
      if(name.length > 2 && name.filter(Upper).length >= 1){
      return `Hello, ${name.filter(noUpper).join(" and ")}. AND HELLO ${name.filter(Upper)}!` //req6
    }else if (name.length > 2) {
      return `Hello, ${name.slice(0, name.length - 1).join(", ")}, and ${name.slice(name.length - 1, name.length)}.`;
    } else {
      return `Hello, ${name.join(" and ")}.`;
    }
  } else if (name == name.toUpperCase()) {
    return `HELLO ${name}!`;
  }
  return `Hello, ${name}.`; //req1
}

module.exports = greet;
