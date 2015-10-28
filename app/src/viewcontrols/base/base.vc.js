var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var BaseViewControl = (function (_super) {
    __extends(BaseViewControl, _super);
    function BaseViewControl() {
        _super.apply(this, arguments);
        this.context = {};
    }
    return BaseViewControl;
})(platypus_1.ui.ViewControl);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseViewControl;
