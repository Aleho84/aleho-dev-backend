import dotenv from "dotenv";
dotenv.config();

import { assert } from "chai";
import axios from "axios";

const urlEndpoint = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT;
const version = "v1";
let userToken = "";
let userID = "";

describe("Test endpoint", () => {
    it("Create new user", async () => {
        try {
            const newUser = {
                "name": "test",
                "email": "test@mail.com",
                "password": "Asdf1234",
                "image": `${urlEndpoint}/img/user.png`
            };
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/signin`, newUser);

            assert.equal(response.status, 201);
            assert.property(response.data, "token");
        } catch (error) {
            assert.fail(error.message);
        }
    });


    it("Login new user", async () => {
        try {
            const loginUser = {
                "email": "test@mail.com",
                "password": "Asdf1234"
            };
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/login`, loginUser);
            userToken = response.data.token;
            userID = response.data.user.id;

            assert.equal(response.status, 200);
            assert.property(response.data, "token");
        } catch (error) {
            assert.fail(error.message);
        }
    });

    it("Delete new user", async () => {
        try {
            const deleteUser = { "id": userID };
            const response = await axios.delete(`${urlEndpoint}/api/${version}/users/delete`, {
                headers: {
                    "User-Agent": 'Aleho-Dev-Backend Test',
                    "Authorization": `Bearer ${userToken}`
                },
                data: deleteUser
            });

            assert.equal(response.status, 200);
            assert.property(response.data, "message");
        } catch (error) {
            assert.fail(error.message);
        }
    });
});