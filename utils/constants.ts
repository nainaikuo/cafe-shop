type MrtStation = {
  station_code: string;
  construction_id: string;
  station_name_tw: string;
  station_name_en: string;
  line_code: string;
  line_name: string;
  address: string;
  lat: number;
  lon: number;
};

export const mrtStationData: MrtStation[] = [
  {
    station_code: "BR01",
    construction_id: "BR13",
    station_name_tw: "動物園",
    station_name_en: "Taipei Zoo",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市文山區新光路二段32號",
    lat: 24.998197,
    lon: 121.579338,
  },
  {
    station_code: "BR02",
    construction_id: "BR12",
    station_name_tw: "木柵",
    station_name_en: "Muzha",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市文山區木柵路四段135號",
    lat: 24.998241,
    lon: 121.573145,
  },
  {
    station_code: "BR03",
    construction_id: "BR11",
    station_name_tw: "萬芳社區",
    station_name_en: "Wanfang Community",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市文山區萬芳路60號",
    lat: 24.998585,
    lon: 121.568102,
  },
  {
    station_code: "BR04",
    construction_id: "BR10",
    station_name_tw: "萬芳醫院",
    station_name_en: "Wanfang Hospital",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市文山區興隆路三段113號",
    lat: 24.999386,
    lon: 121.558152,
  },
  {
    station_code: "BR05",
    construction_id: "BR9",
    station_name_tw: "辛亥",
    station_name_en: "Xinhai",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市文山區辛亥路四段128號",
    lat: 25.005475,
    lon: 121.557107,
  },
  {
    station_code: "BR06",
    construction_id: "BR8",
    station_name_tw: "麟光",
    station_name_en: "Linguang",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市大安區和平東路三段410號",
    lat: 25.018535,
    lon: 121.558791,
  },
  {
    station_code: "BR07",
    construction_id: "BR7",
    station_name_tw: "六張犁",
    station_name_en: "Liuzhangli",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市大安區和平東路三段168號",
    lat: 25.023777,
    lon: 121.553115,
  },
  {
    station_code: "BR08",
    construction_id: "BR6",
    station_name_tw: "科技大樓",
    station_name_en: "Technology Building",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市大安區復興南路二段235號",
    lat: 25.026125,
    lon: 121.543437,
  },
  {
    station_code: "BR09",
    construction_id: "BR5",
    station_name_tw: "大安",
    station_name_en: "Daan",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市大安區信義路四段2號",
    lat: 25.032943,
    lon: 121.543551,
  },
  {
    station_code: "BR10",
    construction_id: "BR4",
    station_name_tw: "忠孝復興",
    station_name_en: "Zhongxiao Fuxing",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市大安區忠孝東路四段47號",
    lat: 25.041629,
    lon: 121.543767,
  },
  {
    station_code: "BR11",
    construction_id: "BR3",
    station_name_tw: "南京復興",
    station_name_en: "Nanjing Fuxing",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市松山區南京東路三段253號",
    lat: 25.052319,
    lon: 121.544011,
  },
  {
    station_code: "BR12",
    construction_id: "BR2",
    station_name_tw: "中山國中",
    station_name_en: "Zhongshan Junior High School",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市中山區復興北路376號",
    lat: 25.060849,
    lon: 121.544227,
  },
  {
    station_code: "BR13",
    construction_id: "BR1",
    station_name_tw: "松山機場",
    station_name_en: "Songshan Airport",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市松山區敦化北路338號",
    lat: 25.063,
    lon: 121.551996,
  },
  {
    station_code: "BR14",
    construction_id: "B1",
    station_name_tw: "大直",
    station_name_en: "Dazhi",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市中山區北安路534之1號",
    lat: 25.079477,
    lon: 121.546895,
  },
  {
    station_code: "BR15",
    construction_id: "B2",
    station_name_tw: "劍南路",
    station_name_en: "Jiannan Rd.",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市中山區北安路798號",
    lat: 25.084853,
    lon: 121.555592,
  },
  {
    station_code: "BR16",
    construction_id: "B3",
    station_name_tw: "西湖",
    station_name_en: "Xihu",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區內湖路一段256號",
    lat: 25.082133,
    lon: 121.567213,
  },
  {
    station_code: "BR17",
    construction_id: "B4",
    station_name_tw: "港墘",
    station_name_en: "Gangqian",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區內湖路一段663號",
    lat: 25.080028,
    lon: 121.575081,
  },
  {
    station_code: "BR18",
    construction_id: "B5",
    station_name_tw: "文德",
    station_name_en: "Wende",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區文德路214號",
    lat: 25.078532,
    lon: 121.584761,
  },
  {
    station_code: "BR19",
    construction_id: "B6",
    station_name_tw: "內湖",
    station_name_en: "Neihu",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區成功路四段186號",
    lat: 25.083661,
    lon: 121.594408,
  },
  {
    station_code: "BR20",
    construction_id: "B7",
    station_name_tw: "大湖公園",
    station_name_en: "Dahu Park",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區成功路五段11號",
    lat: 25.083845,
    lon: 121.602141,
  },
  {
    station_code: "BR21",
    construction_id: "B8",
    station_name_tw: "葫洲",
    station_name_en: "Huzhou",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區康寧路三段16號",
    lat: 25.072701,
    lon: 121.607158,
  },
  {
    station_code: "BR22",
    construction_id: "B9",
    station_name_tw: "東湖",
    station_name_en: "Donghu",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市內湖區康寧路三段235號",
    lat: 25.067147,
    lon: 121.611445,
  },
  {
    station_code: "BR23",
    construction_id: "B10",
    station_name_tw: "南港軟體園區",
    station_name_en: "Nangang Software Park",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市南港區經貿二路183號",
    lat: 25.059905,
    lon: 121.615953,
  },
  {
    station_code: "BR24",
    construction_id: "B11",
    station_name_tw: "南港展覽館",
    station_name_en: "Taipei Nangang Exhibition Center",
    line_code: "BR",
    line_name: "文湖線",
    address: "台北市南港區南港路一段32號",
    lat: 25.055288,
    lon: 121.6175001,
  },
  {
    station_code: "R02",
    construction_id: "R5",
    station_name_tw: "象山",
    station_name_en: "Xiangshan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市信義區信義路五段152號B1",
    lat: 25.03283,
    lon: 121.569576,
  },
  {
    station_code: "R03",
    construction_id: "R6",
    station_name_tw: "台北101/世貿",
    station_name_en: "Taipei 101/World Trade Center",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市信義區信義路五段20號B1",
    lat: 25.033102,
    lon: 121.563292,
  },
  {
    station_code: "R04",
    construction_id: "R7",
    station_name_tw: "信義安和",
    station_name_en: "Xinyi Anhe",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大安區信義路四段212之1號B1",
    lat: 25.033326,
    lon: 121.553526,
  },
  {
    station_code: "R05",
    construction_id: "R8",
    station_name_tw: "大安",
    station_name_en: "Daan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大安區信義路四段2號",
    lat: 25.032943,
    lon: 121.543551,
  },
  {
    station_code: "R06",
    construction_id: "R9",
    station_name_tw: "大安森林公園",
    station_name_en: "Daan Park",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大安區信義路三段100號B1",
    lat: 25.033396,
    lon: 121.534882,
  },
  {
    station_code: "R07",
    construction_id: "R10",
    station_name_tw: "東門",
    station_name_en: "Dongmen",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大安區信義路二段166號B1",
    lat: 25.033847,
    lon: 121.528739,
  },
  {
    station_code: "R08",
    construction_id: "R11",
    station_name_tw: "中正紀念堂",
    station_name_en: "Chiang Kai-Shek Memorial Hall",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市中正區羅斯福路一段8之1號B1",
    lat: 25.032729,
    lon: 121.51827,
  },
  {
    station_code: "R09",
    construction_id: "R12",
    station_name_tw: "台大醫院",
    station_name_en: "NTU Hospital",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市中正區公園路52號B1",
    lat: 25.041256,
    lon: 121.51604,
  },
  {
    station_code: "R10",
    construction_id: "R13",
    station_name_tw: "台北車站",
    station_name_en: "Taipei Main Station",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市中正區忠孝西路一段49號",
    lat: 25.046255,
    lon: 121.517532,
  },
  {
    station_code: "R11",
    construction_id: "R14",
    station_name_tw: "中山",
    station_name_en: "Zhongshan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市中山區南京西路16號",
    lat: 25.052685,
    lon: 121.520392,
  },
  {
    station_code: "R12",
    construction_id: "R15",
    station_name_tw: "雙連",
    station_name_en: "Shuanglian",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大同區民生西路47號",
    lat: 25.057805,
    lon: 121.520627,
  },
  {
    station_code: "R13",
    construction_id: "R16",
    station_name_tw: "民權西路",
    station_name_en: "Minquan W. Rd.",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大同區民權西路72號",
    lat: 25.062905,
    lon: 121.51932,
  },
  {
    station_code: "R14",
    construction_id: "R17",
    station_name_tw: "圓山",
    station_name_en: "Yuanshan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市大同區酒泉街9之1號",
    lat: 25.071353,
    lon: 121.520118,
  },
  {
    station_code: "R15",
    construction_id: "R18A",
    station_name_tw: "劍潭",
    station_name_en: "Jiantan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市士林區中山北路五段65號",
    lat: 25.084873,
    lon: 121.525078,
  },
  {
    station_code: "R16",
    construction_id: "R20",
    station_name_tw: "士林",
    station_name_en: "Shilin",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市士林區福德路1號",
    lat: 25.093535,
    lon: 121.52623,
  },
  {
    station_code: "R17",
    construction_id: "R21",
    station_name_tw: "芝山",
    station_name_en: "Zhishan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市士林區福國路70號",
    lat: 25.10306,
    lon: 121.522514,
  },
  {
    station_code: "R18",
    construction_id: "R22",
    station_name_tw: "明德",
    station_name_en: "Mingde",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區明德路95號",
    lat: 25.109721,
    lon: 121.518848,
  },
  {
    station_code: "R19",
    construction_id: "R23",
    station_name_tw: "石牌",
    station_name_en: "Shipai",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區石牌路一段200號",
    lat: 25.114523,
    lon: 121.515559,
  },
  {
    station_code: "R20",
    construction_id: "R24",
    station_name_tw: "唭哩岸",
    station_name_en: "Qilian",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區東華街二段301號",
    lat: 25.120872,
    lon: 121.506252,
  },
  {
    station_code: "R21",
    construction_id: "R25",
    station_name_tw: "奇岩",
    station_name_en: "Qiyan",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區三合街二段489號",
    lat: 25.125491,
    lon: 121.501132,
  },
  {
    station_code: "R22",
    construction_id: "R26",
    station_name_tw: "北投",
    station_name_en: "Beitou",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區光明路1號",
    lat: 25.131841,
    lon: 121.498633,
  },
  {
    station_code: "R22A",
    construction_id: "R27",
    station_name_tw: "新北投",
    station_name_en: "Xinbeitou",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區大業路700號",
    lat: 25.136933,
    lon: 121.50253,
  },
  {
    station_code: "R23",
    construction_id: "R28",
    station_name_tw: "復興崗",
    station_name_en: "Fuxinggang",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區中央北路三段53巷10號",
    lat: 25.137474,
    lon: 121.485444,
  },
  {
    station_code: "R24",
    construction_id: "R29",
    station_name_tw: "忠義",
    station_name_en: "Zhongyi",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區中央北路四段301號",
    lat: 25.130969,
    lon: 121.47341,
  },
  {
    station_code: "R25",
    construction_id: "R30",
    station_name_tw: "關渡",
    station_name_en: "Guandu",
    line_code: "R",
    line_name: "淡水信義線",
    address: "台北市北投區大度路三段296巷51號",
    lat: 25.125633,
    lon: 121.467102,
  },
  {
    station_code: "R26",
    construction_id: "R31",
    station_name_tw: "竹圍",
    station_name_en: "Zhuwei",
    line_code: "R",
    line_name: "淡水信義線",
    address: "新北市淡水區民權路50號",
    lat: 25.13694,
    lon: 121.459479,
  },
  {
    station_code: "R27",
    construction_id: "R32",
    station_name_tw: "紅樹林",
    station_name_en: "Hongshulin",
    line_code: "R",
    line_name: "淡水信義線",
    address: "新北市淡水區中正東路二段68號",
    lat: 25.154042,
    lon: 121.458872,
  },
  {
    station_code: "R28",
    construction_id: "R33",
    station_name_tw: "淡水",
    station_name_en: "Tamsui",
    line_code: "R",
    line_name: "淡水信義線",
    address: "新北市淡水區中正路1號",
    lat: 25.167818,
    lon: 121.445561,
  },
  {
    station_code: "G01",
    construction_id: "G1",
    station_name_tw: "新店",
    station_name_en: "Xindian",
    line_code: "G",
    line_name: "松山新店線",
    address: "新北市新店區北宜路一段2號",
    lat: 24.957855,
    lon: 121.537584,
  },
  {
    station_code: "G02",
    construction_id: "G2",
    station_name_tw: "新店區公所",
    station_name_en: "Xindian District Office",
    line_code: "G",
    line_name: "松山新店線",
    address: "新北市新店區北新路一段295號",
    lat: 24.967393,
    lon: 121.54131,
  },
  {
    station_code: "G03",
    construction_id: "G3",
    station_name_tw: "七張",
    station_name_en: "Qizhang",
    line_code: "G",
    line_name: "松山新店線",
    address: "新北市新店區北新路二段150號",
    lat: 24.975169,
    lon: 121.542942,
  },
  {
    station_code: "G03A",
    construction_id: "G1A",
    station_name_tw: "小碧潭",
    station_name_en: "Xiaobitan",
    line_code: "G",
    line_name: "松山新店線",
    address: "新北市新店區中央路151號4樓",
    lat: 24.971907,
    lon: 121.530339,
  },
  {
    station_code: "G04",
    construction_id: "G4",
    station_name_tw: "大坪林",
    station_name_en: "Dapinglin",
    line_code: "G",
    line_name: "松山新店線",
    address: "新北市新店區北新路三段190號",
    lat: 24.982899,
    lon: 121.541352,
  },
  {
    station_code: "G05",
    construction_id: "G5",
    station_name_tw: "景美",
    station_name_en: "Jingmei",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市文山區羅斯福路六段393號",
    lat: 24.9921276,
    lon: 121.5406037,
  },
  {
    station_code: "G06",
    construction_id: "G6",
    station_name_tw: "萬隆",
    station_name_en: "Wanlong",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市文山區羅斯福路五段214號",
    lat: 25.001853,
    lon: 121.539051,
  },
  {
    station_code: "G07",
    construction_id: "G7",
    station_name_tw: "公館",
    station_name_en: "Gongguan",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區羅斯福路四段74號B1",
    lat: 25.014908,
    lon: 121.534216,
  },
  {
    station_code: "G08",
    construction_id: "G9",
    station_name_tw: "台電大樓",
    station_name_en: "Taipower Building",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區羅斯福路三段126之5號B1",
    lat: 25.020725,
    lon: 121.528168,
  },
  {
    station_code: "G09",
    construction_id: "G10",
    station_name_tw: "古亭",
    station_name_en: "Guting",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區羅斯福路二段164之1號B1",
    lat: 25.026357,
    lon: 121.522873,
  },
  {
    station_code: "G10",
    construction_id: "G11",
    station_name_tw: "中正紀念堂",
    station_name_en: "Chiang Kai-Shek Memorial Hall",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區羅斯福路一段8之1號B1",
    lat: 25.032729,
    lon: 121.51827,
  },
  {
    station_code: "G11",
    construction_id: "G12",
    station_name_tw: "小南門",
    station_name_en: "Xiaonanmen",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區愛國西路22號B1",
    lat: 25.035547,
    lon: 121.510857,
  },
  {
    station_code: "G12",
    construction_id: "G13",
    station_name_tw: "西門",
    station_name_en: "Ximen",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中正區寶慶路32之1號B1",
    lat: 25.04209,
    lon: 121.508303,
  },
  {
    station_code: "G13",
    construction_id: "G14",
    station_name_tw: "北門",
    station_name_en: "Beimen",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市大同區塔城街10號",
    lat: 25.049554,
    lon: 121.510184,
  },
  {
    station_code: "G14",
    construction_id: "G16",
    station_name_tw: "中山",
    station_name_en: "Zhongshan",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中山區南京西路16號",
    lat: 25.052685,
    lon: 121.520392,
  },
  {
    station_code: "G15",
    construction_id: "G17",
    station_name_tw: "松江南京",
    station_name_en: "Songjiang Nanjing",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市中山區松江路126號B1",
    lat: 25.052015,
    lon: 121.533075,
  },
  {
    station_code: "G16",
    construction_id: "G18",
    station_name_tw: "南京復興",
    station_name_en: "Nanjing Fuxing",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市松山區南京東路三段253號",
    lat: 25.052319,
    lon: 121.544011,
  },
  {
    station_code: "G17",
    construction_id: "G19",
    station_name_tw: "台北小巨蛋",
    station_name_en: "Taipei Arena",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市松山區南京東路四段10-1號",
    lat: 25.051836,
    lon: 121.55153,
  },
  {
    station_code: "G18",
    construction_id: "G21",
    station_name_tw: "南京三民",
    station_name_en: "Nanjing Sanmin",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市松山區南京東路五段237號",
    lat: 25.051652,
    lon: 121.564708,
  },
  {
    station_code: "G19",
    construction_id: "G22",
    station_name_tw: "松山",
    station_name_en: "Songshan",
    line_code: "G",
    line_name: "松山新店線",
    address: "台北市松山區八德路四段742號",
    lat: 25.050118,
    lon: 121.577706,
  },
  {
    station_code: "O01",
    construction_id: "O19",
    station_name_tw: "南勢角",
    station_name_en: "Nanshijiao",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市中和區捷運路6號",
    lat: 24.990045,
    lon: 121.509237,
  },
  {
    station_code: "O02",
    construction_id: "O18",
    station_name_tw: "景安",
    station_name_en: "Jingan",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市中和區景平路486號",
    lat: 24.993905,
    lon: 121.505113,
  },
  {
    station_code: "O03",
    construction_id: "O17",
    station_name_tw: "永安市場",
    station_name_en: "Yongan Market",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市中和區中和路388號",
    lat: 25.002876,
    lon: 121.511231,
  },
  {
    station_code: "O04",
    construction_id: "O16",
    station_name_tw: "頂溪",
    station_name_en: "Dingxi",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市永和區永和路二段168號B1",
    lat: 25.013821,
    lon: 121.515485,
  },
  {
    station_code: "O05",
    construction_id: "O15",
    station_name_tw: "古亭",
    station_name_en: "Guting",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市中正區羅斯福路二段164之1號B1",
    lat: 25.026357,
    lon: 121.522873,
  },
  {
    station_code: "O06",
    construction_id: "O14",
    station_name_tw: "東門",
    station_name_en: "Dongmen",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市大安區信義路二段166號B1",
    lat: 25.033847,
    lon: 121.528739,
  },
  {
    station_code: "O07",
    construction_id: "O13",
    station_name_tw: "忠孝新生",
    station_name_en: "Zhongxiao Xinsheng",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市大安區新生南路一段67號",
    lat: 25.042356,
    lon: 121.532905,
  },
  {
    station_code: "O08",
    construction_id: "O12",
    station_name_tw: "松江南京",
    station_name_en: "Songjiang Nanjing",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市中山區松江路126號B1",
    lat: 25.052015,
    lon: 121.533075,
  },
  {
    station_code: "O09",
    construction_id: "O11",
    station_name_tw: "行天宮",
    station_name_en: "Xingtian Temple",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市中山區松江路316號B1",
    lat: 25.059718,
    lon: 121.533185,
  },
  {
    station_code: "O10",
    construction_id: "O10",
    station_name_tw: "中山國小",
    station_name_en: "Zhongshan Elementary School",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市中山區民權東路一段71號B1",
    lat: 25.062694,
    lon: 121.526419,
  },
  {
    station_code: "O11",
    construction_id: "O9",
    station_name_tw: "民權西路",
    station_name_en: "Minquan W. Rd.",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市大同區民權西路72號",
    lat: 25.062905,
    lon: 121.51932,
  },
  {
    station_code: "O12",
    construction_id: "O8",
    station_name_tw: "大橋頭",
    station_name_en: "Daqiaotou",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "台北市大同區民權西路223號B1",
    lat: 25.063256,
    lon: 121.51272,
  },
  {
    station_code: "O13",
    construction_id: "O7",
    station_name_tw: "台北橋",
    station_name_en: "Taipei Bridge",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區重新路一段108號B1",
    lat: 25.063274,
    lon: 121.500762,
  },
  {
    station_code: "O14",
    construction_id: "O6",
    station_name_tw: "菜寮",
    station_name_en: "Cailiao",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區重新路三段150號B1",
    lat: 25.060274,
    lon: 121.492156,
  },
  {
    station_code: "O15",
    construction_id: "O5",
    station_name_tw: "三重",
    station_name_en: "Sanchong",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區捷運路36號B1",
    lat: 25.055791,
    lon: 121.484725,
  },
  {
    station_code: "O16",
    construction_id: "O4",
    station_name_tw: "先嗇宮",
    station_name_en: "Xianse Temple",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區重新路五段515號B1",
    lat: 25.046493,
    lon: 121.471916,
  },
  {
    station_code: "O17",
    construction_id: "O3",
    station_name_tw: "頭前庄",
    station_name_en: "Touqianzhuang",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市新莊區思源路18號B1",
    lat: 25.039705,
    lon: 121.461746,
  },
  {
    station_code: "O18",
    construction_id: "O2",
    station_name_tw: "新莊",
    station_name_en: "Xinzhuang",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市新莊區中正路138號B1",
    lat: 25.036125,
    lon: 121.452468,
  },
  {
    station_code: "O19",
    construction_id: "O1",
    station_name_tw: "輔大",
    station_name_en: "Fu Jen University",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市新莊區中正路510之1號B1",
    lat: 25.032718,
    lon: 121.43547,
  },
  {
    station_code: "O20",
    construction_id: "O60",
    station_name_tw: "丹鳳",
    station_name_en: "Danfeng",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市新莊區中正路624之1號B1",
    lat: 25.0288671,
    lon: 121.4227079,
  },
  {
    station_code: "O21",
    construction_id: "O59",
    station_name_tw: "迴龍",
    station_name_en: "Huilong",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市新莊區中正路758號B1",
    lat: 25.021862,
    lon: 121.41127,
  },
  {
    station_code: "O50",
    construction_id: "O47",
    station_name_tw: "三重國小",
    station_name_en: "Sanchong Elementary School",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區三和路三段5號B1",
    lat: 25.070319,
    lon: 121.496904,
  },
  {
    station_code: "O51",
    construction_id: "O46",
    station_name_tw: "三和國中",
    station_name_en: "Sanhe Junior High School",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市三重區三和路四段107號B1",
    lat: 25.076859,
    lon: 121.486347,
  },
  {
    station_code: "O52",
    construction_id: "O45",
    station_name_tw: "徐匯中學",
    station_name_en: "St. Ignatius High School",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市蘆洲區中山一路3號B1",
    lat: 25.080728,
    lon: 121.479673,
  },
  {
    station_code: "O53",
    construction_id: "O44",
    station_name_tw: "三民高中",
    station_name_en: "Sanmin Senior High School",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市蘆洲區三民路105號B1",
    lat: 25.085456,
    lon: 121.473389,
  },
  {
    station_code: "O54",
    construction_id: "O43",
    station_name_tw: "蘆洲",
    station_name_en: "Luzhou",
    line_code: "O",
    line_name: "中和新蘆線",
    address: "新北市蘆洲區三民路386號B1",
    lat: 25.091554,
    lon: 121.464471,
  },
  {
    station_code: "BL01",
    construction_id: "BL36",
    station_name_tw: "頂埔",
    station_name_en: "Dingpu",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市土城區中央路四段51-6號B3",
    lat: 24.96012,
    lon: 121.4205,
  },
  {
    station_code: "BL02",
    construction_id: "BL37",
    station_name_tw: "永寧",
    station_name_en: "Yongning",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市土城區中央路三段105號B1",
    lat: 24.966726,
    lon: 121.436072,
  },
  {
    station_code: "BL03",
    construction_id: "BL38",
    station_name_tw: "土城",
    station_name_en: "Tucheng",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市土城區金城路一段105號B1",
    lat: 24.973094,
    lon: 121.444362,
  },
  {
    station_code: "BL04",
    construction_id: "BL39",
    station_name_tw: "海山",
    station_name_en: "Haishan",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市土城區海山路39號B2",
    lat: 24.985339,
    lon: 121.448786,
  },
  {
    station_code: "BL05",
    construction_id: "BL40",
    station_name_tw: "亞東醫院",
    station_name_en: "Far Eastern Hospital",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市板橋區南雅南路二段17號B1",
    lat: 24.998037,
    lon: 121.452514,
  },
  {
    station_code: "BL06",
    construction_id: "BL1",
    station_name_tw: "府中",
    station_name_en: "Fuzhong",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市板橋區縣民大道一段193號B1",
    lat: 25.008619,
    lon: 121.459409,
  },
  {
    station_code: "BL07",
    construction_id: "BL2",
    station_name_tw: "板橋",
    station_name_en: "Banqiao",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市板橋區站前路5號B1",
    lat: 25.013618,
    lon: 121.462302,
  },
  {
    station_code: "BL08",
    construction_id: "BL3",
    station_name_tw: "新埔",
    station_name_en: "Xinpu",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市板橋區民生路三段2號B1",
    lat: 25.023738,
    lon: 121.468361,
  },
  {
    station_code: "BL09",
    construction_id: "BL4",
    station_name_tw: "江子翠",
    station_name_en: "Jianzicui",
    line_code: "BL",
    line_name: "板南線",
    address: "新北市板橋區文化路二段296號B1",
    lat: 25.03001,
    lon: 121.47239,
  },
  {
    station_code: "BL10",
    construction_id: "BL5",
    station_name_tw: "龍山寺",
    station_name_en: "Longshan Temple",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市萬華區西園路一段153號",
    lat: 25.03528,
    lon: 121.499826,
  },
  {
    station_code: "BL11",
    construction_id: "BL6",
    station_name_tw: "西門",
    station_name_en: "Ximen",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市中正區寶慶路32之1號B1",
    lat: 25.04209,
    lon: 121.508303,
  },
  {
    station_code: "BL12",
    construction_id: "BL7",
    station_name_tw: "台北車站",
    station_name_en: "Taipei Main Station",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市中正區忠孝西路一段49號",
    lat: 25.046255,
    lon: 121.517532,
  },
  {
    station_code: "BL13",
    construction_id: "BL8",
    station_name_tw: "善導寺",
    station_name_en: "Shandao Temple",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市中正區忠孝東路一段58號B1",
    lat: 25.044823,
    lon: 121.523208,
  },
  {
    station_code: "BL14",
    construction_id: "BL9",
    station_name_tw: "忠孝新生",
    station_name_en: "Zhongxiao Xinsheng",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市大安區新生南路一段67號",
    lat: 25.042356,
    lon: 121.532905,
  },
  {
    station_code: "BL15",
    construction_id: "BL10",
    station_name_tw: "忠孝復興",
    station_name_en: "Zhongxiao Fuxing",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市大安區忠孝東路四段47號",
    lat: 25.041629,
    lon: 121.543767,
  },
  {
    station_code: "BL16",
    construction_id: "BL11",
    station_name_tw: "忠孝敦化",
    station_name_en: "Zhongxiao Dunhua",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市大安區忠孝東路四段182號",
    lat: 25.041478,
    lon: 121.551098,
  },
  {
    station_code: "BL17",
    construction_id: "BL12",
    station_name_tw: "國父紀念館",
    station_name_en: "Sun Yat-Sen Memorial Hall",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市信義區忠孝東路四段400號",
    lat: 25.041349,
    lon: 121.557802,
  },
  {
    station_code: "BL18",
    construction_id: "BL13",
    station_name_tw: "市政府",
    station_name_en: "Taipei City Hall",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市信義區忠孝東路五段2號",
    lat: 25.041171,
    lon: 121.565228,
  },
  {
    station_code: "BL19",
    construction_id: "BL14",
    station_name_tw: "永春",
    station_name_en: "Yongchun",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市信義區忠孝東路五段455號",
    lat: 25.040859,
    lon: 121.576293,
  },
  {
    station_code: "BL20",
    construction_id: "BL15",
    station_name_tw: "後山埤",
    station_name_en: "Houshanpi",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市南港區忠孝東路六段2號",
    lat: 25.045055,
    lon: 121.582522,
  },
  {
    station_code: "BL21",
    construction_id: "BL16",
    station_name_tw: "昆陽",
    station_name_en: "Kunyang",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市南港區忠孝東路六段451號",
    lat: 25.050461,
    lon: 121.593268,
  },
  {
    station_code: "BL22",
    construction_id: "BL17",
    station_name_tw: "南港",
    station_name_en: "Nangang",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市南港區忠孝東路七段380號",
    lat: 25.052116,
    lon: 121.606686,
  },
  {
    station_code: "BL23",
    construction_id: "BL18",
    station_name_tw: "南港展覽館",
    station_name_en: "Taipei Nangang Exhibition Center",
    line_code: "BL",
    line_name: "板南線",
    address: "台北市南港區研究院路一段1號",
    lat: 25.055288,
    lon: 121.6175001,
  },
  {
    station_code: "Y07",
    construction_id: "Y6",
    station_name_tw: "大坪林",
    station_name_en: "Dapinglin",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市新店區北新路三段190號",
    lat: 24.982899,
    lon: 121.541352,
  },
  {
    station_code: "Y08",
    construction_id: "Y7",
    station_name_tw: "十四張",
    station_name_en: "Shisizhang",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市新店區民權路282號",
    lat: 24.9829302,
    lon: 121.5340099,
  },
  {
    station_code: "Y09",
    construction_id: "Y8",
    station_name_tw: "秀朗橋",
    station_name_en: "Xiulang Bridge",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區景平路2號",
    lat: 24.9905493,
    lon: 121.5250505,
  },
  {
    station_code: "Y10",
    construction_id: "Y9",
    station_name_tw: "景平",
    station_name_en: "Jingping",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區景平路121號",
    lat: 24.9919681,
    lon: 121.5165532,
  },
  {
    station_code: "Y11",
    construction_id: "Y10",
    station_name_tw: "景安",
    station_name_en: "Jingan",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區景平路486號",
    lat: 24.993905,
    lon: 121.505113,
  },
  {
    station_code: "Y12",
    construction_id: "Y11",
    station_name_tw: "中和",
    station_name_en: "Zhonghe",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區中山路二段271號",
    lat: 25.0019806,
    lon: 121.4960519,
  },
  {
    station_code: "Y13",
    construction_id: "Y12",
    station_name_tw: "橋和",
    station_name_en: "Qiaohe",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區板南路430號",
    lat: 25.0044131,
    lon: 121.4904608,
  },
  {
    station_code: "Y14",
    construction_id: "Y13",
    station_name_tw: "中原",
    station_name_en: "Zhongyuan",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市中和區板南路510號",
    lat: 25.0084104,
    lon: 121.4841593,
  },
  {
    station_code: "Y15",
    construction_id: "Y14",
    station_name_tw: "板新",
    station_name_en: "Banxin",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市板橋區板新路109號",
    lat: 25.0144914,
    lon: 121.4722124,
  },
  {
    station_code: "Y16",
    construction_id: "Y15",
    station_name_tw: "板橋",
    station_name_en: "Banqiao",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市板橋區新站路66號",
    lat: 25.015156,
    lon: 121.464825,
  },
  {
    station_code: "Y17",
    construction_id: "Y16",
    station_name_tw: "新埔民生",
    station_name_en: "Xinpu Minsheng",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市板橋區民生路三段70號",
    lat: 25.026125,
    lon: 121.466839,
  },
  {
    station_code: "Y18",
    construction_id: "Y17",
    station_name_tw: "頭前庄",
    station_name_en: "Touqianzhuang",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市新莊區思源路20號",
    lat: 25.039735,
    lon: 121.461655,
  },
  {
    station_code: "Y19",
    construction_id: "Y18",
    station_name_tw: "幸福",
    station_name_en: "Xingfu",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市新莊區思源路292號",
    lat: 25.050282,
    lon: 121.460216,
  },
  {
    station_code: "Y20",
    construction_id: "Y19",
    station_name_tw: "新北產業園區",
    station_name_en: "New Taipei Industrial Park",
    line_code: "Y",
    line_name: "環狀線",
    address: "新北市新莊區五工路35號",
    lat: 25.0615483,
    lon: 121.4599257,
  },
  {
    station_code: "A1",
    construction_id: "A1",
    station_name_tw: "台北車站",
    station_name_en: "Taipei Main Station",
    line_code: "A",
    line_name: "機場線",
    address: "台北市中正區鄭州路8號",
    lat: 25.0491868,
    lon: 121.515245,
  },
  {
    station_code: "A2",
    construction_id: "A2",
    station_name_tw: "三重",
    station_name_en: "Sanchong",
    line_code: "A",
    line_name: "機場線",
    address: "新北市三重區捷運路36號",
    lat: 25.0552963,
    lon: 121.4813901,
  },
  {
    station_code: "A3",
    construction_id: "A3",
    station_name_tw: "新北產業園區",
    station_name_en: "New Taipei Industrial Park",
    line_code: "A",
    line_name: "機場線",
    address: "新北市新莊區五工路37號",
    lat: 25.061716,
    lon: 121.4567028,
  },
  {
    station_code: "A4",
    construction_id: "A4",
    station_name_tw: "新莊副都心",
    station_name_en: "Xinzhuang Fuduxin",
    line_code: "A",
    line_name: "機場線",
    address: "新北市新莊區新北大道四段188號",
    lat: 25.0591305,
    lon: 121.4434732,
  },
  {
    station_code: "A5",
    construction_id: "A5",
    station_name_tw: "泰山",
    station_name_en: "Taishan",
    line_code: "A",
    line_name: "機場線",
    address: "新北市泰山區新北大道四段431號",
    lat: 25.0532726,
    lon: 121.4373407,
  },
  {
    station_code: "A6",
    construction_id: "A6",
    station_name_tw: "泰山貴和",
    station_name_en: "Taishan Guihe",
    line_code: "A",
    line_name: "機場線",
    address: "新北市泰山區新北大道六段460號",
    lat: 25.0334752,
    lon: 121.4201443,
  },
  {
    station_code: "A7",
    construction_id: "A7",
    station_name_tw: "體育大學",
    station_name_en: "National Taiwan Sport University",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市龜山區文化一路688號",
    lat: 25.041246,
    lon: 121.3832453,
  },
  {
    station_code: "A8",
    construction_id: "A8",
    station_name_tw: "長庚醫院",
    station_name_en: "Chang Gung Memorial Hospital",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市龜山區文化一路6號",
    lat: 25.0604363,
    lon: 121.3679403,
  },
  {
    station_code: "A9",
    construction_id: "A9",
    station_name_tw: "林口",
    station_name_en: "Linkou",
    line_code: "A",
    line_name: "機場線",
    address: "新北市林口區八德路290號",
    lat: 25.0665023,
    lon: 121.3590943,
  },
  {
    station_code: "A10",
    construction_id: "A10",
    station_name_tw: "山鼻",
    station_name_en: "Shanbi",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市蘆竹區南山路三段155號",
    lat: 25.0803514,
    lon: 121.2834868,
  },
  {
    station_code: "A11",
    construction_id: "A11",
    station_name_tw: "坑口",
    station_name_en: "Kengkou",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市蘆竹區坑菓路460號",
    lat: 25.086516,
    lon: 121.2642601,
  },
  {
    station_code: "A12",
    construction_id: "A12",
    station_name_tw: "機場第一航廈",
    station_name_en: "Airport Terminal 1",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區航站南路17之1號B1",
    lat: 25.081385,
    lon: 121.2353293,
  },
  {
    station_code: "A13",
    construction_id: "A13",
    station_name_tw: "機場第二航廈",
    station_name_en: "Airport Terminal 2",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區航站南路9之1號B2",
    lat: 25.0772703,
    lon: 121.230063,
  },
  {
    station_code: "A14a",
    construction_id: "A14a",
    station_name_tw: "機場旅館",
    station_name_en: "Airport Hotel",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區航站南路1之2號",
    lat: 25.0692598,
    lon: 121.2187503,
  },
  {
    station_code: "A15",
    construction_id: "A15",
    station_name_tw: "大園",
    station_name_en: "Dayuan",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區橫湳一路50號",
    lat: 25.0560465,
    lon: 121.2082923,
  },
  {
    station_code: "A16",
    construction_id: "A16",
    station_name_tw: "橫山",
    station_name_en: "Hengshan",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區大竹南路1180號",
    lat: 25.0460284,
    lon: 121.2045017,
  },
  {
    station_code: "A17",
    construction_id: "A17",
    station_name_tw: "領航",
    station_name_en: "Linghang",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市大園區領航北路四段351號",
    lat: 25.0189695,
    lon: 121.2136874,
  },
  {
    station_code: "A18",
    construction_id: "A18",
    station_name_tw: "高鐵桃園站",
    station_name_en: "Taoyuan HSR Station",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市中壢區高鐵北路一段5號",
    lat: 25.013762,
    lon: 121.2119733,
  },
  {
    station_code: "A19",
    construction_id: "A19",
    station_name_tw: "桃園體育園區",
    station_name_en: "Taoyuan Sports Park",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市中壢區高鐵南路二段350號",
    lat: 25.001996,
    lon: 121.2013063,
  },
  {
    station_code: "A20",
    construction_id: "A20",
    station_name_tw: "興南",
    station_name_en: "Xingnan",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市中壢區中豐北路一段685號",
    lat: 24.9802492,
    lon: 121.2140726,
  },
  {
    station_code: "A21",
    construction_id: "A21",
    station_name_tw: "環北",
    station_name_en: "Huanbei",
    line_code: "A",
    line_name: "機場線",
    address: "桃園市中壢區中豐北路一段26號",
    lat: 24.967381,
    lon: 121.2197492,
  },
];

Object.freeze(mrtStationData);
