import { NextApiHandler } from "next";

const a: NextApiHandler = (req, res) => {
  console.log(req.foo);
};
