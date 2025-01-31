
const gay = document.querySelectorAll(".gay");
const button = document.querySelector("#button");
const body = document.querySelector('body');
const html = document.querySelector('html')

alert("вы поддтверждаете действия на этом сайте?");

body.style.background = "linear-gradient(to bottom, rgb(255, 0, 0), rgb(255, 166, 0), rgb(255, 255, 0), rgb(3, 115, 3), rgb(0, 0, 255), rgb(76, 1, 129), rgb(242, 134, 242))";
html.style.background = "linear-gradient(to bottom, rgb(255, 0, 0), rgb(255, 166, 0), rgb(255, 255, 0), rgb(3, 115, 3), rgb(0, 0, 255), rgb(76, 1, 129), rgb(242, 134, 242))";

for (const i of gay) {
    i.style.color = "rgb(0, 255, 255)";
}


function moveRandomly(element) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
  
    const maxX = windowWidth - elementWidth;
    const maxY = windowHeight - elementHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }
  

  
  
  gaybutton.addEventListener('mouseover', () => {
    moveRandomly(gaybutton);
  });
  gaybutton.addEventListener("click", function () {
    body.style.background = "linear-gradient(to bottom, rgb(85, 85, 85), rgb(162, 162, 162), rgb(226, 226, 226), rgb(149, 149, 149), rgb(29, 29, 29), rgb(54, 54, 54), rgb(179, 179, 179))";
    html.style.background = "linear-gradient(to bottom, rgb(85, 85, 85), rgb(162, 162, 162), rgb(226, 226, 226), rgb(149, 149, 149), rgb(29, 29, 29), rgb(54, 54, 54), rgb(179, 179, 179))";
    for (const i of gay) {
        i.textContent = "Натурал..)";
        i.style.color = "black";
    }
});
    
      