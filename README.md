# Woothee javascript

The Javascript implementation of Project Woothee, which is multi-language user-agent strings parsers.

https://github.com/woothee/woothee

## Installation

    $ npm install woothee

Or, download `release/woothee.js` and put it on your own directory for js files.

## Usage

### Parsing user-agent

In html, load `woothee.js` and call `woothee.parse()` directly.

```html
<script src="./your/own/path/woothee.js"></script>
<script>
woothee.parse('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)')
// => {name: 'Internet Explorer', category: 'pc', os: 'Windows 7', version: '8.0', vendor: 'Microsoft', os_version: 'NT 6.1'}
</script>
```

In node.js code, require 'woothee' and call its `parse()`.
```javascript
var woothee = require('woothee');
woothee.parse('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)')
// => {name: 'Internet Explorer', category: 'pc', os: 'Windows 7', version: '8.0', vendor: 'Microsoft', os_version: 'NT 6.1'}
```

Parse user-agent string and returns a object with keys `name`, `category`, `os`, `version` and `vendor`.

For unknown user-agent (or partially failed to parse), result objects may have value 'UNKNOWN'.

* `category`
 * labels of user terminal type, one of 'pc', 'smartphone', 'mobilephone', 'appliance', 'crawler' or 'misc' (or 'UNKNOWN')
* `name`
 * the name of browser, like 'Internet Explorer', 'Firefox', 'GoogleBot'
* `version`
 * version string, like '8.0' for IE, '9.0.1' for Firefix, '0.2.149.27' for Chrome, and so on
* `os`
 * ex: 'Windows 7', 'Mac OSX', 'iPhone', 'iPad', 'Android'
 * This field used to indicate cellar phone carrier for category 'mobilephone'
* `vendor`
 * optional field, shows browser vendor
* `os_version`
 * optional field, shows version of operating systems

### Finding crawlers (almost all, not all) in fast

```javascript
woothee.is_crawler('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)')
 // => false
```

Try to see useragent's category is 'crawler' or not, by casual(fast) method. Minor case of crawlers is not tested in this method. To check crawler strictly, use `woothee.parse(str).category === 'crawler'`.

* * * * *

## Authors

* TAGOMORI Satoshi <tagomoris@gmail.com>

## License

Copyright 2012- TAGOMORI Satoshi (tagomoris)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
