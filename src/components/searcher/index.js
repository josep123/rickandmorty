import React from 'react';


function Searcher({ onSearch }) {

    const handleInputChange = (event) => {
        const searchText = event.target.value;
        onSearch(searchText);
      };


    return(
        <div>
             <input type="text" placeholder="Choose your favourite Character" className="Buscador" onChange={handleInputChange} />
        </div>
    )
}


export default Searcher;