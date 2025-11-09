import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const pets = pgTable("pets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  petName: text("pet_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  address: text("address").notNull(),
  notes: text("notes"),
});

export const insertPetSchema = createInsertSchema(pets).omit({
  id: true,
});

export type InsertPet = z.infer<typeof insertPetSchema>;
export type Pet = typeof pets.$inferSelect;
