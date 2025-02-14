const config = require("../../config.json");

function updateEndedCP(spt, afkObj){
	if (afkObj['supremepriest'].length == 0){
		var supremePriestMessage = 'None';
	} else {
		var supremePriestMessage = afkObj['supremepriest'].join(', ');
	}
	if (afkObj['mystics'].length == 0){
		var mysticMessage = 'None';
	} else {
		var mysticMessage = (('<@!' + afkObj['mystics'].join(', ').replace(/,/gi, '>, <@!').split(' ').join('') + '>').split(',').join(', '));
	}
	if (afkObj['nitro'].length == 0){
		var ntrMsg = 'None';
	} else {
		var ntrMsg = afkObj['nitro'].join(', ');
	}
	if (afkObj['backupkey'] != undefined){
		var backupKeysMsg = `\nBackups: ${afkObj['backupkey'].join(', ')}`;
	} else {
		backupKeysMsg = '';
	}
	const channelName = spt.channels.get(afkObj['channel']).name;
	const embed = {
		color: 31247,
		footer: {
		text: "The afk check has been ended by "+spt.guilds.get(config.shatters.id).members.get(afkObj['host']).displayName
		},
		author: {
		name: `AFK Check control panel for `+channelName
		},
		fields: [
		{
			name: "Our current keys are...",
			value: `${spt.emojis.find(emoji => emoji.name === "shatterskey")} ${afkObj['key']}`
		},
		{
			name: "Location of the run:",
			value: `${afkObj['location']}`
		},
		{
			name: "Our supreme priests are:",
			value: `${spt.emojis.find(emoji => emoji.name === "priest")} ${supremePriestMessage}`
		},
		{
			name: "Our mystics are:",
			value: `${spt.emojis.find(emoji => emoji.name === "mystic")} ${mysticMessage}`
		},
		{
			name: "Nitro boosters with location:",
			value: `${spt.emojis.find(emoji => emoji.name === "nitro")} ${ntrMsg}`
		}
		]
	};

	return embed;
}

module.exports = updateEndedCP;