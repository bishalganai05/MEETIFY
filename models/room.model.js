// room has a 1 to N relationship with user
// here we are storing the email, which is unique
// and can be populated from the user model
const { model, Schema } = require("mongoose");

const roomSchema = new Schema(
  {
    roomID: {
      type: String,
    },
    admin: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
roomSchema.virtual("user", {
  ref: "User",
  localField: "admin",
  foreignField: "email",
  justOne: true,
});

module.exports = model("Room", roomSchema);
