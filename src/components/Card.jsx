import React from 'react';

export default function Card() {
    return (
        <div className="overflow-hidden m-2 md:m-0 border border-gray-400 rounded-lg shadow-sm transition hover:shadow-lg">
            <img
                alt="img"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-2 sm:p-6">
                <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <div>
                    <h3 className="mt-0.5 text-md text-gray-900">How to position your furniture for positivity</h3>
                </div>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-left text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                    dignissimos. Molestias explicabo corporis voluptatem?
                </p>
            </div>
        </div>
    );
}