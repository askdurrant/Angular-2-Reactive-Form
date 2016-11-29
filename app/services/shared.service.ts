import { Injectable } from '@angular/core';
import { REGEXPATTERNS } from '../constants/regex.constant';

@Injectable()

export class SharedService{

    items: any;

    getRegexPatterns() {
        return REGEXPATTERNS;
    }
}