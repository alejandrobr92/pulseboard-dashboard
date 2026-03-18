import { JSX, ReactNode } from "react"

type CardProps = {
    children: ReactNode;
}

export default function Card({ children }: CardProps): JSX.Element {
    return <div className="bg-white p-4 rounded-lg shadow">
        {children}
    </div>
}