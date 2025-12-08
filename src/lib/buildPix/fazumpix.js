var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var crcTable_1 = [
    0x0000,
    0x1021,
    0x2042,
    0x3063,
    0x4084,
    0x50a5,
    0x60c6,
    0x70e7,
    0x8108,
    0x9129,
    0xa14a,
    0xb16b,
    0xc18c,
    0xd1ad,
    0xe1ce,
    0xf1ef,
    0x1231,
    0x0210,
    0x3273,
    0x2252,
    0x52b5,
    0x4294,
    0x72f7,
    0x62d6,
    0x9339,
    0x8318,
    0xb37b,
    0xa35a,
    0xd3bd,
    0xc39c,
    0xf3ff,
    0xe3de,
    0x2462,
    0x3443,
    0x0420,
    0x1401,
    0x64e6,
    0x74c7,
    0x44a4,
    0x5485,
    0xa56a,
    0xb54b,
    0x8528,
    0x9509,
    0xe5ee,
    0xf5cf,
    0xc5ac,
    0xd58d,
    0x3653,
    0x2672,
    0x1611,
    0x0630,
    0x76d7,
    0x66f6,
    0x5695,
    0x46b4,
    0xb75b,
    0xa77a,
    0x9719,
    0x8738,
    0xf7df,
    0xe7fe,
    0xd79d,
    0xc7bc,
    0x48c4,
    0x58e5,
    0x6886,
    0x78a7,
    0x0840,
    0x1861,
    0x2802,
    0x3823,
    0xc9cc,
    0xd9ed,
    0xe98e,
    0xf9af,
    0x8948,
    0x9969,
    0xa90a,
    0xb92b,
    0x5af5,
    0x4ad4,
    0x7ab7,
    0x6a96,
    0x1a71,
    0x0a50,
    0x3a33,
    0x2a12,
    0xdbfd,
    0xcbdc,
    0xfbbf,
    0xeb9e,
    0x9b79,
    0x8b58,
    0xbb3b,
    0xab1a,
    0x6ca6,
    0x7c87,
    0x4ce4,
    0x5cc5,
    0x2c22,
    0x3c03,
    0x0c60,
    0x1c41,
    0xedae,
    0xfd8f,
    0xcdec,
    0xddcd,
    0xad2a,
    0xbd0b,
    0x8d68,
    0x9d49,
    0x7e97,
    0x6eb6,
    0x5ed5,
    0x4ef4,
    0x3e13,
    0x2e32,
    0x1e51,
    0x0e70,
    0xff9f,
    0xefbe,
    0xdfdd,
    0xcffc,
    0xbf1b,
    0xaf3a,
    0x9f59,
    0x8f78,
    0x9188,
    0x81a9,
    0xb1ca,
    0xa1eb,
    0xd10c,
    0xc12d,
    0xf14e,
    0xe16f,
    0x1080,
    0x00a1,
    0x30c2,
    0x20e3,
    0x5004,
    0x4025,
    0x7046,
    0x6067,
    0x83b9,
    0x9398,
    0xa3fb,
    0xb3da,
    0xc33d,
    0xd31c,
    0xe37f,
    0xf35e,
    0x02b1,
    0x1290,
    0x22f3,
    0x32d2,
    0x4235,
    0x5214,
    0x6277,
    0x7256,
    0xb5ea,
    0xa5cb,
    0x95a8,
    0x8589,
    0xf56e,
    0xe54f,
    0xd52c,
    0xc50d,
    0x34e2,
    0x24c3,
    0x14a0,
    0x0481,
    0x7466,
    0x6447,
    0x5424,
    0x4405,
    0xa7db,
    0xb7fa,
    0x8799,
    0x97b8,
    0xe75f,
    0xf77e,
    0xc71d,
    0xd73c,
    0x26d3,
    0x36f2,
    0x0691,
    0x16b0,
    0x6657,
    0x7676,
    0x4615,
    0x5634,
    0xd94c,
    0xc96d,
    0xf90e,
    0xe92f,
    0x99c8,
    0x89e9,
    0xb98a,
    0xa9ab,
    0x5844,
    0x4865,
    0x7806,
    0x6827,
    0x18c0,
    0x08e1,
    0x3882,
    0x28a3,
    0xcb7d,
    0xdb5c,
    0xeb3f,
    0xfb1e,
    0x8bf9,
    0x9bd8,
    0xabbb,
    0xbb9a,
    0x4a75,
    0x5a54,
    0x6a37,
    0x7a16,
    0x0af1,
    0x1ad0,
    0x2ab3,
    0x3a92,
    0xfd2e,
    0xed0f,
    0xdd6c,
    0xcd4d,
    0xbdaa,
    0xad8b,
    0x9de8,
    0x8dc9,
    0x7c26,
    0x6c07,
    0x5c64,
    0x4c45,
    0x3ca2,
    0x2c83,
    0x1ce0,
    0x0cc1,
    0xef1f,
    0xff3e,
    0xcf5d,
    0xdf7c,
    0xaf9b,
    0xbfba,
    0x8fd9,
    0x9ff8,
    0x6e17,
    0x7e36,
    0x4e55,
    0x5e74,
    0x2e93,
    0x3eb2,
    0x0ed1,
    0x1ef0
];




