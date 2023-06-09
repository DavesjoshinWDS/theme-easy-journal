/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/tailwind.scss":
/*!********************************!*\
  !*** ./src/scss/tailwind.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/blocks/index.js":
/*!********************************!*\
  !*** ./src/js/blocks/index.js ***!
  \********************************/
/***/ (() => {

/**
 * Gutenberg Block JS
 *
 * Import JS for Gutenberg blocks.
 */

// Custom Gutenberg Blocks.
// import './wd';
// import './acf';


/***/ }),

/***/ "./src/js/global/index.js":
/*!********************************!*\
  !*** ./src/js/global/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-enabled */ "./src/js/global/js-enabled.js");
/* harmony import */ var _js_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_enabled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _window_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window-ready */ "./src/js/global/window-ready.js");
/* harmony import */ var _window_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_window_ready__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Global JS
 *
 * Import JS that applies globally.
 */





/***/ }),

/***/ "./src/js/global/js-enabled.js":
/*!*************************************!*\
  !*** ./src/js/global/js-enabled.js ***!
  \*************************************/
/***/ (() => {

/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace( 'no-js', 'js' );


/***/ }),

/***/ "./src/js/global/window-ready.js":
/*!***************************************!*\
  !*** ./src/js/global/window-ready.js ***!
  \***************************************/
/***/ (() => {

/**
 * File window-ready.js
 *
 * Add a "ready" class to <body> when window is ready.
 *
 * @author Greg Rickaby, Corey Collins
 * @since January 31, 2020
 */
function wdsWindowReady() {
	document.body.classList.add( 'ready' );
}

if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	wdsWindowReady();
} else {
	document.addEventListener( 'DOMContentLoaded', wdsWindowReady );
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/js/global/index.js");
/* harmony import */ var _template_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-tags */ "./src/js/template-tags/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/js/templates/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks */ "./src/js/blocks/index.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Site JS
 */







/***/ }),

/***/ "./src/js/template-tags/index.js":
/*!***************************************!*\
  !*** ./src/js/template-tags/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu */ "./src/js/template-tags/mobile-menu.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/template-tags/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_primary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-primary */ "./src/js/template-tags/navigation-primary.js");
/* harmony import */ var _navigation_primary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_primary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _off_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./off-canvas */ "./src/js/template-tags/off-canvas.js");
/* harmony import */ var _off_canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_off_canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table */ "./src/js/template-tags/table.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video */ "./src/js/template-tags/video.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_video__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Template Tag JS
 *
 * JS for functions in template-tags.php.
 */









/***/ }),

/***/ "./src/js/template-tags/mobile-menu.js":
/*!*********************************************!*\
  !*** ./src/js/template-tags/mobile-menu.js ***!
  \*********************************************/
/***/ (() => {

/**
 * File: mobile-menu.js
 *
 * Create an accordion style dropdown.
 */

// Make sure everything is loaded first.
if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	wdsMobileMenu();
} else {
	document.addEventListener( 'DOMContentLoaded', wdsMobileMenu );
}

/**
 * Handle our mobile menus.
 *
 * @author Corey Collins
 * @since January 31, 2020
 */
function wdsMobileMenu() {
	const subMenuParentItem = document.querySelectorAll(
		'.mobile-menu li.menu-item-has-children, .utility-navigation li.menu-item-has-children'
	);

	subMenuParentItem.forEach( ( subMenuParent ) => {
		const menuItem = subMenuParent.querySelector( 'a' );

		menuItem.innerHTML +=
			'<button type="button" aria-expanded="false" class="parent-indicator caret-down" aria-label="Open submenu"><span class="down-arrow"></span></button>';

		const subMenuTrigger = document.querySelectorAll( '.parent-indicator' );

		subMenuTrigger.forEach( ( trigger ) => {
			trigger.addEventListener( 'click', toggleSubmenu );
		} );
	} );

	/**
	 * Open/Close a submenu.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function toggleSubmenu( event ) {
		event.preventDefault();

		const targetElement = event.target,
			targetParent = targetElement.parentNode.closest(
				'.menu-item-has-children'
			),
			subMenu = targetParent.querySelector( 'ul.sub-menu' );

		closeAllSubmenus( targetParent );
		maybeOpenSubmenu( targetParent, subMenu );
	}

	/**
	 * Open a submenu.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} parent  The parent menu.
	 * @param {Object} subMenu The submenu.
	 */
	function maybeOpenSubmenu( parent, subMenu ) {
		if ( parent.classList.contains( 'is-visible' ) ) {
			closeSubmenu( parent, subMenu );
			return;
		}

		// Expand the list menu item, and set the corresponding button aria to true.
		parent.classList.add( 'is-visible' );
		parent
			.querySelector( '.parent-indicator' )
			.setAttribute( 'aria-expanded', true );

		// Slide the menu in.
		subMenu.classList.add( 'is-visible', 'animated', 'slideInLeft' );
	}

	/**
	 * Close a submenu.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} parent  The parent item.
	 * @param {Object} subMenu The submenu.
	 */
	function closeSubmenu( parent, subMenu ) {
		parent.classList.remove( 'is-visible' );
		parent
			.querySelector( '.parent-indicator' )
			.setAttribute( 'aria-expanded', false );
		subMenu.classList.remove( 'is-visible', 'animated', 'slideInLeft' );
	}

	/**
	 * Close all open submenus on the same
	 * level/hierarchys the menu we're trying
	 * to open.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} targetParent The target parent item.
	 */
	function closeAllSubmenus( targetParent ) {
		const submenuSiblings = getSiblings( targetParent );

		submenuSiblings.forEach( ( sibling ) => {
			sibling.classList.remove( 'is-visible' );

			if ( sibling.querySelector( '.parent-indicator' ) ) {
				sibling
					.querySelector( '.parent-indicator' )
					.setAttribute( 'aria-expanded', false );
			}

			if ( sibling.querySelector( '.sub-menu' ) ) {
				sibling
					.querySelector( '.sub-menu' )
					.classList.remove(
						'is-visible',
						'animated',
						'slideInLeft'
					);
			}
		} );
	}

	/**
	 * Find siblings of an item.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} element The element being opened.
	 * @return {Array} List of siblings.
	 */
	const getSiblings = function ( element ) {
		const siblings = [];
		let sibling = element.parentNode.firstChild;

		while ( sibling ) {
			if ( 1 === sibling.nodeType && sibling !== element ) {
				siblings.push( sibling );
			}

			sibling = sibling.nextSibling;
		}

		return siblings;
	};
}


/***/ }),

