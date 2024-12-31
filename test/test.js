import dotenv from "dotenv";
dotenv.config();

import { assert } from "chai";
import axios from "axios";

const urlEndpoint = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT;
const version = "v1";
let userToken = "";
let userID = "";

const getHeaders = (token) => ({
    "User-Agent": 'Aleho-Dev-Backend Test',
    "Authorization": `Bearer ${token}`
});

const handleError = (error) => {
    if (error.response) {
        assert.fail(`Request failed with status ${error.response.status}: ${error.response.data}`);
    } else {
        assert.fail(error.message);
    }
};

describe("Test Users", () => {
    it("Create new user", async () => {
        try {
            const newUser = {
                "name": "test",
                "email": "alejandro.r.abraham@gmail.com",
                "password": "Asdf1234",
                "image": `${urlEndpoint}/img/user.png`
            };
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/signin`, newUser);

            assert.equal(response.status, 201);
            assert.property(response.data, "token");
        } catch (error) {
            handleError(error);
        }
    });

    it("Login new user", async () => {
        try {
            const loginUser = {
                "email": "alejandro.r.abraham@gmail.com",
                "password": "Asdf1234"
            };
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/login`, loginUser);
            userToken = response.data.token;
            userID = response.data.user.id;

            assert.equal(response.status, 200);
            assert.property(response.data, "token");
        } catch (error) {
            handleError(error);
        }
    });

    it("Get list of users", async () => {
        try {
            const response = await axios.get(`${urlEndpoint}/api/${version}/users/list`, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 200);
        } catch (error) {
            handleError(error);
        }
    });

    it("Resend validation code", async () => {
        try {
            const idUser = { "id": userID };
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/activationCodeRequest`, idUser, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 200);
        } catch (error) {
            handleError(error);
        }
    });

    it("Delete new user", async () => {
        try {
            const deleteUser = { "id": userID };
            const response = await axios.delete(`${urlEndpoint}/api/${version}/users/delete`, {
                headers: getHeaders(userToken),
                data: deleteUser
            });

            assert.equal(response.status, 204);
        } catch (error) {
            handleError(error);
        }
    });
});