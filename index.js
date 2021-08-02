const Discord = require('discord.js');
const bot = new Discord.Client();

const channelName = '#kek';
/**
*
*@param {String} underTheBed под кроватью (голосовой)
*@param {String} lookIn		 заглянуть под кровать (голосовой)
*
*/
//var userPresence = [];
var userTimeout = [];
var userTime = {};


var userPresence1 = [];
var userPresence2 = [];
var userPresence3 = [];
var userPresence4 = [];
var userPresence5 = [];
var userPresence6 = [];
var userPresence7 = [];
var userPresence8 = [];
var userPresence9 = [];
var userPresence10 = [];

/*
Корчма Original
*/
var AFK =					'413290055868743690'; 	//AFK
var nearTheWindow = 		'413653966841184256'; 	//голосовой у окошка
var nearTheFireplace = 		'413285556060028933'; 	//голосовой возле камина
var behindTheBarCounter =	'428908098120318996'; 	//голосовой за барной стойкой
var withBitches = 			'428908798665555979'; 	//голосовой с куртизанками
var closerToTheScene = 		'413643751647608833'; 	//голосовой ближе к сцене
var inTheCornenr = 			'418339334710755338'; 	//голосовой в уголке
/*
Кровать
*/
var lookIn = 				'708816966869319841';	//голосовой заглять под
var underTheBed = 			'686452594926682124';	//голосовой под кроватью
/*
Стримерская
*/
var russianDespair13 = 		'436038267213971456'; 	//голосовой russian_despair_13
var suckItUnsubs = 			'527139151275884555'; 	//голосовой АНСАБЫ САСАТТТ

var allChannels = [];
var allUserPresence = [];

allChannels.push(nearTheWindow, nearTheFireplace, behindTheBarCounter, withBitches, closerToTheScene, inTheCornenr, lookIn, underTheBed, russianDespair13, suckItUnsubs);
allUserPresence.push(userPresence1, userPresence2, userPresence3, userPresence4, userPresence5, userPresence6, userPresence7, userPresence8, userPresence9, userPresence10);

var lookInQueue = '716873941947383818'; //текстовой. очередь

const cron = require("node-cron");
const express = require("express");
const fs = require('fs');

app = express();

cron.schedule("0 * * * *", function() {
	resetBot();
});

cron.schedule("5 0 * * *", function() {
	copyFiles(function(){
		deleteFiles();
		
	});
});

app.listen(3128);



const token = 'NjI5MjEyNTU1NzYzNjQ2NDY0.XZnExg.RH093mqF9R8XPVQEOOnLMlOsMo8';
const PREFIX = 'Опоссум, ';

bot.on('ready',  message=>{

	userPresence1 = [];
	userPresence2 = [];
	userPresence3 = [];
	userPresence4 = [];
	userPresence5 = [];
	userPresence6 = [];
	userPresence7 = [];
	userPresence8 = [];
	userPresence9 = [];
	userPresence10 = [];
	
	allChannels = [];
	allUserPresence = [];
	
	allChannels.push(nearTheWindow, nearTheFireplace, behindTheBarCounter, withBitches, closerToTheScene, inTheCornenr, lookIn, underTheBed, russianDespair13, suckItUnsubs);
	allUserPresence.push(userPresence1, userPresence2, userPresence3, userPresence4, userPresence5, userPresence6, userPresence7, userPresence8, userPresence9, userPresence10);

    console.log('\nthis bot is online\n');
	
	checkVoiceChannels();
})

bot.on('disconnect', () =>{

	//updateAllPresenceUsers(function(){
		console.log('this bot is offline');	
	//});

    
	
})

/**
*
* backup for stats.json
*
*/
function copyFiles(callback){
	// destination.txt will be created or overwritten by default.
	console.log('\nbackupping stats file...\n');

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fileName = 'backups/stats_' + day + '.' + month + '.' + year + '.json';
	fs.copyFile('stats.json', fileName, (err) => {
		if (err) throw err;
		console.log('stats file was backupped!\n');
	});

	callback();
}
function deleteFiles(){
	// destination.txt will be created or overwritten by default.
	//console.log('\nbackupping stats file...\n');

	let monthLength = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
	let date = new Date();
	//let date = new Date('January 4, 21 00:20:18');
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	let prevMonth;
    let _3dayBackup;
   	if(month == 1){
    	prevMonth = 12;
    	year = year - 1;
    }else{
    	prevMonth = month - 1;
    }


    switch(day){
    	case 1:
			_3dayBackup = monthLength[prevMonth] - 2;
			month = prevMonth;
    		break;
    	case 2:
			_3dayBackup = monthLength[prevMonth] - 1;
			month = prevMonth;
    		break;
    	case 3:
			_3dayBackup = monthLength[prevMonth];
			month = prevMonth;
    		break;
    	default:
    		_3dayBackup = day - 3;
    		break;
    }

    let fileName = 'backups/stats_' + _3dayBackup + '.' + month + '.' + year + '.json';
    try{
    	fs.unlinkSync(fileName);
    	console.log('\n' + 'file deleted -> ' + fileName + '\n');
    }
    catch(e){
    	console.log(e + '\n' + 'file not found -> ' + fileName + '\n');
    }
	

}

