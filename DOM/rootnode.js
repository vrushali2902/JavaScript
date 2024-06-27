const rootNode = document.getRootNode()
console.log(rootNode) //---------------------->document


console.log(rootNode.childNodes) //----------->[html]

const htmlelementnode=rootNode.childNodes[0]
console.log(htmlelementnode)

console.log(htmlelementnode.childNodes) //---------->head,text,body


const headElementNode = htmlelementnode.childNodes[0];
const textNode1 = htmlelementnode.childNodes[1];
const bodyElementNode = htmlelementnode.childNodes[2];

console.log(headElementNode.nextSibling); //---------------->text

console.log(headElementNode.childNodes) //----------------->NodeList(5) [text, title, text, script, text]


const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
body.style.color = "#efefef";
body.style.backgroundColor = "#333"

// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

const head = document.querySelector("head");
console.log(head); //--------------------------><head></head>

const title = head.querySelector("title");
console.log(title) //--------------------------><title>Dom traversing</title>

console.log(title.childNodes); //-------------->NodeList [text]

const container = document.querySelector(".container");
console.log(container.childNodes) //---------------->NodeList(5) [text, h1, text, p, text]
console.log(container.children); //----------------->HTMLCollection(2) [h1, p]