import { handleWhoAmI } from "@/lib/actions/auth-action";
import { notFound } from "next/navigation";
import ProfileForm from "./_components/ProfileForm";

export default async function Page() {
    const result = await handleWhoAmI();
    
    if(!result.success){
        throw new Error("Error");
    }

    if(!result.data){
        notFound()
    }

    return (
        <div>
            <ProfileForm user={result.data} />
        </div>
    );
}