var qrcode = function(typeNumber, errorCorrectLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = new Array();

    var _this = {};

    var makeImpl = function(test, maskPattern) {

	_moduleCount = _typeNumber * 4 + 17;
	_modules = function(moduleCount) {
	    var modules = new Array(moduleCount);
	    for (var row = 0; row < moduleCount; row += 1) {
		modules[row] = new Array(moduleCount);
		for (var col = 0; col < moduleCount; col += 1) {
		    modules[row][col] = null;
		}
	    }
	    return modules;
	}(_moduleCount);

	setupPositionProbePattern(0, 0);
	setupPositionProbePattern(_moduleCount - 7, 0);
	setupPositionProbePattern(0, _moduleCount - 7);
	setupPositionAdjustPattern();
	setupTimingPattern();
	setupTypeInfo(test, maskPattern);

	if (_typeNumber >= 7) {
	    setupTypeNumber(test);
	}

	if (_dataCache == null) {
	    _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
	}

	mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

	for (var r = -1; r <= 7; r += 1) {

	    if (row + r <= -1 || _moduleCount <= row + r) continue;

	    for (var c = -1; c <= 7; c += 1) {

		if (col + c <= -1 || _moduleCount <= col + c) continue;

		if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
		     || (0 <= c && c <= 6 && (r == 0 || r == 6) )
		     || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
		    _modules[row + r][col + c] = true;
		} else {
		    _modules[row + r][col + c] = false;
		}
	    }
	}
    };

    var getBestMaskPattern = function() {

	var minLostPoint = 0;
	var pattern = 0;

	for (var i = 0; i < 8; i += 1) {

	    makeImpl(true, i);

	    var lostPoint = QRUtil.getLostPoint(_this);

	    if (i == 0 || minLostPoint > lostPoint) {
		minLostPoint = lostPoint;
		pattern = i;
	    }
	}

	return pattern;
    };

    var setupTimingPattern = function() {

	for (var r = 8; r < _moduleCount - 8; r += 1) {
	    if (_modules[r][6] != null) {
		continue;
	    }
	    _modules[r][6] = (r % 2 == 0);
	}

	for (var c = 8; c < _moduleCount - 8; c += 1) {
	    if (_modules[6][c] != null) {
		continue;
	    }
	    _modules[6][c] = (c % 2 == 0);
	}
    };

    var setupPositionAdjustPattern = function() {

	var pos = QRUtil.getPatternPosition(_typeNumber);

	for (var i = 0; i < pos.length; i += 1) {

	    for (var j = 0; j < pos.length; j += 1) {

		var row = pos[i];
		var col = pos[j];

		if (_modules[row][col] != null) {
		    continue;
		}

		for (var r = -2; r <= 2; r += 1) {

		    for (var c = -2; c <= 2; c += 1) {

			if (r == -2 || r == 2 || c == -2 || c == 2
			    || (r == 0 && c == 0) ) {
			    _modules[row + r][col + c] = true;
			} else {
			    _modules[row + r][col + c] = false;
			}
		    }
		}
	    }
	}
    };

    var setupTypeNumber = function(test) {

	var bits = QRUtil.getBCHTypeNumber(_typeNumber);

	for (var i = 0; i < 18; i += 1) {
	    var mod = (!test && ( (bits >> i) & 1) == 1);
	    _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
	}

	for (var i = 0; i < 18; i += 1) {
	    var mod = (!test && ( (bits >> i) & 1) == 1);
	    _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	}
    };

    var setupTypeInfo = function(test, maskPattern) {

	var data = (_errorCorrectLevel << 3) | maskPattern;
	var bits = QRUtil.getBCHTypeInfo(data);

	// vertical
	for (var i = 0; i < 15; i += 1) {

	    var mod = (!test && ( (bits >> i) & 1) == 1);

	    if (i < 6) {
		_modules[i][8] = mod;
	    } else if (i < 8) {
		_modules[i + 1][8] = mod;
	    } else {
		_modules[_moduleCount - 15 + i][8] = mod;
	    }
	}

	// horizontal
	for (var i = 0; i < 15; i += 1) {

	    var mod = (!test && ( (bits >> i) & 1) == 1);

	    if (i < 8) {
		_modules[8][_moduleCount - i - 1] = mod;
	    } else if (i < 9) {
		_modules[8][15 - i - 1 + 1] = mod;
	    } else {
		_modules[8][15 - i - 1] = mod;
	    }
	}

	// fixed module
	_modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

	var inc = -1;
	var row = _moduleCount - 1;
	var bitIndex = 7;
	var byteIndex = 0;
	var maskFunc = QRUtil.getMaskFunction(maskPattern);

	for (var col = _moduleCount - 1; col > 0; col -= 2) {

	    if (col == 6) col -= 1;

	    while (true) {

		for (var c = 0; c < 2; c += 1) {

		    if (_modules[row][col - c] == null) {

			var dark = false;

			if (byteIndex < data.length) {
			    dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
			}

			var mask = maskFunc(row, col - c);

			if (mask) {
			    dark = !dark;
			}

			_modules[row][col - c] = dark;
			bitIndex -= 1;

			if (bitIndex == -1) {
			    byteIndex += 1;
			    bitIndex = 7;
			}
		    }
		}

		row += inc;

		if (row < 0 || _moduleCount <= row) {
		    row -= inc;
		    inc = -inc;
		    break;
		}
	    }
	}
    };

    var createBytes = function(buffer, rsBlocks) {

	var offset = 0;

	var maxDcCount = 0;
	var maxEcCount = 0;

	var dcdata = new Array(rsBlocks.length);
	var ecdata = new Array(rsBlocks.length);

	for (var r = 0; r < rsBlocks.length; r += 1) {

	    var dcCount = rsBlocks[r].dataCount;
	    var ecCount = rsBlocks[r].totalCount - dcCount;

	    maxDcCount = Math.max(maxDcCount, dcCount);
	    maxEcCount = Math.max(maxEcCount, ecCount);

	    dcdata[r] = new Array(dcCount);

	    for (var i = 0; i < dcdata[r].length; i += 1) {
		dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
	    }
	    offset += dcCount;

	    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
	    var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

	    var modPoly = rawPoly.mod(rsPoly);
	    ecdata[r] = new Array(rsPoly.getLength() - 1);
	    for (var i = 0; i < ecdata[r].length; i += 1) {
		var modIndex = i + modPoly.getLength() - ecdata[r].length;
		ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
	    }
	}

	var totalCodeCount = 0;
	for (var i = 0; i < rsBlocks.length; i += 1) {
	    totalCodeCount += rsBlocks[i].totalCount;
	}

	var data = new Array(totalCodeCount);
	var index = 0;

	for (var i = 0; i < maxDcCount; i += 1) {
	    for (var r = 0; r < rsBlocks.length; r += 1) {
		if (i < dcdata[r].length) {
		    data[index] = dcdata[r][i];
		    index += 1;
		}
	    }
	}

	for (var i = 0; i < maxEcCount; i += 1) {
	    for (var r = 0; r < rsBlocks.length; r += 1) {
		if (i < ecdata[r].length) {
		    data[index] = ecdata[r][i];
		    index += 1;
		}
	    }
	}

	return data;
    };

    var createData = function(typeNumber, errorCorrectLevel, dataList) {

	var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

	var buffer = qrBitBuffer();

	for (var i = 0; i < dataList.length; i += 1) {
	    var data = dataList[i];
	    buffer.put(data.getMode(), 4);
	    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
	    data.write(buffer);
	}

	// calc num max data.
	var totalDataCount = 0;
	for (var i = 0; i < rsBlocks.length; i += 1) {
	    totalDataCount += rsBlocks[i].dataCount;
	}

	if (buffer.getLengthInBits() > totalDataCount * 8) {
	    throw new Error('code length overflow. ('
			    + buffer.getLengthInBits()
			    + '>'
			    + totalDataCount * 8
			    + ')');
	}

	// end code
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
	    buffer.put(0, 4);
	}

	// padding
	while (buffer.getLengthInBits() % 8 != 0) {
	    buffer.putBit(false);
	}

	// padding
	while (true) {

	    if (buffer.getLengthInBits() >= totalDataCount * 8) {
		break;
	    }
	    buffer.put(PAD0, 8);

	    if (buffer.getLengthInBits() >= totalDataCount * 8) {
		break;
	    }
	    buffer.put(PAD1, 8);
	}

	return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data) {
	var newData = qr8BitByte(data);
	_dataList.push(newData);
	_dataCache = null;
    };

    _this.isDark = function(row, col) {
	if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
	    throw new Error(row + ',' + col);
	}
	return _modules[row][col];
    };

    _this.getModuleCount = function() {
	return _moduleCount;
    };

    _this.make = function() {
	makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

	cellSize = cellSize || 2;
	margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

	var qrHtml = '';

	qrHtml += '<table style="';
	qrHtml += ' border-width: 0px; border-style: none;';
	qrHtml += ' border-collapse: collapse;';
	qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
	qrHtml += '">';
	qrHtml += '<tbody>';

	for (var r = 0; r < _this.getModuleCount(); r += 1) {

	    qrHtml += '<tr>';

	    for (var c = 0; c < _this.getModuleCount(); c += 1) {
		qrHtml += '<td style="';
		qrHtml += ' border-width: 0px; border-style: none;';
		qrHtml += ' border-collapse: collapse;';
		qrHtml += ' padding: 0px; margin: 0px;';
		qrHtml += ' width: ' + cellSize + 'px;';
		qrHtml += ' height: ' + cellSize + 'px;';
		qrHtml += ' background-color: ';
		qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
		qrHtml += ';';
		qrHtml += '"/>';
	    }

	    qrHtml += '</tr>';
	}

	qrHtml += '</tbody>';
	qrHtml += '</table>';

	return qrHtml;
    };

    _this.createImgTag = function(cellSize, margin, size) {

	cellSize = cellSize || 2;
	margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

	var min = margin;
	var max = _this.getModuleCount() * cellSize + margin;

	return createImgTag(size, size, function(x, y) {
	    if (min <= x && x < max && min <= y && y < max) {
		var c = Math.floor( (x - min) / cellSize);
		var r = Math.floor( (y - min) / cellSize);
		return _this.isDark(r, c)? 0 : 1;
	    } else {
		return 1;
	    }
	} );
    };

    return _this;
};

