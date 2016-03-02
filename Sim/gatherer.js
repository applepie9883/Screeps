/*
* Module code goes here. Use 'module.exports' to export things:
* module.exports = 'a thing';
*
* You can import it from another modules like this:
* var mod = require('gatherer'); // -> 'a thing'
*/

module.exports = gatherer;

function gatherer(creep)
{
	if (creep.carry.energy < creep.carryCapacity)
	{
		var energies = creep.room.find(FIND_DROPPED_ENERGY);
		creep.moveTo(energies[0]);
		creep.pickup(energies[0]);
	}
	else
	{
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1);
	}
}
