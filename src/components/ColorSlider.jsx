import React from 'react';

export default function ColorSlider({
    id,
    label,
    value,
    min,
    max,
    unit = '',
    onChange
}) {
    const resetToDefault = () => {
        onChange(50); // Reset to default value of 50
    };

    return (
        <div className="flex items-center gap-4">
            <div className="flex-1">
                <label htmlFor={id} className="block text-sm font-medium text-text">
                    {label}:
                </label>
                <div className="flex items-center gap-2">
                    <input
                        type="range"
                        id={id}
                        min={min}
                        max={max}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full"
                    />
                    <span className="text-sm font-mono min-w-[40px]">
                        {value}{unit}
                    </span>
                </div>
            </div>


            <button
                onClick={resetToDefault}
                className="button-outline"
                title="Reset to 50"
            >
                Reset
            </button>

        </div>
    );
}