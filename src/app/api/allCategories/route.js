import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
 // Adjust the import according to your project's structure

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
   
    const category = searchParams.get("category");
    //console.log("-",category);
    const posts = await prisma.post.findMany({
      where: {
        catSlug: category,
      }
    });

    
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SOMETHING WENT WRONG" }),
      { status: 500 }
    );
  }
};