//---------------------------------------------------------------------
// qrcode.stringToBytes
//---------------------------------------------------------------------

qrcode.stringToBytes = function(s) {
    var bytes = new Array();
    for (var i = 0; i < s.length; i += 1) {
	var c = s.charCodeAt(i);
	bytes.push(c & 0xff);
    }
    return bytes;
};

//---------------------------------------------------------------------
// qrcode.createStringToBytes
//---------------------------------------------------------------------

/**
 * @param unicodeData base64 string of byte array.
 * [16bit Unicode],[16bit Bytes], ...
 * @param numChars
 */
qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

	var bin = base64DecodeInputStream(unicodeData);
	var read = function() {
	    var b = bin.read();
	    if (b == -1) throw new Error();
	    return b;
	};

	var count = 0;
	var unicodeMap = {};
	while (true) {
	    var b0 = bin.read();
	    if (b0 == -1) break;
	    var b1 = read();
	    var b2 = read();
	    var b3 = read();
	    var k = String.fromCharCode( (b0 << 8) | b1);
	    var v = (b2 << 8) | b3;
	    unicodeMap[k] = v;
	    count += 1;
	}
	if (count != numChars) {
	    throw new Error(count + ' != ' + numChars);
	}

	return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
	var bytes = new Array();
	for (var i = 0; i < s.length; i += 1) {
	    var c = s.charCodeAt(i);
	    if (c < 128) {
		bytes.push(c);
	    } else {
		var b = unicodeMap[s.charAt(i)];
		if (typeof b == 'number') {
		    if ( (b & 0xff) == b) {
			// 1byte
			bytes.push(b);
		    } else {
			// 2bytes
			bytes.push(b >>> 8);
			bytes.push(b & 0xff);
		    }
		} else {
		    bytes.push(unknownChar);
		}
	    }
	}
	return bytes;
    };
};

