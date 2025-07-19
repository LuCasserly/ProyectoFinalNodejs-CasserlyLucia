import jwt from "jsonwebtoken";

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin" && password === "admin123") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }

  res.status(401).json({ error: "Credenciales inválidas" });
};
