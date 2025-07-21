import React, { useState, useMemo } from 'react';
export default function useColorControls() {
    const [hue, setHue] = useState(180);
    const [saturation, setSaturation] = useState(60);
    const [lightness, setLightness] = useState(50);
    const [colorScheme, setColorScheme] = useState('Monochromatic');

    // Calculate all color relationships
    const colorValues = useMemo(() => ({
        primary: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        monochromaticA: `hsl(${hue}, ${saturation}%, ${lightness + 15}%)`,
        monochromaticB: `hsl(${hue}, ${saturation}%, ${lightness - 15}%)`,
        complementary: `hsl(${(hue + 180)}, ${saturation}%, ${lightness}%)`,
        analogousA: `hsl(${(hue + 30)}, ${saturation}%, ${lightness}%)`,
        analogousB: `hsl(${(hue - 30)}, ${saturation}%, ${lightness}%)`,
        triadicA: `hsl(${(hue + 120)}, ${saturation}%, ${lightness}%)`,
        triadicB: `hsl(${(hue + 240)}, ${saturation}%, ${lightness}%)`,
        tetradicA: `hsl(${(hue + 90)}, ${saturation}%, ${lightness}%)`,
        tetradicB: `hsl(${(hue + 270)}, ${saturation}%, ${lightness}%)`
    }), [hue, saturation, lightness]);

    const getTextColor = (lightness) => {
    return lightness > 50 ? 'text-black' : 'text-white';
    };
    const getNeutralColor = () => {
        const neutralColor = `hsl(${hue}, 20%, ${lightness}%)`;
        return neutralColor;
    }
    // Calculate the current scheme's colors
    const colorSchemeValues = useMemo(() => {
        switch(colorScheme) {
            case 'Analogous':
                return [colorValues.primary, colorValues.analogousA, colorValues.analogousB];
            case 'Complementary':
                return [colorValues.primary, colorValues.complementary];
            case 'Triadic':
                return [colorValues.primary, colorValues.triadicA, colorValues.triadicB];
            case 'Tetradic':
                return [
                    colorValues.primary,
                    colorValues.triadicA,
                    colorValues.complementary,
                    colorValues.tetradicB
                ];
            case 'Monochromatic':
            default:
                return [
                    colorValues.primary,
                    colorValues.monochromaticA,
                    colorValues.monochromaticB,
                ];
        }
    }, [colorScheme, hue, saturation, lightness, colorValues]);

        const schemeData = useMemo (() => {
            switch(colorScheme) {
            case 'Monochromatic':
                return [
                    { name: 'Monochromatic', brandColor: colorValues.primary, bgColor: getNeutralColor(), linkColor: colorValues.monochromaticA, accentColor: colorValues.monochromaticB }
                ];
            case 'Analogous':
                return [
                    { name: 'Analogous', brandColor: colorValues.primary, bgColor: getNeutralColor(), linkColor: colorValues.analogousA, accentColor: colorValues.analogousB }
                ];
            case 'Complementary':
                return [
                    { name: 'Complementary', brandColor: colorValues.primary, bgColor: getNeutralColor(), linkColor: colorValues.complementary, accentColor: colorValues.complementary }
                ];
            case 'Triadic':
                return [
                    { name: 'Triadic', brandColor: colorValues.primary, bgColor: getNeutralColor(), linkColor: colorValues.triadicA, accentColor: colorValues.triadicB }
                ];
            case 'Tetradic':
                return [
                    { name: 'Tetradic', brandColor: colorValues.primary, bgColor: getNeutralColor(), linkColor: colorValues.tetradicA, accentColor: colorValues.tetradicB }
                ];
            }
        }, [colorScheme, colorValues, getNeutralColor]);
        
      
    return {
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
        getTextColor,
        getNeutralColor,
        schemeData
    };
}