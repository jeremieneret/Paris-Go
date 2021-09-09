import { Fragment, React } from 'react';
import DisplayEventCards from './DisplayEventCards';

export default function Home() {
    return (
        <Fragment>
            <div className="presentation">
                <h1>Trouvez ici vos meilleures idées de sorties !</h1>
                <h2>En consultant les dernières actualités ci-dessous, ou en utilisant la page Recherche.</h2>
                <h2>Constituez votre carnet de sorties en cliquant sur les coeurs et retrouvez votre liste dans la page Favoris !</h2>
                <br/>
                <h2>Allez, go !</h2>
            </div>
            <div>

                <h1 className='actu-title'>C'est tout frais :</h1>
            </div>
            <DisplayEventCards />
        </Fragment>
    )
}