//---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------

var QRMode = {
    MODE_NUMBER :		1 << 0,
    MODE_ALPHA_NUM : 	1 << 1,
    MODE_8BIT_BYTE : 	1 << 2,
    MODE_KANJI :		1 << 3
};

//---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

var QRErrorCorrectLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
};

//---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
};

//---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
	[],
	[6, 18],
	[6, 22],
	[6, 26],
	[6, 30],
	[6, 34],
	[6, 22, 38],
	[6, 24, 42],
	[6, 26, 46],
	[6, 28, 50],
	[6, 30, 54],
	[6, 32, 58],
	[6, 34, 62],
	[6, 26, 46, 66],
	[6, 26, 48, 70],
	[6, 26, 50, 74],
	[6, 30, 54, 78],
	[6, 30, 56, 82],
	[6, 30, 58, 86],
	[6, 34, 62, 90],
	[6, 28, 50, 72, 94],
	[6, 26, 50, 74, 98],
	[6, 30, 54, 78, 102],
	[6, 28, 54, 80, 106],
	[6, 32, 58, 84, 110],
	[6, 30, 58, 86, 114],
	[6, 34, 62, 90, 118],
	[6, 26, 50, 74, 98, 122],
	[6, 30, 54, 78, 102, 126],
	[6, 26, 52, 78, 104, 130],
	[6, 30, 56, 82, 108, 134],
	[6, 34, 60, 86, 112, 138],
	[6, 30, 58, 86, 114, 142],
	[6, 34, 62, 90, 118, 146],
	[6, 30, 54, 78, 102, 126, 150],
	[6, 24, 50, 76, 102, 128, 154],
	[6, 28, 54, 80, 106, 132, 158],
	[6, 32, 58, 84, 110, 136, 162],
	[6, 26, 54, 82, 110, 138, 166],
	[6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
	var digit = 0;
	while (data != 0) {
	    digit += 1;
	    data >>>= 1;
	}
	return digit;
    };

    _this.getBCHTypeInfo = function(data) {
	var d = data << 10;
	while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
	    d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
	}
	return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
	var d = data << 12;
	while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
	    d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
	}
	return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
	return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

	switch (maskPattern) {

	    case QRMaskPattern.PATTERN000 :
		return function(i, j) { return (i + j) % 2 == 0; };
	    case QRMaskPattern.PATTERN001 :
		return function(i, j) { return i % 2 == 0; };
	    case QRMaskPattern.PATTERN010 :
		return function(i, j) { return j % 3 == 0; };
	    case QRMaskPattern.PATTERN011 :
		return function(i, j) { return (i + j) % 3 == 0; };
	    case QRMaskPattern.PATTERN100 :
		return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
	    case QRMaskPattern.PATTERN101 :
		return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
	    case QRMaskPattern.PATTERN110 :
		return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
	    case QRMaskPattern.PATTERN111 :
		return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

		default :
		throw new Error('bad maskPattern:' + maskPattern);
	}
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
	var a = qrPolynomial([1], 0);
	for (var i = 0; i < errorCorrectLength; i += 1) {
	    a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
	}
	return a;
    };

    _this.getLengthInBits = function(mode, type) {

	if (1 <= type && type < 10) {

	    // 1 - 9

	    switch(mode) {
		case QRMode.MODE_NUMBER 	: return 10;
		case QRMode.MODE_ALPHA_NUM 	: return 9;
		case QRMode.MODE_8BIT_BYTE	: return 8;
		case QRMode.MODE_KANJI		: return 8;
		    default :
		    throw new Error('mode:' + mode);
	    }

	} else if (type < 27) {

	    // 10 - 26

	    switch(mode) {
		case QRMode.MODE_NUMBER 	: return 12;
		case QRMode.MODE_ALPHA_NUM 	: return 11;
		case QRMode.MODE_8BIT_BYTE	: return 16;
		case QRMode.MODE_KANJI		: return 10;
		    default :
		    throw new Error('mode:' + mode);
	    }

	} else if (type < 41) {

	    // 27 - 40

	    switch(mode) {
		case QRMode.MODE_NUMBER 	: return 14;
		case QRMode.MODE_ALPHA_NUM	: return 13;
		case QRMode.MODE_8BIT_BYTE	: return 16;
		case QRMode.MODE_KANJI		: return 12;
		    default :
		    throw new Error('mode:' + mode);
	    }

	} else {
	    throw new Error('type:' + type);
	}
    };

    _this.getLostPoint = function(qrcode) {

	var moduleCount = qrcode.getModuleCount();

	var lostPoint = 0;

	// LEVEL1

	for (var row = 0; row < moduleCount; row += 1) {
	    for (var col = 0; col < moduleCount; col += 1) {

		var sameCount = 0;
		var dark = qrcode.isDark(row, col);

		for (var r = -1; r <= 1; r += 1) {

		    if (row + r < 0 || moduleCount <= row + r) {
			continue;
		    }

		    for (var c = -1; c <= 1; c += 1) {

			if (col + c < 0 || moduleCount <= col + c) {
			    continue;
			}

			if (r == 0 && c == 0) {
			    continue;
			}

			if (dark == qrcode.isDark(row + r, col + c) ) {
			    sameCount += 1;
			}
		    }
		}

		if (sameCount > 5) {
		    lostPoint += (3 + sameCount - 5);
		}
	    }
	};

	// LEVEL2

	for (var row = 0; row < moduleCount - 1; row += 1) {
	    for (var col = 0; col < moduleCount - 1; col += 1) {
		var count = 0;
		if (qrcode.isDark(row, col) ) count += 1;
		if (qrcode.isDark(row + 1, col) ) count += 1;
		if (qrcode.isDark(row, col + 1) ) count += 1;
		if (qrcode.isDark(row + 1, col + 1) ) count += 1;
		if (count == 0 || count == 4) {
		    lostPoint += 3;
		}
	    }
	}

	// LEVEL3

	for (var row = 0; row < moduleCount; row += 1) {
	    for (var col = 0; col < moduleCount - 6; col += 1) {
		if (qrcode.isDark(row, col)
		    && !qrcode.isDark(row, col + 1)
		    &&  qrcode.isDark(row, col + 2)
		    &&  qrcode.isDark(row, col + 3)
		    &&  qrcode.isDark(row, col + 4)
		    && !qrcode.isDark(row, col + 5)
		    &&  qrcode.isDark(row, col + 6) ) {
		    lostPoint += 40;
		}
	    }
	}

	for (var col = 0; col < moduleCount; col += 1) {
	    for (var row = 0; row < moduleCount - 6; row += 1) {
		if (qrcode.isDark(row, col)
		    && !qrcode.isDark(row + 1, col)
		    &&  qrcode.isDark(row + 2, col)
		    &&  qrcode.isDark(row + 3, col)
		    &&  qrcode.isDark(row + 4, col)
		    && !qrcode.isDark(row + 5, col)
		    &&  qrcode.isDark(row + 6, col) ) {
		    lostPoint += 40;
		}
	    }
	}

	// LEVEL4

	var darkCount = 0;

	for (var col = 0; col < moduleCount; col += 1) {
	    for (var row = 0; row < moduleCount; row += 1) {
		if (qrcode.isDark(row, col) ) {
		    darkCount += 1;
		}
	    }
	}

	var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	lostPoint += ratio * 10;

	return lostPoint;
    };

    return _this;
}();

