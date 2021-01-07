import React from 'react';

import CoverCard from './CoverCard'
import classes from './CoverCard.module.css'


const Home = () => {
    return (
        <section className={classes.Main}>
            <CoverCard />
        </section>
    )
}

export default Home;