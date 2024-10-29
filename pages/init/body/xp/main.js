export default function xp(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100dvh;
            background: yellow;
        }`
    
    const xp = createElementToPage(undefined, "div", style)
    xp.id = "Experiência"
    xp.innerHTML = "Xp"
    return(xp)
}