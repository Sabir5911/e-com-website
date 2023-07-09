
import { NextRequest,NextResponse} from "next/server";
import {db,usercarts} from '../../lib/drizzel'
import {v4} from "uuid"
import { cookies } from "next/dist/client/components/headers";
export async function GET(request:NextRequest){      

try{
    const res=await db.select().from(usercarts)
    return NextResponse.json(res)
}catch(err){
    return new Response("some thing went wrong in ")       
}
}
export async function POST(request:NextRequest){   
    const req =await request.json()
     const idgenerate=v4()
    const setcookey=cookies()
    const user_id=cookies().get('id')?.value

    if(!user_id){
        setcookey.set('id',idgenerate)

    }

    try{
        const res=await db.insert(usercarts).values({
            price:req.price,
            product_name:req.product_name,
            quantity:req.quantity,
            image:req.image,
            size:req.size,
            user_id:user_id,
            title:req.title
            
        }).returning()
        return NextResponse.json(res)

    }catch(err){
        return NextResponse.json({messgae:"error"})
    }
    }