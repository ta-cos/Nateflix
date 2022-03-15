import React from 'react'
import { FaDivide } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './search.css'

const Search = ({ searchTerm }) => {

    const history = useHistory();
    const videos = Object.values(useSelector(state => state.videos))
    let foundVids = [];
    //if title contains the search term filter it into new arr
    if (searchTerm === '' || searchTerm[0] === " ") {
        foundVids = [];
    } else
        foundVids = videos?.filter(vid => vid.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const goBack = () => {
        history.push('/browse')
    }

    return (
        <div id='searchContainer'>
            <h2 style={{ color: 'white' }}>Showing results for: {searchTerm}</h2>
            {foundVids.length > 0 ?
                foundVids.map(vid => (
                    <iframe loading='lazy' height='500px' width='500px' src={vid.vid} frameBorder="0" allowFullScreen />
                ))
                :
                <>
                    <h1 style={{ color: 'white' }}> No results were found</h1>
                    <h2>Try being more specific or check your spelling</h2>
                </>
            }

            <button id='goBack' onClick={goBack}>Back to Browse</button>
        </div >
    )
}

export default Search