/***/ "./src/js/template-tags/modal.js":
/*!***************************************!*\
  !*** ./src/js/template-tags/modal.js ***!
  \***************************************/
/***/ (() => {

/**
 * File modal.js
 *
 * Deal with multiple modals and their media.
 */

// Make sure everything is loaded first.
if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	wdsModals();
} else {
	document.addEventListener( 'DOMContentLoaded', wdsModals );
}

/**
 * Fire off our modal functions.
 *
 * @author Corey Collins
 * @since January 31, 2020
 */
function wdsModals() {
	const modalTrigger = document.querySelectorAll( '.modal-trigger' ),
		modalClose = document.querySelectorAll( '.modal .close' ),
		pageBody = document.body;

	// Loop through each modal trigger on the page and add a listener for its header.
	modalTrigger.forEach( ( trigger ) => {
		trigger.addEventListener( 'click', openModal );
	} );

	modalClose.forEach( ( trigger ) => {
		trigger.addEventListener( 'click', closeModalOnCloseButton );
	} );

	pageBody.addEventListener( 'keydown', closeOnEscape );
	pageBody.addEventListener( 'click', closeOnClick );

	/**
	 * Open a modal when we trigger it.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function openModal( event ) {
		const thisTarget = event.target,
			thisModalTarget = thisTarget.getAttribute( 'data-target' ),
			thisModal = document.querySelector( thisModalTarget ),
			focusableChildren =
				thisModal.querySelectorAll( 'a, input, button' );

		pageBody.classList.add( 'modal-open' );
		thisModal.classList.add( 'modal-open' );
		thisModal.setAttribute( 'aria-hidden', false );

		if ( 0 < focusableChildren.length ) {
			focusableChildren[ 0 ].focus();
		}
	}

	/**
	 * Close a modal when we hit the close button.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function closeModalOnCloseButton( event ) {
		const thisTarget = event.target,
			thisModalTarget = thisTarget.getAttribute( 'data-target' ),
			thisModal = document.querySelector( thisModalTarget ),
			modalIframe = thisModal.querySelector( 'iframe' );

		pageBody.classList.remove( 'modal-open' );
		thisModal.classList.remove( 'modal-open' );
		thisModal.setAttribute( 'aria-hidden', true );

		if ( modalIframe ) {
			const iframeURL = modalIframe.getAttribute( 'src' );

			modalIframe.setAttribute( 'src', '' );
			modalIframe.setAttribute( 'src', iframeURL );
		}
	}

	/**
	 * Close the modal when we hit the escape key.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function closeOnEscape( event ) {
		if ( ! pageBody.classList.contains( 'modal-open' ) ) {
			return;
		}

		const currentlyOpenModal =
				document.querySelector( '.modal.modal-open' ),
			modalIframe = currentlyOpenModal.querySelector( 'iframe' );

		if ( 27 === event.keyCode ) {
			currentlyOpenModal.setAttribute( 'aria-hidden', true );
			currentlyOpenModal.classList.remove( 'modal-open' );
			pageBody.classList.remove( 'modal-open' );

			if ( modalIframe ) {
				const iframeURL = modalIframe.getAttribute( 'src' );
				modalIframe.setAttribute( 'src', '' );
				modalIframe.setAttribute( 'src', iframeURL );
			}
		}
	}

	/**
	 * Close the modal when we hit outside of the modal area.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function closeOnClick( event ) {
		const clickedElement = event.target;

		if ( pageBody.classList.contains( 'modal-open' ) ) {
			if ( clickedElement.classList.contains( 'modal-open' ) ) {
				const modalIframe = clickedElement.querySelector( 'iframe' );

				pageBody.classList.remove( 'modal-open' );
				clickedElement.classList.remove( 'modal-open' );
				clickedElement.setAttribute( 'aria-hidden', true );

				if ( modalIframe ) {
					const iframeURL = modalIframe.getAttribute( 'src' );

					modalIframe.setAttribute( 'src', '' );
					modalIframe.setAttribute( 'src', iframeURL );
				}
			}
		}
	}
}


/***/ }),

