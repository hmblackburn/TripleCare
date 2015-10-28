var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var home_vc_1 = require('../viewcontrols/home/home.vc');
var calendar_vc_1 = require('../viewcontrols/calendar/calendar.vc');
var contact_vc_1 = require('../viewcontrols/contact/contact.vc');
var login_vc_1 = require('../viewcontrols/login/login.vc');
var services_vc_1 = require('../viewcontrols/services/services.vc');
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(router) {
        _super.call(this);
        router.configure([
            { pattern: '', view: home_vc_1.default },
            { pattern: '/services', view: services_vc_1.default },
            { pattern: '/contact', view: contact_vc_1.default },
            { pattern: '/login', view: login_vc_1.default },
            { pattern: '/calendar', view: calendar_vc_1.default }
        ]);
    }
    MyApp.prototype.error = function (ev) {
        console.log(ev.error);
    };
    return MyApp;
})(platypus_1.App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyApp;
platypus_1.register.app('app', MyApp, [
    platypus_1.routing.Router
]);
