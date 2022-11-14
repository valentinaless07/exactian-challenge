import mongoose from "mongoose";
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  entryDate: {
    type: String,
    default: null,
  },
  workLogs: {
    type: [
      {
        entryDate: {type: String, required: true}, 
        exitDate: {type: String, required: true}, 
        hoursWorked: {type: Number, required: true}
      }
    ]
  }
});

export const Employee = model("employee", employeeSchema);
