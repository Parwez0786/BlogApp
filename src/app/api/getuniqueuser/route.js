import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
//GET UNIQUE USER  WITH EMAIL
export const GET = async (req) => {
   const { searchParams } = new URL(req.url);
   const email = searchParams.get("email");
  try {
    const user = await prisma.user.findUnique({
      where: { email:email },
    });

     if (user) {
       return NextResponse.json(user, { status: 200 });
     } else {
       return NextResponse.json({ message: "User not found" }, { status: 404 });
     }

  
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "SOMETHING WENT WRONG" }, { status: 500 })
    );
  }
};
