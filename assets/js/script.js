// import { TIME_OUT, DELAY_TIME, TIME_OUT_SKIP, BASE_URL } from './constants.js';

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var redirectUrlEncode = urlParams.get('redirect');