/***/ "./src/js/template-tags/navigation-primary.js":
/*!****************************************************!*\
  !*** ./src/js/template-tags/navigation-primary.js ***!
  \****************************************************/
/***/ (() => {

/**
 * File: navigation-primary.js
 *
 * Helpers for the primary navigation.
 */

( function () {
	const subMenuParentItem = document.querySelectorAll(
		'.main-navigation .menu-item-has-children'
	);

	document.addEventListener( 'DOMContentLoaded', addDownArrow );
	document.addEventListener( 'DOMContentLoaded', toggleFocusClass );

	/**
	 * Adds the down arrow to parent menu items.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 */
	function addDownArrow() {
		subMenuParentItem.forEach( ( parentItem ) => {
			const menuItem = parentItem.querySelector( 'a' );
			menuItem.innerHTML +=
				'<span class="caret-down" aria-hidden="true"></span>';
		} );
	}

	/**
	 * Adds event listeners for tabbing in and out of parent items.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 */
	function toggleFocusClass() {
		subMenuParentItem.forEach( ( parentItem ) => {
			parentItem.addEventListener( 'focusin', toggleIn );
			parentItem.addEventListener( 'focusout', toggleOut );
		} );
	}

	/**
	 * Handle toggling a parent menu on.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function toggleIn( event ) {
		const parentMenuItems = getParents(
			event.target.parentNode,
			'.menu-item-has-children'
		);
		parentMenuItems.forEach( ( parentItem ) => {
			parentItem.classList.add( 'focus' );
		} );
	}

	/**
	 * Handle toggling a parent menu off.
	 *
	 * @since January 31, 2020
	 * @author Corey Collins
	 * @param {Object} event The triggered event.
	 */
	function toggleOut( event ) {
		const parentMenuItems = getParents(
			event.target.parentNode,
			'.menu-item-has-children'
		);
		parentMenuItems.forEach( ( parentItem ) => {
			parentItem.classList.remove( 'focus' );
		} );
	}

	/**
	 * Get all of the parents for a matching element and selector.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @see https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/#getting-all-matches-up-the-tree
	 * @param {Object} elem     The parent menu item.
	 * @param {string} selector The CSS class of the element.
	 * @return {Array} Parents.
	 */
	const getParents = function ( elem, selector ) {
		// Element.matches() polyfill.
		if ( ! Element.prototype.matches ) {
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function ( s ) {
					const matches = (
						this.document || this.ownerDocument
					).querySelectorAll( s );
					let i = matches.length;
					while ( 0 >= --i && matches.item( i ) !== this ) {}
					return -1 > i;
				};
		}

		// Setup parents array.
		const parents = [];

		// Get matching parent elements.
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			// Add matching parents to array.
			if ( selector ) {
				if ( elem.matches( selector ) ) {
					parents.push( elem );
				}
			} else {
				parents.push( elem );
			}
		}

		return parents;
	};
} )();


/***/ }),

/***/ "./src/js/template-tags/off-canvas.js":
/*!********************************************!*\
  !*** ./src/js/template-tags/off-canvas.js ***!
  \********************************************/
