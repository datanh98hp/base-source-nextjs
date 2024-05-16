import clientPromise from "@/lib/mongodb_client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        console.log({ email, password });
        const bcrypt = require("bcrypt");

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = await clientPromise;
        const db = client.db();

        const createAccount = await db
            .collection("users")
            .insertOne({ email: email, password: hashedPassword });

        return NextResponse.json({ message: 'Register successfully' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 500 });
    }
}