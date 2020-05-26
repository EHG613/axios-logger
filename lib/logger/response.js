'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

var _print = require('../common/print');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function responseLogger(response, config) {
    const {
        config: { url, method },
        status,
        statusText,
        data,
        headers,
    } = response;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Response')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url, method, null)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    (0, _print.printLog)(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsUUFBeEIsRUFBaURDLE1BQWpELEVBQTZFO0FBQ3pFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUNDLE1BQUFBLEdBQUQ7QUFBTUMsTUFBQUE7QUFBTixLQUFUO0FBQXdCQyxJQUFBQSxNQUF4QjtBQUFnQ0MsSUFBQUEsVUFBaEM7QUFBNENDLElBQUFBLElBQTVDO0FBQWtEQyxJQUFBQTtBQUFsRCxNQUE2RFAsUUFBbkU7QUFDQSxRQUFNUSxXQUFXLEdBQUcsaUNBQW9CUCxNQUFwQixDQUFwQjtBQUVBLFFBQU1RLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsVUFEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSVosTUFISixFQUlQYSxPQUpPLENBSUNkLEdBSkQsRUFJTUMsTUFKTixFQUljLElBSmQsRUFLUGMsVUFMTyxDQUtJYixNQUxKLEVBS1lDLFVBTFosRUFNUGEsVUFOTyxDQU1JWCxPQU5KLEVBT1BZLFFBUE8sQ0FPRWIsSUFQRixFQVFQYyxLQVJPLEVBQVo7QUFVQSx1QkFBU1QsR0FBVDtBQUVBLFNBQU9YLFFBQVA7QUFDSDs7ZUFFY0QsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcclxuaW1wb3J0IHsgYXNzZW1ibGVCdWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBwcmludExvZyB9IGZyb20gJy4uL2NvbW1vbi9wcmludCc7XHJcblxyXG5mdW5jdGlvbiByZXNwb25zZUxvZ2dlcihyZXNwb25zZTogQXhpb3NSZXNwb25zZSwgY29uZmlnPzogUmVzcG9uc2VMb2dDb25maWcpIHtcclxuICAgIGNvbnN0IHtjb25maWc6IHt1cmwsIG1ldGhvZH0sIHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVyc30gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XHJcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXHJcbiAgICAgICAgLm1ha2VMb2dUeXBlV2l0aFByZWZpeCgnUmVzcG9uc2UnKVxyXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKVxyXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcclxuICAgICAgICAubWFrZVVybCh1cmwsIG1ldGhvZCwgbnVsbClcclxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXHJcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcclxuICAgICAgICAubWFrZURhdGEoZGF0YSlcclxuICAgICAgICAuYnVpbGQoKTtcclxuXHJcbiAgICBwcmludExvZyhsb2cpO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VMb2dnZXI7Il19
