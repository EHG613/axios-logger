'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _dateformat = _interopRequireDefault(require('dateformat'));

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

class StringBuilder {
    constructor(config) {
        _defineProperty(this, 'config', void 0);

        _defineProperty(this, 'printQueue', void 0);

        _defineProperty(this, 'filteredHeaderList', void 0);

        this.config = config;
        this.printQueue = [];
        this.filteredHeaderList = [
            'common',
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'content-type',
            'content-length',
            'vary',
            'date',
            'connection',
            'content-security-policy',
        ];
    }

    makeLogTypeWithPrefix(logType) {
        const prefix =
            this.config.prefixText === false ? `[${logType}]` : `[${this.config.prefixText || 'Axios'}][${logType}]`;
        this.printQueue.push(_chalk.default.green(prefix));
        return this;
    }

    makeDateFormat(date) {
        // @ts-ignore
        const dateFormat = (0, _dateformat.default)(date, this.config.dateFormat || 'isoDateTime');
        this.printQueue.push(dateFormat);
        return this;
    }

    makeHeader(headers) {
        if (this.config.headers && headers) {
            const headerMap = {};

            for (let key in headers) {
                if (!this.filteredHeaderList.includes(key)) {
                    headerMap[key] = headers[key];
                }
            }

            this.printQueue.push(JSON.stringify(headerMap));
        }

        return this;
    }

    makeUrl(url, method, params) {
        if (method && method.toUpperCase() === 'GET' && params && JSON.stringify(params) !== '{}') {
            let queryStrings = [];

            for (let key in params) {
                queryStrings.push(key + '=' + params[key]);
            }

            if (this.config.url && url) this.printQueue.push(url + '?' + queryStrings.join('&'));
        } else {
            if (this.config.url && url) this.printQueue.push(url);
        }

        return this;
    }

    makeMethod(method) {
        if (this.config.method && method) this.printQueue.push(_chalk.default.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data) {
        if (this.config.data && data) this.printQueue.push(JSON.stringify(data));
        return this;
    }

    makeStatus(status, statusText) {
        if (status && statusText) this.printQueue.push(`${status}:${statusText}`);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwidG9VcHBlckNhc2UiLCJxdWVyeVN0cmluZ3MiLCJqb2luIiwibWFrZU1ldGhvZCIsInllbGxvdyIsIm1ha2VEYXRhIiwiZGF0YSIsIm1ha2VTdGF0dXMiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLE9BQUQsRUFBa0I7QUFDbkMsVUFBTUMsTUFBTSxHQUFHLEtB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QUFJQyxVQUFiLEVBQXlCLEtBQUtoQyxVQUFMLENBQWdCTSxJQUFoQixDQUFzQixHQUFFeUIsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUtqQyxVQUFMLENBQWdCeUIsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQXBFZTs7ZUF1RUw1QixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XHJcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5cclxuY2xhc3MgU3RyaW5nQnVpbGRlciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBmaWx0ZXJlZEhlYWRlckxpc3Q6IEFycmF5PFN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLnByaW50UXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlTG9nVHlwZVdpdGhQcmVmaXgobG9nVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7bG9nVHlwZX1dYCA6IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0IHx8ICdBeGlvcyd9XVske2xvZ1R5cGV9XWA7XHJcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsuZ3JlZW4ocHJlZml4KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZURhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xyXG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGRhdGVGb3JtYXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VIZWFkZXIoaGVhZGVycz86IHsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319KSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck1hcDp7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtrZXldID0gaGVhZGVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShoZWFkZXJNYXApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVVybCh1cmw/OiBzdHJpbmcsIG1ldGhvZD86IHN0cmluZywgcGFyYW1zPzogYW55KSB7XHJcbiAgICAgICAgaWYobWV0aG9kICYmIG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJyAmJiBwYXJhbXMgJiYgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSAhPT0ne30nKXtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nczogQXJyYXk8c3RyaW5nPj1bXTtcclxuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZ3MucHVzaChrZXkgKyc9JyArIHBhcmFtc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmNvbmZpZy51cmwgJiYgdXJsKSB0aGlzLnByaW50UXVldWUucHVzaCh1cmwgKyAnPycgKyBxdWVyeVN0cmluZ3Muam9pbignJicpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5jb25maWcudXJsICYmIHVybCkgdGhpcy5wcmludFF1ZXVlLnB1c2godXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZU1ldGhvZChtZXRob2Q/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZy5tZXRob2QgJiYgbWV0aG9kKSB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay55ZWxsb3cobWV0aG9kLnRvVXBwZXJDYXNlKCkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZy5kYXRhICYmIGRhdGEpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3RhdHVzKHN0YXR1cz86bnVtYmVyLCBzdGF0dXNUZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW50UXVldWUuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xyXG4iXX0=