//---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
	EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
	EXP_TABLE[i] = EXP_TABLE[i - 4]
	    ^ EXP_TABLE[i - 5]
	    ^ EXP_TABLE[i - 6]
	    ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
	LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

	if (n < 1) {
	    throw new Error('glog(' + n + ')');
	}

	return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

	while (n < 0) {
	    n += 255;
	}

	while (n >= 256) {
	    n -= 255;
	}

	return EXP_TABLE[n];
    };

    return _this;
}();

//---------------------------------------------------------------------
// qrPolynomial
//---------------------------------------------------------------------

function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
	throw new Error(num.length + '/' + shift);
    }

    var _num = function() {
	var offset = 0;
	while (offset < num.length && num[offset] == 0) {
	    offset += 1;
	}
	var _num = new Array(num.length - offset + shift);
	for (var i = 0; i < num.length - offset; i += 1) {
	    _num[i] = num[i + offset];
	}
	return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
	return _num[index];
    };

    _this.getLength = function() {
	return _num.length;
    };

    _this.multiply = function(e) {

	var num = new Array(_this.getLength() + e.getLength() - 1);

	for (var i = 0; i < _this.getLength(); i += 1) {
	    for (var j = 0; j < e.getLength(); j += 1) {
		num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
	    }
	}

	return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

	if (_this.getLength() - e.getLength() < 0) {
	    return _this;
	}

	var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

	var num = new Array(_this.getLength() );
	for (var i = 0; i < _this.getLength(); i += 1) {
	    num[i] = _this.getAt(i);
	}

	for (var i = 0; i < e.getLength(); i += 1) {
	    num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
	}

	// recursive call
	return qrPolynomial(num, 0).mod(e);
    };

    return _this;
};

//---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

var QRRSBlock = function() {


    // [1: [L, M, Q, H], ..]
    var RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];

    var qrRSBlock = function(totalCount, dataCount) {
	var _this = {};
	_this.totalCount = totalCount;
	_this.dataCount = dataCount;
	return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectLevel) {

	switch(errorCorrectLevel) {
	    case QRErrorCorrectLevel.L :
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	    case QRErrorCorrectLevel.M :
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	    case QRErrorCorrectLevel.Q :
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	    case QRErrorCorrectLevel.H :
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
		default :
		return undefined;
	}
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {

	var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);

	if (typeof rsBlock == 'undefined') {
	    throw new Error('bad rs block @ typeNumber:' + typeNumber +
			    '/errorCorrectLevel:' + errorCorrectLevel);
	}

	var length = rsBlock.length / 3;

	var list = new Array();

	for (var i = 0; i < length; i += 1) {

	    var count = rsBlock[i * 3 + 0];
	    var totalCount = rsBlock[i * 3 + 1];
	    var dataCount = rsBlock[i * 3 + 2];

	    for (var j = 0; j < count; j += 1) {
		list.push(qrRSBlock(totalCount, dataCount) );
	    }
	}

	return list;
    };

    return _this;
}();

