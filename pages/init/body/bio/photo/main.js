export default function photo(){
    let style = `
        {
            width: 40%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
        }`
    
    const photo = createElementToPage(undefined, "div", style)
    photo.innerHTML = "Foto"
    return(photo)
}