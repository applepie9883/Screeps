 /*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('gatherer'); // -> 'a thing'
 */
 
  module.exports = function(creep)
 {
	 if (creep.carry.energy < creep.carryCapacity)
	 {
		 if (creep.pickup(Game.getObjectById(creep.memory.destID)) == OK)
		 {
			 delete creep.memory.destPath;
		 }
		 else
		 {
			 var didMove = creep.moveByPath_m(creep.memory.destPath);
			 
			 if (didMove != OK && didMove != ERR_TIRED)
			 {
				 var energies = creep.room.find(FIND_DROPPED_ENERGY);
				 
				 if (energies.length > 0)
				 {
					 creep.memory.destID = energies[0].id;
					 creep.setPath_m(creep.room.findPath_e(creep.pos, energies[0].pos));
				 }
			 }
		 }
	 }
	 else
	 {
		 if (creep.transferEnergy(Game.getObjectById(creep.memory.destID)) == OK)
		 {
			 delete creep.memory.destPath;
		 }
		 else
		 {
			 var didMove = creep.moveByPath_m(creep.memory.destPath);
			 if (didMove != OK && didMove != ERR_TIRED)
			 {
				 creep.memory.destID = Game.spawns.Spawn1.id;
				 creep.memory.destPath = creep.room.findPath_e(creep.pos, Game.spawns.Spawn1.pos);
			 }
		 }
	 }
 }