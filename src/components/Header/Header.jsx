import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <a href="/!" className="header-logo">
                        <i className="fa fa-bath" aria-hidden="true"></i>
                        <span>Avito</span>
                    </a>
                    <div className="header-controls">
                        <button className="btn btn-outline">Einloggen</button>
                        <button className="btn btn-primary">Anzeige</button>
                    </div>
                    <div className="header-burger">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}