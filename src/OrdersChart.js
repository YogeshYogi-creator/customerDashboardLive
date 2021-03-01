import React from 'react'

 const OrdersChart = (props) => { // Child Of OrdersContainer
                    const {data} = props
                    const google = window.google
                    google.charts.load('current', { 'packages': ['corechart'] })
                    google.charts.setOnLoadCallback(drawChart)
                    const chartData = [
                        ['No. Of Orders', 'Customer Count'],
                    ]
                    for (const key in data) {
                        chartData.push([key, data[key]])
                    }
                    function drawChart() {
                        
                        const data = google.visualization.arrayToDataTable(chartData);

                        const options = {
                            title: 'Order Distribution'
                        };

                        const chart = new google.visualization.PieChart(document.getElementById('piechart'));

                        chart.draw(data, options);
                    }
                    return (
                        <div className = "col-md-6">
                            <div id = "piechart" style={{width: '450px', height: '250px'}}></div>
                        </div>
                    )
                }
export default OrdersChart