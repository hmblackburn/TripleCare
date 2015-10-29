var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var home_vc_1 = require('../../viewcontrols/home/home.vc');
var calendar_vc_1 = require('../../viewcontrols/calendar/calendar.vc');
var contact_vc_1 = require('../../viewcontrols/contact/contact.vc');
var register_vc_1 = require('../../viewcontrols/register/register.vc');
var services_vc_1 = require('../../viewcontrols/services/services.vc');
var NavbarTemplateControl = (function (_super) {
    __extends(NavbarTemplateControl, _super);
    function NavbarTemplateControl() {
        _super.apply(this, arguments);
        this.templateString = require('./navbar.tc.html');
        this.context = {
            showNavbar: true,
            homeView: home_vc_1.default,
            calView: calendar_vc_1.default,
            contactView: contact_vc_1.default,
            servView: services_vc_1.default,
            loginView: register_vc_1.default,
            loggedin: false
        };
    }
    NavbarTemplateControl.prototype.initialize = function () {
        var _this = this;
        this.on('navigated', function (ev, utils) {
            _this.drawerController.control.close();
            if (utils.pathname.indexOf('/register') === 0) {
                _this.context.showNavbar = false;
            }
            else {
                _this.context.showNavbar = true;
            }
        });
    };
    NavbarTemplateControl.prototype.toggleLogin = function () {
        this.context.loggedin = !this.context.loggedin;
    };
    NavbarTemplateControl.prototype.logOut = function () {
    };
    return NavbarTemplateControl;
})(platypus_1.ui.TemplateControl);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarTemplateControl;
platypus_1.register.control('navbar', NavbarTemplateControl);
