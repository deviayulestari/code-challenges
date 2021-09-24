//Buatlah sebuah function bernama removeProgrammingLanguage tanpa parameter untuk menghapus element yang dipilih saat user klik button select and Remove.

function removeProgrammingLanguage(){
    const selectElement = document.getElementById("languageSelect");
    selectElement.remove(selectElement.selectedIndex);
}