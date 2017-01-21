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
    var limit=5;
    var i = Number(localStorage.getItem("RedditCounter"));
    console.log(i);
    if(i<limit && i>-1)
    {
        var pos=25*i;
        window.location.href="https://www.reddit.com/r/NoFap/new/?count="+pos+"&after=t3_5pat86";        
    }
    else if(i>=limit)
    {
      i=-1;    
    }
    i=i+1;
    localStorage.setItem("RedditCounter",i);
    window.history.back();
})();
