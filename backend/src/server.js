import express from "express";
import path from "path";
import { clerkMiddleware } from "@clerk/express";
// import { serve } from "inngest/express";
import cors from "cors";
import { ENV } from './config/env.js';

const app = express();

const __dirname = path.resolve();
app.use(express.json());
app.use(clerkMiddleware());  
app.use(cors({ origin: "*", credentials: true })); 

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}