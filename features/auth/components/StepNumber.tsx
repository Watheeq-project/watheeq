import React from "react";

type StepStatus = "done" | "todo";

interface StepNumberProps {
    number: number;
    status?: StepStatus;
}

export const StepNumber = ({ number, status = "todo" }: StepNumberProps) => {
    if (status === "done") {
        return (
            <span
                className="
          w-9 h-9 md:w-10 md:h-10
          rounded-full
          flex items-center justify-center
          bg-[#E7F6EE]
          text-[#1F8A5B]
          shadow-sm
        "
                aria-label="done"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        );
    }

    return (
        <span
            className="
        w-9 h-9 md:w-10 md:h-10
        rounded-full
        flex items-center justify-center
        bg-[#C9A46A]
        text-white
        font-bold
        text-sm md:text-base
        shadow-sm
      "
            aria-label={`step ${number}`}
        >
            {number}
        </span>
    );
};
