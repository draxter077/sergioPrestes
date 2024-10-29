export default function logo(){
    let style = `
        {
            background: var(--colorWhite);
            color: var(--colorBlack);
            width: 20%;
            height: 50px;
        }`
    
    const logo = createElementToPage(undefined, "div", style)
    logo.innerHTML = "Sergio Prestes Consultoria"
    return(logo)
}