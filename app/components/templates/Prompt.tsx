import React, { ReactNode } from 'react'

import Calendar2LineIcon from "remixicon-react/Calendar2LineIcon";
import UserFillIcon from "remixicon-react/UserFillIcon";

type PromptProps = {
    children: ReactNode,
    title: string,
}

const Prompt: React.FC<PromptProps> = ({ title, children }) => {
    return (
        <div className='promptItems'>
            <div className='promptTextDiv'>
                <label className='promptH1'>{title}</label>
                {children}
            </div>
        </div>
    )

}

export default Prompt
