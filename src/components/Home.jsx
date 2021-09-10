import { Fragment, React } from 'react';
// import DisplayEventCards from './DisplayEventCards';

export default function Home() {
    return (
        <Fragment>
            <div className="home">
                <div className="presentation__ctnr">
                    <div className="presentation">
                        <h1>À toi les meilleures idées de sorties !</h1>
                    </div>
                    <div className="presentation">
                        <h2>Soit le premier au courant du dernier événement publié sur cette page, ou bien utilise la page Recherche, pour une recherche d'événement plus spécifique.</h2>
                    </div>
                    <div className="presentation">
                        <h2>Constitue ton carnet de sorties en cliquant sur les coeurs et retrouve ta liste dans la page Favoris !</h2>
                    </div>
                    <div className="presentation">
                        <h2>Allez, go !</h2>
                    </div>
                </div>
                <h1 className='actu-title'>C'est tout frais :</h1>
            </div>
            {/* <DisplayEventCards /> */}
        </Fragment>
    )
}