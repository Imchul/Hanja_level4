export interface Hanja {
  id: number;
  char: string;
  sound: string;
  meaning: string;
  examples: { word: string; hanja: string }[];
  level: string;
}

export const hanjaList: Hanja[] = [
  {
    id: 1,
    char: "家",
    sound: "가",
    meaning: "집",
    examples: [{"word":"가족","hanja":"家族"},{"word":"가정","hanja":"家庭"},{"word":"국가","hanja":"國家"}],
    level: "4급"
  },
  {
    id: 2,
    char: "佳",
    sound: "가",
    meaning: "아름다울",
    examples: [{"word":"가작","hanja":"佳作"},{"word":"가인","hanja":"佳人"},{"word":"가절","hanja":"佳節"}],
    level: "4급"
  },
  {
    id: 3,
    char: "街",
    sound: "가",
    meaning: "거리",
    examples: [{"word":"시가","hanja":"市街"},{"word":"가로수","hanja":"街路樹"},{"word":"상가","hanja":"商街"}],
    level: "4급"
  },
  {
    id: 4,
    char: "可",
    sound: "가",
    meaning: "옳을",
    examples: [{"word":"가능","hanja":"可能"},{"word":"허가","hanja":"許可"},{"word":"불가","hanja":"不可"}],
    level: "4급"
  },
  {
    id: 5,
    char: "歌",
    sound: "가",
    meaning: "노래",
    examples: [{"word":"가수","hanja":"歌手"},{"word":"가요","hanja":"歌謠"},{"word":"애국가","hanja":"愛國歌"}],
    level: "4급"
  },
  {
    id: 6,
    char: "加",
    sound: "가",
    meaning: "더할",
    examples: [{"word":"가입","hanja":"加入"},{"word":"증가","hanja":"增加"},{"word":"참가","hanja":"參加"}],
    level: "4급"
  },
  {
    id: 7,
    char: "價",
    sound: "가",
    meaning: "값",
    examples: [{"word":"가격","hanja":"價格"},{"word":"물가","hanja":"物價"},{"word":"평가","hanja":"評價"}],
    level: "4급"
  },
  {
    id: 8,
    char: "假",
    sound: "가",
    meaning: "거짓",
    examples: [{"word":"가면","hanja":"假面"},{"word":"가설","hanja":"假說"},{"word":"가정","hanja":"假定"}],
    level: "4급"
  },
  {
    id: 9,
    char: "各",
    sound: "각",
    meaning: "각각",
    examples: [{"word":"각자","hanja":"各自"},{"word":"각각","hanja":"各各"},{"word":"각국","hanja":"各國"}],
    level: "4급"
  },
  {
    id: 10,
    char: "角",
    sound: "각",
    meaning: "뿔",
    examples: [{"word":"각도","hanja":"角度"},{"word":"삼각","hanja":"三角"},{"word":"시각","hanja":"視角"}],
    level: "4급"
  },
  {
    id: 11,
    char: "脚",
    sound: "각",
    meaning: "다리",
    examples: [{"word":"각광","hanja":"脚光"},{"word":"교각","hanja":"橋脚"},{"word":"각본","hanja":"脚本"}],
    level: "4급"
  },
  {
    id: 12,
    char: "覺",
    sound: "각",
    meaning: "깨달을",
    examples: [{"word":"감각","hanja":"感覺"},{"word":"지각","hanja":"知覺"},{"word":"자각","hanja":"自覺"}],
    level: "4급"
  },
  {
    id: 13,
    char: "干",
    sound: "간",
    meaning: "방패",
    examples: [{"word":"간섭","hanja":"干涉"},{"word":"약간","hanja":"若干"},{"word":"간여","hanja":"干與"}],
    level: "4급"
  },
  {
    id: 14,
    char: "間",
    sound: "간",
    meaning: "사이",
    examples: [{"word":"시간","hanja":"時間"},{"word":"중간","hanja":"中間"},{"word":"인간","hanja":"人間"}],
    level: "4급"
  },
  {
    id: 15,
    char: "看",
    sound: "간",
    meaning: "볼",
    examples: [{"word":"간판","hanja":"看板"},{"word":"간호","hanja":"看護"},{"word":"주마간산","hanja":"走馬看山"}],
    level: "4급"
  },
  {
    id: 16,
    char: "甘",
    sound: "감",
    meaning: "달",
    examples: [{"word":"감미료","hanja":"甘味料"},{"word":"감주","hanja":"甘酒"},{"word":"고진감래","hanja":"苦盡甘來"}],
    level: "4급"
  },
  {
    id: 17,
    char: "感",
    sound: "감",
    meaning: "느낄",
    examples: [{"word":"감동","hanja":"感動"},{"word":"감사","hanja":"感謝"},{"word":"감정","hanja":"感情"}],
    level: "4급"
  },
  {
    id: 18,
    char: "減",
    sound: "감",
    meaning: "덜",
    examples: [{"word":"감소","hanja":"減少"},{"word":"감면","hanja":"減免"},{"word":"절감","hanja":"切減"}],
    level: "4급"
  },
  {
    id: 19,
    char: "敢",
    sound: "감",
    meaning: "감히",
    examples: [{"word":"용감","hanja":"勇敢"},{"word":"과감","hanja":"果敢"},{"word":"감히","hanja":"敢히"}],
    level: "4급"
  },
  {
    id: 20,
    char: "監",
    sound: "감",
    meaning: "볼",
    examples: [{"word":"감독","hanja":"監督"},{"word":"감시","hanja":"監視"},{"word":"감옥","hanja":"監獄"}],
    level: "4급"
  },
  {
    id: 21,
    char: "甲",
    sound: "갑",
    meaning: "갑옷",
    examples: [{"word":"갑부","hanja":"甲富"},{"word":"회갑","hanja":"回甲"},{"word":"철갑","hanja":"鐵甲"}],
    level: "4급"
  },
  {
    id: 22,
    char: "江",
    sound: "강",
    meaning: "강",
    examples: [{"word":"한강","hanja":"漢江"},{"word":"강산","hanja":"江山"},{"word":"강변","hanja":"江邊"}],
    level: "4급"
  },
  {
    id: 23,
    char: "降",
    sound: "강",
    meaning: "내릴",
    examples: [{"word":"강우","hanja":"降雨"},{"word":"하강","hanja":"下降"},{"word":"항복","hanja":"降伏"}],
    level: "4급"
  },
  {
    id: 24,
    char: "講",
    sound: "강",
    meaning: "익힐",
    examples: [{"word":"강의","hanja":"講義"},{"word":"강연","hanja":"講演"},{"word":"휴강","hanja":"休講"}],
    level: "4급"
  },
  {
    id: 25,
    char: "强",
    sound: "강",
    meaning: "강할",
    examples: [{"word":"강력","hanja":"强力"},{"word":"강조","hanja":"强調"},{"word":"강도","hanja":"强度"}],
    level: "4급"
  },
  {
    id: 26,
    char: "改",
    sound: "개",
    meaning: "고칠",
    examples: [{"word":"개혁","hanja":"改革"},{"word":"개선","hanja":"改善"},{"word":"개정","hanja":"改正"}],
    level: "4급"
  },
  {
    id: 27,
    char: "皆",
    sound: "개",
    meaning: "다",
    examples: [{"word":"개근","hanja":"皆勤"},{"word":"개기식","hanja":"皆旣蝕"},{"word":"개무","hanja":"皆無"}],
    level: "4급"
  },
  {
    id: 28,
    char: "個",
    sound: "개",
    meaning: "낱",
    examples: [{"word":"개인","hanja":"個人"},{"word":"개별","hanja":"個別"},{"word":"개성","hanja":"個性"}],
    level: "4급"
  },
  {
    id: 29,
    char: "開",
    sound: "개",
    meaning: "열",
    examples: [{"word":"개방","hanja":"開放"},{"word":"개시","hanja":"開始"},{"word":"공개","hanja":"公開"}],
    level: "4급"
  },
  {
    id: 30,
    char: "介",
    sound: "개",
    meaning: "끼일",
    examples: [{"word":"소개","hanja":"紹介"},{"word":"중개","hanja":"仲介"},{"word":"개입","hanja":"介入"}],
    level: "4급"
  },
  {
    id: 31,
    char: "客",
    sound: "객",
    meaning: "손",
    examples: [{"word":"손님","hanja":"客"},{"word":"객관","hanja":"客觀"},{"word":"승객","hanja":"乘客"}],
    level: "4급"
  },
  {
    id: 32,
    char: "更",
    sound: "경",
    meaning: "고칠/다시",
    examples: [{"word":"갱신","hanja":"更新"},{"word":"변경","hanja":"變更"},{"word":"경질","hanja":"更迭"}],
    level: "4급"
  },
  {
    id: 33,
    char: "去",
    sound: "거",
    meaning: "갈",
    examples: [{"word":"과거","hanja":"過去"},{"word":"제거","hanja":"除去"},{"word":"거취","hanja":"去就"}],
    level: "4급"
  },
  {
    id: 34,
    char: "巨",
    sound: "거",
    meaning: "클",
    examples: [{"word":"거대","hanja":"巨大"},{"word":"거액","hanja":"巨額"},{"word":"거인","hanja":"巨人"}],
    level: "4급"
  },
  {
    id: 35,
    char: "居",
    sound: "거",
    meaning: "살",
    examples: [{"word":"거주","hanja":"居住"},{"word":"동거","hanja":"同居"},{"word":"주거","hanja":"住居"}],
    level: "4급"
  },
  {
    id: 36,
    char: "車",
    sound: "차",
    meaning: "수레/차",
    examples: [{"word":"자동차","hanja":"自動車"},{"word":"열차","hanja":"列車"},{"word":"정거장","hanja":"停車場"}],
    level: "4급"
  },
  {
    id: 37,
    char: "擧",
    sound: "거",
    meaning: "들",
    examples: [{"word":"거수","hanja":"擧手"},{"word":"선거","hanja":"選擧"},{"word":"검거","hanja":"檢擧"}],
    level: "4급"
  },
  {
    id: 38,
    char: "建",
    sound: "건",
    meaning: "세울",
    examples: [{"word":"건설","hanja":"建設"},{"word":"건물","hanja":"建物"},{"word":"건국","hanja":"建國"}],
    level: "4급"
  },
  {
    id: 39,
    char: "乾",
    sound: "건",
    meaning: "하늘/마를",
    examples: [{"word":"건조","hanja":"乾燥"},{"word":"건배","hanja":"乾杯"},{"word":"건포도","hanja":"乾葡萄"}],
    level: "4급"
  },
  {
    id: 40,
    char: "格",
    sound: "격",
    meaning: "격식",
    examples: [{"word":"성격","hanja":"性格"},{"word":"합격","hanja":"合格"},{"word":"자격","hanja":"資格"}],
    level: "4급"
  },
  {
    id: 41,
    char: "犬",
    sound: "견",
    meaning: "개",
    examples: [{"word":"맹견","hanja":"猛犬"},{"word":"견원지간","hanja":"犬猿之間"},{"word":"애완견","hanja":"愛玩犬"}],
    level: "4급"
  },
  {
    id: 42,
    char: "見",
    sound: "견",
    meaning: "볼",
    examples: [{"word":"견학","hanja":"見學"},{"word":"의견","hanja":"意見"},{"word":"발견","hanja":"發見"}],
    level: "4급"
  },
  {
    id: 43,
    char: "決",
    sound: "결",
    meaning: "결단할",
    examples: [{"word":"결정","hanja":"決定"},{"word":"해결","hanja":"解決"},{"word":"결심","hanja":"決心"}],
    level: "4급"
  },
  {
    id: 44,
    char: "結",
    sound: "결",
    meaning: "맺을",
    examples: [{"word":"결혼","hanja":"結婚"},{"word":"결과","hanja":"結果"},{"word":"연결","hanja":"連結"}],
    level: "4급"
  },
  {
    id: 45,
    char: "潔",
    sound: "결",
    meaning: "깨끗할",
    examples: [{"word":"청결","hanja":"淸潔"},{"word":"순결","hanja":"純潔"},{"word":"결백","hanja":"潔白"}],
    level: "4급"
  },
  {
    id: 46,
    char: "兼",
    sound: "겸",
    meaning: "이지러질",
    examples: [{"word":"결석","hanja":"缺席"},{"word":"결점","hanja":"缺點"},{"word":"결핍","hanja":"缺乏"}],
    level: "4급"
  },
  {
    id: 47,
    char: "輕",
    sound: "경",
    meaning: "겸할",
    examples: [{"word":"겸임","hanja":"兼任"},{"word":"겸비","hanja":"兼備"},{"word":"겸용","hanja":"兼用"}],
    level: "4급"
  },
  {
    id: 48,
    char: "經",
    sound: "경",
    meaning: "서울",
    examples: [{"word":"상경","hanja":"上京"},{"word":"경부선","hanja":"京釜線"},{"word":"귀경","hanja":"歸京"}],
    level: "4급"
  },
  {
    id: 49,
    char: "耕",
    sound: "경",
    meaning: "경치",
    examples: [{"word":"경치","hanja":"景致"},{"word":"풍경","hanja":"風景"},{"word":"배경","hanja":"背景"}],
    level: "4급"
  },
  {
    id: 50,
    char: "京",
    sound: "경",
    meaning: "가벼울",
    examples: [{"word":"경량","hanja":"輕量"},{"word":"경솔","hanja":"輕率"},{"word":"경박","hanja":"輕薄"}],
    level: "4급"
  },
  {
    id: 51,
    char: "鏡",
    sound: "경",
    meaning: "지날/글",
    examples: [{"word":"경제","hanja":"經濟"},{"word":"경험","hanja":"經驗"},{"word":"성경","hanja":"聖經"}],
    level: "4급"
  },
  {
    id: 52,
    char: "慶",
    sound: "경",
    meaning: "일곱째천간",
    examples: [{"word":"경오","hanja":"庚午"}],
    level: "4급"
  },
  {
    id: 53,
    char: "敬",
    sound: "경",
    meaning: "밭갈",
    examples: [{"word":"경작","hanja":"耕作"},{"word":"농경","hanja":"農耕"},{"word":"경지","hanja":"耕地"}],
    level: "4급"
  },
  {
    id: 54,
    char: "競",
    sound: "경",
    meaning: "다툼/겨룰",
    examples: [{"word":"경쟁","hanja":"競爭"},{"word":"경기","hanja":"競技"},{"word":"경마","hanja":"競馬"}],
    level: "4급"
  },
  {
    id: 55,
    char: "景",
    sound: "경",
    meaning: "볕/경치",
    examples: [{"word":"경이","hanja":"驚異"},{"word":"경악","hanja":"驚愕"}],
    level: "4급"
  },
  {
    id: 56,
    char: "鷄",
    sound: "계",
    meaning: "공경할",
    examples: [{"word":"존경","hanja":"尊敬"},{"word":"경로","hanja":"敬老"},{"word":"경어","hanja":"敬語"}],
    level: "4급"
  },
  {
    id: 57,
    char: "溪",
    sound: "계",
    meaning: "지경",
    examples: [{"word":"세계","hanja":"世界"},{"word":"경계","hanja":"境界"},{"word":"시계","hanja":"視界"}],
    level: "4급"
  },
  {
    id: 58,
    char: "季",
    sound: "계",
    meaning: "셈할",
    examples: [{"word":"계산","hanja":"計算"},{"word":"계획","hanja":"計劃"},{"word":"통계","hanja":"統計"}],
    level: "4급"
  },
  {
    id: 59,
    char: "系",
    sound: "계",
    meaning: "시내",
    examples: [{"word":"계곡","hanja":"溪谷"}],
    level: "4급"
  },
  {
    id: 60,
    char: "計",
    sound: "계",
    meaning: "닭",
    examples: [{"word":"양계","hanja":"養鷄"},{"word":"계란","hanja":"鷄卵"},{"word":"삼계탕","hanja":"蔘鷄湯"}],
    level: "4급"
  },
  {
    id: 61,
    char: "啟",
    sound: "계",
    meaning: "옛",
    examples: [{"word":"고대","hanja":"古代"},{"word":"고전","hanja":"古典"},{"word":"고물","hanja":"古物"}],
    level: "4급"
  },
  {
    id: 62,
    char: "界",
    sound: "계",
    meaning: "연고",
    examples: [{"word":"고향","hanja":"故鄕"},{"word":"고의","hanja":"故意"},{"word":"사고","hanja":"事故"}],
    level: "4급"
  },
  {
    id: 63,
    char: "庫",
    sound: "고",
    meaning: "굳을",
    examples: [{"word":"고체","hanja":"固體"},{"word":"고정","hanja":"固定"},{"word":"고집","hanja":"固執"}],
    level: "4급"
  },
  {
    id: 64,
    char: "固",
    sound: "고",
    meaning: "쓸",
    examples: [{"word":"고생","hanja":"苦生"},{"word":"고통","hanja":"苦痛"},{"word":"고민","hanja":"苦悶"}],
    level: "4급"
  },
  {
    id: 65,
    char: "高",
    sound: "고",
    meaning: "생각할",
    examples: [{"word":"사고","hanja":"思考"},{"word":"참고","hanja":"參考"},{"word":"시험","hanja":"考査"}],
    level: "4급"
  },
  {
    id: 66,
    char: "苦",
    sound: "고",
    meaning: "높을",
    examples: [{"word":"최고","hanja":"最高"},{"word":"고급","hanja":"高級"},{"word":"고속","hanja":"高速"}],
    level: "4급"
  },
  {
    id: 67,
    char: "孤",
    sound: "고",
    meaning: "알릴",
    examples: [{"word":"광고","hanja":"廣告"},{"word":"보고","hanja":"報告"},{"word":"신고","hanja":"申告"}],
    level: "4급"
  },
  {
    id: 68,
    char: "告",
    sound: "고",
    meaning: "마를",
    examples: [{"word":"고갈","hanja":"枯渴"},{"word":"고목","hanja":"枯木"}],
    level: "4급"
  },
  {
    id: 69,
    char: "考",
    sound: "고",
    meaning: "굽을",
    examples: [{"word":"곡선","hanja":"曲線"},{"word":"작곡","hanja":"作曲"},{"word":"왜곡","hanja":"歪曲"}],
    level: "4급"
  },
  {
    id: 70,
    char: "故",
    sound: "고",
    meaning: "곡식",
    examples: [{"word":"곡식","hanja":"穀食"},{"word":"미곡","hanja":"米穀"},{"word":"잡곡","hanja":"雜穀"}],
    level: "4급"
  },
  {
    id: 71,
    char: "古",
    sound: "고",
    meaning: "골",
    examples: [{"word":"계곡","hanja":"溪谷"},{"word":"산곡","hanja":"山谷"}],
    level: "4급"
  },
  {
    id: 72,
    char: "穀",
    sound: "곡",
    meaning: "곤할",
    examples: [{"word":"곤란","hanja":"困難"},{"word":"빈곤","hanja":"貧困"},{"word":"피곤","hanja":"疲困"}],
    level: "4급"
  },
  {
    id: 73,
    char: "谷",
    sound: "곡",
    meaning: "땅",
    examples: [{"word":"건곤","hanja":"乾坤"}],
    level: "4급"
  },
  {
    id: 74,
    char: "曲",
    sound: "곡",
    meaning: "뼈",
    examples: [{"word":"골절","hanja":"骨折"},{"word":"유골","hanja":"遺骨"},{"word":"해골","hanja":"骸骨"}],
    level: "4급"
  },
  {
    id: 75,
    char: "困",
    sound: "곤",
    meaning: "공변될",
    examples: [{"word":"공원","hanja":"公園"},{"word":"공개","hanja":"公開"},{"word":"주인공","hanja":"主人公"}],
    level: "4급"
  },
  {
    id: 76,
    char: "骨",
    sound: "골",
    meaning: "빌",
    examples: [{"word":"공간","hanja":"空間"},{"word":"공기","hanja":"空氣"},{"word":"항공","hanja":"航空"}],
    level: "4급"
  },
  {
    id: 77,
    char: "功",
    sound: "공",
    meaning: "장인",
    examples: [{"word":"공장","hanja":"工場"},{"word":"공사","hanja":"工事"},{"word":"인공","hanja":"人工"}],
    level: "4급"
  },
  {
    id: 78,
    char: "公",
    sound: "공",
    meaning: "공",
    examples: [{"word":"성공","hanja":"成功"},{"word":"공로","hanja":"功勞"},{"word":"전공","hanja":"戰功"}],
    level: "4급"
  },
  {
    id: 79,
    char: "空",
    sound: "공",
    meaning: "한가지",
    examples: [{"word":"공통","hanja":"共通"},{"word":"공공","hanja":"公共"},{"word":"공유","hanja":"共有"}],
    level: "4급"
  },
  {
    id: 80,
    char: "工",
    sound: "공",
    meaning: "과목",
    examples: [{"word":"과학","hanja":"科學"},{"word":"과목","hanja":"科目"},{"word":"내과","hanja":"內科"}],
    level: "4급"
  },
  {
    id: 81,
    char: "孔",
    sound: "공",
    meaning: "실과",
    examples: [{"word":"과일","hanja":"果日"},{"word":"결과","hanja":"結果"},{"word":"성과","hanja":"成果"}],
    level: "4급"
  },
  {
    id: 82,
    char: "共",
    sound: "공",
    meaning: "과정",
    examples: [{"word":"과제","hanja":"課題"},{"word":"일과","hanja":"日課"},{"word":"과장","hanja":"課長"}],
    level: "4급"
  },
  {
    id: 83,
    char: "果",
    sound: "과",
    meaning: "지날",
    examples: [{"word":"과거","hanja":"過去"},{"word":"통과","hanja":"通過"},{"word":"과정","hanja":"過程"}],
    level: "4급"
  },
  {
    id: 84,
    char: "課",
    sound: "과",
    meaning: "벼슬",
    examples: [{"word":"관리","hanja":"官吏"},{"word":"장관","hanja":"長官"},{"word":"경찰관","hanja":"警察官"}],
    level: "4급"
  },
  {
    id: 85,
    char: "科",
    sound: "과",
    meaning: "볼",
    examples: [{"word":"관찰","hanja":"觀察"},{"word":"관객","hanja":"觀客"},{"word":"관광","hanja":"觀光"}],
    level: "4급"
  },
  {
    id: 86,
    char: "過",
    sound: "과",
    meaning: "빗장/관계할",
    examples: [{"word":"관계","hanja":"關係"},{"word":"관심","hanja":"關心"},{"word":"기관","hanja":"機關"}],
    level: "4급"
  },
  {
    id: 87,
    char: "官",
    sound: "관",
    meaning: "익숙할",
    examples: [{"word":"습관","hanja":"習慣"},{"word":"관습","hanja":"慣習"},{"word":"관례","hanja":"慣例"}],
    level: "4급"
  },
  {
    id: 88,
    char: "觀",
    sound: "관",
    meaning: "집",
    examples: [{"word":"도서관","hanja":"圖書館"},{"word":"체육관","hanja":"體育館"},{"word":"미술관","hanja":"美術館"}],
    level: "4급"
  },
  {
    id: 89,
    char: "關",
    sound: "관",
    meaning: "빛",
    examples: [{"word":"광선","hanja":"光線"},{"word":"영광","hanja":"榮光"},{"word":"관광","hanja":"觀光"}],
    level: "4급"
  },
  {
    id: 90,
    char: "慣",
    sound: "관",
    meaning: "넓을",
    examples: [{"word":"광장","hanja":"廣場"},{"word":"광고","hanja":"廣告"},{"word":"광대","hanja":"廣大"}],
    level: "4급"
  },
  {
    id: 91,
    char: "館",
    sound: "관",
    meaning: "다리",
    examples: [{"word":"육교","hanja":"陸橋"},{"word":"대교","hanja":"大橋"},{"word":"교량","hanja":"橋梁"}],
    level: "4급"
  },
  {
    id: 92,
    char: "光",
    sound: "광",
    meaning: "사귈",
    examples: [{"word":"교통","hanja":"交通"},{"word":"교환","hanja":"交換"},{"word":"외교","hanja":"外交"}],
    level: "4급"
  },
  {
    id: 93,
    char: "廣",
    sound: "광",
    meaning: "학교",
    examples: [{"word":"학교","hanja":"學校"},{"word":"교장","hanja":"校長"},{"word":"등교","hanja":"登校"}],
    level: "4급"
  },
  {
    id: 94,
    char: "巧",
    sound: "교",
    meaning: "가르칠",
    examples: [{"word":"교육","hanja":"敎育"},{"word":"교사","hanja":"敎師"},{"word":"교수","hanja":"敎授"}],
    level: "4급"
  },
  {
    id: 95,
    char: "橋",
    sound: "교",
    meaning: "아홉",
    examples: [{"word":"구십","hanja":"九十"},{"word":"구월","hanja":"九月"}],
    level: "4급"
  },
  {
    id: 96,
    char: "交",
    sound: "교",
    meaning: "입",
    examples: [{"word":"입구","hanja":"入口"},{"word":"식구","hanja":"食口"},{"word":"인구","hanja":"人口"}],
    level: "4급"
  },
  {
    id: 97,
    char: "敎",
    sound: "교",
    meaning: "구원할",
    examples: [{"word":"구조","hanja":"救助"},{"word":"구급","hanja":"救急"},{"word":"구원","hanja":"救援"}],
    level: "4급"
  },
  {
    id: 98,
    char: "校",
    sound: "교",
    meaning: "구할",
    examples: [{"word":"요구","hanja":"要求"},{"word":"청구","hanja":"請求"},{"word":"구직","hanja":"求職"}],
    level: "4급"
  },
  {
    id: 99,
    char: "球",
    sound: "구",
    meaning: "연구할",
    examples: [{"word":"연구","hanja":"硏究"},{"word":"탐구","hanja":"探究"},{"word":"구명","hanja":"究明"}],
    level: "4급"
  },
  {
    id: 100,
    char: "區",
    sound: "구",
    meaning: "오랫",
    examples: [{"word":"영구","hanja":"永久"},{"word":"지구력","hanja":"持久力"}],
    level: "4급"
  },
  {
    id: 101,
    char: "究",
    sound: "구",
    meaning: "연구할",
    examples: [{"word":"연구","hanja":"硏究"},{"word":"구명","hanja":"究明"},{"word":"탐구","hanja":"探究"}],
    level: "4급"
  },
  {
    id: 102,
    char: "口",
    sound: "구",
    meaning: "입",
    examples: [{"word":"인구","hanja":"人口"},{"word":"입구","hanja":"入口"},{"word":"출구","hanja":"出口"}],
    level: "4급"
  },
  {
    id: 103,
    char: "救",
    sound: "구",
    meaning: "구원할",
    examples: [{"word":"구조","hanja":"救助"},{"word":"구원","hanja":"救援"},{"word":"구급","hanja":"救急"}],
    level: "4급"
  },
  {
    id: 104,
    char: "舊",
    sound: "구",
    meaning: "예",
    examples: [{"word":"신구","hanja":"新舊"},{"word":"구세대","hanja":"舊世代"},{"word":"복구","hanja":"復舊"}],
    level: "4급"
  },
  {
    id: 105,
    char: "久",
    sound: "구",
    meaning: "오랜",
    examples: [{"word":"영구","hanja":"永久"},{"word":"내구","hanja":"耐久"},{"word":"오래","hanja":"久"}],
    level: "4급"
  },
  {
    id: 106,
    char: "國",
    sound: "국",
    meaning: "나라",
    examples: [{"word":"국가","hanja":"國家"},{"word":"국민","hanja":"國民"},{"word":"외국","hanja":"外國"}],
    level: "4급"
  },
  {
    id: 107,
    char: "軍",
    sound: "군",
    meaning: "군사",
    examples: [{"word":"군인","hanja":"軍人"},{"word":"군대","hanja":"軍隊"},{"word":"장군","hanja":"將軍"}],
    level: "4급"
  },
  {
    id: 108,
    char: "求",
    sound: "구",
    meaning: "구할",
    examples: [{"word":"요구","hanja":"要求"},{"word":"구직","hanja":"求職"},{"word":"청구","hanja":"請求"}],
    level: "4급"
  },
  {
    id: 109,
    char: "句",
    sound: "구",
    meaning: "글귀",
    examples: [{"word":"문구","hanja":"文句"},{"word":"구절","hanja":"句節"},{"word":"어구","hanja":"語句"}],
    level: "4급"
  },
  {
    id: 110,
    char: "九",
    sound: "구",
    meaning: "아홉",
    examples: [{"word":"구십","hanja":"九十"},{"word":"구월","hanja":"九月"},{"word":"구사일생","hanja":"九死一生"}],
    level: "4급"
  },
  {
    id: 111,
    char: "君",
    sound: "군",
    meaning: "임금",
    examples: [{"word":"군주","hanja":"君主"},{"word":"군자","hanja":"君子"},{"word":"부군","hanja":"夫君"}],
    level: "4급"
  },
  {
    id: 112,
    char: "郡",
    sound: "군",
    meaning: "고을",
    examples: [{"word":"군청","hanja":"郡廳"},{"word":"군수","hanja":"郡守"},{"word":"군내","hanja":"郡內"}],
    level: "4급"
  },
  {
    id: 113,
    char: "宮",
    sound: "궁",
    meaning: "집",
    examples: [{"word":"궁궐","hanja":"宮闕"},{"word":"왕궁","hanja":"王宮"},{"word":"경복궁","hanja":"景福宮"}],
    level: "4급"
  },
  {
    id: 114,
    char: "弓",
    sound: "궁",
    meaning: "활",
    examples: [{"word":"궁수","hanja":"弓手"},{"word":"양궁","hanja":"洋弓"},{"word":"궁도","hanja":"弓道"}],
    level: "4급"
  },
  {
    id: 115,
    char: "卷",
    sound: "권",
    meaning: "책",
    examples: [{"word":"권수","hanja":"卷數"},{"word":"상권","hanja":"上卷"},{"word":"압권","hanja":"壓卷"}],
    level: "4급"
  },
  {
    id: 116,
    char: "權",
    sound: "권",
    meaning: "권세",
    examples: [{"word":"권리","hanja":"權利"},{"word":"권력","hanja":"權力"},{"word":"인권","hanja":"人權"}],
    level: "4급"
  },
  {
    id: 117,
    char: "勸",
    sound: "권",
    meaning: "권할",
    examples: [{"word":"권유","hanja":"勸誘"},{"word":"권장","hanja":"勸奬"},{"word":"권고","hanja":"勸告"}],
    level: "4급"
  },
  {
    id: 118,
    char: "鬼",
    sound: "귀",
    meaning: "귀신",
    examples: [{"word":"귀신","hanja":"鬼神"},{"word":"아귀","hanja":"餓鬼"},{"word":"마귀","hanja":"魔鬼"}],
    level: "4급"
  },
  {
    id: 119,
    char: "貴",
    sound: "귀",
    meaning: "귀할",
    examples: [{"word":"귀중","hanja":"貴重"},{"word":"부귀","hanja":"富貴"},{"word":"귀빈","hanja":"貴賓"}],
    level: "4급"
  },
  {
    id: 120,
    char: "歸",
    sound: "귀",
    meaning: "돌아갈",
    examples: [{"word":"귀가","hanja":"歸家"},{"word":"귀국","hanja":"歸國"},{"word":"복귀","hanja":"復歸"}],
    level: "4급"
  },
  {
    id: 121,
    char: "均",
    sound: "균",
    meaning: "고를",
    examples: [{"word":"평균","hanja":"平均"},{"word":"균등","hanja":"均等"},{"word":"균형","hanja":"均衡"}],
    level: "4급"
  },
  {
    id: 122,
    char: "極",
    sound: "극",
    meaning: "극진할",
    examples: [{"word":"북극","hanja":"北極"},{"word":"적극","hanja":"積極"},{"word":"극치","hanja":"極致"}],
    level: "4급"
  },
  {
    id: 123,
    char: "勤",
    sound: "근",
    meaning: "부지런할",
    examples: [{"word":"근면","hanja":"勤勉"},{"word":"출근","hanja":"出勤"},{"word":"근무","hanja":"勤務"}],
    level: "4급"
  },
  {
    id: 124,
    char: "根",
    sound: "근",
    meaning: "뿌리",
    examples: [{"word":"근본","hanja":"根本"},{"word":"어근","hanja":"語根"},{"word":"근거","hanja":"根據"}],
    level: "4급"
  },
  {
    id: 125,
    char: "近",
    sound: "근",
    meaning: "가까울",
    examples: [{"word":"최근","hanja":"最近"},{"word":"접근","hanja":"接近"},{"word":"원근","hanja":"遠近"}],
    level: "4급"
  },
  {
    id: 126,
    char: "金",
    sound: "금",
    meaning: "쇠/성",
    examples: [{"word":"황금","hanja":"黃金"},{"word":"금속","hanja":"金屬"},{"word":"요금","hanja":"料金"}],
    level: "4급"
  },
  {
    id: 127,
    char: "今",
    sound: "금",
    meaning: "이제",
    examples: [{"word":"금일","hanja":"今日"},{"word":"금년","hanja":"今年"},{"word":"지금","hanja":"只今"}],
    level: "4급"
  },
  {
    id: 128,
    char: "禁",
    sound: "금",
    meaning: "금할",
    examples: [{"word":"금지","hanja":"禁止"},{"word":"금연","hanja":"禁煙"},{"word":"감금","hanja":"監禁"}],
    level: "4급"
  },
  {
    id: 129,
    char: "急",
    sound: "급",
    meaning: "급할",
    examples: [{"word":"급행","hanja":"急行"},{"word":"시급","hanja":"時急"},{"word":"긴급","hanja":"緊急"}],
    level: "4급"
  },
  {
    id: 130,
    char: "及",
    sound: "급",
    meaning: "미칠",
    examples: [{"word":"보급","hanja":"普及"},{"word":"언급","hanja":"言及"},{"word":"파급","hanja":"波及"}],
    level: "4급"
  },
  {
    id: 131,
    char: "給",
    sound: "급",
    meaning: "줄",
    examples: [{"word":"월급","hanja":"月給"},{"word":"공급","hanja":"供給"},{"word":"지급","hanja":"支給"}],
    level: "4급"
  },
  {
    id: 132,
    char: "其",
    sound: "기",
    meaning: "그",
    examples: [{"word":"그것","hanja":"其"},{"word":"기타","hanja":"其他"},{"word":"각기","hanja":"各其"}],
    level: "4급"
  },
  {
    id: 133,
    char: "器",
    sound: "기",
    meaning: "그릇",
    examples: [{"word":"식기","hanja":"食器"},{"word":"기구","hanja":"器具"},{"word":"악기","hanja":"樂器"}],
    level: "4급"
  },
  {
    id: 134,
    char: "記",
    sound: "기",
    meaning: "기록할",
    examples: [{"word":"기록","hanja":"記錄"},{"word":"일기","hanja":"日記"},{"word":"기사","hanja":"記事"}],
    level: "4급"
  },
  {
    id: 135,
    char: "期",
    sound: "기",
    meaning: "기약할",
    examples: [{"word":"기간","hanja":"期間"},{"word":"학기","hanja":"學期"},{"word":"기대","hanja":"期待"}],
    level: "4급"
  },
  {
    id: 136,
    char: "氣",
    sound: "기",
    meaning: "기운",
    examples: [{"word":"기분","hanja":"氣分"},{"word":"공기","hanja":"空氣"},{"word":"날씨","hanja":"天氣"}],
    level: "4급"
  },
  {
    id: 137,
    char: "幾",
    sound: "기",
    meaning: "몇",
    examples: [{"word":"무엇","hanja":"幾"},{"word":"기하학","hanja":"幾何學"},{"word":"기미","hanja":"幾微"}],
    level: "4급"
  },
  {
    id: 138,
    char: "己",
    sound: "기",
    meaning: "몸/자기",
    examples: [{"word":"자기","hanja":"自己"},{"word":"이기","hanja":"利己"},{"word":"극기","hanja":"克己"}],
    level: "4급"
  },
  {
    id: 139,
    char: "祈",
    sound: "기",
    meaning: "빌",
    examples: [{"word":"기도","hanja":"祈禱"},{"word":"기원","hanja":"祈願"},{"word":"기복","hanja":"祈福"}],
    level: "4급"
  },
  {
    id: 140,
    char: "起",
    sound: "기",
    meaning: "일어날",
    examples: [{"word":"기상","hanja":"起床"},{"word":"기립","hanja":"起立"},{"word":"발기","hanja":"發起"}],
    level: "4급"
  },
  {
    id: 141,
    char: "技",
    sound: "기",
    meaning: "재주",
    examples: [{"word":"기술","hanja":"技術"},{"word":"특기","hanja":"特技"},{"word":"연기","hanja":"演技"}],
    level: "4급"
  },
  {
    id: 142,
    char: "基",
    sound: "기",
    meaning: "터",
    examples: [{"word":"기초","hanja":"基礎"},{"word":"기본","hanja":"基本"},{"word":"기준","hanja":"基準"}],
    level: "4급"
  },
  {
    id: 143,
    char: "機",
    sound: "기",
    meaning: "틀",
    examples: [{"word":"기계","hanja":"機械"},{"word":"비행기","hanja":"飛行機"},{"word":"기회","hanja":"機會"}],
    level: "4급"
  },
  {
    id: 144,
    char: "吉",
    sound: "길",
    meaning: "길할",
    examples: [{"word":"길일","hanja":"吉日"},{"word":"불길","hanja":"不吉"},{"word":"길조","hanja":"吉兆"}],
    level: "4급"
  },
  {
    id: 145,
    char: "暖",
    sound: "난",
    meaning: "따뜻할",
    examples: [{"word":"난방","hanja":"暖房"},{"word":"난류","hanja":"暖流"},{"word":"온난","hanja":"溫暖"}],
    level: "4급"
  },
  {
    id: 146,
    char: "難",
    sound: "난",
    meaning: "어려울",
    examples: [{"word":"고난","hanja":"苦難"},{"word":"난관","hanja":"難關"},{"word":"곤란","hanja":"困難"}],
    level: "4급"
  },
  {
    id: 147,
    char: "南",
    sound: "남",
    meaning: "남녘",
    examples: [{"word":"남북","hanja":"南北"},{"word":"남쪽","hanja":"南쪽"},{"word":"강남","hanja":"江南"}],
    level: "4급"
  },
  {
    id: 148,
    char: "男",
    sound: "남",
    meaning: "사내",
    examples: [{"word":"남자","hanja":"男子"},{"word":"남녀","hanja":"男女"},{"word":"장남","hanja":"長男"}],
    level: "4급"
  },
  {
    id: 149,
    char: "納",
    sound: "납",
    meaning: "들일",
    examples: [{"word":"납세","hanja":"納稅"},{"word":"납입","hanja":"納入"},{"word":"수납","hanja":"受納"}],
    level: "4급"
  },
  {
    id: 150,
    char: "耐",
    sound: "내",
    meaning: "견딜",
    examples: [{"word":"인내","hanja":"忍耐"},{"word":"내구","hanja":"耐久"},{"word":"내성","hanja":"耐性"}],
    level: "4급"
  },
  {
    id: 151,
    char: "內",
    sound: "내",
    meaning: "안",
    examples: [{"word":"내부","hanja":"內部"},{"word":"실내","hanja":"室內"},{"word":"국내","hanja":"國內"}],
    level: "4급"
  },
  {
    id: 152,
    char: "乃",
    sound: "내",
    meaning: "이에",
    examples: [{"word":"내지","hanja":"乃至"},{"word":"일내","hanja":"一乃"}],
    level: "4급"
  },
  {
    id: 153,
    char: "女",
    sound: "녀",
    meaning: "계집",
    examples: [{"word":"여자","hanja":"女子"},{"word":"소녀","hanja":"少女"},{"word":"여성","hanja":"女性"}],
    level: "4급"
  },
  {
    id: 154,
    char: "年",
    sound: "년",
    meaning: "해",
    examples: [{"word":"내년","hanja":"來年"},{"word":"학년","hanja":"學年"},{"word":"금년","hanja":"今年"}],
    level: "4급"
  },
  {
    id: 155,
    char: "念",
    sound: "념",
    meaning: "생각",
    examples: [{"word":"기념","hanja":"記念"},{"word":"염려","hanja":"念慮"},{"word":"이념","hanja":"理念"}],
    level: "4급"
  },
  {
    id: 156,
    char: "寧",
    sound: "령",
    meaning: "편안할",
    examples: [{"word":"안녕","hanja":"安寧"},{"word":"정녕","hanja":"丁寧"}],
    level: "4급"
  },
  {
    id: 157,
    char: "奴",
    sound: "노",
    meaning: "종",
    examples: [{"word":"노예","hanja":"奴隸"},{"word":"노비","hanja":"奴婢"},{"word":"노동","hanja":"奴童"}],
    level: "4급"
  },
  {
    id: 158,
    char: "努",
    sound: "노",
    meaning: "힘쓸",
    examples: [{"word":"노력","hanja":"努力"}],
    level: "4급"
  },
  {
    id: 159,
    char: "怒",
    sound: "로",
    meaning: "성낼",
    examples: [{"word":"분노","hanja":"忿怒"},{"word":"노여움","hanja":"怒"}],
    level: "4급"
  },
  {
    id: 160,
    char: "農",
    sound: "농",
    meaning: "농사",
    examples: [{"word":"농업","hanja":"農業"},{"word":"영농","hanja":"營農"},{"word":"농촌","hanja":"農村"}],
    level: "4급"
  },
  {
    id: 161,
    char: "能",
    sound: "능",
    meaning: "능할",
    examples: [{"word":"능력","hanja":"能力"},{"word":"가능","hanja":"可能"},{"word":"유능","hanja":"有能"}],
    level: "4급"
  },
  {
    id: 162,
    char: "多",
    sound: "다",
    meaning: "많을",
    examples: [{"word":"다수","hanja":"多數"},{"word":"다양","hanja":"多樣"},{"word":"과다","hanja":"過多"}],
    level: "4급"
  },
  {
    id: 163,
    char: "端",
    sound: "단",
    meaning: "끝/바를",
    examples: [{"word":"단정","hanja":"端正"},{"word":"말단","hanja":"末端"},{"word":"단서","hanja":"端緖"}],
    level: "4급"
  },
  {
    id: 164,
    char: "丹",
    sound: "단",
    meaning: "붉을",
    examples: [{"word":"단풍","hanja":"丹楓"},{"word":"단심","hanja":"丹心"}],
    level: "4급"
  },
  {
    id: 165,
    char: "短",
    sound: "단",
    meaning: "짧을",
    examples: [{"word":"단점","hanja":"短點"},{"word":"단축","hanja":"短縮"},{"word":"장단","hanja":"長短"}],
    level: "4급"
  },
  {
    id: 166,
    char: "單",
    sound: "단",
    meaning: "홑",
    examples: [{"word":"단순","hanja":"單純"},{"word":"간단","hanja":"簡單"},{"word":"단독","hanja":"單獨"}],
    level: "4급"
  },
  {
    id: 167,
    char: "斷",
    sound: "단",
    meaning: "끊을",
    examples: [{"word":"결단","hanja":"決斷"},{"word":"절단","hanja":"切斷"},{"word":"중단","hanja":"中斷"}],
    level: "4급"
  },
  {
    id: 168,
    char: "但",
    sound: "단",
    meaning: "다만",
    examples: [{"word":"단서","hanja":"但書"}],
    level: "4급"
  },
  {
    id: 169,
    char: "達",
    sound: "달",
    meaning: "통달할",
    examples: [{"word":"도달","hanja":"到達"},{"word":"발달","hanja":"發達"},{"word":"전달","hanja":"傳達"}],
    level: "4급"
  },
  {
    id: 170,
    char: "談",
    sound: "담",
    meaning: "말씀",
    examples: [{"word":"담화","hanja":"談話"},{"word":"회담","hanja":"會談"},{"word":"면담","hanja":"面談"}],
    level: "4급"
  },
  {
    id: 171,
    char: "答",
    sound: "답",
    meaning: "대답",
    examples: [{"word":"대답","hanja":"對答"},{"word":"정답","hanja":"正答"},{"word":"답안","hanja":"答案"}],
    level: "4급"
  },
  {
    id: 172,
    char: "當",
    sound: "당",
    meaning: "마땅",
    examples: [{"word":"당연","hanja":"當然"},{"word":"정당","hanja":"正當"},{"word":"해당","hanja":"該當"}],
    level: "4급"
  },
  {
    id: 173,
    char: "堂",
    sound: "당",
    meaning: "집",
    examples: [{"word":"식당","hanja":"食堂"},{"word":"강당","hanja":"講堂"},{"word":"서당","hanja":"書堂"}],
    level: "4급"
  },
  {
    id: 174,
    char: "大",
    sound: "대",
    meaning: "큰",
    examples: [{"word":"대문","hanja":"大門"},{"word":"대학교","hanja":"大學校"},{"word":"거대","hanja":"巨大"}],
    level: "4급"
  },
  {
    id: 175,
    char: "待",
    sound: "대",
    meaning: "기다릴",
    examples: [{"word":"대기","hanja":"待機"},{"word":"고대","hanja":"苦待"},{"word":"대접","hanja":"待接"}],
    level: "4급"
  },
  {
    id: 176,
    char: "代",
    sound: "대",
    meaning: "대신할",
    examples: [{"word":"대신","hanja":"代身"},{"word":"시대","hanja":"時代"},{"word":"대표","hanja":"代表"}],
    level: "4급"
  },
  {
    id: 177,
    char: "對",
    sound: "대",
    meaning: "대할",
    examples: [{"word":"반대","hanja":"反對"},{"word":"상대","hanja":"相對"},{"word":"대화","hanja":"對話"}],
    level: "4급"
  },
  {
    id: 178,
    char: "德",
    sound: "덕",
    meaning: "덕",
    examples: [{"word":"도덕","hanja":"道德"},{"word":"미덕","hanja":"美德"},{"word":"덕분","hanja":"德分"}],
    level: "4급"
  },
  {
    id: 179,
    char: "圖",
    sound: "도",
    meaning: "그림",
    examples: [{"word":"지도","hanja":"地圖"},{"word":"도서관","hanja":"圖書館"},{"word":"의도","hanja":"意圖"}],
    level: "4급"
  },
  {
    id: 180,
    char: "都",
    sound: "도",
    meaning: "도읍",
    examples: [{"word":"도시","hanja":"都市"},{"word":"수도","hanja":"首都"},{"word":"도심","hanja":"都心"}],
    level: "4급"
  },
  {
    id: 181,
    char: "徒",
    sound: "도",
    meaning: "무리",
    examples: [{"word":"신도","hanja":"信徒"},{"word":"학도","hanja":"學徒"},{"word":"도보","hanja":"徒步"}],
    level: "4급"
  },
  {
    id: 182,
    char: "島",
    sound: "도",
    meaning: "섬",
    examples: [{"word":"독도","hanja":"獨島"},{"word":"제주도","hanja":"濟州島"},{"word":"반도","hanja":"半島"}],
    level: "4급"
  },
  {
    id: 183,
    char: "刀",
    sound: "도",
    meaning: "칼",
    examples: [{"word":"단도","hanja":"短刀"},{"word":"면도","hanja":"面刀"}],
    level: "4급"
  },
  {
    id: 184,
    char: "道",
    sound: "도",
    meaning: "길",
    examples: [{"word":"도로","hanja":"道路"},{"word":"도덕","hanja":"道德"},{"word":"보도","hanja":"報道"}],
    level: "4급"
  },
  {
    id: 185,
    char: "盜",
    sound: "도",
    meaning: "훔칠",
    examples: [{"word":"강도","hanja":"强盜"},{"word":"도난","hanja":"盜難"},{"word":"도둑","hanja":"盜"}],
    level: "4급"
  },
  {
    id: 186,
    char: "度",
    sound: "도",
    meaning: "법도",
    examples: [{"word":"제도","hanja":"制度"},{"word":"온도","hanja":"溫度"},{"word":"태도","hanja":"態度"}],
    level: "4급"
  },
  {
    id: 187,
    char: "到",
    sound: "도",
    meaning: "이를",
    examples: [{"word":"도착","hanja":"到着"},{"word":"도달","hanja":"到達"}],
    level: "4급"
  },
  {
    id: 188,
    char: "讀",
    sound: "독",
    meaning: "읽을",
    examples: [{"word":"독서","hanja":"讀書"},{"word":"구독","hanja":"購讀"},{"word":"독자","hanja":"讀者"}],
    level: "4급"
  },
  {
    id: 189,
    char: "獨",
    sound: "독",
    meaning: "홀로",
    examples: [{"word":"독립","hanja":"獨立"},{"word":"고독","hanja":"孤獨"},{"word":"독특","hanja":"獨特"}],
    level: "4급"
  },
  {
    id: 190,
    char: "東",
    sound: "동",
    meaning: "동녘",
    examples: [{"word":"동쪽","hanja":"東쪽"},{"word":"동해","hanja":"東海"},{"word":"동양","hanja":"東洋"}],
    level: "4급"
  },
  {
    id: 191,
    char: "冬",
    sound: "동",
    meaning: "한가지",
    examples: [{"word":"동일","hanja":"同一"},{"word":"동의","hanja":"同意"},{"word":"협동","hanja":"協同"}],
    level: "4급"
  },
  {
    id: 192,
    char: "洞",
    sound: "동",
    meaning: "겨울",
    examples: [{"word":"동계","hanja":"冬季"},{"word":"월동","hanja":"越冬"}],
    level: "4급"
  },
  {
    id: 193,
    char: "童",
    sound: "동",
    meaning: "골/마을",
    examples: [{"word":"동네","hanja":"洞네"},{"word":"동굴","hanja":"洞窟"}],
    level: "4급"
  },
  {
    id: 194,
    char: "動",
    sound: "동",
    meaning: "아이",
    examples: [{"word":"아동","hanja":"兒童"},{"word":"동화","hanja":"童話"},{"word":"동심","hanja":"童心"}],
    level: "4급"
  },
  {
    id: 195,
    char: "斗",
    sound: "두",
    meaning: "움직일",
    examples: [{"word":"운동","hanja":"運動"},{"word":"활동","hanja":"活動"},{"word":"자동","hanja":"自動"}],
    level: "4급"
  },
  {
    id: 196,
    char: "頭",
    sound: "두",
    meaning: "말",
    examples: [{"word":"북두칠성","hanja":"北斗七星"}],
    level: "4급"
  },
  {
    id: 197,
    char: "豆",
    sound: "두",
    meaning: "머리",
    examples: [{"word":"두통","hanja":"頭痛"},{"word":"선두","hanja":"先頭"},{"word":"두각","hanja":"頭角"}],
    level: "4급"
  },
  {
    id: 198,
    char: "得",
    sound: "득",
    meaning: "콩",
    examples: [{"word":"두부","hanja":"豆腐"},{"word":"대두","hanja":"大豆"},{"word":"두유","hanja":"豆乳"}],
    level: "4급"
  },
  {
    id: 199,
    char: "燈",
    sound: "등",
    meaning: "얻을",
    examples: [{"word":"이득","hanja":"利得"},{"word":"설득","hanja":"說得"},{"word":"소득","hanja":"所得"}],
    level: "4급"
  },
  {
    id: 200,
    char: "等",
    sound: "등",
    meaning: "등불",
    examples: [{"word":"전등","hanja":"電燈"},{"word":"등대","hanja":"燈臺"},{"word":"점등","hanja":"點燈"}],
    level: "4급"
  },
  {
    id: 201,
    char: "落",
    sound: "락",
    meaning: "떨어질",
    examples: [{"word":"낙엽","hanja":"落葉"},{"word":"추락","hanja":"墜落"},{"word":"탈락","hanja":"脫落"}],
    level: "4급"
  },
  {
    id: 202,
    char: "樂",
    sound: "락",
    meaning: "즐거울",
    examples: [{"word":"오락","hanja":"娛樂"},{"word":"쾌락","hanja":"快樂"},{"word":"낙원","hanja":"樂園"}],
    level: "4급"
  },
  {
    id: 203,
    char: "卵",
    sound: "란",
    meaning: "알",
    examples: [{"word":"계란","hanja":"鷄卵"},{"word":"산란","hanja":"産卵"},{"word":"난자","hanja":"卵子"}],
    level: "4급"
  },
  {
    id: 204,
    char: "亂",
    sound: "란",
    meaning: "어지러울",
    examples: [{"word":"혼란","hanja":"混亂"},{"word":"반란","hanja":"叛亂"},{"word":"요란","hanja":"搖亂"}],
    level: "4급"
  },
  {
    id: 205,
    char: "浪",
    sound: "랑",
    meaning: "물결",
    examples: [{"word":"파랑","hanja":"波浪"},{"word":"낭비","hanja":"浪費"},{"word":"유랑","hanja":"流浪"}],
    level: "4급"
  },
  {
    id: 206,
    char: "來",
    sound: "래",
    meaning: "올",
    examples: [{"word":"미래","hanja":"未來"},{"word":"내일","hanja":"來日"},{"word":"왕래","hanja":"往來"}],
    level: "4급"
  },
  {
    id: 207,
    char: "冷",
    sound: "랭",
    meaning: "찰",
    examples: [{"word":"냉장고","hanja":"冷藏庫"},{"word":"냉동","hanja":"冷凍"},{"word":"냉정","hanja":"冷靜"}],
    level: "4급"
  },
  {
    id: 208,
    char: "涼",
    sound: "량",
    meaning: "서늘할",
    examples: [{"word":"청량","hanja":"淸凉"},{"word":"납량","hanja":"納凉"},{"word":"황량","hanja":"荒凉"}],
    level: "4급"
  },
  {
    id: 209,
    char: "同",
    sound: "동",
    meaning: "한가지",
    examples: [{"word":"동창","hanja":"同窓"},{"word":"공동","hanja":"共同"},{"word":"동감","hanja":"同感"}],
    level: "4급"
  },
  {
    id: 210,
    char: "登",
    sound: "등",
    meaning: "오를",
    examples: [{"word":"등산","hanja":"登山"},{"word":"등교","hanja":"登校"},{"word":"등장","hanja":"登場"}],
    level: "4급"
  },
  {
    id: 211,
    char: "量",
    sound: "량",
    meaning: "헤아릴",
    examples: [{"word":"수량","hanja":"數量"},{"word":"분량","hanja":"分量"},{"word":"역량","hanja":"力量"}],
    level: "4급"
  },
  {
    id: 212,
    char: "良",
    sound: "량",
    meaning: "어질",
    examples: [{"word":"양심","hanja":"良心"},{"word":"양호","hanja":"良好"},{"word":"개량","hanja":"改良"}],
    level: "4급"
  },
  {
    id: 213,
    char: "兩",
    sound: "량",
    meaning: "두",
    examples: [{"word":"양측","hanja":"兩側"},{"word":"양면","hanja":"兩面"},{"word":"양립","hanja":"兩立"}],
    level: "4급"
  },
  {
    id: 214,
    char: "旅",
    sound: "려",
    meaning: "나그네",
    examples: [{"word":"여행","hanja":"旅行"},{"word":"여관","hanja":"旅館"},{"word":"여권","hanja":"旅券"}],
    level: "4급"
  },
  {
    id: 215,
    char: "歷",
    sound: "력",
    meaning: "지날",
    examples: [{"word":"역사","hanja":"歷史"},{"word":"이력","hanja":"履歷"},{"word":"경력","hanja":"經歷"}],
    level: "4급"
  },
  {
    id: 216,
    char: "力",
    sound: "력",
    meaning: "힘",
    examples: [{"word":"노력","hanja":"努力"},{"word":"능력","hanja":"能力"},{"word":"협력","hanja":"協力"}],
    level: "4급"
  },
  {
    id: 217,
    char: "聯",
    sound: "련",
    meaning: "잇닿을",
    examples: [{"word":"연합","hanja":"聯合"},{"word":"관련","hanja":"關聯"},{"word":"연맹","hanja":"聯盟"}],
    level: "4급"
  },
  {
    id: 218,
    char: "連",
    sound: "련",
    meaning: "이을",
    examples: [{"word":"연결","hanja":"連結"},{"word":"연속","hanja":"連續"},{"word":"연락","hanja":"連絡"}],
    level: "4급"
  },
  {
    id: 219,
    char: "練",
    sound: "련",
    meaning: "익힐",
    examples: [{"word":"연습","hanja":"練習"},{"word":"세련","hanja":"洗練"},{"word":"숙련","hanja":"熟練"}],
    level: "4급"
  },
  {
    id: 220,
    char: "烈",
    sound: "렬",
    meaning: "매울",
    examples: [{"word":"열렬","hanja":"熱烈"},{"word":"치열","hanja":"熾烈"},{"word":"강렬","hanja":"强烈"}],
    level: "4급"
  },
  {
    id: 221,
    char: "列",
    sound: "렬",
    meaning: "벌일",
    examples: [{"word":"줄","hanja":"列"},{"word":"나열","hanja":"羅列"},{"word":"행렬","hanja":"行列"}],
    level: "4급"
  },
  {
    id: 222,
    char: "領",
    sound: "령",
    meaning: "거느릴",
    examples: [{"word":"대통령","hanja":"大統領"},{"word":"영토","hanja":"領土"},{"word":"점령","hanja":"占領"}],
    level: "4급"
  },
  {
    id: 223,
    char: "令",
    sound: "령",
    meaning: "하여금",
    examples: [{"word":"명령","hanja":"命令"},{"word":"법령","hanja":"法令"},{"word":"지령","hanja":"指令"}],
    level: "4급"
  },
  {
    id: 224,
    char: "禮",
    sound: "례",
    meaning: "예도",
    examples: [{"word":"예절","hanja":"禮節"},{"word":"예의","hanja":"禮儀"},{"word":"실례","hanja":"失禮"}],
    level: "4급"
  },
  {
    id: 225,
    char: "例",
    sound: "례",
    meaning: "법식",
    examples: [{"word":"예시","hanja":"例示"},{"word":"사례","hanja":"事例"},{"word":"예외","hanja":"例外"}],
    level: "4급"
  },
  {
    id: 226,
    char: "勞",
    sound: "로",
    meaning: "일할",
    examples: [{"word":"노동","hanja":"勞動"},{"word":"근로","hanja":"勤勞"},{"word":"피로","hanja":"疲勞"}],
    level: "4급"
  },
  {
    id: 227,
    char: "路",
    sound: "로",
    meaning: "길",
    examples: [{"word":"도로","hanja":"道路"},{"word":"진로","hanja":"進路"},{"word":"통로","hanja":"通路"}],
    level: "4급"
  },
  {
    id: 228,
    char: "老",
    sound: "로",
    meaning: "늙을",
    examples: [{"word":"노인","hanja":"老人"},{"word":"노후","hanja":"老後"},{"word":"경로","hanja":"敬老"}],
    level: "4급"
  },
  {
    id: 229,
    char: "露",
    sound: "로",
    meaning: "이슬",
    examples: [{"word":"노출","hanja":"露出"},{"word":"폭로","hanja":"暴露"},{"word":"노숙","hanja":"露宿"}],
    level: "4급"
  },
  {
    id: 230,
    char: "綠",
    sound: "록",
    meaning: "푸를",
    examples: [{"word":"초록","hanja":"草綠"},{"word":"녹색","hanja":"綠色"},{"word":"녹차","hanja":"綠茶"}],
    level: "4급"
  },
  {
    id: 231,
    char: "論",
    sound: "론",
    meaning: "논할",
    examples: [{"word":"의논","hanja":"議論"},{"word":"토론","hanja":"討論"},{"word":"이론","hanja":"理論"}],
    level: "4급"
  },
  {
    id: 232,
    char: "料",
    sound: "료",
    meaning: "헤아릴",
    examples: [{"word":"요금","hanja":"料金"},{"word":"재료","hanja":"材料"},{"word":"자료","hanja":"資料"}],
    level: "4급"
  },
  {
    id: 233,
    char: "留",
    sound: "류",
    meaning: "머무를",
    examples: [{"word":"유학","hanja":"留學"},{"word":"보류","hanja":"保留"},{"word":"체류","hanja":"滯留"}],
    level: "4급"
  },
  {
    id: 234,
    char: "流",
    sound: "류",
    meaning: "흐를",
    examples: [{"word":"교류","hanja":"交流"},{"word":"유행","hanja":"流行"},{"word":"일류","hanja":"一流"}],
    level: "4급"
  },
  {
    id: 235,
    char: "柳",
    sound: "류",
    meaning: "버들",
    examples: [{"word":"유성","hanja":"柳城"},{"word":"화류","hanja":"花柳"}],
    level: "4급"
  },
  {
    id: 236,
    char: "陸",
    sound: "륙",
    meaning: "뭍",
    examples: [{"word":"대륙","hanja":"大陸"},{"word":"육지","hanja":"陸地"},{"word":"상륙","hanja":"上陸"}],
    level: "4급"
  },
  {
    id: 237,
    char: "六",
    sound: "륙",
    meaning: "여섯",
    examples: [{"word":"육십","hanja":"六十"},{"word":"오육월","hanja":"五六月"}],
    level: "4급"
  },
  {
    id: 238,
    char: "倫",
    sound: "륜",
    meaning: "인륜",
    examples: [{"word":"윤리","hanja":"倫理"},{"word":"인륜","hanja":"人倫"},{"word":"패륜","hanja":"悖倫"}],
    level: "4급"
  },
  {
    id: 239,
    char: "律",
    sound: "률",
    meaning: "법",
    examples: [{"word":"법률","hanja":"法律"},{"word":"규율","hanja":"規律"},{"word":"자율","hanja":"自律"}],
    level: "4급"
  },
  {
    id: 240,
    char: "率",
    sound: "솔",
    meaning: "거느릴",
    examples: [{"word":"솔선","hanja":"率先"},{"word":"인솔","hanja":"引率"},{"word":"통솔","hanja":"統率"}],
    level: "4급"
  },
  {
    id: 241,
    char: "理",
    sound: "리",
    meaning: "다스릴",
    examples: [{"word":"이해","hanja":"理解"},{"word":"이유","hanja":"理由"},{"word":"정리","hanja":"整理"}],
    level: "4급"
  },
  {
    id: 242,
    char: "里",
    sound: "리",
    meaning: "마을",
    examples: [{"word":"이장","hanja":"里長"},{"word":"천리","hanja":"千里"},{"word":"향리","hanja":"鄕里"}],
    level: "4급"
  },
  {
    id: 243,
    char: "利",
    sound: "리",
    meaning: "이로울",
    examples: [{"word":"편리","hanja":"便利"},{"word":"승리","hanja":"勝利"},{"word":"이익","hanja":"利益"}],
    level: "4급"
  },
  {
    id: 244,
    char: "林",
    sound: "림",
    meaning: "수풀",
    examples: [{"word":"산림","hanja":"山林"},{"word":"삼림","hanja":"森林"},{"word":"임업","hanja":"林業"}],
    level: "4급"
  },
  {
    id: 245,
    char: "臨",
    sound: "림",
    meaning: "임할",
    examples: [{"word":"임시","hanja":"臨時"},{"word":"군림","hanja":"君臨"},{"word":"임종","hanja":"臨終"}],
    level: "4급"
  },
  {
    id: 246,
    char: "立",
    sound: "립",
    meaning: "설",
    examples: [{"word":"독립","hanja":"獨立"},{"word":"설립","hanja":"設立"},{"word":"입장","hanja":"立場"}],
    level: "4급"
  },
  {
    id: 247,
    char: "馬",
    sound: "마",
    meaning: "말",
    examples: [{"word":"경마","hanja":"競馬"},{"word":"마차","hanja":"馬車"},{"word":"승마","hanja":"乘馬"}],
    level: "4급"
  },
  {
    id: 248,
    char: "莫",
    sound: "막",
    meaning: "없을",
    examples: [{"word":"막대한","hanja":"莫大한"},{"word":"막강","hanja":"莫强"}],
    level: "4급"
  },
  {
    id: 249,
    char: "萬",
    sound: "만",
    meaning: "일만",
    examples: [{"word":"만세","hanja":"萬歲"},{"word":"만물","hanja":"萬物"},{"word":"수만","hanja":"數萬"}],
    level: "4급"
  },
  {
    id: 250,
    char: "滿",
    sound: "만",
    meaning: "찰",
    examples: [{"word":"만족","hanja":"滿足"},{"word":"불만","hanja":"不滿"},{"word":"미만","hanja":"未滿"}],
    level: "4급"
  },
  {
    id: 251,
    char: "末",
    sound: "말",
    meaning: "끝",
    examples: [{"word":"연말","hanja":"年末"},{"word":"주말","hanja":"週末"},{"word":"결말","hanja":"結末"}],
    level: "4급"
  },
  {
    id: 252,
    char: "亡",
    sound: "망",
    meaning: "망할",
    examples: [{"word":"사망","hanja":"死亡"},{"word":"망명","hanja":"亡命"},{"word":"멸망","hanja":"滅亡"}],
    level: "4급"
  },
  {
    id: 253,
    char: "忙",
    sound: "망",
    meaning: "바쁠",
    examples: [{"word":"다망","hanja":"多忙"},{"word":"공사다망","hanja":"公私多忙"}],
    level: "4급"
  },
  {
    id: 254,
    char: "忘",
    sound: "망",
    meaning: "잊을",
    examples: [{"word":"망각","hanja":"忘却"},{"word":"건망증","hanja":"健忘症"}],
    level: "4급"
  },
  {
    id: 255,
    char: "望",
    sound: "망",
    meaning: "바랄",
    examples: [{"word":"희망","hanja":"希望"},{"word":"소망","hanja":"所望"},{"word":"절망","hanja":"絶望"}],
    level: "4급"
  },
  {
    id: 256,
    char: "妹",
    sound: "매",
    meaning: "누이",
    examples: [{"word":"자매","hanja":"姉妹"},{"word":"남매","hanja":"男妹"}],
    level: "4급"
  },
  {
    id: 257,
    char: "每",
    sound: "매",
    meaning: "매양",
    examples: [{"word":"매일","hanja":"每日"},{"word":"매주","hanja":"每周"},{"word":"매년","hanja":"每年"}],
    level: "4급"
  },
  {
    id: 258,
    char: "買",
    sound: "매",
    meaning: "살",
    examples: [{"word":"매매","hanja":"買賣"},{"word":"구매","hanja":"購買"},{"word":"매수","hanja":"買收"}],
    level: "4급"
  },
  {
    id: 259,
    char: "賣",
    sound: "매",
    meaning: "팔",
    examples: [{"word":"매매","hanja":"賣買"},{"word":"매점","hanja":"賣店"},{"word":"판매","hanja":"販賣"}],
    level: "4급"
  },
  {
    id: 260,
    char: "麥",
    sound: "맥",
    meaning: "보리",
    examples: [{"word":"맥주","hanja":"麥酒"},{"word":"보리","hanja":"麥"}],
    level: "4급"
  },
  {
    id: 261,
    char: "盟",
    sound: "맹",
    meaning: "맹세",
    examples: [{"word":"동맹","hanja":"同盟"},{"word":"연맹","hanja":"聯盟"},{"word":"가맹","hanja":"加盟"}],
    level: "4급"
  },
  {
    id: 262,
    char: "眠",
    sound: "면",
    meaning: "잠잘",
    examples: [{"word":"수면","hanja":"睡眠"},{"word":"불면","hanja":"不眠"},{"word":"동면","hanja":"冬眠"}],
    level: "4급"
  },
  {
    id: 263,
    char: "面",
    sound: "면",
    meaning: "낯",
    examples: [{"word":"얼굴","hanja":"面"},{"word":"화면","hanja":"畫面"},{"word":"표면","hanja":"表面"}],
    level: "4급"
  },
  {
    id: 264,
    char: "免",
    sound: "면",
    meaning: "면할",
    examples: [{"word":"면제","hanja":"免除"},{"word":"면허","hanja":"免許"},{"word":"모면","hanja":"謨免"}],
    level: "4급"
  },
  {
    id: 265,
    char: "勉",
    sound: "면",
    meaning: "힘쓸",
    examples: [{"word":"공부","hanja":"工夫"}],
    level: "4급"
  },
  {
    id: 266,
    char: "明",
    sound: "명",
    meaning: "밝을",
    examples: [{"word":"설명","hanja":"說明"},{"word":"투명","hanja":"透明"},{"word":"조명","hanja":"照明"}],
    level: "4급"
  },
  {
    id: 267,
    char: "鳴",
    sound: "명",
    meaning: "울",
    examples: [{"word":"비명","hanja":"悲鳴"},{"word":"공명","hanja":"共鳴"}],
    level: "4급"
  },
  {
    id: 268,
    char: "名",
    sound: "명",
    meaning: "이름",
    examples: [{"word":"이름","hanja":"名"},{"word":"유명","hanja":"有名"},{"word":"서명","hanja":"署名"}],
    level: "4급"
  },
  {
    id: 269,
    char: "命",
    sound: "명",
    meaning: "목숨",
    examples: [{"word":"생명","hanja":"生命"},{"word":"운명","hanja":"運命"},{"word":"명령","hanja":"命令"}],
    level: "4급"
  },
  {
    id: 270,
    char: "毛",
    sound: "모",
    meaning: "털",
    examples: [{"word":"양모","hanja":"羊毛"},{"word":"모피","hanja":"毛皮"},{"word":"불모","hanja":"不毛"}],
    level: "4급"
  },
  {
    id: 271,
    char: "母",
    sound: "모",
    meaning: "어머니",
    examples: [{"word":"부모","hanja":"父母"},{"word":"고모","hanja":"姑母"},{"word":"모국","hanja":"母國"}],
    level: "4급"
  },
  {
    id: 272,
    char: "暮",
    sound: "모",
    meaning: "저물",
    examples: [{"word":"조삼모사","hanja":"朝三暮四"},{"word":"세모","hanja":"歲暮"}],
    level: "4급"
  },
  {
    id: 273,
    char: "木",
    sound: "목",
    meaning: "나무",
    examples: [{"word":"목수","hanja":"木手"},{"word":"목재","hanja":"木材"},{"word":"토목","hanja":"土木"}],
    level: "4급"
  },
  {
    id: 274,
    char: "目",
    sound: "목",
    meaning: "눈",
    examples: [{"word":"목적","hanja":"目的"},{"word":"과목","hanja":"科目"},{"word":"제목","hanja":"題目"}],
    level: "4급"
  },
  {
    id: 275,
    char: "夢",
    sound: "몽",
    meaning: "꿈",
    examples: [{"word":"꿈","hanja":"夢"},{"word":"해몽","hanja":"解夢"},{"word":"악몽","hanja":"惡夢"}],
    level: "4급"
  },
  {
    id: 276,
    char: "妙",
    sound: "묘",
    meaning: "묘할",
    examples: [{"word":"기묘","hanja":"奇妙"},{"word":"절묘","hanja":"絶妙"},{"word":"오묘","hanja":"奧妙"}],
    level: "4급"
  },
  {
    id: 277,
    char: "墓",
    sound: "묘",
    meaning: "무덤",
    examples: [{"word":"성묘","hanja":"省墓"},{"word":"묘지","hanja":"墓地"}],
    level: "4급"
  },
  {
    id: 278,
    char: "卯",
    sound: "묘",
    meaning: "토끼",
    examples: [{"word":"묘시","hanja":"卯時"}],
    level: "4급"
  },
  {
    id: 279,
    char: "無",
    sound: "무",
    meaning: "없을",
    examples: [{"word":"무시","hanja":"無視"},{"word":"유무","hanja":"有無"},{"word":"무료","hanja":"無料"}],
    level: "4급"
  },
  {
    id: 280,
    char: "武",
    sound: "무",
    meaning: "굳셀",
    examples: [{"word":"무기","hanja":"武器"},{"word":"무력","hanja":"武力"},{"word":"무사","hanja":"武士"}],
    level: "4급"
  },
  {
    id: 281,
    char: "茂",
    sound: "무",
    meaning: "무성할",
    examples: [{"word":"무성","hanja":"茂盛"}],
    level: "4급"
  },
  {
    id: 282,
    char: "貿",
    sound: "무",
    meaning: "무역할",
    examples: [{"word":"무역","hanja":"貿易"}],
    level: "4급"
  },
  {
    id: 283,
    char: "戊",
    sound: "무",
    meaning: "다섯째천간",
    examples: [{"word":"무진","hanja":"戊辰"},{"word":"무술","hanja":"戊戌"}],
    level: "4급"
  },
  {
    id: 284,
    char: "舞",
    sound: "무",
    meaning: "춤출",
    examples: [{"word":"무대","hanja":"舞臺"},{"word":"무용","hanja":"舞踊"},{"word":"고무","hanja":"鼓舞"}],
    level: "4급"
  },
  {
    id: 285,
    char: "務",
    sound: "무",
    meaning: "힘쓸",
    examples: [{"word":"의무","hanja":"義務"},{"word":"업무","hanja":"業務"},{"word":"사무","hanja":"事務"}],
    level: "4급"
  },
  {
    id: 286,
    char: "文",
    sound: "문",
    meaning: "글월",
    examples: [{"word":"문화","hanja":"文化"},{"word":"작문","hanja":"作文"},{"word":"문학","hanja":"文學"}],
    level: "4급"
  },
  {
    id: 287,
    char: "門",
    sound: "문",
    meaning: "문",
    examples: [{"word":"창문","hanja":"窓門"},{"word":"정문","hanja":"正門"},{"word":"부문","hanja":"部門"}],
    level: "4급"
  },
  {
    id: 288,
    char: "問",
    sound: "문",
    meaning: "물을",
    examples: [{"word":"문제","hanja":"問題"},{"word":"질문","hanja":"質問"},{"word":"방문","hanja":"訪問"}],
    level: "4급"
  },
  {
    id: 289,
    char: "聞",
    sound: "문",
    meaning: "들을",
    examples: [{"word":"신문","hanja":"新聞"},{"word":"소문","hanja":"所聞"},{"word":"견문","hanja":"見聞"}],
    level: "4급"
  },
  {
    id: 290,
    char: "物",
    sound: "물",
    meaning: "만물/물건",
    examples: [{"word":"동물","hanja":"動物"},{"word":"물건","hanja":"物件"},{"word":"사물","hanja":"事物"}],
    level: "4급"
  },
  {
    id: 291,
    char: "勿",
    sound: "물",
    meaning: "말",
    examples: [{"word":"물론","hanja":"勿論"}],
    level: "4급"
  },
  {
    id: 292,
    char: "反",
    sound: "반",
    meaning: "돌이킬",
    examples: [{"word":"반대","hanja":"反對"},{"word":"반성","hanja":"反省"},{"word":"위반","hanja":"違反"}],
    level: "4급"
  },
  {
    id: 293,
    char: "味",
    sound: "미",
    meaning: "맛",
    examples: [{"word":"의미","hanja":"意味"},{"word":"흥미","hanja":"興味"},{"word":"취미","hanja":"趣味"}],
    level: "4급"
  },
  {
    id: 294,
    char: "米",
    sound: "미",
    meaning: "쌀",
    examples: [{"word":"백미","hanja":"白米"},{"word":"현미","hanja":"玄米"},{"word":"정미","hanja":"精米"}],
    level: "4급"
  },
  {
    id: 295,
    char: "美",
    sound: "미",
    meaning: "아름다울",
    examples: [{"word":"미술","hanja":"美術"},{"word":"미인","hanja":"美人"},{"word":"화려","hanja":"華麗"}],
    level: "4급"
  },
  {
    id: 296,
    char: "未",
    sound: "미",
    meaning: "아닐",
    examples: [{"word":"미래","hanja":"未來"},{"word":"미안","hanja":"未安"},{"word":"미완성","hanja":"未完成"}],
    level: "4급"
  },
  {
    id: 297,
    char: "民",
    sound: "민",
    meaning: "백성",
    examples: [{"word":"국민","hanja":"國民"},{"word":"시민","hanja":"市民"},{"word":"주민","hanja":"住民"}],
    level: "4급"
  },
  {
    id: 298,
    char: "密",
    sound: "밀",
    meaning: "빽빽할",
    examples: [{"word":"비밀","hanja":"秘密"},{"word":"밀접","hanja":"密接"},{"word":"정밀","hanja":"精密"}],
    level: "4급"
  },
  {
    id: 299,
    char: "博",
    sound: "박",
    meaning: "넓을",
    examples: [{"word":"박사","hanja":"博士"},{"word":"박물관","hanja":"博物館"},{"word":"도박","hanja":"賭博"}],
    level: "4급"
  },
  {
    id: 300,
    char: "朴",
    sound: "박",
    meaning: "성",
    examples: [{"word":"박씨","hanja":"朴氏"},{"word":"순박","hanja":"淳朴"}],
    level: "4급"
  },
  {
    id: 301,
    char: "飯",
    sound: "반",
    meaning: "밥",
    examples: [{"word":"반찬","hanja":"飯饌"},{"word":"식반","hanja":"食飯"},{"word":"백반","hanja":"白飯"}],
    level: "4급"
  },
  {
    id: 302,
    char: "半",
    sound: "반",
    meaning: "반",
    examples: [{"word":"절반","hanja":"折半"},{"word":"반도","hanja":"半島"},{"word":"상반기","hanja":"上半期"}],
    level: "4급"
  },
  {
    id: 303,
    char: "發",
    sound: "발",
    meaning: "필",
    examples: [{"word":"발표","hanja":"發表"},{"word":"출발","hanja":"出發"},{"word":"발명","hanja":"發明"}],
    level: "4급"
  },
  {
    id: 304,
    char: "防",
    sound: "방",
    meaning: "막을",
    examples: [{"word":"방어","hanja":"防禦"},{"word":"예방","hanja":"豫防"},{"word":"국방","hanja":"國防"}],
    level: "4급"
  },
  {
    id: 305,
    char: "方",
    sound: "방",
    meaning: "모",
    examples: [{"word":"방향","hanja":"方向"},{"word":"방법","hanja":"方法"},{"word":"사방","hanja":"四方"}],
    level: "4급"
  },
  {
    id: 306,
    char: "房",
    sound: "방",
    meaning: "방",
    examples: [{"word":"문방구","hanja":"文房具"},{"word":"난방","hanja":"暖房"},{"word":"독방","hanja":"獨房"}],
    level: "4급"
  },
  {
    id: 307,
    char: "放",
    sound: "방",
    meaning: "놓을",
    examples: [{"word":"방송","hanja":"放送"},{"word":"개방","hanja":"開放"},{"word":"방학","hanja":"放學"}],
    level: "4급"
  },
  {
    id: 308,
    char: "訪",
    sound: "방",
    meaning: "찾을",
    examples: [{"word":"방문","hanja":"訪問"},{"word":"탐방","hanja":"探訪"},{"word":"내방","hanja":"來訪"}],
    level: "4급"
  },
  {
    id: 309,
    char: "拜",
    sound: "배",
    meaning: "절",
    examples: [{"word":"세배","hanja":"歲拜"},{"word":"예배","hanja":"禮拜"},{"word":"숭배","hanja":"崇拜"}],
    level: "4급"
  },
  {
    id: 310,
    char: "配",
    sound: "배",
    meaning: "나눌",
    examples: [{"word":"분배","hanja":"分配"},{"word":"배달","hanja":"配達"},{"word":"지배","hanja":"支配"}],
    level: "4급"
  },
  {
    id: 311,
    char: "百",
    sound: "백",
    meaning: "일백",
    examples: [{"word":"백화점","hanja":"百貨店"},{"word":"백성","hanja":"百姓"},{"word":"백과사전","hanja":"百科事典"}],
    level: "4급"
  },
  {
    id: 312,
    char: "白",
    sound: "백",
    meaning: "흰",
    examples: [{"word":"백색","hanja":"白色"},{"word":"결백","hanja":"潔白"},{"word":"공백","hanja":"空白"}],
    level: "4급"
  },
  {
    id: 313,
    char: "番",
    sound: "번",
    meaning: "차례",
    examples: [{"word":"번호","hanja":"番號"},{"word":"당번","hanja":"當番"},{"word":"순번","hanja":"順番"}],
    level: "4급"
  },
  {
    id: 314,
    char: "伐",
    sound: "벌",
    meaning: "칠",
    examples: [{"word":"토벌","hanja":"討伐"},{"word":"정벌","hanja":"征伐"},{"word":"벌목","hanja":"伐木"}],
    level: "4급"
  },
  {
    id: 315,
    char: "凡",
    sound: "범",
    meaning: "무릇",
    examples: [{"word":"평범","hanja":"平凡"},{"word":"범인","hanja":"凡人"},{"word":"비범","hanja":"非凡"}],
    level: "4급"
  },
  {
    id: 316,
    char: "法",
    sound: "법",
    meaning: "법",
    examples: [{"word":"법률","hanja":"法律"},{"word":"방법","hanja":"方法"},{"word":"불법","hanja":"不法"}],
    level: "4급"
  },
  {
    id: 317,
    char: "變",
    sound: "변",
    meaning: "변할",
    examples: [{"word":"변경","hanja":"變更"},{"word":"변화","hanja":"變化"},{"word":"돌변","hanja":"突變"}],
    level: "4급"
  },
  {
    id: 318,
    char: "別",
    sound: "별",
    meaning: "다를",
    examples: [{"word":"이별","hanja":"離別"},{"word":"특별","hanja":"特別"},{"word":"구별","hanja":"區別"}],
    level: "4급"
  },
  {
    id: 319,
    char: "兵",
    sound: "병",
    meaning: "병사",
    examples: [{"word":"병무청","hanja":"兵務廳"},{"word":"병기","hanja":"兵器"},{"word":"장병","hanja":"將兵"}],
    level: "4급"
  },
  {
    id: 320,
    char: "丙",
    sound: "병",
    meaning: "남녘",
    examples: [{"word":"병자호란","hanja":"丙子胡亂"}],
    level: "4급"
  },
  {
    id: 321,
    char: "報",
    sound: "보",
    meaning: "갚을",
    examples: [{"word":"보답","hanja":"報答"},{"word":"보상","hanja":"報償"},{"word":"정보","hanja":"情報"}],
    level: "4급"
  },
  {
    id: 322,
    char: "步",
    sound: "보",
    meaning: "걸음",
    examples: [{"word":"도보","hanja":"徒步"},{"word":"산보","hanja":"散步"},{"word":"진보","hanja":"進步"}],
    level: "4급"
  },
  {
    id: 323,
    char: "保",
    sound: "보",
    meaning: "지킬",
    examples: [{"word":"보호","hanja":"保護"},{"word":"보존","hanja":"保存"},{"word":"보장","hanja":"保障"}],
    level: "4급"
  },
  {
    id: 324,
    char: "復",
    sound: "복",
    meaning: "다시",
    examples: [{"word":"부활","hanja":"復活"},{"word":"복습","hanja":"復習"},{"word":"왕복","hanja":"往復"}],
    level: "4급"
  },
  {
    id: 325,
    char: "福",
    sound: "복",
    meaning: "복",
    examples: [{"word":"행복","hanja":"幸福"},{"word":"축복","hanja":"祝福"},{"word":"복지","hanja":"福祉"}],
    level: "4급"
  },
  {
    id: 326,
    char: "伏",
    sound: "복",
    meaning: "엎드릴",
    examples: [{"word":"항복","hanja":"降伏"},{"word":"매복","hanja":"埋伏"},{"word":"굴복","hanja":"屈伏"}],
    level: "4급"
  },
  {
    id: 327,
    char: "服",
    sound: "복",
    meaning: "옷",
    examples: [{"word":"의복","hanja":"衣服"},{"word":"한복","hanja":"韓服"},{"word":"복종","hanja":"服從"}],
    level: "4급"
  },
  {
    id: 328,
    char: "本",
    sound: "본",
    meaning: "근본",
    examples: [{"word":"근본","hanja":"根本"},{"word":"본부","hanja":"本部"},{"word":"기본","hanja":"基本"}],
    level: "4급"
  },
  {
    id: 329,
    char: "逢",
    sound: "봉",
    meaning: "만날",
    examples: [{"word":"상봉","hanja":"相逢"}],
    level: "4급"
  },
  {
    id: 330,
    char: "病",
    sound: "병",
    meaning: "병",
    examples: [{"word":"병원","hanja":"病院"},{"word":"질병","hanja":"疾病"},{"word":"간병","hanja":"看病"}],
    level: "4급"
  },
  {
    id: 331,
    char: "奉",
    sound: "봉",
    meaning: "받들",
    examples: [{"word":"봉사","hanja":"奉仕"},{"word":"봉안","hanja":"奉安"},{"word":"봉납","hanja":"奉納"}],
    level: "4급"
  },
  {
    id: 332,
    char: "部",
    sound: "부",
    meaning: "떼",
    examples: [{"word":"부분","hanja":"部分"},{"word":"본부","hanja":"本部"},{"word":"부서","hanja":"部署"}],
    level: "4급"
  },
  {
    id: 333,
    char: "浮",
    sound: "부",
    meaning: "뜰",
    examples: [{"word":"부상","hanja":"浮上"},{"word":"부력","hanja":"浮力"},{"word":"부각","hanja":"浮刻"}],
    level: "4급"
  },
  {
    id: 334,
    char: "婦",
    sound: "부",
    meaning: "며느리",
    examples: [{"word":"부부","hanja":"夫婦"},{"word":"주부","hanja":"主婦"},{"word":"고부","hanja":"姑婦"}],
    level: "4급"
  },
  {
    id: 335,
    char: "扶",
    sound: "부",
    meaning: "도울",
    examples: [{"word":"부조","hanja":"扶助"},{"word":"부양","hanja":"扶養"}],
    level: "4급"
  },
  {
    id: 336,
    char: "夫",
    sound: "부",
    meaning: "지아비",
    examples: [{"word":"부부","hanja":"夫婦"},{"word":"농부","hanja":"農夫"},{"word":"장부","hanja":"丈夫"}],
    level: "4급"
  },
  {
    id: 337,
    char: "父",
    sound: "부",
    meaning: "아버지",
    examples: [{"word":"부모","hanja":"父母"},{"word":"부친","hanja":"父親"},{"word":"조부","hanja":"祖父"}],
    level: "4급"
  },
  {
    id: 338,
    char: "府",
    sound: "부",
    meaning: "마을",
    examples: [{"word":"정부","hanja":"政府"},{"word":"도청","hanja":"道廳"}],
    level: "4급"
  },
  {
    id: 339,
    char: "富",
    sound: "부",
    meaning: "부자",
    examples: [{"word":"부자","hanja":"富者"},{"word":"빈부","hanja":"貧富"},{"word":"풍부","hanja":"豊富"}],
    level: "4급"
  },
  {
    id: 340,
    char: "付",
    sound: "부",
    meaning: "줄",
    examples: [{"word":"부여","hanja":"付與"},{"word":"교부","hanja":"交付"},{"word":"기부","hanja":"寄付"}],
    level: "4급"
  },
  {
    id: 341,
    char: "否",
    sound: "부",
    meaning: "아닐",
    examples: [{"word":"부정","hanja":"否定"},{"word":"거부","hanja":"拒否"},{"word":"여부","hanja":"與否"}],
    level: "4급"
  },
  {
    id: 342,
    char: "北",
    sound: "북",
    meaning: "북녘",
    examples: [{"word":"북한","hanja":"北韓"},{"word":"남북","hanja":"南北"},{"word":"패배","hanja":"敗北"}],
    level: "4급"
  },
  {
    id: 343,
    char: "分",
    sound: "분",
    meaning: "나눌",
    examples: [{"word":"분리","hanja":"分離"},{"word":"분배","hanja":"分配"},{"word":"기분","hanja":"氣分"}],
    level: "4급"
  },
  {
    id: 344,
    char: "佛",
    sound: "불",
    meaning: "부처",
    examples: [{"word":"불교","hanja":"佛敎"},{"word":"석가모니","hanja":"釋迦牟尼佛"},{"word":"불상","hanja":"佛像"}],
    level: "4급"
  },
  {
    id: 345,
    char: "不",
    sound: "불",
    meaning: "아닐",
    examples: [{"word":"불안","hanja":"不安"},{"word":"불평","hanja":"不平"},{"word":"부족","hanja":"不足"}],
    level: "4급"
  },
  {
    id: 346,
    char: "飛",
    sound: "비",
    meaning: "날",
    examples: [{"word":"비행기","hanja":"飛行機"},{"word":"비상","hanja":"飛翔"},{"word":"비약","hanja":"飛躍"}],
    level: "4급"
  },
  {
    id: 347,
    char: "備",
    sound: "비",
    meaning: "갖출",
    examples: [{"word":"준비","hanja":"準備"},{"word":"예비","hanja":"豫備"},{"word":"설비","hanja":"設備"}],
    level: "4급"
  },
  {
    id: 348,
    char: "比",
    sound: "비",
    meaning: "견줄",
    examples: [{"word":"비교","hanja":"比較"},{"word":"비율","hanja":"比率"},{"word":"비례","hanja":"比例"}],
    level: "4급"
  },
  {
    id: 349,
    char: "悲",
    sound: "비",
    meaning: "슬플",
    examples: [{"word":"비극","hanja":"悲劇"},{"word":"비관","hanja":"悲觀"},{"word":"비명","hanja":"悲鳴"}],
    level: "4급"
  },
  {
    id: 350,
    char: "費",
    sound: "비",
    meaning: "쓸",
    examples: [{"word":"비용","hanja":"費用"},{"word":"낭비","hanja":"浪費"},{"word":"소비","hanja":"消費"}],
    level: "4급"
  },
  {
    id: 351,
    char: "非",
    sound: "비",
    meaning: "아닐",
    examples: [{"word":"비상","hanja":"非常"},{"word":"비밀","hanja":"秘密"},{"word":"시비","hanja":"是非"}],
    level: "4급"
  },
  {
    id: 352,
    char: "鼻",
    sound: "비",
    meaning: "코",
    examples: [{"word":"비염","hanja":"鼻炎"},{"word":"이비인후과","hanja":"耳鼻咽喉科"}],
    level: "4급"
  },
  {
    id: 353,
    char: "貧",
    sound: "빈",
    meaning: "가난할",
    examples: [{"word":"빈곤","hanja":"貧困"},{"word":"빈부","hanja":"貧富"},{"word":"빈혈","hanja":"貧血"}],
    level: "4급"
  },
  {
    id: 354,
    char: "氷",
    sound: "빙",
    meaning: "얼음",
    examples: [{"word":"빙산","hanja":"氷山"},{"word":"빙점","hanja":"氷點"},{"word":"빙판","hanja":"氷板"}],
    level: "4급"
  },
  {
    id: 355,
    char: "四",
    sound: "사",
    meaning: "넉",
    examples: [{"word":"사월","hanja":"四月"},{"word":"사계절","hanja":"四季節"},{"word":"사방","hanja":"四方"}],
    level: "4급"
  },
  {
    id: 356,
    char: "詞",
    sound: "사",
    meaning: "말",
    examples: [{"word":"가사","hanja":"歌詞"},{"word":"명사","hanja":"名詞"},{"word":"동사","hanja":"動詞"}],
    level: "4급"
  },
  {
    id: 357,
    char: "社",
    sound: "사",
    meaning: "모일",
    examples: [{"word":"사회","hanja":"社會"},{"word":"회사","hanja":"會社"},{"word":"신문사","hanja":"新聞社"}],
    level: "4급"
  },
  {
    id: 358,
    char: "私",
    sound: "사",
    meaning: "사사로울",
    examples: [{"word":"사립","hanja":"私立"},{"word":"사생활","hanja":"私生活"},{"word":"공사","hanja":"公私"}],
    level: "4급"
  },
  {
    id: 359,
    char: "思",
    sound: "사",
    meaning: "생각",
    examples: [{"word":"사상","hanja":"思想"},{"word":"사고","hanja":"思考"},{"word":"의사","hanja":"意思"}],
    level: "4급"
  },
  {
    id: 360,
    char: "師",
    sound: "사",
    meaning: "스승",
    examples: [{"word":"교사","hanja":"敎師"},{"word":"은사","hanja":"恩師"},{"word":"의사","hanja":"醫師"}],
    level: "4급"
  },
  {
    id: 361,
    char: "絲",
    sound: "사",
    meaning: "실",
    examples: [{"word":"명주실","hanja":"明紬絲"}],
    level: "4급"
  },
  {
    id: 362,
    char: "寺",
    sound: "사",
    meaning: "절",
    examples: [{"word":"사찰","hanja":"寺刹"},{"word":"불국사","hanja":"佛國寺"}],
    level: "4급"
  },
  {
    id: 363,
    char: "查",
    sound: "사",
    meaning: "조사할",
    examples: [{"word":"조사","hanja":"調査"},{"word":"검사","hanja":"檢査"},{"word":"심사","hanja":"審査"}],
    level: "4급"
  },
  {
    id: 364,
    char: "舍",
    sound: "사",
    meaning: "집",
    examples: [{"word":"관사","hanja":"官舍"},{"word":"기숙사","hanja":"寄宿舍"},{"word":"축사","hanja":"畜舍"}],
    level: "4급"
  },
  {
    id: 365,
    char: "已",
    sound: "이",
    meaning: "이미",
    examples: [{"word":"이왕","hanja":"已往"}],
    level: "4급"
  },
  {
    id: 366,
    char: "仕",
    sound: "사",
    meaning: "섬길",
    examples: [{"word":"봉사","hanja":"奉仕"}],
    level: "4급"
  },
  {
    id: 367,
    char: "謝",
    sound: "사",
    meaning: "사례할",
    examples: [{"word":"감사","hanja":"感謝"},{"word":"사과","hanja":"謝果"},{"word":"사죄","hanja":"謝罪"}],
    level: "4급"
  },
  {
    id: 368,
    char: "士",
    sound: "사",
    meaning: "선비",
    examples: [{"word":"박사","hanja":"博士"},{"word":"신사","hanja":"紳士"},{"word":"변호사","hanja":"辯護士"}],
    level: "4급"
  },
  {
    id: 369,
    char: "射",
    sound: "사",
    meaning: "쏠",
    examples: [{"word":"발사","hanja":"發射"},{"word":"주사","hanja":"注射"},{"word":"사격","hanja":"射擊"}],
    level: "4급"
  },
  {
    id: 370,
    char: "史",
    sound: "사",
    meaning: "역사",
    examples: [{"word":"역사","hanja":"歷史"},{"word":"사학","hanja":"史學"},{"word":"한국사","hanja":"韓國史"}],
    level: "4급"
  },
  {
    id: 371,
    char: "事",
    sound: "사",
    meaning: "일",
    examples: [{"word":"사건","hanja":"事件"},{"word":"사고","hanja":"事故"},{"word":"사실","hanja":"事實"}],
    level: "4급"
  },
  {
    id: 372,
    char: "死",
    sound: "사",
    meaning: "죽을",
    examples: [{"word":"사망","hanja":"死亡"},{"word":"생사","hanja":"生死"},{"word":"사형","hanja":"死刑"}],
    level: "4급"
  },
  {
    id: 373,
    char: "使",
    sound: "사",
    meaning: "부릴",
    examples: [{"word":"사용","hanja":"使用"},{"word":"대사","hanja":"大使"},{"word":"천사","hanja":"天使"}],
    level: "4급"
  },
  {
    id: 374,
    char: "山",
    sound: "산",
    meaning: "뫼",
    examples: [{"word":"등산","hanja":"登山"},{"word":"태산","hanja":"泰山"},{"word":"산림","hanja":"山林"}],
    level: "4급"
  },
  {
    id: 375,
    char: "產",
    sound: "산",
    meaning: "낳을",
    examples: [{"word":"생산","hanja":"生產"},{"word":"산업","hanja":"產業"},{"word":"재산","hanja":"財產"}],
    level: "4급"
  },
  {
    id: 376,
    char: "算",
    sound: "산",
    meaning: "셈",
    examples: [{"word":"계산","hanja":"計算"},{"word":"암산","hanja":"暗算"},{"word":"예산","hanja":"預算"}],
    level: "4급"
  },
  {
    id: 377,
    char: "散",
    sound: "산",
    meaning: "흩을",
    examples: [{"word":"산책","hanja":"散策"},{"word":"해산","hanja":"解散"},{"word":"분산","hanja":"分散"}],
    level: "4급"
  },
  {
    id: 378,
    char: "殺",
    sound: "살",
    meaning: "죽일",
    examples: [{"word":"살인","hanja":"殺人"},{"word":"자살","hanja":"自殺"},{"word":"살균","hanja":"殺菌"}],
    level: "4급"
  },
  {
    id: 379,
    char: "三",
    sound: "삼",
    meaning: "석",
    examples: [{"word":"삼월","hanja":"三月"},{"word":"삼각형","hanja":"三角形"},{"word":"삼국","hanja":"三國"}],
    level: "4급"
  },
  {
    id: 380,
    char: "常",
    sound: "상",
    meaning: "항상",
    examples: [{"word":"항상","hanja":"恒常"},{"word":"비상","hanja":"非常"},{"word":"일상","hanja":"日常"}],
    level: "4급"
  },
  {
    id: 381,
    char: "狀",
    sound: "상",
    meaning: "형상",
    examples: [{"word":"상태","hanja":"狀態"},{"word":"상황","hanja":"狀況"},{"word":"면허장","hanja":"免許狀"}],
    level: "4급"
  },
  {
    id: 382,
    char: "床",
    sound: "상",
    meaning: "평상",
    examples: [{"word":"침상","hanja":"寢床"},{"word":"병상","hanja":"病床"}],
    level: "4급"
  },
  {
    id: 383,
    char: "賞",
    sound: "상",
    meaning: "상줄",
    examples: [{"word":"상장","hanja":"賞狀"},{"word":"대상","hanja":"大賞"},{"word":"감상","hanja":"鑑賞"}],
    level: "4급"
  },
  {
    id: 384,
    char: "傷",
    sound: "상",
    meaning: "다칠",
    examples: [{"word":"상처","hanja":"傷處"},{"word":"부상","hanja":"負傷"},{"word":"손상","hanja":"損傷"}],
    level: "4급"
  },
  {
    id: 385,
    char: "相",
    sound: "상",
    meaning: "서로",
    examples: [{"word":"상대","hanja":"相對"},{"word":"상담","hanja":"相談"},{"word":"상호","hanja":"相互"}],
    level: "4급"
  },
  {
    id: 386,
    char: "霜",
    sound: "상",
    meaning: "서리",
    examples: [{"word":"설상가상","hanja":"雪上加霜"}],
    level: "4급"
  },
  {
    id: 387,
    char: "商",
    sound: "상",
    meaning: "장사",
    examples: [{"word":"상업","hanja":"商業"},{"word":"상품","hanja":"商品"},{"word":"상인","hanja":"商人"}],
    level: "4급"
  },
  {
    id: 388,
    char: "想",
    sound: "상",
    meaning: "생각",
    examples: [{"word":"상상","hanja":"想像"},{"word":"감상","hanja":"感想"},{"word":"예상","hanja":"豫想"}],
    level: "4급"
  },
  {
    id: 389,
    char: "尙",
    sound: "상",
    meaning: "오히려",
    examples: [{"word":"고상","hanja":"高尙"}],
    level: "4급"
  },
  {
    id: 390,
    char: "上",
    sound: "상",
    meaning: "윗",
    examples: [{"word":"상하","hanja":"上下"},{"word":"지상","hanja":"地上"},{"word":"정상","hanja":"頂上"}],
    level: "4급"
  },
  {
    id: 391,
    char: "喪",
    sound: "상",
    meaning: "잃을",
    examples: [{"word":"상실","hanja":"喪失"},{"word":"상가","hanja":"喪家"}],
    level: "4급"
  },
  {
    id: 392,
    char: "色",
    sound: "색",
    meaning: "빛",
    examples: [{"word":"색깔","hanja":"色깔"},{"word":"황금색","hanja":"黃金色"},{"word":"특색","hanja":"特色"}],
    level: "4급"
  },
  {
    id: 393,
    char: "生",
    sound: "생",
    meaning: "날",
    examples: [{"word":"생일","hanja":"生日"},{"word":"학생","hanja":"學生"},{"word":"생활","hanja":"生活"}],
    level: "4급"
  },
  {
    id: 394,
    char: "書",
    sound: "서",
    meaning: "글",
    examples: [{"word":"도서관","hanja":"圖書館"},{"word":"서점","hanja":"書店"},{"word":"교과서","hanja":"敎科書"}],
    level: "4급"
  },
  {
    id: 395,
    char: "西",
    sound: "서",
    meaning: "서녘",
    examples: [{"word":"서쪽","hanja":"西쪽"},{"word":"서양","hanja":"西洋"},{"word":"남서","hanja":"南西"}],
    level: "4급"
  },
  {
    id: 396,
    char: "暑",
    sound: "서",
    meaning: "더울",
    examples: [{"word":"피서","hanja":"避暑"},{"word":"처서","hanja":"處暑"}],
    level: "4급"
  },
  {
    id: 397,
    char: "序",
    sound: "서",
    meaning: "차례",
    examples: [{"word":"순서","hanja":"順序"},{"word":"질서","hanja":"秩序"},{"word":"서론","hanja":"序論"}],
    level: "4급"
  },
  {
    id: 398,
    char: "徐",
    sound: "서",
    meaning: "천천히",
    examples: [{"word":"서행","hanja":"徐行"}],
    level: "4급"
  },
  {
    id: 399,
    char: "石",
    sound: "석",
    meaning: "돌",
    examples: [{"word":"석유","hanja":"石油"},{"word":"보석","hanja":"寶石"},{"word":"대리석","hanja":"大理石"}],
    level: "4급"
  },
  {
    id: 400,
    char: "惜",
    sound: "석",
    meaning: "아낄",
    examples: [{"word":"애석","hanja":"哀惜"}],
    level: "4급"
  },
  {
    id: 401,
    char: "昔",
    sound: "석",
    meaning: "옛",
    examples: [{"word":"옛날","hanja":"昔날"}],
    level: "4급"
  },
  {
    id: 402,
    char: "席",
    sound: "석",
    meaning: "자리",
    examples: [{"word":"좌석","hanja":"座席"},{"word":"출석","hanja":"出席"},{"word":"결석","hanja":"缺席"}],
    level: "4급"
  },
  {
    id: 403,
    char: "夕",
    sound: "석",
    meaning: "저녁",
    examples: [{"word":"추석","hanja":"秋夕"},{"word":"조석","hanja":"朝夕"}],
    level: "4급"
  },
  {
    id: 404,
    char: "先",
    sound: "선",
    meaning: "먼저",
    examples: [{"word":"선생님","hanja":"先生님"},{"word":"우선","hanja":"優先"},{"word":"선조","hanja":"先祖"}],
    level: "4급"
  },
  {
    id: 405,
    char: "船",
    sound: "선",
    meaning: "배",
    examples: [{"word":"선장","hanja":"船長"},{"word":"선박","hanja":"船舶"},{"word":"여객선","hanja":"旅客船"}],
    level: "4급"
  },
  {
    id: 406,
    char: "宣",
    sound: "선",
    meaning: "베풀",
    examples: [{"word":"선언","hanja":"宣言"},{"word":"선전","hanja":"宣傳"},{"word":"선교","hanja":"宣敎"}],
    level: "4급"
  },
  {
    id: 407,
    char: "仙",
    sound: "선",
    meaning: "신선",
    examples: [{"word":"신선","hanja":"神仙"},{"word":"선녀","hanja":"仙女"}],
    level: "4급"
  },
  {
    id: 408,
    char: "線",
    sound: "선",
    meaning: "줄",
    examples: [{"word":"전선","hanja":"電線"},{"word":"노선","hanja":"路線"},{"word":"직선","hanja":"直線"}],
    level: "4급"
  },
  {
    id: 409,
    char: "選",
    sound: "선",
    meaning: "가릴",
    examples: [{"word":"선거","hanja":"選擧"},{"word":"선택","hanja":"選擇"},{"word":"선수","hanja":"選手"}],
    level: "4급"
  },
  {
    id: 410,
    char: "鮮",
    sound: "선",
    meaning: "고울",
    examples: [{"word":"신선","hanja":"新鮮"},{"word":"생선","hanja":"生鮮"},{"word":"조선","hanja":"朝鮮"}],
    level: "4급"
  },
  {
    id: 411,
    char: "善",
    sound: "선",
    meaning: "착할",
    examples: [{"word":"선행","hanja":"善行"},{"word":"최선","hanja":"最善"},{"word":"자선","hanja":"慈善"}],
    level: "4급"
  },
  {
    id: 412,
    char: "雪",
    sound: "설",
    meaning: "눈",
    examples: [{"word":"설경","hanja":"雪景"},{"word":"폭설","hanja":"暴雪"},{"word":"백설","hanja":"白雪"}],
    level: "4급"
  },
  {
    id: 413,
    char: "說",
    sound: "설",
    meaning: "말씀",
    examples: [{"word":"설명","hanja":"說明"},{"word":"소설","hanja":"小說"},{"word":"연설","hanja":"演說"}],
    level: "4급"
  },
  {
    id: 414,
    char: "設",
    sound: "설",
    meaning: "베풀",
    examples: [{"word":"건설","hanja":"建設"},{"word":"설립","hanja":"設立"},{"word":"시설","hanja":"施設"}],
    level: "4급"
  },
  {
    id: 415,
    char: "星",
    sound: "성",
    meaning: "별",
    examples: [{"word":"성좌","hanja":"星座"},{"word":"행성","hanja":"行星"},{"word":"위성","hanja":"衛星"}],
    level: "4급"
  },
  {
    id: 416,
    char: "省",
    sound: "성",
    meaning: "살필",
    examples: [{"word":"반성","hanja":"反省"},{"word":"생략","hanja":"省略"}],
    level: "4급"
  },
  {
    id: 417,
    char: "城",
    sound: "성",
    meaning: "성",
    examples: [{"word":"성","hanja":"城"},{"word":"도성","hanja":"都城"},{"word":"만리장성","hanja":"萬里長城"}],
    level: "4급"
  },
  {
    id: 418,
    char: "聲",
    sound: "성",
    meaning: "소리",
    examples: [{"word":"음성","hanja":"音聲"},{"word":"성명","hanja":"聲明"},{"word":"명성","hanja":"名聲"}],
    level: "4급"
  },
  {
    id: 419,
    char: "成",
    sound: "성",
    meaning: "이룰",
    examples: [{"word":"성공","hanja":"成功"},{"word":"성장","hanja":"成長"},{"word":"완성","hanja":"完成"}],
    level: "4급"
  },
  {
    id: 420,
    char: "誠",
    sound: "성",
    meaning: "정성",
    examples: [{"word":"정성","hanja":"精誠"},{"word":"성실","hanja":"誠實"}],
    level: "4급"
  },
  {
    id: 421,
    char: "姓",
    sound: "성",
    meaning: "성씨",
    examples: [{"word":"성씨","hanja":"姓氏"},{"word":"성명","hanja":"姓名"}],
    level: "4급"
  },
  {
    id: 422,
    char: "聖",
    sound: "성",
    meaning: "성인",
    examples: [{"word":"성인","hanja":"聖人"},{"word":"신성","hanja":"神聖"},{"word":"성경","hanja":"聖經"}],
    level: "4급"
  },
  {
    id: 423,
    char: "性",
    sound: "성",
    meaning: "성품",
    examples: [{"word":"성격","hanja":"性格"},{"word":"성질","hanja":"性質"},{"word":"남성","hanja":"男性"}],
    level: "4급"
  },
  {
    id: 424,
    char: "盛",
    sound: "성",
    meaning: "성할",
    examples: [{"word":"전성기","hanja":"全盛期"},{"word":"성대","hanja":"盛大"},{"word":"왕성","hanja":"旺盛"}],
    level: "4급"
  },
  {
    id: 425,
    char: "細",
    sound: "세",
    meaning: "가늘",
    examples: [{"word":"세부","hanja":"細部"},{"word":"미세","hanja":"微細"},{"word":"섬세","hanja":"纖細"}],
    level: "4급"
  },
  {
    id: 426,
    char: "稅",
    sound: "세",
    meaning: "세금",
    examples: [{"word":"세금","hanja":"稅金"},{"word":"관세","hanja":"關稅"},{"word":"면세","hanja":"免稅"}],
    level: "4급"
  },
  {
    id: 427,
    char: "洗",
    sound: "세",
    meaning: "씻을",
    examples: [{"word":"세수","hanja":"洗手"},{"word":"세탁","hanja":"洗濯"},{"word":"세제","hanja":"洗劑"}],
    level: "4급"
  },
  {
    id: 428,
    char: "世",
    sound: "세",
    meaning: "세상",
    examples: [{"word":"세계","hanja":"世界"},{"word":"세대","hanja":"世代"},{"word":"세상","hanja":"世上"}],
    level: "4급"
  },
  {
    id: 429,
    char: "歲",
    sound: "세",
    meaning: "해",
    examples: [{"word":"만세","hanja":"萬歲"},{"word":"세월","hanja":"歲月"},{"word":"세배","hanja":"歲拜"}],
    level: "4급"
  },
  {
    id: 430,
    char: "勢",
    sound: "세",
    meaning: "형세",
    examples: [{"word":"세력","hanja":"勢力"},{"word":"자세","hanja":"姿勢"},{"word":"형세","hanja":"形勢"}],
    level: "4급"
  },
  {
    id: 431,
    char: "消",
    sound: "소",
    meaning: "사라질",
    examples: [{"word":"소멸","hanja":"消滅"},{"word":"소화","hanja":"消化"},{"word":"취소","hanja":"取消"}],
    level: "4급"
  },
  {
    id: 432,
    char: "所",
    sound: "소",
    meaning: "바",
    examples: [{"word":"장소","hanja":"場所"},{"word":"소유","hanja":"所有"},{"word":"소속","hanja":"所屬"}],
    level: "4급"
  },
  {
    id: 433,
    char: "素",
    sound: "소",
    meaning: "바탕",
    examples: [{"word":"요소","hanja":"要素"},{"word":"소질","hanja":"素質"},{"word":"소박","hanja":"素朴"}],
    level: "4급"
  },
  {
    id: 434,
    char: "笑",
    sound: "소",
    meaning: "웃음",
    examples: [{"word":"미소","hanja":"微笑"},{"word":"폭소","hanja":"爆笑"},{"word":"비웃음","hanja":"誹笑"}],
    level: "4급"
  },
  {
    id: 435,
    char: "小",
    sound: "소",
    meaning: "작을",
    examples: [{"word":"소형","hanja":"小型"},{"word":"축소","hanja":"縮小"},{"word":"소설","hanja":"小說"}],
    level: "4급"
  },
  {
    id: 436,
    char: "少",
    sound: "소",
    meaning: "적을",
    examples: [{"word":"감소","hanja":"減少"},{"word":"소수","hanja":"少數"},{"word":"소년","hanja":"少年"}],
    level: "4급"
  },
  {
    id: 437,
    char: "速",
    sound: "속",
    meaning: "빠를",
    examples: [{"word":"속도","hanja":"速度"},{"word":"고속","hanja":"高速"},{"word":"신속","hanja":"迅速"}],
    level: "4급"
  },
  {
    id: 438,
    char: "續",
    sound: "속",
    meaning: "이을",
    examples: [{"word":"계속","hanja":"繼續"},{"word":"연속","hanja":"連續"},{"word":"지속","hanja":"持續"}],
    level: "4급"
  },
  {
    id: 439,
    char: "俗",
    sound: "속",
    meaning: "풍속",
    examples: [{"word":"풍속","hanja":"風俗"},{"word":"민속","hanja":"民俗"},{"word":"속담","hanja":"俗談"}],
    level: "4급"
  },
  {
    id: 440,
    char: "孫",
    sound: "손",
    meaning: "손자",
    examples: [{"word":"손자","hanja":"孫子"},{"word":"자손","hanja":"子孫"}],
    level: "4급"
  },
  {
    id: 441,
    char: "松",
    sound: "송",
    meaning: "소나무",
    examples: [{"word":"송편","hanja":"松䈎"},{"word":"낙락장송","hanja":"落落長松"}],
    level: "4급"
  },
  {
    id: 442,
    char: "送",
    sound: "송",
    meaning: "보낼",
    examples: [{"word":"배송","hanja":"配送"},{"word":"운송","hanja":"運送"},{"word":"송금","hanja":"送金"}],
    level: "4급"
  },
  {
    id: 443,
    char: "收",
    sound: "수",
    meaning: "거둘",
    examples: [{"word":"수입","hanja":"收入"},{"word":"수확","hanja":"收穫"},{"word":"회수","hanja":"回收"}],
    level: "4급"
  },
  {
    id: 444,
    char: "愁",
    sound: "수",
    meaning: "근심",
    examples: [{"word":"향수","hanja":"鄕愁"},{"word":"수심","hanja":"愁心"}],
    level: "4급"
  },
  {
    id: 445,
    char: "樹",
    sound: "수",
    meaning: "나무",
    examples: [{"word":"수목","hanja":"樹木"},{"word":"가로수","hanja":"街路樹"},{"word":"식수","hanja":"植樹"}],
    level: "4급"
  },
  {
    id: 446,
    char: "誰",
    sound: "수",
    meaning: "누구",
    examples: [{"word":"누구","hanja":"誰"}],
    level: "4급"
  },
  {
    id: 447,
    char: "修",
    sound: "수",
    meaning: "닦을",
    examples: [{"word":"수리","hanja":"修理"},{"word":"수선","hanja":"修繕"},{"word":"연수","hanja":"硏修"}],
    level: "4급"
  },
  {
    id: 448,
    char: "首",
    sound: "수",
    meaning: "머리",
    examples: [{"word":"수도","hanja":"首都"},{"word":"원수","hanja":"元首"},{"word":"수석","hanja":"首席"}],
    level: "4급"
  },
  {
    id: 449,
    char: "須",
    sound: "수",
    meaning: "모름지기",
    examples: [{"word":"필수","hanja":"必須"}],
    level: "4급"
  },
  {
    id: 450,
    char: "壽",
    sound: "수",
    meaning: "목숨",
    examples: [{"word":"장수","hanja":"長壽"},{"word":"수명","hanja":"壽命"}],
    level: "4급"
  },
  {
    id: 451,
    char: "水",
    sound: "수",
    meaning: "물",
    examples: [{"word":"수영","hanja":"水泳"},{"word":"생수","hanja":"生水"},{"word":"홍수","hanja":"洪水"}],
    level: "4급"
  },
  {
    id: 452,
    char: "雖",
    sound: "수",
    meaning: "비록",
    examples: [{"word":"비록","hanja":"雖"}],
    level: "4급"
  },
  {
    id: 453,
    char: "秀",
    sound: "수",
    meaning: "빼어날",
    examples: [{"word":"우수","hanja":"優秀"},{"word":"수재","hanja":"秀才"}],
    level: "4급"
  },
  {
    id: 454,
    char: "授",
    sound: "수",
    meaning: "줄",
    examples: [{"word":"수여","hanja":"授與"},{"word":"교수","hanja":"敎授"},{"word":"수업","hanja":"授業"}],
    level: "4급"
  },
  {
    id: 455,
    char: "守",
    sound: "수",
    meaning: "지킬",
    examples: [{"word":"수비","hanja":"守備"},{"word":"보수","hanja":"保守"},{"word":"준수","hanja":"遵守"}],
    level: "4급"
  },
  {
    id: 456,
    char: "受",
    sound: "수",
    meaning: "받을",
    examples: [{"word":"수신","hanja":"受信"},{"word":"접수","hanja":"接受"},{"word":"수상","hanja":"受賞"}],
    level: "4급"
  },
  {
    id: 457,
    char: "數",
    sound: "수",
    meaning: "셈",
    examples: [{"word":"수학","hanja":"數學"},{"word":"숫자","hanja":"數字"},{"word":"점수","hanja":"點數"}],
    level: "4급"
  },
  {
    id: 458,
    char: "手",
    sound: "수",
    meaning: "손",
    examples: [{"word":"가수","hanja":"歌手"},{"word":"박수","hanja":"拍手"},{"word":"악수","hanja":"握手"}],
    level: "4급"
  },
  {
    id: 459,
    char: "淑",
    sound: "숙",
    meaning: "맑을",
    examples: [{"word":"정숙","hanja":"貞淑"},{"word":"숙녀","hanja":"淑女"}],
    level: "4급"
  },
  {
    id: 460,
    char: "叔",
    sound: "숙",
    meaning: "아저씨",
    examples: [{"word":"숙부","hanja":"叔父"}],
    level: "4급"
  },
  {
    id: 461,
    char: "宿",
    sound: "숙",
    meaning: "잘",
    examples: [{"word":"숙제","hanja":"宿題"},{"word":"기숙사","hanja":"寄宿舍"},{"word":"숙박","hanja":"宿泊"}],
    level: "4급"
  },
  {
    id: 462,
    char: "純",
    sound: "순",
    meaning: "순수할",
    examples: [{"word":"순수","hanja":"純粹"},{"word":"단순","hanja":"單純"},{"word":"순금","hanja":"純金"}],
    level: "4급"
  },
  {
    id: 463,
    char: "順",
    sound: "순",
    meaning: "순할",
    examples: [{"word":"순서","hanja":"順序"},{"word":"순리","hanja":"順理"},{"word":"순조","hanja":"順調"}],
    level: "4급"
  },
  {
    id: 464,
    char: "戌",
    sound: "술",
    meaning: "개",
    examples: [{"word":"무술년","hanja":"戊戌年"}],
    level: "4급"
  },
  {
    id: 465,
    char: "述",
    sound: "술",
    meaning: "지을",
    examples: [{"word":"진술","hanja":"陳述"},{"word":"서술","hanja":"敍述"},{"word":"기술","hanja":"記述"}],
    level: "4급"
  },
  {
    id: 466,
    char: "術",
    sound: "술",
    meaning: "재주",
    examples: [{"word":"예술","hanja":"藝術"},{"word":"수술","hanja":"手術"},{"word":"미술","hanja":"美術"}],
    level: "4급"
  },
  {
    id: 467,
    char: "崇",
    sound: "숭",
    meaning: "높일",
    examples: [{"word":"숭배","hanja":"崇拜"},{"word":"숭상","hanja":"崇尙"}],
    level: "4급"
  },
  {
    id: 468,
    char: "習",
    sound: "습",
    meaning: "익힐",
    examples: [{"word":"연습","hanja":"練習"},{"word":"습관","hanja":"習慣"},{"word":"복습","hanja":"復習"}],
    level: "4급"
  },
  {
    id: 469,
    char: "拾",
    sound: "습",
    meaning: "주울",
    examples: [{"word":"습득","hanja":"拾得"}],
    level: "4급"
  },
  {
    id: 470,
    char: "勝",
    sound: "승",
    meaning: "이길",
    examples: [{"word":"승리","hanja":"勝利"},{"word":"우승","hanja":"優勝"},{"word":"승부","hanja":"勝負"}],
    level: "4급"
  },
  {
    id: 471,
    char: "承",
    sound: "승",
    meaning: "이을",
    examples: [{"word":"계승","hanja":"繼承"},{"word":"승인","hanja":"承認"},{"word":"승낙","hanja":"承諾"}],
    level: "4급"
  },
  {
    id: 472,
    char: "乘",
    sound: "승",
    meaning: "탈",
    examples: [{"word":"승객","hanja":"乘客"},{"word":"탑승","hanja":"搭乘"},{"word":"승차","hanja":"乘車"}],
    level: "4급"
  },
  {
    id: 473,
    char: "詩",
    sound: "시",
    meaning: "시",
    examples: [{"word":"시인","hanja":"詩人"},{"word":"시집","hanja":"詩集"}],
    level: "4급"
  },
  {
    id: 474,
    char: "時",
    sound: "시",
    meaning: "때",
    examples: [{"word":"시간","hanja":"時間"},{"word":"시대","hanja":"時代"},{"word":"시계","hanja":"時計"}],
    level: "4급"
  },
  {
    id: 475,
    char: "侍",
    sound: "시",
    meaning: "모실",
    examples: [{"word":"시녀","hanja":"侍女"}],
    level: "4급"
  },
  {
    id: 476,
    char: "施",
    sound: "시",
    meaning: "베풀",
    examples: [{"word":"실시","hanja":"實施"},{"word":"시행","hanja":"施行"},{"word":"시설","hanja":"施設"}],
    level: "4급"
  },
  {
    id: 477,
    char: "示",
    sound: "시",
    meaning: "보일",
    examples: [{"word":"표시","hanja":"表示"},{"word":"과시","hanja":"誇示"},{"word":"시위","hanja":"示威"}],
    level: "4급"
  },
  {
    id: 478,
    char: "視",
    sound: "시",
    meaning: "볼",
    examples: [{"word":"시력","hanja":"視力"},{"word":"시선","hanja":"視線"},{"word":"시청","hanja":"視聽"}],
    level: "4급"
  },
  {
    id: 479,
    char: "始",
    sound: "시",
    meaning: "비로소",
    examples: [{"word":"시작","hanja":"開始"},{"word":"시조","hanja":"始祖"},{"word":"시종","hanja":"始終"}],
    level: "4급"
  },
  {
    id: 480,
    char: "試",
    sound: "시",
    meaning: "시험",
    examples: [{"word":"시험","hanja":"試験"},{"word":"시도","hanja":"試圖"},{"word":"입시","hanja":"入試"}],
    level: "4급"
  },
  {
    id: 481,
    char: "是",
    sound: "시",
    meaning: "옳을",
    examples: [{"word":"시비","hanja":"是非"},{"word":"혹시","hanja":"若是"}],
    level: "4급"
  },
  {
    id: 482,
    char: "市",
    sound: "시",
    meaning: "저자",
    examples: [{"word":"시장","hanja":"市場"},{"word":"도시","hanja":"都市"},{"word":"시민","hanja":"市民"}],
    level: "4급"
  },
  {
    id: 483,
    char: "食",
    sound: "식",
    meaning: "밥",
    examples: [{"word":"식사","hanja":"食事"},{"word":"음식","hanja":"飮食"},{"word":"식당","hanja":"食堂"}],
    level: "4급"
  },
  {
    id: 484,
    char: "式",
    sound: "식",
    meaning: "법",
    examples: [{"word":"방식","hanja":"方式"},{"word":"예식","hanja":"禮式"},{"word":"형식","hanja":"形式"}],
    level: "4급"
  },
  {
    id: 485,
    char: "息",
    sound: "식",
    meaning: "숨쉴",
    examples: [{"word":"휴식","hanja":"休息"},{"word":"소식","hanja":"消息"},{"word":"자식","hanja":"子息"}],
    level: "4급"
  },
  {
    id: 486,
    char: "植",
    sound: "식",
    meaning: "심을",
    examples: [{"word":"식물","hanja":"植物"},{"word":"식목일","hanja":"植木日"}],
    level: "4급"
  },
  {
    id: 487,
    char: "識",
    sound: "식",
    meaning: "알",
    examples: [{"word":"지식","hanja":"知識"},{"word":"상식","hanja":"常識"},{"word":"의식","hanja":"意識"}],
    level: "4급"
  },
  {
    id: 488,
    char: "新",
    sound: "신",
    meaning: "새",
    examples: [{"word":"신문","hanja":"新聞"},{"word":"신규","hanja":"新規"},{"word":"최신","hanja":"最新"}],
    level: "4급"
  },
  {
    id: 489,
    char: "臣",
    sound: "신",
    meaning: "신하",
    examples: [{"word":"신하","hanja":"臣下"},{"word":"공신","hanja":"功臣"}],
    level: "4급"
  },
  {
    id: 490,
    char: "申",
    sound: "신",
    meaning: "펼",
    examples: [{"word":"신고","hanja":"申告"},{"word":"신청","hanja":"申請"}],
    level: "4급"
  },
  {
    id: 491,
    char: "信",
    sound: "신",
    meaning: "믿을",
    examples: [{"word":"신용","hanja":"信用"},{"word":"신뢰","hanja":"信賴"},{"word":"통신","hanja":"通信"}],
    level: "4급"
  },
  {
    id: 492,
    char: "室",
    sound: "실",
    meaning: "집",
    examples: [{"word":"교실","hanja":"敎室"},{"word":"실내","hanja":"室內"},{"word":"화장실","hanja":"化粧室"}],
    level: "4급"
  },
  {
    id: 493,
    char: "實",
    sound: "실",
    meaning: "열매",
    examples: [{"word":"실제","hanja":"實際"},{"word":"사실","hanja":"事實"},{"word":"현실","hanja":"現實"}],
    level: "4급"
  },
  {
    id: 494,
    char: "失",
    sound: "실",
    meaning: "잃을",
    examples: [{"word":"실수","hanja":"失手"},{"word":"실망","hanja":"失望"},{"word":"분실","hanja":"紛失"}],
    level: "4급"
  },
  {
    id: 495,
    char: "深",
    sound: "심",
    meaning: "깊을",
    examples: [{"word":"심해","hanja":"深海"},{"word":"심야","hanja":"深夜"},{"word":"관심","hanja":"關心"}],
    level: "4급"
  },
  {
    id: 496,
    char: "心",
    sound: "심",
    meaning: "마음",
    examples: [{"word":"심장","hanja":"心臟"},{"word":"중심","hanja":"中心"},{"word":"진심","hanja":"眞心"}],
    level: "4급"
  },
  {
    id: 497,
    char: "甚",
    sound: "심",
    meaning: "심할",
    examples: [{"word":"심하다","hanja":"甚하다"}],
    level: "4급"
  },
  {
    id: 498,
    char: "公",
    sound: "공",
    meaning: "공평할",
    examples: [{"word":"공평","hanja":"公平"},{"word":"공정","hanja":"公正"}],
    level: "4급"
  },
  {
    id: 499,
    char: "司",
    sound: "사",
    meaning: "맡을",
    examples: [{"word":"사회","hanja":"司會"},{"word":"사법","hanja":"司法"}],
    level: "4급"
  },
  {
    id: 500,
    char: "台",
    sound: "태",
    meaning: "별",
    examples: [{"word":"대만","hanja":"台灣"},{"word":"무대","hanja":"舞台"}],
    level: "4급"
  },
  {
    id: 501,
    char: "备",
    sound: "비",
    meaning: "갖출",
    examples: [{"word":"준비","hanja":"準備"},{"word":"예비","hanja":"豫備"},{"word":"구비","hanja":"具備"}],
    level: "4급"
  },
  {
    id: 502,
    char: "咖",
    sound: "가",
    meaning: "커피",
    examples: [{"word":"가배","hanja":"珈琲"},{"word":"가린","hanja":"咖喱"}],
    level: "4급"
  },
  {
    id: 503,
    char: "啡",
    sound: "배",
    meaning: "커피",
    examples: [{"word":"가배","hanja":"珈琲"}],
    level: "4급"
  },
  {
    id: 504,
    char: "包",
    sound: "포",
    meaning: "쌀",
    examples: [{"word":"포장","hanja":"包裝"},{"word":"포함","hanja":"包含"},{"word":"포위","hanja":"包圍"}],
    level: "4급"
  },
  {
    id: 505,
    char: "十",
    sound: "십",
    meaning: "열",
    examples: [{"word":"십년","hanja":"十年"},{"word":"수십","hanja":"數十"},{"word":"십자가","hanja":"十字架"}],
    level: "4급"
  },
  {
    id: 506,
    char: "氏",
    sound: "씨",
    meaning: "성씨",
    examples: [{"word":"김씨","hanja":"金氏"},{"word":"이씨","hanja":"李氏"},{"word":"씨명","hanja":"氏名"}],
    level: "4급"
  },
  {
    id: 507,
    char: "兒",
    sound: "아",
    meaning: "아이",
    examples: [{"word":"아동","hanja":"兒童"},{"word":"소아과","hanja":"小兒科"},{"word":"육아","hanja":"育兒"}],
    level: "4급"
  },
  {
    id: 508,
    char: "阿",
    sound: "아",
    meaning: "언덕",
    examples: [{"word":"아부","hanja":"阿附"},{"word":"아미산","hanja":"阿彌山"}],
    level: "4급"
  },
  {
    id: 509,
    char: "我",
    sound: "아",
    meaning: "나",
    examples: [{"word":"자아","hanja":"自我"},{"word":"아전인수","hanja":"我田引水"}],
    level: "4급"
  },
  {
    id: 510,
    char: "惡",
    sound: "악",
    meaning: "악할",
    examples: [{"word":"악마","hanja":"惡魔"},{"word":"악화","hanja":"惡化"},{"word":"최악","hanja":"最惡"}],
    level: "4급"
  },
  {
    id: 511,
    char: "顏",
    sound: "안",
    meaning: "얼굴",
    examples: [{"word":"안면","hanja":"顔面"},{"word":"동안","hanja":"童顔"},{"word":"세안","hanja":"洗顔"}],
    level: "4급"
  },
  {
    id: 512,
    char: "安",
    sound: "안",
    meaning: "편안",
    examples: [{"word":"안전","hanja":"安全"},{"word":"불안","hanja":"不安"},{"word":"안녕","hanja":"安寧"}],
    level: "4급"
  },
  {
    id: 513,
    char: "眼",
    sound: "안",
    meaning: "눈",
    examples: [{"word":"안경","hanja":"眼鏡"},{"word":"안과","hanja":"眼科"},{"word":"육안","hanja":"肉眼"}],
    level: "4급"
  },
  {
    id: 514,
    char: "案",
    sound: "안",
    meaning: "책상",
    examples: [{"word":"안건","hanja":"案件"},{"word":"방안","hanja":"方案"},{"word":"제안","hanja":"提案"}],
    level: "4급"
  },
  {
    id: 515,
    char: "神",
    sound: "신",
    meaning: "귀신",
    examples: [{"word":"신화","hanja":"神話"},{"word":"정신","hanja":"精神"},{"word":"귀신","hanja":"鬼神"}],
    level: "4급"
  },
  {
    id: 516,
    char: "辛",
    sound: "신",
    meaning: "매울",
    examples: [{"word":"신라면","hanja":"辛拉麵"},{"word":"고신","hanja":"苦辛"}],
    level: "4급"
  },
  {
    id: 517,
    char: "身",
    sound: "신",
    meaning: "몸",
    examples: [{"word":"자신","hanja":"自身"},{"word":"신체","hanja":"身體"},{"word":"신분","hanja":"身分"}],
    level: "4급"
  },
  {
    id: 518,
    char: "巖",
    sound: "암",
    meaning: "바위",
    examples: [{"word":"암석","hanja":"巖石"},{"word":"용암","hanja":"鎔巖"}],
    level: "4급"
  },
  {
    id: 519,
    char: "暗",
    sound: "암",
    meaning: "어두울",
    examples: [{"word":"암흑","hanja":"暗黑"},{"word":"암기","hanja":"暗記"},{"word":"암시","hanja":"暗示"}],
    level: "4급"
  },
  {
    id: 520,
    char: "仰",
    sound: "앙",
    meaning: "우러를",
    examples: [{"word":"신앙","hanja":"信仰"},{"word":"추앙","hanja":"推仰"}],
    level: "4급"
  },
  {
    id: 521,
    char: "哀",
    sound: "애",
    meaning: "슬플",
    examples: [{"word":"비애","hanja":"悲哀"},{"word":"애도","hanja":"哀悼"},{"word":"애수","hanja":"哀愁"}],
    level: "4급"
  },
  {
    id: 522,
    char: "愛",
    sound: "애",
    meaning: "사랑",
    examples: [{"word":"애정","hanja":"愛情"},{"word":"연애","hanja":"戀愛"},{"word":"애국","hanja":"愛國"}],
    level: "4급"
  },
  {
    id: 523,
    char: "野",
    sound: "야",
    meaning: "들",
    examples: [{"word":"야구","hanja":"野球"},{"word":"분야","hanja":"分野"},{"word":"야외","hanja":"野外"}],
    level: "4급"
  },
  {
    id: 524,
    char: "夜",
    sound: "야",
    meaning: "밤",
    examples: [{"word":"야간","hanja":"夜間"},{"word":"야경","hanja":"夜景"},{"word":"철야","hanja":"徹夜"}],
    level: "4급"
  },
  {
    id: 525,
    char: "若",
    sound: "약",
    meaning: "같을",
    examples: [{"word":"약간","hanja":"若干"},{"word":"만약","hanja":"萬若"}],
    level: "4급"
  },
  {
    id: 526,
    char: "藥",
    sound: "약",
    meaning: "약",
    examples: [{"word":"약국","hanja":"藥局"},{"word":"마약","hanja":"麻藥"},{"word":"한약","hanja":"韓藥"}],
    level: "4급"
  },
  {
    id: 527,
    char: "弱",
    sound: "약",
    meaning: "약할",
    examples: [{"word":"노약자","hanja":"老弱者"},{"word":"약점","hanja":"弱點"},{"word":"허약","hanja":"虛弱"}],
    level: "4급"
  },
  {
    id: 528,
    char: "約",
    sound: "약",
    meaning: "맺을",
    examples: [{"word":"약속","hanja":"約束"},{"word":"예약","hanja":"預約"},{"word":"조약","hanja":"條約"}],
    level: "4급"
  },
  {
    id: 529,
    char: "揚",
    sound: "양",
    meaning: "날릴",
    examples: [{"word":"게양","hanja":"揭揚"},{"word":"찬양","hanja":"讚揚"},{"word":"고양","hanja":"高揚"}],
    level: "4급"
  },
  {
    id: 530,
    char: "陽",
    sound: "양",
    meaning: "볕",
    examples: [{"word":"태양","hanja":"太陽"},{"word":"양지","hanja":"陽地"},{"word":"석양","hanja":"夕陽"}],
    level: "4급"
  },
  {
    id: 531,
    char: "羊",
    sound: "양",
    meaning: "양",
    examples: [{"word":"양모","hanja":"羊毛"},{"word":"면양","hanja":"綿羊"}],
    level: "4급"
  },
  {
    id: 532,
    char: "洋",
    sound: "양",
    meaning: "큰바다",
    examples: [{"word":"해양","hanja":"海洋"},{"word":"서양","hanja":"西洋"},{"word":"태평양","hanja":"太平洋"}],
    level: "4급"
  },
  {
    id: 533,
    char: "養",
    sound: "양",
    meaning: "기를",
    examples: [{"word":"양육","hanja":"養育"},{"word":"요양","hanja":"療養"},{"word":"부양","hanja":"扶養"}],
    level: "4급"
  },
  {
    id: 534,
    char: "讓",
    sound: "양",
    meaning: "사양할",
    examples: [{"word":"양보","hanja":"讓步"},{"word":"사양","hanja":"辭讓"},{"word":"겸양","hanja":"謙讓"}],
    level: "4급"
  },
  {
    id: 535,
    char: "魚",
    sound: "어",
    meaning: "물고기",
    examples: [{"word":"어류","hanja":"魚類"},{"word":"어시장","hanja":"魚市場"},{"word":"활어","hanja":"活魚"}],
    level: "4급"
  },
  {
    id: 536,
    char: "語",
    sound: "어",
    meaning: "말씀",
    examples: [{"word":"국어","hanja":"國語"},{"word":"영어","hanja":"英語"},{"word":"언어","hanja":"言語"}],
    level: "4급"
  },
  {
    id: 537,
    char: "憶",
    sound: "억",
    meaning: "생각할",
    examples: [{"word":"기억","hanja":"記憶"},{"word":"추억","hanja":"追憶"}],
    level: "4급"
  },
  {
    id: 538,
    char: "億",
    sound: "억",
    meaning: "억",
    examples: [{"word":"일억","hanja":"一億"},{"word":"거억","hanja":"巨億"}],
    level: "4급"
  },
  {
    id: 539,
    char: "言",
    sound: "언",
    meaning: "말씀",
    examples: [{"word":"언어","hanja":"言語"},{"word":"선언","hanja":"宣言"},{"word":"유언","hanja":"遺言"}],
    level: "4급"
  },
  {
    id: 540,
    char: "嚴",
    sound: "엄",
    meaning: "엄할",
    examples: [{"word":"엄격","hanja":"嚴格"},{"word":"엄숙","hanja":"嚴肅"},{"word":"존엄","hanja":"尊嚴"}],
    level: "4급"
  },
  {
    id: 541,
    char: "業",
    sound: "업",
    meaning: "업",
    examples: [{"word":"직업","hanja":"職業"},{"word":"사업","hanja":"事業"},{"word":"학업","hanja":"學業"}],
    level: "4급"
  },
  {
    id: 542,
    char: "如",
    sound: "여",
    meaning: "같을",
    examples: [{"word":"여전","hanja":"如前"},{"word":"결여","hanja":"缺如"}],
    level: "4급"
  },
  {
    id: 543,
    char: "予",
    sound: "여",
    meaning: "나",
    examples: [{"word":"예산","hanja":"豫算"},{"word":"예언","hanja":"豫言"}],
    level: "4급"
  },
  {
    id: 544,
    char: "漁",
    sound: "어",
    meaning: "고기잡을",
    examples: [{"word":"어부","hanja":"漁夫"},{"word":"어업","hanja":"漁業"},{"word":"어촌","hanja":"漁村"}],
    level: "4급"
  },
  {
    id: 545,
    char: "於",
    sound: "어",
    meaning: "어조사",
    examples: [{"word":"어조사","hanja":"語助辭"}],
    level: "4급"
  },
  {
    id: 546,
    char: "汝",
    sound: "여",
    meaning: "너",
    examples: [{"word":"여등","hanja":"汝等"}],
    level: "4급"
  },
  {
    id: 547,
    char: "與",
    sound: "여",
    meaning: "더불",
    examples: [{"word":"참여","hanja":"參與"},{"word":"기여","hanja":"寄與"},{"word":"여당","hanja":"與黨"}],
    level: "4급"
  },
  {
    id: 548,
    char: "逆",
    sound: "역",
    meaning: "거스를",
    examples: [{"word":"반역","hanja":"叛逆"},{"word":"역류","hanja":"逆流"},{"word":"역전","hanja":"逆轉"}],
    level: "4급"
  },
  {
    id: 549,
    char: "亦",
    sound: "역",
    meaning: "또",
    examples: [{"word":"역시","hanja":"亦是"}],
    level: "4급"
  },
  {
    id: 550,
    char: "余",
    sound: "여",
    meaning: "나",
    examples: [{"word":"여가","hanja":"餘暇"},{"word":"여분","hanja":"餘分"}],
    level: "4급"
  },
  {
    id: 551,
    char: "餘",
    sound: "여",
    meaning: "남을",
    examples: [{"word":"나머지","hanja":"餘"},{"word":"여유","hanja":"餘裕"}],
    level: "4급"
  },
  {
    id: 552,
    char: "易",
    sound: "역",
    meaning: "쉬울",
    examples: [{"word":"용이","hanja":"容易"},{"word":"무역","hanja":"貿易"},{"word":"난이도","hanja":"難易度"}],
    level: "4급"
  },
  {
    id: 553,
    char: "役",
    sound: "역",
    meaning: "부릴",
    examples: [{"word":"역할","hanja":"役割"},{"word":"병역","hanja":"兵役"},{"word":"사역","hanja":"使役"}],
    level: "4급"
  },
  {
    id: 554,
    char: "域",
    sound: "역",
    meaning: "지경",
    examples: [{"word":"지역","hanja":"地域"},{"word":"구역","hanja":"區域"},{"word":"영역","hanja":"領域"}],
    level: "4급"
  },
  {
    id: 555,
    char: "然",
    sound: "연",
    meaning: "그러할",
    examples: [{"word":"자연","hanja":"自然"},{"word":"당연","hanja":"當然"},{"word":"우연","hanja":"偶然"}],
    level: "4급"
  },
  {
    id: 556,
    char: "煙",
    sound: "연",
    meaning: "연기",
    examples: [{"word":"금연","hanja":"禁煙"},{"word":"흡연","hanja":"吸煙"},{"word":"연기","hanja":"煙氣"}],
    level: "4급"
  },
  {
    id: 557,
    char: "研",
    sound: "연",
    meaning: "갈",
    examples: [{"word":"연구","hanja":"硏究"},{"word":"연수","hanja":"硏修"}],
    level: "4급"
  },
  {
    id: 558,
    char: "悅",
    sound: "열",
    meaning: "기쁠",
    examples: [{"word":"희열","hanja":"喜悅"}],
    level: "4급"
  },
  {
    id: 559,
    char: "熱",
    sound: "열",
    meaning: "더울",
    examples: [{"word":"열기","hanja":"熱氣"},{"word":"정열","hanja":"情熱"},{"word":"열심","hanja":"熱心"}],
    level: "4급"
  },
  {
    id: 560,
    char: "炎",
    sound: "염",
    meaning: "불꽃",
    examples: [{"word":"화염","hanja":"火炎"},{"word":"염증","hanja":"炎症"}],
    level: "4급"
  },
  {
    id: 561,
    char: "葉",
    sound: "엽",
    meaning: "잎",
    examples: [{"word":"낙엽","hanja":"落葉"},{"word":"엽서","hanja":"葉書"},{"word":"홍엽","hanja":"紅葉"}],
    level: "4급"
  },
  {
    id: 562,
    char: "營",
    sound: "영",
    meaning: "경영할",
    examples: [{"word":"경영","hanja":"經營"},{"word":"영업","hanja":"營業"},{"word":"운영","hanja":"運營"}],
    level: "4급"
  },
  {
    id: 563,
    char: "英",
    sound: "영",
    meaning: "꽃부리",
    examples: [{"word":"영어","hanja":"英語"},{"word":"영웅","hanja":"英雄"},{"word":"영재","hanja":"英才"}],
    level: "4급"
  },
  {
    id: 564,
    char: "迎",
    sound: "영",
    meaning: "맞을",
    examples: [{"word":"환영","hanja":"歡迎"},{"word":"영접","hanja":"迎接"}],
    level: "4급"
  },
  {
    id: 565,
    char: "榮",
    sound: "영",
    meaning: "영화",
    examples: [{"word":"영광","hanja":"榮光"},{"word":"번영","hanja":"繁榮"},{"word":"영예","hanja":"榮譽"}],
    level: "4급"
  },
  {
    id: 566,
    char: "永",
    sound: "영",
    meaning: "길",
    examples: [{"word":"영원","hanja":"永遠"},{"word":"영구","hanja":"永久"}],
    level: "4급"
  },
  {
    id: 567,
    char: "豫",
    sound: "예",
    meaning: "미리",
    examples: [{"word":"예상","hanja":"豫想"},{"word":"예방","hanja":"豫防"},{"word":"예고","hanja":"豫告"}],
    level: "4급"
  },
  {
    id: 568,
    char: "藝",
    sound: "예",
    meaning: "재주",
    examples: [{"word":"예술","hanja":"藝術"},{"word":"연예","hanja":"演藝"},{"word":"문예","hanja":"文藝"}],
    level: "4급"
  },
  {
    id: 569,
    char: "烏",
    sound: "오",
    meaning: "까마귀",
    examples: [{"word":"오골계","hanja":"烏骨鷄"},{"word":"오합지졸","hanja":"烏合之卒"}],
    level: "4급"
  },
  {
    id: 570,
    char: "吾",
    sound: "오",
    meaning: "나",
    examples: [{"word":"오등","hanja":"吾等"}],
    level: "4급"
  },
  {
    id: 571,
    char: "誤",
    sound: "오",
    meaning: "그르칠",
    examples: [{"word":"오해","hanja":"誤解"},{"word":"착오","hanja":"錯誤"},{"word":"오류","hanja":"誤謬"}],
    level: "4급"
  },
  {
    id: 572,
    char: "悟",
    sound: "오",
    meaning: "깨달을",
    examples: [{"word":"각오","hanja":"覺悟"},{"word":"대오각성","hanja":"大悟覺醒"}],
    level: "4급"
  },
  {
    id: 573,
    char: "午",
    sound: "오",
    meaning: "낮",
    examples: [{"word":"오후","hanja":"午後"},{"word":"오전","hanja":"午前"},{"word":"정오","hanja":"正午"}],
    level: "4급"
  },
  {
    id: 574,
    char: "五",
    sound: "오",
    meaning: "다섯",
    examples: [{"word":"오월","hanja":"五月"},{"word":"오감","hanja":"五感"},{"word":"오곡","hanja":"五穀"}],
    level: "4급"
  },
  {
    id: 575,
    char: "玉",
    sound: "옥",
    meaning: "구슬",
    examples: [{"word":"백옥","hanja":"白玉"},{"word":"옥석","hanja":"玉石"}],
    level: "4급"
  },
  {
    id: 576,
    char: "屋",
    sound: "옥",
    meaning: "집",
    examples: [{"word":"가옥","hanja":"家屋"},{"word":"옥상","hanja":"屋上"},{"word":"한옥","hanja":"韓屋"}],
    level: "4급"
  },
  {
    id: 577,
    char: "獄",
    sound: "옥",
    meaning: "옥",
    examples: [{"word":"감옥","hanja":"監獄"},{"word":"지옥","hanja":"地獄"}],
    level: "4급"
  },
  {
    id: 578,
    char: "王",
    sound: "왕",
    meaning: "임금",
    examples: [{"word":"왕자","hanja":"王子"},{"word":"국왕","hanja":"國王"},{"word":"대왕","hanja":"大王"}],
    level: "4급"
  },
  {
    id: 579,
    char: "往",
    sound: "왕",
    meaning: "갈",
    examples: [{"word":"왕복","hanja":"往復"},{"word":"왕래","hanja":"往來"}],
    level: "4급"
  },
  {
    id: 580,
    char: "慾",
    sound: "욕",
    meaning: "욕심",
    examples: [{"word":"욕망","hanja":"慾望"},{"word":"탐욕","hanja":"貪慾"},{"word":"성욕","hanja":"性慾"}],
    level: "4급"
  },
  {
    id: 581,
    char: "欲",
    sound: "욕",
    meaning: "하고자할",
    examples: [{"word":"의욕","hanja":"意欲"}],
    level: "4급"
  },
  {
    id: 582,
    char: "勇",
    sound: "용",
    meaning: "날랠",
    examples: [{"word":"용기","hanja":"勇氣"},{"word":"용감","hanja":"勇敢"},{"word":"용맹","hanja":"勇猛"}],
    level: "4급"
  },
  {
    id: 583,
    char: "容",
    sound: "용",
    meaning: "얼굴",
    examples: [{"word":"내용","hanja":"內容"},{"word":"용량","hanja":"容量"},{"word":"허용","hanja":"許容"}],
    level: "4급"
  },
  {
    id: 584,
    char: "用",
    sound: "용",
    meaning: "쓸",
    examples: [{"word":"사용","hanja":"使用"},{"word":"이용","hanja":"利用"},{"word":"용도","hanja":"用途"}],
    level: "4급"
  },
  {
    id: 585,
    char: "憂",
    sound: "우",
    meaning: "근심",
    examples: [{"word":"우려","hanja":"憂慮"},{"word":"우울","hanja":"憂鬱"}],
    level: "4급"
  },
  {
    id: 586,
    char: "尤",
    sound: "우",
    meaning: "더욱",
    examples: [{"word":"원망","hanja":"怨尤"}],
    level: "4급"
  },
  {
    id: 587,
    char: "牛",
    sound: "우",
    meaning: "소",
    examples: [{"word":"우유","hanja":"牛乳"},{"word":"한우","hanja":"韓牛"},{"word":"우마","hanja":"牛馬"}],
    level: "4급"
  },
  {
    id: 588,
    char: "于",
    sound: "우",
    meaning: "어조사",
    examples: [{"word":"우선","hanja":"于先"}],
    level: "4급"
  },
  {
    id: 589,
    char: "又",
    sound: "우",
    meaning: "또",
    examples: [{"word":"우일신","hanja":"又日新"}],
    level: "4급"
  },
  {
    id: 590,
    char: "外",
    sound: "외",
    meaning: "바깥",
    examples: [{"word":"외국","hanja":"外國"},{"word":"제외","hanja":"除外"},{"word":"외부","hanja":"外部"}],
    level: "4급"
  },
  {
    id: 591,
    char: "要",
    sound: "요",
    meaning: "요긴할",
    examples: [{"word":"필요","hanja":"必要"},{"word":"중요","hanja":"重要"},{"word":"요구","hanja":"要求"}],
    level: "4급"
  },
  {
    id: 592,
    char: "浴",
    sound: "욕",
    meaning: "목욕할",
    examples: [{"word":"목욕","hanja":"沐浴"},{"word":"욕실","hanja":"浴室"}],
    level: "4급"
  },
  {
    id: 593,
    char: "遇",
    sound: "우",
    meaning: "만날",
    examples: [{"word":"대우","hanja":"待遇"},{"word":"조우","hanja":"遭遇"}],
    level: "4급"
  },
  {
    id: 594,
    char: "友",
    sound: "우",
    meaning: "벗",
    examples: [{"word":"친구","hanja":"親友"},{"word":"우정","hanja":"友情"},{"word":"우호","hanja":"友好"}],
    level: "4급"
  },
  {
    id: 595,
    char: "雨",
    sound: "우",
    meaning: "비",
    examples: [{"word":"강우","hanja":"降雨"},{"word":"우산","hanja":"雨傘"},{"word":"우기","hanja":"雨期"}],
    level: "4급"
  },
  {
    id: 596,
    char: "右",
    sound: "우",
    meaning: "오른",
    examples: [{"word":"우측","hanja":"右側"},{"word":"좌우","hanja":"左右"}],
    level: "4급"
  },
  {
    id: 597,
    char: "宇",
    sound: "우",
    meaning: "집",
    examples: [{"word":"우주","hanja":"宇宙"}],
    level: "4급"
  },
  {
    id: 598,
    char: "雲",
    sound: "운",
    meaning: "구름",
    examples: [{"word":"성운","hanja":"星雲"},{"word":"운집","hanja":"雲集"},{"word":"풍운","hanja":"風雲"}],
    level: "4급"
  },
  {
    id: 599,
    char: "云",
    sound: "운",
    meaning: "이를",
    examples: [{"word":"운운","hanja":"云云"}],
    level: "4급"
  },
  {
    id: 600,
    char: "運",
    sound: "운",
    meaning: "운전할",
    examples: [{"word":"운동","hanja":"運動"},{"word":"운전","hanja":"運轉"},{"word":"행운","hanja":"幸運"}],
    level: "4급"
  },
  {
    id: 601,
    char: "雄",
    sound: "웅",
    meaning: "수컷",
    examples: [{"word":"영웅","hanja":"英雄"},{"word":"웅장","hanja":"雄壯"}],
    level: "4급"
  },
  {
    id: 602,
    char: "源",
    sound: "원",
    meaning: "근원",
    examples: [{"word":"기원","hanja":"起源"},{"word":"자원","hanja":"資源"},{"word":"수원","hanja":"水源"}],
    level: "4급"
  },
  {
    id: 603,
    char: "園",
    sound: "원",
    meaning: "동산",
    examples: [{"word":"공원","hanja":"公園"},{"word":"정원","hanja":"庭園"},{"word":"낙원","hanja":"樂園"}],
    level: "4급"
  },
  {
    id: 604,
    char: "圓",
    sound: "원",
    meaning: "둥글",
    examples: [{"word":"원만","hanja":"圓滿"},{"word":"타원","hanja":"橢圓"}],
    level: "4급"
  },
  {
    id: 605,
    char: "原",
    sound: "원",
    meaning: "근원",
    examples: [{"word":"원인","hanja":"原因"},{"word":"원리","hanja":"原理"},{"word":"원칙","hanja":"原則"}],
    level: "4급"
  },
  {
    id: 606,
    char: "元",
    sound: "원",
    meaning: "으뜸",
    examples: [{"word":"원래","hanja":"元來"},{"word":"원기","hanja":"元氣"},{"word":"복원","hanja":"復元"}],
    level: "4급"
  },
  {
    id: 607,
    char: "院",
    sound: "원",
    meaning: "집",
    examples: [{"word":"병원","hanja":"病院"},{"word":"법원","hanja":"法院"},{"word":"대학원","hanja":"大學院"}],
    level: "4급"
  },
  {
    id: 608,
    char: "遠",
    sound: "원",
    meaning: "멀",
    examples: [{"word":"영원","hanja":"永遠"},{"word":"원거리","hanja":"遠距離"},{"word":"소원","hanja":"疏遠"}],
    level: "4급"
  },
  {
    id: 609,
    char: "怨",
    sound: "원",
    meaning: "원망할",
    examples: [{"word":"원망","hanja":"怨望"},{"word":"원한","hanja":"怨恨"}],
    level: "4급"
  },
  {
    id: 610,
    char: "願",
    sound: "원",
    meaning: "원할",
    examples: [{"word":"소원","hanja":"所願"},{"word":"기원","hanja":"祈願"},{"word":"자원","hanja":"自願"}],
    level: "4급"
  },
  {
    id: 611,
    char: "月",
    sound: "월",
    meaning: "달",
    examples: [{"word":"월요일","hanja":"月曜日"},{"word":"이월","hanja":"二月"},{"word":"세월","hanja":"歲月"}],
    level: "4급"
  },
  {
    id: 612,
    char: "偉",
    sound: "위",
    meaning: "훌륭할",
    examples: [{"word":"위대","hanja":"偉大"},{"word":"위인","hanja":"偉人"}],
    level: "4급"
  },
  {
    id: 613,
    char: "威",
    sound: "위",
    meaning: "위엄",
    examples: [{"word":"권위","hanja":"權威"},{"word":"위협","hanja":"威脅"},{"word":"위력","hanja":"威力"}],
    level: "4급"
  },
  {
    id: 614,
    char: "危",
    sound: "위",
    meaning: "위태할",
    examples: [{"word":"위험","hanja":"危險"},{"word":"위기","hanja":"危機"},{"word":"위해","hanja":"危害"}],
    level: "4급"
  },
  {
    id: 615,
    char: "位",
    sound: "위",
    meaning: "자리",
    examples: [{"word":"위치","hanja":"位置"},{"word":"지위","hanja":"地位"},{"word":"순위","hanja":"順位"}],
    level: "4급"
  },
  {
    id: 616,
    char: "為",
    sound: "위",
    meaning: "할",
    examples: [{"word":"행위","hanja":"行爲"},{"word":"인위","hanja":"人爲"},{"word":"위하여","hanja":"爲하여"}],
    level: "4급"
  },
  {
    id: 617,
    char: "幽",
    sound: "유",
    meaning: "그윽할",
    examples: [{"word":"유령","hanja":"幽靈"}],
    level: "4급"
  },
  {
    id: 618,
    char: "油",
    sound: "유",
    meaning: "기름",
    examples: [{"word":"석유","hanja":"石油"},{"word":"주유소","hanja":"加油所"},{"word":"식용유","hanja":"食用油"}],
    level: "4급"
  },
  {
    id: 619,
    char: "遺",
    sound: "유",
    meaning: "남길",
    examples: [{"word":"유산","hanja":"遺產"},{"word":"유물","hanja":"遺物"},{"word":"유언","hanja":"遺言"}],
    level: "4급"
  },
  {
    id: 620,
    char: "遊",
    sound: "유",
    meaning: "놀",
    examples: [{"word":"유희","hanja":"遊戲"},{"word":"유원지","hanja":"遊園地"}],
    level: "4급"
  },
  {
    id: 621,
    char: "由",
    sound: "유",
    meaning: "말미암을",
    examples: [{"word":"이유","hanja":"理由"},{"word":"자유","hanja":"自由"},{"word":"경유","hanja":"經由"}],
    level: "4급"
  },
  {
    id: 622,
    char: "柔",
    sound: "유",
    meaning: "부드러울",
    examples: [{"word":"유도","hanja":"柔道"},{"word":"유연","hanja":"柔軟"}],
    level: "4급"
  },
  {
    id: 623,
    char: "儒",
    sound: "유",
    meaning: "선비",
    examples: [{"word":"유교","hanja":"儒敎"},{"word":"유학","hanja":"儒學"}],
    level: "4급"
  },
  {
    id: 624,
    char: "幼",
    sound: "유",
    meaning: "어릴",
    examples: [{"word":"유치원","hanja":"幼稚園"},{"word":"유아","hanja":"幼兒"}],
    level: "4급"
  },
  {
    id: 625,
    char: "唯",
    sound: "유",
    meaning: "오직",
    examples: [{"word":"유일","hanja":"唯一"}],
    level: "4급"
  },
  {
    id: 626,
    char: "猶",
    sound: "유",
    meaning: "오히려",
    examples: [{"word":"유예","hanja":"猶豫"}],
    level: "4급"
  },
  {
    id: 627,
    char: "有",
    sound: "유",
    meaning: "있을",
    examples: [{"word":"소유","hanja":"所有"},{"word":"유명","hanja":"有名"},{"word":"공유","hanja":"共有"}],
    level: "4급"
  },
  {
    id: 628,
    char: "肉",
    sound: "육",
    meaning: "고기",
    examples: [{"word":"육류","hanja":"肉類"},{"word":"정육점","hanja":"精肉店"},{"word":"육식","hanja":"肉食"}],
    level: "4급"
  },
  {
    id: 629,
    char: "育",
    sound: "육",
    meaning: "기를",
    examples: [{"word":"교육","hanja":"敎育"},{"word":"육성","hanja":"育成"},{"word":"체육","hanja":"體育"}],
    level: "4급"
  },
  {
    id: 630,
    char: "隱",
    sound: "은",
    meaning: "숨을",
    examples: [{"word":"은닉","hanja":"隱匿"},{"word":"은거","hanja":"隱居"}],
    level: "4급"
  },
  {
    id: 631,
    char: "銀",
    sound: "은",
    meaning: "은",
    examples: [{"word":"은행","hanja":"銀行"},{"word":"은메달","hanja":"銀메달"}],
    level: "4급"
  },
  {
    id: 632,
    char: "恩",
    sound: "은",
    meaning: "은혜",
    examples: [{"word":"은혜","hanja":"恩惠"},{"word":"은인","hanja":"恩人"},{"word":"보은","hanja":"報恩"}],
    level: "4급"
  },
  {
    id: 633,
    char: "乙",
    sound: "을",
    meaning: "새",
    examples: [{"word":"을사조약","hanja":"乙巳條約"}],
    level: "4급"
  },
  {
    id: 634,
    char: "陰",
    sound: "음",
    meaning: "그늘",
    examples: [{"word":"음지","hanja":"陰地"},{"word":"음기","hanja":"陰氣"},{"word":"음력","hanja":"陰曆"}],
    level: "4급"
  },
  {
    id: 635,
    char: "音",
    sound: "음",
    meaning: "소리",
    examples: [{"word":"음악","hanja":"音樂"},{"word":"발음","hanja":"發音"},{"word":"녹음","hanja":"錄音"}],
    level: "4급"
  },
  {
    id: 636,
    char: "吟",
    sound: "음",
    meaning: "읊을",
    examples: [{"word":"음미","hanja":"吟味"}],
    level: "4급"
  },
  {
    id: 637,
    char: "飲",
    sound: "음",
    meaning: "마실",
    examples: [{"word":"음료","hanja":"飲料"},{"word":"음주","hanja":"飮酒"},{"word":"음식","hanja":"飮食"}],
    level: "4급"
  },
  {
    id: 638,
    char: "邑",
    sound: "읍",
    meaning: "고을",
    examples: [{"word":"도읍","hanja":"都邑"}],
    level: "4급"
  },
  {
    id: 639,
    char: "泣",
    sound: "읍",
    meaning: "울",
    examples: [{"word":"읍소","hanja":"泣訴"}],
    level: "4급"
  },
  {
    id: 640,
    char: "應",
    sound: "응",
    meaning: "응할",
    examples: [{"word":"응원","hanja":"應援"},{"word":"반응","hanja":"反應"},{"word":"적응","hanja":"適應"}],
    level: "4급"
  },
  {
    id: 641,
    char: "儀",
    sound: "의",
    meaning: "거동",
    examples: [{"word":"예의","hanja":"禮儀"},{"word":"의식","hanja":"儀式"}],
    level: "4급"
  },
  {
    id: 642,
    char: "矣",
    sound: "의",
    meaning: "어조사",
    examples: [],
    level: "4급"
  },
  {
    id: 643,
    char: "衣",
    sound: "의",
    meaning: "옷",
    examples: [{"word":"의복","hanja":"衣服"},{"word":"의상","hanja":"衣裳"},{"word":"탈의실","hanja":"脫衣室"}],
    level: "4급"
  },
  {
    id: 644,
    char: "議",
    sound: "의",
    meaning: "의논할",
    examples: [{"word":"회의","hanja":"會議"},{"word":"의견","hanja":"意見"},{"word":"의회","hanja":"議會"}],
    level: "4급"
  },
  {
    id: 645,
    char: "疑",
    sound: "의",
    meaning: "의심할",
    examples: [{"word":"의문","hanja":"疑問"},{"word":"의심","hanja":"疑心"},{"word":"용의자","hanja":"容疑者"}],
    level: "4급"
  },
  {
    id: 646,
    char: "醫",
    sound: "의",
    meaning: "의원",
    examples: [{"word":"의사","hanja":"醫師"},{"word":"병원","hanja":"病院"},{"word":"의학","hanja":"醫學"}],
    level: "4급"
  },
  {
    id: 647,
    char: "依",
    sound: "의",
    meaning: "의지할",
    examples: [{"word":"의존","hanja":"依存"},{"word":"의지","hanja":"依支"},{"word":"의뢰","hanja":"依賴"}],
    level: "4급"
  },
  {
    id: 648,
    char: "意",
    sound: "의",
    meaning: "뜻",
    examples: [{"word":"의미","hanja":"意味"},{"word":"의견","hanja":"意見"},{"word":"주의","hanja":"注意"}],
    level: "4급"
  },
  {
    id: 649,
    char: "義",
    sound: "의",
    meaning: "옳을",
    examples: [{"word":"정의","hanja":"正義"},{"word":"의무","hanja":"義務"},{"word":"의리","hanja":"義理"}],
    level: "4급"
  },
  {
    id: 650,
    char: "而",
    sound: "이",
    meaning: "말이을",
    examples: [{"word":"형이상학","hanja":"形而上學"}],
    level: "4급"
  },
  {
    id: 651,
    char: "移",
    sound: "이",
    meaning: "옮길",
    examples: [{"word":"이동","hanja":"移動"},{"word":"이사","hanja":"移徙"},{"word":"이민","hanja":"移民"}],
    level: "4급"
  },
  {
    id: 652,
    char: "耳",
    sound: "이",
    meaning: "귀",
    examples: [{"word":"이목","hanja":"耳目"},{"word":"이비인후과","hanja":"耳鼻咽喉科"}],
    level: "4급"
  },
  {
    id: 653,
    char: "異",
    sound: "이",
    meaning: "다를",
    examples: [{"word":"상이","hanja":"相異"},{"word":"이견","hanja":"異見"},{"word":"이상","hanja":"異常"}],
    level: "4급"
  },
  {
    id: 654,
    char: "二",
    sound: "이",
    meaning: "두",
    examples: [{"word":"이월","hanja":"二月"}],
    level: "4급"
  },
  {
    id: 655,
    char: "以",
    sound: "이",
    meaning: "써",
    examples: [{"word":"이상","hanja":"以上"},{"word":"이하","hanja":"以下"},{"word":"이전","hanja":"以前"}],
    level: "4급"
  },
  {
    id: 656,
    char: "已",
    sound: "이",
    meaning: "이미",
    examples: [{"word":"기왕","hanja":"旣往"}],
    level: "4급"
  },
  {
    id: 657,
    char: "益",
    sound: "익",
    meaning: "더할",
    examples: [{"word":"이익","hanja":"利益"},{"word":"유익","hanja":"有益"},{"word":"공익","hanja":"公益"}],
    level: "4급"
  },
  {
    id: 658,
    char: "印",
    sound: "인",
    meaning: "도장",
    examples: [{"word":"인쇄","hanja":"印刷"},{"word":"인상","hanja":"印象"},{"word":"도장","hanja":"印章"}],
    level: "4급"
  },
  {
    id: 659,
    char: "寅",
    sound: "인",
    meaning: "범",
    examples: [{"word":"무인년","hanja":"戊寅年"}],
    level: "4급"
  },
  {
    id: 660,
    char: "人",
    sound: "인",
    meaning: "사람",
    examples: [{"word":"인간","hanja":"人間"},{"word":"타인","hanja":"他人"},{"word":"주인","hanja":"主人"}],
    level: "4급"
  },
  {
    id: 661,
    char: "認",
    sound: "인",
    meaning: "알",
    examples: [{"word":"인정","hanja":"認定"},{"word":"확인","hanja":"確認"},{"word":"인식","hanja":"認識"}],
    level: "4급"
  },
  {
    id: 662,
    char: "仁",
    sound: "인",
    meaning: "어질",
    examples: [{"word":"인자","hanja":"仁慈"},{"word":"인의","hanja":"仁義"}],
    level: "4급"
  },
  {
    id: 663,
    char: "因",
    sound: "인",
    meaning: "인할",
    examples: [{"word":"원인","hanja":"原因"},{"word":"요인","hanja":"要因"},{"word":"인과","hanja":"因果"}],
    level: "4급"
  },
  {
    id: 664,
    char: "忍",
    sound: "인",
    meaning: "참을",
    examples: [{"word":"인내","hanja":"忍耐"},{"word":"잔인","hanja":"殘忍"}],
    level: "4급"
  },
  {
    id: 665,
    char: "引",
    sound: "인",
    meaning: "끌",
    examples: [{"word":"인용","hanja":"引用"},{"word":"인상","hanja":"引上"},{"word":"유인","hanja":"誘引"}],
    level: "4급"
  },
  {
    id: 666,
    char: "日",
    sound: "일",
    meaning: "날",
    examples: [{"word":"일요일","hanja":"日曜日"},{"word":"매일","hanja":"每日"},{"word":"일상","hanja":"日常"}],
    level: "4급"
  },
  {
    id: 667,
    char: "字",
    sound: "자",
    meaning: "글자",
    examples: [{"word":"글자","hanja":"字"},{"word":"한자","hanja":"漢字"},{"word":"숫자","hanja":"數字"}],
    level: "4급"
  },
  {
    id: 668,
    char: "者",
    sound: "자",
    meaning: "사람",
    examples: [{"word":"학자","hanja":"學者"},{"word":"독자","hanja":"讀者"},{"word":"환자","hanja":"患者"}],
    level: "4급"
  },
  {
    id: 669,
    char: "慈",
    sound: "자",
    meaning: "사랑",
    examples: [{"word":"자비","hanja":"慈悲"},{"word":"자애","hanja":"慈愛"}],
    level: "4급"
  },
  {
    id: 670,
    char: "姊",
    sound: "자",
    meaning: "손윗누이",
    examples: [{"word":"자매","hanja":"姊妹"}],
    level: "4급"
  },
  {
    id: 671,
    char: "自",
    sound: "자",
    meaning: "스스로",
    examples: [{"word":"자유","hanja":"自由"},{"word":"자신","hanja":"自身"},{"word":"자동차","hanja":"自動車"}],
    level: "4급"
  },
  {
    id: 672,
    char: "資",
    sound: "자",
    meaning: "재물",
    examples: [{"word":"자료","hanja":"資料"},{"word":"자본","hanja":"資本"},{"word":"자격","hanja":"資格"}],
    level: "4급"
  },
  {
    id: 673,
    char: "昨",
    sound: "작",
    meaning: "어제",
    examples: [{"word":"작일","hanja":"昨日"}],
    level: "4급"
  },
  {
    id: 674,
    char: "作",
    sound: "작",
    meaning: "지을",
    examples: [{"word":"작품","hanja":"作品"},{"word":"작업","hanja":"作業"},{"word":"조작","hanja":"操作"}],
    level: "4급"
  },
  {
    id: 675,
    char: "雜",
    sound: "잡",
    meaning: "섞일",
    examples: [{"word":"복잡","hanja":"複雜"},{"word":"잡지","hanja":"雜誌"},{"word":"잡음","hanja":"雜音"}],
    level: "4급"
  },
  {
    id: 676,
    char: "章",
    sound: "장",
    meaning: "글",
    examples: [{"word":"문장","hanja":"文章"},{"word":"도장","hanja":"印章"}],
    level: "4급"
  },
  {
    id: 677,
    char: "場",
    sound: "장",
    meaning: "마당",
    examples: [{"word":"운동장","hanja":"運動場"},{"word":"시장","hanja":"市場"},{"word":"장소","hanja":"場所"}],
    level: "4급"
  },
  {
    id: 678,
    char: "張",
    sound: "장",
    meaning: "베풀",
    examples: [{"word":"주장","hanja":"主張"},{"word":"확장","hanja":"擴張"},{"word":"긴장","hanja":"緊張"}],
    level: "4급"
  },
  {
    id: 679,
    char: "莊",
    sound: "장",
    meaning: "별장",
    examples: [{"word":"별장","hanja":"別莊"},{"word":"장엄","hanja":"莊嚴"}],
    level: "4급"
  },
  {
    id: 680,
    char: "腸",
    sound: "장",
    meaning: "창자",
    examples: [{"word":"위장","hanja":"胃腸"}],
    level: "4급"
  },
  {
    id: 681,
    char: "長",
    sound: "장",
    meaning: "길",
    examples: [{"word":"장점","hanja":"長點"},{"word":"성장","hanja":"成長"},{"word":"사장","hanja":"社長"}],
    level: "4급"
  },
  {
    id: 682,
    char: "掌",
    sound: "장",
    meaning: "손바닥",
    examples: [{"word":"장악","hanja":"掌握"}],
    level: "4급"
  },
  {
    id: 683,
    char: "壯",
    sound: "장",
    meaning: "씩씩할",
    examples: [{"word":"웅장","hanja":"雄壯"},{"word":"장관","hanja":"壯觀"}],
    level: "4급"
  },
  {
    id: 684,
    char: "哉",
    sound: "재",
    meaning: "어조사",
    examples: [{"word":"쾌재","hanja":"快哉"}],
    level: "4급"
  },
  {
    id: 685,
    char: "材",
    sound: "재",
    meaning: "재목",
    examples: [{"word":"재료","hanja":"材料"},{"word":"교재","hanja":"敎材"},{"word":"인재","hanja":"人材"}],
    level: "4급"
  },
  {
    id: 686,
    char: "財",
    sound: "재",
    meaning: "재물",
    examples: [{"word":"재산","hanja":"財產"},{"word":"재정","hanja":"財政"}],
    level: "4급"
  },
  {
    id: 687,
    char: "災",
    sound: "재",
    meaning: "재앙",
    examples: [{"word":"재해","hanja":"災害"},{"word":"화재","hanja":"火災"},{"word":"재난","hanja":"災難"}],
    level: "4급"
  },
  {
    id: 688,
    char: "才",
    sound: "재",
    meaning: "재주",
    examples: [{"word":"천재","hanja":"天才"},{"word":"재능","hanja":"才能"}],
    level: "4급"
  },
  {
    id: 689,
    char: "低",
    sound: "저",
    meaning: "낮을",
    examples: [{"word":"저하","hanja":"低下"},{"word":"최저","hanja":"最低"},{"word":"저속","hanja":"低速"}],
    level: "4급"
  },
  {
    id: 690,
    char: "底",
    sound: "저",
    meaning: "밑",
    examples: [{"word":"해저","hanja":"海底"},{"word":"바닥","hanja":"底"}],
    level: "4급"
  },
  {
    id: 691,
    char: "貯",
    sound: "저",
    meaning: "쌓을",
    examples: [{"word":"저축","hanja":"貯蓄"},{"word":"저장","hanja":"貯藏"}],
    level: "4급"
  },
  {
    id: 692,
    char: "敵",
    sound: "적",
    meaning: "원수",
    examples: [{"word":"적군","hanja":"敵軍"},{"word":"천적","hanja":"天敵"}],
    level: "4급"
  },
  {
    id: 693,
    char: "賊",
    sound: "적",
    meaning: "도둑",
    examples: [{"word":"산적","hanja":"山賊"},{"word":"해적","hanja":"海賊"}],
    level: "4급"
  },
  {
    id: 694,
    char: "適",
    sound: "적",
    meaning: "맞을",
    examples: [{"word":"적당","hanja":"適當"},{"word":"적절","hanja":"適切"},{"word":"적응","hanja":"適應"}],
    level: "4급"
  },
  {
    id: 695,
    char: "赤",
    sound: "적",
    meaning: "붉을",
    examples: [{"word":"적색","hanja":"赤色"},{"word":"적십자","hanja":"赤十字"}],
    level: "4급"
  },
  {
    id: 696,
    char: "的",
    sound: "적",
    meaning: "과녁",
    examples: [{"word":"목적","hanja":"目的"},{"word":"적중","hanja":"的中"},{"word":"적극","hanja":"積極"}],
    level: "4급"
  },
  {
    id: 697,
    char: "田",
    sound: "전",
    meaning: "밭",
    examples: [{"word":"논밭","hanja":"田畓"},{"word":"전원","hanja":"田園"}],
    level: "4급"
  },
  {
    id: 698,
    char: "前",
    sound: "전",
    meaning: "앞",
    examples: [{"word":"오전","hanja":"午前"},{"word":"직전","hanja":"直前"},{"word":"전후","hanja":"前後"}],
    level: "4급"
  },
  {
    id: 699,
    char: "專",
    sound: "전",
    meaning: "오로지",
    examples: [{"word":"전문","hanja":"專門"},{"word":"전공","hanja":"專攻"},{"word":"전념","hanja":"專念"}],
    level: "4급"
  },
  {
    id: 700,
    char: "全",
    sound: "전",
    meaning: "온전할",
    examples: [{"word":"전체","hanja":"全體"},{"word":"완전","hanja":"完全"},{"word":"전국","hanja":"全國"}],
    level: "4급"
  },
  {
    id: 701,
    char: "傳",
    sound: "전",
    meaning: "전할",
    examples: [{"word":"전통","hanja":"傳統"},{"word":"전달","hanja":"傳達"},{"word":"전설","hanja":"傳說"}],
    level: "4급"
  },
  {
    id: 702,
    char: "錢",
    sound: "전",
    meaning: "돈",
    examples: [{"word":"금전","hanja":"金錢"},{"word":"동전","hanja":"銅錢"},{"word":"엽전","hanja":"葉錢"}],
    level: "4급"
  },
  {
    id: 703,
    char: "電",
    sound: "전",
    meaning: "번개",
    examples: [{"word":"전기","hanja":"電氣"},{"word":"전화","hanja":"電話"},{"word":"전동","hanja":"電動"}],
    level: "4급"
  },
  {
    id: 704,
    char: "典",
    sound: "전",
    meaning: "법",
    examples: [{"word":"사전","hanja":"辭典"},{"word":"고전","hanja":"古典"},{"word":"전형","hanja":"典型"}],
    level: "4급"
  },
  {
    id: 705,
    char: "戰",
    sound: "전",
    meaning: "싸움",
    examples: [{"word":"전쟁","hanja":"戰爭"},{"word":"작전","hanja":"作戰"},{"word":"도전","hanja":"挑戰"}],
    level: "4급"
  },
  {
    id: 706,
    char: "展",
    sound: "전",
    meaning: "펼",
    examples: [{"word":"전시","hanja":"展示"},{"word":"발전","hanja":"發展"},{"word":"전개","hanja":"展開"}],
    level: "4급"
  },
  {
    id: 707,
    char: "絕",
    sound: "절",
    meaning: "끊을",
    examples: [{"word":"절대","hanja":"絕對"},{"word":"절망","hanja":"絕望"},{"word":"거절","hanja":"拒絕"}],
    level: "4급"
  },
  {
    id: 708,
    char: "節",
    sound: "절",
    meaning: "마디",
    examples: [{"word":"계절","hanja":"季節"},{"word":"절약","hanja":"節約"},{"word":"예절","hanja":"禮節"}],
    level: "4급"
  },
  {
    id: 709,
    char: "任",
    sound: "임",
    meaning: "맡길",
    examples: [{"word":"책임","hanja":"責任"},{"word":"임무","hanja":"任務"},{"word":"임명","hanja":"任命"}],
    level: "4급"
  },
  {
    id: 710,
    char: "壬",
    sound: "임",
    meaning: "아홉째천간",
    examples: [{"word":"임진왜란","hanja":"壬辰倭亂"}],
    level: "4급"
  },
  {
    id: 711,
    char: "入",
    sound: "입",
    meaning: "들",
    examples: [{"word":"입구","hanja":"入口"},{"word":"수입","hanja":"收入"},{"word":"입학","hanja":"入學"}],
    level: "4급"
  },
  {
    id: 712,
    char: "子",
    sound: "자",
    meaning: "아들",
    examples: [{"word":"남자","hanja":"男子"},{"word":"자녀","hanja":"子女"},{"word":"자손","hanja":"子孫"}],
    level: "4급"
  },
  {
    id: 713,
    char: "丈",
    sound: "장",
    meaning: "어른",
    examples: [{"word":"장부","hanja":"丈夫"},{"word":"장인","hanja":"丈人"}],
    level: "4급"
  },
  {
    id: 714,
    char: "帳",
    sound: "장",
    meaning: "휘장",
    examples: [{"word":"통장","hanja":"通帳"},{"word":"장부","hanja":"帳簿"}],
    level: "4급"
  },
  {
    id: 715,
    char: "將",
    sound: "장",
    meaning: "장수/장차",
    examples: [{"word":"장군","hanja":"將軍"},{"word":"장래","hanja":"將來"},{"word":"장차","hanja":"將次"}],
    level: "4급"
  },
  {
    id: 716,
    char: "再",
    sound: "재",
    meaning: "다시",
    examples: [{"word":"재개","hanja":"再開"},{"word":"재발","hanja":"再發"},{"word":"재차","hanja":"再次"}],
    level: "4급"
  },
  {
    id: 717,
    char: "栽",
    sound: "재",
    meaning: "심을",
    examples: [{"word":"재배","hanja":"栽培"}],
    level: "4급"
  },
  {
    id: 718,
    char: "在",
    sound: "재",
    meaning: "있을",
    examples: [{"word":"존재","hanja":"存在"},{"word":"현재","hanja":"現在"},{"word":"부재","hanja":"不在"}],
    level: "4급"
  },
  {
    id: 719,
    char: "爭",
    sound: "쟁",
    meaning: "다툴",
    examples: [{"word":"전쟁","hanja":"戰爭"},{"word":"경쟁","hanja":"競爭"},{"word":"투쟁","hanja":"鬪爭"}],
    level: "4급"
  },
  {
    id: 720,
    char: "著",
    sound: "저",
    meaning: "나타날/지을",
    examples: [{"word":"저작","hanja":"著作"},{"word":"현저","hanja":"顯著"},{"word":"저명","hanja":"著名"}],
    level: "4급"
  },
  {
    id: 721,
    char: "切",
    sound: "절",
    meaning: "끊을/모두",
    examples: [{"word":"친절","hanja":"親切"},{"word":"절실","hanja":"切實"},{"word":"일체","hanja":"一切"}],
    level: "4급"
  },
  {
    id: 722,
    char: "第",
    sound: "제",
    meaning: "차례",
    examples: [{"word":"제일","hanja":"第一"},{"word":"차례","hanja":"次第"}],
    level: "4급"
  },
  {
    id: 723,
    char: "調",
    sound: "조",
    meaning: "고를",
    examples: [{"word":"조사","hanja":"調査"},{"word":"조절","hanja":"調節"},{"word":"강조","hanja":"強調"}],
    level: "4급"
  },
  {
    id: 724,
    char: "鳥",
    sound: "조",
    meaning: "새",
    examples: [{"word":"조류","hanja":"鳥類"},{"word":"백조","hanja":"白鳥"},{"word":"일석이조","hanja":"一石二鳥"}],
    level: "4급"
  },
  {
    id: 725,
    char: "朝",
    sound: "조",
    meaning: "아침",
    examples: [{"word":"조선","hanja":"朝鮮"},{"word":"조식","hanja":"朝食"},{"word":"왕조","hanja":"王朝"}],
    level: "4급"
  },
  {
    id: 726,
    char: "兆",
    sound: "조",
    meaning: "조짐",
    examples: [{"word":"징조","hanja":"徵兆"},{"word":"일조","hanja":"一兆"}],
    level: "4급"
  },
  {
    id: 727,
    char: "族",
    sound: "족",
    meaning: "겨레",
    examples: [{"word":"가족","hanja":"家族"},{"word":"민족","hanja":"民族"},{"word":"부족","hanja":"部族"}],
    level: "4급"
  },
  {
    id: 728,
    char: "足",
    sound: "족",
    meaning: "발",
    examples: [{"word":"부족","hanja":"不足"},{"word":"만족","hanja":"滿足"},{"word":"수족","hanja":"手足"}],
    level: "4급"
  },
  {
    id: 729,
    char: "存",
    sound: "존",
    meaning: "있을",
    examples: [{"word":"생존","hanja":"生存"},{"word":"공존","hanja":"共存"},{"word":"보존","hanja":"保存"}],
    level: "4급"
  },
  {
    id: 730,
    char: "尊",
    sound: "존",
    meaning: "높을",
    examples: [{"word":"존중","hanja":"尊重"},{"word":"존경","hanja":"尊敬"},{"word":"자존심","hanja":"自尊心"}],
    level: "4급"
  },
  {
    id: 731,
    char: "卒",
    sound: "졸",
    meaning: "마칠",
    examples: [{"word":"졸업","hanja":"卒業"},{"word":"졸도","hanja":"卒倒"}],
    level: "4급"
  },
  {
    id: 732,
    char: "店",
    sound: "점",
    meaning: "가게",
    examples: [{"word":"서점","hanja":"書店"},{"word":"상점","hanja":"商店"},{"word":"본점","hanja":"本店"}],
    level: "4급"
  },
  {
    id: 733,
    char: "點",
    sound: "점",
    meaning: "점",
    examples: [{"word":"점수","hanja":"點數"},{"word":"장점","hanja":"長點"},{"word":"관점","hanja":"觀點"}],
    level: "4급"
  },
  {
    id: 734,
    char: "占",
    sound: "점",
    meaning: "차지할",
    examples: [{"word":"독점","hanja":"獨占"},{"word":"점령","hanja":"占領"}],
    level: "4급"
  },
  {
    id: 735,
    char: "接",
    sound: "접",
    meaning: "이을",
    examples: [{"word":"접속","hanja":"接續"},{"word":"직접","hanja":"直接"},{"word":"접근","hanja":"接近"}],
    level: "4급"
  },
  {
    id: 736,
    char: "靜",
    sound: "정",
    meaning: "고요할",
    examples: [{"word":"조용","hanja":"靜"},{"word":"정숙","hanja":"靜肅"},{"word":"냉정","hanja":"冷靜"}],
    level: "4급"
  },
  {
    id: 737,
    char: "貞",
    sound: "정",
    meaning: "곧을",
    examples: [{"word":"정조","hanja":"貞操"},{"word":"동정","hanja":"童貞"}],
    level: "4급"
  },
  {
    id: 738,
    char: "程",
    sound: "정",
    meaning: "길/단위",
    examples: [{"word":"과정","hanja":"過程"},{"word":"정도","hanja":"程度"},{"word":"일정","hanja":"日程"}],
    level: "4급"
  },
  {
    id: 739,
    char: "淨",
    sound: "정",
    meaning: "깨끗할",
    examples: [{"word":"청정","hanja":"淸淨"},{"word":"정화","hanja":"淨化"}],
    level: "4급"
  },
  {
    id: 740,
    char: "庭",
    sound: "정",
    meaning: "뜰",
    examples: [{"word":"가정","hanja":"家庭"},{"word":"교정","hanja":"校庭"}],
    level: "4급"
  },
  {
    id: 741,
    char: "情",
    sound: "정",
    meaning: "뜻",
    examples: [{"word":"감정","hanja":"感情"},{"word":"사정","hanja":"事情"},{"word":"정보","hanja":"情報"}],
    level: "4급"
  },
  {
    id: 742,
    char: "停",
    sound: "정",
    meaning: "머무를",
    examples: [{"word":"정지","hanja":"停止"},{"word":"정전","hanja":"停電"},{"word":"정거장","hanja":"停車場"}],
    level: "4급"
  },
  {
    id: 743,
    char: "丁",
    sound: "정",
    meaning: "장정",
    examples: [{"word":"장정","hanja":"壯丁"}],
    level: "4급"
  },
  {
    id: 744,
    char: "政",
    sound: "정",
    meaning: "정사",
    examples: [{"word":"정치","hanja":"政治"},{"word":"행정","hanja":"行政"},{"word":"정부","hanja":"政府"}],
    level: "4급"
  },
  {
    id: 745,
    char: "頂",
    sound: "정",
    meaning: "정수리",
    examples: [{"word":"정상","hanja":"頂上"},{"word":"절정","hanja":"絕頂"}],
    level: "4급"
  },
  {
    id: 746,
    char: "亭",
    sound: "정",
    meaning: "정자",
    examples: [{"word":"정자","hanja":"亭子"}],
    level: "4급"
  },
  {
    id: 747,
    char: "精",
    sound: "정",
    meaning: "정할/정기",
    examples: [{"word":"정신","hanja":"精神"},{"word":"정성","hanja":"精誠"},{"word":"정밀","hanja":"精密"}],
    level: "4급"
  },
  {
    id: 748,
    char: "正",
    sound: "정",
    meaning: "바를",
    examples: [{"word":"정확","hanja":"正確"},{"word":"수정","hanja":"修正"},{"word":"정오","hanja":"正午"}],
    level: "4급"
  },
  {
    id: 749,
    char: "井",
    sound: "정",
    meaning: "우물",
    examples: [{"word":"천정","hanja":"天井"}],
    level: "4급"
  },
  {
    id: 750,
    char: "定",
    sound: "정",
    meaning: "정할",
    examples: [{"word":"결정","hanja":"決定"},{"word":"안정","hanja":"安定"},{"word":"예정","hanja":"豫定"}],
    level: "4급"
  },
  {
    id: 751,
    char: "齊",
    sound: "제",
    meaning: "가지런할",
    examples: [{"word":"일제","hanja":"一齊"},{"word":"제창","hanja":"齊唱"}],
    level: "4급"
  },
  {
    id: 752,
    char: "提",
    sound: "제",
    meaning: "끌",
    examples: [{"word":"제공","hanja":"提供"},{"word":"제안","hanja":"提案"},{"word":"문제","hanja":"問題"}],
    level: "4급"
  },
  {
    id: 753,
    char: "除",
    sound: "제",
    meaning: "덜",
    examples: [{"word":"제거","hanja":"除去"},{"word":"삭제","hanja":"削除"},{"word":"청소","hanja":"掃除"}],
    level: "4급"
  },
  {
    id: 754,
    char: "諸",
    sound: "제",
    meaning: "모두",
    examples: [{"word":"제군","hanja":"諸君"},{"word":"문제","hanja":"問題"}],
    level: "4급"
  },
  {
    id: 755,
    char: "題",
    sound: "제",
    meaning: "제목",
    examples: [{"word":"주제","hanja":"主題"},{"word":"숙제","hanja":"宿題"},{"word":"제목","hanja":"題目"}],
    level: "4급"
  },
  {
    id: 756,
    char: "弟",
    sound: "제",
    meaning: "아우",
    examples: [{"word":"형제","hanja":"兄弟"},{"word":"자제","hanja":"子弟"}],
    level: "4급"
  },
  {
    id: 757,
    char: "帝",
    sound: "제",
    meaning: "임금",
    examples: [{"word":"황제","hanja":"皇帝"},{"word":"제국","hanja":"帝國"}],
    level: "4급"
  },
  {
    id: 758,
    char: "祭",
    sound: "제",
    meaning: "제사",
    examples: [{"word":"축제","hanja":"祝祭"},{"word":"제사","hanja":"祭祀"}],
    level: "4급"
  },
  {
    id: 759,
    char: "際",
    sound: "제",
    meaning: "즈음",
    examples: [{"word":"국제","hanja":"國際"},{"word":"실제","hanja":"實際"},{"word":"교제","hanja":"交際"}],
    level: "4급"
  },
  {
    id: 760,
    char: "制",
    sound: "제",
    meaning: "절제할",
    examples: [{"word":"제도","hanja":"制度"},{"word":"통제","hanja":"統制"},{"word":"제작","hanja":"製作"}],
    level: "4급"
  },
  {
    id: 761,
    char: "祖",
    sound: "조",
    meaning: "할아버지",
    examples: [{"word":"조상","hanja":"祖上"},{"word":"조부모","hanja":"祖父母"},{"word":"시조","hanja":"始祖"}],
    level: "4급"
  },
  {
    id: 762,
    char: "助",
    sound: "조",
    meaning: "도울",
    examples: [{"word":"원조","hanja":"援助"},{"word":"협조","hanja":"協助"},{"word":"조수","hanja":"助手"}],
    level: "4급"
  },
  {
    id: 763,
    char: "照",
    sound: "조",
    meaning: "비출",
    examples: [{"word":"대조","hanja":"對照"},{"word":"참조","hanja":"參照"},{"word":"조명","hanja":"照明"}],
    level: "4급"
  },
  {
    id: 764,
    char: "早",
    sound: "조",
    meaning: "일찍",
    examples: [{"word":"조기","hanja":"早期"},{"word":"조퇴","hanja":"早退"}],
    level: "4급"
  },
  {
    id: 765,
    char: "造",
    sound: "조",
    meaning: "지을",
    examples: [{"word":"창조","hanja":"創造"},{"word":"제조","hanja":"製造"},{"word":"구조","hanja":"構造"}],
    level: "4급"
  },
  {
    id: 766,
    char: "宗",
    sound: "종",
    meaning: "마루",
    examples: [{"word":"종교","hanja":"宗敎"},{"word":"시종","hanja":"始終"}],
    level: "4급"
  },
  {
    id: 767,
    char: "終",
    sound: "종",
    meaning: "마칠",
    examples: [{"word":"종료","hanja":"終了"},{"word":"최종","hanja":"最終"},{"word":"결국","hanja":"結局"}],
    level: "4급"
  },
  {
    id: 768,
    char: "鐘",
    sound: "종",
    meaning: "종",
    examples: [{"word":"종소리","hanja":"鐘소리"}],
    level: "4급"
  },
  {
    id: 769,
    char: "種",
    sound: "종",
    meaning: "씨",
    examples: [{"word":"종류","hanja":"種類"},{"word":"각종","hanja":"各種"},{"word":"인종","hanja":"人種"}],
    level: "4급"
  },
  {
    id: 770,
    char: "從",
    sound: "종",
    meaning: "좇을",
    examples: [{"word":"복종","hanja":"服從"},{"word":"순종","hanja":"順從"},{"word":"종사","hanja":"從事"}],
    level: "4급"
  },
  {
    id: 771,
    char: "坐",
    sound: "좌",
    meaning: "앉을",
    examples: [{"word":"좌석","hanja":"坐席"},{"word":"좌시","hanja":"坐視"}],
    level: "4급"
  },
  {
    id: 772,
    char: "左",
    sound: "좌",
    meaning: "왼",
    examples: [{"word":"좌우","hanja":"左右"},{"word":"좌측","hanja":"左側"},{"word":"좌회전","hanja":"左回轉"}],
    level: "4급"
  },
  {
    id: 773,
    char: "罪",
    sound: "죄",
    meaning: "허물",
    examples: [{"word":"범죄","hanja":"犯罪"},{"word":"유죄","hanja":"有罪"},{"word":"죄악","hanja":"罪惡"}],
    level: "4급"
  },
  {
    id: 774,
    char: "株",
    sound: "주",
    meaning: "그루",
    examples: [{"word":"주식","hanja":"株式"},{"word":"주주","hanja":"株主"}],
    level: "4급"
  },
  {
    id: 775,
    char: "州",
    sound: "주",
    meaning: "고을",
    examples: [{"word":"광주","hanja":"光州"},{"word":"제주도","hanja":"濟州島"}],
    level: "4급"
  },
  {
    id: 776,
    char: "柱",
    sound: "주",
    meaning: "기둥",
    examples: [{"word":"전신주","hanja":"電信柱"}],
    level: "4급"
  },
  {
    id: 777,
    char: "畫",
    sound: "화",
    meaning: "그림",
    examples: [{"word":"화가","hanja":"畫家"},{"word":"영화","hanja":"映畫"},{"word":"만화","hanja":"漫畫"}],
    level: "4급"
  },
  {
    id: 778,
    char: "走",
    sound: "주",
    meaning: "달릴",
    examples: [{"word":"주행","hanja":"走行"},{"word":"경주","hanja":"競走"},{"word":"폭주","hanja":"暴走"}],
    level: "4급"
  },
  {
    id: 779,
    char: "周",
    sound: "주",
    meaning: "두루",
    examples: [{"word":"주위","hanja":"周圍"},{"word":"원주","hanja":"圓周"},{"word":"주변","hanja":"周邊"}],
    level: "4급"
  },
  {
    id: 780,
    char: "舟",
    sound: "주",
    meaning: "배",
    examples: [{"word":"방주","hanja":"方舟"}],
    level: "4급"
  },
  {
    id: 781,
    char: "朱",
    sound: "주",
    meaning: "붉을",
    examples: [{"word":"주홍","hanja":"朱紅"}],
    level: "4급"
  },
  {
    id: 782,
    char: "主",
    sound: "주",
    meaning: "주인",
    examples: [{"word":"주인","hanja":"主人"},{"word":"주요","hanja":"主要"},{"word":"주장","hanja":"主張"}],
    level: "4급"
  },
  {
    id: 783,
    char: "注",
    sound: "주",
    meaning: "물댈/뜻둘",
    examples: [{"word":"주의","hanja":"注意"},{"word":"주사","hanja":"注射"},{"word":"주목","hanja":"注目"}],
    level: "4급"
  },
  {
    id: 784,
    char: "住",
    sound: "주",
    meaning: "살",
    examples: [{"word":"주택","hanja":"住宅"},{"word":"주민","hanja":"住民"},{"word":"거주","hanja":"居住"}],
    level: "4급"
  },
  {
    id: 785,
    char: "酒",
    sound: "주",
    meaning: "술",
    examples: [{"word":"음주","hanja":"飮酒"},{"word":"약주","hanja":"藥酒"}],
    level: "4급"
  },
  {
    id: 786,
    char: "宙",
    sound: "주",
    meaning: "집",
    examples: [{"word":"우주","hanja":"宇宙"}],
    level: "4급"
  },
  {
    id: 787,
    char: "竹",
    sound: "죽",
    meaning: "대나무",
    examples: [{"word":"죽림","hanja":"竹林"}],
    level: "4급"
  },
  {
    id: 788,
    char: "衆",
    sound: "중",
    meaning: "무리",
    examples: [{"word":"군중","hanja":"群衆"},{"word":"대중","hanja":"大衆"}],
    level: "4급"
  },
  {
    id: 789,
    char: "卽",
    sound: "즉",
    meaning: "곧",
    examples: [{"word":"즉시","hanja":"卽時"},{"word":"즉석","hanja":"卽席"}],
    level: "4급"
  },
  {
    id: 790,
    char: "增",
    sound: "증",
    meaning: "더할",
    examples: [{"word":"증가","hanja":"增加"},{"word":"증명","hanja":"證明"},{"word":"증폭","hanja":"增幅"}],
    level: "4급"
  },
  {
    id: 791,
    char: "會",
    sound: "회",
    meaning: "모일",
    examples: [{"word":"회사","hanja":"會社"},{"word":"회의","hanja":"會議"},{"word":"국회","hanja":"國會"}],
    level: "4급"
  },
  {
    id: 792,
    char: "證",
    sound: "증",
    meaning: "증거",
    examples: [{"word":"증거","hanja":"證據"},{"word":"증명","hanja":"證明"},{"word":"보증","hanja":"保證"}],
    level: "4급"
  },
  {
    id: 793,
    char: "枝",
    sound: "지",
    meaning: "가지",
    examples: [{"word":"가지","hanja":"枝"}],
    level: "4급"
  },
  {
    id: 794,
    char: "持",
    sound: "지",
    meaning: "가질",
    examples: [{"word":"유지","hanja":"維持"},{"word":"지지","hanja":"支持"},{"word":"지속","hanja":"持續"}],
    level: "4급"
  },
  {
    id: 795,
    char: "準",
    sound: "준",
    meaning: "준할",
    examples: [{"word":"준비","hanja":"準備"},{"word":"기준","hanja":"基準"},{"word":"수준","hanja":"水準"}],
    level: "4급"
  },
  {
    id: 796,
    char: "中",
    sound: "중",
    meaning: "가운데",
    examples: [{"word":"중심","hanja":"中心"},{"word":"중간","hanja":"中間"},{"word":"중요","hanja":"重要"}],
    level: "4급"
  },
  {
    id: 797,
    char: "重",
    sound: "중",
    meaning: "무거울",
    examples: [{"word":"중요","hanja":"重要"},{"word":"중력","hanja":"重力"},{"word":"존중","hanja":"尊重"}],
    level: "4급"
  },
  {
    id: 798,
    char: "之",
    sound: "지",
    meaning: "갈/어조사",
    examples: [{"word":"직심","hanja":"直心"}],
    level: "4급"
  },
  {
    id: 799,
    char: "止",
    sound: "지",
    meaning: "그칠",
    examples: [{"word":"중지","hanja":"中止"},{"word":"정지","hanja":"停止"},{"word":"금지","hanja":"禁止"}],
    level: "4급"
  },
  {
    id: 800,
    char: "誌",
    sound: "지",
    meaning: "기록할",
    examples: [{"word":"잡지","hanja":"雜誌"},{"word":"일지","hanja":"日誌"}],
    level: "4급"
  },
  {
    id: 801,
    char: "只",
    sound: "지",
    meaning: "다만",
    examples: [{"word":"단지","hanja":"但只"}],
    level: "4급"
  },
  {
    id: 802,
    char: "地",
    sound: "지",
    meaning: "땅",
    examples: [{"word":"지구","hanja":"地球"},{"word":"지도","hanja":"地圖"},{"word":"토지","hanja":"土地"}],
    level: "4급"
  },
  {
    id: 803,
    char: "志",
    sound: "지",
    meaning: "뜻",
    examples: [{"word":"의지","hanja":"意志"},{"word":"지원","hanja":"志願"}],
    level: "4급"
  },
  {
    id: 804,
    char: "池",
    sound: "지",
    meaning: "못",
    examples: [{"word":"연지","hanja":"蓮池"},{"word":"저수지","hanja":"貯水池"}],
    level: "4급"
  },
  {
    id: 805,
    char: "指",
    sound: "지",
    meaning: "가리킬/손가락",
    examples: [{"word":"지도","hanja":"指導"},{"word":"지시","hanja":"指示"},{"word":"지적","hanja":"指摘"}],
    level: "4급"
  },
  {
    id: 806,
    char: "知",
    sound: "지",
    meaning: "알",
    examples: [{"word":"지식","hanja":"知識"},{"word":"인지","hanja":"認知"},{"word":"통지","hanja":"通知"}],
    level: "4급"
  },
  {
    id: 807,
    char: "至",
    sound: "지",
    meaning: "이를",
    examples: [{"word":"동지","hanja":"冬至"},{"word":"지극","hanja":"至極"}],
    level: "4급"
  },
  {
    id: 808,
    char: "紙",
    sound: "지",
    meaning: "종이",
    examples: [{"word":"신문지","hanja":"新聞紙"},{"word":"지폐","hanja":"紙幣"},{"word":"편지","hanja":"便紙"}],
    level: "4급"
  },
  {
    id: 809,
    char: "支",
    sound: "지",
    meaning: "지탱할",
    examples: [{"word":"지지","hanja":"支持"},{"word":"지원","hanja":"支援"},{"word":"지급","hanja":"支給"}],
    level: "4급"
  },
  {
    id: 810,
    char: "智",
    sound: "지",
    meaning: "지혜",
    examples: [{"word":"지혜","hanja":"智惠"}],
    level: "4급"
  },
  {
    id: 811,
    char: "直",
    sound: "직",
    meaning: "곧을",
    examples: [{"word":"직접","hanja":"直接"},{"word":"직선","hanja":"直線"},{"word":"솔직","hanja":"率直"}],
    level: "4급"
  },
  {
    id: 812,
    char: "辰",
    sound: "진",
    meaning: "별",
    examples: [{"word":"일월성신","hanja":"日月星辰"}],
    level: "4급"
  },
  {
    id: 813,
    char: "珍",
    sound: "진",
    meaning: "보배",
    examples: [{"word":"진주","hanja":"珍珠"},{"word":"진귀","hanja":"珍貴"}],
    level: "4급"
  },
  {
    id: 814,
    char: "陣",
    sound: "진",
    meaning: "진",
    examples: [{"word":"진영","hanja":"陣營"},{"word":"진통","hanja":"陣痛"}],
    level: "4급"
  },
  {
    id: 815,
    char: "眞",
    sound: "진",
    meaning: "참",
    examples: [{"word":"진실","hanja":"眞實"},{"word":"순진","hanja":"純眞"},{"word":"진리","hanja":"眞理"}],
    level: "4급"
  },
  {
    id: 816,
    char: "進",
    sound: "진",
    meaning: "나아갈",
    examples: [{"word":"진행","hanja":"進行"},{"word":"전진","hanja":"前進"},{"word":"진보","hanja":"進步"}],
    level: "4급"
  },
  {
    id: 817,
    char: "盡",
    sound: "진",
    meaning: "다할",
    examples: [{"word":"매진","hanja":"邁進"},{"word":"무구","hanja":"無垢"}],
    level: "4급"
  },
  {
    id: 818,
    char: "質",
    sound: "질",
    meaning: "바탕",
    examples: [{"word":"질문","hanja":"質問"},{"word":"품질","hanja":"品質"},{"word":"물질","hanja":"物質"}],
    level: "4급"
  },
  {
    id: 819,
    char: "疾",
    sound: "질",
    meaning: "병",
    examples: [{"word":"질병","hanja":"疾病"},{"word":"질주","hanja":"疾走"}],
    level: "4급"
  },
  {
    id: 820,
    char: "秩",
    sound: "질",
    meaning: "차례",
    examples: [{"word":"질서","hanja":"秩序"}],
    level: "4급"
  },
  {
    id: 821,
    char: "集",
    sound: "집",
    meaning: "모을",
    examples: [{"word":"집합","hanja":"集合"},{"word":"수집","hanja":"收集"},{"word":"집중","hanja":"集中"}],
    level: "4급"
  },
  {
    id: 822,
    char: "執",
    sound: "집",
    meaning: "잡을",
    examples: [{"word":"집행","hanja":"執行"},{"word":"고집","hanja":"固執"},{"word":"집권","hanja":"執權"}],
    level: "4급"
  },
  {
    id: 823,
    char: "且",
    sound: "차",
    meaning: "또",
    examples: [{"word":"차후","hanja":"且後"}],
    level: "4급"
  },
  {
    id: 824,
    char: "次",
    sound: "차",
    meaning: "버금",
    examples: [{"word":"차례","hanja":"次例"},{"word":"목차","hanja":"目次"},{"word":"절차","hanja":"節次"}],
    level: "4급"
  },
  {
    id: 825,
    char: "振",
    sound: "진",
    meaning: "떨칠",
    examples: [{"word":"진동","hanja":"振動"},{"word":"부진","hanja":"不振"}],
    level: "4급"
  },
  {
    id: 826,
    char: "陳",
    sound: "진",
    meaning: "베풀",
    examples: [{"word":"진열","hanja":"陳列"},{"word":"진술","hanja":"陳述"}],
    level: "4급"
  },
  {
    id: 827,
    char: "鎮",
    sound: "진",
    meaning: "진압할",
    examples: [{"word":"진압","hanja":"鎭壓"},{"word":"진정","hanja":"鎭靜"}],
    level: "4급"
  },
  {
    id: 828,
    char: "差",
    sound: "차",
    meaning: "다를",
    examples: [{"word":"차이","hanja":"差異"},{"word":"차별","hanja":"差別"},{"word":"오차","hanja":"誤差"}],
    level: "4급"
  },
  {
    id: 829,
    char: "此",
    sound: "차",
    meaning: "이",
    examples: [{"word":"차일피일","hanja":"此日彼日"}],
    level: "4급"
  },
  {
    id: 830,
    char: "借",
    sound: "차",
    meaning: "빌릴",
    examples: [{"word":"차용","hanja":"借用"},{"word":"대차","hanja":"貸借"}],
    level: "4급"
  },
  {
    id: 831,
    char: "着",
    sound: "착",
    meaning: "붙을",
    examples: [{"word":"도착","hanja":"到着"},{"word":"착용","hanja":"着用"},{"word":"정착","hanja":"定着"}],
    level: "4급"
  },
  {
    id: 832,
    char: "察",
    sound: "찰",
    meaning: "살필",
    examples: [{"word":"경찰","hanja":"警察"},{"word":"관찰","hanja":"觀察"},{"word":"고찰","hanja":"考察"}],
    level: "4급"
  },
  {
    id: 833,
    char: "參",
    sound: "참",
    meaning: "참여할",
    examples: [{"word":"참석","hanja":"參席"},{"word":"참여","hanja":"參與"},{"word":"참고","hanja":"參考"}],
    level: "4급"
  },
  {
    id: 834,
    char: "窓",
    sound: "창",
    meaning: "창",
    examples: [{"word":"창문","hanja":"窓門"},{"word":"동창","hanja":"同窓"}],
    level: "4급"
  },
  {
    id: 835,
    char: "唱",
    sound: "창",
    meaning: "부를",
    examples: [{"word":"합창","hanja":"合唱"},{"word":"가창","hanja":"歌唱"}],
    level: "4급"
  },
  {
    id: 836,
    char: "創",
    sound: "창",
    meaning: "비롯할",
    examples: [{"word":"창조","hanja":"創造"},{"word":"창작","hanja":"創作"},{"word":"창업","hanja":"創業"}],
    level: "4급"
  },
  {
    id: 837,
    char: "倉",
    sound: "창",
    meaning: "곳집",
    examples: [{"word":"창고","hanja":"倉庫"}],
    level: "4급"
  },
  {
    id: 838,
    char: "昌",
    sound: "창",
    meaning: "창성할",
    examples: [{"word":"번창","hanja":"繁昌"}],
    level: "4급"
  },
  {
    id: 839,
    char: "菜",
    sound: "채",
    meaning: "나물",
    examples: [{"word":"채소","hanja":"菜蔬"},{"word":"야채","hanja":"野菜"}],
    level: "4급"
  },
  {
    id: 840,
    char: "採",
    sound: "채",
    meaning: "캘",
    examples: [{"word":"채취","hanja":"採取"},{"word":"채광","hanja":"採光"},{"word":"채택","hanja":"採擇"}],
    level: "4급"
  },
  {
    id: 841,
    char: "策",
    sound: "책",
    meaning: "꾀",
    examples: [{"word":"대책","hanja":"對策"},{"word":"정책","hanja":"政策"},{"word":"방책","hanja":"方策"}],
    level: "4급"
  },
  {
    id: 842,
    char: "責",
    sound: "책",
    meaning: "꾸짖을/책임",
    examples: [{"word":"책임","hanja":"責任"},{"word":"문책","hanja":"問責"},{"word":"자책","hanja":"自責"}],
    level: "4급"
  },
  {
    id: 843,
    char: "冊",
    sound: "책",
    meaning: "책",
    examples: [{"word":"책방","hanja":"冊房"},{"word":"서책","hanja":"書冊"},{"word":"책장","hanja":"冊張"}],
    level: "4급"
  },
  {
    id: 844,
    char: "妻",
    sound: "처",
    meaning: "아내",
    examples: [{"word":"처자","hanja":"妻子"},{"word":"애처가","hanja":"愛妻家"}],
    level: "4급"
  },
  {
    id: 845,
    char: "處",
    sound: "처",
    meaning: "곳",
    examples: [{"word":"처소","hanja":"處所"},{"word":"상처","hanja":"傷處"},{"word":"처리","hanja":"處理"}],
    level: "4급"
  },
  {
    id: 846,
    char: "尺",
    sound: "척",
    meaning: "자",
    examples: [{"word":"척도","hanja":"尺度"}],
    level: "4급"
  },
  {
    id: 847,
    char: "川",
    sound: "천",
    meaning: "내",
    examples: [{"word":"하천","hanja":"河川"},{"word":"인천","hanja":"仁川"}],
    level: "4급"
  },
  {
    id: 848,
    char: "泉",
    sound: "천",
    meaning: "샘",
    examples: [{"word":"온천","hanja":"溫泉"},{"word":"원천","hanja":"源泉"}],
    level: "4급"
  },
  {
    id: 849,
    char: "千",
    sound: "천",
    meaning: "일천",
    examples: [{"word":"천만","hanja":"千萬"},{"word":"수천","hanja":"數千"}],
    level: "4급"
  },
  {
    id: 850,
    char: "天",
    sound: "천",
    meaning: "하늘",
    examples: [{"word":"천지","hanja":"天地"},{"word":"천하","hanja":"天下"},{"word":"천국","hanja":"天國"}],
    level: "4급"
  },
  {
    id: 851,
    char: "淺",
    sound: "천",
    meaning: "얕을",
    examples: [{"word":"천박","hanja":"淺薄"}],
    level: "4급"
  },
  {
    id: 852,
    char: "鐵",
    sound: "철",
    meaning: "쇠",
    examples: [{"word":"철도","hanja":"鐵道"},{"word":"강철","hanja":"鋼鐵"},{"word":"지하철","hanja":"地下鐵"}],
    level: "4급"
  },
  {
    id: 853,
    char: "晴",
    sound: "청",
    meaning: "갤",
    examples: [{"word":"쾌청","hanja":"快晴"}],
    level: "4급"
  },
  {
    id: 854,
    char: "聽",
    sound: "청",
    meaning: "듣",
    examples: [{"word":"청각","hanja":"聽覺"},{"word":"시청","hanja":"視聽"},{"word":"경청","hanja":"傾聽"}],
    level: "4급"
  },
  {
    id: 855,
    char: "清",
    sound: "청",
    meaning: "맑을",
    examples: [{"word":"청결","hanja":"淸潔"},{"word":"청소","hanja":"淸掃"},{"word":"청정","hanja":"淸淨"}],
    level: "4급"
  },
  {
    id: 856,
    char: "請",
    sound: "청",
    meaning: "청할",
    examples: [{"word":"요청","hanja":"要請"},{"word":"신청","hanja":"申請"},{"word":"청구","hanja":"請求"}],
    level: "4급"
  },
  {
    id: 857,
    char: "草",
    sound: "초",
    meaning: "풀",
    examples: [{"word":"초원","hanja":"草原"},{"word":"초식","hanja":"草食"},{"word":"화초","hanja":"花草"}],
    level: "4급"
  },
  {
    id: 858,
    char: "寸",
    sound: "촌",
    meaning: "마디",
    examples: [{"word":"촌수","hanja":"寸數"},{"word":"사촌","hanja":"四寸"}],
    level: "4급"
  },
  {
    id: 859,
    char: "村",
    sound: "촌",
    meaning: "마을",
    examples: [{"word":"농촌","hanja":"農村"},{"word":"촌락","hanja":"村落"},{"word":"어촌","hanja":"漁村"}],
    level: "4급"
  },
  {
    id: 860,
    char: "最",
    sound: "최",
    meaning: "가장",
    examples: [{"word":"최고","hanja":"最高"},{"word":"최선","hanja":"最善"},{"word":"최근","hanja":"最近"}],
    level: "4급"
  },
  {
    id: 861,
    char: "秋",
    sound: "추",
    meaning: "가을",
    examples: [{"word":"추석","hanja":"秋夕"},{"word":"추분","hanja":"秋分"}],
    level: "4급"
  },
  {
    id: 862,
    char: "追",
    sound: "추",
    meaning: "쫓을",
    examples: [{"word":"추격","hanja":"追擊"},{"word":"추구","hanja":"追求"},{"word":"추적","hanja":"追跡"}],
    level: "4급"
  },
  {
    id: 863,
    char: "推",
    sound: "추",
    meaning: "밀",
    examples: [{"word":"추천","hanja":"推薦"},{"word":"추진","hanja":"推進"},{"word":"추측","hanja":"推測"}],
    level: "4급"
  },
  {
    id: 864,
    char: "體",
    sound: "체",
    meaning: "몸",
    examples: [{"word":"신체","hanja":"身體"},{"word":"전체","hanja":"全體"},{"word":"체육","hanja":"體育"}],
    level: "4급"
  },
  {
    id: 865,
    char: "招",
    sound: "초",
    meaning: "부를",
    examples: [{"word":"초대","hanja":"招待"},{"word":"초청","hanja":"招請"}],
    level: "4급"
  },
  {
    id: 866,
    char: "初",
    sound: "초",
    meaning: "처음",
    examples: [{"word":"초기","hanja":"初期"},{"word":"시초","hanja":"始初"},{"word":"초보","hanja":"初步"}],
    level: "4급"
  },
  {
    id: 867,
    char: "出",
    sound: "출",
    meaning: "날",
    examples: [{"word":"출발","hanja":"出發"},{"word":"외출","hanja":"外出"},{"word":"산출","hanja":"産出"}],
    level: "4급"
  },
  {
    id: 868,
    char: "蟲",
    sound: "충",
    meaning: "벌레",
    examples: [{"word":"곤충","hanja":"昆蟲"},{"word":"해충","hanja":"害蟲"}],
    level: "4급"
  },
  {
    id: 869,
    char: "充",
    sound: "충",
    meaning: "채울",
    examples: [{"word":"충분","hanja":"充分"},{"word":"보충","hanja":"補充"},{"word":"충전","hanja":"充電"}],
    level: "4급"
  },
  {
    id: 870,
    char: "忠",
    sound: "충",
    meaning: "충성",
    examples: [{"word":"충성","hanja":"忠誠"},{"word":"충실","hanja":"忠實"},{"word":"충고","hanja":"忠告"}],
    level: "4급"
  },
  {
    id: 871,
    char: "祝",
    sound: "축",
    meaning: "빌",
    examples: [{"word":"축하","hanja":"祝賀"},{"word":"축복","hanja":"祝福"},{"word":"축제","hanja":"祝祭"}],
    level: "4급"
  },
  {
    id: 872,
    char: "丑",
    sound: "축",
    meaning: "소",
    examples: [{"word":"축시","hanja":"丑時"}],
    level: "4급"
  },
  {
    id: 873,
    char: "春",
    sound: "춘",
    meaning: "봄",
    examples: [{"word":"춘분","hanja":"春分"},{"word":"청춘","hanja":"靑春"}],
    level: "4급"
  },
  {
    id: 874,
    char: "取",
    sound: "취",
    meaning: "취할",
    examples: [{"word":"취득","hanja":"取得"},{"word":"취소","hanja":"取消"},{"word":"섭취","hanja":"攝取"}],
    level: "4급"
  },
  {
    id: 875,
    char: "就",
    sound: "취",
    meaning: "나아갈",
    examples: [{"word":"취업","hanja":"就業"},{"word":"취직","hanja":"就職"},{"word":"성취","hanja":"成就"}],
    level: "4급"
  },
  {
    id: 876,
    char: "吹",
    sound: "취",
    meaning: "불",
    examples: [{"word":"취주악","hanja":"吹奏樂"}],
    level: "4급"
  },
  {
    id: 877,
    char: "值",
    sound: "치",
    meaning: "값",
    examples: [{"word":"가치","hanja":"價値"},{"word":"수치","hanja":"數値"}],
    level: "4급"
  },
  {
    id: 878,
    char: "治",
    sound: "치",
    meaning: "다스릴",
    examples: [{"word":"정치","hanja":"政治"},{"word":"치료","hanja":"治療"}],
    level: "4급"
  },
  {
    id: 879,
    char: "齒",
    sound: "치",
    meaning: "이",
    examples: [{"word":"치과","hanja":"齒科"},{"word":"치약","hanja":"齒藥"}],
    level: "4급"
  },
  {
    id: 880,
    char: "合",
    sound: "합",
    meaning: "합할",
    examples: [{"word":"합계","hanja":"合計"},{"word":"집합","hanja":"集合"},{"word":"화합","hanja":"和合"}],
    level: "4급"
  },
  {
    id: 881,
    char: "致",
    sound: "치",
    meaning: "이를",
    examples: [{"word":"일치","hanja":"一致"},{"word":"치명","hanja":"致命"}],
    level: "4급"
  },
  {
    id: 882,
    char: "則",
    sound: "칙",
    meaning: "법칙",
    examples: [{"word":"규칙","hanja":"規則"},{"word":"법칙","hanja":"法則"},{"word":"원칙","hanja":"原則"}],
    level: "4급"
  },
  {
    id: 883,
    char: "親",
    sound: "친",
    meaning: "친할",
    examples: [{"word":"친구","hanja":"親舊"},{"word":"친절","hanja":"親切"},{"word":"부친","hanja":"父親"}],
    level: "4급"
  },
  {
    id: 884,
    char: "七",
    sound: "칠",
    meaning: "일곱",
    examples: [{"word":"칠월","hanja":"七月"},{"word":"칠석","hanja":"七夕"}],
    level: "4급"
  },
  {
    id: 885,
    char: "針",
    sound: "침",
    meaning: "바늘",
    examples: [{"word":"침로","hanja":"針路"},{"word":"방침","hanja":"方針"},{"word":"시침","hanja":"時針"}],
    level: "4급"
  },
  {
    id: 886,
    char: "快",
    sound: "쾌",
    meaning: "쾌할",
    examples: [{"word":"유쾌","hanja":"愉快"},{"word":"상쾌","hanja":"爽快"},{"word":"쾌속","hanja":"快速"}],
    level: "4급"
  },
  {
    id: 887,
    char: "他",
    sound: "타",
    meaning: "다를",
    examples: [{"word":"타인","hanja":"他人"},{"word":"타국","hanja":"他國"},{"word":"기타","hanja":"其他"}],
    level: "4급"
  },
  {
    id: 888,
    char: "打",
    sound: "타",
    meaning: "칠",
    examples: [{"word":"타격","hanja":"打擊"},{"word":"타자","hanja":"打者"}],
    level: "4급"
  },
  {
    id: 889,
    char: "脫",
    sound: "탈",
    meaning: "벗을",
    examples: [{"word":"탈출","hanja":"脫出"},{"word":"이탈","hanja":"離脫"},{"word":"탈퇴","hanja":"脫退"}],
    level: "4급"
  },
  {
    id: 890,
    char: "探",
    sound: "탐",
    meaning: "찾을",
    examples: [{"word":"탐구","hanja":"探究"},{"word":"탐험","hanja":"探險"},{"word":"탐색","hanja":"探索"}],
    level: "4급"
  },
  {
    id: 891,
    char: "太",
    sound: "태",
    meaning: "클",
    examples: [{"word":"태양","hanja":"太陽"},{"word":"태평양","hanja":"太平洋"}],
    level: "4급"
  },
  {
    id: 892,
    char: "泰",
    sound: "태",
    meaning: "클",
    examples: [{"word":"태산","hanja":"泰山"},{"word":"태평","hanja":"泰平"}],
    level: "4급"
  },
  {
    id: 893,
    char: "宅",
    sound: "택",
    meaning: "집",
    examples: [{"word":"주택","hanja":"住宅"},{"word":"자택","hanja":"自宅"}],
    level: "4급"
  },
  {
    id: 894,
    char: "澤",
    sound: "택",
    meaning: "못",
    examples: [{"word":"혜택","hanja":"惠澤"},{"word":"광택","hanja":"光澤"}],
    level: "4급"
  },
  {
    id: 895,
    char: "土",
    sound: "토",
    meaning: "흙",
    examples: [{"word":"토지","hanja":"土地"},{"word":"국토","hanja":"國土"},{"word":"토요일","hanja":"土曜日"}],
    level: "4급"
  },
  {
    id: 896,
    char: "通",
    sound: "통",
    meaning: "통할",
    examples: [{"word":"통신","hanja":"通信"},{"word":"교통","hanja":"交通"},{"word":"통과","hanja":"通過"}],
    level: "4급"
  },
  {
    id: 897,
    char: "統",
    sound: "통",
    meaning: "거느릴",
    examples: [{"word":"통령","hanja":"統領"},{"word":"통일","hanja":"統一"},{"word":"전통","hanja":"傳統"}],
    level: "4급"
  },
  {
    id: 898,
    char: "退",
    sound: "퇴",
    meaning: "물러날",
    examples: [{"word":"은퇴","hanja":"隱退"},{"word":"퇴근","hanja":"退勤"},{"word":"후퇴","hanja":"後退"}],
    level: "4급"
  },
  {
    id: 899,
    char: "投",
    sound: "투",
    meaning: "던질",
    examples: [{"word":"투표","hanja":"投票"},{"word":"투자","hanja":"投資"},{"word":"투수","hanja":"投手"}],
    level: "4급"
  },
  {
    id: 900,
    char: "特",
    sound: "특",
    meaning: "특별할",
    examples: [{"word":"특별","hanja":"特別"},{"word":"특징","hanja":"特徵"},{"word":"특색","hanja":"特色"}],
    level: "4급"
  },
  {
    id: 901,
    char: "破",
    sound: "파",
    meaning: "깨뜨릴",
    examples: [{"word":"파괴","hanja":"破壞"},{"word":"파손","hanja":"破損"},{"word":"돌파","hanja":"突破"}],
    level: "4급"
  },
  {
    id: 902,
    char: "波",
    sound: "파",
    meaning: "물결",
    examples: [{"word":"파도","hanja":"波濤"},{"word":"파문","hanja":"波紋"}],
    level: "4급"
  },
  {
    id: 903,
    char: "判",
    sound: "판",
    meaning: "판단할",
    examples: [{"word":"판단","hanja":"判斷"},{"word":"비판","hanja":"批判"},{"word":"재판","hanja":"裁判"}],
    level: "4급"
  },
  {
    id: 904,
    char: "八",
    sound: "팔",
    meaning: "여덟",
    examples: [{"word":"팔월","hanja":"八月"},{"word":"팔방","hanja":"八方"}],
    level: "4급"
  },
  {
    id: 905,
    char: "貝",
    sound: "패",
    meaning: "조개",
    examples: [{"word":"어패류","hanja":"魚貝類"}],
    level: "4급"
  },
  {
    id: 906,
    char: "敗",
    sound: "패",
    meaning: "패할",
    examples: [{"word":"실패","hanja":"失敗"},{"word":"패배","hanja":"敗北"},{"word":"승패","hanja":"勝敗"}],
    level: "4급"
  },
  {
    id: 907,
    char: "片",
    sound: "편",
    meaning: "조각",
    examples: [{"word":"파편","hanja":"破片"}],
    level: "4급"
  },
  {
    id: 908,
    char: "篇",
    sound: "편",
    meaning: "책",
    examples: [{"word":"장편","hanja":"長篇"},{"word":"단편","hanja":"短篇"}],
    level: "4급"
  },
  {
    id: 909,
    char: "便",
    sound: "편",
    meaning: "편할",
    examples: [{"word":"편리","hanja":"便利"},{"word":"남편","hanja":"男便"},{"word":"불편","hanja":"不便"}],
    level: "4급"
  },
  {
    id: 910,
    char: "平",
    sound: "평",
    meaning: "평평할",
    examples: [{"word":"평화","hanja":"平和"},{"word":"평등","hanja":"平等"},{"word":"평균","hanja":"平均"}],
    level: "4급"
  },
  {
    id: 911,
    char: "評",
    sound: "평",
    meaning: "평할",
    examples: [{"word":"평가","hanja":"評價"},{"word":"비평","hanja":"批評"},{"word":"호평","hanja":"好評"}],
    level: "4급"
  },
  {
    id: 912,
    char: "閉",
    sound: "폐",
    meaning: "닫을",
    examples: [{"word":"폐쇄","hanja":"閉鎖"},{"word":"밀폐","hanja":"密閉"}],
    level: "4급"
  },
  {
    id: 913,
    char: "浦",
    sound: "포",
    meaning: "개",
    examples: [{"word":"포구","hanja":"浦口"}],
    level: "4급"
  },
  {
    id: 914,
    char: "布",
    sound: "포",
    meaning: "베",
    examples: [{"word":"공포","hanja":"公布"},{"word":"배포","hanja":"配布"}],
    level: "4급"
  },
  {
    id: 915,
    char: "包",
    sound: "포",
    meaning: "쌀",
    examples: [{"word":"포장","hanja":"包裝"},{"word":"포함","hanja":"包含"}],
    level: "4급"
  },
  {
    id: 916,
    char: "抱",
    sound: "포",
    meaning: "안을",
    examples: [{"word":"포옹","hanja":"抱擁"},{"word":"포부","hanja":"抱負"}],
    level: "4급"
  },
  {
    id: 917,
    char: "暴",
    sound: "폭",
    meaning: "사나울",
    examples: [{"word":"폭력","hanja":"暴力"},{"word":"난폭","hanja":"亂暴"},{"word":"폭우","hanja":"暴雨"}],
    level: "4급"
  },
  {
    id: 918,
    char: "表",
    sound: "표",
    meaning: "겉",
    examples: [{"word":"표현","hanja":"表現"},{"word":"표시","hanja":"表示"},{"word":"대표","hanja":"代表"}],
    level: "4급"
  },
  {
    id: 919,
    char: "西",
    sound: "서",
    meaning: "서녘",
    examples: [{"word":"서양","hanja":"西洋"},{"word":"서해","hanja":"西海"},{"word":"동서","hanja":"東西"}],
    level: "4급"
  },
  {
    id: 920,
    char: "骂",
    sound: "매",
    meaning: "욕할",
    examples: [{"word":"매도","hanja":"罵倒"}],
    level: "4급"
  },
  {
    id: 921,
    char: "骂",
    sound: "매",
    meaning: "욕할",
    examples: [{"word":"매도","hanja":"罵倒"}],
    level: "4급"
  },
  {
    id: 922,
    char: "或",
    sound: "혹",
    meaning: "혹",
    examples: [{"word":"혹시","hanja":"或是"}],
    level: "4급"
  },
  {
    id: 923,
    char: "楓",
    sound: "풍",
    meaning: "단풍",
    examples: [{"word":"단풍","hanja":"丹楓"}],
    level: "4급"
  },
  {
    id: 924,
    char: "風",
    sound: "풍",
    meaning: "바람",
    examples: [{"word":"풍수","hanja":"風水"},{"word":"선풍기","hanja":"扇風機"},{"word":"태풍","hanja":"颱風"}],
    level: "4급"
  },
  {
    id: 925,
    char: "豊",
    sound: "풍",
    meaning: "풍년",
    examples: [{"word":"풍부","hanja":"豐富"},{"word":"풍작","hanja":"豊作"}],
    level: "4급"
  },
  {
    id: 926,
    char: "皮",
    sound: "피",
    meaning: "가죽",
    examples: [{"word":"피부","hanja":"皮膚"},{"word":"모피","hanja":"毛皮"},{"word":"표피","hanja":"表皮"}],
    level: "4급"
  },
  {
    id: 927,
    char: "被",
    sound: "피",
    meaning: "입을",
    examples: [{"word":"피해","hanja":"被害"},{"word":"피고","hanja":"被告"}],
    level: "4급"
  },
  {
    id: 928,
    char: "彼",
    sound: "피",
    meaning: "저",
    examples: [{"word":"피차","hanja":"彼此"}],
    level: "4급"
  },
  {
    id: 929,
    char: "必",
    sound: "필",
    meaning: "반드시",
    examples: [{"word":"필수","hanja":"必須"},{"word":"필요","hanja":"必要"},{"word":"필승","hanja":"必勝"}],
    level: "4급"
  },
  {
    id: 930,
    char: "筆",
    sound: "필",
    meaning: "붓",
    examples: [{"word":"연필","hanja":"鉛筆"},{"word":"집필","hanja":"執筆"},{"word":"화필","hanja":"畫筆"}],
    level: "4급"
  },
  {
    id: 931,
    char: "匹",
    sound: "필",
    meaning: "짝",
    examples: [{"word":"필적","hanja":"匹敵"}],
    level: "4급"
  },
  {
    id: 932,
    char: "下",
    sound: "하",
    meaning: "아래",
    examples: [{"word":"지하","hanja":"地下"},{"word":"하산","hanja":"下山"},{"word":"상하","hanja":"上下"}],
    level: "4급"
  },
  {
    id: 933,
    char: "何",
    sound: "하",
    meaning: "어찌",
    examples: [{"word":"기하학","hanja":"幾何學"},{"word":"하필","hanja":"何必"}],
    level: "4급"
  },
  {
    id: 934,
    char: "河",
    sound: "하",
    meaning: "물",
    examples: [{"word":"하천","hanja":"河川"},{"word":"운하","hanja":"運河"}],
    level: "4급"
  },
  {
    id: 935,
    char: "夏",
    sound: "하",
    meaning: "여름",
    examples: [{"word":"하복","hanja":"夏服"},{"word":"하계","hanja":"夏季"}],
    level: "4급"
  },
  {
    id: 936,
    char: "賀",
    sound: "하",
    meaning: "하례할",
    examples: [{"word":"축하","hanja":"祝賀"}],
    level: "4급"
  },
  {
    id: 937,
    char: "學",
    sound: "학",
    meaning: "배울",
    examples: [{"word":"학교","hanja":"學校"},{"word":"학생","hanja":"學生"},{"word":"과학","hanja":"科學"}],
    level: "4급"
  },
  {
    id: 938,
    char: "寒",
    sound: "한",
    meaning: "찰",
    examples: [{"word":"한랭","hanja":"寒冷"},{"word":"오한","hanja":"惡寒"},{"word":"방한","hanja":"防寒"}],
    level: "4급"
  },
  {
    id: 939,
    char: "閑",
    sound: "한",
    meaning: "한가할",
    examples: [{"word":"한가","hanja":"閑暇"},{"word":"한적","hanja":"閑寂"}],
    level: "4급"
  },
  {
    id: 940,
    char: "韓",
    sound: "한",
    meaning: "한국",
    examples: [{"word":"한국","hanja":"韓國"},{"word":"한복","hanja":"韓服"},{"word":"한식","hanja":"韓食"}],
    level: "4급"
  },
  {
    id: 941,
    char: "限",
    sound: "한",
    meaning: "한할",
    examples: [{"word":"제한","hanja":"制限"},{"word":"한계","hanja":"限界"},{"word":"한도","hanja":"限度"}],
    level: "4급"
  },
  {
    id: 942,
    char: "漢",
    sound: "한",
    meaning: "한나라",
    examples: [{"word":"한자","hanja":"漢字"},{"word":"한문","hanja":"漢文"}],
    level: "4급"
  },
  {
    id: 943,
    char: "恨",
    sound: "한",
    meaning: "한",
    examples: [{"word":"원한","hanja":"怨恨"},{"word":"통한","hanja":"痛恨"}],
    level: "4급"
  },
  {
    id: 944,
    char: "合",
    sound: "합",
    meaning: "합할",
    examples: [{"word":"합창","hanja":"合唱"},{"word":"합격","hanja":"合格"}],
    level: "4급"
  },
  {
    id: 945,
    char: "恒",
    sound: "항",
    meaning: "항상",
    examples: [{"word":"항상","hanja":"恒常"},{"word":"항성","hanja":"恒星"}],
    level: "4급"
  },
  {
    id: 946,
    char: "亥",
    sound: "해",
    meaning: "돼지",
    examples: [{"word":"기해년","hanja":"己亥年"}],
    level: "4급"
  },
  {
    id: 947,
    char: "海",
    sound: "해",
    meaning: "바다",
    examples: [{"word":"해양","hanja":"海洋"},{"word":"해수욕장","hanja":"海水浴場"},{"word":"동해","hanja":"東海"}],
    level: "4급"
  },
  {
    id: 948,
    char: "解",
    sound: "해",
    meaning: "풀",
    examples: [{"word":"해결","hanja":"解決"},{"word":"해석","hanja":"解釋"},{"word":"해답","hanja":"解答"}],
    level: "4급"
  },
  {
    id: 949,
    char: "害",
    sound: "해",
    meaning: "해할",
    examples: [{"word":"손해","hanja":"損害"},{"word":"방해","hanja":"妨害"},{"word":"재해","hanja":"災害"}],
    level: "4급"
  },
  {
    id: 950,
    char: "行",
    sound: "행",
    meaning: "다닐",
    examples: [{"word":"행동","hanja":"行動"},{"word":"여행","hanja":"旅行"},{"word":"행복","hanja":"幸福"}],
    level: "4급"
  },
  {
    id: 951,
    char: "幸",
    sound: "행",
    meaning: "다행",
    examples: [{"word":"행복","hanja":"幸福"},{"word":"불행","hanja":"不幸"},{"word":"다행","hanja":"多幸"}],
    level: "4급"
  },
  {
    id: 952,
    char: "鄉",
    sound: "향",
    meaning: "시골",
    examples: [{"word":"고향","hanja":"故鄕"},{"word":"향수","hanja":"鄕愁"}],
    level: "4급"
  },
  {
    id: 953,
    char: "香",
    sound: "향",
    meaning: "향기",
    examples: [{"word":"향기","hanja":"香氣"},{"word":"향수","hanja":"香水"}],
    level: "4급"
  },
  {
    id: 954,
    char: "向",
    sound: "향",
    meaning: "향할",
    examples: [{"word":"방향","hanja":"方向"},{"word":"향상","hanja":"向上"},{"word":"경향","hanja":"傾向"}],
    level: "4급"
  },
  {
    id: 955,
    char: "虛",
    sound: "허",
    meaning: "빌",
    examples: [{"word":"허공","hanja":"虛空"},{"word":"겸허","hanja":"謙虛"},{"word":"허위","hanja":"虛僞"}],
    level: "4급"
  },
  {
    id: 956,
    char: "許",
    sound: "허",
    meaning: "허락할",
    examples: [{"word":"허가","hanja":"許可"},{"word":"허락","hanja":"許諾"},{"word":"면허","hanja":"免許"}],
    level: "4급"
  },
  {
    id: 957,
    char: "革",
    sound: "혁",
    meaning: "가죽",
    examples: [{"word":"혁명","hanja":"革命"},{"word":"개혁","hanja":"改革"},{"word":"가죽","hanja":"皮革"}],
    level: "4급"
  },
  {
    id: 958,
    char: "賢",
    sound: "현",
    meaning: "어질",
    examples: [{"word":"현명","hanja":"賢明"},{"word":"현인","hanja":"賢人"}],
    level: "4급"
  },
  {
    id: 959,
    char: "現",
    sound: "현",
    meaning: "나타날",
    examples: [{"word":"현재","hanja":"現在"},{"word":"현실","hanja":"現實"},{"word":"출현","hanja":"出現"}],
    level: "4급"
  },
  {
    id: 960,
    char: "血",
    sound: "혈",
    meaning: "피",
    examples: [{"word":"혈액","hanja":"血液"},{"word":"출혈","hanja":"出血"},{"word":"혈통","hanja":"血統"}],
    level: "4급"
  },
  {
    id: 961,
    char: "協",
    sound: "협",
    meaning: "화합할",
    examples: [{"word":"협력","hanja":"協力"},{"word":"협동","hanja":"協同"},{"word":"협회","hanja":"協會"}],
    level: "4급"
  },
  {
    id: 962,
    char: "兄",
    sound: "형",
    meaning: "형",
    examples: [{"word":"형제","hanja":"兄弟"}],
    level: "4급"
  },
  {
    id: 963,
    char: "形",
    sound: "형",
    meaning: "형상",
    examples: [{"word":"형태","hanja":"形態"},{"word":"형식","hanja":"形式"},{"word":"인형","hanja":"人形"}],
    level: "4급"
  },
  {
    id: 964,
    char: "刑",
    sound: "형",
    meaning: "형벌",
    examples: [{"word":"형벌","hanja":"刑罰"},{"word":"사형","hanja":"死刑"},{"word":"형사","hanja":"刑事"}],
    level: "4급"
  },
  {
    id: 965,
    char: "惠",
    sound: "혜",
    meaning: "은혜",
    examples: [{"word":"혜택","hanja":"惠澤"},{"word":"은혜","hanja":"恩惠"}],
    level: "4급"
  },
  {
    id: 966,
    char: "虎",
    sound: "호",
    meaning: "범",
    examples: [{"word":"호랑이","hanja":"虎狼이"},{"word":"용호상박","hanja":"龍虎相搏"}],
    level: "4급"
  },
  {
    id: 967,
    char: "呼",
    sound: "호",
    meaning: "부를",
    examples: [{"word":"호흡","hanja":"呼吸"},{"word":"환호","hanja":"歡呼"}],
    level: "4급"
  },
  {
    id: 968,
    char: "乎",
    sound: "호",
    meaning: "어조사",
    examples: [{"word":"단호","hanja":"斷乎"}],
    level: "4급"
  },
  {
    id: 969,
    char: "號",
    sound: "호",
    meaning: "이름",
    examples: [{"word":"번호","hanja":"番號"},{"word":"신호","hanja":"信號"},{"word":"호칭","hanja":"呼稱"}],
    level: "4급"
  },
  {
    id: 970,
    char: "好",
    sound: "호",
    meaning: "좋을",
    examples: [{"word":"선호","hanja":"選好"},{"word":"호감","hanja":"好感"},{"word":"호기심","hanja":"好奇心"}],
    level: "4급"
  },
  {
    id: 971,
    char: "戶",
    sound: "호",
    meaning: "지게",
    examples: [{"word":"가구","hanja":"家口"}],
    level: "4급"
  },
  {
    id: 972,
    char: "婚",
    sound: "혼",
    meaning: "혼인할",
    examples: [{"word":"결혼","hanja":"結婚"},{"word":"혼인","hanja":"婚姻"},{"word":"이혼","hanja":"離婚"}],
    level: "4급"
  },
  {
    id: 973,
    char: "混",
    sound: "혼",
    meaning: "섞을",
    examples: [{"word":"혼란","hanja":"混亂"},{"word":"혼동","hanja":"混同"},{"word":"혼합","hanja":"混合"}],
    level: "4급"
  },
  {
    id: 974,
    char: "紅",
    sound: "홍",
    meaning: "붉을",
    examples: [{"word":"홍차","hanja":"紅茶"},{"word":"홍색","hanja":"紅色"}],
    level: "4급"
  },
  {
    id: 975,
    char: "花",
    sound: "화",
    meaning: "꽃",
    examples: [{"word":"화분","hanja":"花盆"},{"word":"국화","hanja":"國花"},{"word":"화원","hanja":"花園"}],
    level: "4급"
  },
  {
    id: 976,
    char: "話",
    sound: "화",
    meaning: "말씀",
    examples: [{"word":"대화","hanja":"對話"},{"word":"통화","hanja":"通話"},{"word":"화제","hanja":"話題"}],
    level: "4급"
  },
  {
    id: 977,
    char: "和",
    sound: "화",
    meaning: "화할",
    examples: [{"word":"평화","hanja":"平和"},{"word":"화해","hanja":"和解"},{"word":"조화","hanja":"調和"}],
    level: "4급"
  },
  {
    id: 978,
    char: "畫",
    sound: "화",
    meaning: "그림",
    examples: [{"word":"화가","hanja":"畫家"},{"word":"회화","hanja":"繪畫"}],
    level: "4급"
  },
  {
    id: 979,
    char: "化",
    sound: "화",
    meaning: "될",
    examples: [{"word":"변화","hanja":"變化"},{"word":"문화","hanja":"文化"},{"word":"화학","hanja":"化學"}],
    level: "4급"
  },
  {
    id: 980,
    char: "火",
    sound: "화",
    meaning: "불",
    examples: [{"word":"화재","hanja":"火災"},{"word":"화산","hanja":"火山"},{"word":"화요일","hanja":"火曜日"}],
    level: "4급"
  },
  {
    id: 981,
    char: "貨",
    sound: "화",
    meaning: "재화",
    examples: [{"word":"화폐","hanja":"貨幣"},{"word":"재화","hanja":"財貨"},{"word":"외화","hanja":"外貨"}],
    level: "4급"
  },
  {
    id: 982,
    char: "禍",
    sound: "화",
    meaning: "재앙",
    examples: [{"word":"재화","hanja":"災禍"}],
    level: "4급"
  },
  {
    id: 983,
    char: "歡",
    sound: "환",
    meaning: "기뻐할",
    examples: [{"word":"환영","hanja":"歡迎"},{"word":"환희","hanja":"歡喜"},{"word":"환호","hanja":"歡呼"}],
    level: "4급"
  },
  {
    id: 984,
    char: "患",
    sound: "환",
    meaning: "근심",
    examples: [{"word":"환자","hanja":"患者"},{"word":"질환","hanja":"疾患"}],
    level: "4급"
  },
  {
    id: 985,
    char: "活",
    sound: "활",
    meaning: "살",
    examples: [{"word":"생활","hanja":"生活"},{"word":"활동","hanja":"活動"},{"word":"활기","hanja":"活氣"}],
    level: "4급"
  },
  {
    id: 986,
    char: "黃",
    sound: "황",
    meaning: "누를",
    examples: [{"word":"황금","hanja":"黃金"},{"word":"황색","hanja":"黃色"},{"word":"황토","hanja":"黃土"}],
    level: "4급"
  },
  {
    id: 987,
    char: "皇",
    sound: "황",
    meaning: "임금",
    examples: [{"word":"황제","hanja":"皇帝"},{"word":"황후","hanja":"皇后"}],
    level: "4급"
  },
  {
    id: 988,
    char: "回",
    sound: "회",
    meaning: "돌아올",
    examples: [{"word":"회복","hanja":"回復"},{"word":"회전","hanja":"回轉"},{"word":"후회","hanja":"後悔"}],
    level: "4급"
  },
  {
    id: 989,
    char: "會",
    sound: "회",
    meaning: "모일",
    examples: [{"word":"대회","hanja":"大會"},{"word":"기회","hanja":"機會"}],
    level: "4급"
  },
  {
    id: 990,
    char: "效",
    sound: "효",
    meaning: "본받을",
    examples: [{"word":"효과","hanja":"效果"},{"word":"유효","hanja":"有效"},{"word":"효력","hanja":"效力"}],
    level: "4급"
  }
];
