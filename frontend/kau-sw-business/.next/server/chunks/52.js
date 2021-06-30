exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 3052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_ContentFrame; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Layout.tsx + 2 modules
var Layout = __webpack_require__(4911);
// EXTERNAL MODULE: ./utils/MenuInterface.ts
var MenuInterface = __webpack_require__(6798);
;// CONCATENATED MODULE: ./components/LeftBox.tsx






const LeftBox = ({
  title,
  state,
  front
}) => {
  const subTitles = MenuInterface/* MenuItems */.s[state].subElements;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: front
      })
    }), subTitles.map((elem, idx) => title === elem.title ? /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      style: {
        background: '#262f41',
        color: 'white'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: elem.title
      })
    }, idx) : /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: elem.url,
        style: {
          color: 'black'
        },
        children: elem.title
      })
    }, idx))]
  });
};

const Container = external_styled_components_default().div.withConfig({
  displayName: "LeftBox__Container",
  componentId: "tyl7y2-0"
})(["width:15vw;min-width:200px;display:flex;flex-direction:column;@media screen and (max-width:1000px){display:none;}& > div:nth-of-type(1){background:#666666;height:100px;display:flex;align-items:center;padding-left:20px;& > span{color:white;font-size:24px;font-weight:300;}}"]);
const MenuItem = external_styled_components_default().div.withConfig({
  displayName: "LeftBox__MenuItem",
  componentId: "tyl7y2-1"
})(["border-bottom:1px solid #dfdfdf;height:50px;display:flex;justify-content:flex-start;padding-left:20px;align-items:center;& > a{text-decoration:none;font-size:18px;font-weight:300;}"]);
/* harmony default export */ var components_LeftBox = (LeftBox);
;// CONCATENATED MODULE: ./components/ContentFrame.tsx



 // components


 // data

 // interface

const ContentFrame = ({
  title,
  state,
  children
}) => {
  const front = MenuInterface/* MenuItems */.s[state].title;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FrontImage, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: front
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentFrame_Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_LeftBox, {
        front: front,
        title: title,
        state: state
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: title
        }), children]
      })]
    })]
  });
};

const ContentFrame_Container = external_styled_components_default().div.withConfig({
  displayName: "ContentFrame__Container",
  componentId: "sc-1nx390z-0"
})(["display:flex;justify-content:center;align-items:top;& > div:nth-of-type(2){padding-left:40px;padding-right:40px;width:55vw;min-width:800px;display:flex;flex-direction:column;margin-bottom:50px;& > div:nth-of-type(1){border-bottom:1px solid black;height:70px;font-size:24px;line-height:80px;margin-bottom:30px;}}"]);
const FrontImage = external_styled_components_default().div.withConfig({
  displayName: "ContentFrame__FrontImage",
  componentId: "sc-1nx390z-1"
})(["background:url(/img/banner.jpg);height:454px;display:flex;align-items:center;justify-content:center;& > span{color:white;font-size:50px;font-weight:300;letter-spacing:7px;}"]);
/* harmony default export */ var components_ContentFrame = (ContentFrame);

/***/ })

};
;