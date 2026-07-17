const seasons = {
    spring: {
        label: '春',
        summary: '新しい始まりを感じる、やわらかな色の花が多い季節です。',
        flowers: [
            { name: '桜', reading: 'さくら', language: '精神美、優美な女性', feature: '淡い花色と短い開花期間が特徴。日本の門出の象徴。', origin: '散り際まで美しい姿や日本文化の美意識が由来。', trivia: 'ソメイヨシノの後に八重桜が楽しめる地域もあります。', color: '#f2a6b8' },
            { name: 'チューリップ', reading: 'ちゅーりっぷ', language: '思いやり、博愛', feature: 'カップ形の花姿と豊富な色が魅力。春の花壇の定番。', origin: '花の形がイスラムの頭巾「ターバン」に似ていることが由来。', trivia: '赤は「愛の告白」、黄色は「明るさ」など色別の意味もあります。', color: '#e95f5f' },
            { name: 'ネモフィラ', reading: 'ねもふぃら', language: '可憐、どこでも成功', feature: '澄んだ青い小花が一面に咲き、広大な青い絨毯を作ります。', origin: '属名はギリシャ語の「小さな森を愛する」に由来。', trivia: '英名では「Baby blue eyes（赤ちゃんの青い目）」と呼ばれます。', color: '#72a9d8' },
            { name: 'ピンクガーベラ', reading: 'ぴんくがーべら', language: '崇高美、思いやり', feature: '明るくやさしいピンク色で、整った花形が印象的。', origin: 'ガーベラ全体の前向きな印象に、ピンクの優しさが重なったもの。', trivia: '切り花では茎が水に傷みやすいため、浅めの水が長持ちのコツ。', color: '#df7da6' },
            { name: 'アルストロメリア', reading: 'あるすとろめりあ', language: '未来への憧れ、エキゾチック', feature: '花びらに美しい斑点模様があり、非常に花もちが良い。', origin: '南米原産で、現地を開拓した植物学者の名前に由来。', trivia: '別名は「インカのユリ」と呼ばれ、華やかな姿が人気です。', color: '#e47d58' },
            { name: 'ピンクバラ', reading: 'ぴんくばら', language: '感謝、上品', feature: 'やわらかな色合いで、母の日や誕生日ギフトに大人気。', origin: '赤いバラより穏やかで親しみやすい愛情を連想させることから。', trivia: '淡いピンクは「しとやかさ」、濃いピンクは「かわいらしさ」を表します。', color: '#d96b8d' },
            { name: '菜の花', reading: 'なのはな', language: '快活、明るい希望', feature: '一面を黄色く染め上げる、春の訪れを告げる代表的な花。', origin: '春の日差しを浴びて元気に、そして一斉に咲く姿から。', trivia: '見るだけでなく、お浸しなど春を味わう食材としても親しまれます。', color: '#ecd033' },
            { name: 'アネモネ', reading: 'あねもね', language: 'はけない恋、期待', feature: '中央が黒く、鮮やかで情熱的な赤や紫の花びらを持つ。', origin: 'ギリシャ語の「風」が語源で、風が吹くと咲くと言われたため。', trivia: '古代ギリシャでは、美少年アドニスの流した血から咲いたとされます。', color: '#c73c53' },
            { name: 'スイセン', reading: 'すいせん', language: '自己愛、うぬぼれ', feature: '白や黄色の清楚な花で、非常に甘く強い香りを放ちます。', origin: 'ギリシャ神話で水面に映る自分に恋した美少年ナルキッソスの物語から。', trivia: '葉がニラにそっくりですが、有毒植物なので誤食に注意が必要です。', color: '#f5e46c' },
            { name: 'ミモザ', reading: 'みもざ', language: '秘密の恋、友情', feature: '丸く黄色い小さなポンポンのような花が密集して咲く。', origin: 'ネイティブアメリカンが愛を告白する際に贈った習慣から。', trivia: '3月8日の「国際女性デー」には女性にミモザを贈る文化があります。', color: '#f3d14c' },
            { name: 'ヒヤシンス', reading: 'ひやしんす', language: 'スポーツ、ゲーム、控えめな愛', feature: '小さな花がぶどうの房のように縦にたくさん集まって咲く。', origin: 'ギリシャ神話の円盤投げで命を落とした少年ヒュアキントスから。', trivia: '水耕栽培が有名で、ガラス瓶の中で根が伸びる様子を観察できます。', color: '#688ec9' },
            { name: 'スズラン', reading: 'すずらん', language: '再び幸せが訪れる、純粋', feature: '白い鈴のような形の小さな花が、うつむき加減に並んで咲く。', origin: 'ヨーロッパで春の訪れとともにハッピーを運ぶ花とされることから。', trivia: 'フランスでは5月1日に大切な人にスズランを贈る風習があります。', color: '#edf2f4' },
            { name: 'ラナンキュラス', reading: 'らなんきゅらす', language: 'とても魅力的、晴れやかな魅力', feature: '薄い紙を何重にも重ねたような、ドレスのように豪華な花びら。', origin: '葉の形がカエルの足に似ており、湿地に生息していたため（ラナ＝カエル）。', trivia: '開花すると手のひらサイズほどに大きく膨らむのが特徴です。', color: '#e86a5a' },
            { name: 'パンジー', reading: 'ぱんじー', language: 'もの思い、私を思って', feature: '人の顔のようにも見える多彩な斑紋があり、寒さにも強い。', origin: 'フランス語の「パンセ（思想・思考）」が語源で、花が思索する顔に見えるため。', trivia: '花が小ぶりなものは「ビオラ」と呼ばれ、区別されています。', color: '#7b4fa8' },
            { name: 'シバザクラ', reading: 'しばざくら', language: '合意、一致、一筋の希望', feature: '地面を這うように広がり、サクラに似た小さな花で埋め尽くす。', origin: '芝生のように広がり、桜のような花を咲かせる性質から。', trivia: '花の数が多いため、満開時は文字通り花のカーペットになります。', color: '#e582af' }
        ]
    },
    summer: {
        label: '夏',
        summary: '強い日差しに映える、元気で鮮やかな花が目立つ季節です。',
        flowers: [
            { name: 'ひまわり', reading: 'ひまわり', language: 'あなただけを見つめる、憧れ', feature: '太陽を追いかけるように大きな黄色い花を咲かせる夏の象徴。', origin: '花が太陽の動きに合わせて回るという信仰から。', trivia: '実は大きく成長したひまわりの花は、東を向いたまま動きません。', color: '#f0bd35' },
            { name: 'あじさい', reading: 'あじさい', language: '移り気、辛抱強さ', feature: '梅雨時に青や紫、ピンクなど土壌の酸性度で色を変えて咲く。', origin: '花の色が次々と変化していく不思議な性質が由来。', trivia: '花びらに見える部分は「ガク（装飾花）」で、本当の花は中心の粒です。', color: '#8f9fd6' },
            { name: '朝顔', reading: 'あさがお', language: '愛情、固い絆', feature: 'ラッパ形の花で、夏の朝に咲いて昼にはしぼむ一日花。', origin: 'つるをしっかりと支柱に巻きつける強い結びつきから。', trivia: '江戸時代に大ブームが起き、珍しい形の「変化朝顔」が作られました。', color: '#5d6ec7' },
            { name: 'ユリ', reading: 'ゆり', language: '純潔、威厳', feature: '大輪で優美な花を咲かせ、周囲に強い芳香を漂わせる。', origin: '茎が細く花が大きいため、風に「揺れる」様子から「ゆり」に。', trivia: '白いユリは聖母マリアの象徴とされ、キリスト教でも重宝されます。', color: '#f0efe6' },
            { name: 'トルコキキョウ', reading: 'とるこききょう', language: '優美、すがすがしい美しさ', feature: 'フリルのような上品な花びら。結婚式のブーケの定番。', origin: '諸説ありますが、花の形がトルコ人のターバンに似ているためとも。', trivia: '名前に「トルコ」とありますが、原産地は北アメリカです。', color: '#9b83c9' },
            { name: 'ベルガモット', reading: 'べるがもっと', language: 'やわらかな心、感受性', feature: 'たいまつの炎のような形の、赤や紫の個性的なハーブの花。', origin: '柑橘類のベルガモットオレンジに非常に香りが似ていることから。', trivia: '別名「タイマツバナ」とも呼ばれ、葉はハーブティーになります。', color: '#c75f7d' },
            { name: 'ハイビスカス', reading: 'はいびすかす', language: '繊細な美、新しい恋', feature: '南国を象徴する鮮やかで大きな花。中央の長い雄しべが特徴。', origin: 'エジプトの美の女神「ヒビス」に由来する名を持つ。', trivia: '一つの花は朝咲いて夜にはしぼむ、命の短い一日花です。', color: '#e63946' },
            { name: 'ラベンダー', reading: 'らべんだー', language: '沈黙、期待、あなたを待っています', feature: '紫色の小さな花を穂状に咲かせ、リラックス効果のある強い香りを持つ。', origin: 'ラテン語の「洗う（lavando）」が語源で、お風呂の香料にされたため。', trivia: '香りが非常に強いため、「ハーブの女王」と称されています。', color: '#8a817c' },
            { name: '蓮（ハス）', reading: 'はす', language: '清らかな心、神聖', feature: '泥水の中から立ち上がり、早朝に極楽浄土のような美しい大輪を開く。', origin: '泥に染まらず気高く美しい花を咲かせる神秘的な生態から。', trivia: '花が開くとき、「ポン」と音がするという俗説がありますが実際は静かです。', color: '#f4a261' },
            { name: 'グラジオラス', reading: 'ぐらじおらす', language: '密会、用心、情熱的な愛', feature: 'まっすぐ伸びた茎に、下から上へと順番に並んで燃えるように咲く。', origin: '葉の形が古代ローマの短剣「グラディウス」に似ていることから。', trivia: '昔、恋人たちがこの花の本数でデートの時間を伝えたという噂があります。', color: '#e76f51' },
            { name: '百日紅（サルスベリ）', reading: 'さるすべり', language: '雄弁、あなたを許す、不用意', feature: 'フリルのついた小さなピンクの花が集まり、夏の間長く咲き続ける。', origin: '幹がツルツルしていて、木登りが得意な猿すら滑り落ちそうなことから。', trivia: '漢字で「百日紅」と書く通り、約100日もの長い期間咲き続けます。', color: '#e27396' },
            { name: 'プルメリア', reading: 'ぷるめりあ', language: '気品、日だまり、内気な乙女', feature: 'ハワイのレイに使われる、肉厚で甘い香りのある南国の花。', origin: 'この花の研究に貢献したフランスの植物学者プルミエにちなむ。', trivia: '花弁が5枚美しく回るように並び、ハワイでは守り神とされます。', color: '#ffddd2' },
            { name: 'マリーゴールド', reading: 'まりーごーるど', language: '嫉妬、絶望、変わらぬ愛', feature: '黄色やオレンジのビタミンカラーで、独特の強い香りで虫を遠ざける。', origin: '聖母マリアの祝日に咲いていたため「マリアの黄金の花」と呼ばれる。', trivia: '根から虫が嫌がる成分を出すため、野菜の近くに植える「コンパニオンプランツ」になります。', color: '#f4a261' },
            { name: 'ブーゲンビリア', reading: 'ぶーげんびりあ', language: '情熱、あなたしか見えない', feature: '赤や紫の鮮やかな「苞（ほう）」が、まるで花びらのように群生する。', origin: 'フランスの探検家ブーガンヴィルがブラジルで発見したことから。', trivia: '中央にある、白くてごく小さな筒状の部分が本当の花です。', color: '#d1495b' },
            { name: 'ホウセンカ', reading: 'ほうせんか', language: '私に触れないで、短気', feature: '茎の節々に赤やピンクの花をつけ、熟した実が弾け飛ぶ性質がある。', origin: '実が熟すと、少し触れただけでタネが勢いよく飛び出す性質から。', trivia: '昔は爪を染めるために使われ、沖縄の歌「てぃんさぐぬ花」にも登場します。', color: '#ed6a5a' }
        ]
    },
    autumn: {
        label: '秋',
        summary: '落ち着いた空気に合う、香りや風情を楽しめる花が増える季節です。',
        flowers: [
            { name: 'コスモス', reading: 'こすもす', language: '調和、乙女の純真', feature: '細い茎にピンクや白の可憐な花を咲かせ、秋風に揺れる姿が風物詩。', origin: 'ギリシャ語の「宇宙の秩序」や「美しい」という意味の言葉が由来。', trivia: '日本には明治時代に渡来し、漢字では「秋桜」と書かれます。', color: '#d982a6' },
            { name: '菊（キク）', reading: 'きく', language: '高貴、高潔', feature: '気品ある香りと、非常に優れた花もちが特徴の日本の国花。', origin: '中国から薬草として伝わり、長寿や品格の象徴として皇室の紋章に。', trivia: '9月9日の「重陽の節句」は別名「菊の節句」と呼ばれ、菊酒を飲みます。', color: '#e0c247' },
            { name: '金木犀', reading: 'きんもくせい', language: '謙虚、気高い人', feature: '橙色の小さな花を密集して咲かせ、街中に甘い香りを漂わせる。', origin: '素晴らしい香りに対して、花自体はとても小さく控えめな姿から。', trivia: '雨や強い風が吹くと、まだ咲いていても一斉に潔く散ってしまいます。', color: '#e59a36' },
            { name: 'リンドウ', reading: 'りんどう', language: '誠実、正義、悲しんでいる時のあなたを愛する', feature: '晴れた日だけ開く、深い青紫色の釣鐘形の花が美しい。', origin: '漢方薬としての根が、熊の胆（くまのい）より苦いため「竜の胆」から。', trivia: '根が優れた薬（胃薬）になることから、敬老の日の贈り物に定番です。', color: '#4f64a8' },
            { name: '秋バラ', reading: 'あきばら', language: '愛、美', feature: '春に比べて小ぶりですが、色が濃く、香りが一段と深いのが特徴。', origin: '古代から美の女神ヴィーナスの花とされ、愛を伝える定番。', trivia: '気温が下がっていく時期に咲くため、花がゆっくりと長く楽しめます。', color: '#c84f5f' },
            { name: 'オレンジガーベラ', reading: 'おれんじがーべら', language: '神秘、冒険心、我慢強さ', feature: '元気が出る暖色系で、太い茎の先に太陽のようにポジティブに咲く。', origin: '燃えるようなオレンジが、新しいことへ挑戦するエネルギーを連想させる。', trivia: 'ガーベラは花が重いため、飾り方に工夫すると首が垂れずに保てます。', color: '#ef7f3b' },
            { name: '彼岸花（ヒガンバナ）', reading: 'ひがんばな', language: '情熱、あきらめ、再会', feature: 'お彼岸の時期に、葉がない状態で地面から突如赤い妖艶な花を咲かせる。', origin: '秋のお彼岸（秋分の日前後）に正確に合わせるように咲くことから。', trivia: 'モグラやネズミ除けとして、毒のあるこの花を田んぼの畔に植えました。', color: '#c1121f' },
            { name: 'ダリア', reading: 'だりあ', language: '華麗、優雅、気まぐれ', feature: 'ボタンのように豪華なものからポンポン状まで、形も色も極めて多彩。', origin: 'スウェーデンの植物学者ダールにちなんで名付けられました。', trivia: 'ナポレオンの妻ジョセフィーヌが愛し、庭園から盗まれて激怒した逸話があります。', color: '#ad2831' },
            { name: 'サフラン', reading: 'さふらん', language: '歓喜、過度を慎め、節度の美', feature: '秋に紫色の花を咲かせ、中心から伸びる3本の赤い雌しべが特徴。', origin: 'アラビア語の「黄色」を意味する言葉が語源（染料になるため）。', trivia: '雌しべを乾燥させたものは、パエリアなどの超高級スパイスになります。', color: '#9d4edd' },
            { name: 'シュウメイギク', reading: 'しゅうめいぎく', language: '淡い思い、忍耐', feature: 'キクに似た上品な白い花びらを風に揺らす、古風な風情がある花。', origin: '秋に京都の貴船周辺で多く見られたことから「貴船菊」の別名もあります。', trivia: '「ギク」とつきますが、実はキクの仲間ではなくアネモネの仲間です。', color: '#f4f1de' },
            { name: '桔梗（キキョウ）', reading: 'ききょう', language: '永遠の愛、誠実、気品', feature: '蕾のときは風船のように膨らみ、開くと美しい星型の紫花になる。', origin: '古くから「秋の七草」の一つとして、万葉集の時代から愛されてきた。', trivia: '明智光秀など、戦国武将の家紋のモチーフとしても多く使われました。', color: '#3d5a80' },
            { name: 'ホトトギス', reading: 'ほととぎす', language: '永遠にあなたのもの、秘められた恋', feature: '日陰を好み、花びらに紫色の斑点模様が多数ある独特な姿。', origin: '花びらの斑点模様が、鳥の「ホトトギス」の胸の模様に似ているため。', trivia: '山野草として人気が高く、秋の茶席を飾る花（茶花）として重宝されます。', color: '#8338ec' },
            { name: 'ワレモコウ', reading: 'われもこう', language: '変化、移り行く日々、明日への期待', feature: '小さな小豆色の丸い穂のような花を、細い茎の先にたくさんつける。', origin: '「吾もまた紅（こう）なり」と主張しているように見えるという説から。', trivia: '目立たない花ですが、フラワーアレンジメントに秋の哀愁を添える名脇役です。', color: '#540b0e' },
            { name: 'ケイトウ', reading: 'けいとう', language: 'おしゃれ、気取り、風変わり', feature: 'ニワトリのトサカのように、フリル状に波打つベルベット調の鮮やかな花。', origin: '見た目が文字通り「鶏の頭のトサカ」にそっくりなことから。', trivia: 'ドライフラワーにしても全く色が落ちないため、長く飾ることができます。', color: '#e63946' },
            { name: 'アメジストセージ', reading: 'あめじすとせーじ', language: '家族愛、純愛', feature: '紫色のフェルト生地のような、ふわふわした温かみのある質感のハーブ。', origin: '宝石の「アメジスト（紫水晶）」のような美しい紫色から。', trivia: 'ハーブの一種で、葉に触れるととても爽やかなセージの香りがします。', color: '#7209b7' }
        ]
    },
    winter: {
        label: '冬',
        summary: '寒さの中で咲く、凛とした強さや室内を彩る花が魅力の季節です。',
        flowers: [
            { name: '椿（ツバキ）', reading: 'つばき', language: '控えめな優しさ、誇り、気取らない優美さ', feature: '光沢のある濃緑の葉と、雪に映える端正で肉厚な赤や白の花。', origin: '香りがほとんどなく、静かに凛と佇んで咲く奥ゆかしい姿から。', trivia: '花が散るときに、花びらではなく首からポトリと落ちるのが特徴。', color: '#b93f4b' },
            { name: 'シクラメン', reading: 'しくらめん', language: '遠慮、内気、はにかみ', feature: '冬の室内を彩る鉢花の女王。反り返った花びらが炎のよう。', origin: 'うつむき加減に恥ずかしそうに下を向いて咲く性質から。', trivia: '日本では「死」「苦」を連想させる名前として、かつてお見舞いで忌避されました。', color: '#c96ba3' },
            { name: '水仙（日本の水仙）', reading: 'すいせん', language: '自己愛、神秘', feature: 'お正月の頃、雪の中でも負けずに清々しい香りと白い花を届ける。', origin: '中国の古典で「天にあるを天仙、地にあるを地仙、水にあるを水仙」という名から。', trivia: '冬に咲く「日本水仙」は、特に香りが強く、天然の香水とも言われます。', color: '#f0d96b' },
            { name: '冬バラ', reading: 'ふゆばら', language: '愛情、深く静かな愛', feature: '寒風の中で固い蕾をゆっくり開き、非常に長持ちする特別なバラ。', origin: '過酷な寒さに耐えて咲く、一途で強い愛情の象徴として。', trivia: '冬のバラ園は人が少なく、静かに花の香りを独り占めできる穴場です。', color: '#b52f3f' },
            { name: 'スイートピー', reading: 'すいーとぴー', language: '門出、優しい思い出', feature: '蝶が舞うようなひらひらした花びらと、甘いパステルの香り。', origin: '今にも飛び立ちそうな花の形が、新しい旅立ちを連想させるため。', trivia: '「赤いスイートピー」という有名な曲がありますが、当時は珍しい色でした。', color: '#d9a0c7' },
            { name: 'ポインセチア', reading: 'ぽいんせちあ', language: '祝福する、聖夜、幸運を祈る', feature: 'クリスマスを象徴する、上部が真っ赤に色づく冬の代表植物。', origin: 'メキシコ公使のポインセセット氏がアメリカに紹介したことから。', trivia: '赤や緑のクリスマスカラーが、キリストの血と永遠の命を表すとされます。', color: '#c1121f' },
            { name: 'クリスマスローズ', reading: 'くりすますろーず', language: '私の不安を和らげて、いたわり', feature: 'うつむきがちに咲く、冬枯れの庭で健気に生きる常緑の花。', origin: 'クリスマスの時期に、バラに似た白い花を咲かせることから。', trivia: '花びらに見える部分は「ガク」なので、数ヶ月間も色褪せずに残ります。', color: '#e29578' },
            { name: 'シャコバサボテン', reading: 'しゃこばさぼてん', language: '美しい変化、もつれ合う愛', feature: 'サボテンの仲間で、葉の先に透き通るような鮮やかなピンク花をつける。', origin: '茎の節々の形が、海の生物「シャコ」の体に似ていることから。', trivia: '別名「クリスマスカクタス」とも呼ばれ、クリスマスの頃に満開を迎えます。', color: '#ff477e' },
            { name: 'ロウバイ', reading: 'ろうばい', language: '慈しみ、先導、ゆかしさ', feature: '新春に葉が出る前に、半透明の黄色い蝋細工のような花を咲かせる。', origin: '花びらが「蝋（ろう）」のような質感で、陰暦の12月（蝋月）に咲くため。', trivia: '非常に強いフルーティーな甘い香りを持ち、春の接近を伝えます。', color: '#ffd166' },
            { name: '福寿草（フクジュソウ）', reading: 'ふくじゅそう', language: '幸せを招く、永久の幸福', feature: 'お正月に合わせて黄金色のパラボラアンテナのような花を咲かせる。', origin: '新春を祝う、めでたい「福」と「寿」の漢字を当てはめたもの。', trivia: '太陽の光に反応して花を開き、光を浴びて中の温度を上げる仕組みがあります。', color: '#ffb703' },
            { name: 'スノードロップ', reading: 'すのーどろっぷ', language: '希望、慰め', feature: '雪の雫（しずく）のような、白い涙型の小さな花が下を向いて咲く。', origin: '16〜17世紀のヨーロッパの女性がつけていた「しずく型のイヤリング」から。', trivia: 'エデンの園を追われたアダムとイブを、天使が励ますために雪をこの花に変えた伝説があります。', color: '#f8f9fa' },
            { name: 'シンビジウム', reading: 'しんびじうむ', language: '飾らない心、素朴、華やかな恋', feature: '洋ランの仲間で寒さに強く、とても豪華な花のスパイクを長く保つ。', origin: 'ギリシャ語の「ボート（cymbe）」と「形（eidos）」に由来し、唇弁の形から。', trivia: '高級感がありますが、ランの中では破格の丈夫さを誇り、初心者向きです。', color: '#f28482' },
            { name: 'アザリア', reading: 'あざりあ', language: 'あなたに愛されて幸せ、充足', feature: '冬から春にかけ、室内を埋め尽くすほど大輪のフリル花を咲かせる。', origin: 'ラテン語の「乾燥（azaleos）」が語源で、乾燥した土を好むと思われたため。', trivia: '日本のツツジがヨーロッパに渡り、室内用に華やかに品種改良されたものです。', color: '#f47174' },
            { name: 'パンジー（冬咲き）', reading: 'ぱんじー', language: '純愛、楽しい思い', feature: '冬の冷たい空気や、雪が積もっても枯れずに耐え忍ぶ生命力を持つ。', origin: '春と同じく、寒冷期でもじっと耐えながら花を開き続ける性質から。', trivia: '冬の間は虫がいないため受粉せず、ひとつの花が1ヶ月以上も咲き続けます。', color: '#5e548e' },
            { name: 'ネリネ', reading: 'ねりね', language: 'また会う日を楽しみに、忍耐', feature: '花びらに光が当たると、まるでダイヤモンドのようにキラキラと輝く。', origin: 'ギリシャ神話の美しい海の妖精「ネレイデス」の名にちなむ。', trivia: 'その輝きから、別名「ダイヤモンドリリー」と呼ばれ、非常に人気の高い冬の切り花です。', color: '#fab6ca' }
        ]
    }
};

