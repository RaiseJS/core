/** 
 * RaiseJS / Raise your frontend projects to the next level! Kickstart your next project with a lightweight, yet powerful javascript base.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */
(function(b,e,d){function f(a){d.push.apply(this,a.nodeType?[a]:b.querySelectorAll(a))}function c(){d.push.apply(this)}e.$=function(a){return void 0===a||null===a||""===a?new c:new f(a)};e.$generic=function(){return new c};f.prototype=$.fn={length:0,each:function(a,b,c){d.forEach.call(this,a,b,c);return this}};c.prototype=$generic.fn={ready:function(a){(b.attachEvent?"complete"===b.readyState:"loading"!==b.readyState)?a():b.addEventListener("DOMContentLoaded",a);return this}}})(document,window,[]);
