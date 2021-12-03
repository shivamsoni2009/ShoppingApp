const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order found");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shipppingAddress,
      paymentMethod,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await Order.save()
    res.status(201).json(createOrder)
  }
});

module.exports = {addOrderItem}
