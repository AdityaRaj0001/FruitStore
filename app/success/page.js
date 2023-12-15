import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex gap-2 text-lg m-4">
            Nice!
            <Link href={'/'} className="underline">Back home</Link>
        </div>
    )
}