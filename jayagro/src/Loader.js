import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import './Loader.css';

export default function Loader() {

    return (
        <div className='loader_parents'>
            <FadeLoader color='rgba(255,193,7)'
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
