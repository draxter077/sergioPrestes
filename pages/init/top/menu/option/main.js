export default function option(t){
    let style = `
        {
            padding: 10px 15px;
            border-radius: 5px;
            background: var(--colorWhite);
            cursor: pointer;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 20px 0px var(--colorWhite);
        }`
    
    const option = createElementToPage(undefined, "div", style)
    option.innerHTML = t
    option.onclick = function a(){
        document.getElementById(t).scrollIntoView({behavior: "smooth"})
    }
    return(option)
}