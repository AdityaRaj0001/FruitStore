import Link from "next/link";

export default function CancelPage() {
    return (
        <div className="flex m-4 text-xl">
            Revert?
            <Link href={'/'} className="text-lg ">Back home</Link>
        </div>
    )
}