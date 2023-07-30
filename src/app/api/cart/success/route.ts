import { db, usercarts } from "@/app/lib/drizzel";
import { eq } from "drizzle-orm";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
    let url = cookies().get('user_id')?.value


    
    try {
        if (url) {
            let response = await db.delete(usercarts).where(eq(usercarts.user_id,url as string)).returning()
            return NextResponse.json({ response });
        }
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({messgaeh:"errora gy ha"})
    }
}