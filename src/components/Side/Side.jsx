import { sideArray } from '../../constants.js';
import { SideList } from '../SideList/SideList.jsx';

export const Side = () => {
    return (
        <>
            <div className="content-side__list">
                {
                    sideArray.map(item => (
                        <SideList
                            key={item.id}
                            title={item.title}
                            text={item.text}
                        />
                    ))
                }
            </div>

            <div className="content-side__footer">
                <p className="content-side__footer--item">TestFirma</p>
                <a href="#!" className="content-side__footer--item">Datenschutzerklärung</a>
                <a href="#!" className="content-side__footer--item">Impressum</a>
            </div>
        </>
    )
}
