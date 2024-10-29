export default function text(){
    let style = `
        {
            width: 40%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
        }`
    
    const text = createElementToPage(undefined, "div", style)
    text.innerHTML = "História"
    return(text)
}