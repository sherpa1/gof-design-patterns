"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewDecorator_1 = __importDefault(require("./ViewDecorator"));
class HTMLRenderable extends ViewDecorator_1.default {
    render() {
        return `<p>${this._decoree.render()}</p>`;
    }
}
exports.default = HTMLRenderable;
//# sourceMappingURL=HTMLRenderable.js.map