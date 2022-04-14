import "../../Styles/Css/header.css"

const Header = ({reload}) => {
     

    return (
        <header className="container--header">
            <div className="header--icon">
                <span onClick={reload}>w</span>
            </div>
            <div className="header--title">
                <h1>Harry Potter</h1>
            </div>
            <div className="header--song">
                <p>{' '}</p>
            </div>
        </header>
    )
}

export default Header