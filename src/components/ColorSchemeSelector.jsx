import React from 'react';

export default function ColorSchemeSelector({ value, onChange }) {
    const colorSchemes = [
        { value: 'Monochromatic', label: 'Monochromatic' },
        { value: 'Analogous', label: 'Analogous' },
        { value: 'Complementary', label: 'Complementary' },
        { value: 'Triadic', label: 'Triadic' },
        { value: 'Tetradic', label: 'Tetradic' }
    ];

    return (<div className="color-scheme-selector">
        <div className="radio-inputs">
            {colorSchemes.map((scheme) => (
                <div className="p-0 m-0" key={scheme.value} >
                    <label
                        htmlFor={`scheme-${scheme.value}`}
                        className="cursor-pointer"
                    >
                        <input
                            type="radio"
                            id={`scheme-${scheme.value}`}
                            name="colorScheme"
                            value={scheme.value}
                            checked={value === scheme.value}
                            onChange={() => onChange(scheme.value)}
                            className="radio-input"
                        />
                        <span className="radio-tile">

                            <span className="radio-label">{scheme.label}</span>
                        </span>

                    </label>


                </div>
            ))}

        </div>
    </div>
    );
}