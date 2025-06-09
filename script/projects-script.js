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
newTitle(research, "Research", "./images/medal.png");
