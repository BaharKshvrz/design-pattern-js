"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserInfo_name, _UserInfo_email, _UserInfo_age, _UserInfoBuilder_name, _UserInfoBuilder_age, _UserInfoBuilder_email;
class UserInfo {
    constructor(builder) {
        _UserInfo_name.set(this, void 0);
        _UserInfo_email.set(this, void 0);
        _UserInfo_age.set(this, void 0);
        __classPrivateFieldSet(this, _UserInfo_name, builder.getName(), "f");
        __classPrivateFieldSet(this, _UserInfo_email, builder.getEmail(), "f");
        __classPrivateFieldSet(this, _UserInfo_age, builder.getAge(), "f");
    }
}
_UserInfo_name = new WeakMap(), _UserInfo_email = new WeakMap(), _UserInfo_age = new WeakMap();
class UserInfoBuilder {
    constructor() {
        _UserInfoBuilder_name.set(this, void 0);
        _UserInfoBuilder_age.set(this, void 0);
        _UserInfoBuilder_email.set(this, void 0);
        __classPrivateFieldSet(this, _UserInfoBuilder_age, 0, "f");
        __classPrivateFieldSet(this, _UserInfoBuilder_email, '', "f");
        __classPrivateFieldSet(this, _UserInfoBuilder_name, '', "f");
    }
    setName(name) {
        __classPrivateFieldSet(this, _UserInfoBuilder_name, name, "f");
        return this;
    }
    setAge(age) {
        __classPrivateFieldSet(this, _UserInfoBuilder_age, age, "f");
        return this;
    }
    setEmail(email) {
        __classPrivateFieldSet(this, _UserInfoBuilder_email, email, "f");
        return this;
    }
    getName() {
        return __classPrivateFieldGet(this, _UserInfoBuilder_name, "f");
    }
    getEmail() {
        return __classPrivateFieldGet(this, _UserInfoBuilder_email, "f");
    }
    getAge() {
        return __classPrivateFieldGet(this, _UserInfoBuilder_age, "f");
    }
    build() {
        return new UserInfo(this);
    }
}
_UserInfoBuilder_name = new WeakMap(), _UserInfoBuilder_age = new WeakMap(), _UserInfoBuilder_email = new WeakMap();
const user = new UserInfoBuilder().setAge(30).setName("Bob").setEmail("bobross@gmail.com");
console.log(user.getName());
console.log(user.getAge());
console.log(user.getEmail());
