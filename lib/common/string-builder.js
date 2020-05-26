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
        if (this.config.url && url) this.printQueue.push(url);

        if (method && method.toUpperCase() === 'GET' && params && JSON.stringify(params) !== '{}') {
            let queryStrings = [];

            for (let key in params) {
                queryStrings.push(key + '=' + params[key]);
            }

            this.printQueue.push('?');
            this.printQueue.push(queryStrings.join('&'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwidG9VcHBlckNhc2UiLCJxdWVyeVN0cmluZ3MiLCJqb2luIiwibWFrZU1ldGhvZCIsInllbGxvdyIsIm1ha2VEYXRhIiwiZGF0YSIsIm1ha2VTdGF0dXMiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLE9BQUQsRUFBa0I7QUFDbkMsVUFBTUMsTUFBTSxHQUFHLEtB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QXNCLEdBQUV5QixNQUFPLElBQUdDLFVBQVcsRUFBN0M7QUFDekIsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLEtBQUssR0FBRztBQUNKLFdBQU8sS0FBS2pDLFVBQUwsQ0FBZ0J5QixJQUFoQixDQUFxQixHQUFyQixDQUFQO0FBQ0g7O0FBcEVlOztlQXVFTDVCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcclxuaW1wb3J0IHsgR2xvYmFsTG9nQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XHJcblxyXG5jbGFzcyBTdHJpbmdCdWlsZGVyIHtcclxuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XHJcbiAgICBwcml2YXRlIHByaW50UXVldWU6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIGZpbHRlcmVkSGVhZGVyTGlzdDogQXJyYXk8U3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0ID0gWydjb21tb24nLCAnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbnRlbnQtdHlwZScsICdjb250ZW50LWxlbmd0aCcsICd2YXJ5JywgJ2RhdGUnLCAnY29ubmVjdGlvbicsICdjb250ZW50LXNlY3VyaXR5LXBvbGljeSddO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VMb2dUeXBlV2l0aFByZWZpeChsb2dUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSB0aGlzLmNvbmZpZy5wcmVmaXhUZXh0ID09PSBmYWxzZSA/IGBbJHtsb2dUeXBlfV1gIDogYFske3RoaXMuY29uZmlnLnByZWZpeFRleHQgfHwgJ0F4aW9zJ31dWyR7bG9nVHlwZX1dYDtcclxuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay5ncmVlbihwcmVmaXgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlZm9ybWF0KGRhdGUsIHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgfHwgJ2lzb0RhdGVUaW1lJyk7XHJcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZy5oZWFkZXJzICYmIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyTWFwOnsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319ID0ge307XHJcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdC5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW2tleV0gPSBoZWFkZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsKHVybD86IHN0cmluZywgbWV0aG9kPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZy51cmwgJiYgdXJsKSB0aGlzLnByaW50UXVldWUucHVzaCh1cmwpO1xyXG4gICAgICAgIGlmKG1ldGhvZCAmJiBtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gJ0dFVCcgJiYgcGFyYW1zICYmIEpTT04uc3RyaW5naWZ5KHBhcmFtcykgIT09J3t9Jyl7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZ3M6IEFycmF5PHN0cmluZz49W107XHJcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmdzLnB1c2goa2V5ICsnPScgKyBwYXJhbXNba2V5XSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaCgnPycpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChxdWVyeVN0cmluZ3Muam9pbignJicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlTWV0aG9kKG1ldGhvZD86IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmRhdGEgJiYgZGF0YSkgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZihzdGF0dXMgJiYgc3RhdHVzVGV4dCkgdGhpcy5wcmludFF1ZXVlLnB1c2goYCR7c3RhdHVzfToke3N0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0J1aWxkZXI7XHJcbiJdfQ==
