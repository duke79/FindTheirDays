// ==UserScript==
// @name         Scrape Reddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("redditscript");
    var i = Number(localStorage.getItem("RedditCounter"));
    console.log(i);
    if(i<5)
    {
        var pos=25*i;
        window.location.href="https://www.reddit.com/r/NoFap/new/?count="+pos+"&after=t3_5pat86";        
    }
    i=i+1;
    localStorage.setItem("RedditCounter",i);
    window.history.back();
})();
