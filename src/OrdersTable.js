import React from 'react'

const OrdersTable = (props) => {
    const {data} = props
    return (
        <div className = "col-md-6">
        <table className = "table">
            <thead>
                <tr>
                    <th>No. Of Orders</th>
                    <th>Count Of Customers</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((ele, i)=>{
                    return(
                        <tr key = {i}>
                            <td>{ele}</td>
                            <td>{data[ele]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
export default OrdersTable