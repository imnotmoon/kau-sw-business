exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 4911:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/MenuInterface.ts
var MenuInterface = __webpack_require__(6798);
;// CONCATENATED MODULE: ./components/Menu.tsx









const Menu = () => {
  const detailMenuRef = (0,external_react_.useRef)();
  const {
    0: isShown,
    1: setIsShown
  } = (0,external_react_.useState)('사업단 소개');
  (0,external_react_.useEffect)(() => {
    return () => {
      document.getElementById('detail-menu').style.height = '0px';
    };
  }, []);

  const onLogoClick = () => {
    location.href = '/';
  };

  const onMenuFocused = event => {
    setIsShown(event.currentTarget.innerText.trim());

    if (detailMenuRef) {
      detailMenuRef.current.style.visibility = 'visible';
      detailMenuRef.current.style.height = '200px';
    }
  };

  const onMenuBlured = () => {
    detailMenuRef.current.style.visibility = 'hidden';
    detailMenuRef.current.style.height = '0px';
  };

  const buildDetailMenu = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: MenuInterface/* MenuItems.map */.s.map((item, idx) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: MenuInterface/* MenuItems */.s[idx].title === isShown ? {
            background: 'rgba(0,0,0,0.4)'
          } : {},
          children: item.subElements.map((e, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: e.url,
                children: e.title
              })
            }, i);
          })
        }, idx);
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/logo_01.png",
          alt: "logo",
          width: "205",
          height: "36",
          onClick: onLogoClick
        }), /*#__PURE__*/jsx_runtime_.jsx(MenuEntry, {
          children: MenuInterface/* MenuItems.map */.s.map((item, idx) => {
            return /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
              onMouseEnter: onMenuFocused,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: MenuInterface/* MenuItems */.s[idx].url,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: item.title
                })
              })
            }, idx);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/img/menu_more.png",
            alt: "",
            width: "40",
            height: "40",
            id: "detail-menu",
            onMouseLeave: onMenuBlured
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(DetailMenu, {
      ref: detailMenuRef,
      onMouseLeave: onMenuBlured,
      id: "detail-menu",
      children: buildDetailMenu()
    })]
  });
};

const Container = external_styled_components_default().div.withConfig({
  displayName: "Menu__Container",
  componentId: "sc-9r1vgo-0"
})(["background:#262f41;display:flex;justify-content:center;& > div{width:80vw;height:80px;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:1000px){width:90vw;}& > div > div > img{@media screen and (max-width:1000px){width:170px;height:30px;}}}"]);
const MenuEntry = external_styled_components_default().div.withConfig({
  displayName: "Menu__MenuEntry",
  componentId: "sc-9r1vgo-1"
})(["display:grid;grid-template-columns:repeat(", ",150px);width:70%;height:100%;justify-items:center;justify-content:end;& > div{width:100%;&:hover{padding-top:24px;border-top:3px solid white;}}@media screen and (max-width:1000px){display:none;}"], MenuInterface/* MenuItems.length */.s.length);
const MenuItem = external_styled_components_default().div.withConfig({
  displayName: "Menu__MenuItem",
  componentId: "sc-9r1vgo-2"
})(["text-align:center;padding-top:27px;& > a{color:white;text-decoration:none;&:active{color:#e2e2e2;}}"]);
const DetailMenu = external_styled_components_default().div.withConfig({
  displayName: "Menu__DetailMenu",
  componentId: "sc-9r1vgo-3"
})(["background:rgba(0,0,0,0.3);position:absolute;top:80px;transition:all 0.1s ease;visibility:hidden;width:100vw;&:hover{transition:all 0.1s ease;}& > div{display:grid;grid-template-columns:repeat(", ",150px);height:200px;justify-content:end;margin-right:10vw;& > div{display:grid;height:100%;width:", "vw;width:150px;align-items:center;}& > div > div{padding-top:7px;margin-bottom:7px;display:flex;justify-content:center;text-align:center;&:hover{& > a{color:white;}}& > a{text-decoration:none;color:#aaa;}}}"], MenuInterface/* MenuItems.length */.s.length, 80 * 0.7);
const Button = external_styled_components_default().div.withConfig({
  displayName: "Menu__Button",
  componentId: "sc-9r1vgo-4"
})(["color:white;padding:12px 5px 5px 5px;filter:invert(100%);@media screen and (min-width:1000px){display:none;}&:active{filter:invert(70%);}"]);
/* harmony default export */ var components_Menu = (Menu);
;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(InfoZone, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: ['(10540) 경기도 고양시 덕양구 항공대학로 76', /*#__PURE__*/jsx_runtime_.jsx("br", {}), 'TEL - (02) 300-0114  FAX - (02) 3158-5769 E-mail - webmaster@kau.ac.kr', /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), 'COPYRIGHT 2012 Korea Aerospace University. All right reserved.']
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NewLink, {})]
  });
}
const Footer_Container = external_styled_components_default().div.withConfig({
  displayName: "Footer__Container",
  componentId: "u68pnv-0"
})(["height:157px;background:#1e1e1e;"]);
const InfoZone = external_styled_components_default().div.withConfig({
  displayName: "Footer__InfoZone",
  componentId: "u68pnv-1"
})(["padding-top:40px;display:flex;justify-content:flex-start;align-items:center;& > div{margin-left:10vw;color:white;font-weight:400;font-size:15px;@media screen and (max-width:768px){font-size:13px;padding-left:30px;margin-right:15px;}}& > div:nth-of-type(2){border:1px solid white;padding:8px 20px 8px 20px;cursor:pointer;@media screen and (max-width:768px){min-width:80px;font-size:13px;margin-right:30px;}}"]);
const NewLink = external_styled_components_default().div.withConfig({
  displayName: "Footer__NewLink",
  componentId: "u68pnv-2"
})(["display:flex;justify-content:space-around;align-items:center;"]);
;// CONCATENATED MODULE: ./components/Layout.tsx