/***/ (() => {

/**
 * File: off-canvas.js
 *
 * Help deal with the off-canvas mobile menu.
 */

// Make sure everything is loaded first.
if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	wdsOffCanvas();
} else {
	document.addEventListener( 'DOMContentLoaded', wdsOffCanvas );
}

/**
 * Kick off our off canvas functions.
 *
 * @author Corey Collins
 * @since January 31, 2020
 */
function wdsOffCanvas() {
	const offCanvasScreen = document.querySelector( '.off-canvas-screen' );

	if ( ! offCanvasScreen ) {
		return;
	}

	const offCanvasContainer = document.querySelector(
			'.off-canvas-container'
		),
		offCanvasOpen = document.querySelector( '.off-canvas-open' );

	offCanvasOpen.addEventListener( 'click', toggleOffCanvas );
	offCanvasScreen.addEventListener( 'click', closeOffCanvas );
	document.body.addEventListener( 'keydown', closeOnEscape );

	/**
	 * Close everything when we hit the escape key.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The event trigger.
	 */
	function closeOnEscape( event ) {
		if ( 27 === event.keyCode ) {
			closeOffCanvas();
		}
	}

	/**
	 * Handle closing the off-canvas overlay.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 */
	function closeOffCanvas() {
		offCanvasContainer.classList.remove( 'is-visible' );
		offCanvasOpen.classList.remove( 'is-visible' );
		offCanvasScreen.classList.remove( 'is-visible' );

		offCanvasContainer.setAttribute( 'aria-hidden', true );
		offCanvasOpen.setAttribute( 'aria-expanded', false );
	}

	/**
	 * Toggle the display of the off-canvas overlay.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 */
	function toggleOffCanvas() {
		if ( 'true' === offCanvasOpen.getAttribute( 'aria-expanded' ) ) {
			closeOffCanvas();
		} else {
			openOffCanvas();
		}
	}

	/**
	 * Handle opening the off-canvas overlay.
	 *
	 * @author Corey Collins
	 * @since January 31, 2020
	 */
	function openOffCanvas() {
		offCanvasContainer.classList.add( 'is-visible' );
		offCanvasOpen.classList.add( 'is-visible' );
		offCanvasScreen.classList.add( 'is-visible' );

		offCanvasContainer.setAttribute( 'aria-hidden', false );
		offCanvasOpen.setAttribute( 'aria-expanded', true );
	}
}


/***/ }),

/***/ "./src/js/template-tags/table.js":
/*!***************************************!*\
  !*** ./src/js/template-tags/table.js ***!
  \***************************************/
/***/ (() => {

/**
 * File table.js
 *
 * Make tables responsive.
 *
 * @author Haris Zulfiqar, Corey Collins
 * @since January 31, 2020
 */

( function () {
	document.querySelectorAll( 'table' ).forEach( ( table ) => {
		const tableHeaders = table.querySelectorAll( 'th' );

		// Bail if our table has no headers set.
		if ( 0 === tableHeaders.length ) {
			return;
		}

		const tableRow = table.querySelectorAll( 'tbody tr' );

		tableRow.forEach( ( row ) => {
			const tableCell = row.querySelectorAll( 'td' );

			tableCell.forEach( ( cell, index ) => {
				if ( tableHeaders[ index ].textContent ) {
					cell.setAttribute(
						'data-label',
						tableHeaders[ index ].textContent
					);
				}
			} );
		} );
	} );
} )();


/***/ }),

/***/ "./src/js/template-tags/video.js":
/*!***************************************!*\
  !*** ./src/js/template-tags/video.js ***!
  \***************************************/
/***/ (() => {

/**
 * File video.js
 *
 * Deal with video playback.
 */

( function () {
	const videoButtons = document.querySelectorAll( '.video-toggle' );

	// Toggle playback on background videos.
	videoButtons.forEach( ( videoButton ) => {
		videoButton.addEventListener( 'click', toggleVideoPlayback );
	} );

	/**
	 * Toggle video playback when the button is pressed.
	 *
	 * @author Jo Murgel, Corey Collins
	 * @since January 31, 2020
	 * @param {Object} event The triggered event.
	 */
	function toggleVideoPlayback( event ) {
		const targetParent = event.target.parentNode,
			targetElement = targetParent.querySelector( '.video-background' );

		targetParent.classList.toggle( 'video-toggled' );

		if ( targetParent.classList.contains( 'video-toggled' ) ) {
			targetElement.pause();
		} else {
			targetElement.play();
		}
	}
} )();


/***/ }),

/***/ "./src/js/templates/index.js":
/*!***********************************!*\
  !*** ./src/js/templates/index.js ***!
  \***********************************/
/***/ (() => {

/**
 * Template JS
 *
 * JS for WordPress template files.
 * See https://developer.wordpress.org/themes/basics/template-files/.
 */

// import './template-name';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_tailwind_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/tailwind.scss */ "./src/scss/tailwind.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/index */ "./src/js/index.js");




})();

/******/ })()
;
//# sourceMappingURL=index.js.map