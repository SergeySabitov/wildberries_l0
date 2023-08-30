/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _scripts_showItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/showItem */ \"./src/scripts/showItem.js\");\n/* harmony import */ var _images_items_photo1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/items/photo1.png */ \"./src/images/items/photo1.png\");\n\n\n\n\nconst CART_DATA = [{\n  id: 1,\n  name: 'Футболка UZcotton мужская',\n  price: {\n    before: 1051,\n    after: 522\n  },\n  left: 2,\n  color: 'белый',\n  size: '56',\n  stock: 'Коледино WB',\n  company: 'OOO Вайлдберриз',\n  path_to_img: 'images/items/photo1.png'\n}, {\n  id: 2,\n  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',\n  price: {\n    before: 2300047,\n    after: 2100047\n  },\n  left: null,\n  color: 'прозрачный',\n  size: null,\n  stock: 'Коледино WB',\n  company: 'OOO Мегапрофстиль',\n  path_to_img: 'images/items/photo2.png'\n}, {\n  id: 3,\n  name: 'Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные,Faber-Castell',\n  price: {\n    before: 950,\n    after: 494\n  },\n  left: 2,\n  color: null,\n  size: null,\n  stock: 'Коледино WB',\n  company: 'OOO Вайлдберриз',\n  path_to_img: 'images/items/photo3.png'\n}, {\n  id: 4,\n  name: 'Футболка UZcotton мужская',\n  price: {\n    before: null,\n    after: null\n  },\n  left: 0,\n  color: 'белый',\n  size: '56',\n  stock: null,\n  company: null,\n  path_to_img: 'images/items/photo1.png'\n}, {\n  id: 5,\n  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',\n  price: {\n    before: null,\n    after: null\n  },\n  left: 0,\n  color: 'прозрачный',\n  size: null,\n  stock: null,\n  company: null,\n  path_to_img: 'images/items/photo2.png'\n}, {\n  id: 6,\n  name: 'Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные,Faber-Castell',\n  price: {\n    before: null,\n    after: null\n  },\n  left: 0,\n  color: null,\n  size: null,\n  stock: null,\n  company: null,\n  path_to_img: 'images/items/photo3.png'\n}];\nconst showItems = data => {\n  data.map(el => {\n    (0,_scripts_showItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el);\n  });\n  return;\n};\nshowItems(CART_DATA);\n\n//# sourceURL=webpack://wb_l0/./src/index.js?");

/***/ }),

