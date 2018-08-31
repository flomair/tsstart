"use strict";
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
exports.__esModule = true;
var data_1 = require("../src/views/components/chart/data");
var getRowData = function (row, values) {
    var rowOut = [];
    values.forEach(function (key) {
        if (!Object.getOwnPropertyNames(row).includes(key))
            rowOut.push(null);
        rowOut.push(row[key]);
    });
    return rowOut;
};
var groupeArrayByKey = function (data, key, values) {
    var list = {};
    data.forEach(function (row) {
        if (!Object.getOwnPropertyNames(row).includes(key))
            return;
        if (list[row[key]]) {
            list[row[key]].push(getRowData(row, values));
        }
        else {
            list[row[key]] = [getRowData(row, values)];
        }
    });
    return { data: Object.values(list), keys: Object.keys(list) };
};
var _a = groupeArrayByKey(data_1["default"], 'position', ['id', 'position', 'time', 'error']), data = _a.data, keys = _a.keys;
var seriesTmpl = {
    symbolSize: 2,
    type: 'scatter',
    symbol: 'rect'
};
var series = data.forEach(function (type, index) {
    return __assign({}, seriesTmpl, { data: type });
});
console.log(series, keys);
