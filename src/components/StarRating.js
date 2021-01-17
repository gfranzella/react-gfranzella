import React, { useState }  from 'react'
import './StarRating.css'
import { FaStar } from 'react-icons/fa'




function Star({selected = false, onSelect}){
    
    return <FaStar 
            color={ selected ? "red": "gray"} 
            onClick={onSelect}
            />;
}

const createArray = (length) => [...Array(length)];

function StartRating({totalStars = 4}){

    const [selectedStar, setSelectedStar] = useState(0);

    return( 
        <>
            {
                createArray(totalStars).map((s,i) => { 
                    return <Star 
                            selected={selectedStar > i} 
                            key={i} 
                            onSelect={() => setSelectedStar(i + 1)} />
                })
            }

            <p>{selectedStar} of {totalStars}</p>
        </>
    );

}

export default StartRating