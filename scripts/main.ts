const myImage = document.querySelector("img");
if (myImage)
    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-1.png") {
            myImage.setAttribute("src", "images/firefox-2.jpeg");
        } else {
            myImage.setAttribute("src", "images/firefox-1.png");
        }
    };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  