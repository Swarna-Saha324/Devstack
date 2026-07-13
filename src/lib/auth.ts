import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
const db = client.db("devstack");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  baseURL: process.env.BETTER_AUTH_URL, 
  trustedOrigins: [
        "https://my-devstack-hub.vercel.app" // আপনার বর্তমান লাইভ ডোমেইনটি এখানে দিন
    ],
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});