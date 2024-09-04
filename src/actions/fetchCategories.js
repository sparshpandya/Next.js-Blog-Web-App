"use server";
import clientPromise from "@/db/db";

export async function fetchCategories() {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const categories = await db.collection("Categories");

    if (categories) {
        // returning all the posts from db
        const allCategories = await categories.find({}).toArray();
        return allCategories;
    } else {
        return "No Categories For Now, Check Again Later!!";
    }
}

export async function fetchCategoryById(categoryId) {
    const client = await clientPromise;
    const db = await client.db("Techfacts_Db");
    const categories = await db.collection("Categories");

    if (categories) {
        // returning a single post by its id
        const selectedCategory = await categories.findOne({ id: categoryId });
        
        return selectedCategory.name;
    } else {
        return "Category Not Found!";
    }
}