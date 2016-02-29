/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('global'); // -> 'a thing'
 */
 
 module.exports = defineGlobalVariables();

function defineGlobalVariables()
{
	global.ERR_PATH_BLOCKED = -101;
}