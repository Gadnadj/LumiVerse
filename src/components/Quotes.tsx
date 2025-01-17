import React from 'react';

type Props = {}

const Quotes = (props: Props) => {
    return (
        <>
            <div className='container py-6 px-4'>
                <h1 className='text-2xl sm:text-4xl font-bold max-w-[550px] mx-auto text-center font-parisienne'>
                    "Virtual reality is a medium, a means by which humans can share idead and experiences."
                </h1>
            </div>
        </>
    );
};

export default Quotes;