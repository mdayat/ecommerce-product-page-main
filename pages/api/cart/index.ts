import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

import { CartProductData } from "@interfaces";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = "app/data/cart.json";

  if (req.method === "GET") {
    const cartProductData = require("app/data/cart.json");
    res.status(200).json(cartProductData);
  }

  if (req.method === "POST") {
    const {
      id,
      productTitle,
      productPrice,
      productOrderQuantity,
    }: CartProductData = req.body;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf-8");
    }

    const cartProducts: CartProductData[] = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    );
    const cartProductsLength = cartProducts.length;
    let latestProductOrderQuantity = 0;

    for (let i = 0; i < cartProductsLength; i++) {
      if (cartProducts[i].id === id) {
        latestProductOrderQuantity = cartProducts[i].productOrderQuantity!;
        cartProducts.splice(i, 1);
      }
    }

    const newestProductOrderQuantity =
      latestProductOrderQuantity + productOrderQuantity!;

    cartProducts.push({
      id,
      productTitle,
      productPrice,
      productOrderQuantity: newestProductOrderQuantity,
    });

    fs.writeFileSync(filePath, JSON.stringify(cartProducts));
    res.status(201).json({ message: "Data Has Been Added" });
  }

  if (req.method === "DELETE") {
    const { id }: CartProductData = req.body;

    const cartProducts: CartProductData[] = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    );
    const cartProductsLength = cartProducts.length;

    for (let i = 0; i < cartProductsLength; i++) {
      if (cartProducts[i].id === id) {
        cartProducts.splice(i, 1);
      }
    }

    cartProducts.push();

    fs.writeFileSync(filePath, JSON.stringify(cartProducts));
    res.status(200).json({ message: "Data Has Been Deleted" });
  }
};

export default handler;