const TOTAL_QUESTIONS = 10;
const INITIAL_SEASON = 'spring';
const QUIZ_TYPES = [
    {
        question: flower => `「${flower.language}」という花言葉を持つ花はどれでしょう？`,
        hint: flower => `花言葉は「${flower.language}」です。`
    },
    {
        question: flower => `特徴が「${flower.feature}」とされる花はどれでしょう？`,
        hint: flower => `特徴：${flower.feature}`
    },
    {
        question: flower => `名前や意味の由来が「${flower.origin}」である花はどれでしょう？`,
        hint: flower => `由来：${flower.origin}`
    },
    {
        question: flower => `豆知識として「${flower.trivia}」と紹介されている花はどれでしょう？`,
        hint: flower => `豆知識：${flower.trivia}`
    }
];

const elements = {
    seasonButtons: document.querySelectorAll('.season-btn'),
    seasonSummary: document.getElementById('seasonSummary'),
    flowerList: document.getElementById('flowerList'),
    flowerListTitle: document.getElementById('flowerListTitle'),
    flowerDetail: document.getElementById('flowerDetail'),
    feelingInput: document.getElementById('feelingInput'),
    recommendFlowers: document.getElementById('recommendFlowers'),
    aiOutput: document.getElementById('aiOutput'),
    quizPanel: document.getElementById('quizPanel'),
    quizQuestion: document.getElementById('quizQuestion'),
    quizOptions: document.getElementById('quizOptions'),
    quizFeedback: document.getElementById('quizFeedback'),
    nextQuiz: document.getElementById('nextQuiz'),
    score: document.getElementById('score')
};

