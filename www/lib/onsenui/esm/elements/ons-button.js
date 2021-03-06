'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseButton = require('./base/base-button');

var _baseButton2 = _interopRequireDefault(_baseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright 2013-2015 ASIAL CORPORATION
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * @element ons-button
 * @category form
 * @modifier outline
 *   [en]Button with outline and transparent background[/en]
 *   [ja]????????????????????????????????????????????????????????????[/ja]
 * @modifier light
 *   [en]Button that doesn't stand out.[/en]
 *   [ja]?????????????????????????????????????????????[/ja]
 * @modifier quiet
 *   [en]Button with no outline and or background..[/en]
 *   [ja]?????????????????????????????????????????????????????????????????????[/ja]
 * @modifier cta
 *   [en]Button that really stands out.[/en]
 *   [ja]???????????????????????????????????????[/ja]
 * @modifier large
 *   [en]Large button that covers the width of the screen.[/en]
 *   [ja]??????????????????????????????????????????????????????????????????[/ja]
 * @modifier large--quiet
 *   [en]Large quiet button.[/en]
 *   [ja]???????????????????????????quiet??????????????????????????????[/ja]
 * @modifier large--cta
 *   [en]Large call to action button.[/en]
 *   [ja]???????????????????????????cta??????????????????????????????[/ja]
 * @modifier material
 *   [en]Material Design button[/en]
 *   [ja]???????????????????????????????????????[/ja]
 * @modifier material--flat
 *   [en]Material Design flat button[/en]
 *   [ja]???????????????????????????????????????????????????[/ja]
 * @description
 *   [en]
 *     Button component. If you want to place a button in a toolbar, use `<ons-toolbar-button>` or `<ons-back-button>` instead.
 *
 *     Will automatically display as a Material Design button with a ripple effect on Android.
 *   [/en]
 *   [ja]??????????????????????????????????????????????????????????????????????????????????????????ons-toolbar-button????????????ons-back-button??????????????????????????????????????????[/ja]
 * @codepen hLayx
 * @tutorial vanilla/Reference/button
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier??????????????????[/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-button modifier="large--cta">
 *   Tap Me
 * </ons-button>
 */

var ButtonElement = function (_BaseButtonElement) {
  _inherits(ButtonElement, _BaseButtonElement);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: '_scheme',


    /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the button.[/en]
     *  [ja]???????????????????????????????????????[/ja]
     */

    /**
     * @attribute ripple
     * @description
     *  [en]If this attribute is defined, the button will have a ripple effect.[/en]
     *  [ja][/ja]
     */

    /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]??????????????????????????????????????????????????????[/ja]
     */

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the button is disabled or not.[/en]
     *   [ja]?????????????????????????????????`true`???[/ja]
     */

    get: function get() {
      return { '': 'button--*' };
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return 'button';
    }
  }]);

  return ButtonElement;
}(_baseButton2.default);

exports.default = ButtonElement;


_elements2.default.Button = ButtonElement;
customElements.define('ons-button', ButtonElement);