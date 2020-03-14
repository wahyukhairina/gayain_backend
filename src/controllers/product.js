const productModel = require('../models/product');
const miscHelper = require('../helpers');
const { IP, port } = require('../configs');
const uuidv4 = require('uuid/v4');

module.exports = {
  getAll: async (request, response) => {
    try {
      const category = request.query.category || '';
      const searchName = request.query.name || '';
      const sortBy = request.query.sortBy || 'id';
      const limit = request.query.limit || 9999;
      const page = request.query.page || '1';

      const result = await productModel.getAll(
        searchName,
        sortBy,
        limit,
        page,
        category
      );
      //  const tData = await productModel.getAll(searchName, 'id', 1000, 1, category)
      //  const tPage = Math.ceil(tData.length / limit)
      //  console.log(tPage, tData)
      miscHelper.response(response, 200, result);
    } catch (error) {
      //  console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Not Found!');
    }
  },
  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId;
      const result = await productModel.getDetail(productId);
      miscHelper.response(response, 200, result);
    } catch (error) {
      miscHelper.customErrorResult(response, 404, 'Internal Server Error!');
    }
  },
  inputProduct: async (request, response) => {
    try {
      const id = uuidv4();
      const { name, category, price, stock } = request.body;
      const data = {
        id,
        name,
        image: `${IP}:${port}/upload/${request.file.filename}`,
        category,
        stock,
        price,
        created: new Date(),
        updated: new Date(),
      };
      const result = await productModel.inputProduct(data);
      miscHelper.response(response, 200, data);
      console.log(request.file);
    } catch (error) {
      // console.log(request.files)
      console.log(error);
      miscHelper.customErrorResponse(response, 404, 'Internal Server Error!');
    }
  },
};
