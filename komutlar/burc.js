const { EmbedBuilder, SelectMenuBuilder, ActionRowBuilder } = require("discord.js");

const config = require(`../config.js`)



exports.run = async (client, msg) => {

    if (!msg.member.permissions.has("Administrator")) return msg.channel.reply({ content: ` bu komutu kullanmak için \`Administrator\` yetkisine sahip olmalısın.`})



    const rolembed = new EmbedBuilder()

    .setAuthor({ name: `${msg.guild.name} Rol Menüsü`})

    .setColor("Random")

    .setFooter({ text: `${config.Footer}`})

    .setThumbnail(msg.guild.iconURL())

    .setDescription(`Sunucumuzda farklı burç rolleri için aşağıdan istediğiniz burcun rolünü seçebilirsiniz. Roller: 

- Koç: <@&${config.koç}>

- Boğa: <@&${config.boğa}>

- İkizler: <@&${config.ikizler}>

- Yengeç: <@&${config.yengeç}>

- Aslan: <@&${config.aslan}>

- Başak: <@&${config.başak}>

- Terazi: <@&${config.terazi}>

- Akrep: <@&${config.akrep}>

- Yay: <@&${config.yay}>

- Oğlak: <@&${config.oğlak}>

- Kova: <@&${config.kova}>`)

    const roles = new SelectMenuBuilder()

    .setCustomId("burc")

    .setPlaceholder(`Burç Rol menüsü!`)

    .setMinValues(1)

    .setMaxValues(2)

    .addOptions(

        {

            label: "Koç | ♈",

            value: "koç",

            description: "@Koç | ♈ rolünü üzerinize alırsınız"

        }, 

        {

            label: "Boğa | ♉",

            value: "boğa",

            description: "@Boğa | ♉ rolünü üzerinize alırsınız"

        },

        {

            label: "İkizler | ♊",

            value: "ikizler",

            description: "@İkizler | ♊ rolünü üzerinize alırsınız"

        },

        {

            label: "Yengeç | ♋",

            value: "yengeç",

            description: "@Yengeç | ♋ rolünü üzerinize alırsınız"

        }, 

        {

            label: "Aslan | ♌",

            value: "aslan",

            description: "@Aslan | ♌ rolünü üzerinize alırsınız"

        },

        {

            label: "Başak | ♍",

            value: "başak",

            description: "@Başak | ♍ rolünü üzerinize alırsınız"

        },

        {

            label: "Terazi | ♎",

            value: "terazi",

            description: "@Terazi | ♎ rolünü üzerinize alırsınız"

        },

        {

            label: "Akrep | ♏",

            value: "akrep",

            description: "@Akrep | ♏ rolünü üzerinize alırsınız"

        },

        {

            label: "Yay | ♐",

            value: "yay",

            description: "@Yay | ♐ rolünü üzerinize alırsınız"

        },

        {

            label: "Oğlak | ♑",

            value: "oğlak",

            description: "@Oğlak | ♑ rolünü üzerinize alırsınız"

        },

        {

            label: "Kova | ♒",

            value: "kova",

            description: "@Kova | ♒ rolünü üzerinize alırsınız"

        },

        {

            label: "Balık | ♓",

            value: "balık",

            description: "@Balık | ♓ rolünü üzerinize alırsınız"

        },

        {

            label: "Rol İstemiyorum",

            value: "rol_cikarrr",

            description: "Renk rollerinizi üzerinizden alır"

        }

    )

    const row2 = new ActionRowBuilder()

    .addComponents(roles)



    msg.channel.send({ embeds: [rolembed], components: [row2]})



};

exports.conf = {

  aliases: ["burç-menü"]

};



exports.help = {

  name: "burc"

};
