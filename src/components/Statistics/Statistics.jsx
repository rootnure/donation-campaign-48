import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonations } from '../../localStorage';


const Statistics = () => {
    const [data, setData] = useState([
        {name: 'a', value: 10},
        {name: 'b', value: 0},
    ])

    useEffect(() => {
        const donatedTotal = getStoredDonations();
        fetch('data.json')
        .then(res => res.json())
        .then(result => {
            setData([
                {name: 'a', value: result.length - donatedTotal.length},
                {name: 'b', value: donatedTotal.length},
            ])
        })
    }, []);

    const colors = ['#FF444A', '#00C49F'];

    const radian = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
        const x = cx + radius * Math.cos(-midAngle * radian);
        const y = cy + radius * Math.sin(-midAngle * radian);

        return (
            <text className='text-xl' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <section className='my-12'>
                <div className="flex justify-center items-center text-center font-bold text-3xl md:text-4xl mb-8">Donation Summary Chart</div>
                <div className="flex justify-center items-center">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={185}
                            dataKey="value"
                        >
                            {data.map((entry, idx) => (
                                <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className='flex justify-center gap-8 my-4'>
                    <div className='flex gap-2'>
                        <p>Your Donation</p>
                        <p className='px-8 bg-[#00C49F]'></p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Total Donation</p>
                        <p className='px-8 py-2 bg-[#FF444A]'></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Statistics;