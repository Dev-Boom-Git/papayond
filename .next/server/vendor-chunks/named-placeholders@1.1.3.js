"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/named-placeholders@1.1.3";
exports.ids = ["vendor-chunks/named-placeholders@1.1.3"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/named-placeholders@1.1.3/node_modules/named-placeholders/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/named-placeholders@1.1.3/node_modules/named-placeholders/index.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// based on code from Brian White @mscdex mariasql library - https://github.com/mscdex/node-mariasql/blob/master/lib/Client.js#L272-L332\n// License: https://github.com/mscdex/node-mariasql/blob/master/LICENSE\n\nconst RE_PARAM = /(?:\\?)|(?::(\\d+|(?:[a-zA-Z][a-zA-Z0-9_]*)))/g,\nDQUOTE = 34,\nSQUOTE = 39,\nBSLASH = 92;\n\nfunction parse(query) {\n  let ppos = RE_PARAM.exec(query);\n  let curpos = 0;\n  let start = 0;\n  let end;\n  const parts = [];\n  let inQuote = false;\n  let escape = false;\n  let qchr;\n  const tokens = [];\n  let qcnt = 0;\n  let lastTokenEndPos = 0;\n  let i;\n\n  if (ppos) {\n    do {\n      for (i=curpos,end=ppos.index; i<end; ++i) {\n        let chr = query.charCodeAt(i);\n        if (chr === BSLASH)\n        escape = !escape;\n        else {\n          if (escape) {\n            escape = false;\n            continue;\n          }\n          if (inQuote && chr === qchr) {\n            if (query.charCodeAt(i + 1) === qchr) {\n              // quote escaped via \"\" or ''\n              ++i;\n              continue;\n            }\n            inQuote = false;\n          } else if (chr === DQUOTE || chr === SQUOTE) {\n            inQuote = true;\n            qchr = chr;\n          }\n        }\n      }\n      if (!inQuote) {\n        parts.push(query.substring(start, end));\n        tokens.push(ppos[0].length === 1 ? qcnt++ : ppos[1]);\n        start = end + ppos[0].length;\n        lastTokenEndPos = start;\n      }\n      curpos = end + ppos[0].length;\n    } while (ppos = RE_PARAM.exec(query));\n\n    if (tokens.length) {\n      if (curpos < query.length) {\n        parts.push(query.substring(lastTokenEndPos));\n      }\n      return [parts, tokens];\n    }\n  }\n  return [query];\n};\n\nfunction createCompiler(config) {\n  if (!config)\n  config = {};\n  if (!config.placeholder) {\n    config.placeholder = '?';\n  }\n  let ncache = 100;\n  let cache;\n  if (typeof config.cache === 'number') {\n    ncache = config.cache;\n  }\n  if (typeof config.cache === 'object') {\n    cache = config.cache;\n  }\n  if (config.cache !== false && !cache) {\n    cache = new (__webpack_require__(/*! lru-cache */ \"(rsc)/./node_modules/.pnpm/lru-cache@7.18.3/node_modules/lru-cache/index.js\"))({ max: ncache });\n  }\n\n  function toArrayParams(tree, params) {\n    const arr = [];\n    if (tree.length == 1) {\n      return [tree[0], []];\n    }\n\n    if (typeof params == 'undefined')\n      throw new Error('Named query contains placeholders, but parameters object is undefined');\n\n    const tokens = tree[1];\n    for (let i=0; i < tokens.length; ++i) {\n      arr.push(params[tokens[i]]);\n    }\n    return [tree[0], arr];\n  }\n\n  function noTailingSemicolon(s) {\n    if (s.slice(-1) == ':') {\n      return s.slice(0, -1);\n    }\n    return s;\n  }\n\n  function join(tree) {\n    if (tree.length == 1) {\n      return tree;\n    }\n\n    let unnamed = noTailingSemicolon(tree[0][0]);\n    for (let i=1; i < tree[0].length; ++i) {\n      if (tree[0][i-1].slice(-1) == ':') {\n        unnamed += config.placeholder;\n      }\n      unnamed += config.placeholder;\n      unnamed += noTailingSemicolon(tree[0][i]);\n    }\n\n    const last = tree[0][tree[0].length -1];\n    if (tree[0].length == tree[1].length) {\n      if (last.slice(-1) == ':') {\n        unnamed += config.placeholder;\n      }\n      unnamed += config.placeholder;\n    }\n    return [unnamed, tree[1]];\n  }\n\n  function compile(query, paramsObj) {\n    let tree;\n    if (cache && (tree = cache.get(query))) {\n      return toArrayParams(tree, paramsObj)\n    }\n    tree = join(parse(query));\n    if(cache) {\n      cache.set(query, tree);\n    }\n    return toArrayParams(tree, paramsObj);\n  }\n\n  compile.parse = parse;\n  return compile;\n}\n\n// named :one :two to postgres-style numbered $1 $2 $3\nfunction toNumbered(q, params) {\n  const tree = parse(q);\n  const paramsArr = [];\n  if (tree.length == 1) {\n    return [tree[0], paramsArr];\n  }\n\n  const pIndexes = {};\n  let pLastIndex = 0;\n  let qs = '';\n  let varIndex;\n  const varNames = [];\n  for (let i=0; i < tree[0].length; ++i) {\n    varIndex = pIndexes[tree[1][i]];\n    if (!varIndex) {\n      varIndex = ++pLastIndex;\n      pIndexes[tree[1][i]] = varIndex;\n    }\n    if (tree[1][i]) {\n      varNames[varIndex - 1] = tree[1][i];\n      qs += tree[0][i] + '$' + varIndex;\n    } else {\n      qs += tree[0][i];\n    }\n  }\n  return [qs, varNames.map(n => params[n])];\n}\n\nmodule.exports = createCompiler;\nmodule.exports.toNumbered = toNumbered;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmFtZWQtcGxhY2Vob2xkZXJzQDEuMS4zL25vZGVfbW9kdWxlcy9uYW1lZC1wbGFjZWhvbGRlcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDhGQUFXLEtBQUssYUFBYTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWV4eS1tdWktbmV4dGpzLWFkbWluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25hbWVkLXBsYWNlaG9sZGVyc0AxLjEuMy9ub2RlX21vZHVsZXMvbmFtZWQtcGxhY2Vob2xkZXJzL2luZGV4LmpzP2I5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBiYXNlZCBvbiBjb2RlIGZyb20gQnJpYW4gV2hpdGUgQG1zY2RleCBtYXJpYXNxbCBsaWJyYXJ5IC0gaHR0cHM6Ly9naXRodWIuY29tL21zY2RleC9ub2RlLW1hcmlhc3FsL2Jsb2IvbWFzdGVyL2xpYi9DbGllbnQuanMjTDI3Mi1MMzMyXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vbXNjZGV4L25vZGUtbWFyaWFzcWwvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG5jb25zdCBSRV9QQVJBTSA9IC8oPzpcXD8pfCg/OjooXFxkK3woPzpbYS16QS1aXVthLXpBLVowLTlfXSopKSkvZyxcbkRRVU9URSA9IDM0LFxuU1FVT1RFID0gMzksXG5CU0xBU0ggPSA5MjtcblxuZnVuY3Rpb24gcGFyc2UocXVlcnkpIHtcbiAgbGV0IHBwb3MgPSBSRV9QQVJBTS5leGVjKHF1ZXJ5KTtcbiAgbGV0IGN1cnBvcyA9IDA7XG4gIGxldCBzdGFydCA9IDA7XG4gIGxldCBlbmQ7XG4gIGNvbnN0IHBhcnRzID0gW107XG4gIGxldCBpblF1b3RlID0gZmFsc2U7XG4gIGxldCBlc2NhcGUgPSBmYWxzZTtcbiAgbGV0IHFjaHI7XG4gIGNvbnN0IHRva2VucyA9IFtdO1xuICBsZXQgcWNudCA9IDA7XG4gIGxldCBsYXN0VG9rZW5FbmRQb3MgPSAwO1xuICBsZXQgaTtcblxuICBpZiAocHBvcykge1xuICAgIGRvIHtcbiAgICAgIGZvciAoaT1jdXJwb3MsZW5kPXBwb3MuaW5kZXg7IGk8ZW5kOyArK2kpIHtcbiAgICAgICAgbGV0IGNociA9IHF1ZXJ5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaHIgPT09IEJTTEFTSClcbiAgICAgICAgZXNjYXBlID0gIWVzY2FwZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluUXVvdGUgJiYgY2hyID09PSBxY2hyKSB7XG4gICAgICAgICAgICBpZiAocXVlcnkuY2hhckNvZGVBdChpICsgMSkgPT09IHFjaHIpIHtcbiAgICAgICAgICAgICAgLy8gcXVvdGUgZXNjYXBlZCB2aWEgXCJcIiBvciAnJ1xuICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hyID09PSBEUVVPVEUgfHwgY2hyID09PSBTUVVPVEUpIHtcbiAgICAgICAgICAgIGluUXVvdGUgPSB0cnVlO1xuICAgICAgICAgICAgcWNociA9IGNocjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaW5RdW90ZSkge1xuICAgICAgICBwYXJ0cy5wdXNoKHF1ZXJ5LnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XG4gICAgICAgIHRva2Vucy5wdXNoKHBwb3NbMF0ubGVuZ3RoID09PSAxID8gcWNudCsrIDogcHBvc1sxXSk7XG4gICAgICAgIHN0YXJ0ID0gZW5kICsgcHBvc1swXS5sZW5ndGg7XG4gICAgICAgIGxhc3RUb2tlbkVuZFBvcyA9IHN0YXJ0O1xuICAgICAgfVxuICAgICAgY3VycG9zID0gZW5kICsgcHBvc1swXS5sZW5ndGg7XG4gICAgfSB3aGlsZSAocHBvcyA9IFJFX1BBUkFNLmV4ZWMocXVlcnkpKTtcblxuICAgIGlmICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBpZiAoY3VycG9zIDwgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgIHBhcnRzLnB1c2gocXVlcnkuc3Vic3RyaW5nKGxhc3RUb2tlbkVuZFBvcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtwYXJ0cywgdG9rZW5zXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtxdWVyeV07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21waWxlcihjb25maWcpIHtcbiAgaWYgKCFjb25maWcpXG4gIGNvbmZpZyA9IHt9O1xuICBpZiAoIWNvbmZpZy5wbGFjZWhvbGRlcikge1xuICAgIGNvbmZpZy5wbGFjZWhvbGRlciA9ICc/JztcbiAgfVxuICBsZXQgbmNhY2hlID0gMTAwO1xuICBsZXQgY2FjaGU7XG4gIGlmICh0eXBlb2YgY29uZmlnLmNhY2hlID09PSAnbnVtYmVyJykge1xuICAgIG5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgfVxuICBpZiAodHlwZW9mIGNvbmZpZy5jYWNoZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgfVxuICBpZiAoY29uZmlnLmNhY2hlICE9PSBmYWxzZSAmJiAhY2FjaGUpIHtcbiAgICBjYWNoZSA9IG5ldyAocmVxdWlyZSgnbHJ1LWNhY2hlJykpKHsgbWF4OiBuY2FjaGUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0FycmF5UGFyYW1zKHRyZWUsIHBhcmFtcykge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGlmICh0cmVlLmxlbmd0aCA9PSAxKSB7XG4gICAgICByZXR1cm4gW3RyZWVbMF0sIFtdXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZWQgcXVlcnkgY29udGFpbnMgcGxhY2Vob2xkZXJzLCBidXQgcGFyYW1ldGVycyBvYmplY3QgaXMgdW5kZWZpbmVkJyk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0cmVlWzFdO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHRva2Vucy5sZW5ndGg7ICsraSkge1xuICAgICAgYXJyLnB1c2gocGFyYW1zW3Rva2Vuc1tpXV0pO1xuICAgIH1cbiAgICByZXR1cm4gW3RyZWVbMF0sIGFycl07XG4gIH1cblxuICBmdW5jdGlvbiBub1RhaWxpbmdTZW1pY29sb24ocykge1xuICAgIGlmIChzLnNsaWNlKC0xKSA9PSAnOicpIHtcbiAgICAgIHJldHVybiBzLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBmdW5jdGlvbiBqb2luKHRyZWUpIHtcbiAgICBpZiAodHJlZS5sZW5ndGggPT0gMSkge1xuICAgICAgcmV0dXJuIHRyZWU7XG4gICAgfVxuXG4gICAgbGV0IHVubmFtZWQgPSBub1RhaWxpbmdTZW1pY29sb24odHJlZVswXVswXSk7XG4gICAgZm9yIChsZXQgaT0xOyBpIDwgdHJlZVswXS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRyZWVbMF1baS0xXS5zbGljZSgtMSkgPT0gJzonKSB7XG4gICAgICAgIHVubmFtZWQgKz0gY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgICAgdW5uYW1lZCArPSBjb25maWcucGxhY2Vob2xkZXI7XG4gICAgICB1bm5hbWVkICs9IG5vVGFpbGluZ1NlbWljb2xvbih0cmVlWzBdW2ldKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0ID0gdHJlZVswXVt0cmVlWzBdLmxlbmd0aCAtMV07XG4gICAgaWYgKHRyZWVbMF0ubGVuZ3RoID09IHRyZWVbMV0ubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdC5zbGljZSgtMSkgPT0gJzonKSB7XG4gICAgICAgIHVubmFtZWQgKz0gY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgICAgdW5uYW1lZCArPSBjb25maWcucGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIHJldHVybiBbdW5uYW1lZCwgdHJlZVsxXV07XG4gIH1cblxuICBmdW5jdGlvbiBjb21waWxlKHF1ZXJ5LCBwYXJhbXNPYmopIHtcbiAgICBsZXQgdHJlZTtcbiAgICBpZiAoY2FjaGUgJiYgKHRyZWUgPSBjYWNoZS5nZXQocXVlcnkpKSkge1xuICAgICAgcmV0dXJuIHRvQXJyYXlQYXJhbXModHJlZSwgcGFyYW1zT2JqKVxuICAgIH1cbiAgICB0cmVlID0gam9pbihwYXJzZShxdWVyeSkpO1xuICAgIGlmKGNhY2hlKSB7XG4gICAgICBjYWNoZS5zZXQocXVlcnksIHRyZWUpO1xuICAgIH1cbiAgICByZXR1cm4gdG9BcnJheVBhcmFtcyh0cmVlLCBwYXJhbXNPYmopO1xuICB9XG5cbiAgY29tcGlsZS5wYXJzZSA9IHBhcnNlO1xuICByZXR1cm4gY29tcGlsZTtcbn1cblxuLy8gbmFtZWQgOm9uZSA6dHdvIHRvIHBvc3RncmVzLXN0eWxlIG51bWJlcmVkICQxICQyICQzXG5mdW5jdGlvbiB0b051bWJlcmVkKHEsIHBhcmFtcykge1xuICBjb25zdCB0cmVlID0gcGFyc2UocSk7XG4gIGNvbnN0IHBhcmFtc0FyciA9IFtdO1xuICBpZiAodHJlZS5sZW5ndGggPT0gMSkge1xuICAgIHJldHVybiBbdHJlZVswXSwgcGFyYW1zQXJyXTtcbiAgfVxuXG4gIGNvbnN0IHBJbmRleGVzID0ge307XG4gIGxldCBwTGFzdEluZGV4ID0gMDtcbiAgbGV0IHFzID0gJyc7XG4gIGxldCB2YXJJbmRleDtcbiAgY29uc3QgdmFyTmFtZXMgPSBbXTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgdHJlZVswXS5sZW5ndGg7ICsraSkge1xuICAgIHZhckluZGV4ID0gcEluZGV4ZXNbdHJlZVsxXVtpXV07XG4gICAgaWYgKCF2YXJJbmRleCkge1xuICAgICAgdmFySW5kZXggPSArK3BMYXN0SW5kZXg7XG4gICAgICBwSW5kZXhlc1t0cmVlWzFdW2ldXSA9IHZhckluZGV4O1xuICAgIH1cbiAgICBpZiAodHJlZVsxXVtpXSkge1xuICAgICAgdmFyTmFtZXNbdmFySW5kZXggLSAxXSA9IHRyZWVbMV1baV07XG4gICAgICBxcyArPSB0cmVlWzBdW2ldICsgJyQnICsgdmFySW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHFzICs9IHRyZWVbMF1baV07XG4gICAgfVxuICB9XG4gIHJldHVybiBbcXMsIHZhck5hbWVzLm1hcChuID0+IHBhcmFtc1tuXSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBpbGVyO1xubW9kdWxlLmV4cG9ydHMudG9OdW1iZXJlZCA9IHRvTnVtYmVyZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/named-placeholders@1.1.3/node_modules/named-placeholders/index.js\n");

/***/ })

};
;