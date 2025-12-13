const { PrismaClient } = require("@prisma/client");

// Check if it actually exists
if (!PrismaClient) {
  throw new Error("PrismaClient is not exported correctly from ../generated");
}

const prisma = new PrismaClient();

module.exports = prisma;