"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = __importDefault(require("./classes/Singleton"));
function init() {
    const unique_instance = Singleton_1.default.getInstance();
    const same_instance = Singleton_1.default.getInstance();
    console.log(unique_instance === same_instance);
    console.log(same_instance.db_connect());
}
init();
//# sourceMappingURL=app.js.map