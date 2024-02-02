import { NextResponse } from "next/server";

// Gets invoked in every route
export function middleware(request) {
    // return Response.json({
    //     msg: "Hello there!",
    // });
    console.log("Hello There!!!!");
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/about/:path*"],
};