//---------------------------------------------------------------------
// qrBitBuffer
//---------------------------------------------------------------------

var qrBitBuffer = function() {

    var _buffer = new Array();
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
	return _buffer;
    };

    _this.getAt = function(index) {
	var bufIndex = Math.floor(index / 8);
	return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
	for (var i = 0; i < length; i += 1) {
	    _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
	}
    };

    _this.getLengthInBits = function() {
	return _length;
    };

    _this.putBit = function(bit) {

	var bufIndex = Math.floor(_length / 8);
	if (_buffer.length <= bufIndex) {
	    _buffer.push(0);
	}

	if (bit) {
	    _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
	}

	_length += 1;
    };

    return _this;
};

//---------------------------------------------------------------------
// qr8BitByte
//---------------------------------------------------------------------

var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _parsedData = [];

    var _this = {};


    // Added to support UTF-8 Characters
    for (var i = 0, l = _data.length; i < l; i++) {
	var byteArray = [];
	var code = _data.charCodeAt(i);

	if (code > 0x10000) {
	    byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
	    byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
	    byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
	    byteArray[3] = 0x80 | (code & 0x3F);
	} else if (code > 0x800) {
	    byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
	    byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
	    byteArray[2] = 0x80 | (code & 0x3F);
	} else if (code > 0x80) {
	    byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
	    byteArray[1] = 0x80 | (code & 0x3F);
	} else {
	    byteArray[0] = code;
	}

        // Fix Unicode corruption bug
        _parsedData.push(byteArray);
    }

    _parsedData = Array.prototype.concat.apply([], _parsedData);

    if (_parsedData.length != _data.length) {
	_parsedData.unshift(191);
	_parsedData.unshift(187);
	_parsedData.unshift(239);
    }

    var _bytes = _parsedData;

    _this.getMode = function() {
	return _mode;
    };

    _this.getLength = function(buffer) {
	return _bytes.length;
    };

    _this.write = function(buffer) {
	for (var i = 0; i < _bytes.length; i += 1) {
	    buffer.put(_bytes[i], 8);
	}
    };

    return _this;
};

//=====================================================================
// GIF Support etc.
//

//---------------------------------------------------------------------
// byteArrayOutputStream
//---------------------------------------------------------------------

var byteArrayOutputStream = function() {

    var _bytes = new Array();

    var _this = {};

    _this.writeByte = function(b) {
	_bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
	_this.writeByte(i);
	_this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
	off = off || 0;
	len = len || b.length;
	for (var i = 0; i < len; i += 1) {
	    _this.writeByte(b[i + off]);
	}
    };

    _this.writeString = function(s) {
	for (var i = 0; i < s.length; i += 1) {
	    _this.writeByte(s.charCodeAt(i) );
	}
    };

    _this.toByteArray = function() {
	return _bytes;
    };

    _this.toString = function() {
	var s = '';
	s += '[';
	for (var i = 0; i < _bytes.length; i += 1) {
	    if (i > 0) {
		s += ',';
	    }
	    s += _bytes[i];
	}
	s += ']';
	return s;
    };

    return _this;
};

//---------------------------------------------------------------------
// base64EncodeOutputStream
//---------------------------------------------------------------------

var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
	_base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
	if (n < 0) {
	    // error.
	} else if (n < 26) {
	    return 0x41 + n;
	} else if (n < 52) {
	    return 0x61 + (n - 26);
	} else if (n < 62) {
	    return 0x30 + (n - 52);
	} else if (n == 62) {
	    return 0x2b;
	} else if (n == 63) {
	    return 0x2f;
	}
	throw new Error('n:' + n);
    };

    _this.writeByte = function(n) {

	_buffer = (_buffer << 8) | (n & 0xff);
	_buflen += 8;
	_length += 1;

	while (_buflen >= 6) {
	    writeEncoded(_buffer >>> (_buflen - 6) );
	    _buflen -= 6;
	}
    };

    _this.flush = function() {

	if (_buflen > 0) {
	    writeEncoded(_buffer << (6 - _buflen) );
	    _buffer = 0;
	    _buflen = 0;
	}

	if (_length % 3 != 0) {
	    // padding
	    var padlen = 3 - _length % 3;
	    for (var i = 0; i < padlen; i += 1) {
		_base64 += '=';
	    }
	}
    };

    _this.toString = function() {
	return _base64;
    };

    return _this;
};

//---------------------------------------------------------------------
// base64DecodeInputStream
//---------------------------------------------------------------------

var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

	while (_buflen < 8) {

	    if (_pos >= _str.length) {
		if (_buflen == 0) {
		    return -1;
		}
		throw new Error('unexpected end of file./' + _buflen);
	    }

	    var c = _str.charAt(_pos);
	    _pos += 1;

	    if (c == '=') {
		_buflen = 0;
		return -1;
	    } else if (c.match(/^\s$/) ) {
		// ignore if whitespace.
		continue;
	    }

	    _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
	    _buflen += 6;
	}

	var n = (_buffer >>> (_buflen - 8) ) & 0xff;
	_buflen -= 8;
	return n;
    };

    var decode = function(c) {
	if (0x41 <= c && c <= 0x5a) {
	    return c - 0x41;
	} else if (0x61 <= c && c <= 0x7a) {
	    return c - 0x61 + 26;
	} else if (0x30 <= c && c <= 0x39) {
	    return c - 0x30 + 52;
	} else if (c == 0x2b) {
	    return 62;
	} else if (c == 0x2f) {
	    return 63;
	} else {
	    throw new Error('c:' + c);
	}
    };

    return _this;
};

