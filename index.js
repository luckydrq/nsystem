/**
 * @author luckydrq(drqzju@gmail.com)
 */

'use strict';

var os = require('os');
var path = require('path');
var util = require('core-util-is');

exports.getenv = function(name) {
  if (name) {
    return process.env[name];
  } else {
    return process.env;
  }
};

var OS_NAME = getOSname();
var OS_ARCH = os.arch();
var USER_NAME = process.env.USER;
var USER_HOME = process.env.HOME;
var USER_DIR = process.env.PWD;
var NODE_VERSION = process.versions.node;
var FILE_SEPARATOR = path.sep;

var SYSTEM_PROPERTIES = {
  'os.name': OS_NAME,
  'os.arch': OS_ARCH,
  'user.name': USER_NAME,
  'user.home': USER_HOME,
  'user.dir': USER_DIR,
  'node.version': NODE_VERSION,
  'file.separator': FILE_SEPARATOR
};
exports.getProperties = function() {
  return SYSTEM_PROPERTIES;
};

exports.setProperties = function(properties) {
  if (util.isObject(properties)) {
    SYSTEM_PROPERTIES = properties;
  }
};

exports.getProperty = function(key, defaultValue) {
  var val = SYSTEM_PROPERTIES[key];
  if (!val && defaultValue) {
    val = defaultValue;
  }
  return val;
};

exports.setProperty = function(key, value) {
  if (util.isString(key) && util.isString(value)) {
    SYSTEM_PROPERTIES[key] = value;
  }
};

function getOSname() {
  var platform = os.platform();
  if (platform === 'darwin') {
    return 'Mac OS X';
  }
  return platform;
}
