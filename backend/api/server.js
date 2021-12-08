const express = require("express");

const server = express();

const invoicesRouter = require("./invoices/invoices-router");
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");

server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/invoices", invoicesRouter);

server.get("/", (req, res) => {
  res.json({ message: "Api is working add a route to see more" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
