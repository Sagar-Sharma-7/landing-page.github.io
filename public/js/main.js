const time = document.querySelector(".time");
const greeting = document.querySelector("#greeting");
const userName = document.querySelector("#name");
const userFocus = document.querySelector("#focus");


setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    time.innerHTML = `${hours}<span>:</span>${min}<span>:</span>${sec}`

    if(hours < 12){
      greeting.innerHTML = "Good Morning";
    }else if(hours > 12 && hours < 17 || hours == 12){
      greeting.innerHTML = "Good Afternoon";
    }else{
      greeting.innerHTML = "Good Evening";
    }

  }, 1000);


function setName(e) {
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keycode == 13){
      localStorage.setItem('name', e.target.innerHTML);
      userName.blur();
    }
  }else{
    localStorage.setItem('name', e.target.innerHTML);
  }
}

function setFocus(e) {
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keycode == 13){
      localStorage.setItem('focus', e.target.innerHTML);
      userFocus.blur();
    }
  }else{
    localStorage.setItem('focus', e.target.innerHTML);
  }
}

getName = () => {
  if(localStorage.getItem("name") === null){
    userName.innerHTML = "[Enter Name]"
  }else{
    userName.innerHTML = localStorage.getItem("name");
  }
}

getFocus = () => {
  if(localStorage.getItem("focus") === null){
    userFocus.innerHTML = "[Enter Focus]"
  }else{
    userFocus.innerHTML = localStorage.getItem("focus");
  }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);

userFocus.addEventListener('keypress', setFocus);
userFocus.addEventListener('blur', setFocus);




getName();
getFocus();
setName();
setFocus();


