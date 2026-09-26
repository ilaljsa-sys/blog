(function() {
  const BANK_SOAL_CADANGAN = {
    N5: [
      {
        pertanyaan: "明日[あした]は 友達[ともだち] (____) 図書館[としょかん]へ 行[い]きます。",
        pilihan: ["に", "で", "と", "を"],
        kunci: 2,
        pembahasan: "Partikel と digunakan untuk menunjukkan rekan atau 'bersama dengan'. 友達と = bersama teman. Arti: Besok saya pergi ke perpustakaan bersama teman."
      },
      {
        pertanyaan: "机[つくえ]の 上[うえ]に 本[ほん]が 三冊[さんさつ] (____)。",
        pilihan: ["います", "あります", "します", "おきます"],
        kunci: 1,
        pembahasan: "Untuk menyatakan keberadaan benda mati (seperti buku/本), gunakan kata kerja あります. Kalau makhluk hidup gunakan います."
      },
      {
        pertanyaan: "昨日[きのう]は どこ (____) 行[い]きませんでした。",
        pilihan: ["へも", "にも", "からも", "でも"],
        kunci: 0,
        pembahasan: "Kata tanya + へ + も + bentuk negatif (行きませんでした) berarti 'tidak pergi ke mana pun sama sekali'."
      },
      {
        pertanyaan: "毎朝[まいあさ] 七時[しちじ] (____) 起[お]きます。",
        pilihan: ["で", "に", "を", "へ"],
        kunci: 1,
        pembahasan: "Waktu spesifik yang memuat angka (seperti jam 7: 七時) ditandai dengan partikel に."
      },
      {
        pertanyaan: "この 料理[りょうり]は とても (____) です。",
        pilihan: ["おいしい", "おいしく", "おいしくて", "おいしいの"],
        kunci: 0,
        pembahasan: "Kata sifat-i di depan です menggunakan bentuk kamus (bentuk positif waktu sekarang): おいしいです."
      },
      {
        pertanyaan: "山田[やまだ]さんは 英語[えいご]を 話[はな]すこと (____) できます。",
        pilihan: ["が", "を", "に", "は"],
        kunci: 0,
        pembahasan: "Pola kemampuan: Kata Kerja Bentuk Kamus + ことができます (Bisa melakukan...)."
      },
      {
        pertanyaan: "雨[あめ]が 降[ふ]っていますから、傘[かさ]を (____) ください。",
        pilihan: ["持[も]って", "持[も]ちて", "持[も]つ", "持[も]った"],
        kunci: 0,
        pembahasan: "Pola permohonan menggunakan bentuk Te: V-てください. Bentuk Te dari 持ちます adalah 持って."
      },
      {
        pertanyaan: "すみません、駅[えき]まで どうやって (____) か。",
        pilihan: ["行[い]きます", "行[い]きましょう", "行[い]きません", "行[い]きたい"],
        kunci: 0,
        pembahasan: "Kalimat tanya cara pergi ke suatu tempat: 〜まで どうやって 行きますか (Bagaimana cara pergi ke...?)."
      },
      {
        pertanyaan: "わたしは 魚[さかな]が (____) です。",
        pilihan: ["好[す]き", "好[す]きな", "好[す]きに", "好[す]きで"],
        kunci: 0,
        pembahasan: "Pola kesukaan: Benda が 好きです (Suka benda...). 好き adalah kata sifat-na, di depan です berdiri sendiri."
      },
      {
        pertanyaan: "部屋[へや]に 入[はい]る (____)、靴[くつ]を 脱[ぬ]いでください。",
        pilihan: ["まえに", "あとで", "ときに", "から"],
        kunci: 0,
        pembahasan: "Pola V-Kamus + まえに berarti 'sebelum melakukan V'. Masuk kamar = 入るまえに (Sebelum masuk kamar, silakan lepas sepatu)."
      },
      {
        pertanyaan: "田中[たなか]さんは 今[いま] 事務所[じむしょ] (____) います。",
        pilihan: ["で", "に", "を", "へ"],
        kunci: 1,
        pembahasan: "Menunjukkan keberadaan orang/benda pada suatu tempat menggunakan partikel に."
      },
      {
        pertanyaan: "毎朝[まいあさ] パン (____) コーヒーを 飲[の]みます。",
        pilihan: ["や", "で", "に", "を"],
        kunci: 0,
        pembahasan: "Partikel や digunakan untuk menyebutkan contoh benda tanpa membatasi hanya pada benda tersebut ('...dan lain-lain')."
      },
      {
        pertanyaan: "電車[でんしゃ] (____) 会社[かいしゃ]へ 行[い]きます。",
        pilihan: ["に", "で", "を", "へ"],
        kunci: 1,
        pembahasan: "Menunjukkan alat transportasi atau sarana yang digunakan menggunakan partikel で."
      },
      {
        pertanyaan: "日本[にほん]へ 桜[さくら]を (____) に 行[い]きます。",
        pilihan: ["見[み]", "見[み]て", "見[み]る", "見[み]ます"],
        kunci: 0,
        pembahasan: "Pola tujuan pergi/datang: V-stem (buang ます) + に 行きます."
      },
      {
        pertanyaan: "教室[きょうしつ]で タバコを 吸[す]って (____) いけません。",
        pilihan: ["は", "も", "が", "に"],
        kunci: 0,
        pembahasan: "Pola larangan tegas: V-ては いけません (Tidak boleh...)."
      },
      {
        pertanyaan: "音楽[おんがく]を (____) ながら 勉強[べんきょう]します。",
        pilihan: ["聞[き]く", "聞[き]き", "聞[き]いて", "聞[き]いた"],
        kunci: 1,
        pembahasan: "Pola melakukan dua kegiatan sekaligus: V-stem + ながら (Sambil mendengarkan musik, belajar)."
      },
      {
        pertanyaan: "富士山[ふじさん]に (____) ことが あります。",
        pilihan: ["登[のぼ]った", "登[のぼ]る", "登[のぼ]り", "登[のぼ]って"],
        kunci: 0,
        pembahasan: "Pola menyatakan pengalaman: V-た + ことがあります (Pernah mendaki Gunung Fuji)."
      },
      {
        pertanyaan: "佐藤[さとう]さんは 料理[りょうり]を 作[つく]るの (____) 上手[じょうず]です。",
        pilihan: ["が", "を", "に", "は"],
        kunci: 0,
        pembahasan: "Menyatakan kemahiran melakukan suatu hal: V-Kamus + のが 上手です."
      },
      {
        pertanyaan: "昨日[きのう]は 頭[あたま]が 痛[いた]かった (____)、早[はや]く 寝[ね]ました。",
        pilihan: ["から", "ので", "のに", "でも"],
        kunci: 0,
        pembahasan: "Pola alasan/sebab: Kalimat + から (Karena kemarin sakit kepala, saya tidur lebih awal)."
      },
      {
        pertanyaan: "この 辞書[じしょ]を (____) も いいですか。",
        pilihan: ["使[つか]って", "使[つか]い", "使[つか]う", "使[つか]った"],
        kunci: 0,
        pembahasan: "Pola meminta izin sopan: V-ても いいですか (Bolehkah saya menggunakan kamus ini?)."
      }
    ],
    N4: [
      {
        pertanyaan: "薬[くすり]を 飲[の]んだ (____)、熱[ねつ]が 下[さ]がりました。",
        pilihan: ["ので", "のに", "たら", "なら"],
        kunci: 2,
        pembahasan: "Pola V-たら menyatakan pengandaian atau urutan waktu (Setelah minum obat, demamnya turun)."
      },
      {
        pertanyaan: "電車[でんしゃ]に 乗[の]る (____) に、切符[きっぷ]を 買[か]いました。",
        pilihan: ["ため", "ように", "こと", "はず"],
        kunci: 0,
        pembahasan: "Pola V-Kamus + ために menyatakan tujuan yang sengaja (Demi / untuk naik kereta, saya membeli tiket)."
      },
      {
        pertanyaan: "先生[せんせい]に 漢字[かんじ]の 読[よ]み方[かた]を (____) いただきました。",
        pilihan: ["教[おし]えて", "教[おし]えられて", "教[おし]えさせて", "教[おし]える"],
        kunci: 0,
        pembahasan: "Pola sopan menerima bantuan dari orang yang lebih dihormati: V-ていただきました."
      },
      {
        pertanyaan: "明日[あした]は 雨[あめ]が 降[ふ]る (____) です。",
        pilihan: ["かもしれん", "かもしれません", "はずです", "よう"],
        kunci: 1,
        pembahasan: "Pola kemungkinan 50%: Bentuk Biasa + かもしれません (Mungkin besok akan turun hujan)."
      },
      {
        pertanyaan: "この ケーキは (____) すぎて、食[た]べられません。",
        pilihan: ["甘[あま]い", "甘[あま]く", "甘[あま]", "甘[あま]くて"],
        kunci: 2,
        pembahasan: "Pola 〜すぎる untuk kata sifat-i: buang akhiran い lalu sambung dengan すぎる (甘い -> 甘すぎる)."
      },
      {
        pertanyaan: "窓[まど]が (____) います。",
        pilihan: ["開[あ]けて", "開[あ]いて", "開[あ]かせて", "開[あ]き"],
        kunci: 1,
        pembahasan: "Menyatakan keadaan dari kata kerja intransitif (Jidoushi): 窓が開いています (Jendelanya sedang terbuka)."
      },
      {
        pertanyaan: "日本語[にほんご]の 新聞[しんぶん]が 読[よ]める (____) に なりました。",
        pilihan: ["よう", "こと", "ため", "はず"],
        kunci: 0,
        pembahasan: "Pola perubahan kemampuan: V-Potensial + ように なりました (Sudah menjadi bisa membaca koran bahasa Jepang)."
      },
      {
        pertanyaan: "母[はは]に 部屋[へや]を 掃除[そうじ] (____) れました。",
        pilihan: ["さ", "せ", "ら", "れ"],
        kunci: 0,
        pembahasan: "Bentuk pasif (Ukemi) yang merugikan: 掃除する -> 掃除させられました (disuruh/dipaksa) atau 掃除されました."
      },
      {
        pertanyaan: "出[で]かける とき、電気[でんき]を 消[け]すのを (____) しまいました。",
        pilihan: ["忘[わす]れて", "忘[わす]れ", "忘[わす]れる", "忘[わす]れた"],
        kunci: 0,
        pembahasan: "Pola penyesalan / ketidaksengajaan: V-てしまいました. Bentuk Te dari 忘れます adalah 忘れて."
      },
      {
        pertanyaan: "危[あぶ]ないですから、ここには (____) でください。",
        pilihan: ["入[はい]らない", "入[はい]らなく", "入[はい]って", "入[はい]る"],
        kunci: 0,
        pembahasan: "Pola larangan halus: V-ないでください (Tolong jangan masuk ke sini karena berbahaya)."
      },
      {
        pertanyaan: "熱[ねつ]が あるので、今日[きょう]は 会社[かいしゃ]を (____) ほうが いいです。",
        pilihan: ["休[やす]んだ", "休[やす]む", "休[やす]んで", "休[やす]まない"],
        kunci: 0,
        pembahasan: "Pola saran/anjuran terbaik: V-た ほうが いいです (Lebih baik istirahat tidak masuk kantor hari ini)."
      },
      {
        pertanyaan: "部長[ぶちょう]は もう お帰[かえ]りに (____) ました。",
        pilihan: ["なり", "し", "され", "いたし"],
        kunci: 0,
        pembahasan: "Pola Sonkeigo (bahasa hormat menghormati lawan bicara): お + V-stem + に なります."
      },
      {
        pertanyaan: "この 辞書[じしょ]は 軽[かる]くて (____) やすいです。",
        pilihan: ["使[つか]う", "使[つか]い", "使[つか]って", "使[つか]った"],
        kunci: 1,
        pembahasan: "Pola mudah dilakukan: V-stem + やすい (Mudah dipakai)."
      },
      {
        pertanyaan: "来年[らいねん] 日本[にほん]へ 留学[りゅうがく]する (____) です。",
        pilihan: ["予定[よてい]", "はず", "わけ", "つもり"],
        kunci: 0,
        pembahasan: "Pola rencana yang sudah resmi diputuskan: V-Kamus + 予定です (Rencana / jadwal)."
      },
      {
        pertanyaan: "今[いま]にも 雨[あめ]が 降[ふ]り (____) な 空[そら]ですね。",
        pilihan: ["そう", "よう", "らしい", "みたい"],
        kunci: 0,
        pembahasan: "Pola perkiraan dari apa yang dilihat langsung: V-stem + そうな (Tampaknya akan segera turun hujan)."
      },
      {
        pertanyaan: "弟[おとうと]に 私[わたし]の ケーキを (____) てしまいました。",
        pilihan: ["食[た]べられ", "食[た]べさせ", "食[た]べて", "食[た]べさせて"],
        kunci: 0,
        pembahasan: "Bentuk pasif merugikan (Meiwaku Ukemi): 食べられます (Kue saya dimakan oleh adik)."
      },
      {
        pertanyaan: "お金[かね]が (____) ば、新[あたら]しい 車[くるま]を 買[か]いたいです。",
        pilihan: ["あれ", "あったら", "あるなら", "あっても"],
        kunci: 0,
        pembahasan: "Bentuk pengandaian Ba-kei dari ある adalah あれば."
      },
      {
        pertanyaan: "いくら 高[たか]く (____)、必要[ひつよう]な 本[ほん]は 買[か]います。",
        pilihan: ["ても", "たら", "なら", "のに"],
        kunci: 0,
        pembahasan: "Pola 'meskipun / seberapa pun...': kata sifat-i bentuk て + も (高くても = walaupun mahal)."
      },
      {
        pertanyaan: "約束[やくそく]の 時間[じかん]に (____) ように、急[いそ]ぎましょう。",
        pilihan: ["間[ま]に合[あ]う", "間[ま]に合[あ]って", "間[ま]に合[あ]った", "間[ま]に合[あ]わない"],
        kunci: 0,
        pembahasan: "Pola tujuan agar suatu kondisi tercapai: V-Kamus (kemampuan/keadaan) + ように."
      },
      {
        pertanyaan: "部屋[へや]の 電気[電氣]が (____) あります。",
        pilihan: ["つけて", "ついて", "つく", "つけ"],
        kunci: 0,
        pembahasan: "Pola keadaan yang sengaja dipersiapkan: Kata Kerja Transitif bentuk Te + あります (つけます -> つけてあります)."
      }
    ],
    N3: [
      {
        pertanyaan: "試験[しけん]の 結果[けっか]に (____)、クラスが 分[わ]けられます。",
        pilihan: ["ついて", "かんして", "よって", "たいして"],
        kunci: 2,
        pembahasan: "Pola 〜によって menyatakan dasar pembagian atau perbedaan (Tergantung pada hasil ujian, kelas akan dibagi)."
      },
      {
        pertanyaan: "彼女[かのじょ]は まるで 日本人[にほんじん]の (____) 日本語[にほんご]を 話[はな]します。",
        pilihan: ["ように", "ために", "そうに", "らしく"],
        kunci: 0,
        pembahasan: "Pola まるで 〜 ように menyatakan perumpamaan seolah-olah (Dia berbicara bahasa Jepang seolah-olah seperti orang Jepang)."
      },
      {
        pertanyaan: "仕事[しごと]が 忙[いそが]しくて、休[やす]む (____) が ありません。",
        pilihan: ["わけ", "はず", "余裕[よゆう]", "つもり"],
        kunci: 2,
        pembahasan: "休む余裕がない = Tidak ada kelonggaran/waktu luang untuk beristirahat."
      },
      {
        pertanyaan: "この 本[ほん]は 読[よ]めば 読[よ]む (____) 面白[おもしろ]くなります。",
        pilihan: ["ほど", "ばかり", "くらい", "だけに"],
        kunci: 0,
        pembahasan: "Pola 〜ば〜ほど menyatakan 'semakin... semakin...' (Buku ini semakin dibaca semakin bertambah menarik)."
      },
      {
        pertanyaan: "健康[けんこう]の (____) に、毎日[まいにち] 野菜[やさい]を 食[た]べるように しています。",
        pilihan: ["ため", "わけ", "はず", "せい"],
        kunci: 0,
        pembahasan: "Kata Benda + のために menyatakan tujuan demi kebaikan (Demi kesehatan, saya membiasakan makan sayur setiap hari)."
      },
      {
        pertanyaan: "彼[かれ]は 忙[いそが]しい (____)、わたしの 相談[そうだん]に 乗[の]ってくれた。",
        pilihan: ["にもかかわらず", "にしたがって", "にともなって", "にかんして"],
        kunci: 0,
        pembahasan: "Pola 〜にもかかわらず menyatakan 'meskipun/walaupun' (Meskipun sibuk, dia tetap mau mendengarkan curhat/konsultasi saya)."
      },
      {
        pertanyaan: "台風[たいふう]の 接近[せっきん]に (____)、風[かぜ]が 強[つよ]くなってきた。",
        pilihan: ["ともなって", "ついて", "おいて", "よって"],
        kunci: 0,
        pembahasan: "Pola 〜にともなって menyatakan perubahan yang seiring bersamaan (Seiring mendekatnya badai taifun, angin pun semakin kencang)."
      },
      {
        pertanyaan: "日本[にほん]に いる (____)、一度[いちど]は 富士山[ふじさん]に 登[のぼ]ってみたい。",
        pilihan: ["あいだに", "うちに", "まえに", "ときに"],
        kunci: 1,
        pembahasan: "Pola 〜うちに menyatakan memanfaatkan kesempatan selagi masih dalam keadaan tertentu (Selagi masih berada di Jepang, saya ingin mencoba mendaki Gunung Fuji)."
      },
      {
        pertanyaan: "雨[あめ]が 降[ふ]らない (____)、明日[あした]は サッカーの 試合[しあい]を 行[おこな]います。",
        pilihan: ["かぎり", "わりに", "ほど", "ついでに"],
        kunci: 0,
        pembahasan: "Pola 〜かぎり menyatakan 'selama / asalkan tidak...' (Selama tidak turun hujan, pertandingan sepak bola besok akan tetap dilaksanakan)."
      },
      {
        pertanyaan: "いくら 練習[れんしゅう]した (____)、なかなか 上手[じょうず]に ならない。",
        pilihan: ["ところで", "わけには", "からといって", "としても"],
        kunci: 0,
        pembahasan: "Pola V-た + ところで menyatakan 'meskipun sudah berusaha sekuat tenaga tapi hasilnya sia-sia/tidak berubah' (Sekeras apa pun berlatih, rasanya tidak kunjung mahir)."
      },
      {
        pertanyaan: "この 件[けん]に (____)、何[なに]か ご質問[しつもん]は ありますか。",
        pilihan: ["ついて", "かんして", "よって", "たいして"],
        kunci: 0,
        pembahasan: "Pola 〜について menyatakan perihal topik pembicaraan ('Mengenai hal ini, apakah ada pertanyaan?')."
      },
      {
        pertanyaan: "彼[かれ]は 親[おや]の 反対[はんたい]を (____)、海外[かいがい]へ 留学[りゅうがく]した。",
        pilihan: ["押[お]し切[き]って", "通[とお]して", "受[う]けて", "よって"],
        kunci: 0,
        pembahasan: "Ungkapan 反対を押し切って = Menolak/menerobos pertentangan orang tua demi tujuannya."
      },
      {
        pertanyaan: "こんな 難[むずか]しい 試験[しけん]、一日[いちにち]で 合格[ごうかく]できる (____) がない。",
        pilihan: ["わけ", "はず", "つもり", "こと"],
        kunci: 0,
        pembahasan: "Pola 〜わけがない berarti 'mustahil / tidak mungkin sekali bisa...'"
      },
      {
        pertanyaan: "彼[かれ]が 嘘[うそ]を ついている (____) が ありません。",
        pilihan: ["はず", "わけ", "こと", "もの"],
        kunci: 0,
        pembahasan: "Pola 〜はずがない menyatakan keyakinan rasional pembicara bahwa hal tersebut tidak mungkin terjadi."
      },
      {
        pertanyaan: "買い物[かいもの]の (____) に、銀行[ぎんこう]へ 寄[よ]ってきた。",
        pilihan: ["ついで", "あいだ", "うち", "とおり"],
        kunci: 0,
        pembahasan: "Pola 〜ついでに berarti 'sekalian / sambil memanfaatkan momen kegiatan utama' (Sekalian belanja, mampir ke bank)."
      },
      {
        pertanyaan: "年[とし]を 取[と]るに (____)、体力[たいりょく]の 衰[おとろ]えを 実感[じっかん]する。",
        pilihan: ["つれて", "したがって", "よって", "たいして"],
        kunci: 0,
        pembahasan: "Pola 〜につれて menyatakan perkembangan bertahap yang berjalan beriringan (Seiring bertambahnya usia, merasakan penurunan fisik)."
      },
      {
        pertanyaan: "この 店[みせ] (____) の 特別[とくべつ]な サービスを 提供[ていきょう]する。",
        pilihan: ["ならでは", "ばかり", "だけに", "からこそ"],
        kunci: 0,
        pembahasan: "Pola 〜ならでは berarti 'khas / hanya ada pada / keistimewaan khusus dari...'."
      },
      {
        pertanyaan: "一度[いちど] 約束[やくそく]した (____)、守[まも]らなければならない。",
        pilihan: ["以上[いじょう]", "からには", "うえで", "うちに"],
        kunci: 0,
        pembahasan: "Pola 〜以上（は） berarti 'karena sudah... maka sewajarnya/wajib...' (Karena sudah berjanji, harus ditepati)."
      },
      {
        pertanyaan: "彼[かれ]の 意見[いけん]には 賛成[さんせい] (____) かねる。",
        pilihan: ["しかねる", "がたい", "えない", "きれない"],
        kunci: 0,
        pembahasan: "Pola 〜かねる menyatakan rasa sungkan atau kesulitan moral/situasi untuk melakukan hal tersebut (Sulit untuk menyetujui)."
      },
      {
        pertanyaan: "駅前[えきまえ]を (____)、新[あたら]しい 商業[しょうぎょう]施設[しせつ]が 建設[けんせつ]されている。",
        pilihan: ["中心[ちゅうしん]に", "通[つう]じて", "めぐって", "沿[そ]って"],
        kunci: 0,
        pembahasan: "Pola 〜を中心に berarti 'berpusat pada / dengan titik utama di...'."
      }
    ],
    N2: [
      {
        pertanyaan: "たとえ 周囲[しゅうい]に (____) とも、自分[じぶん]の 信念[しんねん]を 貫[つらぬ]く。",
        pilihan: ["反対[はんたい]される", "反対[はんたい]されよう", "反対[はんたい]した", "反対[はんたい]する"],
        kunci: 1,
        pembahasan: "Pola たとえ V-ようとも berarti 'meskipun/walaupun seandainya...'. Menggunakan bentuk kehendak (Volitional) + とも."
      },
      {
        pertanyaan: "彼[かれ]の 成功[せいこう]は 努力[どりょく]の (____) に ほかならない。",
        pilihan: ["結果[けっか]", "次第[しだい]", "賜物[たまもの]", "限[かぎ]り"],
        kunci: 2,
        pembahasan: "努力の賜物 (hasil manis dari usaha keras). 〜にほかならない berarti 'tidak lain adalah...'."
      },
      {
        pertanyaan: "環境[かんきょう]問題[もんだい]を (____)、活発[かっぱつ]な 議論[ぎろん]が 行[おこな]われた。",
        pilihan: ["めぐって", "こめて", "とおして", "もとづいて"],
        kunci: 0,
        pembahasan: "Pola 〜をめぐって berarti 'seputar / memperdebatkan topik...' (Diskusi aktif berlangsung seputar masalah lingkungan)."
      },
      {
        pertanyaan: "新[あたら]しい 事業[じぎょう]を はじめるに (____)、十分[じゅうぶん]な 調査[ちょうさ]が 不可欠[ふかけつ]だ。",
        pilihan: ["あたって", "際[さい]して", "めぐって", "沿[そ]って"],
        kunci: 0,
        pembahasan: "Pola 〜にあたって berarti 'pada momen penting sebelum memulai sesuatu' (Saat hendak memulai usaha baru, riset mendalam sangat mutlak diperlukan)."
      },
      {
        pertanyaan: "どんなに 困[こま]った (____)、不正[ふせい]に 手[て]を 染[そ]める わけには いかない。",
        pilihan: ["としても", "につけ", "にしても", "どころか"],
        kunci: 0,
        pembahasan: "Pola 〜としても menyatakan pengandaian keras (Betapa pun sulit keadaannya, tidak boleh sampai terjerumus ke jalan yang salah)."
      },
      {
        pertanyaan: "彼[かれ]の 提案[ていあん]には 賛成[さんせい]しかねる (____)。",
        pilihan: ["点[てん]がある", "はずがない", "わけがない", "にちがいない"],
        kunci: 0,
        pembahasan: "Pola V-かねる adalah ekspresi halus untuk menolak / sulit melakukan sesuatu (Ada beberapa poin dari usulannya yang sulit untuk saya setujui)."
      },
      {
        pertanyaan: "法律[ほうりつ]の 改正[かいせい]に (____)、社会[しゃかい]の 仕組[しく]みも 大[おお]きく 変[か]わった。",
        pilihan: ["ともなって", "反[はん]して", "おいて", "通[つう]じて"],
        kunci: 0,
        pembahasan: "Pola 〜にともなって berarti seiring perubahan suatu peristiwa besar (Seiring revisi undang-undang, tatanan masyarakat pun turut berubah drastis)."
      },
      {
        pertanyaan: "あの 人[ひと]の 態度[たいど]は、失礼[しつれい] (____) 極[きわ]まりない。",
        pilihan: ["極[きわ]まりない", "きわまりない", "というより", "どころではない"],
        kunci: 0,
        pembahasan: "Pola 〜極まりない (Kiwamarinai) dipakai untuk menyatakan tingkat yang sangat amat keterlaluan / memuncak."
      },
      {
        pertanyaan: "プロの 選手[せんしゅ] (____)、見事[みごと]な プレーだった。",
        pilihan: ["にふさわしい", "に相応[そうおう]な", "らしい", "ぽい"],
        kunci: 0,
        pembahasan: "Pola 〜にふさわしい berarti 'sangat pantas / cocok menyandang status...' (Permainan apik yang sangat layak bagi atlet pro)."
      },
      {
        pertanyaan: "彼[かれ]の 才能[さいのう]には、感嘆[かんたん]を (____) えない。",
        pilihan: ["禁[きん]じ", "得[え]", "余儀[よぎ]なくされ", "せざる"],
        kunci: 0,
        pembahasan: "Idiom N2: 感嘆を禁じ得ない (Tak kuasa menahan rasa kagum yang meluap)."
      },
      {
        pertanyaan: "忙[いそが]しさの (____)、朝食[ちょうしょく]を 食[た]べるのを 忘[わす]れてしまった。",
        pilihan: ["あまり", "せいで", "せいに", "ばかり"],
        kunci: 0,
        pembahasan: "Pola 〜のあまり berarti 'karena saking keterlaluannya suatu keadaan, sampai menimbulkan akibat buruk'."
      },
      {
        pertanyaan: "お忙[いそが]しい ところを、わざわざ お越[こ]しいただき (____)。",
        pilihan: ["恐縮[きょうしゅく]です", "失礼[しつれい]です", "申[もう]し訳[わけ]ない", "感謝[かんしゃ]です"],
        kunci: 0,
        pembahasan: "Ungkapan Keigo N2: 恐縮です (Merasa sangat berterima kasih sekaligus tidak enak hati sudah merepotkan)."
      },
      {
        pertanyaan: "彼[かれ]の 話[はなし]は、信用[しんよう]するに (____)。",
        pilihan: ["足[た]りる", "値[あたい]する", "及[およ]ぶ", "当[あ]たる"],
        kunci: 0,
        pembahasan: "Pola 〜に足る / に足りる berarti 'layak / cukup beralasan untuk dipercaya'."
      },
      {
        pertanyaan: "一度[いちど] 引[ひ]き受[う]けた (____)、最後[さいご]まで やり遂[と]げなければならない。",
        pilihan: ["以上[いじょう]", "反面[はんめん]", "一方[いっぽう]", "末[すえ]に"],
        kunci: 0,
        pembahasan: "Pola 〜以上（は） berarti 'karena sudah terlanjur menerima tugas ini, harus dituntaskan sampai akhir'."
      },
      {
        pertanyaan: "契約[けいやく]の 締結[ていけつ]に (____)、細部[さいぶ]の 条件[じょうけん]を 詰[つ]める。",
        pilihan: ["先立[さきだ]って", "際[さい]して", "関[かん]して", "基[もと]づいて"],
        kunci: 0,
        pembahasan: "Pola 〜に先立って (Nisakitatte) berarti 'mendahului / sebelum pelaksanaan momen resmi tertentu'."
      },
      {
        pertanyaan: "理由[りゆう]の (____) を 問[と]わず、無断[むだん]欠席[けっせき]は 認[みと]められない。",
        pilihan: ["いかん", "次第[しだい]", "如何[いか]に", "有無[うむ]"],
        kunci: 0,
        pembahasan: "Pola 〜のいかんを問わず (Ikan wo towazu) berarti 'tanpa memandang apa pun alasannya'."
      }
    ],
    N1: [
      {
        pertanyaan: "大臣[だいじん]の 軽率[けいそつ]な 発言[はつげん]は、国民[こくみん]の 怒[いか]りを (____) 極[きわ]まりない。",
        pilihan: ["買[か]って", "招[まね]いて", "買[か]い", "招[まね]く"],
        kunci: 2,
        pembahasan: "怒りを買う (memancing kemarahan). 〜極まりない adalah pola N1 untuk menyatakan sesuatu yang luar biasa puncaknya / keterlaluan."
      },
      {
        pertanyaan: "彼[かれ]の 潔白[けっぱく]は、火[ひ]を (____) より 明[あき]らかだ。",
        pilihan: ["見[み]る", "消[け]す", "起[お]こす", "焚[た]く"],
        kunci: 0,
        pembahasan: "Ungkapan peribahasa N1: 火を見るより明らか (Sudah sangat jelas sekali, sejelas melihat nyala api)."
      },
      {
        pertanyaan: "事態[じたい]が ここに (____)、もはや 隠蔽[いんぺい]することは 不可能[ふかのう]だ。",
        pilihan: ["至[いた]っては", "おいては", "限[かぎ]っては", "即[そく]しては"],
        kunci: 0,
        pembahasan: "Pola 〜ここに至っては menyatakan kondisi genting yang sudah mencapai puncaknya (Ketika situasi sudah sampai separah ini, menutup-nutupinya sudah mustahil)."
      },
      {
        pertanyaan: "彼[かれ]の 圧倒的[あっとうてき]な 演技力[えんぎりょく]は、他[ほか]の 俳優[はいゆう]の 追随[ついずい]を (____)。",
        pilihan: ["許[ゆる]さない", "待[ま]たない", "避[さ]けない", "断[ことわ]らない"],
        kunci: 0,
        pembahasan: "Frasa idiomatis N1: 他の追随を許さない (Tak tertandingi / tidak ada yang mampu menyamai keunggulannya)."
      },
      {
        pertanyaan: "いかなる 困難[こんなん]が 突如[とつじょ] 降[ふ]りかかろう (____)、断固[だんこ]として 前[まえ]に進[すす]む。",
        pilihan: ["とも", "が", "か", "より"],
        kunci: 0,
        pembahasan: "Pola 〜（よ）うとも menyatakan pengandaian mutlak apapun rintangannya (Betapa pun besarnya kesulitan yang mendadak menimpa, saya akan tetap teguh melangkah maju)."
      },
      {
        pertanyaan: "理由[りゆう]が どう (____)、暴力[ぼうりょく]は 決[けっ]して 許[ゆる]されるものではない。",
        pilihan: ["であれ", "につけ", "につけても", "となれば"],
        kunci: 0,
        pembahasan: "Pola 〜であれ berarti 'apa pun / bagaimanapun keadaannya...' (Apa pun alasannya, kekerasan sama sekali tidak bisa dibenarkan)."
      },
      {
        pertanyaan: "国民[こくみん]の 理解[りかい] (____) に、この 改革[かいかく]を 進[すす]めることは できない。",
        pilihan: ["なし", "なく", "ない", "ぬき"],
        kunci: 0,
        pembahasan: "Pola 〜なしに(は) berarti 'tanpa adanya...' (Tanpa pemahaman rakyat, reformasi ini tak bisa dilanjutkan)."
      },
      {
        pertanyaan: "リーダー (____) 者[もの]は、常[つね]に 大局[たいきょく]を 見据[みす]えなければならない。",
        pilihan: ["たる", "なる", "ある", "する"],
        kunci: 0,
        pembahasan: "Pola 〜たる者 berarti 'sebagai seseorang yang menyandang jabatan/kehormatan tinggi...' (Sebagai seorang pemimpin...)."
      },
      {
        pertanyaan: "会長[かいちょう]の 挨拶[あいさつ]を (____) に、国際[こくさい]会議[かいぎ]が 幕[まく]を 開[あ]けた。",
        pilihan: ["皮切[かわき]り", "きっかけ", "契機[けいき]", "手始[てはじ]め"],
        kunci: 0,
        pembahasan: "Pola 〜を皮切りに (Kawakiri ni) berarti 'diawali dengan / sebagai permulaan rentetan acara bergengsi'."
      },
      {
        pertanyaan: "彼[かれ]の 証言[しょうげん]は、事件[じけん]の 核心[かくしん]を (____) いる。",
        pilihan: ["突[つ]いて", "射[い]て", "突[つ]き", "射[い]て"],
        kunci: 0,
        pembahasan: "Idiom N1: 核心を突く (Menyentuh inti / titik paling krusial dari suatu persoalan)."
      },
      {
        pertanyaan: "どれほど 権力[けんりょく]を 持[も]つ者[もの]と (____)、法[ほう]の 前[まえ]では 平等[びょうどう]だ。",
        pilihan: ["いえども", "いえばこそ", "いったら", "いうより"],
        kunci: 0,
        pembahasan: "Pola 〜といえども berarti 'bahkan sekelas / betapapun berkuasanya seseorang...'."
      },
      {
        pertanyaan: "彼[かれ]の 功績[こうせき]は、賞賛[しょうさん]して (____) ない。",
        pilihan: ["やま", "たえ", "すぎ", "おわら"],
        kunci: 0,
        pembahasan: "Pola 〜てやまない berarti 'sangat amat / tiada hentinya mendoakan/memuji dari lubuk hati terdalam'."
      },
      {
        pertanyaan: "周囲[しゅうい]の 反対[はんたい]を (____) ともせず、彼女[かのじょ]は 夢[ゆめ]を 追[お]い続[つづ]けた。",
        pilihan: ["もの", "こと", "わけ", "はず"],
        kunci: 0,
        pembahasan: "Pola 〜をものともせずに berarti 'tanpa gentar sedikitpun menghadapi rintangan/tentangan'."
      },
      {
        pertanyaan: "その 悲劇[ひげき]は、目[め]を (____) 惨状[さんじょう]であった。",
        pilihan: ["覆[おお]いたくなる", "覆[おお]う", "塞[ふさ]ぐ", "背[そむ]ける"],
        kunci: 0,
        pembahasan: "Idiom N1: 目を覆いたくなる (Begitu memilukan sampai-sampai tak sanggup melihatnya)."
      },
      {
        pertanyaan: "専門家[せんもんか] (____) て、この 難問[なんもん]の 解決[かいけつ]には 手[て]を 焼[や]いている。",
        pilihan: ["ならず", "なくし", "となく", "たりと"],
        kunci: 0,
        pembahasan: "Pola 〜ならずして berarti 'bahkan seorang pakar sekalipun...'"
      }
    ]
  };

  const ICONS = {
    campuran: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke-width="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
    tatabahasa: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    kosakata: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`,
    lightbulb: `<svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
    trophy: `<svg class="w-14 h-14 text-amber-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4M3 5h4M6 17v4m-2 0h4m-4-10a4 4 0 004 4h4a4 4 0 004-4V5H6v2zm12-2h3a2 2 0 012 2v1a4 4 0 01-4 4h-1m-10 0H7a4 4 0 01-4-4V7a2 2 0 012-2h3"></path></svg>`,
    star: `<svg class="w-14 h-14 text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>`,
    thumb: `<svg class="w-14 h-14 text-sky-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>`,
    sparkle: `<svg class="w-14 h-14 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    trophySmall: `<svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2 0h4m-4-10a4 4 0 004 4h4a4 4 0 004-4V5H6v2zm12-2h3a2 2 0 012 2v1a4 4 0 01-4 4h-1m-10 0H7a4 4 0 01-4-4V7a2 2 0 012-2h3"></path></svg>`,
    check: `<svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
    cross: `<svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    clock: `<svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    refresh: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>`,
    sliders: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>`,
    document: `<svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    arrowRight: `<svg class="w-4 h-4 shrink-0 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`
  };

  const CACHE_KOTOBA = {};
  const CACHE_BUNPOU = {};
  let KOTOBA_DB = [];
  let BUNPOU_DB = [];

  async function loadKotobaDB(level) {
    level = level || (state && state.level) || 'N5';
    if (CACHE_KOTOBA[level] && CACHE_KOTOBA[level].length > 10) {
      KOTOBA_DB = CACHE_KOTOBA[level];
      return KOTOBA_DB;
    }

    try {
      if (level === 'N5') {
        const res = await fetch('/eksplor/n5/data/kotoba.json');
        if (res.ok) {
          const data = await res.json();
          CACHE_KOTOBA[level] = data;
          KOTOBA_DB = data;
          return KOTOBA_DB;
        }
      } else if (level === 'N4') {
        const res = await fetch('https://maleqbfrpboaqeqshsiy.supabase.co/rest/v1/n4_kotoba_minna_2?select=*', {
          headers: {
            apikey: 'sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG',
            Authorization: 'Bearer sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG'
          }
        });
        if (res.ok) {
          const rows = await res.json();
          const mapped = rows.map(r => ({
            kanji: r.kanji || r.vocab || '',
            baca: r.hiragana || r.baca || r.kanji || '',
            arti: r.arti || '',
            contoh: r.contoh_kalimat || ''
          }));
          if (mapped.length > 0) {
            CACHE_KOTOBA[level] = mapped;
            KOTOBA_DB = mapped;
            return KOTOBA_DB;
          }
        }
      } else if (level === 'N3') {
        const res = await fetch('https://maleqbfrpboaqeqshsiy.supabase.co/rest/v1/n3_kata_benda?select=*', {
          headers: {
            apikey: 'sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG',
            Authorization: 'Bearer sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG'
          }
        });
        if (res.ok) {
          const rows = await res.json();
          const mapped = rows.map(r => ({
            kanji: r.kanji || '',
            baca: r.hiragana || r.kanji || '',
            arti: r.arti || '',
            contoh: r.contoh || ''
          }));
          if (mapped.length > 0) {
            CACHE_KOTOBA[level] = mapped;
            KOTOBA_DB = mapped;
            return KOTOBA_DB;
          }
        }
      }
    } catch (e) {
      console.warn("Gagal memuat kotoba online:", e);
    }

    if (!KOTOBA_DB || KOTOBA_DB.length === 0) {
      try {
        const res = await fetch('/eksplor/n5/data/kotoba.json');
        if (res.ok) {
          KOTOBA_DB = await res.json();
          CACHE_KOTOBA['N5'] = KOTOBA_DB;
        }
      } catch (err) {}
    }
    return KOTOBA_DB;
  }
  loadKotobaDB('N5');

  async function loadBunpouDB(level) {
    level = level || (state && state.level) || 'N5';
    if (CACHE_BUNPOU[level] && CACHE_BUNPOU[level].length > 5) {
      BUNPOU_DB = CACHE_BUNPOU[level];
      return BUNPOU_DB;
    }

    try {
      if (level === 'N5') {
        const res = await fetch('/eksplor/n5/data/bunpou.json');
        if (res.ok) {
          const data = await res.json();
          CACHE_BUNPOU[level] = data;
          BUNPOU_DB = data;
          return BUNPOU_DB;
        }
      } else if (level === 'N4') {
        const res = await fetch('https://maleqbfrpboaqeqshsiy.supabase.co/rest/v1/n4_bunpou_minna_2?select=*', {
          headers: {
            apikey: 'sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG',
            Authorization: 'Bearer sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG'
          }
        });
        if (res.ok) {
          const rows = await res.json();
          const mapped = rows.map(r => ({
            pola: r.pola_kalimat || '',
            rumus: r.rumus || '',
            arti: r.arti_pola || '',
            contoh: r.contoh_kalimat || '',
            arti_contoh: r.arti_contoh || ''
          }));
          if (mapped.length > 0) {
            CACHE_BUNPOU[level] = mapped;
            BUNPOU_DB = mapped;
            return BUNPOU_DB;
          }
        }
      } else if (level === 'N3') {
        const res = await fetch('https://maleqbfrpboaqeqshsiy.supabase.co/rest/v1/n3_bunpou?select=*', {
          headers: {
            apikey: 'sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG',
            Authorization: 'Bearer sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG'
          }
        });
        if (res.ok) {
          const rows = await res.json();
          const mapped = rows.map(r => ({
            pola: r.pola || '',
            rumus: r.rumus || '',
            arti: r.arti || '',
            contoh: r.contoh_kalimat || '',
            arti_contoh: r.arti_contoh || ''
          }));
          if (mapped.length > 0) {
            CACHE_BUNPOU[level] = mapped;
            BUNPOU_DB = mapped;
            return BUNPOU_DB;
          }
        }
      }
    } catch (e) {
      console.warn("Gagal memuat bunpou online:", e);
    }

    if (!BUNPOU_DB || BUNPOU_DB.length === 0) {
      try {
        const res = await fetch('/eksplor/n5/data/bunpou.json');
        if (res.ok) {
          BUNPOU_DB = await res.json();
          CACHE_BUNPOU['N5'] = BUNPOU_DB;
        }
      } catch (err) {}
    }
    return BUNPOU_DB;
  }
  loadBunpouDB('N5');

  function buatSoalKosakataDinamis(targetJml) {
    if (!KOTOBA_DB || KOTOBA_DB.length < 5) return [];
    const pool = KOTOBA_DB;
    const poolLen = pool.length;
    const hasil = [];

    let order = [];
    while (order.length < targetJml) {
      const sub = Array.from({ length: poolLen }, (_, idx) => idx);
      for (let i = sub.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sub[i], sub[j]] = [sub[j], sub[i]];
      }
      order = order.concat(sub);
    }

    const tipeList = ['arti', 'nihongo', 'kanji'];

    for (let i = 0; i < targetJml; i++) {
      const itemIdx = order[i];
      const item = pool[itemIdx];
      const tipe = tipeList[i % tipeList.length];

      const pengecoh = [];
      const usedIdx = new Set([itemIdx]);
      while (pengecoh.length < 3) {
        const randIdx = Math.floor(Math.random() * poolLen);
        if (!usedIdx.has(randIdx)) {
          usedIdx.add(randIdx);
          pengecoh.push(pool[randIdx]);
        }
      }

      const displayWord = item.kanji && item.kanji !== item.baca 
        ? `${item.kanji}[${item.baca}]` 
        : (item.baca || item.kanji);

      if (tipe === 'arti') {
        const pilihan = [item.arti, pengecoh[0].arti, pengecoh[1].arti, pengecoh[2].arti];
        const kunci = Math.floor(Math.random() * 4);
        const temp = pilihan[0];
        pilihan[0] = pilihan[kunci];
        pilihan[kunci] = temp;

        hasil.push({
          pertanyaan: displayWord,
          audioText: item.baca || item.kanji,
          pilihan: pilihan,
          kunci: kunci,
          pembahasan: `Kosakata「${displayWord}」artinya "${item.arti}".${item.contoh ? ` Contoh: ${item.contoh}` : ''}`
        });
      } else if (tipe === 'nihongo') {
        const formatOpt = (obj) => obj.kanji && obj.kanji !== obj.baca ? `${obj.kanji}[${obj.baca}]` : (obj.baca || obj.kanji);
        const pilihan = [displayWord, formatOpt(pengecoh[0]), formatOpt(pengecoh[1]), formatOpt(pengecoh[2])];
        const kunci = Math.floor(Math.random() * 4);
        const temp = pilihan[0];
        pilihan[0] = pilihan[kunci];
        pilihan[kunci] = temp;

        hasil.push({
          pertanyaan: item.arti,
          audioText: item.baca || item.kanji,
          pilihan: pilihan,
          kunci: kunci,
          pembahasan: `Bahasa Jepang untuk "${item.arti}" adalah「${displayWord}」.${item.contoh ? ` Contoh: ${item.contoh}` : ''}`
        });
      } else {
        if (item.kanji && item.kanji !== item.baca) {
          const pilihan = [item.baca, pengecoh[0].baca || pengecoh[0].kanji, pengecoh[1].baca || pengecoh[1].kanji, pengecoh[2].baca || pengecoh[2].kanji];
          const kunci = Math.floor(Math.random() * 4);
          const temp = pilihan[0];
          pilihan[0] = pilihan[kunci];
          pilihan[kunci] = temp;

          hasil.push({
            pertanyaan: item.kanji,
            audioText: item.baca,
            pilihan: pilihan,
            kunci: kunci,
            pembahasan: `Kanji「${item.kanji}」dibaca sebagai「${item.baca}」(Arti: "${item.arti}").`
          });
        } else {
          const pilihan = [item.arti, pengecoh[0].arti, pengecoh[1].arti, pengecoh[2].arti];
          const kunci = Math.floor(Math.random() * 4);
          const temp = pilihan[0];
          pilihan[0] = pilihan[kunci];
          pilihan[kunci] = temp;

          hasil.push({
            pertanyaan: displayWord,
            audioText: item.baca || item.kanji,
            pilihan: pilihan,
            kunci: kunci,
            pembahasan: `Kosakata「${displayWord}」artinya "${item.arti}".`
          });
        }
      }
    }
    return hasil;
  }

  function buatSoalBunpouDinamis(targetJml) {
    const pool = (BUNPOU_DB && BUNPOU_DB.length > 0) ? BUNPOU_DB : [];
    const poolLen = pool.length;
    const cadanganList = (BANK_SOAL_CADANGAN[state.level] || BANK_SOAL_CADANGAN.N5);
    const hasil = [];

    const GRAMMAR_MARKERS = [
      { key: "じゃ ありません", opts: ["じゃ ありません", "では ないです", "ありません", "でした"] },
      { key: "では ありません", opts: ["では ありません", "じゃ ないです", "ありません", "でした"] },
      { key: "ないでください", opts: ["ないでください", "てください", "なくてはいけません", "ないで"] },
      { key: "てください", opts: ["てください", "ないでください", "てはいけません", "てもいいです"] },
      { key: "てもいいです", opts: ["てもいいです", "てはいけません", "てください", "なくてはいけません"] },
      { key: "てはいけません", opts: ["てはいけません", "てもいいです", "てください", "ないでください"] },
      { key: "まえに", opts: ["まえに", "あとで", "ときに", "から"] },
      { key: "あとで", opts: ["あとで", "まえに", "ときに", "うちに"] },
      { key: "てから", opts: ["てから", "まえに", "あとで", "までに"] },
      { key: "ながら", opts: ["ながら", "うちに", "あいだに", "まえに"] },
      { key: "ほうがいい", opts: ["ほうがいい", "つもりです", "ようです", "そうです"] },
      { key: "かもしれません", opts: ["かもしれません", "はずです", "わけです", "にちがいありません"] },
      { key: "ために", opts: ["ために", "ように", "せいで", "おかげで"] },
      { key: "ように", opts: ["ように", "ために", "そうに", "らしく"] },
      { key: "うちに", opts: ["うちに", "あいだに", "まえに", "ときに"] },
      { key: "すぎます", opts: ["すぎます", "やすくなります", "にくくなります", "そうになります"] },
      { key: "すぎる", opts: ["すぎる", "やすい", "にくい", "そう"] },
      { key: "やすい", opts: ["やすい", "にくい", "たい", "そう"] },
      { key: "にくい", opts: ["にくい", "やすい", "ない", "そう"] },
      { key: "によって", opts: ["によって", "について", "にかんして", "にたいして"] },
      { key: "について", opts: ["について", "によって", "にかんして", "にたいして"] },
      { key: "にかんして", opts: ["にかんして", "について", "によって", "にたいして"] },
      { key: "にもかかわらず", opts: ["にもかかわらず", "にしたがって", "にともなって", "にかんして"] },
      { key: "にともなって", opts: ["にともなって", "について", "おいて", "よって"] },
      { key: "かぎり", opts: ["かぎり", "わりに", "ほど", "ついでに"] },
      { key: "は", opts: ["は", "が", "を", "に"] },
      { key: "が", opts: ["が", "は", "を", "に"] },
      { key: "を", opts: ["を", "が", "に", "で"] },
      { key: "に", opts: ["に", "で", "へ", "を"] },
      { key: "で", opts: ["で", "に", "を", "と"] },
      { key: "へ", opts: ["へ", "に", "で", "を"] },
      { key: "と", opts: ["と", "に", "で", "や"] },
      { key: "も", opts: ["も", "は", "が", "を"] },
      { key: "の", opts: ["の", "な", "に", "で"] },
      { key: "から", opts: ["から", "まで", "より", "ので"] },
      { key: "まで", opts: ["まで", "から", "までに", "ほど"] }
    ];

    let itemIdx = 0;
    for (let i = 0; i < targetJml; i++) {
      let soalDibuat = false;
      if (poolLen > 0) {
        const item = pool[itemIdx % poolLen];
        itemIdx++;
        const kalimat = item.contoh || item.contoh_kalimat || "";

        let matched = null;
        for (const m of GRAMMAR_MARKERS) {
          if (kalimat.includes(m.key)) {
            matched = m;
            break;
          }
        }

        if (matched && kalimat) {
          const idx = kalimat.indexOf(matched.key);
          const pertanyaanKalimat = kalimat.substring(0, idx) + "(____)" + kalimat.substring(idx + matched.key.length);
          const opts = matched.opts.slice();
          const kunciJawaban = opts[0];
          for (let k = opts.length - 1; k > 0; k--) {
            const r = Math.floor(Math.random() * (k + 1));
            [opts[k], opts[r]] = [opts[r], opts[k]];
          }
          const kunciIdx = opts.indexOf(kunciJawaban);

          hasil.push({
            pertanyaan: pertanyaanKalimat,
            pilihan: opts,
            kunci: kunciIdx,
            pembahasan: `Pola「${item.pola || matched.key}」. Arti kalimat: "${item.arti_contoh || item.arti || ''}"`
          });
          soalDibuat = true;
        }
      }

      if (!soalDibuat) {
        const c = cadanganList[i % cadanganList.length];
        hasil.push({ ...c });
      }
    }
    return hasil;
  }

  let state = {
    tahap: 'pilih',
    level: 'N5',
    kategori: 'campur',
    jumlah: 10,
    pakaiTimer: true,
    waktuPerSoal: 45,
    timerId: null,
    sisaWaktu: 45,
    daftarSoal: [],
    indeksSoal: 0,
    jawabanUser: [],
    skor: 0,
    sedangMenjawab: false,
    reviewLimit: 50
  };

  function renderFurigana(text) {
    if (!text) return "";
    let parsed = String(text);
    parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\[([^\x00-\x7F]+?)\]/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
    parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\(([^\x00-\x7F]+?)\)/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
    return parsed;
  }

  function putarSuaraSoal(text, kataJepang) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    let textToSpeak = kataJepang || text;
    const clean = String(textToSpeak).replace(/\[.*?\]|\(.*?\)|(____)/g, ' ').trim();
    if (!clean) return;
    const utter = new SpeechSynthesisUtterance(clean);
    const hasJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(clean);
    utter.lang = hasJapanese ? 'ja-JP' : 'id-ID';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }

  function getHighScore(level) {
    const data = JSON.parse(localStorage.getItem('jlpt_kuis_highscore') || "{}");
    return data[level] || null;
  }

  function setHighScore(level, skor, total) {
    const data = JSON.parse(localStorage.getItem('jlpt_kuis_highscore') || "{}");
    const persentase = Math.round((skor / total) * 100);
    if (!data[level] || persentase > data[level].persentase) {
      data[level] = { skor, total, persentase, tanggal: new Date().toLocaleDateString('id-ID') };
      localStorage.setItem('jlpt_kuis_highscore', JSON.stringify(data));
      return true;
    }
    return false;
  }

  window.initKuisJLPT = function() {
    renderView();
  };

  function renderView() {
    const root = document.getElementById('kuis-root');
    if (!root) return;

    if (state.tahap === 'pilih') {
      renderLayarPilih(root);
    } else if (state.tahap === 'loading') {
      renderLayarLoading(root);
    } else if (state.tahap === 'main') {
      renderLayarMain(root);
    } else if (state.tahap === 'hasil') {
      renderLayarHasil(root);
    }
  }

  function renderLayarPilih(root) {
    const hs = getHighScore(state.level);
    const levels = [
      { id: 'N5', title: 'N5', sub: 'Pemula Dasar', desc: 'Hiragana, kosakata dasar & pola kalimat Minna no Nihongo 1' },
      { id: 'N4', title: 'N4', sub: 'Menengah Bawah', desc: 'Pola kalimat Minna no Nihongo 2, bentuk Te, Tara, Ukemi' },
      { id: 'N3', title: 'N3', sub: 'Tingkat Menengah', desc: 'Jembatan ke bahasa Jepang alami, nuansa kalimat & partikel' },
      { id: 'N2', title: 'N2', sub: 'Menengah Atas', desc: 'Tata bahasa koran, kerja, ragam hormat & ekspresi idiomatis' },
      { id: 'N1', title: 'N1', sub: 'Tingkat Mahir', desc: 'Penguasaan sastra, nuansa halus, kiasan & bahasa tingkat tinggi' }
    ];

    root.innerHTML = `
      <div class="space-y-7 animate-in fade-in duration-200">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-1">
          <a href="/eksplor/" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
            <span>←</span> <span>Kembali ke Eksplor</span>
          </a>
        </div>

        <div class="space-y-2.5 text-center sm:text-left">
          ${hs ? `
            <div class="flex items-center justify-center sm:justify-start">
              <span class="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 flex items-center gap-1.5">
                ${ICONS.trophySmall} <span>Rekor Terbaik:</span> <span class="font-black">${hs.persentase}%</span>
              </span>
            </div>
          ` : ''}
          <h1 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Kuis Nihonggo
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Kuis ini awalnya saya rancang buat personal study notes dan simulasi ujian mandiri. Hopefully might be useful for your Japanese learning journey too!
          </p>
        </div>

        <div class="space-y-3">
          <label class="text-xs font-black uppercase tracking-wider text-slate-400 block">1. Pilih Tingkat Kemampuan (Level)</label>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
            ${levels.map(l => {
              const aktif = state.level === l.id;
              return `
                <div onclick="window.pilihLevelKuis('${l.id}')" class="p-4 rounded-2xl border cursor-pointer transition-all active:scale-95 flex flex-col justify-between ${
                  aktif 
                    ? 'bg-sky-500/10 border-sky-500 ring-2 ring-sky-500/30 text-white shadow-md' 
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
                }">
                  <div class="flex items-center justify-between">
                    <span class="text-xl font-black ${aktif ? 'text-sky-400' : 'text-slate-900 dark:text-white'}">${l.title}</span>
                  </div>
                  <span class="text-[11px] font-bold mt-1 ${aktif ? 'text-sky-300' : 'text-slate-400'}">${l.sub}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-xs font-black uppercase tracking-wider text-slate-400 block">2. Kategori Materi</label>
          <div class="grid grid-cols-3 gap-2 sm:gap-3">
            <button type="button" onclick="window.pilihKategoriKuis('campur')" class="py-3 px-2 rounded-xl border text-xs font-bold transition active:scale-95 flex items-center justify-center gap-2 ${
              state.kategori === 'campur'
                ? 'bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-500/25'
                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
            }">
              <span class="${state.kategori === 'campur' ? 'text-white' : 'text-sky-400'}">${ICONS.campuran}</span>
              <span>Campuran</span>
            </button>
            <button type="button" onclick="window.pilihKategoriKuis('bunpou')" class="py-3 px-2 rounded-xl border text-xs font-bold transition active:scale-95 flex items-center justify-center gap-2 ${
              state.kategori === 'bunpou'
                ? 'bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-500/25'
                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
            }">
              <span class="${state.kategori === 'bunpou' ? 'text-white' : 'text-sky-400'}">${ICONS.tatabahasa}</span>
              <span>Tata Bahasa</span>
            </button>
            <button type="button" onclick="window.pilihKategoriKuis('goi')" class="py-3 px-2 rounded-xl border text-xs font-bold transition active:scale-95 flex items-center justify-center gap-2 ${
              state.kategori === 'goi'
                ? 'bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-500/25'
                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
            }">
              <span class="${state.kategori === 'goi' ? 'text-white' : 'text-sky-400'}">${ICONS.kosakata}</span>
              <span>Kosakata</span>
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-xs font-black uppercase tracking-wider text-slate-400 block">3. Jumlah Soal</label>
            <span class="text-[11px] font-bold text-sky-400 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>Ribuan Soal Dinamis Tersedia</span>
            </span>
          </div>

          <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
            ${[5, 10, 20, 50, 100].map(jml => `
              <button type="button" onclick="window.pilihJumlahKuis(${jml})" class="py-2.5 px-2 rounded-xl border text-xs font-bold transition active:scale-95 ${
                state.jumlah === jml
                  ? 'bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-500/25'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
              }">
                ${jml} Soal
              </button>
            `).join('')}

            <div class="relative flex items-center bg-slate-50 dark:bg-slate-900 border ${
              ![5, 10, 20, 50, 100].includes(state.jumlah) ? 'border-sky-500 ring-2 ring-sky-500/30' : 'border-slate-200 dark:border-slate-800'
            } rounded-xl px-2 py-1.5 transition">
              <input 
                type="number" 
                id="input-custom-soal"
                min="1" 
                max="1000" 
                value="${state.jumlah}"
                oninput="window.ketikJumlahKuis(this.value)" 
                class="w-full bg-transparent text-center text-xs font-black text-slate-900 dark:text-white focus:outline-none"
                placeholder="1-1000"
                title="Ketik jumlah soal bebas (1 - 1000)"
              />
              <span class="text-[10px] text-slate-400 font-bold ml-0.5 select-none pr-0.5">Soal</span>
            </div>
          </div>
          <p class="text-[11px] text-slate-400 leading-relaxed">
            Pilih opsi cepat atau <strong class="text-slate-700 dark:text-slate-300 font-semibold">ketik bebas</strong> jumlah soal yang Anda inginkan <span class="inline-block whitespace-nowrap">(1 sampai 1.000 soal maraton).</span>
          </p>
        </div>

        <div class="space-y-3">
          <label class="text-xs font-black uppercase tracking-wider text-slate-400 block">4. Batas Waktu per Soal</label>
          <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Timer 45 Detik per Soal</h4>
                <p class="text-[11px] text-slate-400">Latih kecepatan respons dan ketepatan ujian JLPT asli.</p>
              </div>
            </div>
            <button onclick="window.toggleTimerKuis()" class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              state.pakaiTimer ? 'bg-sky-500' : 'bg-slate-300 dark:bg-slate-700'
            }">
              <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                state.pakaiTimer ? 'translate-x-5' : 'translate-x-0'
              }"></span>
            </button>
          </div>
        </div>

        <div class="pt-2">
          <button onclick="window.mulaiSesiKuis()" class="w-full py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 active:scale-[0.99] text-white text-base font-black shadow-lg shadow-sky-500/25 transition flex items-center justify-center gap-2 group">
            <span id="btn-mulai-text">Mulai Kuis ${state.level} (${state.jumlah} Soal) Sekarang</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  window.pilihLevelKuis = function(lvl) {
    state.level = lvl;
    renderView();
  };

  window.pilihKategoriKuis = function(kat) {
    state.kategori = kat;
    renderView();
  };

  window.pilihJumlahKuis = function(jml) {
    state.jumlah = Math.max(1, Math.min(1000, parseInt(jml) || 10));
    renderView();
  };

  window.ketikJumlahKuis = function(val) {
    const parsed = parseInt(val);
    if (!isNaN(parsed) && parsed > 0) {
      state.jumlah = Math.max(1, Math.min(1000, parsed));
    } else {
      state.jumlah = 1;
    }
    const btnText = document.getElementById('btn-mulai-text');
    if (btnText) {
      btnText.innerText = `Mulai Kuis ${state.level} (${state.jumlah} Soal) Sekarang`;
    }
  };

  window.toggleTimerKuis = function() {
    state.pakaiTimer = !state.pakaiTimer;
    renderView();
  };

  function renderLayarLoading(root) {
    root.innerHTML = `
      <div class="py-20 text-center space-y-6 animate-in fade-in duration-200 max-w-md mx-auto">
        <div class="relative w-16 h-16 mx-auto">
          <div class="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
          <div class="absolute inset-0 rounded-full border-4 border-sky-400 border-t-transparent animate-spin"></div>
        </div>
        <div class="space-y-1">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">Menyusun ${state.jumlah} Soal Latihan ${state.level}...</h3>
          <p class="text-xs text-slate-400">Menyiapkan materi standar ujian JLPT pilihan Anda</p>
        </div>
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-400 flex items-start gap-2.5 text-left">
          ${ICONS.lightbulb}
          <div class="leading-relaxed">
            <span class="font-bold text-slate-200">Tips:</span> Baca kalimat soal sampai selesai sebelum menentukan partikel atau bentuk kata kerja yang tepat.
          </div>
        </div>
      </div>
    `;
  }

  window.mulaiSesiKuis = async function() {
    state.tahap = 'loading';
    renderView();

    await Promise.all([loadKotobaDB(state.level), loadBunpouDB(state.level)]);

    let soalDihasilkan = [];

    const cadangan = (BANK_SOAL_CADANGAN[state.level] || BANK_SOAL_CADANGAN.N5).slice();
    for (let i = cadangan.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cadangan[i], cadangan[j]] = [cadangan[j], cadangan[i]];
    }

    if (state.kategori === 'bunpou') {
      const dinamisBunpou = buatSoalBunpouDinamis(state.jumlah);
      soalDihasilkan = cadangan.concat(dinamisBunpou);
    } else if (state.kategori === 'goi') {
      const dinamisKotoba = buatSoalKosakataDinamis(state.jumlah);
      soalDihasilkan = dinamisKotoba;
      if (soalDihasilkan.length < state.jumlah) {
        soalDihasilkan = soalDihasilkan.concat(buatSoalKosakataDinamis(state.jumlah - soalDihasilkan.length));
      }
    } else {
      const targetBunpou = Math.ceil(state.jumlah / 2);
      const targetKotoba = state.jumlah - targetBunpou;
      const dinamisBunpou = buatSoalBunpouDinamis(targetBunpou);
      const dinamisKotoba = buatSoalKosakataDinamis(targetKotoba);
      soalDihasilkan = cadangan.slice(0, targetBunpou).concat(dinamisBunpou).concat(dinamisKotoba);
    }

    for (let i = soalDihasilkan.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [soalDihasilkan[i], soalDihasilkan[j]] = [soalDihasilkan[j], soalDihasilkan[i]];
    }

    if (soalDihasilkan.length < state.jumlah) {
      const sisa = state.jumlah - soalDihasilkan.length;
      if (state.kategori === 'bunpou') {
        soalDihasilkan = soalDihasilkan.concat(buatSoalBunpouDinamis(sisa));
      } else {
        soalDihasilkan = soalDihasilkan.concat(buatSoalKosakataDinamis(sisa));
      }
    }

    soalDihasilkan = soalDihasilkan.slice(0, state.jumlah);

    setTimeout(() => {
      state.daftarSoal = soalDihasilkan;
      state.indeksSoal = 0;
      state.jawabanUser = [];
      state.skor = 0;
      state.tahap = 'main';
      mulaiSoalAktif();
    }, 250);
  };

  function mulaiSoalAktif() {
    state.sedangMenjawab = false;
    clearInterval(state.timerId);

    if (state.pakaiTimer) {
      state.sisaWaktu = state.waktuPerSoal;
      state.timerId = setInterval(() => {
        state.sisaWaktu--;
        updateTimerDisplay();
        if (state.sisaWaktu <= 0) {
          clearInterval(state.timerId);
          window.pilihJawabanKuis(-1, true);
        }
      }, 1000);
    }

    renderView();
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('kuis-timer-text');
    const timerBar = document.getElementById('kuis-timer-bar');
    if (!timerEl) return;

    timerEl.innerText = `${state.sisaWaktu}s`;
    if (timerBar) {
      const persen = (state.sisaWaktu / state.waktuPerSoal) * 100;
      timerBar.style.width = `${persen}%`;
      if (state.sisaWaktu <= 10) {
        timerBar.className = "h-full bg-rose-500 transition-all duration-1000";
        timerEl.className = "text-rose-400 font-mono font-black text-xs animate-pulse";
      } else if (state.sisaWaktu <= 20) {
        timerBar.className = "h-full bg-amber-400 transition-all duration-1000";
        timerEl.className = "text-amber-400 font-mono font-black text-xs";
      } else {
        timerBar.className = "h-full bg-sky-400 transition-all duration-1000";
        timerEl.className = "text-sky-400 font-mono font-black text-xs";
      }
    }
  }

  function renderLayarMain(root) {
    const soal = state.daftarSoal[state.indeksSoal];
    if (!soal) return;

    const progressPersen = ((state.indeksSoal + 1) / state.daftarSoal.length) * 100;
    const labelPilihan = ['A', 'B', 'C', 'D'];

    root.innerHTML = `
      <div class="space-y-6 animate-in fade-in duration-150">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 min-w-0">
              <span class="px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20 shrink-0 whitespace-nowrap">
                JLPT ${state.level}
              </span>
              <span class="text-slate-400 font-bold whitespace-nowrap">
                Soal <span class="text-slate-800 dark:text-slate-200 font-black">${state.indeksSoal + 1}</span> dari <span class="text-slate-800 dark:text-slate-200 font-black">${state.daftarSoal.length}</span>
              </span>
            </div>

            <button 
              type="button" 
              onclick="window.konfirmasiKeluarKuis()" 
              class="text-slate-400 hover:text-rose-400 font-bold text-xs transition shrink-0 whitespace-nowrap flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-rose-500/10 active:scale-95"
            >
              <span>✕</span>
              <span>Batal</span>
            </button>
          </div>

          <div class="space-y-1">
            <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-sky-500 transition-all duration-300" style="width: ${progressPersen}%"></div>
            </div>
            ${state.pakaiTimer ? `
              <div class="w-full h-0.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                <div id="kuis-timer-bar" class="h-full bg-sky-400 transition-all duration-1000" style="width: 100%"></div>
              </div>
            ` : ''}
          </div>

          <div class="flex items-center justify-between gap-2 pt-0.5">
            ${state.pakaiTimer ? `
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
                <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span id="kuis-timer-text" class="text-sky-400 font-mono font-black text-xs">${state.sisaWaktu}s</span>
              </div>
            ` : '<div></div>'}

            <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 ml-auto">
              <button 
                type="button" 
                onclick="window.kembaliSoalKuis()" 
                ${state.indeksSoal === 0 ? 'disabled' : ''}
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${state.indeksSoal === 0 ? 'bg-sky-500/5 text-sky-400/25 border border-sky-500/10 cursor-not-allowed' : 'bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/20 active:scale-95 transition'} flex items-center justify-center shrink-0"
                title="Kembali ke soal sebelumnya (Shortcut: ← Panah Kiri)"
                aria-label="Kembali ke soal sebelumnya"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button 
                type="button" 
                onclick="window.skipSoalKuis()" 
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/20 flex items-center justify-center shrink-0 transition active:scale-95"
                title="Lewati soal ini (Shortcut: → Panah Kanan)"
                aria-label="Lewati soal ini"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
          <div class="flex items-start justify-between gap-3">
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-[2.6] tracking-wide">
              ${renderFurigana(soal.pertanyaan)}
            </h2>
            <button onclick="window.putarAudioSoal('${(soal.audioText || soal.pertanyaan || '').replace(/'/g, "\\'")}')" class="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0" title="Dengarkan Soal (Shortcut: P)">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            ${soal.pilihan.map((p, idx) => `
              <button 
                id="btn-opsi-${idx}" 
                onclick="window.pilihJawabanKuis(${idx}, false)" 
                title="Pilih opsi ${labelPilihan[idx]} (Shortcut: ${labelPilihan[idx]} atau ${idx + 1})"
                class="opsi-jawaban p-4 rounded-2xl border text-left flex items-center gap-3 transition-all duration-150 active:scale-98 bg-white dark:bg-cardDark border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base group"
              >
                <span class="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center text-xs font-black shrink-0 transition">
                  ${labelPilihan[idx]}
                </span>
                <span class="flex-1">${renderFurigana(p)}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div id="kuis-panel-pembahasan" class="hidden space-y-4 animate-in slide-in-from-bottom-3 duration-200">
          <div id="kuis-box-status" class="p-5 rounded-2xl border flex items-start gap-3"></div>

          <div class="flex justify-end">
            <button onclick="window.lanjutSoalBerikutnya()" title="Lanjut ke soal berikutnya (Shortcut: Enter / Spasi / →)" class="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-black text-sm shadow-md transition flex items-center gap-2 group">
              <span>${state.indeksSoal + 1 === state.daftarSoal.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.putarAudioSoal = function(text) {
    putarSuaraSoal(text);
  };

  window.pilihJawabanKuis = function(indeksDipilih, waktuHabis = false) {
    if (state.sedangMenjawab) return;
    state.sedangMenjawab = true;
    clearInterval(state.timerId);

    const soal = state.daftarSoal[state.indeksSoal];
    const isBenar = (indeksDipilih === soal.kunci);

    if (isBenar) state.skor++;

    state.jawabanUser.push({
      nomor: state.indeksSoal + 1,
      dipilih: indeksDipilih,
      kunci: soal.kunci,
      isBenar: isBenar,
      soal: soal,
      pembahasan: soal.pembahasan,
      waktuHabis: waktuHabis
    });

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`btn-opsi-${i}`);
      if (!btn) continue;
      btn.disabled = true;
      btn.classList.remove('hover:border-sky-500', 'active:scale-98', 'cursor-pointer');
      btn.classList.add('cursor-default');

      if (i === soal.kunci) {
        btn.className = "p-4 rounded-2xl border text-left flex items-center gap-3 bg-emerald-500/15 border-emerald-500 text-emerald-400 font-bold text-sm sm:text-base ring-2 ring-emerald-500/20";
      } else if (i === indeksDipilih && !isBenar) {
        btn.className = "p-4 rounded-2xl border text-left flex items-center gap-3 bg-rose-500/15 border-rose-500 text-rose-400 font-bold text-sm sm:text-base ring-2 ring-rose-500/20";
      } else {
        btn.className = "p-4 rounded-2xl border text-left flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 font-medium opacity-50";
      }
    }

    const panel = document.getElementById('kuis-panel-pembahasan');
    const box = document.getElementById('kuis-box-status');
    if (panel && box) {
      panel.classList.remove('hidden');

      if (waktuHabis) {
        box.className = "p-5 rounded-2xl border bg-amber-500/10 border-amber-500/30 text-amber-300 space-y-1.5";
        box.innerHTML = `
          <div class="font-black text-sm flex items-center gap-2">
            ${ICONS.clock}
            <span>Waktu Habis!</span>
          </div>
          <p class="text-xs leading-relaxed text-slate-300 pt-1">
            <strong>Jawaban Benar:</strong> <span class="text-emerald-400 font-bold">${soal.pilihan[soal.kunci]}</span><br>
            ${soal.pembahasan || ''}
          </p>
        `;
      } else if (isBenar) {
        box.className = "p-5 rounded-2xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-300 space-y-1.5";
        box.innerHTML = `
          <div class="font-black text-sm flex items-center gap-2">
            ${ICONS.check}
            <span>Jawaban Anda Tepat Sekali!</span>
          </div>
          <p class="text-xs leading-relaxed text-slate-300 pt-1">
            ${soal.pembahasan || ''}
          </p>
        `;
      } else {
        box.className = "p-5 rounded-2xl border bg-rose-500/10 border-rose-500/30 text-rose-300 space-y-1.5";
        box.innerHTML = `
          <div class="font-black text-sm flex items-center gap-2">
            ${ICONS.cross}
            <span>Kurang Tepat</span>
          </div>
          <p class="text-xs leading-relaxed text-slate-300 pt-1">
            <strong>Jawaban Benar:</strong> <span class="text-emerald-400 font-bold">${soal.pilihan[soal.kunci]}</span><br>
            ${soal.pembahasan || ''}
          </p>
        `;
      }
    }
  };

  window.lanjutSoalBerikutnya = function() {
    if (state.indeksSoal + 1 < state.daftarSoal.length) {
      state.indeksSoal++;
      mulaiSoalAktif();
    } else {
      selesaikanKuis();
    }
  };

  window.kembaliSoalKuis = function() {
    if (state.indeksSoal <= 0) return;
    clearInterval(state.timerId);

    if (state.sedangMenjawab) {
      const idxNow = state.jawabanUser.findIndex(j => j.nomor === state.indeksSoal + 1);
      if (idxNow !== -1) {
        if (state.jawabanUser[idxNow].isBenar) {
          state.skor = Math.max(0, state.skor - 1);
        }
        state.jawabanUser.splice(idxNow, 1);
      }
    }

    state.indeksSoal--;

    const idxTarget = state.jawabanUser.findIndex(j => j.nomor === state.indeksSoal + 1);
    if (idxTarget !== -1) {
      if (state.jawabanUser[idxTarget].isBenar) {
        state.skor = Math.max(0, state.skor - 1);
      }
      state.jawabanUser.splice(idxTarget, 1);
    }

    state.sedangMenjawab = false;
    mulaiSoalAktif();
  };

  window.skipSoalKuis = function() {
    if (state.sedangMenjawab) {
      window.lanjutSoalBerikutnya();
      return;
    }
    clearInterval(state.timerId);

    const soal = state.daftarSoal[state.indeksSoal];
    if (soal) {
      state.jawabanUser.push({
        nomor: state.indeksSoal + 1,
        dipilih: -2,
        kunci: soal.kunci,
        isBenar: false,
        isSkipped: true,
        soal: soal,
        pembahasan: soal.pembahasan,
        waktuHabis: false
      });
    }

    if (state.indeksSoal + 1 < state.daftarSoal.length) {
      state.indeksSoal++;
      mulaiSoalAktif();
    } else {
      selesaikanKuis();
    }
  };

  window.konfirmasiKeluarKuis = function() {
    if (confirm("Apakah Anda yakin ingin membatalkan kuis ini? Progres kuis tidak akan tersimpan.")) {
      clearInterval(state.timerId);
      state.tahap = 'pilih';
      renderView();
    }
  };

  function selesaikanKuis() {
    clearInterval(state.timerId);
    state.tahap = 'hasil';
    state.reviewLimit = 50;

    const isRecord = setHighScore(state.level, state.skor, state.daftarSoal.length);
    renderView();
  }

  function renderLayarHasil(root) {
    const total = state.daftarSoal.length;
    const benar = state.skor;
    const dilewati = state.jawabanUser.filter(j => j.isSkipped).length;
    const salah = total - benar - dilewati;
    const totalDijawab = total - dilewati;
    const persen = totalDijawab > 0 ? Math.round((benar / totalDijawab) * 100) : 0;

    let pesanPredikat = "";
    let svgPredikat = "";
    let warnaPredikat = "";

    if (totalDijawab === 0) {
      pesanPredikat = "Semua soal dilewati dalam sesi ini. Tetap semangat berlatih! (スキップ)";
      svgPredikat = ICONS.sparkle;
      warnaPredikat = "text-slate-300";
    } else if (persen === 100) {
      pesanPredikat = "Sempurna! Penguasaan materi Anda luar biasa! (満点合格)";
      svgPredikat = ICONS.trophy;
      warnaPredikat = "text-amber-400";
    } else if (persen >= 80) {
      pesanPredikat = "Lulus Memuaskan! Anda siap menghadapi ujian sesungguhnya! (合格)";
      svgPredikat = ICONS.star;
      warnaPredikat = "text-emerald-400";
    } else if (persen >= 60) {
      pesanPredikat = "Cukup Bagus! Perlu sedikit pemantapan pada beberapa poin. (もう少し)";
      svgPredikat = ICONS.thumb;
      warnaPredikat = "text-sky-400";
    } else {
      pesanPredikat = "Tetap Semangat! Ulangi kembali latihan untuk memperkuat daya ingat. (頑張って)";
      svgPredikat = ICONS.sparkle;
      warnaPredikat = "text-slate-300";
    }

    root.innerHTML = `
      <div class="space-y-8 animate-in fade-in zoom-in-95 duration-200 max-w-2xl mx-auto">
        <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm">
          <div class="block animate-bounce">${svgPredikat}</div>
          
          <div class="space-y-1">
            <span class="text-xs font-black uppercase tracking-wider text-slate-400">Hasil Kuis JLPT ${state.level}</span>
            <div class="text-6xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
              ${persen}<span class="text-3xl font-bold text-sky-400">%</span>
            </div>
            ${dilewati > 0 ? `
              <span class="inline-block text-[11px] font-bold text-slate-400 pt-1">
                Akurasi Jawaban: ${benar} dari ${totalDijawab} soal yang dijawab (${dilewati} soal dilewati)
              </span>
            ` : ''}
            <p class="text-sm font-bold ${warnaPredikat} pt-1 max-w-md mx-auto">
              ${pesanPredikat}
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 max-w-lg mx-auto">
            <div class="p-3 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800">
              <span class="text-[10px] text-slate-400 uppercase font-bold block">Total Soal</span>
              <span class="text-base font-black text-slate-900 dark:text-white">${total}</span>
            </div>
            <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span class="text-[10px] text-emerald-400 uppercase font-bold block">Benar</span>
              <span class="text-base font-black text-emerald-400">${benar}</span>
            </div>
            <div class="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
              <span class="text-[10px] text-rose-400 uppercase font-bold block">Salah</span>
              <span class="text-base font-black text-rose-400">${salah}</span>
            </div>
            <div class="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20">
              <span class="text-[10px] text-sky-400 uppercase font-bold block">Dilewati</span>
              <span class="text-base font-black text-sky-400">${dilewati}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onclick="window.mulaiSesiKuis()" class="py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-sm shadow-sm transition active:scale-95 flex items-center justify-center gap-2">
            ${ICONS.refresh}
            <span>Ulangi Kuis Ini</span>
          </button>
          <button onclick="window.kembaliKeMenuPilih()" class="py-3.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition active:scale-95 flex items-center justify-center gap-2">
            ${ICONS.sliders}
            <span>Ganti Level & Kategori</span>
          </button>
          <a href="/eksplor/" class="col-span-1 sm:col-span-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-400 hover:text-white text-xs font-bold text-center block transition">
            ← Kembali ke Menu Eksplor
          </a>
        </div>

        <div class="space-y-3 pt-2">
          <div class="flex items-center justify-between pb-1">
            <h3 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
              ${ICONS.document}
              <span>Review Semua Pembahasan Soal</span>
            </h3>
            <span class="text-xs text-slate-400">${benar}/${total} Jawaban Tepat</span>
          </div>

          <div class="space-y-3">
            ${state.jawabanUser.slice(0, state.reviewLimit || 50).map((j, idx) => {
              const statusBadge = j.isSkipped
                ? `<span class="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> Dilewati</span>`
                : (j.isBenar 
                    ? `<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold flex items-center gap-1">${ICONS.check} Benar</span>`
                    : `<span class="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold flex items-center gap-1">${ICONS.cross} Salah</span>`);
              
              const teksDipilih = j.isSkipped
                ? '(Dilewati)'
                : (j.dipilih >= 0 ? j.soal.pilihan[j.dipilih] : '(Waktu Habis)');
              const teksKunci = j.soal.pilihan[j.kunci];

              return `
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-slate-400">Nomor ${idx + 1}</span>
                    <div class="flex items-center">${statusBadge}</div>
                  </div>
                  
                  <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    ${renderFurigana(j.soal.pertanyaan)}
                  </p>

                  <div class="text-xs space-y-1 pt-1 border-t border-slate-200 dark:border-slate-800/80">
                    <div class="flex items-center gap-2">
                      <span class="text-slate-400">${j.isSkipped ? 'Status:' : 'Jawaban Anda:'}</span>
                      <span class="${j.isSkipped ? 'text-slate-400 italic font-medium' : (j.isBenar ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold')}">${teksDipilih}</span>
                    </div>
                    ${!j.isBenar ? `
                      <div class="flex items-center gap-2">
                        <span class="text-slate-400">Jawaban Benar:</span>
                        <span class="text-emerald-400 font-bold">${teksKunci}</span>
                      </div>
                    ` : ''}
                  </div>

                  <div class="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    ${ICONS.lightbulb}
                    <p class="italic leading-relaxed">${j.pembahasan || ''}</p>
                  </div>
                </div>
              `;
            }).join('')}

            ${state.jawabanUser.length > (state.reviewLimit || 50) ? `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                <p class="text-xs text-slate-400">
                  Menampilkan <strong>${Math.min(state.reviewLimit || 50, state.jawabanUser.length)}</strong> dari <strong>${state.jawabanUser.length}</strong> pembahasan.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-2">
                  <button type="button" onclick="window.tambahLimitReview()" class="px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs hover:bg-sky-400 transition active:scale-95 shadow-sm shadow-sky-500/25">
                    Muat 50 Pembahasan Lagi
                  </button>
                  <button type="button" onclick="window.tampilkanSemuaReview()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition active:scale-95">
                    Tampilkan Semua (${state.jawabanUser.length})
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  window.tambahLimitReview = function() {
    state.reviewLimit = (state.reviewLimit || 50) + 50;
    renderView();
  };

  window.tampilkanSemuaReview = function() {
    state.reviewLimit = state.jawabanUser.length;
    renderView();
  };

  window.kembaliKeMenuPilih = function() {
    state.tahap = 'pilih';
    renderView();
  };

  window.addEventListener('keydown', function(e) {
    const modalS = document.getElementById('modal-shortcut');
    if (e.key === 'Escape' && modalS) {
      e.preventDefault();
      if (typeof window.tutupModalShortcut === 'function') window.tutupModalShortcut();
      return;
    }

    const modalK = document.getElementById('modal-kamus');
    if (e.key === 'Escape' && modalK && !modalK.classList.contains('hidden')) {
      e.preventDefault();
      if (typeof window.tutupModalKamus === 'function') window.tutupModalKamus();
      return;
    }

    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
      return;
    }

    if (e.key === '?' || (e.shiftKey && (e.key === '/' || e.code === 'Slash'))) {
      e.preventDefault();
      if (typeof window.bukaModalShortcut === 'function') window.bukaModalShortcut();
      return;
    }

    if (state.tahap !== 'main') return;

    const key = e.key;

    if (key === 'ArrowLeft') {
      e.preventDefault();
      if (state.indeksSoal > 0) {
        window.kembaliSoalKuis();
      }
      return;
    }

    if (key === 'ArrowRight') {
      e.preventDefault();
      if (state.sedangMenjawab) {
        window.lanjutSoalBerikutnya();
      } else {
        window.skipSoalKuis();
      }
      return;
    }

    if ((key === 'Enter' || key === ' ') && state.sedangMenjawab) {
      e.preventDefault();
      window.lanjutSoalBerikutnya();
      return;
    }

    if (!state.sedangMenjawab) {
      const lower = key.toLowerCase();
      if (lower === 'a' || key === '1') {
        e.preventDefault();
        window.pilihJawabanKuis(0);
        return;
      }
      if (lower === 'b' || key === '2') {
        e.preventDefault();
        window.pilihJawabanKuis(1);
        return;
      }
      if (lower === 'c' || key === '3') {
        e.preventDefault();
        window.pilihJawabanKuis(2);
        return;
      }
      if (lower === 'd' || key === '4') {
        e.preventDefault();
        window.pilihJawabanKuis(3);
        return;
      }
    }

    if (key.toLowerCase() === 'p') {
      e.preventDefault();
      const soal = state.daftarSoal[state.indeksSoal];
      if (soal) {
        window.putarAudioSoal(soal.audioText || soal.pertanyaan);
      }
      return;
    }

    if (key === 'Escape') {
      e.preventDefault();
      window.konfirmasiKeluarKuis();
      return;
    }
  });

})();
