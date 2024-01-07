// we need to implemented different of documentation because we need to get the session through the server not via a client-side component. 
import { authOptions } from "@/app/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }