"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/address/[...slug]/route";
exports.ids = ["app/api/address/[...slug]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&page=%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddress%2F%5B...slug%5D%2Froute.js&appDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&page=%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddress%2F%5B...slug%5D%2Froute.js&appDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Boomz_OneDrive_Desktop_Work_papayond_main_src_app_api_address_slug_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/address/[...slug]/route.js */ \"(rsc)/./src/app/api/address/[...slug]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/address/[...slug]/route\",\n        pathname: \"/api/address/[...slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/address/[...slug]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Boomz\\\\OneDrive\\\\Desktop\\\\Work\\\\papayond-main\\\\src\\\\app\\\\api\\\\address\\\\[...slug]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Boomz_OneDrive_Desktop_Work_papayond_main_src_app_api_address_slug_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/address/[...slug]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjVfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZGRyZXNzJTJGJTVCLi4uc2x1ZyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRkcmVzcyUyRiU1Qi4uLnNsdWclNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZGRyZXNzJTJGJTVCLi4uc2x1ZyU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCb29teiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1dvcmslNUNwYXBheW9uZC1tYWluJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNCb29teiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1dvcmslNUNwYXBheW9uZC1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxRDtBQUNsSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvP2NjMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQm9vbXpcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxXb3JrXFxcXHBhcGF5b25kLW1haW5cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYWRkcmVzc1xcXFxbLi4uc2x1Z11cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkZHJlc3MvWy4uLnNsdWddL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRkcmVzcy9bLi4uc2x1Z11cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkZHJlc3MvWy4uLnNsdWddL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQm9vbXpcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxXb3JrXFxcXHBhcGF5b25kLW1haW5cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYWRkcmVzc1xcXFxbLi4uc2x1Z11cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkZHJlc3MvWy4uLnNsdWddL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&page=%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddress%2F%5B...slug%5D%2Froute.js&appDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/address/[...slug]/route.js":
/*!************************************************!*\
  !*** ./src/app/api/address/[...slug]/route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function GET(request, { params }) {\n    const { slug } = params;\n    const searchParams = request.nextUrl.searchParams;\n    const id = searchParams.get(\"id\");\n    try {\n        switch(slug[0]){\n            case \"provinces\":\n                const provinces = await prisma.province.findMany();\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(provinces);\n            case \"amphurs\":\n                if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Missing province ID\"\n                }, {\n                    status: 400\n                });\n                const amphurs = await prisma.amphur.findMany({\n                    where: {\n                        provinceId: parseInt(id)\n                    }\n                });\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(amphurs);\n            case \"districts\":\n                if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Missing amphur ID\"\n                }, {\n                    status: 400\n                });\n                const districts = await prisma.district.findMany({\n                    where: {\n                        amphurId: parseInt(id)\n                    }\n                });\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(districts);\n            case \"postcodes\":\n                if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Missing amphur ID\"\n                }, {\n                    status: 400\n                });\n                const postcodes = await prisma.amphurPostcode.findMany({\n                    where: {\n                        amphurId: parseInt(id)\n                    }\n                });\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(postcodes);\n            default:\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Invalid endpoint\"\n                }, {\n                    status: 400\n                });\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"เกิดข้อผิดพลาดในการดึงข้อมูล\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZGRyZXNzL1suLi5zbHVnXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRUc7QUFFN0MsTUFBTUUsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUUsSUFBSUMsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRDtJQUNqQixNQUFNRSxlQUFlSCxRQUFRSSxPQUFPLENBQUNELFlBQVk7SUFDakQsTUFBTUUsS0FBS0YsYUFBYUcsR0FBRyxDQUFDO0lBRTVCLElBQUk7UUFDRixPQUFRSixJQUFJLENBQUMsRUFBRTtZQUNiLEtBQUs7Z0JBQ0gsTUFBTUssWUFBWSxNQUFNVCxPQUFPVSxRQUFRLENBQUNDLFFBQVE7Z0JBRWhELE9BQU9iLHFEQUFZQSxDQUFDYyxJQUFJLENBQUNIO1lBRTNCLEtBQUs7Z0JBQ0gsSUFBSSxDQUFDRixJQUFJLE9BQU9ULHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXNCLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7Z0JBRWxGLE1BQU1DLFVBQVUsTUFBTWYsT0FBT2dCLE1BQU0sQ0FBQ0wsUUFBUSxDQUFDO29CQUMzQ00sT0FBTzt3QkFBRUMsWUFBWUMsU0FBU1o7b0JBQUk7Z0JBQ3BDO2dCQUVBLE9BQU9ULHFEQUFZQSxDQUFDYyxJQUFJLENBQUNHO1lBRTNCLEtBQUs7Z0JBQ0gsSUFBSSxDQUFDUixJQUFJLE9BQU9ULHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQW9CLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7Z0JBRWhGLE1BQU1NLFlBQVksTUFBTXBCLE9BQU9xQixRQUFRLENBQUNWLFFBQVEsQ0FBQztvQkFDL0NNLE9BQU87d0JBQUVLLFVBQVVILFNBQVNaO29CQUFJO2dCQUNsQztnQkFFQSxPQUFPVCxxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDUTtZQUUzQixLQUFLO2dCQUNILElBQUksQ0FBQ2IsSUFBSSxPQUFPVCxxREFBWUEsQ0FBQ2MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUFvQixHQUFHO29CQUFFQyxRQUFRO2dCQUFJO2dCQUVoRixNQUFNUyxZQUFZLE1BQU12QixPQUFPd0IsY0FBYyxDQUFDYixRQUFRLENBQUM7b0JBQ3JETSxPQUFPO3dCQUFFSyxVQUFVSCxTQUFTWjtvQkFBSTtnQkFDbEM7Z0JBRUEsT0FBT1QscURBQVlBLENBQUNjLElBQUksQ0FBQ1c7WUFFM0I7Z0JBQ0UsT0FBT3pCLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQW1CLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7UUFDMUU7SUFDRixFQUFFLE9BQU9ELE9BQU87UUFDZFksUUFBUVosS0FBSyxDQUFDLFVBQVVBO1FBRXhCLE9BQU9mLHFEQUFZQSxDQUFDYyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUErQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL3NyYy9hcHAvYXBpL2FkZHJlc3MvWy4uLnNsdWddL3JvdXRlLmpzPzE3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0LCB7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXNcbiAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpXG5cbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKHNsdWdbMF0pIHtcbiAgICAgIGNhc2UgJ3Byb3ZpbmNlcyc6XG4gICAgICAgIGNvbnN0IHByb3ZpbmNlcyA9IGF3YWl0IHByaXNtYS5wcm92aW5jZS5maW5kTWFueSgpXG5cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb3ZpbmNlcylcblxuICAgICAgY2FzZSAnYW1waHVycyc6XG4gICAgICAgIGlmICghaWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBwcm92aW5jZSBJRCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuXG4gICAgICAgIGNvbnN0IGFtcGh1cnMgPSBhd2FpdCBwcmlzbWEuYW1waHVyLmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBwcm92aW5jZUlkOiBwYXJzZUludChpZCkgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhbXBodXJzKVxuXG4gICAgICBjYXNlICdkaXN0cmljdHMnOlxuICAgICAgICBpZiAoIWlkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgYW1waHVyIElEJyB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgICAgICAgY29uc3QgZGlzdHJpY3RzID0gYXdhaXQgcHJpc21hLmRpc3RyaWN0LmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBhbXBodXJJZDogcGFyc2VJbnQoaWQpIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZGlzdHJpY3RzKVxuXG4gICAgICBjYXNlICdwb3N0Y29kZXMnOlxuICAgICAgICBpZiAoIWlkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgYW1waHVyIElEJyB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgICAgICAgY29uc3QgcG9zdGNvZGVzID0gYXdhaXQgcHJpc21hLmFtcGh1clBvc3Rjb2RlLmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZTogeyBhbXBodXJJZDogcGFyc2VJbnQoaWQpIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocG9zdGNvZGVzKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgZW5kcG9pbnQnIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ+C5gOC4geC4tOC4lOC4guC5ieC4reC4nOC4tOC4lOC4nuC4peC4suC4lOC5g+C4meC4geC4suC4o+C4lOC4tuC4h+C4guC5ieC4reC4oeC4ueC4pScgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsInNsdWciLCJzZWFyY2hQYXJhbXMiLCJuZXh0VXJsIiwiaWQiLCJnZXQiLCJwcm92aW5jZXMiLCJwcm92aW5jZSIsImZpbmRNYW55IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYW1waHVycyIsImFtcGh1ciIsIndoZXJlIiwicHJvdmluY2VJZCIsInBhcnNlSW50IiwiZGlzdHJpY3RzIiwiZGlzdHJpY3QiLCJhbXBodXJJZCIsInBvc3Rjb2RlcyIsImFtcGh1clBvc3Rjb2RlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/address/[...slug]/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&page=%2Fapi%2Faddress%2F%5B...slug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faddress%2F%5B...slug%5D%2Froute.js&appDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBoomz%5COneDrive%5CDesktop%5CWork%5Cpapayond-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();