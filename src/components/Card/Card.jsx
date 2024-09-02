import './Card.css';

const textFunc = () => {
    return (
        <>
            <p>lalalal</p>
        </>)

}

export const Card = ({ name, preis, adresse, datum, img }) => {
    return (
        <a href="/product.html" className="card" >
            <div className="card--img">
                <img src={img} alt="leopard" />
            </div>
            <h5 className="card--title">
                {name}
            </h5>
            <strong className="card--prise">
                {preis}
            </strong>
            <div className="card--desk-box">
                <span className="card--desk">
                    {adresse}
                </span>
                <span className="card--desk">
                    {datum}
                </span>
            </div>
            {textFunc()}
        </a>

    )
}