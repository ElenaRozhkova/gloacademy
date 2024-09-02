import { Header } from '../components/Header/Header.jsx';
import { Card } from '../components/Card/Card.jsx';
import { Side } from '../components/Side/Side.jsx';
import { cardArray } from '../constants.js';


export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Search..." />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/images/suche.svg" alt="" />
                                <span className="search-btn__text">Suche</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title"> Angebote </h2>
                                <div className="content-main__list" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                name={card.name}
                                                preis={card.preis}
                                                adresse={card.adresse}
                                                datum={card.datum}
                                                img={card.img} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title"> Service </h3>
                                <div className="content-side__box">
                                    <Side />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}