/***/ "./src/scripts/showItem.js":
/*!*********************************!*\
  !*** ./src/scripts/showItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showItem = item => {\n  const cartContainer = document.querySelector('.cart_items');\n  if (!cartContainer) {\n    console.error(\"Cart container not found.\");\n    return;\n  }\n  const cartItem = document.createElement('div');\n  cartItem.classList.add('cart_item');\n  cartItem.innerHTML = `<div class=\"cart_item\">\n    <div class=\"line\"></div>\n    <div class=\"cart_item_info left\">\n        <div class=\"check_photo\">\n            <span class=\"check_icon_container\">\n                <img src=\"images/icons/checkbox.svg\" alt=\"checkbox\" />\n            </span>\n            ${item.size ? `<span class=\"size_icon_container\">${item.size}</span>` : ''}\n                <img src=\"${item.path_to_img}\" class=\"item_image\"/>\n        </div>\n        <div class=\"item_info\">\n            <div class=\"prices_container_mobile\">\n                <div class=\"current_price_container\">\n                    <h4 class=\"current_price\">${item.price.after}</h4><span class=\"currency\">сом</span>\n                </div>\n                ${item.price.before ? `<span class=\"before_price\">${item.price.before} сом</span>` : ''}\n            </div>\n            <p>${item.name}</p>\n            ${item.color || item.size ? `<div class=\"characteristics\">\n                ${item.color ? `<span class=\"color\">Цвет: ${item.color}</span>` : ''}\n                ${item.size ? `<span class=\"size\">Размер: ${item.size}</span>` : ''}\n            </div>` : ''}\n            ${item.stock || item.company ? `<div class=\"other_info\">\n                ${item.stock ? `<span>${item.stock}</span>` : ''}\n                ${item.company ? `<span class=\"ooo\">\n                    <span>${item.company}</span>\n                    <img src=\"images/icons/info.svg\" alt=\"info\">\n                </span>` : ''}\n            </div>` : ''}\n        </div>\n    </div>\n    <div class=\"cart_item_info right\">\n        <div class=\"controls_container\">\n            <div class=\"quantity_container\">\n                <span class=\"decrease\" id='${item.id}_item_decrease'>\n                    <span>−</span>\n                </span>\n                <span class=\"quantity\" id='${item.id}_item_count'>5</span>\n                <span class=\"increase\" id='${item.id}_item_increase'>\n                    <span>+</span>\n                </span>\n            </div>\n            ${item.left ? `<span class=\"remaining\">Осталось ${item.left} шт.</span>` : ''}\n            <div class=\"controls_icons\">\n                <img src=\"images/icons/like.svg\" alt=\"like\"><img src=\"images/icons/delete.svg\" alt=\"delete\">\n            </div>\n        </div>\n        <div class=\"prices_container desktop_only\">\n            <div class=\"current_price_container\">\n                <span class=\"current_price\">${item.price.after}</span><span class=\"currency\">сом</span>\n            </div>\n            ${item.price.before ? `<span class=\"before_price\">${item.price.before} сом</span>` : ''}\n        </div>\n    </div>\n    </div>`;\n  cartContainer.appendChild(cartItem);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showItem);\n\n//# sourceURL=webpack://wb_l0/./src/scripts/showItem.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/SegoeUI-Bold.woff */ \"./src/fonts/SegoeUI-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/SegoeUI.woff */ \"./src/fonts/SegoeUI.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/SegoeUI-SemiBold.woff */ \"./src/fonts/SegoeUI-SemiBold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\nheader {\n  display: flex;\n}\n\n.header {\n  display: flex;\n  padding: 1rem 0.1875rem 1rem 1.5rem;\n  align-items: center;\n  gap: 2rem;\n  align-self: stretch;\n  flex: 1;\n}\n.header .menu {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header .menu .menu_icon_container {\n  display: flex;\n  padding: 0.75rem 0.625rem;\n  justify-content: center;\n  align-items: center;\n}\n.header .menu .menu_icon_container img {\n  width: 1.75rem;\n  height: 1.5rem;\n}\n.header .menu .site_name {\n  display: flex;\n  width: 6.625rem;\n  padding: 0.0625rem 0rem 0.4375rem 0rem;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.header .menu .site_name h2 {\n  color: white;\n  font-size: 1.75rem;\n  font-style: normal;\n  line-height: 1.5rem;\n  font-variant: all-small-caps;\n  letter-spacing: 0.15rem;\n  margin: 0;\n}\n.header .search_form {\n  display: flex;\n  align-content: center;\n  flex: 1;\n}\n.header .search_form input {\n  border: 0;\n  border-radius: 2.25rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding-left: 1.25rem;\n  padding-right: 3.25rem;\n  color: white;\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem; /* 133.333% */\n  outline: none;\n  height: 3rem;\n  flex: 1;\n}\n.header .search_form input::placeholder {\n  color: white;\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem; /* 133.333% */\n  opacity: 0.5;\n}\n.header .search_form .search_icon {\n  display: flex;\n  align-content: center;\n  position: relative;\n  right: 2.75rem;\n  z-index: 2;\n  width: 0;\n}\n.header .icons {\n  display: flex;\n  gap: 2.5rem;\n  align-content: center;\n  padding-right: 1rem;\n}\n.header .icons .icon_item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.38rem;\n  align-items: center;\n}\n.header .icons .icon_item img {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n}\n.header .icons .icon_item .icon_name {\n  font-size: 0.8125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem;\n}\n.header .icons .cart_icon {\n  position: relative;\n}\n.header .icons .cart_icon .items_count {\n  position: absolute;\n  right: 0.15rem;\n  top: -0.25rem;\n  text-align: center;\n  font-size: 0.625rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 0.95rem; /* 180% */\n  border-radius: 1rem;\n  background: #F55123;\n  width: 1rem;\n  height: 1rem;\n}\n\n.cart_item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  align-self: stretch;\n  color: black;\n}\n.cart_item .line {\n  display: none;\n}\n.cart_item .cart_item_info {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  align-self: stretch;\n}\n.cart_item .cart_item_info.left {\n  padding-top: 12px;\n  width: 24.8125rem;\n}\n.cart_item .cart_item_info.left .check_photo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cart_item .cart_item_info.left .check_photo .size_icon_container {\n  display: none;\n}\n.cart_item .cart_item_info.left .item_info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n  flex: 1 0 0;\n  align-self: stretch;\n}\n.cart_item .cart_item_info.left .item_info p {\n  margin: 0;\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem; /* 150% */\n}\n.cart_item .cart_item_info.left .item_info .characteristics {\n  font-size: 0.8125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem; /* 123.077% */\n}\n.cart_item .cart_item_info.left .item_info .other_info {\n  color: #A0A0A4;\n  font-size: 0.8125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem; /* 123.077% */\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.cart_item .cart_item_info.left .item_info .other_info .ooo {\n  display: flex;\n  align-items: center;\n  gap: 0.38rem;\n}\n.cart_item .cart_item_info.left .item_info .other_info .ooo img {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.cart_item .cart_item_info.right {\n  padding-top: 9px;\n}\n.cart_item .cart_item_info.right .controls_container {\n  display: flex;\n  padding-top: 3px;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n  align-self: stretch;\n}\n.cart_item .cart_item_info.right .controls_container .quantity_container {\n  width: 6.25rem;\n  height: 2.75rem;\n  border-radius: 0.5rem;\n  background-color: #FFF;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cart_item .cart_item_info.right .controls_container .quantity_container .decrease, .cart_item .cart_item_info.right .controls_container .quantity_container .increase {\n  text-align: center;\n  /* Сайт/Lead */\n  font-size: 1.25rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem; /* 120% */\n  letter-spacing: -0.0125rem;\n  display: flex;\n  width: 1.5rem;\n  padding: 0.125rem 0.4375rem 0.375rem 0.5rem;\n  justify-content: center;\n  align-items: center;\n}\n.cart_item .cart_item_info.right .controls_container .quantity_container .quantity {\n  position: relative;\n  bottom: 0.15rem;\n  text-align: center;\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5rem; /* 150% */\n}\n.cart_item .cart_item_info.right .controls_container .remaining {\n  color: #FF3B30;\n  font-size: 0.8125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem;\n}\n.cart_item .cart_item_info.right .controls_container .controls_icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.cart_item .prices_container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.3125rem;\n  flex: 1 0 0;\n  align-self: stretch;\n  width: 6.875rem;\n}\n.cart_item .prices_container .current_price_container {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n}\n.cart_item .prices_container .current_price_container .current_price {\n  text-align: right;\n  font-size: 1.25rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.75rem; /* 140% */\n  letter-spacing: -0.0125rem;\n}\n.cart_item .prices_container .current_price_container .currency {\n  text-align: right;\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.5rem; /* 150% */\n}\n.cart_item .prices_container .before_price {\n  color: #A0A0A4;\n  font-size: 0.8125rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem; /* 123.077% */\n  text-decoration: line-through;\n  border-bottom: 1px dashed #A0A0A4;\n}\n.cart_item .prices_container_mobile {\n  display: none;\n}\n\n@media screen and (max-width: 767px) {\n  .cart_item {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n    align-self: stretch;\n  }\n  .cart_item .line {\n    display: block;\n    width: 100%;\n    height: 0.0625rem;\n    background-color: black;\n    opacity: 0.1;\n  }\n  .cart_item .prices_container_mobile {\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    gap: 0.1rem;\n  }\n  .cart_item .prices_container_mobile .current_price_container {\n    display: flex;\n    align-items: baseline;\n    gap: 0.25rem;\n  }\n  .cart_item .prices_container_mobile .current_price_container .current_price {\n    font-size: 1rem;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.5rem;\n    margin: 0;\n  }\n  .cart_item .prices_container_mobile .current_price_container .currency {\n    font-size: 1rem;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.5rem; /* 150% */\n  }\n  .cart_item .prices_container_mobile .before_price {\n    color: #A0A0A4;\n    font-size: 0.8125rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1rem; /* 123.077% */\n    text-decoration: line-through;\n    border-bottom: 1px dashed #A0A0A4;\n  }\n  .cart_item .prices_container {\n    display: none;\n  }\n  .cart_item .cart_item_info.left {\n    padding-top: 0;\n  }\n  .cart_item .cart_item_info.left .check_photo {\n    position: relative;\n  }\n  .cart_item .cart_item_info.left .check_photo .check_icon_container {\n    position: absolute;\n    left: 0.25rem;\n    top: 0.25rem;\n  }\n  .cart_item .cart_item_info.left .check_photo .item_image {\n    width: 5rem;\n    height: 6.625rem;\n  }\n  .cart_item .cart_item_info.left .check_photo .size_icon_container {\n    position: absolute;\n    left: 0.25rem;\n    bottom: 0.25rem;\n    display: flex;\n    padding: 0rem 0.25rem 0.1875rem 0.25rem;\n    justify-content: center;\n    align-items: center;\n    background-color: #FFF;\n    border-radius: 0.375rem;\n    text-align: center;\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.25rem;\n  }\n  .cart_item .cart_item_info.left .item_info {\n    display: block;\n  }\n  .cart_item .cart_item_info.left .item_info .characteristics {\n    margin-top: 0.5rem;\n  }\n  .cart_item .cart_item_info.left .item_info .characteristics .size {\n    display: none;\n  }\n  .cart_item .cart_item_info.left .item_info p {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; /* Максимальное количество строк */\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-top: 0.3125rem;\n  }\n  .cart_item .cart_item_info.left .item_info .other_info {\n    margin-top: 0.5rem;\n  }\n  .cart_item .cart_item_info.left .item_info .other_info .ooo {\n    display: none;\n  }\n  .cart_item .cart_item_info.right {\n    padding-top: 0;\n  }\n  .cart_item .cart_item_info.right .controls_container {\n    padding-top: 0;\n    flex-direction: row;\n    align-items: center;\n    align-self: stretch;\n    justify-content: space-between;\n    width: 100%;\n  }\n  .cart_item .cart_item_info.right .controls_container .quantity_container {\n    width: auto;\n    height: auto;\n  }\n  .cart_item .cart_item_info.right .controls_container .quantity_container .decrease, .cart_item .cart_item_info.right .controls_container .quantity_container .increase {\n    width: min-content;\n  }\n  .cart_item .cart_item_info.right .controls_container .quantity_container .decrease {\n    padding: 0.16669rem 0.3125rem 0.5rem 0.625rem;\n  }\n  .cart_item .cart_item_info.right .controls_container .quantity_container .increase {\n    padding: 0.16669rem 0.5625rem 0.5rem 0.375rem;\n  }\n  .cart_item .cart_item_info.right .controls_container .quantity_container .quantity {\n    display: flex;\n    padding: 0.27081rem 0.25rem 0.47919rem 0.3125rem;\n    justify-content: center;\n    align-items: center;\n    flex: 1 0 0; /* 150% */\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    bottom: 0;\n  }\n  .cart_item .cart_item_info.right .controls_container .controls_icons {\n    gap: 0;\n  }\n  .cart_item .cart_item_info.right .controls_container .controls_icons img {\n    display: flex;\n    padding: 0.75rem;\n    justify-content: center;\n    align-items: center;\n  }\n}\nbody {\n  font-family: \"SegoeUI\";\n  background-color: #6725A8;\n  color: white;\n  padding: 0;\n  margin: 0;\n}\n\ninput[type=text]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=text]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button,\ninput::-webkit-search-results-button,\ninput::-webkit-search-results-decoration {\n  display: none;\n}\n\n.main {\n  display: flex;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-radius: 1.5rem;\n  background: #F6F6FA;\n  align-items: flex-start;\n  gap: 2rem;\n  align-self: stretch;\n}\n.main .cart_name {\n  color: black;\n  font-size: 1.75rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 2.25rem;\n  letter-spacing: -0.0175rem;\n  margin: 0;\n  margin-bottom: 1.6875rem;\n}\n\n.mobile_only {\n  display: none;\n}\n\n.desktop_only {\n  display: block;\n}\n\n@media (max-width: 767px) {\n  .mobile_only {\n    display: block;\n  }\n  .desktop_only {\n    display: none;\n  }\n}\n@font-face {\n  font-family: \"SegoeUI\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SegoeUI\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"SegoeUI\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wb_l0/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://wb_l0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://wb_l0/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://wb_l0/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/menu.svg */ \"./src/images/icons/menu.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/search.svg */ \"./src/images/icons/search.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/profile.svg */ \"./src/images/icons/profile.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/cart.svg */ \"./src/images/icons/cart.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/checkbox.svg */ \"./src/images/icons/checkbox.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/items/photo1.png */ \"./src/images/items/photo1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/info.svg */ \"./src/images/icons/info.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/like.svg */ \"./src/images/icons/like.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/delete.svg */ \"./src/images/icons/delete.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<!DOCTYPE html> <html> <head> <title>My First Web Page</title> </head> <body> <header> <div class=\\\"header\\\"> <span class=\\\"menu\\\"> <span class=\\\"menu_icon_container\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"menu-icon\\\"/> </span> <span class=\\\"site_name\\\"> <h2>товары и точка</h2> </span> </span> <form class=\\\"search_form\\\"> <input type=\\\"search\\\" placeholder=\\\"Я ищу...\\\"> <span class=\\\"search_icon\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"search\\\"/> </span> </form> <div class=\\\"icons\\\"> <span class=\\\"icon_item\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"profile icon\\\"> <span class=\\\"icon_name\\\">Профиль</span> </span> <div class=\\\"cart_icon\\\"> <span class=\\\"items_count\\\">1</span> <span class=\\\"icon_item\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"cart icon\\\"> <span class=\\\"icon_name\\\">Корзина</span> </span> </div> </div> </div> </header> <main class=\\\"main\\\"> <h1 class=\\\"cart_name\\\">Корзина</h1> <div class=\\\"cart_items\\\"> <div style=\\\"width:100vh\\\"> <div class=\\\"cart_item\\\"> <div class=\\\"cart_item_info left\\\"> <div class=\\\"check_photo\\\"> <span> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"checkbox\\\"/> </span> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"/> </div> <div class=\\\"item_info\\\"> <p>Футболка UZcotton мужская</p> <div class=\\\"characteristics\\\"> <span class=\\\"color\\\">Цвет: </span> <span class=\\\"Size\\\">Размер: </span> </div> <div class=\\\"other_info\\\"> <span>Коледино WB</span> <span class=\\\"ooo\\\"> <span>OOO Вайлдберриз</span> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"info\\\"> </span> </div> </div> </div> <div class=\\\"cart_item_info right\\\"> <div class=\\\"controls_container\\\"> <div class=\\\"quantity_container\\\"> <span class=\\\"decrease\\\">-</span> <span class=\\\"quantity\\\">5</span> <span class=\\\"increase\\\">+</span> </div> <span class=\\\"remaining\\\">Осталось 2 шт.</span> <div class=\\\"controls_icons\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"like\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"delete\\\"> </div> </div> <div class=\\\"prices_container\\\"> <div class=\\\"current_price_container\\\"> <span class=\\\"current_price\\\">555222</span><span class=\\\"currency\\\">сом</span> </div> <span class=\\\"before_price\\\">750 сом</span> </div> </div> </div> </div> <div class=\\\"cart_item\\\"> <div class=\\\"line\\\"></div> <div class=\\\"cart_item_info left\\\"> <div class=\\\"check_photo\\\"> <span class=\\\"check_icon_container\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"checkbox\\\"/> </span> <span class=\\\"size_icon_container\\\"> 56 </span> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" class=\\\"item_image\\\"/> </div> <div class=\\\"item_info\\\"> <div class=\\\"prices_container_mobile\\\"> <div class=\\\"current_price_container\\\"> <h4 class=\\\"current_price\\\">555</h4><span class=\\\"currency\\\">сом</span> </div> <span class=\\\"before_price\\\">750 сом</span> </div> <p>Футболка UZcotton мужская</p> <div class=\\\"characteristics\\\"> <span class=\\\"color\\\">Цвет: </span> <span class=\\\"size\\\">Размер: </span> </div> <div class=\\\"other_info\\\"> <span>Коледино WB</span> <span class=\\\"ooo\\\"> <span>OOO Вайлдберриз</span> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"info\\\"> </span> </div> </div> </div> <div class=\\\"cart_item_info right\\\"> <div class=\\\"controls_container\\\"> <div class=\\\"quantity_container\\\"> <span class=\\\"decrease\\\"> <span>−</span> </span> <span class=\\\"quantity\\\">5</span> <span class=\\\"increase\\\"> <span>+</span> </span> </div> <span class=\\\"remaining\\\">Осталось 2 шт.</span> <div class=\\\"controls_icons\\\"> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"like\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"delete\\\"> </div> </div> <div class=\\\"prices_container desktop_only\\\"> <div class=\\\"current_price_container\\\"> <span class=\\\"current_price\\\">555</span><span class=\\\"currency\\\">сом</span> </div> <span class=\\\"before_price\\\">750 сом</span> </div> </div> </div> </div> <div></div>  </main> <h1 class=\\\"mobile_only\\\">HELLO</h1> </body> </html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://wb_l0/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://wb_l0/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://wb_l0/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://wb_l0/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/SegoeUI-Bold.woff":
