/**
 * Created by fanzhengchen on 11/9/16.
 */

import {HOST} from "../constants";
export function fetchHomePage() {
    return fetch(HOST + "/wenwenWeb/wenwenLife/index", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Aceept': 'application/json',
        },
        body: JSON.stringify({
            type: 'android'
        })
    }).then(response => response.text())
        .then(responseText => {
            "use strict";
            console.debug(responseText)
        }).catch((error) => {

        });
}