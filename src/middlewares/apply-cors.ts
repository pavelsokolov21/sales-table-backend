import { Express } from "express";
import cors from "cors";

export const applyCors = (app: Express) => {
  const whitelist: string[] = ["http://localhost:3000"];
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) {
          return callback(null, true);
        }

        if (!whitelist.includes(origin)) {
          const msg =
            "The CORS policy for this site does not allow access from the specified Origin.";

          return callback(new Error(msg), false);
        }

        return callback(null, true);
      },
    })
  );
};
