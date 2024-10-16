let UserInput = prompt("Entre ton prénom", "Ton prénom");
function sayHello(firstname, hour) {
    const message = "Bonjour " + UserInput + "!";
     if (hour >= 18) {
        document.querySelector('h1').innerText = "Bonsoir " + UserInput + "!";
     } else {
        document.querySelector('h1').innerText = message;
     }
    } 
sayHello(UserInput, 15);