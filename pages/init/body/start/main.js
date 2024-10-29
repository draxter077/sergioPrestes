export default function start(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100dvh;
            background: green;
        }`
    
    const start = createElementToPage(undefined, "div", style)
    start.innerHTML = "Frase de impacto"
    return(start)
}