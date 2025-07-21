import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Stats from '../components/Stats'
import useColorControls from '../hooks/useColorControls'

export default function Preview() {

    const {
        schemeData,

    } = useColorControls();


    return (
        <section className="bg-gray-100 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="w-full lg:max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-5xl">Color Scheme Preview</h2>
                <p className="mt-4 text-gray-600 md:mt-6 md:text-lg md:leading-relaxed">
                    Preview your selected color scheme in real-time. Adjust the colors and see how they look together.
                </p>
                <div className="w-full mt-4 mx-auto">
                    <div className="w-full bg-white border border-gray-700/50 shadow-md rounded-md">
                        <Header colors={schemeData} />
                        <Banner />
                        <div className="flex flex-col lg:flex-row gap-4 p-6">
                            <div className="flex-2">
                                <Card />
                            </div>

                            <div className="flex-1">

                                <Stats />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}