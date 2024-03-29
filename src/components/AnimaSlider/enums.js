import {
  spy,
  hime,
  camp,
  tadakoi,
  silverSpoon,
  spyBanner,
  himeBanner,
  campBanner,
  tadakoiBanner,
  silverSpoonBanner,
} from './assets';

export const data = {
  tadakoi: {
    key: 'tadakoi',
    bannerImg: tadakoiBanner,
    imgs: tadakoi,
    intro: `
    《多田君不戀愛》，是由動畫工房製作的日本原創電視動畫作品，主要製作人員與《月刊少女野崎同學》相同。
    這場戀愛，我永遠不會忘記（この恋を、一生忘れない）——《多田君不戀愛》，宣傳標語。\n
    泰瑞莎·瓦格納是從歐洲國家拉森堡到日本讀書的留學生，在她剛到日本時便跟同伴亞歷珊德拉走散了，此時泰瑞莎受到了多田光良的幫助，才得以和亞歷珊德拉會合，多田光良發現泰瑞莎兩人在日本的住所銀座大宮殿就位於多田家所開的咖啡館旁邊。隔天的班級朝會上，光良才知道泰瑞莎原來是留學生。
    `,
    reference: [
      'https://zh.m.wikipedia.org/zh-hant/%E5%A4%9A%E7%94%B0%E5%90%9B%E4%B8%8D%E6%88%80%E6%84%9B',
      'http://tadakoi.tv/index.html',
    ],
  },
  spyFamily: {
    key: 'spyFamily',
    bannerImg: spyBanner,
    imgs: spy,
    intro: `
      《SPY×FAMILY間諜家家酒》是由遠藤達哉所創作的日本漫畫作品，在2019年3月25日起於日本《少年Jump+》上定期連載，台灣於《寶島少年EX》上連載。
      本作敘述一名身分為間諜的男性，和另一位實際工作是殺手的女性，以及一個能讀心的超能力者女孩，三人互相隱瞞真實身分所組成的虛假家庭間的家庭喜劇。
      為了緩和處於敵對關係的西國（Westalis）與東國之間的緊張局勢，隸屬西國情報機構的一流間諜「黃昏」奉命調查東國政治人物唐納文·戴斯蒙德之政治陰謀...
    `,
    reference: [
      'https://zh.m.wikipedia.org/zh-tw/SPY%C3%97FAMILY%E9%96%93%E8%AB%9C%E5%AE%B6%E5%AE%B6%E9%85%92',
      'https://spy-family.net/',
    ],
  },
  camp: {
    key: 'camp',
    bannerImg: campBanner,
    imgs: camp,
    intro: `
      《搖曳露營△》是日本漫畫家Afro的漫畫作品。以山梨縣一帶作舞台，描述露營中的知識、野炊等戶外活動的魅力和以此作為娛樂的女高中生的溫和日常生活。漫畫標題末端的「△」是代表露營帳篷的象形符號。
      喜歡在淡季（冬季）進行單人露營活動的志摩凜在一次於本棲湖的露營中，遇到了為一覽富士山而騎腳踏車來到本棲湖，但因睡著而陷入困境的各務原撫子。撫子在與凜交流過後對露營產生了興趣而加入學校的「野外活動同好會」，與同好會成員大垣千明與犬山葵開始了團體露營的活動。期間，凜的好友齋藤惠那也因此對露營產生了興趣。故事便圍繞著「凜的單人露營」以及「野外活動同好會的露營」展開。
    `,
    reference: [
      'https://zh.m.wikipedia.org/zh-tw/%E6%90%96%E6%9B%B3%E9%9C%B2%E7%87%9F%E2%96%B3',
      'https://yurucamp.jp/second/',
    ],
  },
  hime: {
    key: 'hime',
    bannerImg: himeBanner,
    imgs: hime,
    intro: `
    《書蟲公主》是日本作家由唯所創作的小說。2015年9月開始在成為小說家吧連載，2016年1月起經一迅社出版，並由椎名咲月擔綱插畫。改編漫畫於2018年8月起在一迅社漫畫網站《ZERO-SUM Online》連載。
    喜歡看書的侯爵千金依莉亞娜與王太子克里斯朵夫殿下之間為了各自的需求而訂了婚，兩人之間的婚約關係雖然有名無實，依莉亞娜仍然對這樣的生活心滿意足。某一天，依莉亞娜得知王太子跟某位千金非常要好，她認為殿下終於找到了真正心愛的女人，而做好了婚約遭取消的心理準備。然而…愛書成癡的貴族千金之誤會連連戀愛幻想奇譚，拉起了序幕！
    `,
    reference: [
      'https://zh.m.wikipedia.org/zh-tw/%E6%9B%B8%E8%9F%B2%E5%85%AC%E4%B8%BB',
      'https://mushikaburihime.com/',
    ],
  },
  silverSpoon: {
    key: 'silverSpoon',
    bannerImg: silverSpoonBanner,
    imgs: silverSpoon,
    intro: `
    《銀之匙 Silver Spoon》是日本漫畫家荒川弘創作的農業學校背景校園漫畫作品，2011年至2019年間於《週刊少年Sunday》連載。
    大蝦夷高級農業學校（通稱：蝦夷高農）是一所坐落於北海道的農業高中，校內學生多為以將從事農業當作目標的農家子女。這所擁有在全日本所有高中中最多的占地面積，被北海道壯麗的大自然和鄉村風情環抱的蝦夷高農，在新學年裡迎來了一位特殊的學生——八軒勇吾。這位來自城市、畢業於升學初中的文弱學生，因發現在一年級的同學中只有他自己找不到明確的人生目標而開始焦躁不安。自此，寫作「就讀於高農的每一天」、讀作「在青春歲月中找尋自己的夢想」的八軒勇吾的高中生活開始了。
    `,
    reference: [
      'https://zh.m.wikipedia.org/zh-tw/%E9%93%B6%E4%B9%8B%E5%8C%99_Silver_Spoon',
      'https://www.ginsaji-anime.com/',
    ],
  },
};

const animaKeys = Object.keys(data);
export const banners = animaKeys.map((key) => ({
  key,
  banner: data[key].bannerImg,
}));

export const referenceLabelEnums = {
  0: 'introduction',
  1: 'gallery',
};
