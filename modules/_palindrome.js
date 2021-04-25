import isObject from './isObject.js';
import { nativeCreate } from './_setup.js';

// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
    return function () {};
}

// An internal function for creating a new object that inherits from another.

export default function palindrome(str) {
    return () => {
        var re = /[^A-Za-z0-9]/g;
        str = str.replace(re, '');
        str = str.toLowerCase();
        var len = str.length;
        msg = '';
        for (var i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                msg = 'Not a palindrome';
                alert(msg);
                return false;
            }
        }
        msg = 'Palindrom found';
        alert(msg);
        return true;
    };
}

palindrome('A man, a plan, a canal. Panama');