const state = {
    currentSeason: INITIAL_SEASON,
    currentQuiz: null,
    correctCount: 0,
    questionNumber: 0,
    answeredCount: 0
};

elements.seasonButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectSeason(button.dataset.season);
        resetQuizSession();
    });
});

elements.flowerList.addEventListener('click', event => {
    const card = event.target.closest('.flower-card');
    if (!card) return;

    const flower = getCurrentFlowers()[Number(card.dataset.index)];
    showFlower(flower);
});

elements.quizOptions.addEventListener('click', event => {
    const option = event.target.closest('.quiz-option');
    if (option) checkAnswer(option);
});

elements.quizFeedback.addEventListener('click', event => {
    if (event.target.matches('.restart-btn')) resetQuizSession();
});

elements.nextQuiz.addEventListener('click', generateNextQuiz);
elements.recommendFlowers.addEventListener('click', runFlowerAi);

selectSeason(state.currentSeason);
resetQuizSession();

function selectSeason(seasonKey) {
    if (!seasons[seasonKey]) return;

    state.currentSeason = seasonKey;
    const season = seasons[seasonKey];
    elements.seasonButtons.forEach(button => {
        const selected = button.dataset.season === seasonKey;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
    });
    elements.seasonSummary.textContent = season.summary;
    elements.flowerListTitle.textContent = `${season.label}の花`;
    renderFlowerList(season.flowers);
    resetFlowerDetail();
}

