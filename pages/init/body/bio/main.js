import photo from "./photo/main.js"
import text from "./text/main.js"

export default function bio(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100dvh;
            background: red;
            padding: 100px 20px 20px 20px;
        }`
    
    const bio = createElementToPage(undefined, "div", style)
    bio.id = "Bio"
    bio.appendChild(photo())
    bio.appendChild(text())
    return(bio)
}