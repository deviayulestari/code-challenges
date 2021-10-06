async function getUsers() {
    try {
        let res = await fetch('https://randomuser.me/api/?results=2');
        let response = await res.json();
        return response;
    } catch (error) {
        console.log(error);
    }
  }
  
  async function renderUsers() {
    // Code here
    let users = await getUsers();
    console.log(users);
    let dataUser = users.results;
    let html = '';
    dataUser.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.picture.medium}" >
                            <h2>${user.name.first} ${user.name.last}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });
        

    let container = document.querySelector('.container');
    container.innerHTML = html;
  }
  
  renderUsers();