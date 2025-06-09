function newTitle(parent, name, img) {
    parent.setAttribute("style", "display: flex; align-items: center; margin-top: 50px;");
    parent.setAttribute("width", "100%");

    const image = document.createElement("img");
    image.setAttribute("src", img);
    image.setAttribute("height", "70px");
    parent.appendChild(image);

    const title = document.createElement("h2");
    title.innerHTML = name;
    title.setAttribute("style", "margin-left: 40px; font-size: 50px;");
    parent.appendChild(title);
 }

const research = document.getElementById("research");
newTitle(research, "Research", "./other/medal.png");

const robotics = document.getElementById("robotics");
newTitle(robotics, "Robotics", "./other/robot.png");

const webDesign = document.getElementById("web-design");
newTitle(webDesign, "Web Design", "./other/brackets.png");
