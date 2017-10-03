(function(){
    'use strict';
    const kakusu = {
        1: '一ノ乙くしつのへフヘレっー',
        2: '二七八九十丁乂乃了人入几刀力匕卜又いうアイこカクコスセソてとトナニヌひハヒめマムメヤユりるろラリルワんンぺプペぃぅァィャュ',
        3: '三下上丈万丸久乞也于亡凡刃勺廿千叉口土士夕大女子寸小山川工己已巳巾干弓あえウエオかけキケさすせそサシちタチツテにみもミモやゆよヨられロわゐヱヲぐじづべぴブベパピぁぇゃゅょゥェォョッ',
        4: '五六丑不与中丹之予云互井亢介仇今什仁仍仄仏仂允元内公冗凶刈切分勿匂匁化匹午卅升厄友及収反壬夭夬太天夫孔少尤尹尺屯巴幻弌引弔心戈戸手才支文斗斤方无日曰月木欠止比毛氏气水火爪父爻片牙牛犬王勾おきたぬねネはふホまむをヰごでどびガグゴズゼゾドバビぉ',
        5: '四丘且世丙主丼乎乍乏以仔仕仙他代仗付令兄充冊册冬凧凹出凸刊加功包北半占卯去右可句叫叶古叩司史只叱台叮召囚外央失夲奴孕尻尼巧巨左市布平幼弍弁弘弗必戊扎斥旦札末未本正母民永氷玄玉瓜瓦甘生用田由甲申疋白皮皿目矛矢石示禾穴立なほゑがげざずぜぞぢぱぷヴギゲザジダヂヅデポ它叨叭卉卮夘卉叺圦',
        6: '丞亙亘亦亥交伊价企伎休仰件伍任仲伐伏兇光先兆全共再冲冰凩凪刑刎列劣匡匠卍印危各合吉吃向后吐同名吏因回圭在地夙多夷好奸妁如妄妃字存安宇守宅寺尖尽屹州帆年庄式弛戌戍戎打收旭早旨旬曳曲有机朽朱朶朴次此死求汁汀汎灰灯牝牟犯百竹米糸缶羊羽老考而耒氾耳聿肉臣自至臼舌舟艮色血行衣西氾吋舛伉伜冱ぎだばぶぽボ冴并冱幵吁圷圸夛吋舛吊伉伜决匈吁圷圸',
        7: '串乱些亨位佑佚何伽估佐作伺似伸佗但住佇低佃伯伴佛体余伶克兌兎免兵况冶冷初判別利劫助劭努却邵即卵告含吸吟君吾呉吼吹呈呑呆否吻吝呂囮国困坑坎均坐坊坂壮壯声夾妖妓妊妥妨妙孝孜孚宏完宋尨局尿屁尾岐岑巡巫希床序庇延廷弄弟形役彷忌志忍忖忘忙我戒成托攸改攻宍旱更杆杏ぼ材杉束村杖杜杞杓李杣杢歩毎汚江汗汝汐池灸災灼牡牢甫男町矣私秀禿究系良見角言谷豆豕貝赤走足身車辛辰邑酉里扞夸吠圻址坏汢犲汕杁朸朷扛扣扠吽呀吩呎吭吮釆弃曵杠杙杤汞瓧帋甬甼疔皀皃竍糺吽呀刪吭吮妣肓',
        8: '披並乳事亞亜享京依侑佳侃佶供侍使侈佻佩來来例児兒兩両其具典冐冽凭函刮券刻刷刹刺制到効劾協卒卓卑卦巻卷卸取受叔咏咎和呼呱周呪呻咀咄咆味命固坩坤垂坦坡坪夜奄奇奈奉委姑始姉姓妻妾妹季孤孟宛宜官宗宕宙定屆届尚居屈岳岡岬岸岩岱帖帑帛幸庚底店府弦弩征徂彼往快忽忠念忿或戔所房戻抑抗技抄扱承折抒投把扶批政放斧於易昊昂昏昆昌昇昔旻明旺服朋杭果枝枕杵松析東杷杯枚板林枉枡枠欣武殀毒汽汲決沙汰沓沈沖沌沛沐没沃汪炎炊炙炉争爭爬牀版物牧狂状狃玖瓩的盂直盲知祀社穹空竺糾肌肋臥臾舎虎軋辷采金長門阜雨青非忻忤忸忱忰扼抂抉找抓抖抃抔沂沍沚沁汾汨汳沒泛犹狆狄姐佼咋岨妬枇侏侘佰佯劼劵呵呟呷咐岻岶岼岷峅彿怫怦怏怺拗拑抻拈拌拊拉抬杲徃杼杪枌枋枦枅矼秉竏籵杳杰枩隶隹廼扮庖兔刳坿垉侫垈狎氛廸弭忝昃岾帙舍炒',
        9: '拜拔赴乗亭亮俄係侠侯侵信俊促俗俘保侮便俚俐侶俤兪冑冒冠剋削前則剃勅勁勉勃勇匍南卻厚厘叙叛哀咽咳咬咢咸哄哉咨咲咤品圀垣型垢奐奎契奏奔威姻姦姜妍姫姿姥宥客室宣封屋屍屎屏峙峠巷帥帝幽度廻建弧彖彦徊後待律怡怨急怪怯思性怠怛怒怖怜押拐拒拘招拓拙拆抽抵拝抛抱拍抜抹拂払拇故施映昨是昶春星昧昭昴柚架柑柩枸枯査柴柵柿柔柊染柝柱柄某柳栂栃柾歪殃殆段油泄泳沿河泣況沽注沼泉泰治泥波泡泊沫法泌沸炬炭炳牲狐狗狛玩甚畏界畑疫癸皆皇盈盃盆看相盾省眉眇研砂砌祈祇祉禹科秋秒穽穿突窃竿粂籾紀紅紂約罕美耐耶肛肝肖肘肚致芋芒芍虐虹衍者表要計訂訃貞負赳軌軍込辻酋重閂面革韭音頁風飛食首香狙怙怐怩怕泱泓沮沱沾沺泯泙泪狒衫娃姶虻粁柁柘柏毘俣姪俔俟俎俑俥剄剌哇咥哈哂咾哘咯垓垠垳垤垪垰竒姚孩峇庠徇畋斫昵昜枷柯枴柬枳柤柞柢柮枹柎柆柧殄畍畊畉畆眈砒竕竓秕笂韋爰爼紆缸亟矧胥矜禺',
        10: '峡效恒神眞併洵皐乘椅個倖倨倶倦候倥倉修借倒耿倬値俳倍倣俯俵俸倫倭兼冤冥党准凄凋凉凍凌剛剥剖匪原叟唇員哥哮唆哨唐哲唄哺哩圃埃城埋夏娥娯娑娠娜娘娩孫宴家害宮宰宸宵容射屑展峨峽峻峭島峯峰差師席庫座庭弱徑徐徒恚恩恪恰恭恐恢恍恆恨恣恃恤恂恕息恥恬恙恋扇按拷挌拱括拳拶指拾拭持挑料旆旁旅晏晃時晋晉晒書朔朕案桁校格核栞桓桂根栽桑桎栖栴栓桃株桐栗殊殉殷氣気洩洸活洪洒洲津洗洞派洋洛流洌烏烝烙烈特狡狩珂珊珍珀玲畜畔畝留畠疳疵疲疾疹疽疼疱病症益眩真眠矩砦砥砧破砲祐祠神祝祟祖祕秘祓秦秤称租秩秣竚竝笈笏笊笑粉粍級紘紗索紙純素納紐紡紊紛紋缺翁翅耄耕耗耽育肴肩股肯肱肢肺肪肥胚臭舐航舫般芽芥芹花芝芯芳芙芬虔蚤蚊袁衿衾衽衰衷袂記訓訊討託豈豹貢財起躬軒辱迂迄迅辿酒酌酎配針釘釜閃隼隻馬骨高鬼竜径苅芭芫芟祢恊恫扁拮挧挂拯拵洟洶洫洽洙洳狢狠珈玳珎玻俺栢桔哦唏唔哽哭倅俶倡倩俾們峺峪拿挈桀桍栲栫桙档氤眦眛砠祗祚秧秬笄笋粃粐紜紕羔釡釛髟埆埔訖訐訌砺俛倚倔倪盍桧站笆苅唳圄尅屓窄埖娚宦',
        11: '挟狭狹圈髙紺祥晝粘朗晨晢昼晩曹曼望朗械梗梟梧梏梱梓梢梯梃条條桶梅梶梵梨梁欷欲殺毫毬海浩浣浸浚消渉涎涕浮浦涌浴浪浬焉烹烽爽牽犀狼狸率珠班瓶甜産畦畢略痕痔痒眼眷眺眸祭祥票移窓窒竟章笙笥笞第笛符笠笹粗粕粒絃細紫紳終紹組絆紬累羞罠習翌聊胃胤胡胎胆背胞胖舷船舵舶英苑茄苦若苫苔苺苧茅范苹苗茂處処蛇蛆蛉衒術袈袖袋被袢規訛許訣訟設訪豚貨貫責貪販貧赦趾軟近迎返迚邪那邦酔野釦釧釣閉雀雪雫頃頂飢魚鳥鹿麦麥麻茉乾偉仮假偕健偶側停偲偵偸偏兜冨凰剰副勘動務勗勒匙區区匿卿参參唖唯啓商唱唾啄問圏國基堅堀執埴堆堂培埠域埜壺婉婚娶婆婢婦孰寅寄寇宿寂密尉将將専專尋崖崎崔崇崩崚巣帷常帯帶帳帽庵康庶庸強張彗彩彫彪彬御従從得徘徠悠悦悍悔患悟悉悄悛悌悖戚扈挨挾挫捉振挺捗捕挽教救敍敕敗敏斌斛斜斬断旋族既晧晦晟邨苛苡苣苟苒苴苳苻苞茆苜苙珪捐捍捏捩涓浤浹浙涅狷珥珮珞袗袒袮袙袍唸捌狽悁悃悚悒悧悋埼娼蛎啜啅啖弸梹桴梠梺竡笳笘笵笨笶桿梭珱蛋皎盖盒硅窕絅絋',
        12: '黑﨑棧淨盜貳傚傑傘傍備凱剴割創勝勞博喀喝喜喚喬喫喧喉喪喘善單単啼喋喩喇喰囲圍境堪堝堯尭場堤報堡壹壱壻奢奠媛婿媒媚寒寓富尊就属屠嵐巽幄幅幇幾廁弼徨循復悪惡惟悸恵惠惓惑惚悴情悽惜惣悼惇悲悶戟扉掩掬据掘掛捲控採掃捨掌授推捷接措掟探捻排捧掠敢散敞敦敝斑斐斯景晶晴皙晰智普最曽替期朝棄棊棋棘棺棍桟森植棲椒棹椎棟棒棚棉椋椀欺欽款残殘殖殻淫液淵涯混深淑淳清浄浅淺淡添淀淪淋涼涙焔焦然焚無為爲牌犂猛球現理琉甥異畫番疎疏痙痣痛痘痢登發発盛盗短硬硯硝硫稀税稍程竣童筋筺筈策筍答筑筒等筆筏粧粥粟絞給絖結絢袴絲絨絶統絡着翔胸脅脇脂脆脊胴能脈胱舒舜荒荊草茨荀茸茜茶茫虚虜蛙蛤蛔蛭衆街袿裁裂裄視觜觝詐詞診証詔訴註評詈象貂賀貴貮貰貸貯貼買費賁貿越超距跛躰軫軸迦述迪迭迫邸酣酢量鈞鈔鈍開間閑閏閔防阪雄雅雁雇集雲靱項須順馭馮黄黍黒労画捺雰弐祁阨阮阯苓邯邱荏茵茴茖茲茱茹荐荅茯茗茘袷堺淘珸猗猊猜猖猝琅淇淦涸淆淬淞淌淒淅淙淤淕淮渮淹渕弐渊涵覗硲啾喞喃喨堙棣椥棠棯椨椪椚絏絣翕耋聒竢竦筐筌筅筬粤粭粢粫粡粨絳絎絮掖掎掀掫捶掏掉掵捫',
        13: '奧碎莊挿裝甁熙琳亂亶傲僅傾債催傷伝傳傭働勤勢募戮嗚嗅嗟嗜嗣嗇圓園塚塊塑塞塔填塗塩奥媼嫁嫌媾嫉嫋孳嵯嵩幌幹廊廉彙徭微愛意愕感愚惶想愁惹惻惺惰悩愉愈握揖援揮揆換掲插揃提描揚敬斟新暗暈暎暇暉暑暖會楷極業楢楫楯楔楚楠椿楓椰楊楡歳毀殿渥游温港渇減渠渙湖渾湘渚測湊湯湛渡湃渺湎渝渦湧煙煕煌煥煮照煎煖煤煩煉爺牒猶献猪猫猷猥琴琥琢琵琶當畷痴盟睨睡睫督睥睦矮碁砕碇碑碗禁稟祿禄禽稔稚稠稗稜窟筵筧筮粳竪粮經絹義羣群羨耡聖聘肆肅粛脚脛脩脣脱舅辞艇艀荷茎莞荘荻莫莉号號虞蛾蜆蛸蜀蜂衙裔裙裟装補裕裏裡解詠詭詰誇該話詣詩試詳詢詮誅賄資賊賃跪跨跡跳路較載辟農逆逅迹送退迺逃追迷郁郊酬酩酪鉞鉛鉉鈿鋸鉋鉢鉦鈴阿阻附雌雉雍電雹雷零靖靴韮頑頌頓頒預飲飯馴駄馳鳩鼎鼓鼠鼡円脳会当経陀陂莓莅莚莪莟莢莖茣莎莇荼莵荳荵莠莨飭渭湮湲湟渣湫渫湶湍渟渤溂碓嘩碍褐鈷碕賈飩飫楕塘椴楳塙蓑賂詫傴僉僂剿剽勣勦勠匯嗄鉗鉅鉤鉈鉐鉚瘁痰痺痲痳',
        14: '臺與舞萎菊菌菫華菓菅菰菖菜萃菁莽菩莱菱蜴蜻蜥蜘蜜裾裳製裸褄誘誡誥語誨誤誌誦誠誓説誕認豪貌賑賓赫踊軽輕輔辣逕這造逡逝逍速逐逞逓途透通逗逢連郡郎酵酷酸銚銀銃銑銓銅鉾銘閣閤閥降限陋需鞄鞆韶頗領颯颱飴飼飾飽駁髣魁魂鳶鳳鳴鼻図栄斉齊僞渓奬粋搜搭塀搖綠郞榛萌僖偽僑僥像僧僣僮僕僚兢劃厭嘔嘉嘘嘗嗽嘆團団圖塾塹塵墓寿壽夥夢奨奪嫗嫡孵寡察實実寝寢寧寞寥対對屡嶋幕廓彰慇愧愿愴慌慈慎愼愬態慄截揺携搓掻捜搾損搦搏搬敲斡旗暢暝榮榎槐構槓槍槌槙槇榧榔榊歌溢滉滑溪源溝滄滋準滔滌溺滅溥溶溜熊爾犒猿獄猾獅瑛瑕瑚瑟瑞瑙甃疑瘍監盡睾碩碧禍禊禎福種稱窪端箇箕管箝筝算箒箋箔箙粹精粽糀綱綺緊綵綽綬綜綻綴網緋綿維綸綾緑罫罪置翠翡聚聞肇腋腔腎脹腓脾腐腑腕陌陏郤郢郛菽菘萓搆搶搗搨琿尓菟菴菎萋菷萇菠菲萍萢萠菻睹碣碵碪碯窩竭竰箘箟箍箜箚箏銖銛鋩萄',
        15: '億價価儀倹儉僻凛劇剣劍劈劉嘴嘯嘲嘸増堕墜墳墨嬉嬌寛審写冩寮層履嶢幟幡幣広廣厰廚廛廃廢廟弊弾彈影徴徹徳慰憂慨慷慣慧慶慳惨慙慕慢慾慮掴摯摺摘摸摶摩數数敵敷暫暴暮概楽樂槻槿槽樟樞樗樋標模様樣樓欧歐歎殴毆毅演漑漢漁漕漬漆滲漿漸漲滞滴漠漫満滿漂漾漣漏熟熱瑩瑳瑠畿瘡痩瘤皚皺盤瞑確磁磅磐磊稼稾稿稽穀稷稲稻窯窮篁箴箱節箭箸範篇糊緯縁緘緩諸線緻締編緬練署罰翫翦翩腰腫腥腦腸腹腺興舗葦葉葛葵萱葬萩葺著董萬葡落葎蝦蝗蝸蝕蝶蝠蝙衝褌褒複誼課褝諏諄誰請談調諂誹諒論賢賛賜質賞賤賎賣売賠賦趣踐践踏輝輜輩輪輌輦逸週進逮郵郭部醋醇鋭鋤鋒鋲閲院陣除陛震霆霄霈鞍鞏頤餌餅養駕駒駐髭髪髴魄魅魯鴉鴈黎歯齒楼枢慘寫緒緖醉增墮滯德凜漱瑶陜陞陝陟陦萸葭萪萼蒄葷葫葮蒂葩葆葯葹萵葢漉滬滸滾漓滷瑯瑰瑣瑪慫憇舖醂鋏銹銷錺錵閭駟駛駝駘鞋鞐頡餃噂樒樌樢磑磆磋磔碾碼禝穃槨樛槹瑤褊褓',
        16: '儕儘儒儔冀凝劒劑勲叡曖噫器噤噪噬噴噺噸圜墾壇壁奮学學導嶮彊憙憩憬憲憧憔憎憚憊憫憑憮憤憐戦戰撮撒撰撞橈撤撚播撲撫整曄曉暁曇暸暦機橘樺横橋橇樹蘂樵樽橙樫潰潔渋澁潤潟潜潭澄潮澎溌潦燕熹熾焼燃燈燉燐燎瑾璃瓢甍瘻盥盧瞞磧磨禦頴積穆窺簔篩篠築篤糖橫陷勳螢靜都默賴歴澪縊縞縣縛罵罷翰膏膈腿膀膊舘艙艘蓋蒼蓍蒔蒐蓁蒸蓆蓄蒲蒙蓉蛍融衞衡褞褥親覧謂謁諧諳諤諌諱諺諮諾諦諜諷謀諭諛豬豫賭頼踵蹄踰躾輯輸輻辨違遊運遇過遑遂達道遁逼遍都醒醍鋼錦錚錯錆錐錫錢銭錘錠録閻陰陥陲陶陳陪陸陵隷霓霑霏霖静鞘頸頬頭頻餓餐餘骸骼鮎鮒鴨鴛黙龍龜剤亀醐蒜澆潺潸潯潛澂潼潘澑濆潴澗燗燒燔駭駮駱駲駢諫諠諢橄橲樶橸橢橦撕撓撥撩撈衛',
        17: '館鄕検懇縱穗擁隆遥鞠蔡優償儡励勵嚇嚀圧壓壕嬰嬬孺嶽嶼嶺弥彌徽燠懌応應憶憾懃戯擒拠據撼撃操擇択擅担擔斂檐檜檎檄檢橿檣檀歛氈激沢澤濁濃澱営營燥燦燭燧燵独獨癇癌癈療瞰瞬瞳瞭瞥矯磯礁禧禅禪穂簀糠篷糟糞縮縦績総總縹繁縫縷罹羲翳聳聲聰聨膠膝膣膓膜膚臨艱蔭蔘蔗蔬蔦蔓蓬蓼蓮蟄螺蟐襁襄嬢襃褸謡謠講謔謙謝謄謗謎豁谿購賽趨蹇蹉蹈輿轄遙遠遣遡遜遞郷饂醜鍋鍵鍔鍼鐘鍬鍛鍮錨錬闇闊闌階隅隊陽隆隈雖霙霞霜麹韓颶館餞馘駿鮫鮭鮨鮮鴻鵄黏黛點鼾齋点斎聡蔚鮟鮠鮴鵁鴿鴾賺賻蹊蹌褻鞜顆褶蔆蓿蓴蔟蔕蔔',
        18: '顏遲鎮癖儲叢噛塁壘懦戴擱擬挙擧擦擡擢斷曜朦曙檻櫃櫂歸帰濠濶湿濕濡済濟涛濤濯濘浜濱濛濫燿爵獲獰猟環甕癒瞿瞼礎禮穢簡簣簪箪糧繍織繕繙翻翼職膳膨舊蕊蕉蕩蕃蔽蕨蝉蟲覆觴謳謹謦謬豐豊贄贅蹟蹕躯轉転遭遮適遅遯鄙醫医醤鎧鎖鎭鎚鎔鎌闕隕隔隙鶏雙雑雜雛鞭額顎顔題馥騎魏鯉鵞鵑鵠鵜麿鼬旧双礒櫁檸蕚蕀蕣蕘蕈蕁蕋蕕蕎蕪擽鬆蟯虫蟠襠覲繞繚礼',
        19: '薇蟹蟻蠅襖襟譏識證贊贈蹶蹴轍辭遺遵選遷遼鄰鏡鏃鏑鏤關際障難離霧靡韻願顛類鯨鯛鯱鯰鵲鶉鵬麗麓麒勧絵関穏穫蕗勸嚥饗壊壞壜寵寶廬懲拡擴擾擲攀曠覇櫛櫟櫓瀉涜濺瀑爆獸獣獵璽瓣疆祷穩簷簸簿簾繹繪繋繭繰縄繩臆膾膽膿臀臂膺艤艶薪薔蕭薛薦薙薄蕾瀋瀁薗鯵鯖騨曝鵡櫚殱瀏濾懴薀薤薈薑薊薨薜蕷薐鄭',
        20: '厳嚴壤壌孃宝懷懐懸朧瀞瀬瀝瀧滝爐鈩犠獻礦礬礫競藉籃繼纂繻辮羆羅耀臍艦藁薫藏蔵薯薩藍襦覚覺触觸議警譬譜躁躇邂遽還避邁釈釋鐙闡隣霰飄露饉馨騫騒騷闘鰐鰊黨齟齡継訳齢薰県瀨籍臧騰譯嚶獺鰕鰔鰉鰓鰌鰆鰈鐓鐃鐇鐐濳瀛瀚瀘瀟',
        21: '儷囃嚼囀屬巍攘桜櫻欅欄瀾爛瓏癪癩竈籘纈繊纎続續纏臘艪藝芸藪薮藤藩薬藥蠢蝋蠣譴護譽贐躊躍轟辯邇鐸鐡闢險険膸霸顧飜饌饒驅魔鰭鰯鶯鶴鷄龝穐誉鉄随駆隋隨鐵瀕迩籔籐籖繿纉殲囁囈藕藜',
        22: '儼巓嚢彎懿懼摂攝権權歓歡灌疊畳穰穣竊籠纜聽聴聾艫蘊藻蘇蘆芦襲襯覽讚讀贋贖轡轢邊鑑鑄鋳隱響驕鬚鱆鰻鱈鰹鴎齬読辺隠瓔讃藹蘓蘋藾藺蘢',
        23: '巖巌戀攣灑灘籤蘚蘭蠱襷讐變鑛顯顕驛駅驚驗験髓體鱒鱗鷲麟黴変鉱髄纖弯欒纓',
        24: '嘱攪癲臟艷蠶讒讓譲釀醸鑪靄靈靂顰鬪鷹鷺鹽鹸蚕霊罐臓贓攫撹',
        25: '鑵攬黌鼈靉躡臠籬鬣鑰釁顱糶纘蠻灣鹽廳欝覊黵鼉鼟齇齺齻龣䰐鱭鱰鱨鱴鸎鸑鸐鸋鸍鸒韉䪊䮽鑱鑲鑯鑭鬭觿讘讛䝄躢釂籭籩籮纚臡',
        26: '級讚黶鱶欖躪驥驢鑷鬮顴矚鱲蠶灎龥䲛鱵鸓䪍髗饞饟鑹靊䚕趲躧轥釄釃籰籯糳糷蠼',
        27: '黷鱸驤驩鑼鑾鑽顳鸖驦鬤鱷鸕䴏䪎飌靎讞讝讜讟躩釅䶵纝豓',
        28: '鸚鸛钁鑿纜漢検対象外欟黸龞鼺齽齼鸙麢饠钄钂雧䠱豔',
        29: '鬱驪爨鸜麷韊钃靍纞',
        30: '鸞驫鱺鸝',
        31: '灩',
        32: '籲龖',
        33: '麤龗鱻', 
        34: '䯂',
        35: '齾',
        36: '齉'
    };

    /**
    * 文字を渡すと画数を返す関数
    * @param {string} chr 文字
    * @return {number} 画数
    */
    function getKakusu(chr) {
        let key = null;
        for (key in kakusu) {
            if (kakusu[key].indexOf(chr) !== -1) {
                return Number(key);
            }
        }
        return null;
    }

    /**
    * 名前の文字列を渡すと総画数を返す関数
    * @param {string} userName ユーザーの名前
    * @return {string} 総画数
    */
    function assessment(userName) {
        // 全文字のコード番号を取得してそれを足し合わせる
        let total = 0;
        let n = 0;
        for (let i = 0; i < userName.length; i++) {
            n = getKakusu(userName[i]);
            if (!n) {
                n = 0;
            }
            total += n;
        }
        alert(total);
    }
    console.log(assessment('不知火'));
})();