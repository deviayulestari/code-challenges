let ul = document.querySelector("#data");
ul.style.fontFamily = 'Arial, sans-serif';

let name = document.getElementById("nickname");
name.textContent = "Devi"; 

let age = document.getElementById("age");
age.textContent = "20"; 

let hometown = document.getElementById("hometown");
hometown.textContent = "Bandung"; 

//masih salah dan kurang 1
let li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
      li[i].className = 'listitem';
      listitem.style.color = 'red';
}