import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: [
      {
        type: new Schema(
          {
            addressName: String,
            postalCode: String,
            address1: String,
            address2: String,
          },
          {
            _id: false,
          }
        ),
        required: false,
      },
    ],
    role: {
      type: String,
      required: false,
      default: "user",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
