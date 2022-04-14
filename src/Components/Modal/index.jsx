import { useState } from "react"
import "../../Styles/Css/modal.css"


const Modal = ({patronus,dateOfBirth,ancestry}) => {

    const [isModalVisible, setIsModalVisible] = useState(false)


    return(
        <div className="container--dislay-modal">{isModalVisible === false ? (
        <button onClick={()=> setIsModalVisible(true)} className="button--modal">
        +
        </button>):
        (<button onClick={()=> setIsModalVisible(false)} className="button--modal button--active">
        -
        </button>)}
            
            {isModalVisible? (
            <div>
                <ul className="lista--modal">
                    <li className="modal--patrono modal--description">{patronus? (<p className="description">Patrono: <span>{patronus}</span></p>):null}</li>
                    <li className="modal--date modal--description">{dateOfBirth?(<p className="description">Data de nascimento: <span>{dateOfBirth}</span></p>):null}</li>
                    <li className="modal--ancestry modal--description">{ancestry?(<p className="description">Ancestralidade: <span>{ancestry}</span> </p>):null}</li>
                </ul>

            </div>) : null}
        </div>
    )
}

export default Modal