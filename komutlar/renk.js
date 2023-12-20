const { EmbedBuilder, SelectMenuBuilder, ActionRowBuilder } = require("discord.js");
const config = require(`../config.js`)

exports.run = async (client, msg) => {
    if (!msg.member.permissions.has("Administrator")) return msg.channel.reply({ content: ` bu komutu kullanmak için \`Administrator\` yetkisine sahip olmalısın.`})

    const rolembed = new EmbedBuilder()
    .setAuthor({ name: `${msg.guild.name} Rol Menüsü`})
    .setColor("Random")
    .setFooter({ text: `${config.Footer}`})
    .setThumbnail(msg.guild.iconURL())
    .setDescription(`Sunucumuzda Farklı isim renkleri için aşşağıdan istediğinz rengin rolünü seçebilirsiniz. Roller; <@&${config.kirmizi}> & <@&${config.mavi}> & <@&${config.yesil}> & <@&${config.mor}> & <@&${config.pembe}> & <@&${config.kahverengi}> & <@&${config.siyah}> & <@&${config.beyaz}>`)
    const roles = new SelectMenuBuilder()
    .setCustomId("renk")
    .setPlaceholder(`Renk Rol menüsü!`)
    .setMinValues(1)
    .setMaxValues(2)
    .addOptions(
        {
            label: "Kırmızı",
            value: "kirmizi",
            description: "@🍓 rolünü üzerinize alırsınız"
        }, 
        {
            label: "Mavi",
            value: "mavi",
            description: "@🌊 rolünü üzerinize alırsınız"
        },
        {
            label: "Yeşil",
            value: "yesil",
            description: "@🌵 rolünü üzerinize alırsınız"
        },
        {
            label: "Mor",
            value: "mor",
            description: "@🍇 rolünü üzerinize alırsınız"
        }, 
        {
            label: "Pembe",
            value: "pembe",
            description: "@🌸 rolünü üzerinize alırsınız"
        },
        {
            label: "Kahverengi",
            value: "kahverengi",
            description: "@🪵 rolünü üzerinize alırsınız"
        },
        {
            label: "Siyah",
            value: "siyah",
            description: "@🏴 rolünü üzerinize alırsınız"
        },
        {
            label: "Beyaz",
            value: "beyaz",
            description: "@☁️ rolünü üzerinize alırsınız"
        },
        {
            label: "Rol İstemiyorum",
            value: "rol_cikarr",
            description: "Renk rollerinizi üzerinizden alır"
        }
    )
    const row2 = new ActionRowBuilder()
    .addComponents(roles)

    msg.channel.send({ embeds: [rolembed], components: [row2]})

};
exports.conf = {
  aliases: ["renk-menü"]
};

exports.help = {
  name: "renk"
};
