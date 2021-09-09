import { Fragment, React } from 'react';
import { useState } from 'react/cjs/react.development';

function SearchEvent(props) {
    const { onSearchEvent } = props;

    const [searchInputText, setSearchInputText] = useState();

    const handleInput = (e) => {
        const inputText = e.target.value;
        setSearchInputText(inputText)
    }
    const handleEnterKeyPressed = (e) => {
        if (e.key === 'enter') {
            onSearchEvent(searchInputText)
        }
    }


    return(
        <Fragment>
            <input 
                className='search-input'
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                value={searchInputText}
                type='text'
                placeholder='Rechercher un événement'
            />
        </Fragment>
    )
}

export default SearchEvent;