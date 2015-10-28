var platypus_1 = require('platypus');
var BaseRepository = (function () {
    function BaseRepository() {
    }
    BaseRepository._inject = {
        utils: platypus_1.Utils
    };
    return BaseRepository;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseRepository;
