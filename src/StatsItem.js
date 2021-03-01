import React from 'react'

const StatsItem = (props) => {
    const {count, text} = props
    return (
        <div className = "col-md-4">
            <div className = "card bg-info">
                <div className = "card-header"><h2>{count}</h2></div>
                <div className = "card-body"><h3>{text}</h3></div>
                <div className = "card-title"></div>

            </div>
        </div>
    )
}
export default StatsItem