function renderFlowerList(flowers) {
    elements.flowerList.innerHTML = flowers.map((flower, index) => `
        <button class="flower-card" type="button" data-index="${index}" style="--flower-color:${flower.color}">
            <span class="flower-dot"></span>
            <span class="flower-name">${escapeHtml(flower.name)}</span>
            <span class="flower-reading">${escapeHtml(flower.reading)}</span>
        </button>
    `).join('');
}

function resetFlowerDetail() {
    elements.flowerDetail.innerHTML = `
        <p class="empty-detail">花カードをクリックすると、花言葉や特徴、由来、豆知識がここに表示されます。</p>
    `;
}

function showFlower(flower) {
    elements.flowerList.querySelectorAll('.flower-card').forEach(card => {
        const item = getCurrentFlowers()[Number(card.dataset.index)];
        card.classList.toggle('selected', item.name === flower.name);
    });

    const query = encodeURIComponent(`${flower.name} 花言葉 特徴`);
    elements.flowerDetail.innerHTML = `
        <div class="detail-top" style="--flower-color:${flower.color}">
            <span class="detail-mark"></span>
            <div>
                <p class="eyebrow">${escapeHtml(getCurrentSeason().label)}の代表花</p>
                <h2>${escapeHtml(flower.name)}</h2>
                <p>${escapeHtml(flower.reading)}</p>
            </div>
        </div>
        <dl class="detail-list">
            <div>
                <dt>花言葉</dt>
                <dd>${escapeHtml(flower.language)}</dd>
            </div>
            <div>
                <dt>特徴</dt>
                <dd>${escapeHtml(flower.feature)}</dd>
            </div>
            <div>
                <dt>由来</dt>
                <dd>${escapeHtml(flower.origin)}</dd>
            </div>
            <div>
                <dt>豆知識</dt>
                <dd>${escapeHtml(flower.trivia)}</dd>
            </div>
        </dl>
        <a class="search-link" href="https://www.google.com/search?q=${query}" target="_blank" rel="noopener noreferrer">
            Webで「${escapeHtml(flower.name)}」を確認する
        </a>
    `;

}

