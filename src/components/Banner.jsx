import React from 'react';
export default function Banner() {
    return (
        <section className="bg-white lg:grid lg:h-fit lg:place-content-center">
            <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-3xl md:4xl font-bold text-gray-900">
                        Understand user flow and
                        <strong className="text-indigo-600"> increase </strong>
                        conversions
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 md:text-lg/relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                        accusamus impedit minima harum corporis iusto.
                    </p>

                    <div className="mt-4 flex justify-center items-center align-center gap-4 sm:mt-6">
                        <div
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-3 py-1 md:px-5 md:py-3 text-sm md:text-md font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 cursor-pointer focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                        >
                            Get Started
                        </div>

                        <div
                            className="inline-block rounded border border-gray-200 px-3 py-1 md:px-5 md:py-3  text-sm md:text-md font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                        >
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}