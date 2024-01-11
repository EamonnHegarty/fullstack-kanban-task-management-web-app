import bcrypt from "bcryptjs";

const users = [
  {
    name: "Eamonn",
    email: "eamonn@email.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "John",
    email: "john@email.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
