import { JSX, ReactNode } from "react"

type CardProps = {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps): JSX.Element {
    return <div className={`bg-white p-4 rounded-lg shadow ${className || ''} `}>
        {children}
    </div>
}