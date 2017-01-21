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
            
    var usersJson;
    var usersStr = localStorage.getItem("users");
    console.log("usersStr= "+usersStr);
    if(usersStr===null || usersStr==="null")
    {
        usersJson = [{"id":"jagga","days":15}];
        console.log("usersJson= "+usersJson);
        console.log("stringified= "+JSON.stringify(usersJson));
        localStorage.setItem("users",JSON.stringify(usersJson));
    }
    else
    {
        usersJson = JSON.parse(usersStr);
    }
    console.log("usersJson= "+usersJson);      
    //var user = {};
      //  user.days = "234";
      //  user.id = "myId";
    //usersJson.push(user);
    //localStorage.setItem("users",JSON.stringify(usersJson));
    //localStorage.setItem("users","null");
        
    $.each($(".tagline > span.flair"), function( i, l ){
        var days = $(this).attr("title");
        var id = $(this).prev().text();
        var user = {};
        user[id]=days;
        usersJson.push(user);
        localStorage.setItem("users",JSON.stringify(usersJson));        
    });

    console.log("redditscript");
    var limit=5;
    var i = Number(localStorage.getItem("RedditCounter"));
    console.log(i);
    if(i<limit && i>-1)
    {
        var pos=25*i;        
        window.location.href="https://www.reddit.com/r/NoFap/?count="+pos+"&after=t3_5pb1wu";        
    }
    else if(i>=limit)
    {
      i=-1;    
    }
    i=i+1;
    localStorage.setItem("RedditCounter",i);
    window.history.back();
})();
