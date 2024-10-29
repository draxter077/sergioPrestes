import start from "./start/main.js"
import bio from "./bio/main.js"
import xp from "./xp/main.js"
import method from "./method/main.js"
import contact from "./contact/main.js"

export default function body(){
    let style = `
        {
            width: 100%;
        }`
    
    const body = createElementToPage(undefined, "div", style)
    body.appendChild(start())
    body.appendChild(bio())
    body.appendChild(xp())
    body.appendChild(method())
    body.appendChild(contact())
    return(body)
}