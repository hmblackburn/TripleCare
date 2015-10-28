var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var NavbarTemplateControl = (function (_super) {
    __extends(NavbarTemplateControl, _super);
    function NavbarTemplateControl() {
        _super.apply(this, arguments);
        this.templateString = require('./navbar.tc.html');
    }
    return NavbarTemplateControl;
})(platypus_1.ui.TemplateControl);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarTemplateControl;
platypus_1.register.control('navbar', NavbarTemplateControl);
