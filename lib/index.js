'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
Object.defineProperty(exports, 'setGlobalConfig', {
    enumerable: true,
    get: function() {
        return _config.setGlobalConfig;
    },
});
Object.defineProperty(exports, 'requestLogger', {
    enumerable: true,
    get: function() {
        return _request.default;
    },
});
Object.defineProperty(exports, 'responseLogger', {
    enumerable: true,
    get: function() {
        return _response.default;
    },
});
Object.defineProperty(exports, 'errorLogger', {
    enumerable: true,
    get: function() {
        return _error.errorLogger;
    },
});

var _config = require('./common/config');

var _request = _interopRequireDefault(require('./logger/request'));

var _response = _interopRequireDefault(require('./logger/response'));

var _error = require('./logger/error');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCByZXF1ZXN0TG9nZ2VyIGZyb20gJy4vbG9nZ2VyL3JlcXVlc3QnO1xyXG5pbXBvcnQgcmVzcG9uc2VMb2dnZXIgZnJvbSAnLi9sb2dnZXIvcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBlcnJvckxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2Vycm9yJztcclxuXHJcbmV4cG9ydCB7IHNldEdsb2JhbENvbmZpZywgcmVxdWVzdExvZ2dlciwgcmVzcG9uc2VMb2dnZXIsIGVycm9yTG9nZ2VyIH07Il19
