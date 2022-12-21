const Discord = require('discord.js-selfbot');
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const client = new Discord.Client({intents: [
    'MessageContent',
    'Guilds',
    'GuildMessages',
    'DirectMessages',
    'DirectMessageTyping',
    'GuildMessageTyping',
    'GuildChannel',
    
]});

let channeles = ['913179083460984886', '1055107233509290064'];//    Liste des id des channelles a indiqué (ne pas oublié les virgules et à mettre en ' ') ( il y à 2 exemple à changer)
let chan;// Varible de l'envoi

client.on('ready', async () => {//  quand bot on:

    console.log(`Logged in as ${client.user.tag}!`);//  Vérification que le bot et Co

    for(let i = 0; i < channeles.length; i++)// Pour var i; tant que i et plus petit que la longueur de la liste; ajouté 1 à i
    {
    chan = client.channels.cache.find(ch => ch.id === channeles[i]); // varialbe de l'envoi = à trouver le channel avec l'id de l'élément i de la liste 
    chan.send("test"); //   Message à envoyer
    await sleep(60000);//   Delay en MilliSeconde Réglable
    }

});

client.login('Le TOKEN');//   Token du compte 