//---------------------------------------------------------------------
// gifImage (B/W)
//---------------------------------------------------------------------

var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
	_data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

	//---------------------------------
	// GIF Signature

	out.writeString('GIF87a');

	//---------------------------------
	// Screen Descriptor

	out.writeShort(_width);
	out.writeShort(_height);

	out.writeByte(0x80); // 2bit
	out.writeByte(0);
	out.writeByte(0);

	//---------------------------------
	// Global Color Map

	// black
	out.writeByte(0x00);
	out.writeByte(0x00);
	out.writeByte(0x00);

	// white
	out.writeByte(0xff);
	out.writeByte(0xff);
	out.writeByte(0xff);

	//---------------------------------
	// Image Descriptor

	out.writeString(',');
	out.writeShort(0);
	out.writeShort(0);
	out.writeShort(_width);
	out.writeShort(_height);
	out.writeByte(0);

	//---------------------------------
	// Local Color Map

	//---------------------------------
	// Raster Data

	var lzwMinCodeSize = 2;
	var raster = getLZWRaster(lzwMinCodeSize);

	out.writeByte(lzwMinCodeSize);

	var offset = 0;

	while (raster.length - offset > 255) {
	    out.writeByte(255);
	    out.writeBytes(raster, offset, 255);
	    offset += 255;
	}

	out.writeByte(raster.length - offset);
	out.writeBytes(raster, offset, raster.length - offset);
	out.writeByte(0x00);

	//---------------------------------
	// GIF Terminator
	out.writeString(';');
    };

    var bitOutputStream = function(out) {

	var _out = out;
	var _bitLength = 0;
	var _bitBuffer = 0;

	var _this = {};

	_this.write = function(data, length) {

	    if ( (data >>> length) != 0) {
		throw new Error('length over');
	    }

	    while (_bitLength + length >= 8) {
		_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
		length -= (8 - _bitLength);
		data >>>= (8 - _bitLength);
		_bitBuffer = 0;
		_bitLength = 0;
	    }

	    _bitBuffer = (data << _bitLength) | _bitBuffer;
	    _bitLength = _bitLength + length;
	};

	_this.flush = function() {
	    if (_bitLength > 0) {
		_out.writeByte(_bitBuffer);
	    }
	};

	return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

	var clearCode = 1 << lzwMinCodeSize;
	var endCode = (1 << lzwMinCodeSize) + 1;
	var bitLength = lzwMinCodeSize + 1;

	// Setup LZWTable
	var table = lzwTable();

	for (var i = 0; i < clearCode; i += 1) {
	    table.add(String.fromCharCode(i) );
	}
	table.add(String.fromCharCode(clearCode) );
	table.add(String.fromCharCode(endCode) );

	var byteOut = byteArrayOutputStream();
	var bitOut = bitOutputStream(byteOut);

	// clear code
	bitOut.write(clearCode, bitLength);

	var dataIndex = 0;

	var s = String.fromCharCode(_data[dataIndex]);
	dataIndex += 1;

	while (dataIndex < _data.length) {

	    var c = String.fromCharCode(_data[dataIndex]);
	    dataIndex += 1;

	    if (table.contains(s + c) ) {

		s = s + c;

	    } else {

		bitOut.write(table.indexOf(s), bitLength);

		if (table.size() < 0xfff) {

		    if (table.size() == (1 << bitLength) ) {
			bitLength += 1;
		    }

		    table.add(s + c);
		}

		s = c;
	    }
	}

	bitOut.write(table.indexOf(s), bitLength);

	// end code
	bitOut.write(endCode, bitLength);

	bitOut.flush();

	return byteOut.toByteArray();
    };

    var lzwTable = function() {

	var _map = {};
	var _size = 0;

	var _this = {};

	_this.add = function(key) {
	    if (_this.contains(key) ) {
		throw new Error('dup key:' + key);
	    }
	    _map[key] = _size;
	    _size += 1;
	};

	_this.size = function() {
	    return _size;
	};

	_this.indexOf = function(key) {
	    return _map[key];
	};

	_this.contains = function(key) {
	    return typeof _map[key] != 'undefined';
	};

	return _this;
    };

    return _this;
};

var createImgTag = function(width, height, getPixel, alt) {

    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
	for (var x = 0; x < width; x += 1) {
	    gif.setPixel(x, y, getPixel(x, y) );
	}
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
	base64.writeByte(bytes[i]);
    }
    base64.flush();

    var img = '';
    img += 'data:image/gif;base64,';
    img += base64;

    return img;
};