/*!*************************************!*\
  !*** ./src/fonts/SegoeUI-Bold.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/SegoeUI-Bold.woff\";\n\n//# sourceURL=webpack://wb_l0/./src/fonts/SegoeUI-Bold.woff?");

/***/ }),

/***/ "./src/fonts/SegoeUI-SemiBold.woff":
/*!*****************************************!*\
  !*** ./src/fonts/SegoeUI-SemiBold.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/SegoeUI-SemiBold.woff\";\n\n//# sourceURL=webpack://wb_l0/./src/fonts/SegoeUI-SemiBold.woff?");

/***/ }),

/***/ "./src/fonts/SegoeUI.woff":
/*!********************************!*\
  !*** ./src/fonts/SegoeUI.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/SegoeUI.woff\";\n\n//# sourceURL=webpack://wb_l0/./src/fonts/SegoeUI.woff?");

/***/ }),

/***/ "./src/images/icons/cart.svg":
/*!***********************************!*\
  !*** ./src/images/icons/cart.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d473ccc5b5fb90cb71b0.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/cart.svg?");

/***/ }),

/***/ "./src/images/icons/checkbox.svg":
/*!***************************************!*\
  !*** ./src/images/icons/checkbox.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13d9f28adfc8fbb1e9b1.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/checkbox.svg?");

/***/ }),

