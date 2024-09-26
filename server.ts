import express from "express";
import { add } from "./calculator";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/calculate", (req: any, res: any) => {
  try {
    const result = add(req.body.numbers);
    res.json({ message: `Result: ${result}` });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Unknown error occurred" });
    }
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
