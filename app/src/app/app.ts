import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import RegisterViewControl from '../viewcontrols/register/register.vc';
import CalendarViewControl from '../viewcontrols/calendar/calendar.vc';
import ContactViewControl from '../viewcontrols/contact/contact.vc';
import LoginViewControl from '../viewcontrols/login/login.vc';
import ServicesViewControl from '../viewcontrols/services/services.vc';




export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/register', view: RegisterViewControl },
            { pattern: '/services', view: ServicesViewControl },
            { pattern: '/contact', view: ContactViewControl },
          //  { pattern: '/login', view: LoginViewControl },
            { pattern: '/calendar', view: CalendarViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
