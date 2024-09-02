import './SideList.css';

export const SideList = ({ title, text }) => {
    return (
        <div className="content-side__list-item">
            <img className="content-side__list-item--img" src="/images/cart1.svg" alt="" />
            <h5 className="content-side__list-item--title">{title}</h5>
            <p className="content-side__list-item--text">{text}</p>
        </div>
    )
}