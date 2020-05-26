'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.getGlobalConfig = getGlobalConfig;
exports.setGlobalConfig = setGlobalConfig;
exports.assembleBuildConfig = assembleBuildConfig;

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

let globalConfig = {
    url: true,
    method: true,
    data: true,
    status: true,
};

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config) {
    globalConfig = _objectSpread({}, globalConfig, {}, config);
}

function assembleBuildConfig(config) {
    return _objectSpread({}, globalConfig, {}, config);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbImdsb2JhbENvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdGF0dXMiLCJnZXRHbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJjb25maWciLCJhc3NlbWJsZUJ1aWxkQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUE2QixHQUFHO0FBQ2hDQyxFQUFBQSxHQUFHLEVBQUUsSUFEMkI7QUFFaENDLEVBQUFBLE1BQU0sRUFBRSxJQUZ3QjtBQUdoQ0MsRUFBQUEsSUFBSSxFQUFFLElBSDBCO0FBSWhDQyxFQUFBQSxNQUFNLEVBQUU7QUFKd0IsQ0FBcEM7O0FBT0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixTQUFPTCxZQUFQO0FBQ0g7O0FBRUQsU0FBU00sZUFBVCxDQUF5QkMsTUFBekIsRUFBa0Q7QUFDOUNQLEVBQUFBLFlBQVkscUJBQ0xBLFlBREssTUFFTE8sTUFGSyxDQUFaO0FBSUg7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkJELE1BQTdCLEVBQTZGO0FBQ3pGLDJCQUNPUCxZQURQLE1BRU9PLE1BRlA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yTG9nQ29uZmlnLCBHbG9iYWxMb2dDb25maWcsIFJlcXVlc3RMb2dDb25maWcsIFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5sZXQgZ2xvYmFsQ29uZmlnOiBHbG9iYWxMb2dDb25maWcgPSB7XHJcbiAgICB1cmw6IHRydWUsXHJcbiAgICBtZXRob2Q6IHRydWUsXHJcbiAgICBkYXRhOiB0cnVlLFxyXG4gICAgc3RhdHVzOiB0cnVlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0R2xvYmFsQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbENvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2xvYmFsQ29uZmlnKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XHJcbiAgICBnbG9iYWxDb25maWcgPSB7XHJcbiAgICAgICAgLi4uZ2xvYmFsQ29uZmlnLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnPzogUmVxdWVzdExvZ0NvbmZpZyB8IFJlc3BvbnNlTG9nQ29uZmlnIHwgRXJyb3JMb2dDb25maWcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZ2xvYmFsQ29uZmlnLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRHbG9iYWxDb25maWcsXHJcbiAgICBzZXRHbG9iYWxDb25maWcsXHJcbiAgICBhc3NlbWJsZUJ1aWxkQ29uZmlnLFxyXG59OyJdfQ==
