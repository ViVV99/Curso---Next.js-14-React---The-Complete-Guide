import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Welcome to the meals page!</h1>
            <Link href="meals/share">Share meals</Link>
            <Link href="meals/community">Talk about meals</Link>
            <Link href="meals/secret-route">Its secret!</Link>
        </main>
    )
}