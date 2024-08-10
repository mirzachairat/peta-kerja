import connectMongoDB from "@app/db/db";
import { NextResponse } from "next/server";
import Service from "@app/models/service";

export async function POST(request){
    const {
        cat_layer,
        layer_name,
        share,
        aplikasi,
        platform_layer,
        layer_type,
        analisa_function,
        url_cat,
        proxy,
        option_opacity} = await request.json();
        await connectMongoDB();
        await Service.create({
            cat_layer,
        layer_name,
        share,
        aplikasi,
        platform_layer,
        layer_type,
        analisa_function,
        url_cat,proxy,
        option_opacity
        });
        return NextResponse.json({message:"Service Created"},{status:200});
}


export async function GET(req, res)
{
    await connectMongoDB();
    const result = await Service.find();
    return NextResponse.json(result);
}