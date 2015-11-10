/// <reference path="../../../../typings/parse/parse.d.ts"/>

import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: contexts.IHome = {
        carouselItems: [{
            imageURL: 'images/garden.jpg'
        },
            {
                imageURL: 'images/succulent.jpeg'
            },
            {
                imageURL: 'images/purple-flower.jpg'
            }]
    };
}

register.viewControl('home-vc', HomeViewControl);
