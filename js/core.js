/** 
 * RaiseJS / Raise your frontend projects to the next level! Kickstart your next project with a lightweight, yet powerful javascript base.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */
"use strict";

(function (doc, win, empty) {
  "use strict";

  function DollarSelect(domject) {
    empty.push.apply(this, domject.nodeType ? [domject] : doc.querySelectorAll(domject));
  }

  function DollarGeneric() {
    empty.push.apply(this);
  }

  win.$ = function (selector) {
    return selector === undefined || selector === null || selector === "" ? new DollarGeneric() : new DollarSelect(selector);
  };

  win.$generic = function () {
    return new DollarGeneric();
  };

  DollarSelect.prototype = $.fn = {
    length: 0,
    each: function each(el, i, arr) {
      empty.forEach.call(this, el, i, arr);
      return this;
    }
  };
  DollarGeneric.prototype = $generic.fn = {
    ready: function ready(fn) {
      (doc.attachEvent ? doc.readyState === "complete" : doc.readyState !== "loading") ? fn() : doc.addEventListener("DOMContentLoaded", fn);
      return this;
    }
  };
})(document, window, []);
