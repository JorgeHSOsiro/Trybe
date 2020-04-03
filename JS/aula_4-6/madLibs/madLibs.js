let noun = document.querySelector("#noun");               
let adjective = document.querySelector("#adjective");
let someone = document.querySelector("#person");
let story = document.querySelector("#story")

let btn = document.querySelector("#lib-button");
btn.addEventListener('click', function(){
    story.innerText = noun.value + " " + adjective.value + " " + someone.value;
});
