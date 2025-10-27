import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";


export async function POST(req: NextRequest){
    try{
        await connectDB();
        const formData = await req.formData();
        let event;
        try{
            event = Object.fromEntries(formData.entries());

        }catch(e){
            console.error(e);
            return NextResponse.json({message: 'Invalid data format'}, {status: 400});
        }

        const createdEvent = await Event.create(event);
        return NextResponse.json({message: 'Successfully created event'}, {status: 401});

    }catch(err){
        console.log(err);
        return NextResponse.json({message: 'Event creation failed', error: err  instanceof Error ? err.message : "Unknown error"}, {status: 500});
    }
}