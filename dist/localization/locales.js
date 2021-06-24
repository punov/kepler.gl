"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_CODES = exports.LOCALES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var LOCALES = {
  en: 'English',
  fi: 'Suomi',
  pt: 'Português',
  es: 'Español',
  ca: 'Català',
  ja: '日本語'
};
/**
 * Localization can be passed to `KeplerGl` via uiState `locale`.
 * Available languages are `en` and `fi`. Default language is `en`
 * @constant
 * @public
 * @example
 * ```js
 * import {combineReducers} from 'redux';
 * import {LOCALE_CODES} from 'kepler.gl/localization/locales';
 *
 * const customizedKeplerGlReducer = keplerGlReducer
 *   .initialState({
 *     uiState: {
 *       // use Finnish locale
 *       locale: LOCALE_CODES.fi
 *     }
 *   });
 *
 * ```
 */

exports.LOCALES = LOCALES;
var LOCALE_CODES = Object.keys(LOCALES).reduce(function (acc, key) {
  return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, key));
}, {});
exports.LOCALE_CODES = LOCALE_CODES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vbG9jYWxlcy5qcyJdLCJuYW1lcyI6WyJMT0NBTEVTIiwiZW4iLCJmaSIsInB0IiwiZXMiLCJjYSIsImphIiwiTE9DQUxFX0NPREVTIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjYyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEVBQUUsRUFBRSxTQURpQjtBQUVyQkMsRUFBQUEsRUFBRSxFQUFFLE9BRmlCO0FBR3JCQyxFQUFBQSxFQUFFLEVBQUUsV0FIaUI7QUFJckJDLEVBQUFBLEVBQUUsRUFBRSxTQUppQjtBQUtyQkMsRUFBQUEsRUFBRSxFQUFFLFFBTGlCO0FBTXJCQyxFQUFBQSxFQUFFLEVBQUU7QUFOaUIsQ0FBaEI7QUFTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxPQUFaLEVBQXFCVSxNQUFyQixDQUE0QixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSx5Q0FBbUJELEdBQW5CLDRDQUF5QkMsR0FBekIsRUFBK0JBLEdBQS9CO0FBQUEsQ0FBNUIsRUFBa0UsRUFBbEUsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5leHBvcnQgY29uc3QgTE9DQUxFUyA9IHtcbiAgZW46ICdFbmdsaXNoJyxcbiAgZmk6ICdTdW9taScsXG4gIHB0OiAnUG9ydHVndcOqcycsXG4gIGVzOiAnRXNwYcOxb2wnLFxuICBjYTogJ0NhdGFsw6AnLFxuICBqYTogJ+aXpeacrOiqnidcbn07XG5cbi8qKlxuICogTG9jYWxpemF0aW9uIGNhbiBiZSBwYXNzZWQgdG8gYEtlcGxlckdsYCB2aWEgdWlTdGF0ZSBgbG9jYWxlYC5cbiAqIEF2YWlsYWJsZSBsYW5ndWFnZXMgYXJlIGBlbmAgYW5kIGBmaWAuIERlZmF1bHQgbGFuZ3VhZ2UgaXMgYGVuYFxuICogQGNvbnN0YW50XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG4gKiBpbXBvcnQge0xPQ0FMRV9DT0RFU30gZnJvbSAna2VwbGVyLmdsL2xvY2FsaXphdGlvbi9sb2NhbGVzJztcbiAqXG4gKiBjb25zdCBjdXN0b21pemVkS2VwbGVyR2xSZWR1Y2VyID0ga2VwbGVyR2xSZWR1Y2VyXG4gKiAgIC5pbml0aWFsU3RhdGUoe1xuICogICAgIHVpU3RhdGU6IHtcbiAqICAgICAgIC8vIHVzZSBGaW5uaXNoIGxvY2FsZVxuICogICAgICAgbG9jYWxlOiBMT0NBTEVfQ09ERVMuZmlcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfQ09ERVMgPSBPYmplY3Qua2V5cyhMT0NBTEVTKS5yZWR1Y2UoKGFjYywga2V5KSA9PiAoey4uLmFjYywgW2tleV06IGtleX0pLCB7fSk7XG4iXX0=