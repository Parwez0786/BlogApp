import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories=await prisma.category.findMany();
     return new NextResponse(
       JSON.stringify(categories, { status: 200 })
     );

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({message:"SOMETHING WENT WRONG"}, {status:500}));
  }
};
