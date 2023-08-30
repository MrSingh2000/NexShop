import jwt from "jsonwebtoken";

const verifyJwt = (handler) => (req, res) => {
  if (req.method == "POST" || req.method == "PUT") {
    // get the authToken from the header
    const token = req.headers.authtoken;
    if (!token) {
      return res.status(401).json({ error: "Invalid auth-token" });
    }
    try {
      // fetching data/user from token
      const data = jwt.verify(token, process.env.SECRET_KEY);
      req.user = data;
      handler(req, res);
    } catch (err) {
      res.status(401).send({ error: "Invalid auth-token" });
    }
  }
  else{
    handler(req,res);
  }
};

export default verifyJwt;
