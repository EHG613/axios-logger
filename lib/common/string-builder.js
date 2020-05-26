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

        if (method && method.toUpperCase() === 'GET' && params) {
            this.printQueue.push(JSON.stringify(params));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwidG9VcHBlckNhc2UiLCJtYWtlTWV0aG9kIiwieWVsbG93IiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLE9BQUQsRUFBa0I7QUFDbkMsVUFBTUMsTUFBTSxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sVUFBWixLQUEyQixLQUEzQixHQUFvQyxJQUFHRixPQUFRLEdBQS9DLEdBQXFELElBQUcsS0FBS0osTUFBTCxDQUFZTSxVQUFaLElBQTBCLE9BQVEsS0FBSUYsT0FBUSxHQUFySDtBQUNBLFNBQUtILFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCQyxlQUFNQyxLQUFOLENBQVlKLE1BQVosQ0FBckI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQWE7QUFDdkI7QUFDQSxVQUFNQyxVQUFVLEdBQUcseUJBQVdELElBQVgsRUFBaUIsS0FBS1gsTUFBTCxDQUFZWSxVQUFaLElBQTBCLGFBQTNDLENBQW5CO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJLLFVBQXJCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsT0FBRCxFQUE2QztBQUNuRCxRQUFHLEtBQUtkLE1BQUwsQ0FBWWMsT0FBWixJQUF1QkEsT0FBMUIsRUFBbUM7QUFDL0IsWUFBTUMsU0FBMEMsR0FBRyxFQUFuRDs7QUFDQSxXQUFJLElBQUlDLEdBQVIsSUFBZUYsT0FBZixFQUF3QjtBQUNwQixZQUFHLENBQUMsS0FBS1osa0JBQUwsQ0FBd0JlLFFBQXhCLENBQWlDRCxHQUFqQyxDQUFKLEVBQTJDO0FBQ3ZDRCxVQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQkYsT0FBTyxDQUFDRSxHQUFELENBQXhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLZixVQUFMLENBQWdCTSxJQUFoQixDQUFxQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FBckI7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREssRUFBQUEsT0FBTyxDQUFDQyxHQUFELEVBQWVDLE1BQWYsRUFBZ0NDLE1BQWhDLEVBQThDO0FBQ2pELFFBQUcsS0FBS3ZCLE1BQUwsQ0FBWXFCLEdBQVosSUFBbUJBLEdBQXRCLEVBQTJCLEtBQUtwQixVQUFMLENBQWdCTSxJQUFoQixDQUFxQmMsR0FBckI7O0FBQzNCLFFBQUdDLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxXQUFQLE9BQXlCLEtBQW5DLElBQTRDRCxNQUEvQyxFQUFzRDtBQUNsRCxXQUFLdEIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJXLElBQUksQ0FBQ0MsU0FBTCxDQUFlSSxNQUFmLENBQXJCO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7O0FBRURFLEVBQUFBLFVBQVUsQ0FBQ0gsTUFBRCxFQUFrQjtBQUN4QixRQUFHLEtBQUt0QixNQUFMLENBQVlzQixNQUFaLElBQXNCQSxNQUF6QixFQUFpQyxLQUFLckIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJDLGVBQU1rQixNQUFOLENBQWFKLE1BQU0sQ0FBQ0UsV0FBUCxFQUFiLENBQXJCO0FBQ2pDLFdBQU8sSUFBUDtBQUNIOztBQUVERyxFQUFBQSxRQUFRLENBQUNDLElBQUQsRUFBZTtBQUNuQixRQUFHLEtBQUs1QixNQUFMLENBQVk0QixJQUFaLElBQW9CQSxJQUF2QixFQUE2QixLQUFLM0IsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJXLElBQUksQ0FBQ0MsU0FBTCxDQUFlUyxJQUFmLENBQXJCO0FBQzdCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLE1BQUQsRUFBaUJDLFVBQWpCLEVBQXNDO0FBQzVDLFFBQUdELE1BQU0sSUFBSUMsVUFBYixFQUF5QixLQUFLOUIsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBc0IsR0FBRXVCLE1BQU8sSUFBR0MsVUFBVyxFQUE3QztBQUN6QixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsS0FBSyxHQUFHO0FBQ0osV0FBTyxLQUFLL0IsVUFBTCxDQUFnQmdDLElBQWhCLENBQXFCLEdBQXJCLENBQVA7QUFDSDs7QUEvRGU7O2VBa0VMbkMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRlZm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnO1xyXG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcclxuXHJcbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbExvZ0NvbmZpZztcclxuICAgIHByaXZhdGUgcHJpbnRRdWV1ZTogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QgPSBbJ2NvbW1vbicsICdkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ3ZhcnknLCAnZGF0ZScsICdjb25uZWN0aW9uJywgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5J107XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUxvZ1R5cGVXaXRoUHJlZml4KGxvZ1R5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYFske2xvZ1R5cGV9XWAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1bJHtsb2dUeXBlfV1gO1xyXG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLmdyZWVuKHByZWZpeCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEYXRlRm9ybWF0KGRhdGU6IERhdGUpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IGRhdGVmb3JtYXQoZGF0ZSwgdGhpcy5jb25maWcuZGF0ZUZvcm1hdCB8fCAnaXNvRGF0ZVRpbWUnKTtcclxuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChkYXRlRm9ybWF0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlSGVhZGVyKGhlYWRlcnM/OiB7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmhlYWRlcnMgJiYgaGVhZGVycykge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcclxuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0LmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoaGVhZGVyTWFwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nLCBtZXRob2Q/OiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XHJcbiAgICAgICAgaWYobWV0aG9kICYmIG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJyAmJiBwYXJhbXMpe1xyXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlTWV0aG9kKG1ldGhvZD86IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmRhdGEgJiYgZGF0YSkgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZihzdGF0dXMgJiYgc3RhdHVzVGV4dCkgdGhpcy5wcmludFF1ZXVlLnB1c2goYCR7c3RhdHVzfToke3N0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0J1aWxkZXI7XHJcbiJdfQ==
