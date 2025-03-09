
const { cmd } = require("../command");
const moment = require("moment-timezone");
let botStartTime = Date.now();

const ALIVE_IMG = "https://i.postimg.cc/3RgPr15t/IMG-20250305-WA0008.jpg";

cmd({
  pattern: "alive",
  desc: "Check if the bot is active.",
  category: "info",
  react: "🚀",
  filename: __filename
}, async (conn, mek, m, { reply, from }) => {
  try {
    const pushname = m.pushName || "User";
    const harareTime = moment().tz("Africa/Harare").format("HH:mm:ss");
    const harareDate = moment().tz("Africa/Harare").format("dddd, MMMM Do YYYY");
    const runtimeMilliseconds = Date.now() - botStartTime;
    const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
    const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
    const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));
    const formattedInfo = `
 🏮 *SUBZERO MD STATUS* 🏮 

  *Hi👋😄 ${pushname}*

 *⏰ Time: ${harareTime}*
 *📆 Date: ${harareDate}*
 *🔋 Uptime: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds*

 \`Status\`: *Subzero is online! 🤗🚀*

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐑 𝐅𝐑𝐀𝐍𝐊. 🔗
`.trim();

    if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
      throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
    }

    await conn.sendMessage(from, {
      image: { url: ALIVE_IMG },
      caption: formattedInfo,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363304325601080@newsletter',
          newsletterName: '⁑ ѕυϐzєяο м∂ ⁑ ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

// Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-theone.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    
  } catch (error) {
    console.error("Error in alive command: ", error);
    const errorMessage = `
 An error occurred while processing the alive command.
 Error Details: ${error.message}
Please report this issue or try again later.
`.trim();
    return reply(errorMessage);
  }
});

