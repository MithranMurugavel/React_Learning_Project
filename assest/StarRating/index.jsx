import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './style.css'
const StarRating = ({ value = 5 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getIndex) {
        setRating(getIndex);
    }

    function handleMouseMove(getIndex) {
        setHover(getIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }
    return (
        <div className="main-str">
            <h1>Your Rating!!!</h1>
            <div>
                    
                {
                    [...Array(value)].map((_, index) => {
                        index += 1;

                        return <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={50}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default StarRating
