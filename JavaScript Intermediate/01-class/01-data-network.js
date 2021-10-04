class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;

      this.sisa = function(){
          return this.data - 5 * 8; 
      }
    }
    movieTime(){
        if(this.sisa() >= 50){
            return true;
        } else {
            return false;
        }
    }
    videoCall(){
        //cara singkat
        //return this.data >=10;
        if(this.sisa() >= 10){
            return true;
        } else {
            return false;
        }
    }
    connection(){
        setInterval(function(){
            console.log("You must reconnect the Internet Connection");
        }, 2000);
        return "Akan ditampilkan pesan setiap 2 detik"
    }
  }

const library = new Network(50, 8) 

console.log(library.movieTime()) // returns false
console.log(library.videoCall()) // returns true
console.log(library.connection()) // Run the interval
