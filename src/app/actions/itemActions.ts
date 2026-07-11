"use server";
import { revalidatePath } from "next/cache";
import clientPromise from "@/lib/mongodb"; 

export async function addItem(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const price = Number(formData.get("price"));

  try {
    const client = await clientPromise;
    const db = client.db("devstack"); 

    
    await db.collection("resources").insertOne({
      title,
      description,
      category,
      price,
      image: formData.get("image") as string,
      createdAt: new Date(),
    });

    console.log("Data inserted successfully!");

    revalidatePath("/explore");
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to save data");
  }
}