async function runFlowerAi() {
    const feeling = elements.feelingInput.value.trim();

    if (!feeling) {
        elements.aiOutput.classList.remove('loading-ai');
        elements.aiOutput.innerHTML = '<p class="empty-detail">伝えたい気持ちを入力してください。</p>';
        elements.feelingInput.focus();
        return;
    }

    setAiLoading(true);

    try {
        const response = await fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promptKey: 'flowerAi',
                title: '気持ちに合う花の提案',
                count: 3,
                feeling,
                season: getCurrentSeason().label
            })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'API error');
        }

        renderAiResults(normalizeAiResults(data.data, feeling), false);
    } catch (error) {
        console.warn('Flower AI fallback:', error);
        renderAiResults(buildFallbackResults(feeling), true);
    } finally {
        setAiLoading(false);
    }
}

function setAiLoading(isLoading) {
    elements.recommendFlowers.disabled = isLoading;
    elements.aiOutput.classList.toggle('loading-ai', isLoading);

    if (isLoading) {
        elements.aiOutput.textContent = '気持ちに合う花を考えています...';
    }
}

function normalizeAiResults(items, feeling) {
    const normalized = Array.isArray(items)
        ? items.map(item => {
            const flowerName = item.flowerName || item.name || '';
            const knownFlower = findFlowerByName(flowerName);

            return {
                flowerName,
                flowerLanguage: item.flowerLanguage || item.language || knownFlower?.language || '',
                reason: item.reason || (knownFlower ? `${knownFlower.name}の印象と花言葉をもとに選びました。` : ''),
                scene: item.scene || '',
                trivia: item.trivia || knownFlower?.trivia || ''
            };
        }).filter(item => item.flowerName && item.reason)
        : [];

    return normalized.length > 0
        ? normalized
        : buildFallbackResults(feeling);
}

