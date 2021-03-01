import React from 'react'
import StatsItem from './StatsItem' 
// import uniqBy from 'lodash/uniqBy'
const StatsContainer = (props) => {
    const {customers, uniqueCustomers} = props
    const ordersCount = customers.length

    const orderTotal = () => {
        let sum = 0
        for(const ele of customers){
            sum += ele.Amount
        }
        return sum
    }
    return (
        <div className = "row mb-3">
            <StatsItem count = {ordersCount} text = 'Orders'/>
            <StatsItem count = {orderTotal()} text = 'Amount'/>
            <StatsItem count = {uniqueCustomers.length} text = 'customers'/>
        </div>
    )
}
export default StatsContainer