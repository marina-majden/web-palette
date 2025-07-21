import React from 'react';
import useColorControls from '../hooks/useColorControls.js';
import ColorSlider from './ColorSlider.jsx';
import ColorSchemeSelector from './ColorSchemeSelector.jsx';
import ColorPieChart from './ColorPieChart.jsx';

export default function ThemeController() {
    const {
        hue,
        setHue,
        saturation,
        setSaturation,
        lightness,
        setLightness,
        colorScheme,
        setColorScheme,
        colorSchemeValues,
        colorValues,
        getTextColor
    } = useColorControls();

    const colorData = [
        { name: 'Primary', color: colorValues.primary },
        { name: 'Complementary', color: colorValues.complementary },
        { name: 'Analogous A', color: colorValues.analogousA },
        { name: 'Analogous B', color: colorValues.analogousB },
        { name: 'Triadic A', color: colorValues.triadicA },
        { name: 'Triadic B', color: colorValues.triadicB },
        { name: 'Tetradic A', color: colorValues.tetradicA },
        { name: 'Tetradic B', color: colorValues.tetradicB },
    ];

    const copyToClipboard = () => {
        const textToCopy = colorData.map(item =>
            `${item.name}: ${item.color}`
        ).join('\n');
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy to clipboard');
            });
    };
    return (
        <div className="w-full mx-auto p-4 bg-background rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="w-1/2 mt-4 space-y-4">


                    <ColorSlider
                        id="hue-slider"
                        label="Hue"
                        value={hue}
                        min={0}
                        max={360}
                        onChange={setHue}
                    />

                    <ColorSlider
                        id="sat-slider"
                        label="Saturation"
                        value={saturation}
                        min={0}
                        max={100}
                        unit="%"
                        onChange={setSaturation}
                    />

                    <ColorSlider
                        id="light-slider"
                        label="Lightness"
                        value={lightness}
                        min={0}
                        max={100}
                        unit="%"
                        onChange={setLightness}
                    />
                </div>


                {/* Color Harmony Grid - Added Here */}
                <div className="w-1/2 mt-6 grid grid-cols-2 gap-3">
                    {[
                        { name: 'Primary color', color: colorValues.primary, lightness: lightness },
                        { name: 'Complementary color', color: colorValues.complementary, lightness: lightness },
                        { name: 'Analogous color A', color: colorValues.analogousA, lightness: lightness },
                        { name: 'Analogous color B', color: colorValues.analogousB, lightness: lightness },
                        { name: 'Triadic color A', color: colorValues.triadicA, lightness: lightness },
                        { name: 'Triadic color B', color: colorValues.triadicB, lightness: lightness },
                    ].map((item) => (
                        <div
                            key={item.name}
                            className={`h-20 rounded-md flex flex-col justify-center items-center ${getTextColor(item.lightness)}`}
                            style={{ backgroundColor: item.color }}
                        >
                            <span className="font-medium">{item.name}</span>
                            <span className="text-xs">{item.color}</span>
                        </div>
                    ))}
                    <button type="button" className="button-outline px-6 py-2" onClick={copyToClipboard}>Copy to Clipboard</button>
                </div>

            </div>


            <div className="w-full mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Color Scheme</h3>
                <div className="radio-inputs w-full flex flex-col sm:flex-row gap-4">
                    <ColorSchemeSelector value={colorScheme} onChange={setColorScheme} />
                </div>

                <ColorPieChart colors={colorSchemeValues} />

            </div>

        </div>
    );
}