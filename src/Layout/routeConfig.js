
import Home from "../menus/Menu1/C141.js";
import about from "../menus/Menu2/About";
import api from "../menus/Menu1/C142.js";
import slide from "../menus/Menu1/Slide.js";
import node601 from "../menus/Menu3/index";
import node501 from "../menus/Menu5/index";
import node501a from "../menus/Menu5/Helpdesk";
import rti from "../menus/Menu3/index";
import contactUs from "../menus/Menu4/new.js";
import node701 from "../menus/Menu4/Contact.js";
import map from "../menus/Menu4/map";
import websitepolicies from "../Components/Footer/Webpolicies.js";
import help from "../Components/Footer/Help";
import Login from "../menus/Menu7/login.js"; 
import node151 from "../Components/Notifications/Api";
import node152 from "../Components/Notifications/Events.js";
import node153 from "../Components/Notifications/Rewards";



import fetch from "../Components/Notifications/Fetch.js"
import sitemap from "../Components/Sitemap/Sitemap.js";
import organisation from "../menus/Organisation/Index.js";



import node201 from "../Components/Submenus/Pagetype1";
import node202 from "../menus/Organisation/Index.js";
import node203 from "../Components/Submenus/Pagetype3";
import node204 from "../Components/Submenus/Pagetype8";
import node205 from "../Components/Submenus/Pagetype5";
import node206 from "../Components/Submenus/Pagetype7";
import node207 from "../Components/Submenus/Pagetype2";
import node208 from "../Components/Submenus/Pagetype4";
import node209 from "../Components/Submenus/Pagetype6";
import node210 from "../Components/Notifications/Trade";
import node211 from "../Components/Submenus/Pagetype16";

import node215 from "../Components/Submenus/Pagetype15";
import node212 from "../Components/Submenus/Pagetype10";

import node2511 from "../Components/Submenus/Pagetype51";

import node261 from "../Components/Sublinks1/Page1.js";
import node262 from "../Components/Sublinks1/Page2.js";
import node263 from "../Components/Sublinks1/Page3.js";
import node264 from "../Components/Sublinks1/Page4.js";
import node265 from "../Components/Sublinks1/Page5.js";
import node266 from "../Components/Sublinks1/Page6.js";
import node267 from "../Components/Sublinks1/Page7.js";
import node268 from "../Components/Sublinks1/Page9.js";
import node269 from "../Components/Sublinks1/Page10.js";

import node301 from "../Components/Submenus/PagetypeB";
import node302 from "../Components/Submenus/PagetypeC";
import node303 from "../Components/Submenus/PagetypeA";
import node304 from "../Components/Submenus/PagetypeD";
import node305 from "../Components/Submenus/PagetypeE";
import node306 from "../Components/Submenus/PagetypeF";
import node307 from "../Components/Submenus/PagetypeG";
import node308 from "../Components/Submenus/PagetypeH";
import node351 from "../Components/Submenus/Pagetype22a";
import node352 from "../Components/Submenus/Pagetype23";
import node353 from "../Components/Submenus/Pagetype22b";
import node354 from "../Components/Submenus/Pagetype24";
import node355 from "../Components/Notifications/Course.js"

import node801 from "../Components/Notifications/authLogin.js";
import node802 from "../Components/Notifications/authLogout.js";

//noc site data //
import node391 from "../Components/Submenus/Pagetype11";
import node392 from "../Components/Submenus/Pagetype14";
import detaildesign from"../Components/Submenus/Pagetype12";



import node401 from "../Components/Keycontacts/Contact1.js"
import node402 from "../Components/Keycontacts/Contact2.js"
import node403 from "../Components/Keycontacts/Contact3.js"
import node404 from "../Components/Keycontacts/Contact4.js"
import node405 from "../Components/Keycontacts/Contact5.js"

import node251 from "../Components/Sublinks2/SubPage1.js";
import node252 from "../Components/Sublinks2/SubPage2.js";
import node253 from "../Components/Sublinks2/SubPage3.js";
import node254 from "../Components/Sublinks2/SubPage4.js";
import node255 from "../Components/Sublinks2/SubPage5.js";
import node256 from "../Components/Sublinks2/SubPage6.js"
import node257 from "../Components/Sublinks2/SubPage7.js";



import node271 from "../Components/Sublinks3/Node271.js";
import node272 from "../Components/Sublinks3/Node272.js";
import node273 from "../Components/Sublinks3/Node273.js";
import node274 from "../Components/Sublinks3/Node274.js";
import node275 from "../Components/Sublinks3/Node275.js";
import node276 from "../Components/Sublinks3/Node276.js";