/***/ "./src/images/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/images/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"351209bc002f278bff73.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/delete.svg?");

/***/ }),

/***/ "./src/images/icons/info.svg":
/*!***********************************!*\
  !*** ./src/images/icons/info.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"168bc41e2350fcca5b9f.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/info.svg?");

/***/ }),

/***/ "./src/images/icons/like.svg":
/*!***********************************!*\
  !*** ./src/images/icons/like.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"897629f59a9237b46c33.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/like.svg?");

/***/ }),

/***/ "./src/images/icons/menu.svg":
/*!***********************************!*\
  !*** ./src/images/icons/menu.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84b42ddcb30dc470e89b.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/menu.svg?");

/***/ }),

/***/ "./src/images/icons/profile.svg":
/*!**************************************!*\
  !*** ./src/images/icons/profile.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0c58e6537178d281675.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/profile.svg?");

/***/ }),

/***/ "./src/images/icons/search.svg":
/*!*************************************!*\
  !*** ./src/images/icons/search.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"173796662bf1f50c62b4.svg\";\n\n//# sourceURL=webpack://wb_l0/./src/images/icons/search.svg?");

/***/ }),

/***/ "./src/images/items/photo1.png":
/*!*************************************!*\
  !*** ./src/images/items/photo1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"160f415d1c5aefb39096.png\";\n\n//# sourceURL=webpack://wb_l0/./src/images/items/photo1.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;