"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../config/api");
const axios_1 = require("axios");
exports.default = (queryType, id = -1) => __awaiter(this, void 0, void 0, function* () {
    const url = `${api_1.default.url}/${queryType}?${id >= 0 ? '' : `${id}`}`;
    try {
        let response = yield axios_1.default.get(url);
        if (response.status !== 200) {
            throw new Error('Invalid Response from remote server');
        }
        return response.data;
    }
    catch (ex) {
        if (!(process.env.NODE_ENV === 'test')) {
            console.log(ex.config);
        }
        return false;
    }
});
//# sourceMappingURL=api.js.map