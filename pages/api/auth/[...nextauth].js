import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from "../../../lib/prismadb"

import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from '../../../lib/mongodb';

console.log("googleprovider : "+GoogleProvider);
console.log("emailprovider : "+EmailProvider);

export default NextAuth.default({
    // adapter: PrismaAdapter(prisma),
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'test_next_prisma_mongodb'
    }),
    providers: [
        // GoogleProvider.default({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        EmailProvider.default({
            server:process.env.MAIL_SERVER,
            from:process.env.MAIL_FROM
        }),
    ]
})