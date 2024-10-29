export default function contact(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100dvh;
            background: blue;
        }`
    
    const contact = createElementToPage(undefined, "div", style)
    contact.id = "Contato"
    contact.innerHTML = "Contact"
    return(contact)
}