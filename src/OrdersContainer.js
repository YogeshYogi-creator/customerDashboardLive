import React from 'react'
import OrdersTable from './OrdersTable'
import OrdersChart from './OrdersChart'
const OrdersContainer = (props) => {
    const {customers, uniqueCustomers} = props 

//Creating Object
    const customerFrequency = () => {
        const customersData = uniqueCustomers
        // console.log(customersData)
        const frequencyObj = {1:0, 2:0, 3:0, 4:0, '5+':0}
        customersData.forEach((customer)=> {
            const customerOrders = customers.filter((c)=>{
                return c.Phone === customer.Phone
            })
            if(customerOrders.length >= 5) {
                frequencyObj['5+']++
            }else{
                frequencyObj[customerOrders.length]++
            }
        })
        return frequencyObj
    }
console.log(customerFrequency())

    return (
        <div className = "row mt-3">
            <div className = "col-md-12"><h2>Orders Distribution</h2></div>
            
            <OrdersTable data={customerFrequency()}/>
            <OrdersChart data={customerFrequency()}/>
        </div>
    )
}
export default OrdersContainer