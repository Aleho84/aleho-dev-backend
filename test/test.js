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
    it("Create user test", async () => {
        try {
            const newUser = {
                "name": "test",
                "email": "alehodev@gmail.com",
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

    it("Login user test", async () => {
        try {
            const loginUser = {
                "email": "alehodev@gmail.com",
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

    it("Modify user test", async () => {
        try {
            const UserModify = {
                "account": {
                    "confirmed": true,
                    "admin": true
                }
            };
            const response = await axios.put(`${urlEndpoint}/api/${version}/users/${userID}`, UserModify, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 200);
            assert.property(response.data, "name");
            assert.property(response.data, "email");
            assert.property(response.data, "password");
            assert.property(response.data, "image");
            assert.property(response.data, "account");
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
            const response = await axios.post(`${urlEndpoint}/api/${version}/users/${userID}/activation-code`, {}, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 200);
            assert.property(response.data, "code");
        } catch (error) {
            handleError(error);
        }
    });
});

describe("Test Server", () => {
    it("Get systemInfo", async () => {
        try {
            const response = await axios.get(`${urlEndpoint}/api/${version}/server/systemInfo`, {
                headers: getHeaders(userToken)
            });
            assert.equal(response.status, 200);
            assert.property(response.data, "totalMemory");
            assert.property(response.data, "freeMemory");
            assert.property(response.data, "uptime");
            assert.property(response.data, "cpu");
        } catch (error) {
            handleError(error);
        }
    });

    it("Get systemProcess", async () => {
        try {
            const response = await axios.get(`${urlEndpoint}/api/${version}/server/systemProcess`, {
                headers: getHeaders(userToken)
            });
            assert.equal(response.status, 200);
            assert.property(response.data, "process_1");
        } catch (error) {
            handleError(error);
        }
    });

    it("Get isOnline", async () => {
        try {
            const parms = {
                "ip": "127.0.0.1",
                "port": "80",
            };
            const response = await axios.post(`${urlEndpoint}/api/${version}/server/isOnline`, parms, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 200);
            assert.property(response.data, "status");
            assert.property(response.data, "message");
        } catch (error) {
            handleError(error);
        }
    });
});

describe("Finish Test", () => {
    it("Delete user test", async () => {
        try {
            const response = await axios.delete(`${urlEndpoint}/api/${version}/users/${userID}`, {
                headers: getHeaders(userToken)
            });

            assert.equal(response.status, 204);
        } catch (error) {
            handleError(error);
        }
    });
});