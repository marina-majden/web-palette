import React from 'react'
import ThemeController from '../components/ThemeController.jsx';

export default function ColorPicker() {


    return (
        <section id='picker'>

            <div className="mx-auto w-full lg:w-5/6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div>
                    <p className="text-5xl font-bold text-primary sm:text-3xl">Color Picker</p>

                    <p className="mt-4 max-w-md text-text text-lg">
                        Choose the hue, adjust the brightness and saturation if needed, and pick one of the color-schemes.
                    </p>
                </div>
                <ThemeController />
            </div>

        </section>
    )
}

