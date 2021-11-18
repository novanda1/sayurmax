"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfProduct = exports.OrderStatusCode = void 0;
var OrderStatusCode;
(function (OrderStatusCode) {
    OrderStatusCode["Cancelled"] = "Cancelled";
    OrderStatusCode["Completed"] = "Completed";
    OrderStatusCode["OnDelivery"] = "OnDelivery";
    OrderStatusCode["Progress"] = "Progress";
    OrderStatusCode["Unverified"] = "Unverified";
})(OrderStatusCode = exports.OrderStatusCode || (exports.OrderStatusCode = {}));
var TypeOfProduct;
(function (TypeOfProduct) {
    TypeOfProduct["CartProduct"] = "CART_PRODUCT";
    TypeOfProduct["Product"] = "PRODUCT";
})(TypeOfProduct = exports.TypeOfProduct || (exports.TypeOfProduct = {}));