import ITITrade from "../Components/Submenus/Pagetype7b";

import Schemes from "../Components/Submenus/PagetypeE";


import node216 from "../Components/Submenus/Pagetype12";
import NKNTrade from "../Components/Submenus/Pagetype7b";
import Cloud from "../Components/Sublinks1/Page1";

import node381 from "../Components/Sublinks-noc/Pages1";
import node382 from "../Components/Sublinks-noc/Pages2";
import node383 from "../Components/Sublinks-noc/Pages3";
import node384 from "../Components/Sublinks-noc/Pages4";
import node385 from "../Components/Sublinks-noc/Pages5";
import node386 from "../Components/Sublinks-noc/Pages6";
import node387 from "../Components/Sublinks-noc/Pages7";

const routesConfig = [
  {
    path: "/Home",
    component:Home,
  },

  {
    path: "/about",
    component:about,
  },

  {
    path: "/slide",
    component:slide,
  },
  {
    path: "/rti",
    component: rti,
  },
  {
    path: "/contactus",
    component: contactUs,
  },
  
 
  {
    path: "/login",
    component: Login,
  },
  
  {
    path: "/node601",
    component: node601,
  },
  {
    path: "/node701", 
    component: node701,
  },
  {
    path: "/node151",
    component: node151,
  },
  {
    path: "/node152",
    component: node152,
  },
  {
    path: "/node153",
    component: node153,
  },

  {
    path: "/api",
    component: api,
  },
  {
    path: "/websitepolicies",
    component: websitepolicies,
  },
  {
    path: "/help",
    component: help,
  },
  {
    path: "/map",
    component: map,
  },
  {
    path: "/sitemap",
    component: sitemap,
  },
  {
    path: "/fetch",
    component:fetch,
  },
  
  
 
 

 
  {
    path: "/node201",
    component: node201,
  },
  {
    path: "/node202",
    component:node202,
  },
  {
    path: "/node203",
    component:node203,
  },
  {
    path: "/node204",
    component:node204,
  },
  {
    path: "/node205",
    component:node205,
  },
  {
    path: "/node206",
    component:node206,
  },
 
  {
    path: "/node207",
    component:node207,
  },
  {
    path: "/node208",
    component:node208,
  },
  {
    path: "/node209",
    component:node209,
  },
  {
    path: "/node216",
    component:node216,
  },
  {
    path: "/node211",
    component:node211,
  },
  {
    path: "/node212",
    component:node212,
  },
  {
    path: "/node215",
    component:node215,
  },


 
  {
    path: "/node2511",
    component:node2511,
  },

  {
    path: "/node301",
    component:node301,
  },
  {
    path: "/node302",
    component:node302,
  },
  {
    path: "/node303",
    component:node303,
  },
  {
    path: "/node304",
    component:node304,
  },
  {
    path: "/node305",
    component:node305,
  },
  
  {
    path: "/node306",
    component:node306,
  },
  {
    path: "/node307",
    component:node307,
  },
  {
    path: "/node308",
    component:node308,
  },
  {
    path: "/node351",
    component:node351,
  },
  {
    path: "/node352",
    component:node352,
  },
 
  {
    path: "/node355",
    component:node355,
  },
 
  
  {
    path: "/node391",
    component:node391,
  },
  {
    path: "/node392",
    component:node392,
  },


  {
    path: "/node401",
    component:node401,
  },
  {
    path: "/node402",
    component:node402,
  },
  {
    path: "/node403",
    component:node403,
  },
  {
    path: "/node404",
    component:node404,
  },
  {
    path: "/node405",
    component:node405,
  },
  

  {
    path: "/node251",
    component:node251,
  },
  {
    path: "/node252",
    component:node252,
  },
  {
    path: "/node253",
    component:node253,
  },
  {
    path: "/node254",
    component:node254,
  },
  {
    path: "/node255",
    component:node255,
  },
  {
    path: "/node256",
    component:node256,
  },
  {
    path: "/node257",
    component:node257,
  },
  
  {
    path: "/node261",
    component:node261 ,
  },
  {
    path: "/node262",
    component:node262,
  },
  {
    path: "/node263",
    component:node263,
  },
  {
    path: "/node264",
    component:node264,
  },
  {
    path: "/node265",
    component:node265,
  },
  {
    path: "/node266",
    component:node266,
  },
  {
    path: "/node267",
    component:node267,
  },
  {
    path: "/node268",
    component:node268,
  },
  {
    path: "/node269",
    component:node269,
  },


  {
    path: "/node271",
    component:node271 ,
  },
  {
    path: "/node272",
    component:node272,
  },
  {
    path: "/node273",
    component:node273,
  },
  {
    path: "/node274",
    component:node274 ,
  },
  {
    path: "/node275",
    component:node275,
  },
  {
    path: "/node276",
    component:node276,
  },

  {
    path: "/node381",
    component:node381,
  },
  {
    path: "/node382",
    component:node382,
  },
  {
    path: "/node383",
    component:node383,
  },
  {
    path: "/node384",
    component:node384,
  },
  {
    path: "/node385",
    component:node385,
  },
  {
    path: "/node386",
    component:node386,
  },
  {
    path: "/node387",
    component:node387,
  },


  {
    path: "/nicapsc-iti/Home",
    component:Home,
  },
  {
    path: "/nicapsc-iti/about",
    component: about,
  },
  {
    path: "/nicapsc-iti/slide",
    component: slide,
  },
  {
    path: "/nicapsc-iti/rti",
    component: rti,
  },
  {
    path: "/nicapsc-iti/contactus",
    component: contactUs,
  },
  {
    path: "/nicapsc-iti/node151",
    component: node151,
  },
  {
    path: "/nicapsc-iti/node152",
    component:node152,
  },
  {
    path: "/nicapsc-iti/node153",
    component:node153,
  },
  {
    path: "/nicapsc-iti/node501",
    component: node501,
  },
  {
    path: "/nicapsc-iti/node601",
    component: node601,
  },
  {
    path: "/nicapsc-iti/node701", 
    component: node701,
  },
  






  {
    path: "/nicapsc-iti/api",
    component: api,
  },
  {
    path: "/nicapsc-iti/websitepolicies",
    component:websitepolicies,
  },
  {
    path: "/nicapsc-iti/help",
    component: help,
  },
  {
    path: "/nicapsc-iti/map",
    component: map,
  },
  {
    path: "/nicapsc-iti/sitemap",
    component: sitemap,
  },
  {
    path: "/nicapsc-iti/fetch",
    component: fetch,
  },


 
  {
    path: "/nicapsc-iti/node201",
    component: node201,
  },
  {
    path: "/nicapsc-iti/node202",
    component: node202,
  },
  {
    path: "/nicapsc-iti/node203",
    component: node203,
  },
  {
    path: "/nicapsc-iti/node204",
    component: node204,
  },
  {
    path: "/nicapsc-iti/node205",
    component: node205,
  },
  {
    path: "/nicapsc-iti/node206",
    component: node206,
  },
  {
    path: "/nicapsc-iti/node207",
    component: node207,
  },
  {
    path: "/nicapsc-iti/node208",
    component: node208,
  },
  {
    path: "/nicapsc-iti/node209",
    component: node209,
  },
  {
    path: "/nicapsc-iti/node216",
    component: node216,
  },
  {
    path: "/nicapsc-iti/node211",
    component: node211,
  },
  {
    path: "/nicapsc-iti/node215",
    component: node215,
  },


  {
    path: "/nicapsc-iti/node301",
    component:node301,
  },
  {
    path: "/nicapsc-iti/node302",
    component: node302,
  },
  {
    path: "/nicapsc-iti/node303",
    component: node303,
  },
  {
    path: "/nicapsc-iti/node304",
    component: node304,
  },
  {
    path: "/nicapsc-iti/node305",
    component: node305,
  },
  
  {
    path: "/nicapsc-iti/node306",
    component: node306,
  },
  {
    path: "/nicapsc-iti/node307",
    component: node307,
  },
  {
    path: "/nicapsc-iti/node308",
    component: node308,
  },
  {
    path: "/nicapsc-iti/node351",
    component: node351,
  },
  {
    path: "/nicapsc-iti/node353",
    component:node353,
  },
  {
    path: "/nicapsc-iti/node354",
    component:node354,
  },
  {
    path: "/nicapsc-iti/node391",
    component: node391,
  },
  {
    path: "/nicapsc-iti/node392",
    component: node392,
  },


  {
    path: "/nicapsc-iti/node401",
    component: node401,
  },
  {
    path: "/nicapsc-iti/node402",
    component:node402,
  },
  {
    path: "/nicapsc-iti/node403",
    component:node403,
  },
  {
    path: "/nicapsc-iti/node404",
    component:node404,
  },
  {
    path: "/nicapsc-iti/node405",
    component:node405,
  },
  

  {
    path: "/nicapsc-iti/node251",
    component:node251,
  },
  {
    path: "/nicapsc-iti/node252",
    component:node252,
  },
  {
    path: "/nicapsc-iti/node253",
    component:node253,
  },
  {
    path: "/nicapsc-iti/node254",
    component:node254,
  },
  {
    path: "/nicapsc-iti/node255",
    component:node255,
  },
  {
    path: "/nicapsc-iti/node256",
    component:node256,
  },
  {
    path: "/nicapsc-iti/node257",
    component:node257,
  },
  
  {
    path: "/nicapsc-iti/node261",
    component:node261 ,
  },
  {
    path: "/nicapsc-iti/node262",
    component:node262,
  },
  {
    path: "/nicapsc-iti/node263",
    component:node263,
  },
  {
    path: "/nicapsc-iti/node264",
    component:node264,
  },
  {
    path: "/nicapsc-iti/node265",
    component:node265,
  },
  {
    path: "/nicapsc-iti/node266",
    component:node266,
  },
  {
    path: "/nicapsc-iti/node267",
    component:node267,
  },
  {
    path: "/nicapsc-iti/node268",
    component:node268,
  },
  {
    path: "/nicapsc-iti/node269",
    component:node269,
  },

  {
    path: "/nicapsc-iti/node271",
    component:node271 ,
  },
  {
    path: "/nicapsc-iti/node272",
    component:node272,
  },
  {
    path: "/nicapsc-iti/node273",
    component:node273,
  },
  
 



  {
    path: "/nicapsc-noc/Home",
    component:Home,
  },
  {
    path: "/nicapsc-noc/about",
    component: about,
  },
  {
    path: "/nicapsc-noc/slide",
    component: slide,
  },
  {
    path: "/nicapsc-noc/rti",
    component: rti,
  },
  {
    path: "/nicapsc-noc/contactus",
    component: contactUs,
  },
  {
    path: "/nicapsc-noc/node151",
    component: node151,
  },
  {
    path: "/nicapsc-noc/node501",
    component: node501,
  },
  {
    path: "/nicapsc-noc/node501a",
    component: node501a,
  },
  
  {
    path: "/nicapsc-noc/node601",
    component: node601,
  },
  {
    path: "/nicapsc-noc/node701", 
    component: node701,
  },
  {
    path: "/nicapsc-noc/node152",
    component: node152,
  },
  {
    path: "/nicapsc-noc/node153",
    component:node153,
  },

  {
    path: "/nicapsc-noc/detaildesign",
    component:detaildesign,
  },





  {
    path: "/nicapsc-noc/api",
    component: api,
  },
  {
    path: "/nicapsc-noc/websitepolicies",
    component:websitepolicies,
  },
  {
    path: "/nicapsc-noc/help",
    component: help,
  },
  {
    path: "/nicapsc-noc/map",
    component: map,
  },
  {
    path: "/nicapsc-noc/sitemap",
    component: sitemap,
  },
  {
    path: "/nicapsc-noc/fetch",
    component: fetch,
  },


 
  {
    path: "/nicapsc-noc/node201",
    component: node201,
  },
  {
    path: "/nicapsc-noc/node202",
    component: node202,
  },
  {
    path: "/nicapsc-noc/node203",
    component: node203,
  },
  {
    path: "/nicapsc-noc/node204",
    component: node204,
  },
  {
    path: "/nicapsc-noc/node205",
    component: node205,
  },
  {
    path: "/nicapsc-noc/node206",
    component: node206,
  },
  {
    path: "/nicapsc-noc/node207",
    component: node207,
  },
  {
    path: "/nicapsc-noc/node208",
    component: node208,
  },
  {
    path: "/nicapsc-noc/node209",
    component: node209,
  },
  {
    path: "/nicapsc-noc/node210",
    component: node210,
  },
  {
    path: "/nicapsc-noc/node211",
    component: node211,
  },
  {
    path: "/nicapsc-noc/node215",
    component: node215,
  },


  {
    path: "/nicapsc-noc/node301",
    component:node301,
  },
  {
    path: "/nicapsc-noc/node302",
    component: node302,
  },
  {
    path: "/nicapsc-noc/node303",
    component: node303,
  },
  {
    path: "/nicapsc-noc/node304",
    component: node304,
  },
  {
    path: "/nicapsc-noc/node305",
    component: node305,
  },
  
  {
    path: "/nicapsc-noc/node306",
    component: node306,
  },
  {
    path: "/nicapsc-noc/node307",
    component: node307,
  },
  {
    path: "/nicapsc-noc/node308",
    component: node308,
  },
  {
    path: "/nicapsc-noc/node351",
    component: node351,
  },
  {
    path: "/nicapsc-noc/node391",
    component: node391,
  },
  {
    path: "/nicapsc-noc/node392",
    component: node392,
  },


  {
    path: "/nicapsc-noc/node401",
    component: node401,
  },
  {
    path: "/nicapsc-noc/node402",
    component:node402,
  },
  {
    path: "/nicapsc-noc/node403",
    component:node403,
  },
  {
    path: "/nicapsc-noc/node404",
    component:node404,
  },
  {
    path: "/nicapsc-noc/node405",
    component:node405,
  },
  {
    path: "/nicapsc-noc/node251",
    component:node251,
  },
  {
    path: "/nicapsc-noc/node252",
    component:node252,
  },
  {
    path: "/nicapsc-noc/node253",
    component:node253,
  },
  {
    path: "/nicapsc-noc/node254",
    component:node254,
  },
  {
    path: "/nicapsc-noc/node255",
    component:node255,
  },
  {
    path: "/nicapsc-noc/node256",
    component:node256,
  },
  {
    path: "/nicapsc-noc/node257",
    component:node257,
  },
  
  {
    path: "/nicapsc-noc/node261",
    component:node261 ,
  },
  {
    path: "/nicapsc-noc/node262",
    component:node262,
  },
  {
    path: "/nicapsc-noc/node263",
    component:node263,
  },
  {
    path: "/nicapsc-noc/node264",
    component:node264,
  },
  {
    path: "/nicapsc-noc/node265",
    component:node265,
  },
  {
    path: "/nicapsc-noc/node266",
    component:node266,
  },
  {
    path: "/nicapsc-noc/node267",
    component:node267,
  },
  {
    path: "/nicapsc-noc/node268",
    component:node268,
  },
  {
    path: "/nicapsc-noc/node269",
    component:node269,
  },

  {
    path: "/nicapsc-noc/node271",
    component:node271 ,
  },
  {
    path: "/nicapsc-noc/node272",
    component:node272,
  },
  {
    path: "/nicapsc-noc/node273",
    component:node273,
  },
  {
    path: "/nicapsc-noc/node381",
    component: node381,
  },
  {
    path: "/nicapsc-noc/node382",
    component: node382,
  },
  {
    path: "/nicapsc-noc/node383",
    component: node383,
  },
  {
    path: "/nicapsc-noc/node384",
    component: node384,
  },
  {
    path: "/nicapsc-noc/node385",
    component: node385,
  },
  {
    path: "/nicapsc-noc/node386",
    component: node386,
  },
  {
    path: "/nicapsc-noc/node387",
    component: node387,
  },



  {
    path: "/schemes",
    component: Schemes,
  },
  {
    path: "/organisation",
    component:organisation,
  },
  {
    path: "/ititrade",
    component:ITITrade,
  },




 
 
  {
    path: "/node210",
    component: node210,
  },
 
 
  {
    path: "/ititrade",
    component:NKNTrade,
  },
  {
    path: "/cloud",
    component: Cloud,
  },


  {
    path: "/nicapsc-iti/about",
    component: about,
  },
  {
    path: "/nicapsc-iti/rti",
    component: rti,
  },
  {
    path: "/nicapsc-iti/contactUs",
    component:contactUs,
  },
  {
    path: "/nicapsc-iti/node201",
    component: node201,
  },
  {
    path: "/nicapsc-iti/node211",
    component: node211,
  },
  {
    path: "/nicapsc-iti/organisation",
    component:organisation,
  },
  {
    path: "/nicapsc-iti/ititrade",
    component:ITITrade,
  },

  {
    path: "/nicapsc-iti/node351", //about the strive
    component: node351,
  },
  {
    path:"/nicapsc-iti/node302", // disclosure management
    component:node302, 
  },
  {
    path: "/nicapsc-iti/node303", // registration
    component:node303,
  },
  {
    path: "/nicapsc-iti/node271", // Craftsmen
    component: node271,
  },
  {
    path: "/nicapsc-iti/node272", //Apprenticeship
    component: node272,
  },
  {
    path: "/nicapsc-iti/node273", //CentreofExcellence
    component:node273,
  },



  {
    path: "/nicapsc-noc/about",
    component: about,
  },
  {
    path: "/nicapsc-noc/rti",
    component: rti,
  },
  {
    path: "/nicapsc-noc/contactUs",
    component:contactUs,
  },
 

 
  {
    path: "/nicapsc-noc/node210",
    component:node210,
  },
  {
    path: "/nicapsc-iti/node210",
    component: node210,
  },

  {
    path: "/nicapsc-noc/ititrade",
    component:NKNTrade,
  },
  {
    path: "/nicapsc-noc/cloud",
    component: Cloud,
  },

  {
    path: "/node801",
    component:node801,
  },
   {
    path: "/eshram-boc/node802",
    component:node802,
  },
  {
    path: "/nicapsc-ayush/about",
    component: about,
  },



];


export default routesConfig;