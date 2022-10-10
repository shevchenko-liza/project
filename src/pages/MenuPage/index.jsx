import { useParams } from "react-router-dom"
export const MenuPage = () => {
    const { menu_page } = useParams()
    console.log(menu_page)
    return (
        <div>PAGE</div>
    )
}