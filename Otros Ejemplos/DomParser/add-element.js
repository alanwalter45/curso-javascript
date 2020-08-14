"use strict";

(function () {
    const createNode = html => new DOMParser().parseFromString(html,'text/html').body.lastChild;
    document.body.appendChild(createNode('<section><p>My Text....</p></section><section><p>Other Text...</p></section>'));

})();