/**
 * 
 * 
 * 
 * 
 */

function checkVoiceChannels(){		
	for (let i = 0; i < 10; i++){
		let param1 = bot.channels.get(allChannels[i]);
		let param2 = allUserPresence[i];
		let param3 = ' уже сидит, чилит ';
		let str;
		
		switch(i){
			case 0:
				str = 'у окошка '
				break;
			case 1:
				str = 'возле камина '
				break;
			case 2:
				str = 'за барной стойкой '
				break;
			case 3:
				str = 'с куртизанками '
				break;
			case 4:
				str = 'ближе к сцене '
				break;
			case 5:
				str = 'в уголке '
				break;
			case 6:
				str = 'рядом с кроватью '
				break;
			case 7:
				str = 'под кроватью '
				break;
			case 8:
				str = 'в Russian_Despair_13 '
				break;
			case 9:
				str = ', а АНСАБЫ САСАТТТ '
				break;
		}
		param3 += str;

		
		allUserPresence[i] = userJoinedChannel(param1, param2, param3);
		
		//console.log(param1, param2, param3, param4);
		//console.log(test);
	}
	userPresence1 = allUserPresence[0];
	userPresence2 = allUserPresence[1];
	userPresence3 = allUserPresence[2];
	userPresence4 = allUserPresence[3];
	userPresence5 = allUserPresence[4];
	userPresence6 = allUserPresence[5];
	userPresence7 = allUserPresence[6];
	userPresence8 = allUserPresence[7];
	userPresence9 = allUserPresence[8];
	userPresence10 = allUserPresence[9];
}


function get_Date(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (date.getHours() < 10){
        hours = "0" + date.getHours();
        }
    if (date.getMinutes() < 10){
        minutes = "0" + date.getMinutes();
    }
    if (date.getSeconds() < 10){
        seconds = "0" + date.getSeconds();
        }
    out = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
    return out;
}

function get_Time(time){
	let ms;
	let sec;
	let min;
	let hour;
	let day;
	let year;
	
	let timeArr = {};


	if((time / 24 / 60 / 60 / 1000) >= 1){
		day = Math.floor(time / 24 / 60 / 60 / 1000);
		time = time - (day * 24 * 60 * 60 * 1000);

		timeArr.day = day;
	}else{timeArr.day = 0}

	if((time / 60 / 60 / 1000) >= 1){
		hour = Math.floor(time / 60 / 60 / 1000);
		time = time - (hour * 60 * 60 * 1000);
		
		timeArr.hour = hour;
	}else{timeArr.hour = 0}

	if((time / 60 / 1000) >= 1){
		min = Math.floor(time / 60 / 1000);
		time = time - (min * 60 * 1000);
		
		timeArr.min = min;
	}else{timeArr.min = 0}

	if((time / 1000) >= 1){
		sec = Math.floor(time / 1000);
		time = time - (sec * 1000);
		ms = time;
		
		timeArr.sec = sec;
		timeArr.ms = ms;
	}else{timeArr.sec = 0; timeArr.ms = time}

	return timeArr;
	
}

function get_Ms(timeArr){
	let time = 0;
	time = timeArr.day * 24 * 60 * 60 * 1000;
	time += timeArr.hour * 60 * 60 * 1000;
	time += timeArr.min * 60 * 1000;
	time += timeArr.sec * 1000;
	time += timeArr.ms;
	
	return time;
}

function unique(arr) {
    let result = [];  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }  
    return result;
}

