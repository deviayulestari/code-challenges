function getAttributes(){
    const link = document.getElementById("skilvul-link");
    const value = link.getAttribute("href");
    window.alert("The value of the href attribute of the link is " + value )
  }