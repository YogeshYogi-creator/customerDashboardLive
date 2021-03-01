import React from 'react'
const CustomersTable = (props) => {
    const {customers, showDetails} = props
    return (
        <table className = "table table-striped table-hover">
            <thead className = "table-gray">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Show</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((ele, i)=>{
                    return(
                        <tr key = {i}>
                            <td>{ele.Name}</td>
                            <td>{ele.Phone}</td>
                            <td><button onClick = {()=>{
                                showDetails(ele)
                            }} type = "button" className="btn btn-primary">Show</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default CustomersTable