export default function method(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100dvh;
            background: purple;
        }`
    
    const method = createElementToPage(undefined, "div", style)
    method.id = "Metodologia"
    method.innerHTML = "method"
    return(method)
}