// components



const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: '한국항공대학교 SW중심사업단'
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap);"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Menu, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

const Layout_Container = external_styled_components_default().div.withConfig({
  displayName: "Layout__Container",
  componentId: "jbj1sg-0"
})(["margin:0;"]); // const Header = styled.div`
//   background: #252525;
//   display: flex;
//   justify-content: center;
//   height: 30px;
//   & > nav {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     width: 80vw;
//     & > a {
//       display: block;
//       color: #cdcdcd;
//       text-decoration: none;
//       font-size: 13px;
//     }
//     & > span {
//       color: #cdcdcd;
//       padding: 0 10px 0 10px;
//     }
//   }
// `;

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 6798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ MenuItems; }
/* harmony export */ });
const MenuItems = [{
  title: '사업단 소개',
  url: '/introduce/greeting',
  subElements: [{
    title: '인삿말',
    url: '/introduce/greeting'
  }, {
    title: '사업목표',
    url: '/introduce/business_model'
  }, {
    title: '조직구성',
    url: '/introduce/organization'
  }, {
    title: 'contact',
    url: '/introduce/contact'
  }]
}, {
  title: 'SW전공교육',
  url: '/major_education/introduce',
  subElements: [{
    title: '캘린더',
    url: '/major_education/calendar'
  }, {
    title: '소개',
    url: '/major_education/introduce'
  }, {
    title: '오픈소스',
    url: '/major_education/open_source'
  }, {
    title: '마일리지',
    url: '/major_education/mileage'
  }, {
    title: '비교과',
    url: '/major_education/non_discipline'
  }]
}, {
  title: '산학협력',
  url: '/collab_industry/introduce',
  subElements: [{
    title: '캘린더',
    url: '/collab_industry/calendar'
  }, {
    title: '소개',
    url: '/collab_industry/introduce'
  }, {
    title: '산학프로젝트',
    url: '/collab_industry/project'
  }, {
    title: '인턴십',
    url: '/collab_industry/internship'
  }, {
    title: '글로벌',
    url: '/collab_industry/global'
  }]
}, {
  title: 'SW기초·융합교육',
  url: '/basic_education/introduce',
  subElements: [{
    title: '캘린더',
    url: '/basic_education/calendar'
  }, {
    title: '소개',
    url: '/basic_education/introduce'
  }, {
    title: '입학전 교육',
    url: '/basic_education/before_entrance'
  }, {
    title: '기초교양교육',
    url: '/basic_education/electives'
  }, {
    title: '융합전공',
    url: '/basic_education/additive_major'
  }]
}, {
  title: 'SW가치확산',
  url: '/influences/introduce',
  subElements: [{
    title: '캘린더',
    url: '/influences/calendar'
  }, {
    title: '소개',
    url: '/influences/introduce'
  }, {
    title: '초중고',
    url: '/influences/juniors'
  }, {
    title: 'SW행사(교내)',
    url: '/influences/events'
  }]
}];

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;