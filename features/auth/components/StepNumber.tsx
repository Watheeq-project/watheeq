import React from 'react';

interface StepNumberProps {
    number: number;
}

export const StepNumber = ({ number }: StepNumberProps) => {
    return (
        <div className="shrink-0">
            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-sm">
                {number}
            </span>
        </div>
    );
};
