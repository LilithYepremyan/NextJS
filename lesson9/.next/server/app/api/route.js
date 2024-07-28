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
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("better-sqlite3");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_user_Desktop_Next_Lessons_lesson9_src_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/route.ts */ \"(rsc)/./src/app/api/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\user\\\\Desktop\\\\Next_Lessons\\\\lesson9\\\\src\\\\app\\\\api\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_user_Desktop_Next_Lessons_lesson9_src_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1c2VyJTVDRGVza3RvcCU1Q05leHRfTGVzc29ucyU1Q2xlc3NvbjklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3VzZXIlNUNEZXNrdG9wJTVDTmV4dF9MZXNzb25zJTVDbGVzc29uOSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXByb2plY3QvP2YwYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXE5leHRfTGVzc29uc1xcXFxsZXNzb245XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRGVza3RvcFxcXFxOZXh0X0xlc3NvbnNcXFxcbGVzc29uOVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/route.ts":
/*!******************************!*\
  !*** ./src/app/api/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/api */ \"(rsc)/./src/app/lib/api.ts\");\n\nfunction GET(req) {\n    const users = (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)();\n    return Response.json({\n        users\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUVqQyxTQUFTQyxJQUFJQyxHQUFXO0lBQzNCLE1BQU1DLFFBQVFILHFEQUFXQTtJQUN6QixPQUFPSSxTQUFTQyxJQUFJLENBQUM7UUFBQ0Y7SUFBSztBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtcHJvamVjdC8uL3NyYy9hcHAvYXBpL3JvdXRlLnRzP2U2NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsVXNlcnMgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBHRVQocmVxOlJlcXVlc3Qpe1xuICAgIGNvbnN0IHVzZXJzID0gZ2V0QWxsVXNlcnMoKVxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHt1c2Vyc30pXG59XG5cbiJdLCJuYW1lcyI6WyJnZXRBbGxVc2VycyIsIkdFVCIsInJlcSIsInVzZXJzIiwiUmVzcG9uc2UiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/api.ts":
/*!****************************!*\
  !*** ./src/app/lib/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: () => (/* binding */ addUser),\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getUserByLogin: () => (/* binding */ getUserByLogin)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authDB = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())(\"auth.db\");\nconst addUser = (user)=>{\n    return authDB.prepare(`\n                INSERT INTO users(id, name, surname, login, password)\n                VALUES(@id, @name, @surname, @login, @password)\n            `).run(user);\n};\nconst getAllUsers = ()=>{\n    return authDB.prepare(\"SELECT * FROM users\").all();\n};\nconst getUserByLogin = (login)=>{\n    const result = authDB.prepare(\"SELECT * FROM users WHERE login =?\").get(login);\n    if (result) {\n        return result;\n    }\n    return null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUM7QUFFckMsTUFBTUMsU0FBUyxJQUFJRCx1REFBUUEsQ0FBQztBQUVyQixNQUFNRSxVQUFVLENBQUNDO0lBQ3BCLE9BQU9GLE9BQ0ZHLE9BQU8sQ0FBQyxDQUFDOzs7WUFHTixDQUFDLEVBQUVDLEdBQUcsQ0FBQ0Y7QUFDbkIsRUFBQztBQUVNLE1BQU1HLGNBQWM7SUFDdkIsT0FBT0wsT0FBT0csT0FBTyxDQUFDLHVCQUF1QkcsR0FBRztBQUNwRCxFQUFDO0FBRU0sTUFBTUMsaUJBQWlCLENBQUNDO0lBQzNCLE1BQU1DLFNBQVNULE9BQ1ZHLE9BQU8sQ0FBQyxzQ0FDUk8sR0FBRyxDQUFDRjtJQUNULElBQUlDLFFBQVE7UUFDUixPQUFPQTtJQUNYO0lBQ0EsT0FBTztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXByb2plY3QvLi9zcmMvYXBwL2xpYi9hcGkudHM/NDUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVXNlciwgT3B0aW9uYWxVc2VyIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBEYXRhYmFzZSBmcm9tICdiZXR0ZXItc3FsaXRlMydcblxuY29uc3QgYXV0aERCID0gbmV3IERhdGFiYXNlKFwiYXV0aC5kYlwiKVxuXG5leHBvcnQgY29uc3QgYWRkVXNlciA9ICh1c2VyOiBPcHRpb25hbFVzZXIpOiBEYXRhYmFzZS5SdW5SZXN1bHQgPT4ge1xuICAgIHJldHVybiBhdXRoREJcbiAgICAgICAgLnByZXBhcmUoYFxuICAgICAgICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJzKGlkLCBuYW1lLCBzdXJuYW1lLCBsb2dpbiwgcGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgVkFMVUVTKEBpZCwgQG5hbWUsIEBzdXJuYW1lLCBAbG9naW4sIEBwYXNzd29yZClcbiAgICAgICAgICAgIGApLnJ1bih1c2VyKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnMgPSAoKTogSVVzZXJbXSA9PiB7XG4gICAgcmV0dXJuIGF1dGhEQi5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB1c2Vyc1wiKS5hbGwoKSBhcyBJVXNlcltdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlMb2dpbiA9IChsb2dpbjogc3RyaW5nKTogSVVzZXIgfCBudWxsID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhdXRoREJcbiAgICAgICAgLnByZXBhcmUoXCJTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGxvZ2luID0/XCIpXG4gICAgICAgIC5nZXQobG9naW4pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0IGFzIElVc2VyXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59Il0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiYXV0aERCIiwiYWRkVXNlciIsInVzZXIiLCJwcmVwYXJlIiwicnVuIiwiZ2V0QWxsVXNlcnMiLCJhbGwiLCJnZXRVc2VyQnlMb2dpbiIsImxvZ2luIiwicmVzdWx0IiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/api.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cuser%5CDesktop%5CNext_Lessons%5Clesson9&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();