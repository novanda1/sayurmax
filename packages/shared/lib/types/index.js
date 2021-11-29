"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrdersQuery = exports.OrdersDocument = exports.useHelloQuery = exports.HelloDocument = exports.useShopperLoginMutation = exports.ShopperLoginDocument = exports.useChangeOrderStatusMutation = exports.ChangeOrderStatusDocument = exports.OrdersResponseFragmentDoc = exports.OrderFragmentDoc = exports.UserFragmentDoc = exports.UserAddressFragmentDoc = exports.ItemFragmentDoc = exports.ProductFragmentDoc = exports.CategoryFragmentDoc = exports.TypeOfProduct = exports.OrderStatusCode = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var Urql = __importStar(require("urql"));
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
exports.CategoryFragmentDoc = (0, graphql_tag_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment Category on CategoryType {\n  __typename\n  id\n  slug\n  title\n}\n    "], ["\n    fragment Category on CategoryType {\n  __typename\n  id\n  slug\n  title\n}\n    "])));
exports.ProductFragmentDoc = (0, graphql_tag_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment Product on ProductType {\n  __typename\n  id\n  title\n  slug\n  categories {\n    ...Category\n  }\n  imageUrl\n  normalPrice\n  dicountPrice\n  itemUnit\n  information\n  nutrition\n  howToKeep\n}\n    ", ""], ["\n    fragment Product on ProductType {\n  __typename\n  id\n  title\n  slug\n  categories {\n    ...Category\n  }\n  imageUrl\n  normalPrice\n  dicountPrice\n  itemUnit\n  information\n  nutrition\n  howToKeep\n}\n    ", ""])), exports.CategoryFragmentDoc);
exports.ItemFragmentDoc = (0, graphql_tag_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    fragment Item on OrderItem {\n  __typename\n  id\n  atPrice\n  qty\n  product {\n    ...Product\n  }\n}\n    ", ""], ["\n    fragment Item on OrderItem {\n  __typename\n  id\n  atPrice\n  qty\n  product {\n    ...Product\n  }\n}\n    ", ""])), exports.ProductFragmentDoc);
exports.UserAddressFragmentDoc = (0, graphql_tag_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    fragment UserAddress on UserAddress {\n  __typename\n  id\n  name\n  recipient\n  phone\n  city\n  postalCode\n  address\n  detail\n}\n    "], ["\n    fragment UserAddress on UserAddress {\n  __typename\n  id\n  name\n  recipient\n  phone\n  city\n  postalCode\n  address\n  detail\n}\n    "])));
exports.UserFragmentDoc = (0, graphql_tag_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    fragment User on UserType {\n  __typename\n  id\n  displayName\n  phone\n  createdAt\n  updatedAt\n}\n    "], ["\n    fragment User on UserType {\n  __typename\n  id\n  displayName\n  phone\n  createdAt\n  updatedAt\n}\n    "])));
exports.OrderFragmentDoc = (0, graphql_tag_1.default)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    fragment Order on Order {\n  __typename\n  id\n  status\n  total\n  updatedAt\n  createdAt\n  items {\n    ...Item\n  }\n  address {\n    ...UserAddress\n  }\n  user {\n    ...User\n  }\n}\n    ", "\n", "\n", ""], ["\n    fragment Order on Order {\n  __typename\n  id\n  status\n  total\n  updatedAt\n  createdAt\n  items {\n    ...Item\n  }\n  address {\n    ...UserAddress\n  }\n  user {\n    ...User\n  }\n}\n    ", "\n", "\n", ""])), exports.ItemFragmentDoc, exports.UserAddressFragmentDoc, exports.UserFragmentDoc);
exports.OrdersResponseFragmentDoc = (0, graphql_tag_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    fragment OrdersResponse on OrderResponse {\n  __typename\n  hasNext\n  nextCursor\n  result {\n    ...Order\n  }\n}\n    ", ""], ["\n    fragment OrdersResponse on OrderResponse {\n  __typename\n  hasNext\n  nextCursor\n  result {\n    ...Order\n  }\n}\n    ", ""])), exports.OrderFragmentDoc);
exports.ChangeOrderStatusDocument = (0, graphql_tag_1.default)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    mutation ChangeOrderStatus($shopperChangeOrderStatusCodeId: String!, $status: OrderStatusCode!) {\n  shopperChangeOrderStatusCode(\n    id: $shopperChangeOrderStatusCodeId\n    status: $status\n  )\n}\n    "], ["\n    mutation ChangeOrderStatus($shopperChangeOrderStatusCodeId: String!, $status: OrderStatusCode!) {\n  shopperChangeOrderStatusCode(\n    id: $shopperChangeOrderStatusCodeId\n    status: $status\n  )\n}\n    "])));
function useChangeOrderStatusMutation() {
    return Urql.useMutation(exports.ChangeOrderStatusDocument);
}
exports.useChangeOrderStatusMutation = useChangeOrderStatusMutation;
;
exports.ShopperLoginDocument = (0, graphql_tag_1.default)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    mutation shopperLogin($username: String!, $password: String!) {\n  shopperLogin(username: $username, password: $password) {\n    shopper {\n      username\n      email\n      firstName\n      lastName\n    }\n    token\n  }\n}\n    "], ["\n    mutation shopperLogin($username: String!, $password: String!) {\n  shopperLogin(username: $username, password: $password) {\n    shopper {\n      username\n      email\n      firstName\n      lastName\n    }\n    token\n  }\n}\n    "])));
function useShopperLoginMutation() {
    return Urql.useMutation(exports.ShopperLoginDocument);
}
exports.useShopperLoginMutation = useShopperLoginMutation;
;
exports.HelloDocument = (0, graphql_tag_1.default)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query Hello {\n  hello\n}\n    "], ["\n    query Hello {\n  hello\n}\n    "])));
function useHelloQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: exports.HelloDocument }, options));
}
exports.useHelloQuery = useHelloQuery;
;
exports.OrdersDocument = (0, graphql_tag_1.default)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query Orders($status: OrderStatusCode!, $limit: Int!, $after: String, $date: OrderDate) {\n  orders(status: $status, limit: $limit, after: $after, date: $date) {\n    ...OrdersResponse\n  }\n}\n    ", ""], ["\n    query Orders($status: OrderStatusCode!, $limit: Int!, $after: String, $date: OrderDate) {\n  orders(status: $status, limit: $limit, after: $after, date: $date) {\n    ...OrdersResponse\n  }\n}\n    ", ""])), exports.OrdersResponseFragmentDoc);
function useOrdersQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: exports.OrdersDocument }, options));
}
exports.useOrdersQuery = useOrdersQuery;
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
