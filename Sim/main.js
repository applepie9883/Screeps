// Your code goes here...

require('global');
require('room');
require('creep');

function getUsedCpu()
{
	return Game.rooms.sim ? performance.now() - usedOnStart : Game.getUsedCpu();
}

var usedOnStart = 0;
var cpuUsageEnd = 0;

// The next few lines are temporary
//Game.spawns.Spawn1.createCreep(creepParts.harvester[0].parts, null, {role: 'harvester'});
//Game.spawns.Spawn1.createCreep(creepParts.gatherer[0].parts, null, {role: 'gatherer'});
//Game.spawns.Spawn1.createCreep([ATTACK, MOVE], null, {role: 'guarder'});
//Game.spawns.Spawn1.createCreep([MOVE, ATTACK, ATTACK, MOVE], null, {role: 'guarder'});
//Game.spawns.Spawn1.createCreep([HEAL], null, {role: 'dead'});

usedOnStart = getUsedCpu();

for(var name in Game.creeps)
{
	Game.creeps[name].work();
}

cpuUsageEnd = getUsedCpu();
console.log("Cpu usage: " + cpuUsageEnd);
