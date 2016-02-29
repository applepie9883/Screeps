// Your code goes here...

require('global');
require('prototypes');

var harvester = require('harvester');
var gatherer = require('gatherer');
var builder = require('builder');
var guarder = require('guarder');

function getUsedCpu()
{
    return Game.rooms.sim ? performance.now() - usedOnStart : Game.getUsedCpu();
}

var cpuUsageEnd = 0;

var usedOnStart = 0;
usedOnStart = getUsedCpu();

// The next few lines are temporary
//Game.spawns.Spawn1.createCreep([WORK, MOVE], null, {role: 'harvester'});
//Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE], null, {role: 'harvester'});
//Game.spawns.Spawn1.createCreep([CARRY, MOVE], null, {role: 'gatherer'});
//Game.spawns.Spawn1.createCreep([CARRY, CARRY, MOVE, MOVE], null, {role: 'gatherer'});
//Game.spawns.Spawn1.createCreep([ATTACK, MOVE], null, {role: 'guarder'});
//Game.spawns.Spawn1.createCreep([MOVE, ATTACK, ATTACK, MOVE], null, {role: 'guarder'});
//Game.spawns.Spawn1.createCreep([MOVE, ATTACK, ATTACK, MOVE], null, {role: 'dead'});

for(var name in Game.creeps)
{
	var creep = Game.creeps[name];
	
	if (creep.memory.role == 'harvester')
	{
	    harvester(creep);
	}
	else if (creep.memory.role == 'gatherer')
	{
	    gatherer(creep);
	}
	else if (creep.memory.role == 'builder')
	{
	    builder(creep);
	}
	else if (creep.memory.role == 'guarder')
	{
	    guarder(creep);
	}
	else if (creep.memory.role == 'dead')
	{
	    creep.suicide();
	}
}

cpuUsageEnd = getUsedCpu();
console.log("Cpu usage: " + cpuUsageEnd);