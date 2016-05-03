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
	global.creepParts = {
		harvester:
		[
			{level:0, cost:150, parts:[WORK, MOVE]},
			{level:1, cost:250, parts:[WORK, WORK, MOVE]},
			{level:2, cost:400, parts:[WORK, WORK, WORK, MOVE, MOVE]},
			{level:3, cost:650, parts:[WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE]}
		],
		gatherer:
		[
			{level:0, cost:100, parts:[CARRY, MOVE]},
			{level:1, cost:200, parts:[CARRY, CARRY, MOVE, MOVE]}
		]
	};
}
