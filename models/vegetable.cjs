const { Schema, model } = require("mongoose");

const vegetableSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      default: "Tomato",
    },
    variety: {
      type: String,
      required: true,
      default: "Atomic Grape",
    },

    img: {
      type: String,
      required: true,
      default:
        "https://www.rareseeds.com/media/catalog/product/cache/c47cc5acc2b9ab2a357f100ee4780008/A/t/Atomic.jpg",
    },

    perSF: {
      type: Number,
      required: true,
      enum: ["1", "4", "9", "16"],
      default: "4",
    },

    seedStarted: {
      type: Date,
      default: Date.now(),
      required: true,
    },

    seedGerminated: {
      type: Date,
      // TODO: Can I just add the math here? Should I NOT require?
      // Look at Mongoose methods for Date.now()
      default: Date.now() + 7,
      // required: true,
    },

    daysToHarvest: {
      type: Number,
      default: 75,
      required: true,
    },

    link: {
      type: String,
      required: true,
      default: "https://www.rareseeds.com/tomato-brad-s-atomic-grape",
    },

    // ... all the things in your notes SEE BELOW
  },
  { timestamps: true }
);

module.exports = model("Vegetable", vegetableSchema);

/* 
type: "tomato",
variety: "atomic purple",
img: "imgURL",
perSF: "1", ENUM
seedStarted: "5/31/23", DATE
seedGerminated: "6/6/23", DATE
daysToHarvest: "75", NUMBER
link: "vegURL",

TODO: ? JOSH COMPANION PLANTS ?
TODO: ? SEASON ?
TODO: ? NOTES ?
*/

// FOR PLOT MODEL, LOOK AT itemSchema & Category in MERN boilerplate
