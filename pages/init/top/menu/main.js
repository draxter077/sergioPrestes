import option from "./option/main.js"

export default function menu(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 40%;
        }`

    const menu = createElementToPage(undefined, "div", style)

    let opts = ["Bio", "Experiência", "Metodologia", "Contato"]
    for(let i = 0; i < opts.length; i++){
        menu.appendChild(option(opts[i]))
    }
    return(menu)
}