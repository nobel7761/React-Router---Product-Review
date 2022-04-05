import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, BarChart, CartesianGrid, Bar, AreaChart, Area, ResponsiveContainer } from 'recharts';




const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='mb-5'>
            <h1 className='text-center py-5 fw-bold'><span className='colored-text'>Chart</span> Based on <span className='colored-text'>Provided Data</span></h1>
            <div className='chart-container'>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <XAxis dataKey="month" />
                            <YAxis dataKey="sell" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <AreaChart

                            data={data}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis dataKey="investment" width={65} />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>



                <div style={{ width: '100%', height: 300 }}>
                    <h3 className='text-center fw-bold text-primary'>Investment VS Revenue</h3>
                    <ResponsiveContainer>
                        <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>



                <div style={{ width: '100%', height: 300 }}>
                    <h3 className='text-center fw-bold text-primary'>Investment VS Revenue</h3>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 