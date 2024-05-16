import { authOptions } from "@/lib/authOptions";
import clientPromise from "@/lib/mongodb_client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
    const {email,newEmail} = request.json();
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({
                error: "Unauthorized",
                status: 400,
            });
        }
        const client = await clientPromise;
        const db = client.db();
        const doesUserExist = await db
            .collection("users")
           .findOne({ email: email });

        if (!doesUserExist) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        const updateEmail = await db
            .collection("users")
            .updateOne(
                { email: email },
                { $set: { email: newEmail } }
            );
        return NextResponse.json({ message: 'Update successfully' }, { status: 200 });
    } catch (error) {
        
    }
}