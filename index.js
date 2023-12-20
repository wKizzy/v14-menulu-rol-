const { Client, TextInputStyle, ButtonStyle, ButtonBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [ Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const { readdirSync } = require("fs")
const moment = require("moment");
const config = require("./config.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const db = require("orio.db");


module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token).catch(e => {
console.log("Tokeninde Hatan Var Bota bağlanamadı | Airfax")
})

//_______________________________________KOMUTLAR_____________________________________\\
client.on("interactionCreate", async (i) => {

    

    if (i.isSelectMenu()) {
        let choice = i.values[0]
        if (choice === "d_bildirim") {
            if (!i.member.roles.cache.has(config.duyurubildirim)) {
                i.reply({ content: "Duyuru Bildirim rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.duyurubildirim)
            } else {
                if (i.member.roles.cache.has(config.duyurubildirim)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız.", ephemeral: true})
                }
            }
        }
        if (choice === "c_katilimcisi") {
            if (!i.member.roles.cache.has(config.cekilisKatılımcısı)) {
                i.reply({ content: "Çekiliş Katılımcısı rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.cekilisKatılımcısı)
            } else {
                if (i.member.roles.cache.has(config.cekilisKatılımcısı)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız.", ephemeral: true})
                }
            }
        }
        if (choice === "e_katilimcisi") {
            if (!i.member.roles.cache.has(config.etkinlikKatılımcısı)) {
                i.reply({ content: "Etkinlik Katılımcısı rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.etkinlikKatılımcısı)
            } else {
                if (i.member.roles.cache.has(config.etkinlikKatılımcısı)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "rol_cikar") {
            if (i.member.roles.cache.has(config.cekilisKatılımcısı) || i.member.roles.cache.has(config.etkinlikKatılımcısı)) {
                i.reply({ content: "Rol üzerinizden alındı", ephemeral: true})
                i.member.roles.remove(config.cekilisKatılımcısı)
                i.member.roles.remove(config.etkinlikKatılımcısı)
            } else {
                if (!i.member.roles.cache.has(config.cekilisKatılımcısı) || !i.member.roles.cache.has(config.etkinlikKatılımcısı)) {
                    i.reply({ content: "Rol zaten üzerinizde yok :face_with_raised_eyebrow:", ephemeral: true})
                }
            }
        }
        if (choice === "kirmizi") {
            if (!i.member.roles.cache.has(config.kirmizi)) {
                i.reply({ content: "@🍓 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.kirmizi)
            } else {
                if (i.member.roles.cache.has(config.kirmizi)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız.", ephemeral: true})
                }
            }
        }
        if (choice === "mavi") {
            if (!i.member.roles.cache.has(config.mavi)) {
                i.reply({ content: "@🌊 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.mavi)
            } else {
                if (i.member.roles.cache.has(config.mavi)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız.", ephemeral: true})
                }
            }
        }
        if (choice === "yesil") {
            if (!i.member.roles.cache.has(config.yesil)) {
                i.reply({ content: "@🌵 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.yesil)
            } else {
                if (i.member.roles.cache.has(config.yesil)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "mor") {
            if (!i.member.roles.cache.has(config.mor)) {
                i.reply({ content: "@🍇 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.mor)
            } else {
                if (i.member.roles.cache.has(config.mor)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "pembe") {
            if (!i.member.roles.cache.has(config.pembe)) {
                i.reply({ content: "@🌸 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.pembe)
            } else {
                if (i.member.roles.cache.has(config.pembe)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "kahverengi") {
            if (!i.member.roles.cache.has(config.kahverengi)) {
                i.reply({ content: "@🪵 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.kahverengi)
            } else {
                if (i.member.roles.cache.has(config.kahverengi)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "siyah") {
            if (!i.member.roles.cache.has(config.siyah)) {
                i.reply({ content: "@🏴 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.siyah)
            } else {
                if (i.member.roles.cache.has(config.siyah)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
        if (choice === "beyaz") {
            if (!i.member.roles.cache.has(config.beyaz)) {
                i.reply({ content: "@☁️ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.beyaz)
            } else {
                if (i.member.roles.cache.has(config.beyaz)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
       if (choice === "renk_cikarr") {
    const renkRolleri = {
        kirmizi: config.kirmizi,
        mavi: config.mavi,
        yesil: config.yesil,
        mor: config.mor,
        pembe: config.pembe,
        kahverengi: config.kahverengi,
        siyah: config.siyah,
        beyaz: config.beyaz,
    };

    for (const renk in renkRolleri) {
        const rolID = renkRolleri[renk];

        if (i.member.roles.cache.has(rolID)) {
            i.reply({ content: `${renk} rengine özel rolünüz üzerinizden alındı`, ephemeral: true });
            i.member.roles.remove(rolID);
        } else {
            i.reply({ content: `${renk} rengine özel rolünüz zaten üzerinizde değil :face_with_raised_eyebrow:`, ephemeral: true });
        }
    }
}
if (choice === "koç") {
            if (!i.member.roles.cache.has(config.koç)) {
                i.reply({ content: "@Koç | ♈ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.koç)
            } else {
                if (i.member.roles.cache.has(config.koç)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "boğa") {
            if (!i.member.roles.cache.has(config.boğa)) {
                i.reply({ content: "@Boğa | ♉ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.boğa)
            } else {
                if (i.member.roles.cache.has(config.boğa)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "ikizler") {
            if (!i.member.roles.cache.has(config.ikizler)) {
                i.reply({ content: "@İkizler | ♊ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.ikizler)
            } else {
                if (i.member.roles.cache.has(config.ikizler)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }  
if (choice === "yengeç") {
            if (!i.member.roles.cache.has(config.yengeç)) {
                i.reply({ content: "@Yengeç | ♋ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.yengeç)
            } else {
                if (i.member.roles.cache.has(config.yengeç)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }      
if (choice === "aslan") {
            if (!i.member.roles.cache.has(config.aslan)) {
                i.reply({ content: "@Aslan | ♌ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.aslan)
            } else {
                if (i.member.roles.cache.has(config.aslan)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "başak") {
            if (!i.member.roles.cache.has(config.başak)) {
                i.reply({ content: "@Başak | ♍ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.başak)
            } else {
                if (i.member.roles.cache.has(config.başak)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "terazi") {
            if (!i.member.roles.cache.has(config.terazi)) {
                i.reply({ content: "@Terazi | ♎ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.terazi)
            } else {
                if (i.member.roles.cache.has(config.terazi)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "akrep") {
            if (!i.member.roles.cache.has(config.akrep)) {
                i.reply({ content: "@Akrep | ♏ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.akrep)
            } else {
                if (i.member.roles.cache.has(config.akrep)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "yay") {
            if (!i.member.roles.cache.has(config.yay)) {
                i.reply({ content: "@Yay | ♐ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.yay)
            } else {
                if (i.member.roles.cache.has(config.yay)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "oğlak") {
            if (!i.member.roles.cache.has(config.oğlak)) {
                i.reply({ content: "@Oğlak | ♑ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.oğlak)
            } else {
                if (i.member.roles.cache.has(config.oğlak)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "kova") {
            if (!i.member.roles.cache.has(config.kova)) {
                i.reply({ content: "@Kova | ♒ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.kova)
            } else {
                if (i.member.roles.cache.has(config.kova)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        } 
if (choice === "balık") {
            if (!i.member.roles.cache.has(config.balık)) {
                i.reply({ content: "@Balık | ♓ rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.balık)
            } else {
                if (i.member.roles.cache.has(config.balık)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }       
if (choice === "rol_cikarrr") {
    const burcRolleri = {
        koc: config.koç,
        boga: config.boğa,
        ikizler: config.ikizler,
        yengec: config.yengeç,
        aslan: config.aslan,
        basak: config.baiak,
        terazi: config.terazi,
        akrep: config.akrep,
        yay: config.yay,
        oglak: config.oğlak,
        kova: config.kova,
    };

    for (const burc in burcRolleri) {
        const rolID = burcRolleri[burc];

        if (i.member.roles.cache.has(rolID)) {
            i.reply({ content: `${burc} burcuna özel rolünüz üzerinizden alındı`, ephemeral: true });
            i.member.roles.remove(rolID);
        } else {
            i.reply({ content: `${burc} burcuna özel rolünüz zaten üzerinizde değil :face_with_raised_eyebrow:`, ephemeral: true });
        }
    }
}
if (choice === "sevgilimvar") {
            if (!i.member.roles.cache.has(config.sevgilimvar)) {
                i.reply({ content: "@Sevgilim Var 💍 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.sevgilimvar)
            } else {
                if (i.member.roles.cache.has(config.sevgilimvar)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "sevgilimyok") {
            if (!i.member.roles.cache.has(config.sevgilimyok)) {
                i.reply({ content: "@Sevgilim Yok 💔 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.sevgilimyok)
            } else {
                if (i.member.roles.cache.has(config.sevgilimyok)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "nomanit") {
            if (!i.member.roles.cache.has(config.nomanit)) {
                i.reply({ content: "@No Manit No Dırdır 🤍 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.nomanit)
            } else {
                if (i.member.roles.cache.has(config.nomanit)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }
if (choice === "lgbt") {
            if (!i.member.roles.cache.has(config.lgbt)) {
                i.reply({ content: "@LGBT 🏳️‍🌈 rolü üzerinize eklendi", ephemeral: true})
                i.member.roles.add(config.lgbt)
            } else {
                if (i.member.roles.cache.has(config.lgbt)) {
                    i.reply({ content: "Rol zaten üzerinizde var, eğer rolü üzerinizden almak istiyorsanız menüden Rol İstemiyorum seçeneğine tıklayınız", ephemeral: true})
                }
            }
        }     
if (choice === "rol_cikarrrr") {
    const iliskiRolleri = {
        koc: config.koç,
        boga: config.boğa,
        ikizler: config.ikizler,
        yengec: config.yengeç,
    };

    for (const iliski in iliskiRolleri) {
        const rolID = iliskiRolleri[iliski];

        if (i.member.roles.cache.has(rolID)) {
            i.reply({ content: `${iliski} burcuna özel rolünüz üzerinizden alındı`, ephemeral: true });
            i.member.roles.remove(rolID);
        } else {
            i.reply({ content: `${iliski} burcuna özel rolünüz zaten üzerinizde değil :face_with_raised_eyebrow:`, ephemeral: true });
        }
    }
}            
    }
}
) 
