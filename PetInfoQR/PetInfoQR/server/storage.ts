import { db } from "./db";
import { pets, type Pet, type InsertPet } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPet(id: string): Promise<Pet | undefined>;
  createPet(pet: InsertPet): Promise<Pet>;
}

export class DbStorage implements IStorage {
  async getPet(id: string): Promise<Pet | undefined> {
    const result = await db.select().from(pets).where(eq(pets.id, id));
    return result[0];
  }

  async createPet(insertPet: InsertPet): Promise<Pet> {
    const result = await db.insert(pets).values(insertPet).returning();
    return result[0];
  }
}

export const storage = new DbStorage();
