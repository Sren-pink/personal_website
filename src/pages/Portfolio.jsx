import './Portfolio.css'
import { PersonalProject2023 } from "../components/portfolio/2023/2023_projects"
import { PersonalProject2024 } from "../components/portfolio/2024/2024_projects"
import { PersonalProject2025 } from "../components/portfolio/2025/2025_projects"

export function Portfolio() {
    return (
        <>
            <PersonalProject2025 />
            <PersonalProject2024 />
            <PersonalProject2023 />
        </>
    )
}