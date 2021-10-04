class SkillChat {
    constructor(num){
        this.num = num;
    }
    encrypt(str){
        for(let i = 0; i < str.length; i++){
            let char = str[i];
            if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
                let temp = char.toUpperCase().charCodeAt(0)+this.num;
                if(temp > 'Z'.charCodeAt(0)){
                    temp -= 26;
                }
                char = String.fromCharCode(temp);
            }
            str = str.slice(0, i) + char + str.slice(i+1);
       }
       return str;
    }

    decrypt(str){
        for(let i = 0; i < str.length; i++){
            let char = str[i];
            if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
                let temp = char.toLowerCase().charCodeAt(0)-this.num;
                if(temp < 'a'.charCodeAt(0)){
                    temp += 26;
                }
                char = String.fromCharCode(temp);
            }
            str = str.slice(0, i) + char + str.slice(i+1);
       }
       return str;
    }
}

const mySkilChat = new SkillChat(2);
console.log(mySkilChat.encrypt('I love JavaScript!')); // returns 'K NQXG LCXCUETKRV!'
console.log(mySkilChat.decrypt('K <3 OA ECV')); // returns 'i <3 my cat 