function channelNotification(value){
	bot.channels.get(lookInQueue).send('------------------------------------------\n' + value + ' заглянул. @here', {
    tts: true
    })
}
function logNotification(value, joinedMsg){
	
    console.log(value.user.username + joinedMsg + get_Date());
	console.log("----------------------------");
}
 
 
function userJoinedChannel(voiceChannel, userPresence, joinedMsg){
	if(voiceChannel.members != null){
		for (var [key, value] of voiceChannel.members) {			
			
            //if room was empty
            if (userPresence.toString().length == 0){
                //console.log('list was clear')
                userTimeout.push(new Date());
				
                userPresence.push(value);
				
				let timeData = {timeStart: new Date()};
				userTime[value.user.id] = timeData;
                logNotification(value, joinedMsg);		
				
				member_nickname = value;                    
				if(voiceChannel === bot.channels.get(lookIn)){channelNotification(value)};
				
            }else{
                    
                for (var i = 0; i <= userPresence.toString().length; i++){
                    if (userPresence[i] == value && new Date() - userTimeout[i] > 300000){
						
                        if(voiceChannel === bot.channels.get(lookIn)){channelNotification(value)};
                        userTimeout[i] = new Date();
                        if (!userPresence.includes(value)) {
							
                            userPresence.push(value);
							
							let timeData = {timeStart: new Date()};
							userTime[value.user.id] = timeData;
                            logNotification(value, joinedMsg);
							
                          }
                        break;
                    }else if(userPresence[i] == value){
                        //console.log('Timeout ' + (new Date() - userTimeout[i]) + '/300000 ms');
                        if (!userPresence.includes(value)) {
							
                            userPresence.push(value);
							
							let timeData = {timeStart: new Date()};
							userTime[value.user.id] = timeData;
							logNotification(value, joinedMsg);
                          }
                        break;
                    }
                    //If user was not in array
                    if(i == userPresence.toString().length){
                        userTimeout.push(new Date());
						
                        userPresence.push(value);
						
						let timeData = {timeStart: new Date()};
						userTime[value.user.id] = timeData;
						logNotification(value, joinedMsg)
						
						if(voiceChannel === bot.channels.get(lookIn)){channelNotification(value)};
                        break;
                    }
                }
            }
        }
	}
	return userPresence;
 }
 
function writeInFile2(callback){
	let statsFile = '';
	let userMs;
	let userStats2 = {};
	let getDate =  new Date();
	try{
		statsFile = JSON.parse(fs.readFileSync('stats.json', 'utf8'));
	}catch(e){
		statsFile;
	}

	for (let i = 0; i < 10; i++){
		let voiceChannel = bot.channels.get(allChannels[i]);

		if(voiceChannel.members != null){
			for (var [key, value] of voiceChannel.members) {
				userTime[value.user.id]['timeEnd'] = getDate;
				let timeSpent = userTime[value.user.id]['timeEnd'] - userTime[value.user.id]['timeStart'];
				let timeSpentArr = get_Time(timeSpent);

				let userStats = {};
				userStats[value.user.id] = timeSpentArr;

				userStats2 = statsFile;
				userMs = get_Ms(userStats[Object.keys(userStats)[0]]);
				let newUser = true;
				for (var id in statsFile){
					if(Object.keys(userStats)[0] == id){
						userMs = get_Ms(statsFile[id]) + userMs;
						userStats2[id] = get_Time(userMs);
						newUser = false;

						break;
					}
				}
				if(newUser){
					userStats2[Object.keys(userStats)[0]] = userStats[Object.keys(userStats)[0]];
				}

				if (userStats2 == ''){
					userStats2 = {};
				}

				


			};
		}
	}
fs.writeFile( "stats.json", JSON.stringify( userStats2 ), "utf8", callback );
}
	
function writeInFile(userStats, callback){
	let statsFile;
	let userMs;
	let newUser = true;
	let userStats2 = {};
	//statsFile = JSON.parse(fs.readFileSync('stats.json', 'utf8'));
	fs.readFile('stats.json', 'utf8', function(err, data) {
	  	if (err) throw err;
	  	statsFile = JSON.parse(data);
		userStats2 = statsFile;

		userMs = get_Ms(userStats[Object.keys(userStats)[0]]);

		for (var id in statsFile){
			if(Object.keys(userStats)[0] == id){
				userMs = get_Ms(statsFile[id]) + userMs;
				userStats2[id] = get_Time(userMs);
				newUser = false;
				break;
			}
		}
		if(newUser){
			userStats2[Object.keys(userStats)[0]] = userStats[Object.keys(userStats)[0]];
		}
		fs.writeFile( "stats.json", JSON.stringify( userStats2 ), "utf8", callback );
		
	});


	//statsFile = JSON.parse(fs.readFileSync('stats.json', 'utf8'));

}


