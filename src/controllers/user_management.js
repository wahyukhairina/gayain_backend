const userModel = require('../models/user_management');
const helper = require('../helpers');
const JWT = require('jsonwebtoken');
const miscHelper = require('../helpers');
const { JWT_KEY } = require('../configs');
const { IP, port } = require('../configs');
const uuidv4 = require('uuid/v4');
module.exports = {
  getUser: async (request, response) => {
    try {
      const name = request.query.name || "";
      const result = await userModel.getUser(name);
      miscHelper.response(response, 200, result);
    } catch (error) {
      miscHelper.customErrorResponse(response, 404, "user not found");
    }
  },
  updateData: async (request, response) => {
    try {
      const userId = request.params.userId;
      // const salt = helper.generateSalt(18);

      // const hashPassword = helper.setPassword(request.body.password, salt);
      if(!request.file || Object.keys(request.file).length === 0){
        const data = {
          // name: request.body.name,
          image: `${IP}:${port}/upload/navy-jeans.jpg`,
          // email: request.body.email,
          // username: request.body.username,
          // password: hashPassword.passwordHash,
          // alamat: request.body.alamat,
          // provinsi: request.body.provinsi,
          // kota: request.body.kota,
          // salt: hashPassword.salt,
          // status: request.body.status || '2',
          updated: new Date(),
        };
        const result = await userModel.updateData(data, userId);
        const newData ={
          ...data,
          id:userId
        }
        miscHelper.response(response, 200, newData);
      }
console.log('foto',request.file.fileName)
      const data = {
        // name: request.body.name,
        image: `${IP}:${port}/upload/${request.file.fileName}`,
        // email: request.body.email,
        // username: request.body.username,
        // password: hashPassword.passwordHash,
        // alamat: request.body.alamat,
        // provinsi: request.body.provinsi,
        // kota: request.body.kota,
        // salt: hashPassword.salt,
        // status: request.body.status || '2',
        updated: new Date(),
      };
      console.log (image)
      const result = await userModel.updateData(data, userId);
      const newData ={
        ...data,
        id:userId}
      miscHelper.response(response, 200,newData);
    } catch (error) {
      miscHelper.customErrorResponse(response, 400, "Fail update user");
    }
  },
  deleteData: async (request, response) => {
    try {
      const userId = request.params.userId;
      const result = await userModel.deleteData(userId);
      const deleteUser = {
        id: userId
      }
      miscHelper.response(response, 200, deleteUser);
    } catch (error) {
      miscHelper.customErrorResponse(response, 400, "Fail delete");
    }
  },
  register: async (request, response) => {
    try {
      const id = uuidv4();
      const salt = helper.generateSalt(18);
      const hashPassword = helper.setPassword(request.body.password, salt);
      
      if(!request.file || Object.keys(request.file).length === 0){
       
        const data = {
        name: request.body.name,
        image: `${IP}:${port}/upload/navy-jeans.jpg`,
        email: request.body.email,
        username: request.body.username,
        password: hashPassword.passwordHash,
        salt: hashPassword.salt,
        status: request.body.status || "2",
        created: new Date(),
        updated: new Date()
      };
      console.log(data)
      const result = await userModel.register(data);
      miscHelper.response(response, 200, data);
    } const data = {
      name: request.body.name,
      image: `${IP}:${port}/upload/${request.file.fileName}`,
      email: request.body.email,
      username: request.body.username,
      password: hashPassword.passwordHash,
      alamat: request.body.alamat,
      provinsi: request.body.provinsi,
      kota: request.body.kota,
      salt: hashPassword.salt,
      status: request.body.status || '2',
      created: new Date(),
      updated: new Date(),
    };
    const result = await userModel.register(data);
    miscHelper.response(response, 200, data);

    } catch (error) {
      miscHelper.customErrorResponse(
        response,
        400,
        "Register fail user has been added"
      );
    }
  },
  login: async (request, response) => {
    const data = {
      password: request.body.password,
      email: request.body.email
    };

    const emailValid = await userModel.checkEmail(data.email);
    const dataUser = emailValid[0];
    const hashPassword = helper.setPassword(data.password, dataUser.salt);

    if (hashPassword.passwordHash === dataUser.password) {
      const token = JWT.sign(
        {
          email: dataUser.email,
          id: dataUser.id
        },
        JWT_KEY,
        { expiresIn: "9h" }
      );

      delete dataUser.salt;
      delete dataUser.password;

      dataUser.token = token;

      response.json(dataUser);
    } else {
      miscHelper.customErrorResponse(response, 400, "Fail login", error);
    }
  }
};
