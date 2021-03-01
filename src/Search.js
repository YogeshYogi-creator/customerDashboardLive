import React from 'react'

const Search = (props) => {
    const {term, handleChange} = props
    return (
        <div>
            <input type = "text" value = {term} className = "form-control" onChange = {handleChange} placeholder = "search by name of phone"/>
        </div>
    )
}
export default Search