function getStats(author, callback){
	let id = author.id


	var stats = author + " сидит в корчме: **0** дней, **0** часов, **0** минут, **0** секунд.";
	var userFound = false;
	let userInVoice = false;
	let userStats = {};


	for (let i = 0; i < 10; i++){
		let voiceChannel = bot.channels.get(allChannels[i]);
		if(voiceChannel.members != null){
			for (var [key, value] of voiceChannel.members) {
				if(value.user.id == author.id){
					userInVoice = true;
				}
			}
		}
	}

	if(userInVoice){
		userTime[id]['timeEnd'] = new Date();
		let timeSpent = userTime[id]['timeEnd'] - userTime[id]['timeStart'];
		let timeSpentArr = get_Time(timeSpent);
		userStats[id] = timeSpentArr;

		userTime[id]['timeStart'] = userTime[id]['timeEnd'];
	
		writeInFile(userStats, function(){

			fs.readFile('stats.json', 'utf8', function(err, data) {
				if (err) throw err;
				statsFile = JSON.parse(data);
				for (var idInFile in statsFile){
					if (id == idInFile){
						stats = statsFile[idInFile];
						stats = author + ' сидит в корчме: **' + stats.day+'** дней, **'+ stats.hour + '** часов, **' + stats.min + '** минут, **' + stats.sec + '** секунд.';
						
						break;
					}
				}
				callback(stats);
			});
		});
	}else{
			fs.readFile('stats.json', 'utf8', function(err, data) {
				if (err) throw err;
				statsFile = JSON.parse(data);
				for (var idInFile in statsFile){
					if (id == idInFile){

						stats = statsFile[idInFile];
						stats = author + ' сидит в корчме: **' + stats.day+'** дней, **'+ stats.hour + '** часов, **' + stats.min + '** минут, **' + stats.sec + '** секунд.';
						userFound = true;
						break;
					}
				}
				if(!userFound){
					let userStats = {};
					let emptyStats = {"day":0,"hour":0,"min":0,"sec":0,"ms":0};
					userStats[id] = emptyStats;
					writeInFile( userStats, function(){
						getStats(author, function(){});
					});
				}
				callback(stats);
			});
		}

}



