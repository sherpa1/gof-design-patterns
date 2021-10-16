"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ViewDecorator {
    constructor(decoree) {
        this._decoree = decoree;
    }
    render() {
        throw new Error("Method not implemented.");
    }
}
exports.default = ViewDecorator;
//# sourceMappingURL=ViewDecorator.js.map