let gen = function(text, options) {
    options = options || {};
    var typeNumber = options.typeNumber || 4;
    var errorCorrectLevel = options.errorCorrectLevel || 'M';
    var size = options.size || 500;

    var qr;

    try {
        qr = qrcode(typeNumber, errorCorrectLevel || 'M');
        qr.addData(text);
        qr.make();
    } catch (e) {
        if(typeNumber >= 40) {
            throw new Error('Text too long to encode');
        } else {
            return gen(text, {
                size: size,
                errorCorrectLevel: errorCorrectLevel,
                typeNumber: typeNumber + 1
            });
        }
    }

    // calc cellsize and margin
    var cellsize = parseInt(size / qr.getModuleCount());
    var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);

    return qr.createImgTag(cellsize, margin, size);
};
var newqr = gen;
/**
 *
 * @param {string} merchant_account
 * @param {string} merchant_name
 * @param {string} merchant_city
 * @param {number} transaction_amount
 * @param {string} info_adic
 * @param {boolean} return_qrcode
 */
function Pix(merchant_account, merchant_name, merchant_city, transaction_amount, info_adic, return_qrcode) {
    if (return_qrcode === void 0) { return_qrcode = false; }
    return __awaiter(this, void 0, void 0, function () {
        var format, gui, chave, info, account, category, currency, amount, country, name, city, additional, crc16, payload, crc, j, i, c, crcCalc, qrCodePix;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = "000201";
                    gui = "0014br.gov.bcb.pix";
                    chave = "01" +
                        (merchant_account.length < 10
                            ? "0" + merchant_account.length
                            : merchant_account.length) +
                        merchant_account;
                    info = info_adic.length > 0
                        ? "02" +
                            (info_adic.length < 10 ? "0" + info_adic.length : info_adic.length) +
                            (info_adic.length > 50 ? info_adic.substring(0, 50) : info_adic)
                        : "";
                    account = "26" + (gui.length + chave.length + info.length) + gui + chave + info;
                    category = "52040000";
                    currency = "5303986";
                    amount = ("" + transaction_amount).length > 0
                        ? "54" +
                            (("" + transaction_amount).length < 10
                                ? "0" + ("" + transaction_amount).length
                                : ("" + transaction_amount).length) +
                            transaction_amount
                        : "";
                    country = "5802BR";
                    name = merchant_name.length > 25 ? merchant_name.substring(0, 25) : merchant_name;
                    name = "59" + (name.length < 10 ? "0" + name.length : name.length) + name; // Merchant Name
                    city = merchant_city.length > 25 ? merchant_city.substring(0, 25) : merchant_city;
                    city = "60" + (city.length < 10 ? "0" + city.length : city.length) + city; // Merchant City
                    additional = "62070503***";
                    crc16 = "6304";
                    payload = format +
                        account +
                        category +
                        currency +
                        amount +
                        country +
                        name +
                        city +
                        additional +
                        crc16;
                    crc = 0xffff;
                    for (i = 0; i < payload.length; i++) {
                        c = payload.charCodeAt(i);
                        if (c > 255)
                            throw new RangeError();
                        j = (c ^ (crc >> 8)) & 0xff;
                        crc = crcTable_1[j] ^ (crc << 8);
                    }
                    crcCalc = ((crc ^ 0) & 0xffff).toString(16).toUpperCase();
                    qrCodePix = payload +
                        (crcCalc.length == 4
                            ? ""
                            : crcCalc.length == 3
                                ? "0"
                                : crcCalc.length == 2
                                    ? "00"
                                    : "000") +
                        crcCalc;
                    if (!return_qrcode) return [3 /*break*/, 2];
                    return [4 /*yield*/, generateQrCode(qrCodePix)];
                case 1:
                    qrCodePix = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, qrCodePix];
            }
        });
    });
}

function PixSync(merchant_account, merchant_name, merchant_city, transaction_amount, info_adic) {
    const format = "000201";
    const gui = "0014br.gov.bcb.pix";
    const chave = "01" + (merchant_account.length < 10 ? "0" + merchant_account.length : merchant_account.length) + merchant_account;
    const info = info_adic.length > 0
        ? "02" + (info_adic.length < 10 ? "0" + info_adic.length : info_adic.length) +
          (info_adic.length > 50 ? info_adic.substring(0,50) : info_adic)
        : "";
    const account = "26" + (gui.length + chave.length + info.length) + gui + chave + info;
    const category = "52040000";
    const currency = "5303986";
    const amount = transaction_amount ? "54" + (("" + transaction_amount).length < 10 ? "0" + ("" + transaction_amount).length : ("" + transaction_amount).length) + transaction_amount : "";

    const country = "5802BR";
    let name = merchant_name.length > 25 ? merchant_name.substring(0,25) : merchant_name;
    name = "59" + (name.length < 10 ? "0" + name.length : name.length) + name;
    let city = merchant_city.length > 25 ? merchant_city.substring(0,25) : merchant_city;
    city = "60" + (city.length < 10 ? "0" + city.length : city.length) + city;
    const additional = "62070503***";
    const crc16 = "6304";

    const payload = format + account + category + currency + amount + country + name + city + additional + crc16;

    // calcula CRC16
    let crc = 0xffff;
    for (let i = 0; i < payload.length; i++) {
        const c = payload.charCodeAt(i);
        if (c > 255) throw new RangeError();
        const j = (c ^ (crc >> 8)) & 0xff;
        crc = crcTable_1[j] ^ (crc << 8);
    }
    let crcCalc = ((crc ^ 0) & 0xffff).toString(16).toUpperCase();
    if (crcCalc.length < 4) crcCalc = "0".repeat(4 - crcCalc.length) + crcCalc;

    return payload + crcCalc; // retorna apenas o payload PIX
}
export default Pix;
export { PixSync };
/**
 *
 * @param {string} payload
 */
function generateQrCode(payload) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, newqr(payload, {
                    size: 400
                })];
        });
    });
}
