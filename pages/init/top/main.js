import logo from "./logo/main.js"
import menu from "./menu/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            position: fixed;
            top: 0%;
            background: rgb(0, 0, 0, 0.3);
            padding: 20px;
        }`
    const top = createElementToPage(undefined, "div", style)
    top.appendChild(logo())
    top.appendChild(menu())
    return(top)
}