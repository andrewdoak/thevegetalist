// USERS MODEL
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;
// 6 is a reasonable value. Slow, but safe.
// More NOT better

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

// HASH PASSWORD (Middleware) see notes below
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = model("User", userSchema);

/* 
WE NEED cjs

// Josh DESTRUCTURED
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// to
// const { Schema, model } = require("mongoose");

SCHEMA
Name, email, and password

EMAIL
lowercase: converts string to lowercase
trim: validator checks for space after or before (not in the middle)
unique: no double email sign-ups
minimum length is 3 chars for password

REMEMBER
Don't add properties willy nilly. Because it will make the JWT big.
We don't want that, also it's just best practice to keep models lean.
Like tweets. They have a property that is assigned to the user.

TO JSON
This deletes the password that is sent after it's encoded in the JWT
doc is the user document
ret returns the user data minus the password
Hover over the transform: function to visualize this

toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },

The transform function takes two arguments: the raw MongoDB document (doc) and the returned object (ret)

HASHING PASSWORD
To validate, we compare the hashes 
Never send clear text
Validates every time it's sent

// HASH PASSWORD (Middleware)
userSchema.pre("save", async function (next) {
  // 'this' is the user DOC (ABOVE)
  if (!this.isModified("password")) return next();
  // UPDATE the password with the computed hash
  // IF not modified, return next (reassign password, bcrypt method)
  // Using SALT_ROUNDS IN bcrypt package (require above)
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

bcrypt is an npm library to help hash passwords
*/
