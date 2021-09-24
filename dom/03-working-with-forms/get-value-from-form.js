function getFormvalue(){
    var form = document.getElementById("form1");
    console.log(form.elements["fname"].value);
    console.log(form.elements["lname"].value);
}