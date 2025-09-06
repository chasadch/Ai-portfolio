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
exports.id = "app/api/github-stars/route";
exports.ids = ["app/api/github-stars/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_TECHNIFI_CascadeProjects_windsurf_project_Asad_src_app_api_github_stars_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/github-stars/route.ts */ \"(rsc)/./src/app/api/github-stars/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/github-stars/route\",\n        pathname: \"/api/github-stars\",\n        filename: \"route\",\n        bundlePath: \"app/api/github-stars/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\TECHNIFI\\\\CascadeProjects\\\\windsurf-project\\\\Asad\\\\src\\\\app\\\\api\\\\github-stars\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_TECHNIFI_CascadeProjects_windsurf_project_Asad_src_app_api_github_stars_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjNfQG9wZW50ZWxlbWV0cnkrX2I4NGQ5OGU3YjExY2M3ZjU4ZDA3ZmJlOGNkZmMyOWUwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYXBwLWxvYWRlci9pbmRleC5qcz9uYW1lPWFwcCUyRmFwaSUyRmdpdGh1Yi1zdGFycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2l0aHViLXN0YXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2l0aHViLXN0YXJzJTJGcm91dGUudHMmYXBwRGlyPUMlM0ElNUNVc2VycyU1Q1RFQ0hOSUZJJTVDQ2FzY2FkZVByb2plY3RzJTVDd2luZHN1cmYtcHJvamVjdCU1Q0FzYWQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1RFQ0hOSUZJJTVDQ2FzY2FkZVByb2plY3RzJTVDd2luZHN1cmYtcHJvamVjdCU1Q0FzYWQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxURUNITklGSVxcXFxDYXNjYWRlUHJvamVjdHNcXFxcd2luZHN1cmYtcHJvamVjdFxcXFxBc2FkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdpdGh1Yi1zdGFyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2l0aHViLXN0YXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2l0aHViLXN0YXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9naXRodWItc3RhcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxURUNITklGSVxcXFxDYXNjYWRlUHJvamVjdHNcXFxcd2luZHN1cmYtcHJvamVjdFxcXFxBc2FkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdpdGh1Yi1zdGFyc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/github-stars/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/github-stars/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(req) {\n    const token = process.env.GITHUB_TOKEN;\n    const headers = {\n        Accept: 'application/vnd.github+json'\n    };\n    if (token && token.trim().length > 0) {\n        headers.Authorization = `Bearer ${token}`;\n    }\n    try {\n        const res = await fetch('https://api.github.com/repos/yuvraj0412s/Yuvi_portfolio', {\n            headers,\n            // A small cache to reduce hitting the API on every request in dev\n            next: {\n                revalidate: 60\n            }\n        });\n        if (!res.ok) {\n            return Response.json({\n                error: 'Failed to fetch stars',\n                status: res.status\n            }, {\n                status: res.status\n            });\n        }\n        const data = await res.json();\n        return Response.json({\n            stars: data.stargazers_count ?? 0\n        });\n    } catch (err) {\n        return Response.json({\n            error: 'Unexpected error fetching stars'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9naXRodWItc3RhcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0lBQ3RDLE1BQU1DLFVBQWtDO1FBQ3RDQyxRQUFRO0lBQ1Y7SUFDQSxJQUFJTCxTQUFTQSxNQUFNTSxJQUFJLEdBQUdDLE1BQU0sR0FBRyxHQUFHO1FBQ3BDSCxRQUFRSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUVSLE9BQU87SUFDM0M7SUFFQSxJQUFJO1FBQ0YsTUFBTVMsTUFBTSxNQUFNQyxNQUNoQiwyREFDQTtZQUNFTjtZQUNBLGtFQUFrRTtZQUNsRU8sTUFBTTtnQkFBRUMsWUFBWTtZQUFHO1FBQ3pCO1FBR0YsSUFBSSxDQUFDSCxJQUFJSSxFQUFFLEVBQUU7WUFDWCxPQUFPQyxTQUFTQyxJQUFJLENBQ2xCO2dCQUFFQyxPQUFPO2dCQUF5QkMsUUFBUVIsSUFBSVEsTUFBTTtZQUFDLEdBQ3JEO2dCQUFFQSxRQUFRUixJQUFJUSxNQUFNO1lBQUM7UUFFekI7UUFFQSxNQUFNQyxPQUFPLE1BQU1ULElBQUlNLElBQUk7UUFDM0IsT0FBT0QsU0FBU0MsSUFBSSxDQUFDO1lBQUVJLE9BQU9ELEtBQUtFLGdCQUFnQixJQUFJO1FBQUU7SUFDM0QsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBT1AsU0FBU0MsSUFBSSxDQUNsQjtZQUFFQyxPQUFPO1FBQWtDLEdBQzNDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFRFQ0hOSUZJXFxDYXNjYWRlUHJvamVjdHNcXHdpbmRzdXJmLXByb2plY3RcXEFzYWRcXHNyY1xcYXBwXFxhcGlcXGdpdGh1Yi1zdGFyc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU47XG4gIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uJyxcbiAgfTtcbiAgaWYgKHRva2VuICYmIHRva2VuLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MveXV2cmFqMDQxMnMvWXV2aV9wb3J0Zm9saW8nLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAvLyBBIHNtYWxsIGNhY2hlIHRvIHJlZHVjZSBoaXR0aW5nIHRoZSBBUEkgb24gZXZlcnkgcmVxdWVzdCBpbiBkZXZcbiAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiA2MCB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggc3RhcnMnLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSxcbiAgICAgICAgeyBzdGF0dXM6IHJlcy5zdGF0dXMgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IHN0YXJzOiBkYXRhLnN0YXJnYXplcnNfY291bnQgPz8gMCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnVW5leHBlY3RlZCBlcnJvciBmZXRjaGluZyBzdGFycycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiR0VUIiwicmVxIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX1RPS0VOIiwiaGVhZGVycyIsIkFjY2VwdCIsInRyaW0iLCJsZW5ndGgiLCJBdXRob3JpemF0aW9uIiwicmVzIiwiZmV0Y2giLCJuZXh0IiwicmV2YWxpZGF0ZSIsIm9rIiwiUmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwic3RhcnMiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZXJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/github-stars/route.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0","vendor-chunks/@opentelemetry+api@1.9.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.3_@opentelemetry+_b84d98e7b11cc7f58d07fbe8cdfc29e0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgithub-stars%2Froute&page=%2Fapi%2Fgithub-stars%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgithub-stars%2Froute.ts&appDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTECHNIFI%5CCascadeProjects%5Cwindsurf-project%5CAsad&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();