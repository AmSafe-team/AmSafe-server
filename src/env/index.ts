import dotenv from 'dotenv';

dotenv.config();

// server
export const PORT: Number = Number(process.env.PORT) || 80;
export const VERSION: string = process.env.VERSION || "";


// mysql 
export const DB_HOST: string = process.env.DB_HOST || "";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "";
export const DB_USERNAME: string = process.env.DB_USERNAME || "";
export const DB_DATABASE: string = process.env.DB_DATABASE || "";