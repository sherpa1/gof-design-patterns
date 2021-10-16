"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewDecorator_1 = __importDefault(require("./ViewDecorator"));
class JSONRenderable extends ViewDecorator_1.default {
    render() {
        return `{
        "message":"${this._decoree.render()}"
    }`;
    }
}
exports.default = JSONRenderable;
//# sourceMappingURL=JSONRenderable.js.map