import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";

export default function ErrorStripe() {
    return (
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CircleX className="text-red-600 w-16 h-16 mx-auto my-6"/> 
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Something Went Wrong...</h3>
                    <Button className="mt-5 bg-blue-600 hover:bg-blue-800">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

