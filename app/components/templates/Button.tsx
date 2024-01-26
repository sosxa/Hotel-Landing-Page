import React from 'react'

type ButtonProps = {
    text: string,
    id?: string,
}

function Button(props: ButtonProps) {
    return (
        <button id={props.id} className="bg-[#e82574] hover:bg-[#bc1c5c] text-white font-bold py-2 px-4 rounded">
            {props.text}
        </button>

    )
}

export default Button
