import React from 'react'
import SearchForm from '../Components/SearchForm'
import AlienGallery from '../Components/AlienGallery'

const Main = () => {
    return (
        <div className="everything">
            <h1>Aliens Database</h1>
            <img src="../Images/logo.png" alt="omnitrix" id="omni" />
            <SearchForm/>
            <AlienGallery/>
        </div>
    )
}

export default Main
