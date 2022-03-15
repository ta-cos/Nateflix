import React from 'react'
import { FaDivide } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './search.css'

const Search = ({ searchTerm }) => {

    const videos = Object.values(useSelector(state => state.videos))

    //if title contains the search term filter it into new arr
    const foundVids = videos?.filter(vid => vid.title.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(foundVids)


    return (
        <div id='searchContainer'>
            <h2 style={{ color: 'white' }}>Showing results for: {searchTerm}</h2>
            <div id='searchContent'>
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
            </div>
        </div >
    )
}

export default Search
