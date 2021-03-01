import React, {useState} from 'react'
import CustomersTable from './CustomersTable'
import Search from './Search'

const CustomerContainer = (props) => {
    const {customers, uniqueCustomers} = props
    const [term, setTerm] = useState('')
        const orderTotal = (customer) => {
        let sum = 0
        for(const ele of customer){
            sum += ele.Amount
        }
        return sum
    }


    const showDetails = (customer) => {
        const customerOrders = customers.filter(ele => ele.Phone === customer.Phone)
        console.log(customer)
        const customerOrderTotal = orderTotal(customerOrders)
        alert(`
        Name - ${customer.Name}
        Order Count - ${customerOrders.length}
        Order Total - ${customerOrderTotal}
        `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomers = () => {
        const result = uniqueCustomers.filter((ele)=>{
            return ele.Name.toLowerCase().includes(term) || String(ele.Phone).includes(term)
        })
        return result
    }

    return (
        <div className = "mb-3">
        <div className = "row">
            <div className = "col-md-8">
                <h2>Listing Customers - {uniqueCustomers.length}</h2>
            </div>
            <div className = "col-md-4">
                <Search term = {term} handleChange = {handleChange}/>
            </div>
        </div>
            <div className = "row">
                <div class = "col-md-12">
                    <CustomersTable customers = {filteredUniqueCustomers()}  showDetails = {showDetails}/>
                </div>
            </div>
        </div>
    )
}
export default CustomerContainer