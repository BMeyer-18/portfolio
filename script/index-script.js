const INFO = '{ "headings": [ "What have I made?", "What can I do?", "Where can I be found?" ],' +
    '"bodies": [ "My projects include award-winning artificial intelligence research, programming for FIRST robotics, and the website that you are on right now.<br>Read more here!", "I am proficient in Java, Python, HTML, CSS, JavaScript, and more.<br>Find my resume here!", "Please feel free to reach out.<br>Find my contact information here!" ],' +
    '"srcs": [ "./images/pencil.png", "./images/paper.png", "./images/envelope.png" ],' +
    '"hrefs": [ "./projects.html", "https://drive.google.com/file/d/1ODELvDwW8sN6jmlFL6SXkS5bKmbPWluf/view?usp=sharing", "./contact.html" ] }';

const addSection = (row, heading, text, link, imgLink) => {
    const gridContainer = document.getElementById("summary");

    const textbox = document.createElement("div");
    const question = document.createElement("h1");
    const description = document.createElement("p");
    const button = document.createElement("a");
    const image = document.createElement("img");

    textbox.classList.add("textbox");
    textbox.appendChild(question);
    textbox.appendChild(description);
    button.appendChild(image);

    textbox.style.gridArea = `${row} / 2 / ${row + 1} / 3`;
    button.style.gridArea = `${row} / 4 / ${row + 1} / 5`;
    question.innerHTML = heading;
    description.innerHTML = text;
    description.classList.add("inner-text");
    button.setAttribute("href", link)
    image.setAttribute("src", imgLink);
    image.setAttribute("style", "margin-top: 50px");

    if(imgLink === "./images/envelope.png"){
        image.setAttribute("height", "100px");
    } else {
        image.setAttribute("height", "150px");
    }

    gridContainer.appendChild(textbox);
    gridContainer.appendChild(button);
}

infoObj = JSON.parse(INFO);
const headings = infoObj.headings;
const bodies = infoObj.bodies;
const srcs = infoObj.srcs;
const hrefs = infoObj.hrefs;

for(let i = 0; i < headings.length; i++) {
    addSection(i+1, headings[i], bodies[i], hrefs[i], srcs[i]);
}
