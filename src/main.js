// ../main.js

/**
 * RaiseJS / Raise your frontend projects to the next level! Kickstart your next project with a lightweight, yet powerful javascript base.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

/**
 * RaiseJS/core is a foundation for your RaiseJS frontend projects. To embed it, you should copy the min.core.js file in the same directory.
 * This file is for development purposes only - it is not minified, has comments and is written in ES6.
 * The RaiseJS project has a focus on offering (!) lightweight libraries. Further information can be found on our webpage.
 * There is a polyfilled version availible at min.poly.core.js - it is compiled to ES2015.
 */

// This project is heavily based on ki.js - Thanks!

// This is a self-invoking, anonymous function. Any variable and local function used in here stays in it;
(function(doc, win, empty) {
	"use strict"; // Make sure we´re not doing anything wrong
	function DollarSelect(domject) { // This is the selector constructor, used to create an object with the selected DOM Nodes
		empty.push.apply(
			this,
			domject.nodeType ? [domject] : doc.querySelectorAll(domject)
		);
	}
	function DollarGeneric() { // This is the generic constructor, used to create an object with selector-unspecific functions
		empty.push.apply(this);
	}
	win.$ = function(selector) { // This is the $ function itself. It´s accessible since it´s a window property
		return selector === undefined || selector === null || selector === "" // Check if a selector is set
			? new DollarGeneric() // If not, use the generic constructor
			: new DollarSelect(selector); // If yes, use the selector construct
	};
	win.$generic = function() { // Make the generic constructor availible from the outside stand-alone
		return new DollarGeneric();
	};
	DollarSelect.prototype = $.fn = { // The default prototype for the selector construct. Expandable by manipulating the $.fn object
		length: 0,
		each: function(el, i, arr) {
			empty.forEach.call(this, el, i, arr);
			return this;
		}
	};
	DollarGeneric.prototype = $generic.fn = { // The default prototype for the generic construct. Expandable by manipulating the $generic.fn object
		ready: function(fn) {
			(doc.attachEvent
			? doc.readyState === "complete"
			: doc.readyState !== "loading")
				? fn()
				: doc.addEventListener("DOMContentLoaded", fn);
			return this;
		}
	};
})(document, window, []);
