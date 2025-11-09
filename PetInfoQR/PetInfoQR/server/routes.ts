import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPetSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/pets", async (req, res) => {
    try {
      const validatedData = insertPetSchema.parse(req.body);
      const pet = await storage.createPet(validatedData);
      res.json(pet);
    } catch (error) {
      console.error("Error creating pet:", error);
      res.status(400).json({ error: "Invalid pet data" });
    }
  });

  app.get("/api/pets/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const pet = await storage.getPet(id);
      
      if (!pet) {
        res.status(404).json({ error: "Pet not found" });
        return;
      }
      
      res.json(pet);
    } catch (error) {
      console.error("Error fetching pet:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