function buildFallbackResults(feeling) {
    return chooseFlowersForFeeling(feeling)
        .slice(0, 3)
        .map(flower => buildResultFromFlower(flower));
}

function chooseFlowersForFeeling(feeling) {
    const text = feeling.toLowerCase();
    const allFlowers = Object.values(seasons).flatMap(season => season.flowers);
    const scored = allFlowers.map(flower => {
        const haystack = `${flower.name} ${flower.language} ${flower.feature} ${flower.origin} ${flower.trivia}`.toLowerCase();
        let score = getCurrentFlowers().includes(flower) ? 2 : 0;

        [
            '感謝', 'ありがとう', '応援', '門出', '希望', '友情', '愛', '恋',
            'お祝い', '祝福', '元気', '癒し', '幸せ', '再会', '誠実'
        ].forEach(keyword => {
            if (text.includes(keyword) && haystack.includes(keyword)) score += 4;
        });

        if (text.includes('感謝') || text.includes('ありがとう')) {
            if (haystack.includes('感謝') || haystack.includes('思いやり') || haystack.includes('友情')) score += 6;
        }
        if (text.includes('応援') || text.includes('門出') || text.includes('卒業')) {
            if (haystack.includes('希望') || haystack.includes('門出') || haystack.includes('未来')) score += 6;
        }
        if (text.includes('好き') || text.includes('愛') || text.includes('恋')) {
            if (haystack.includes('愛') || haystack.includes('恋') || haystack.includes('見つめる')) score += 6;
        }
        if (text.includes('癒') || text.includes('不安') || text.includes('慰め')) {
            if (haystack.includes('慰め') || haystack.includes('和らげ') || haystack.includes('慈しみ')) score += 6;
        }

        return { flower, score };
    });

    return scored
        .sort((a, b) => b.score - a.score || a.flower.name.localeCompare(b.flower.name, 'ja'))
        .map(item => item.flower);
}

