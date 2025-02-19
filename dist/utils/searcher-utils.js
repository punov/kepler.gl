"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSearcher = simpleSearcher;

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

/* eslint-disable callback-return */
function simpleSearcher(autofillValues, page, query, cb) {
  var regex = new RegExp(query, 'i');
  var foundQuery = false;
  var matches = (autofillValues || []).filter(function _filter(item) {
    var tag = item.name;
    foundQuery = foundQuery || tag === query;
    return tag && regex.test(tag);
  });

  if (cb) {
    cb(matches);
  }

  return matches;
}
/* eslint-enable callback-return */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zZWFyY2hlci11dGlscy5qcyJdLCJuYW1lcyI6WyJzaW1wbGVTZWFyY2hlciIsImF1dG9maWxsVmFsdWVzIiwicGFnZSIsInF1ZXJ5IiwiY2IiLCJyZWdleCIsIlJlZ0V4cCIsImZvdW5kUXVlcnkiLCJtYXRjaGVzIiwiZmlsdGVyIiwiX2ZpbHRlciIsIml0ZW0iLCJ0YWciLCJuYW1lIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ08sU0FBU0EsY0FBVCxDQUF3QkMsY0FBeEIsRUFBd0NDLElBQXhDLEVBQThDQyxLQUE5QyxFQUFxREMsRUFBckQsRUFBeUQ7QUFDOUQsTUFBSUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBV0gsS0FBWCxFQUFrQixHQUFsQixDQUFaO0FBQ0EsTUFBSUksVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQUNQLGNBQWMsSUFBSSxFQUFuQixFQUF1QlEsTUFBdkIsQ0FBOEIsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDakUsUUFBSUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLElBQWY7QUFDQU4sSUFBQUEsVUFBVSxHQUFHQSxVQUFVLElBQUlLLEdBQUcsS0FBS1QsS0FBbkM7QUFDQSxXQUFPUyxHQUFHLElBQUlQLEtBQUssQ0FBQ1MsSUFBTixDQUFXRixHQUFYLENBQWQ7QUFDRCxHQUphLENBQWQ7O0FBTUEsTUFBSVIsRUFBSixFQUFRO0FBQ05BLElBQUFBLEVBQUUsQ0FBQ0ksT0FBRCxDQUFGO0FBQ0Q7O0FBRUQsU0FBT0EsT0FBUDtBQUNEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYWxsYmFjay1yZXR1cm4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVTZWFyY2hlcihhdXRvZmlsbFZhbHVlcywgcGFnZSwgcXVlcnksIGNiKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocXVlcnksICdpJyk7XG4gIHZhciBmb3VuZFF1ZXJ5ID0gZmFsc2U7XG4gIHZhciBtYXRjaGVzID0gKGF1dG9maWxsVmFsdWVzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gX2ZpbHRlcihpdGVtKSB7XG4gICAgdmFyIHRhZyA9IGl0ZW0ubmFtZTtcbiAgICBmb3VuZFF1ZXJ5ID0gZm91bmRRdWVyeSB8fCB0YWcgPT09IHF1ZXJ5O1xuICAgIHJldHVybiB0YWcgJiYgcmVnZXgudGVzdCh0YWcpO1xuICB9KTtcblxuICBpZiAoY2IpIHtcbiAgICBjYihtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuLyogZXNsaW50LWVuYWJsZSBjYWxsYmFjay1yZXR1cm4gKi9cbiJdfQ==