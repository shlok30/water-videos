
const ModalElements = ({title,_id}) => {
    console.log("Not getting called")
    return(
        <div className="flex self-start gap-s" >
            <input type = "checkbox" />{title}
        </div>
    )
}

export default ModalElements