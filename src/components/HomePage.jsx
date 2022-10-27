import React, { Fragment } from 'react'

const HomePage = ({ play, loading }) => {
    return (
        <Fragment>
            <div className="grain"></div>
            {loading ? (
                <button className="btn">LOADING...</button>
            ) : (
                <button className="btn" onClick={play}>
                    НАЧАТЬ
                </button>
            )}
        </Fragment>
    )
}

export default HomePage