/*



const _0x271269=_0x2a4f;(function(_0x166436,_0x27beb6){const _0xd019b0=_0x2a4f,_0x18fa21=_0x166436();while(!![]){try{const _0x171214=parseInt(_0xd019b0(0x1d3))/0x1*(parseInt(_0xd019b0(0x1e5))/0x2)+-parseInt(_0xd019b0(0x1bb))/0x3+-parseInt(_0xd019b0(0x1cc))/0x4+-parseInt(_0xd019b0(0x164))/0x5+parseInt(_0xd019b0(0x15b))/0x6*(parseInt(_0xd019b0(0x1cf))/0x7)+parseInt(_0xd019b0(0x156))/0x8*(parseInt(_0xd019b0(0x1be))/0x9)+parseInt(_0xd019b0(0x16f))/0xa*(parseInt(_0xd019b0(0x163))/0xb);if(_0x171214===_0x27beb6)break;else _0x18fa21['push'](_0x18fa21['shift']());}catch(_0x17ff17){_0x18fa21['push'](_0x18fa21['shift']());}}}(_0x3ca0,0xb7052));const _0x346e6a=(function(){const _0x10b4e5=_0x2a4f,_0x30b866={'MEHJg':function(_0xa6b165,_0x2c54be){return _0xa6b165(_0x2c54be);},'npyLr':function(_0x1334e6,_0x3fa3fe){return _0x1334e6===_0x3fa3fe;},'mbkRI':_0x10b4e5(0x155),'qKmjD':_0x10b4e5(0x1b9),'uKKNg':function(_0x24b02c,_0x26d0ed){return _0x24b02c!==_0x26d0ed;},'kcNjv':_0x10b4e5(0x1d7),'GnpJH':_0x10b4e5(0x1b0),'VGOVq':'VxPev','XuyhR':_0x10b4e5(0x154)};let _0x463bf0=!![];return function(_0x512b75,_0x3a3aff){const _0x180c57=_0x10b4e5;if(_0x30b866[_0x180c57(0x1c3)]===_0x30b866[_0x180c57(0x19c)])return _0x6900aa;else{const _0x2f915e=_0x463bf0?function(){const _0x2fe50b=_0x180c57,_0x2fac19={'QdxDG':function(_0x5b0842,_0x179f99){return _0x30b866['MEHJg'](_0x5b0842,_0x179f99);}};if(_0x30b866[_0x2fe50b(0x1b4)](_0x30b866['mbkRI'],_0x30b866[_0x2fe50b(0x178)]))return!![];else{if(_0x3a3aff){if(_0x30b866[_0x2fe50b(0x18f)](_0x30b866[_0x2fe50b(0x1bd)],_0x30b866[_0x2fe50b(0x1b6)])){const _0x5cfdaa=_0x3a3aff['apply'](_0x512b75,arguments);return _0x3a3aff=null,_0x5cfdaa;}else{if(_0x17929b)return _0x3d8121;else _0x2fac19['QdxDG'](_0x13fe24,0x0);}}}}:function(){};return _0x463bf0=![],_0x2f915e;}};}());(function(){const _0x5343a1=_0x2a4f,_0x4e8295={'jkIrj':_0x5343a1(0x15c),'PlhNw':_0x5343a1(0x1ad),'Zzcvg':_0x5343a1(0x18b),'oMTZz':function(_0x4fca8d,_0x50e615){return _0x4fca8d+_0x50e615;},'IzThZ':_0x5343a1(0x18c),'tCAbV':function(_0x799bd5,_0x2c2cae){return _0x799bd5(_0x2c2cae);},'jHfwo':function(_0x1a5e5a){return _0x1a5e5a();},'zrmMv':function(_0x7bd10f,_0x31ec83){return _0x7bd10f===_0x31ec83;},'GEFkE':_0x5343a1(0x1c4),'aDvzm':_0x5343a1(0x184),'YbfLm':function(_0x5437a4,_0x411c2b){return _0x5437a4+_0x411c2b;},'gQOft':'yhzoE','JqHeR':function(_0x454218,_0x1b157c){return _0x454218(_0x1b157c);},'XnBfc':function(_0x30e7d2,_0x3e8a9c){return _0x30e7d2!==_0x3e8a9c;},'uGMgL':'nXtyd','TWxRP':function(_0x2b5c35,_0x202301,_0x4bb30a){return _0x2b5c35(_0x202301,_0x4bb30a);}};_0x4e8295[_0x5343a1(0x1c2)](_0x346e6a,this,function(){const _0x279132=_0x5343a1,_0x142087={'MyXoF':_0x4e8295['jkIrj'],'pbiAp':_0x4e8295[_0x279132(0x17c)],'BchZX':function(_0x1584a6,_0x346daa){return _0x1584a6(_0x346daa);},'iWtUh':_0x4e8295['Zzcvg'],'hmydW':function(_0xa59889,_0x2f5075){return _0xa59889+_0x2f5075;},'keXXn':_0x279132(0x184),'llbll':function(_0x2d7a78,_0x2efbe3){const _0xf8fedf=_0x279132;return _0x4e8295[_0xf8fedf(0x177)](_0x2d7a78,_0x2efbe3);},'ESwmG':_0x4e8295['IzThZ'],'FMlMA':function(_0x133805,_0x19919d){return _0x4e8295['tCAbV'](_0x133805,_0x19919d);},'tXpYY':function(_0x3be0dd){const _0x38f313=_0x279132;return _0x4e8295[_0x38f313(0x1c0)](_0x3be0dd);}};if(_0x4e8295['zrmMv'](_0x4e8295[_0x279132(0x1d6)],_0x4e8295[_0x279132(0x1d6)])){const _0x5b8edc=new RegExp(_0x4e8295['jkIrj']),_0x18eace=new RegExp(_0x4e8295['PlhNw'],'i'),_0x315db2=_0x4e8295['tCAbV'](_0x380a74,_0x4e8295[_0x279132(0x169)]);if(!_0x5b8edc[_0x279132(0x191)](_0x315db2+_0x4e8295['aDvzm'])||!_0x18eace[_0x279132(0x191)](_0x4e8295[_0x279132(0x1e9)](_0x315db2,'input'))){if(_0x4e8295['zrmMv'](_0x4e8295[_0x279132(0x193)],_0x4e8295[_0x279132(0x193)]))_0x4e8295[_0x279132(0x16e)](_0x315db2,'0');else throw new _0x481288(_0x279132(0x1c6));}else{if(_0x4e8295[_0x279132(0x16c)]('nXtyd',_0x4e8295[_0x279132(0x1e0)])){const _0x3feb2c=new _0x19dbe7(_0x142087[_0x279132(0x16a)]),_0x1a8953=new _0x431499(_0x142087[_0x279132(0x1bf)],'i'),_0x23c188=_0x142087['BchZX'](_0x2c76b8,_0x142087['iWtUh']);!_0x3feb2c[_0x279132(0x191)](_0x142087['hmydW'](_0x23c188,_0x142087['keXXn']))||!_0x1a8953[_0x279132(0x191)](_0x142087[_0x279132(0x1ac)](_0x23c188,_0x142087[_0x279132(0x1a5)]))?_0x142087[_0x279132(0x160)](_0x23c188,'0'):_0x142087[_0x279132(0x1e1)](_0x24701f);}else _0x4e8295[_0x279132(0x1c0)](_0x380a74);}}else{const _0x5eb023=_0x21486e['apply'](_0x19e142,arguments);return _0x4baedb=null,_0x5eb023;}})();}());const _0x1f9bef=(function(){const _0x45ade9=_0x2a4f,_0x221d81={'PZEzF':function(_0x4b8d41,_0x257ce6){return _0x4b8d41+_0x257ce6;},'rbHpx':_0x45ade9(0x19e),'PKWkG':'gger','FxiSD':_0x45ade9(0x152),'LlDtp':function(_0x54e412,_0x1c70c0){return _0x54e412===_0x1c70c0;},'XGaPN':'tDhyT'};let _0x35d39e=!![];return function(_0x440bf1,_0x26c7a9){const _0x5b174e=_0x45ade9;if(_0x221d81[_0x5b174e(0x19d)](_0x221d81[_0x5b174e(0x1a6)],_0x221d81[_0x5b174e(0x1a6)])){const _0x1fbe48=_0x35d39e?function(){if(_0x26c7a9){const _0x498495=_0x26c7a9['apply'](_0x440bf1,arguments);return _0x26c7a9=null,_0x498495;}}:function(){};return _0x35d39e=![],_0x1fbe48;}else(function(){return!![];}[_0x5b174e(0x17d)](_0x221d81['PZEzF'](_0x221d81[_0x5b174e(0x1af)],_0x221d81[_0x5b174e(0x1a9)]))[_0x5b174e(0x1ee)](_0x221d81[_0x5b174e(0x174)]));};}()),_0xea7c6a=_0x1f9bef(this,function(){const _0x16af70=_0x2a4f,_0xa0f24a={'nBfOj':function(_0x475b3b,_0x2ba9b8){return _0x475b3b(_0x2ba9b8);},'jjymi':function(_0xb9cb81,_0x3caa15){return _0xb9cb81(_0x3caa15);},'jRnwv':function(_0x3993b9,_0x530434){return _0x3993b9+_0x530434;},'CcHos':'return\x20(function()\x20','DqCXd':function(_0x3210db){return _0x3210db();},'Jgllt':function(_0x1eaa4f,_0x44b767){return _0x1eaa4f!==_0x44b767;},'opEqF':_0x16af70(0x1c5),'xzFJX':'Bypbg','ITJeU':_0x16af70(0x176),'MXlvl':_0x16af70(0x1ed),'EucVh':'error','bSStx':_0x16af70(0x1a3),'tulAl':function(_0xf2b479,_0x2f9ba0){return _0xf2b479<_0x2f9ba0;}};let _0x502051;try{const _0xf25708=_0xa0f24a[_0x16af70(0x16b)](Function,_0xa0f24a[_0x16af70(0x19f)](_0xa0f24a['CcHos']+'{}.constructor(\x22return\x20this\x22)(\x20)',');'));_0x502051=_0xa0f24a['DqCXd'](_0xf25708);}catch(_0x315b02){_0xa0f24a[_0x16af70(0x1eb)](_0xa0f24a['opEqF'],_0xa0f24a['xzFJX'])?_0x502051=window:_0xa0f24a['nBfOj'](_0x5ba05a,'0');}const _0x364a71=_0x502051[_0x16af70(0x157)]=_0x502051[_0x16af70(0x157)]||{},_0x158406=[_0xa0f24a[_0x16af70(0x195)],_0xa0f24a[_0x16af70(0x1bc)],'info',_0xa0f24a[_0x16af70(0x1aa)],_0xa0f24a[_0x16af70(0x18d)],_0x16af70(0x1a1),'trace'];for(let _0x50d671=0x0;_0xa0f24a['tulAl'](_0x50d671,_0x158406[_0x16af70(0x18e)]);_0x50d671++){const _0x547616=_0x1f9bef[_0x16af70(0x17d)][_0x16af70(0x194)][_0x16af70(0x153)](_0x1f9bef),_0x4e45ed=_0x158406[_0x50d671],_0x226516=_0x364a71[_0x4e45ed]||_0x547616;_0x547616[_0x16af70(0x1da)]=_0x1f9bef[_0x16af70(0x153)](_0x1f9bef),_0x547616[_0x16af70(0x1c1)]=_0x226516[_0x16af70(0x1c1)]['bind'](_0x226516),_0x364a71[_0x4e45ed]=_0x547616;}});_0xea7c6a();const {cmd}=require(_0x271269(0x1a4)),moment=require(_0x271269(0x190));let botStartTime=Date['now']();const ALIVE_IMG=_0x271269(0x1b5);cmd({'pattern':'alive','desc':_0x271269(0x1d8),'category':_0x271269(0x1b7),'react':'🫡','filename':__filename},async(_0x1f1357,_0x3e7e46,_0x180371,{reply:_0x180c8b,from:_0x223854})=>{const _0x2ff585=_0x271269,_0x249599={'WZTlj':_0x2ff585(0x162),'RPsdG':function(_0x526523,_0x3b8860){return _0x526523(_0x3b8860);},'dzmxy':_0x2ff585(0x1d1),'EbOHf':function(_0x4e3818){return _0x4e3818();},'ByfDO':_0x2ff585(0x15e),'hnzDU':function(_0x40fc8d){return _0x40fc8d();},'hXvSP':_0x2ff585(0x198),'gYyTS':_0x2ff585(0x181),'NNTWR':function(_0x4ee97c,_0xe78bbd){return _0x4ee97c-_0xe78bbd;},'cxTXC':function(_0x51aa3e,_0xc1d654){return _0x51aa3e%_0xc1d654;},'JOcwm':function(_0x3826d6,_0x328380){return _0x3826d6/_0x328380;},'MZhyq':function(_0x57cbea,_0x2848fb){return _0x57cbea*_0x2848fb;},'SLVEf':function(_0x5a4f7f,_0x2fb06a){return _0x5a4f7f*_0x2fb06a;},'lfjrW':_0x2ff585(0x1ca),'MmTXM':function(_0x43b7b7,_0x2f3787){return _0x43b7b7!==_0x2f3787;},'GBJbE':_0x2ff585(0x1e3),'IzwOV':'Oqrtu','cguQz':_0x2ff585(0x1d9),'SCuqY':_0x2ff585(0x175),'tVoUK':_0x2ff585(0x1d5),'XeKea':_0x2ff585(0x16d),'OfpDA':_0x2ff585(0x1e2)};try{const _0xa43b8e=_0x180371[_0x2ff585(0x1a2)]||_0x249599[_0x2ff585(0x1e8)],_0x863cd4=_0x249599[_0x2ff585(0x1ef)](moment)['tz'](_0x2ff585(0x198))['format'](_0x249599[_0x2ff585(0x170)]),_0x45f8e9=_0x249599[_0x2ff585(0x1d2)](moment)['tz'](_0x249599[_0x2ff585(0x161)])[_0x2ff585(0x1c7)](_0x249599[_0x2ff585(0x1a0)]),_0x206825=_0x249599[_0x2ff585(0x1ea)](Date[_0x2ff585(0x15f)](),botStartTime),_0x2b078d=Math[_0x2ff585(0x197)](_0x249599[_0x2ff585(0x167)](_0x206825/0x3e8,0x3c)),_0x64679f=Math[_0x2ff585(0x197)](_0x249599[_0x2ff585(0x19a)](_0x206825,_0x249599['MZhyq'](0x3e8,0x3c))%0x3c),_0x63950=Math[_0x2ff585(0x197)](_0x249599['JOcwm'](_0x206825,_0x249599[_0x2ff585(0x17a)](0x3e8,0x3c)*0x3c)),_0x3f1d30=(_0x2ff585(0x1b2)+_0xa43b8e+'*\x0a\x0a\x20*⏰\x20Time:\x20'+_0x863cd4+_0x2ff585(0x1c9)+_0x45f8e9+_0x2ff585(0x1cb)+_0x63950+_0x2ff585(0x182)+_0x64679f+_0x2ff585(0x1b3)+_0x2b078d+_0x2ff585(0x189))[_0x2ff585(0x15d)]();if(!ALIVE_IMG||!ALIVE_IMG[_0x2ff585(0x158)](_0x249599[_0x2ff585(0x183)])){if(_0x249599['MmTXM'](_0x249599[_0x2ff585(0x1d0)],_0x249599[_0x2ff585(0x196)]))throw new Error(_0x2ff585(0x1c6));else return function(_0x111d64){}[_0x2ff585(0x17d)](EEwHoK[_0x2ff585(0x1db)])[_0x2ff585(0x1ba)](_0x2ff585(0x1a8));}await _0x1f1357[_0x2ff585(0x1e7)](_0x223854,{'image':{'url':ALIVE_IMG},'caption':_0x3f1d30,'contextInfo':{'mentionedJid':[_0x180371[_0x2ff585(0x165)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x249599[_0x2ff585(0x17e)],'newsletterName':_0x249599[_0x2ff585(0x199)],'serverMessageId':0x8f}}},{'quoted':_0x3e7e46}),await _0x1f1357['sendMessage'](_0x223854,{'audio':{'url':_0x249599['tVoUK']},'mimetype':_0x2ff585(0x150),'ptt':!![]},{'quoted':_0x3e7e46});}catch(_0x2c9995){if(_0x249599['XeKea']!==_0x249599[_0x2ff585(0x180)])EEwHoK['RPsdG'](_0x1f5673,0x0);else{console[_0x2ff585(0x188)](_0x249599['OfpDA'],_0x2c9995);const _0x26ac88=('\x0a\x20An\x20error\x20occurred\x20while\x20processing\x20the\x20alive\x20command.\x0a\x20Error\x20Details:\x20'+_0x2c9995[_0x2ff585(0x1c8)]+_0x2ff585(0x1a7))['trim']();return _0x180c8b(_0x26ac88);}}});function _0x3ca0(){const _0x451934=['ALjUD3y','z1L5vfm','DgfIBgu','ChvZAe5HBwu','zxHJzxb0Aw9U','lI4Vy29TBwfUza','rvn3BuC','weDHue4','cLbSzwfZzsbYzxbVCNqGDgHPCYbPC3n1zsbVCIb0CNKGywDHAw4GBgf0zxiUcG','y291BNrLCG','ueTxA0C','rxvJvMG','C3DgDMq','BgXIBgW','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','tfP4vLO','CMjiChG','zvDhAuS','AgvAz3e','cIdWN4+UicPtvujArvjpie1eifnuqvrvuYOG8j+pRIakcIaQsgNWN5gl8j+yHca','ig1PBNv0zxmSia','BNb5thi','Ahr0Chm6lY9PlMLIyI5JBY9lAg5XqND0l21YzNjHBMTVzMmUANbN','r25WsKG','Aw5MBW','EMvuALG','zLLmDMu','yxbWBhK','mtq4odG1oeHZzLjUuG','tvHSDMW','A2noANy','mtaZmtm1nZDyqwfRExu','CgjPqxa','AKHMD28','Dg9tDhjPBMC','vfD4uLa','vKDpvNe','y0jLrvG','B29lEe4','sw52ywXPzcbbteLwrv9jtuCGvvjmlIbqBgvHC2uGC2v0igeGDMfSAwqGAw1Hz2uGvvjmlG','zM9YBwf0','BwvZC2fNzq','kGOGkVcFK4yGrgf0ztOG','Ahr0Ca','kGOGkVcFLiSGvxb0Aw1LoIa','ntG4nZeYoevXBKvszq','cIbbBIbLCNjVCIbVy2n1CNjLzcb3AgLSzsbWCM9JzxnZAw5NihrOzsbHBgL2zsbJB21Tyw5KlGOGrxjYB3iGrgv0ywLSCZOG','tfbYBMu','mZeZota4n3jSsenZra','r0jkyKu','vxnLCG','Ag56rfu','mtG5mty2u1HWrK1Q','wgH6vuy','Ahr0Chm6lY9NAxrODwiUy29Tl21YzNjHBMSTB2zJl1nvqLPfuK8TtuqTrefuqujbu0uVCMf3l3jLzNmVAgvHzhmVBwfPBI9HDwrPB3mVC3vIEMvYBY10AgvVBMuUBxaZ','r0vgA0u','EgvgtKS','q2HLy2SGAwyGDgHLigjVDcbPCYbHy3rPDMuU','mtiWmZyZmZa0mZi1nJaXmdGWqg5LD3nSzxr0zxi','x19WCM90B19F','v1PuBgO','q0jLENi','BM5Zvge','zMXmyLa','s2PNvgm','DuDnz0W','DfHWwvK','rxjYB3iGAw4GywXPDMuGy29TBwfUzdOG','yLj0qw8','CfbxBhC','mKnfz2HUzW','u2LTALe','C2vUze1LC3nHz2u','zhPTEhK','wwjMtg0','tK5uv1i','sMDSBhq','D2HnDMi','D2fYBG','y2fSBa','rwjpsgy','yxvKAw8VBxa0','AvnSrum','ywn0Aw9U','yMLUza','sxjiweG','zvftEfq','ogLdDwzlAW','y29UC29Szq','C3rHCNrZv2L0Aa','B1bYC1q','uMT1vxK','nNrVs1HsAq','zNvUy3rPB24GkLWOicPCkq','DhjPBq','seG6Bw06C3m','BM93','rK1Stue','AfH2u1a','D2HPBguGkhrYDwuPihT9','ntvisgvHvve','nZe3nZK2mhn0uMHlEq','C2vUzgvY','qw1hAxO','y3Huwem','CxLLz3u','wNPJDMC','txLyB0y','AMP5BwK','wg5czMm','suvNBgK','sNfizvi','ndCZotuWme1PuM5fCq','qNLMre8','EuzgD3u','BKv1Cg4','q1fev3a','rNHPu0q','0zxpHC+qETgu0y/oVYdqVokiGIa','Bg9N','B01uwNO','CuTTAKq','swLsALK','u0Xwrwy','ANLgy1e','ugXOtNC','y29UC3rYDwn0B3i','y2D1uxO','qxD5rM8','wgvlzwe','zgrKzcWGtu1ntsbeBYbzwvLz','igHVDxjZlca','BgzQCLC','y2HHAw4','qwnesLy','DKvksK4','wgHVDM0','zxjYB3i','ihnLy29UzhmQcGOGyfn0yxr1C2a6icPtDwj6zxjVigLZig9UBgLUzseG8j+KL/cFMOaQcGO+ipcDKi/WNzco8j2qLVcDKitWNzcr8j2qHpcDKimG8j2qGFcDKjGG8j2qJpcDKjeG8j2qHFcDKjhWNzca8j2qJFcDKiOUipcFLjCk','u0T1zu0','Aw5PDa','Aw5WDxq','yLntDhG','BgvUz3rO','DuTltMC','Bw9Tzw50lxrPBwv6B25L','DgvZDa','vMDTt3q','z1fpzNq','ChjVDg90ExbL','svrkzvu','sxP3t1y','zMXVB3i','qwzYAwnHl0HHCMfYzq','u0n1CvK','sK9JD20','EgLsAwi','whv5Afi','tgXeDha','zgvIDq'];_0x3ca0=function(){return _0x451934;};return _0x3ca0();}function _0x2a4f(_0x50c058,_0x212251){const _0xa01d84=_0x3ca0();return _0x2a4f=function(_0xea7c6a,_0x1f9bef){_0xea7c6a=_0xea7c6a-0x150;let _0x2b337d=_0xa01d84[_0xea7c6a];if(_0x2a4f['JmLtvH']===undefined){var _0x4bb900=function(_0x2a4f74){const _0x3bfe6b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x447037='',_0x5cf59f='';for(let _0x869b1a=0x0,_0xc78463,_0x39af4b,_0x4f41e9=0x0;_0x39af4b=_0x2a4f74['charAt'](_0x4f41e9++);~_0x39af4b&&(_0xc78463=_0x869b1a%0x4?_0xc78463*0x40+_0x39af4b:_0x39af4b,_0x869b1a++%0x4)?_0x447037+=String['fromCharCode'](0xff&_0xc78463>>(-0x2*_0x869b1a&0x6)):0x0){_0x39af4b=_0x3bfe6b['indexOf'](_0x39af4b);}for(let _0x486a79=0x0,_0x44b2d0=_0x447037['length'];_0x486a79<_0x44b2d0;_0x486a79++){_0x5cf59f+='%'+('00'+_0x447037['charCodeAt'](_0x486a79)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5cf59f);};_0x2a4f['kntrCt']=_0x4bb900,_0x50c058=arguments,_0x2a4f['JmLtvH']=!![];}const _0x380a74=_0xa01d84[0x0],_0x346e6a=_0xea7c6a+_0x380a74,_0x3ca048=_0x50c058[_0x346e6a];return!_0x3ca048?(_0x2b337d=_0x2a4f['kntrCt'](_0x2b337d),_0x50c058[_0x346e6a]=_0x2b337d):_0x2b337d=_0x3ca048,_0x2b337d;},_0x2a4f(_0x50c058,_0x212251);}function _0x380a74(_0x121809){const _0x3fb94f=_0x271269,_0x2bcf8c={'IiRjY':function(_0x2f7837,_0x48efe5){return _0x2f7837(_0x48efe5);},'oPrsT':function(_0xb4eaa4,_0x2c6263){return _0xb4eaa4===_0x2c6263;},'HkZql':_0x3fb94f(0x171),'vEJJN':'wJhFX','flLbP':function(_0x5344c9,_0x1fb8fc){return _0x5344c9===_0x1fb8fc;},'LPnyh':'string','jnEJk':function(_0x451019,_0x233c3e){return _0x451019!==_0x233c3e;},'XhzUF':_0x3fb94f(0x1ae),'jyFcQ':_0x3fb94f(0x162),'xiRib':_0x3fb94f(0x1a8),'zeTjX':'Czxys','SimjQ':_0x3fb94f(0x1dd),'LPrne':function(_0x2a0b34,_0x220627){return _0x2a0b34!==_0x220627;},'heZgq':function(_0x51fd2b,_0x3a0203){return _0x51fd2b+_0x3a0203;},'nEupn':'length','OheDp':function(_0x4c607d,_0x359853){return _0x4c607d===_0x359853;},'RkuUy':'CQDWp','qyegu':function(_0x46f6d4,_0x39e616){return _0x46f6d4+_0x39e616;},'SKueM':'debu','swFvd':'gger','CBezr':_0x3fb94f(0x152),'vYZpv':'stateObject','iSlEC':function(_0x224302,_0x516a40){return _0x224302(_0x516a40);},'KjgTc':_0x3fb94f(0x1ec),'fIdir':_0x3fb94f(0x185)};function _0x360b3b(_0xc3adbf){const _0x431e5c=_0x3fb94f,_0x1865c8={'AwyFo':function(_0x17721e){return _0x17721e();},'pPWlw':function(_0x40a81a,_0x5eec25){const _0x54a98b=_0x2a4f;return _0x2bcf8c[_0x54a98b(0x159)](_0x40a81a,_0x5eec25);},'AmGiz':_0x2bcf8c['HkZql'],'VgmOt':_0x2bcf8c[_0x431e5c(0x186)],'sxOtB':_0x431e5c(0x187)};if(_0x2bcf8c[_0x431e5c(0x1de)](typeof _0xc3adbf,_0x2bcf8c['LPnyh'])){if(_0x2bcf8c['jnEJk'](_0x2bcf8c[_0x431e5c(0x1d4)],_0x2bcf8c[_0x431e5c(0x1d4)]))_0x1865c8[_0x431e5c(0x17f)](_0x151594);else return function(_0x1019f4){}['constructor'](_0x2bcf8c[_0x431e5c(0x17b)])['apply'](_0x2bcf8c[_0x431e5c(0x19b)]);}else{if(_0x2bcf8c[_0x431e5c(0x1b8)]!==_0x2bcf8c[_0x431e5c(0x1e6)]){if(_0x2bcf8c[_0x431e5c(0x1ce)](_0x2bcf8c[_0x431e5c(0x1b1)]('',_0xc3adbf/_0xc3adbf)[_0x2bcf8c[_0x431e5c(0x172)]],0x1)||_0xc3adbf%0x14===0x0){if(_0x2bcf8c['OheDp'](_0x2bcf8c[_0x431e5c(0x15a)],_0x431e5c(0x173)))(function(){const _0x24c954=_0x431e5c;if(_0x1865c8[_0x24c954(0x1e4)](_0x1865c8[_0x24c954(0x166)],_0x1865c8[_0x24c954(0x192)]))_0x33500e=_0x11d4e3;else return!![];}[_0x431e5c(0x17d)](_0x2bcf8c[_0x431e5c(0x168)](_0x2bcf8c[_0x431e5c(0x18a)],_0x2bcf8c[_0x431e5c(0x1ab)]))[_0x431e5c(0x1ee)](_0x2bcf8c[_0x431e5c(0x1dc)]));else{_0x9550e1[_0x431e5c(0x188)](_0x431e5c(0x1e2),_0x512368);const _0x466217=(_0x431e5c(0x1cd)+_0x536f9b[_0x431e5c(0x1c8)]+'\x0aPlease\x20report\x20this\x20issue\x20or\x20try\x20again\x20later.\x0a')[_0x431e5c(0x15d)]();return _0x2bcf8c[_0x431e5c(0x179)](_0x14560a,_0x466217);}}else(function(){if(_0x1865c8['sxOtB']==='zomyx'){const _0x33f2e5=_0x268e01?function(){if(_0x2a5cdc){const _0x444f7a=_0x450667['apply'](_0x1906e5,arguments);return _0xa58f47=null,_0x444f7a;}}:function(){};return _0x42104a=![],_0x33f2e5;}else return![];}['constructor'](_0x2bcf8c['SKueM']+_0x2bcf8c[_0x431e5c(0x1ab)])[_0x431e5c(0x1ba)](_0x2bcf8c['vYZpv']));}else{const _0x336002=_0x10fbf7[_0x431e5c(0x1ba)](_0x4c038e,arguments);return _0x133e74=null,_0x336002;}}_0x2bcf8c[_0x431e5c(0x151)](_0x360b3b,++_0xc3adbf);}try{if(_0x121809)return _0x2bcf8c['OheDp'](_0x2bcf8c[_0x3fb94f(0x1df)],_0x2bcf8c['fIdir'])?![]:_0x360b3b;else _0x360b3b(0x0);}catch(_0x2e9b6d){}}
*/