function updateAllPresenceUsers(callback){
let someOneInVoice = false;
for (let i = 0; i < 10; i++){
	let voiceChannel = bot.channels.get(allChannels[i]);
	
	for (var [key, value] of voiceChannel.members) {
		if(value.user.id != null){

			someOneInVoice = true;
			break;
		}
		if(someOneInVoice){break;}
	}
}
if(someOneInVoice){
	writeInFile2(function(){
		
	});
}
callback();
}



 
function userLeftVoiceChannel(voiceChannel, userPresence, leftMsg){
	var currentUsersInChannel = [];
        var i = 0;
        //all users in current channel
        for (var [key, value] of voiceChannel.members) {
            currentUsersInChannel.push(value);
        }


        let userLeft = userPresence.filter(x => !currentUsersInChannel.includes(x));
        

		
		userTime[userLeft[0].user.id]['timeEnd'] = new Date();
		
		let timeSpent = userTime[userLeft[0].user.id]['timeEnd'] - userTime[userLeft[0].user.id]['timeStart'];
		
		let timeSpentArr = get_Time(timeSpent);
		
		let userStats = {};
		
		userStats[userLeft[0].user.id] = timeSpentArr;
		
		if(timeSpentArr.day != 0){
			console.log(userLeft[0].user.username + leftMsg + 'спустя ' + timeSpentArr.day + ' дней ' + timeSpentArr.hour + ' часов ' + timeSpentArr.min + ' минут ' + timeSpentArr.sec + ' секунд'); //+ get_Date());
		}			
		else if(timeSpentArr.hour != 0){
			console.log(userLeft[0].user.username + leftMsg + 'спустя ' + timeSpentArr.hour + ' часов ' + timeSpentArr.min + ' минут ' + timeSpentArr.sec + ' секунд');
		}		
		else if(timeSpentArr.min != 0){
			console.log(userLeft[0].user.username + leftMsg + 'спустя ' + timeSpentArr.min + ' минут ' + timeSpentArr.sec + ' секунд');
		}		
		else if(timeSpentArr.sec != 0){
			console.log(userLeft[0].user.username + leftMsg + 'спустя ' + timeSpentArr.sec + ' секунд');
		}

		writeInFile(userStats, function(){
			
		});

		
		
		
        userPresence = userPresence.filter(x => !userLeft.includes(x));
        console.log("----------------------------");		
		return userPresence;
}
 
 
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannelID;
    let oldUserChannel = oldMember.voiceChannelID;
    let voiceWaitingChannel = bot.channels.get(lookIn);
	let voiceUnderTheBed = bot.channels.get(underTheBed);
	let voiceRussialDespair13 = bot.channels.get(russianDespair13);
	let voiceSuckItUnsubs = bot.channels.get(suckItUnsubs);
	let voiceInTheCornenr = bot.channels.get(inTheCornenr);
	let voiceCloserToTheScene = bot.channels.get(closerToTheScene);
	let voiceWithBitches = bot.channels.get(withBitches);
	let voicebehindTheBarCounter = bot.channels.get(behindTheBarCounter);
	let voiceNearTheFireplace = bot.channels.get(nearTheFireplace);
	let voiceNearTheWindow = bot.channels.get(nearTheWindow);
	


	if(oldUserChannel === nearTheWindow && newUserChannel !== nearTheWindow){
        // User leaves a voice channel		
		userPresence1 =	userLeftVoiceChannel(voiceNearTheWindow, userPresence1, ' отошел от окошка ');
    }	
	if(oldUserChannel === nearTheFireplace && newUserChannel !== nearTheFireplace){
        // User leaves a voice channel		
		userPresence2 =	userLeftVoiceChannel(voiceNearTheFireplace, userPresence2, ' отошел от камина ');
    }	
	if(oldUserChannel === behindTheBarCounter && newUserChannel !== behindTheBarCounter){
        // User leaves a voice channel		
		userPresence3 =	userLeftVoiceChannel(voicebehindTheBarCounter, userPresence3, ' вышел из-за барной стойки ');
    }	
	if(oldUserChannel === withBitches && newUserChannel !== withBitches){
        // User leaves a voice channel		
		userPresence4 =	userLeftVoiceChannel(voiceWithBitches, userPresence4, ' оставил куртизанок наедине ');
    }
	if(oldUserChannel === closerToTheScene && newUserChannel !== closerToTheScene){
        // User leaves a voice channel		
		userPresence5 =	userLeftVoiceChannel(voiceCloserToTheScene, userPresence5, ' отошел от сцены ');
    }	
	if(oldUserChannel === inTheCornenr && newUserChannel !== inTheCornenr){
        // User leaves a voice channel		
		userPresence6 =	userLeftVoiceChannel(voiceInTheCornenr, userPresence6, ' больше не сидит в уголке ');
    }	
	if(oldUserChannel === lookIn && newUserChannel !== lookIn){
        // User leaves a voice channel		
		userPresence7 =	userLeftVoiceChannel(voiceWaitingChannel, userPresence7, ' перестал заглядывать ');
    }	
	if(oldUserChannel === underTheBed && newUserChannel !== underTheBed){
        // User leaves a voice channel
		userPresence8 = userLeftVoiceChannel(voiceUnderTheBed, userPresence8, ' убежал из под кровати ');        
    }	
	if(oldUserChannel === russianDespair13 && newUserChannel !== russianDespair13){
        // User leaves a voice channel
		userPresence9 = userLeftVoiceChannel(voiceRussialDespair13, userPresence9, ' покинул Russian_Despair_13 ');        
    }
	if(oldUserChannel === suckItUnsubs && newUserChannel !== suckItUnsubs){
        // User leaves a voice channel
		userPresence10 = userLeftVoiceChannel(voiceSuckItUnsubs, userPresence10, ' ушел из АНСАБЫ САСАТТТ ');        
    }
	
	

    if(newUserChannel === nearTheWindow && oldUserChannel !== nearTheWindow) {
        // User joins the voice channel            		
        userPresence1 = userJoinedChannel(voiceNearTheWindow, userPresence1, ' подошел к окошку ');
    }
    if(newUserChannel === nearTheFireplace && oldUserChannel !== nearTheFireplace) {
        // User joins the voice channel            		
        userPresence2 = userJoinedChannel(voiceNearTheFireplace, userPresence2, ' подошел к камину ');
    }
    if(newUserChannel === behindTheBarCounter && oldUserChannel !== behindTheBarCounter) {
        // User joins the voice channel            		
        userPresence3 = userJoinedChannel(voicebehindTheBarCounter, userPresence3, ' встал за барную стойку ');
    }
    if(newUserChannel === withBitches && oldUserChannel !== withBitches) {
        // User joins the voice channel            		
        userPresence4 = userJoinedChannel(voiceWithBitches, userPresence4, ' подкатил к куртизанкам ');
    }
    if(newUserChannel === closerToTheScene && oldUserChannel !== closerToTheScene) {
        // User joins the voice channel            		
        userPresence5 = userJoinedChannel(voiceCloserToTheScene, userPresence5, ' подошел ближе к сцене ');
    }
    if(newUserChannel === inTheCornenr && oldUserChannel !== inTheCornenr) {
        // User joins the voice channel            		
        userPresence6 = userJoinedChannel(voiceInTheCornenr, userPresence6, ' забился в уголок ');
    }
    if(newUserChannel === lookIn && oldUserChannel !== lookIn) {
        // User joins the voice channel            		
        userPresence7 = userJoinedChannel(voiceWaitingChannel, userPresence7, ' заглянул под кровать ');
    }
	if(newUserChannel === underTheBed && oldUserChannel !== underTheBed) {
        // User joins the voice channel  
        userPresence8 = userJoinedChannel(voiceUnderTheBed, userPresence8, ' уселся под кроватью ');
    }
	if(newUserChannel === russianDespair13 && oldUserChannel !== russianDespair13) {
        // User joins the voice channel  
        userPresence9 = userJoinedChannel(voiceRussialDespair13, userPresence9, ' оказался в Russian_Despair_13 ');
    }
	if(newUserChannel === suckItUnsubs && oldUserChannel !== suckItUnsubs) {
        // User joins the voice channel  
        userPresence10 = userJoinedChannel(voiceSuckItUnsubs, userPresence10, ' оказался в АНСАБЫ САСАТТТ ');
    }
	
})
bot.on('message', message=>{
    let str = message.content.toLowerCase();
    //str = message.content.replace(' ','');
    
    if(message.author.id == '320863830974529537'){
    	//message.react('🤖');
    }


    switch(message.content){
        case 'ping':
            message.channel.send('pong')
            break;
        case 'website':
            message.channel.send('nope')
            break;
        case 'инфо':
            message.channel.send('Я - опоссум')
            break;
        case 'kek':
            try{
                message.channel.send('<:pepe:413291047200751626>')
            }
            catch(e){
                message.channel.send('Не могу найти пепу(((')
            }
            break;   
        case 'say':
            message.tts = true;
            message.channel.send('/tts aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            //message.tts = false;
            break;
		case 'restart':
			if(message.author.id == '390233528966578189'){
				resetBot();	
			}
			break;
			
			

			//message.channel.send(statsMsg);
    }

    //Обращение к боту

    if(str.startsWith("!stats")){
    	//command !stats <@username>
    	if(str.substr(7).startsWith('<@') && str.substr(7).endsWith('>')){
    		
    		//message.channel.send(user);
    		var usernameId = /[0-9]+/i.exec(str)[0]
    		usernameId = usernameId.toString();

    		let username = bot.users.get(usernameId);
    		getStats(username, function(statsMsg){

				message.channel.send(statsMsg);
			});
    	}
    	// command !stats
    	else if(str.substr(7) == ''){
    		getStats(message.author, function(statsMsg){
				message.channel.send(statsMsg);
			});
    	}
    }

    if(str.startsWith("!полублок")){
    	message.delete(0);
    	message.channel.send("<:halfblock:727193389396656229>");
    }

    if((str.startsWith("<@629212555763646464>") || str.startsWith("опоссум") || (str.search("крыса") != -1)) && !message.author.bot){
        if(str.search("привет") != -1)
            message.reply("Привет!");
        else{
            message.reply("Я не понимаю что ты от меня хочешь");
        }
    }
    

    /*
    switch((message.content.startsWith("<@629212555763646464>") || message.content.startsWith("опоссум")) && (!message.author.bot)) {
        case (message.content.search("ы") != -1):
            message.reply("<:bl:583711725866450953>");
            break;
        case (message.content.search("123") != -1):
            message.reply("+бан");
            break;
        default:
            message.reply("Чего тебе?");
            break;
    }*/
    
})

// Turn bot off (destroy), then turn it back on
function resetBot() {
	console.log('\nRestarting...\n');
	updateAllPresenceUsers(function(){

	    bot.destroy();
	    bot.login(token);
	});
}


bot.on('error', (err) => {
   console.log(err.message);
   resetBot();
});

bot.login(token);