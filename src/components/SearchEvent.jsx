import { Fragment, React, useState } from 'react';
import DisplayEventCards from './DisplayEventCards';

function SearchEvent() {

    const [searchInputText, setSearchInputText] = useState();


    return (
        <Fragment>
            <input
                className='search-input'
                onChange={e => setSearchInputText(e.target.value)}
                value={searchInputText}
                type='text'
                placeholder="Exemples : expo, Paris 15e, Gaîté Lyrique, féminisme..."
            />
            <DisplayEventCards

                search= {searchInputText}

            />
        </Fragment>
    )
}

export default SearchEvent;