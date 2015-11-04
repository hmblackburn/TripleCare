import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CalendarViewControl extends BaseViewControl {
    templateString: string = require('./calendar.vc.html');
    calendarlink: any;
    context: any = {
        customerInfo: {
            name: '',
            address: '',
            info: '',
            extra: '',
            extrathree: '',
        },
        showInfo:false,
    };
    
    displayInfoModal(): void {
        // show the info modal by setting showInfo to true
        this.context.showInfo=true;
    }
    hideInfoModal(): void {
        this.context.showInfo= false;
        this.context.customerInfo.name='';
        this.context.customerInfo.address='';
        this.context.customerInfo.info='';
        this.context.customerInfo.extra='';
        this.context.customerInfo.extrathree='';
    }
}

register.viewControl('calendar-vc', CalendarViewControl);
