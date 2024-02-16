import Link from "next/link"
import NavbarDE from "@/components/navbarDE/NavbarDE"

export default function HomeDE() {

    return (
        <>
    <NavbarDE />
        <h1>Hello</h1>
        <Link href="/">EN</Link>
        </>
    )
}