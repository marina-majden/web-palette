import React from 'react';

export default function ColorPieChart({ colors }) {
    // Calculate conic-gradient stops for the pie chart
    const getPieChartStyle = () => {
        const percentage = 100 / colors.length;
        let gradientStops = [];
        let currentPercentage = 0;

        colors.forEach((color, index) => {
            gradientStops.push(`${color} ${currentPercentage}% ${currentPercentage + percentage}%`);
            currentPercentage += percentage;
        });

        return {
            background: `conic-gradient(${gradientStops.join(', ')})`,
        };
    };

    return (
        <div className="mt-4 flex flex-col items-center">
            <div
                className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
                style={getPieChartStyle()}
            ></div>
            <div className="mt-4 grid grid-cols-4 gap-2">
                {colors.map((color, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className="w-6 h-6 rounded-sm mr-2 border border-gray-300"
                            style={{ backgroundColor: color }}
                        ></div>
                        <span className="text-xs">{color}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}