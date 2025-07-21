import React from 'react'
import background from "/assets/img/pawel-czerwinski-unsplash.webp"
function Home() {
    return (
        <section
            className="w-full bg-text"

        >
            <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="heading">Web Palette</h2>

                    <p className="hidden max-w-lg text-white md:mt-6 md:block md:text-lg md:leading-relaxed">
                        Create and preview your own color schemes for web design. Adjust hue, saturation, and lightness to find the perfect palette for your project.
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <a
                            href="#picker"
                            className="button"
                        >
                            Let's start!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;