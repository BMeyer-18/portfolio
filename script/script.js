const addToNav = (name, href, src, height) => {
    const a = document.createElement("a");
    a.setAttribute("href", href);
    a.setAttribute("style", "display: flex; align-items: center; color: blue;")

    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("height", height);
    a.appendChild(img);

    const span = document.createElement("span");
    span.setAttribute("style", "margin-left: 10px");
    span.innerHTML = name;
    a.appendChild(span);

    const nav = document.querySelector("nav");
    nav.appendChild(a);
}

const makeFooter = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "./images/BM_logo.png");
    img.setAttribute("height", "80px");

    const h2 = document.createElement("h2");
    h2.innerHTML = "Thank you for visiting!";
    
    const h4 = document.createElement("h4");
    h4.innerHTML = "View the source code here";

    const a = document.createElement("a");
    a.setAttribute("href", "https://github.com/BMeyer-18/portfolio");
    a.appendChild(h4);

    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(a);

    const footer = document.querySelector("footer");
    footer.appendChild(img);
    footer.appendChild(div);
}

addToNav("", "./index.html", "BMeyer-18/portfolio/images/BM_logo.png", "45px");
addToNav("Projects", "./projects.html", "./images/pencil.png", "40px");
addToNav("Resume", "./skills.html", "./images/paper.png", "35px");
addToNav("Contact", "./contact.html", "./images/envelope.png", "20px");

makeFooter();
