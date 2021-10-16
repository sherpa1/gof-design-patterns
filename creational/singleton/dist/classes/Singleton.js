"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    db_connect() {
        return "fake db connection";
    }
}
exports.default = Singleton;
//# sourceMappingURL=Singleton.js.map