import "../../Styles/Css/cards.css"
import Welcome from "../Welcome";
import Header from "../Header"
import Modal from "../Modal";
const { useState, useEffect, useCallback, useRef } = require("react")

const Cards = ({}) => {
    const [posts, setPosts] = useState([]);    
    const [postsPerPage,setPostPerPage] = useState([]);
    const [clickPost, setClickPosts] = useState(false);

    
const reload = () => {
    setPosts([]);
    setPostPerPage([]);
    setClickPosts(false)
}
    
    

    const filterCards = () =>{

        const cardOne = posts[Math.floor(Math.random()*posts.length)];
        

        const cardTwoFiltered = posts.filter((el)=>{
            return el.house !== cardOne.house
        })        
        const cardTwo = cardTwoFiltered[Math.floor(Math.random() * cardTwoFiltered.length)]
        

        const cardThreeFiltered = posts.filter((el)=>{
            return el.house !== cardTwo.house && el.house !== cardOne.house
        })        
        const cardThree = cardThreeFiltered[Math.floor(Math.random() * cardThreeFiltered.length)]
     
        setPostPerPage([cardOne,cardTwo,cardThree])
        setClickPosts(true)

    }


        

    useEffect (() => {
        fetch(`https://hp-api-ken.herokuapp.com/api/characters/students?postsPerPage=${postsPerPage}`)
        .then((res) => res.json())
        .then((res) => setPosts(res.filter((item) => item.house !== "")))
        .catch((err)=> console.log(err))
    }, [postsPerPage]);


    // const carrosel = useRef(null);

    // // const handleLefClick = (e) => {
    // //     e.preventDefault();
    // //     carrosel.current.scrollLeft -= carrosel.current.offsetWidt;
    // //     setClickPosts(true)
    // // }
    // // const handleRigthClick = (e) => {
    // //     e.preventDefault();
    // //     carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    // //     setClickPosts(true)
    // }

    return(
        <div>
            <Header reload={reload}/>
            {clickPost === false ?  (<Welcome></Welcome>):(
                <div className="container--cards--geral">
                {postsPerPage.map((el, index) => {
                    const {image, name, house,patronus,dateOfBirth,ancestry} = el;
    
                    return (
                    <div key={index} className={house ==="Gryffindor"? "cards--Gryffindor cards--geral": house === "Slytherin"?
                    "cards--Slytherin cards--geral": house === "Hufflepuff"? "cards--Hufflepuff cards--geral": house === "Ravenclaw"?
                    "cards--Ravenclaw cards--geral": null}>
                        
                        <div className="container--img">
                            <img src={image} alt={name}/>
                        </div>
                        <div>
                            <ul  className="container--list">
                                <li className="list--name">
                                    <p>Nome: <span>{name}</span></p>
                                </li>
                                <li className="list--house">
                                    <p>Casa: <span>{house}</span></p>
                                </li>                                
                            </ul>                             
                        </div>
                        <Modal patronus={patronus} dateOfBirth={dateOfBirth} ancestry={ancestry}/>
                     </div>
                )})}
                 
                </div>
            )}
            {/* <div className="container--scroll">
                <button className="button--left" onClick={handleLefClick}> 
                    <p>&#60;</p>
                </button>
                <button className="button--rigth" onClick={handleRigthClick}>
                    <p>&gt;</p>
                 </button>
            </div> */}
            
            <div className="container--button">
            {clickPost === false?(<button onClick={filterCards}>Jogar</button>):
            <button onClick={filterCards}>Jogar Novamente</button>}

            </div>
                 
        </div>
    )
}

export default Cards