function buildResultFromFlower(flower) {
    return {
        flowerName: flower.name,
        flowerLanguage: flower.language,
        reason: `${flower.name}は「${flower.language}」の意味を持ち、入力された気持ちに寄り添いやすい花です。`,
        scene: `${getCurrentSeason().label}の贈り物や気持ちを伝える場面`,
        trivia: flower.trivia
    };
}

function renderAiResults(results, usedFallback) {
    const notice = usedFallback
        ? '<p class="fallback-note">AI接続が使えないため、登録済みの花データから候補を作成しました。</p>'
        : '';

    elements.aiOutput.classList.remove('loading-ai');
    elements.aiOutput.innerHTML = `
        ${notice}
        <div class="ai-result-list">
            ${results.map(result => `
                <article class="ai-result-card">
                    <h3>${escapeHtml(result.flowerName)}</h3>
                    <p><strong>花言葉:</strong> ${escapeHtml(result.flowerLanguage || '花言葉を確認中')}</p>
                    <p>${escapeHtml(result.reason)}</p>
                    <p><strong>使いやすい場面:</strong> ${escapeHtml(result.scene || '贈り物や気持ちを伝える場面')}</p>
                    <p><strong>豆知識:</strong> ${escapeHtml(result.trivia || '季節や色に合わせて選ぶと印象が変わります。')}</p>
                </article>
            `).join('')}
        </div>
    `;
}

