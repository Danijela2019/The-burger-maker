import React from 'react';

import CoverCard from './CoverCard'
import classes from './CoverCard.module.css'


const Home = () => {
    return (
        <main className={classes.Main}>
            <CoverCard />
        </main>
    )
}

export default Home;