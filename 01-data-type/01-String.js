//no 1
function is_Blank(text){
  if(text.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));



//no 2
function truncate_string (words, length) {
  
    if ((words.constructor === String) && (length>0)) {
        return words.slice(0, length);
    }
};
console.log(truncate_string("Terra Skilvul", 5));



//no 3
function firstNameOnly(str){
  let arr = str.split(" ");

  if(arr.length > 1){
  return (arr[0] + " " + arr[1][0] + ".");
}else{
  return str;
}
}

console.log(firstNameOnly("David Winalda"));



//no 4
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}



console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));

//no 5
function text_truncate(str, length = 100, ending = "...") {
    kalimat = str.substr(0, length);
    return kalimat.concat(ending);
}


console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))