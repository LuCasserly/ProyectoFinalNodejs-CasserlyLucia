import * as ProductModel from "../models/products.model.js";

export const getAllProducts = async () => {
  return await ProductModel.getAllProducts();
};

export const getProductById = async (id) => {
  return await ProductModel.getProductById(id);
};

export const createProduct = async (newProduct) => {
  return await ProductModel.createProduct(newProduct);
};

export const updateProduct = async (id, updatedProductData) => {
  return await ProductModel.updateProduct(id, updatedProductData);
};

export const deleteProduct = async (id) => {
  return await ProductModel.deleteProduct(id);
};
