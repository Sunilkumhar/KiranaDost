const Sales = require("../models/sales.js");
const Owner = require("../models/owner");

exports.addsales = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  let Obj = JSON.parse(JSON.stringify(req.body));
  new_sales = new Sales(Obj);
  user.sales.push(new_sales);
  user.save();
  res.send(user);
};

exports.allsales = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });

  res.send(user.sales);
};
exports.getonesales = async (req, res) => {
  let user = await Owner.findOne({ _id: req.params.o_id });
  if (!user) return res.status(400).json({ message: "User does not exit" });
  let salesObj = {
    curr_day: req.body.curr_day,
    curr_month: req.body.curr_month,
    curr_year: req.body.curr_year,
    today_sale: 0,
    today_profit: 0,
    month_sale: 0,
    month_profit: 0,
  };
  user.sales.forEach((item) => {
    if (
      item.curr_month == req.body.curr_month &&
      item.curr_year == req.body.curr_year
    ) {
      salesObj.month_sale += item.month_sale;
      salesObj.month_profit += item.month_profit;
    }
  });
  user.sales.forEach((item) => {
    if (
      item.curr_day == req.body.curr_day &&
      item.curr_month == req.body.curr_month &&
      item.curr_year == req.body.curr_year
    ) {
      salesObj.today_sale += item.today_sale;
      salesObj.today_profit += item.today_profit;
    }
  });

  res.send(salesObj);
};