function findFlowerByName(name) {
    return Object.values(seasons)
        .flatMap(season => season.flowers)
        .find(flower => flower.name === name);
}

function resetQuizSession() {
    state.correctCount = 0;
    state.questionNumber = 0;
    state.answeredCount = 0;
    state.currentQuiz = null;
    elements.quizPanel.classList.remove('finished');
    elements.nextQuiz.disabled = true;
    generateNextQuiz();
}

function generateNextQuiz() {
    if (state.questionNumber >= TOTAL_QUESTIONS) {
        showFinalResult();
        return;
    }

    state.questionNumber++;
    state.currentQuiz = createQuiz();
    elements.quizOptions.classList.remove('answered');
    elements.nextQuiz.disabled = true;
    elements.nextQuiz.textContent = state.questionNumber === TOTAL_QUESTIONS ? '結果を見る' : '次の問題';
    updateScoreDisplay();

    elements.quizQuestion.textContent = `【Q.${state.questionNumber}】 ${state.currentQuiz.question}`;
    elements.quizFeedback.textContent = '';
    elements.quizFeedback.className = 'quiz-feedback';
    elements.quizOptions.innerHTML = state.currentQuiz.options.map(option => `
        <button class="quiz-option" type="button">${escapeHtml(option)}</button>
    `).join('');
}

function checkAnswer(button) {
    if (elements.quizOptions.classList.contains('answered')) return;

    elements.quizOptions.classList.add('answered');
    elements.nextQuiz.disabled = false;
    state.answeredCount++;

    const selectedName = button.textContent;
    const isCorrect = selectedName === state.currentQuiz.answer.name;

    if (isCorrect) state.correctCount++;
    updateScoreDisplay();

    elements.quizOptions.querySelectorAll('.quiz-option').forEach(option => {
        const optionName = option.textContent;
        option.disabled = true;
        option.classList.toggle('correct', optionName === state.currentQuiz.answer.name);
        option.classList.toggle('wrong', option === button && !isCorrect);
    });

    elements.quizFeedback.textContent = isCorrect
        ? `正解です！ 正解は「${state.currentQuiz.answer.name}」です。 (${state.currentQuiz.hint})`
        : `惜しい！ 正解は「${state.currentQuiz.answer.name}」です。 (${state.currentQuiz.hint})`;
    elements.quizFeedback.classList.add(isCorrect ? 'good' : 'miss');
}

function updateScoreDisplay() {
    elements.score.textContent = `第 ${state.questionNumber} 問 | 現在のスコア: ${state.correctCount} / ${state.answeredCount}`;
}

function showFinalResult() {
    elements.quizPanel.classList.add('finished');
    elements.score.textContent = '終了';
    elements.quizQuestion.textContent = `全 ${TOTAL_QUESTIONS} 問のクイズが終了しました。`;
    elements.quizOptions.innerHTML = '';

    elements.quizFeedback.className = 'quiz-feedback';
    elements.quizFeedback.innerHTML = `
        <div class="result-box">
            <p>あなたの正解数</p>
            <div class="result-score">${state.correctCount} / ${TOTAL_QUESTIONS}</div>
            <div class="result-rank">${getRankMessage()}</div>
            <button type="button" class="btn restart-btn">もう一度挑戦する</button>
        </div>
    `;
}

function createQuiz() {
    const flowers = getCurrentFlowers();
    const answer = flowers[Math.floor(Math.random() * flowers.length)];
    const quizType = QUIZ_TYPES[Math.floor(Math.random() * QUIZ_TYPES.length)];
    const wrongOptions = shuffle(flowers.filter(flower => flower.name !== answer.name))
        .slice(0, 3)
        .map(flower => flower.name);

    return {
        answer,
        question: quizType.question(answer),
        hint: quizType.hint(answer),
        options: shuffle([answer.name, ...wrongOptions])
    };
}

function getRankMessage() {
    if (state.correctCount === TOTAL_QUESTIONS) return '全問正解です。完璧なフラワーマスターです。';
    if (state.correctCount >= 8) return '素晴らしい結果です。花への愛着と知識がとても豊富です。';
    if (state.correctCount >= 5) return '合格点です。花のリストで気になる項目を復習してみましょう。';
    return '花のリストをタップして、花言葉や由来をもう一度確認してみましょう。';
}

function getCurrentSeason() {
    return seasons[state.currentSeason];
}

function getCurrentFlowers() {
    return getCurrentSeason().flowers;
}

function shuffle(items) {
    const result = [...items];

    for (let index = result.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }

    return result;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
