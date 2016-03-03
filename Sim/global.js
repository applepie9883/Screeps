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
	
	global.creepParts = {
		harvester:
		{
			level:
			{
				1:{level:0, cost:150, parts:[WORK, MOVE]},
				2:{level:1, cost:250, parts:[WORK, WORK, MOVE]},
				3:{level:2, cost:400, parts:[WORK, WORK, WORK, MOVE, MOVE]},
				4:{level:3, cost:650, parts:[WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE]}
			}
		},
		gatherer:
		[
			{level:0, cost:100, parts:[CARRY, MOVE]},
			{level:1, cost:200, parts:[CARRY, CARRY, MOVE, MOVE]}
		]
	};
}
