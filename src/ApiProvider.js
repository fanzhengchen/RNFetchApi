/**
 * Created by fanzhengchen on 11/9/16.
 */

import {HOST} from "../constants";
export function fetchHomePage(url) {
    return fetch(HOST + "/wenwenWeb/wenwenLife/index");
}