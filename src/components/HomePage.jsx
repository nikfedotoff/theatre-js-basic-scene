import React, { Fragment } from 'react'

const HomePage = ({ play, loading }) => {
    return (
        <Fragment>
            <div className="grain"></div>
            <button className="btn" onClick={play}>
                НАЧАТЬ (LOADING...)
            </button>
        </Fragment>
    )
}

export default HomePage
