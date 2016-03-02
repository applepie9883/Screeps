/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('guarder'); // -> 'a thing'
*/

module.exports = guarder;

function guarder(creep)
{
	var targets = creep.room.find(FIND_HOSTILE_CREEPS);
	
	if (targets.length)
	{
		creep.moveTo(targets[0]);
		creep.attack(targets[0]);
	}
	else
	{
		creep.moveTo(Game.spawns.Spawn1);
	}
	
	if (!creep.getActiveBodyparts(MOVE))
	{
		creep.suicide();
	}
}
