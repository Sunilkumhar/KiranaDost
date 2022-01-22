const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salesSchema = new Schema(
  {
    curr_day: {
      type: String,
      required: [true, "Date for the sales"],
      trim: true,
    },
    curr_month: {
      type: String,
      required: [true, "Date for the sales"],
      trim: true,
    },
    curr_year: {
      type: String,
      required: [true, "Date for the sales"],
      trim: true,
    },
    today_sale: {
      type: Number,
      required: [true, "Todays Sales required"],
      trim: true,
    },
    today_profit: {
      type: Number,
      required: [true, "Todays Profit required"],
      trim: true,
    },
    month_sale: {
      type: Number,
      required: [true, "Months Sales required"],
      trim: true,
    },
    month_profit: {
      type: Number,
      required: [true, "Months Profit required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
