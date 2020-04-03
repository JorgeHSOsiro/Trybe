let user1 = {
    back:"green", 
    colorText: "red",
    font: "24px",
    line: "28px",
    fontFam: "Sans-serif"  
}

let user2 = {
    back: "purple",
    colorText: "green",
    font: "36px",
    line: "42px",
    fontFam: "fantasy" 
}

function setPreferences(key, user) {
    localStorage.setItem(key, JSON.stringify(user))
}

function userPreferences(key){
    document.querySelector("body").style.backgroundColor = key.back;
    document.querySelector("body").style.textColor = key.colorText;
    document.querySelector("article").style.fontSize = key.font;
    document.querySelector("article").style.lineHeight = key.line;
    document.querySelector("body").style.fontSize = key.fontFam;
}


let btnPreferences = document.querySelector("#preferences");
btnPreferences.addEventListener('click', function(){
    // let username = document.querySelector("#username").value;
    setPreferences("user3", user1);
    userPreferences(user1);
})

console.log(localStorage.getItem("user1"));

// let obj = JSON.parse(localStorage.getItem("user1"))
    // userPreferences(obj);

    // localStorage.removeItem('user1')