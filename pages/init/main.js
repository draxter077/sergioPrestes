import top from "./top/main.js"
import body from "./body/main.js"

export default function init(){
    let style = `
        {
            height: 100dvh;
            width: 100%;
        }`

    const init = createElementToPage(undefined, "div", style)
    init.appendChild(top())
    init.appendChild(body())
    return(init)
}