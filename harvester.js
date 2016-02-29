/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */
 
  module.exports = function(creep)
 {
	 if (creep.harvest(Game.getObjectById(creep.memory.destID)) == OK)
	 {
		 delete creep.memory.destPath;
	 }
	 else
	 {
		 var didMove = creep.moveByPath_e(creep.memory.destPath);
		 
		 if (didMove != OK && didMove != ERR_TIRED)
		 {
			 var sources = creep.room.find(FIND_SOURCES);
			 creep.memory.destID = sources[0].id;
			 creep.memory.destPath = creep.room.findPath(creep.pos, sources[0].pos);
		 }
	}
}