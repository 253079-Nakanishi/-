function showResult() {
  const answers = [
    {A: 4, B: 2, C: 0}, 
    {A: 3, B: 1, C: 5}, 
    {A: 5, B: 1, C: 4}, 
    {A: 2, B: 1, C: 5},
    {A: 0, B: 5, C: 4}  
  ];

  let totalScore = 0;
  for (let i = 1; i <= 5; i++) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      alert("まだ答えていない質問があるみたいです🤔");
      return;
    }
    totalScore += answers[i - 1][checked.value];
  }

  const results = [
    {min: 3, max: 4, title: "【Cyber Core】⚙️ホログラムと銀色の世界", description: "クールで知的な性格のあなたには、Cyber Core（サイバーコア）がおすすめ！このインターネット美学は、青や白、銀色などの冷たい色使いと、コンピューターの画面や2000年代のアニメキャラといったモチーフが特徴的です。シャープな近未来らしさの中に、不思議と懐かしさや温もりがあるのが、このジャンルに沼ってしまうポイントです！", images: ["https://tse4.mm.bing.net/th/id/OIP.pbXCXCp3sUkA_P6LDIu9FQHaEK?w=1280&h=720&rs=1&pid=ImgDetMain&o=7&rm=3","https://wallpapercave.com/wp/wp10547211.png","https://i.pinimg.com/originals/0b/48/00/0b480031634de59cea9d3d092f10ca21.jpg"]},
    
    {min: 5, max: 5, title: "【Dark Academia】📖クラシカルな図書館", description: "じっくり作業に打ち込むのが好きなあなたには、Dark Academia（ダークアカデミア）がおすすめ！このインターネット美学は、ヨーロッパの伝統的な図書館や大学をイメージしています。重厚感とミステリアスな雰囲気が最大のポイントで、ハリポタや異世界ものがお好きな方は「きゃっほー！！」ってなること間違いなし。", images: ["https://wallpaperaccess.com/full/5652433.jpg","https://assets.st-note.com/img/1695454783568-h0mxraSNwn.jpg","https://wallpapers.com/images/hd/fantastic-dark-academia-t1zzzi8ev3p7s4g2.jpg"]},
    
    {min: 6, max: 6, title: "【After Hours】🌃時の流れが止まる瞬間", description: "いつも頑張りすぎてしまうあなたには、After Hours（アフターアワーズ）がおすすめ！このインターネット美学は、深夜の誰もいない路地や店を題材としたジャンルです。街の静けさや暖色の照明が、寂しくも少し温かい雰囲気を演出しています。通勤ラッシュも騒音も存在しないこの空間では、自分だけの時間がゆっくりと流れ、あなたをねぎらいます。", images: ["https://i.pinimg.com/originals/51/59/87/515987191900d59c794dfcd8725917df.jpg","https://tse1.mm.bing.net/th/id/OIP.JerI84X2F33OH4CN5rKwCAEsDI?w=5472&h=3648&rs=1&pid=ImgDetMain&o=7&rm=3","https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/08/after-hours-vol-6-mark-broyer-3.jpg"]},
    
    {min: 7, max: 7, title: "【Fairy Core】🧚‍♀️童話の妖精になりたくて", description: "穏やかで優しい性格のあなたには、Fairy Core（フェアリーコア）がおすすめ！このインターネット美学は、絵本に出てくる妖精や森のような、ファンシーで幻想的な雰囲気を楽しめるジャンルです。花や葉っぱなど、自然をモチーフにしたデザインも多く見られ、見る人をリラックスさせてくれます。", images: ["https://screenshot-media.com/wp-content/uploads/2021/07/What-is-goblincore-Instagrams-fairycore-icon-hollowfae-explains-the-aesthetic-Hollowfae.jpg","https://www.glam.com/img/gallery/fairycore-outfit-inspiration-that-will-bring-you-from-summer-into-fall/l-intro-1691157448.jpg","https://img.freepik.com/premium-photo/dreamy-spring-garden-background-artwork_1106454-61942.jpg"]},
    
    {min: 8, max: 8, title: "【DORFic】🟠オレンジ色の科学", description: "頭の回転が早い（たぶん）あなたには、DORFic（ドルフィック）がおすすめ！このインターネット美学は、2000～2010年代に流行した、スタイリッシュで近未来的なデザインが特徴のジャンルです。幾何学模様と華やかなオレンジ色が、最先端っぽくありながら、優しさや温かさも演出しています。当時の技術への希望を感じますね✨", images: ["https://frutiger-aero.org/img/DORFic-1.webp","https://i.pinimg.com/originals/d7/b9/65/d7b965166264121c1249389b102dd3ee.png","https://i.pinimg.com/originals/f2/96/f1/f296f1357aecd5dd7cb1998bf3fa1fd5.jpg"]},
    
    {min: 9, max: 9, title: "【Vaporwave】🌇ほろ苦いノスタルジー", description: "どこかシニカルな一面を持つあなたには、Vaporwave（ヴェイパーウェイヴ）がおすすめ！このインターネット美学は、80～90年代の消費主義や大衆文化への風刺、郷愁から生まれました。特に音楽が有名で、「聞いてて気持ち悪いのに、なんか落ち着く」そんな不思議な感覚に浸れます！（Vaporwaveを初めて聞く方には「Floral Shoppe」というアルバムがおすすめです✨Youtubeで聞けますよ！）", images: ["https://netart.commons.gc.cuny.edu/wp-content/blogs.dir/3087/files/vapor-wave/VaporWave.jpg","https://preview.redd.it/d2qa4qh2guo81.gif?format=png8&s=4afcacd656c4f959dfbabbf59608d881095fbf20","https://wallpapers.com/images/hd/vaporwave-background-5oor0c2k5u7t8uls.jpg"]},
    
       {min: 10, max: 10, title: "【Ballet Core】🩰少女の憧れ・バレリーナ", description: "おしゃれで流行に敏感なあなたには、Ballet Core（バレエコア）がおすすめ！このインターネット美学は、優雅なバレリーナからインスピレーションを受けており、ガーリーで上品な雰囲気が楽しめます。チュチュを彷彿とさせる白いチュールスカートや、フリルたっぷりのワンピースで、バレリーナになりきっちゃいましょう♪", images: ["https://d1rig8ldkblbsy.cloudfront.net/app/uploads/2023/11/15114345/gettyimages-1687190137-crop-1700048722-1280x1280.jpg?auto=format%2Ccompress&fit=max&fm=webp&monochrome=29000000&q=75&w=1400","https://i.pinimg.com/736x/7e/de/4f/7ede4fe25c5fb2c7d2062ccf26905a58.jpg","https://nypost.com/wp-content/uploads/sites/2/2022/11/SydneySweeney-1.jpg?quality=75&strip=all"]},
    
    {min: 11, max: 11, title: "【Technozen】☘️技術と暮らしの調和", description: "まったり落ち着ける時間を大切にしているあなたには、Technozen（テクノゼン）がおすすめ！このインターネット美学は、技術と自然、暮らしとの調和をテーマにしており、スタイリッシュで近未来的なデザインの中に、ちょっとした遊び心を垣間見ることができます。眺めるだけでも、爽やかな気分になれる画像が沢山ありますよ♪", images: ["https://th.bing.com/th/id/R.5b17d668e333c0b59922fb7a9c8d71c6?rik=2IS4un4cHakJaw&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2008%2f07%2f21%2farticle-1036894-01031FDC00000578-339_468x286.jpg&ehk=d4rg6kxnvQr4zmZFQT8TJEn3NJT2FT%2bhgHnUa4AhZW8%3d&risl=&pid=ImgRaw&r=0","https://preview.redd.it/some-technozen-interior-images-i-found-while-surfing-v0-ubewk772kh3d1.jpg?width=564&format=pjpg&auto=webp&s=e672873459ce9c0e81aef3e280749eea4222c2f7","https://assets.st-note.com/production/uploads/images/219669142/rectangle_large_type_2_152d8efcf03b32e0a45357b560d033cc.jpg?width=1200"]},
    
    {min: 12, max: 12, title: "【Pool Core】🛟水の音だけが響く空間", description: "冷静で落ち着いた性格のあなたには、Pool Core（プールコア）がおすすめ！このインターネット美学は、無人のプールを題材としており、プールの静けさと冷たさ、誰もいない空間への不安や好奇心が入り混じった、独特の感覚を味わえます。差し込む日光も、どことなくノスタルジックです。こんなプール、あなたは泳いでみたい？", images: ["https://media.licdn.com/dms/image/v2/C5622AQEef2lmpUDp-w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1619419350714?e=2147483647&v=beta&t=b5zA0pM7OjKSaByFJUqsssqlHIKSqZl7G55YAGnJxJ4","https://files.facepunch.com/sbox/asset/pcjr.poolrooms/screenshot.ed30481f.png","https://cdn.akamai.steamstatic.com/steam/apps/2251780/ss_c09d91a775dc8e7717eebdaddbea293643d2aba4.1920x1080.jpg?t=1683126138"]},
    
    {min: 13, max: 13, title: "【Goblin Core】🍄美と醜が交わる場所", description: "独創的なセンスを持つあなたには、Goblin Core（ゴブリンコア）がおすすめ！このインターネット美学は、自然の中の「醜さ」に着目しています。きのこや苔などのモチーフを使った、少しダークで幻想的な雰囲気に魅了されるのは時間の問題かも？ファッションも魅力的で、深緑や焦げ茶がベースの、落ち着いたコーデを楽しめます。", images: ["https://tse2.mm.bing.net/th/id/OIP.tS_TccZXBmtQunoNcDbEHwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3","https://image-cdn.hypb.st/https://hypebeast.com/image/2022/01/what-is-goblincore-fashion-feature-004.jpg?w=1260&format=jpeg&cbr=1&q=90&fit=max","https://i.pinimg.com/originals/cd/78/61/cd7861d47a52c28f010b36a7695dde91.png"]},
    
       {min: 14, max: 14, title: "【Frutiger Aero】💧インターネットと描いた未来", description: "明るく元気いっぱいなあなたには、Frutiger Aero（フルティガーエアロ）がおすすめ！このインターネット美学は、2000～2010年代のパソコンや携帯電話の壁紙、アプリのアイコンなどから着想を得ています。どこまでも続く青空やカラフルな熱帯魚たちが、当時の人々が抱いていた「インターネットへの希望」を象徴していますね✨", images: ["https://i.redd.it/wthjhx8t5nvc1.png","https://tse1.mm.bing.net/th/id/OIP.1EZYZqQRCcTtjdTu67aNrQHaEo?w=1440&h=900&rs=1&pid=ImgDetMain&o=7&rm=3","https://i.pinimg.com/736x/35/6f/b3/356fb30c0b1c8af86a3fc6c01acf5049.jpg"]},
    
    {min: 15, max: 15, title: "【Clean Core】🧹お風呂お掃除きれい好き♪", description: "真面目な性格のあなたには、Clean Core（クリーンコア）がおすすめ！このインターネット美学は、洗剤やスポンジなど掃除に関するアイテムを取り入れた、爽やかで清潔なジャンルです。すっきりしたデザインの中に、黄色やピンク色を取り入れて、楽しさも表現したりします。なんだか、心まで浄化されそうなジャンルですね✨", images: ["https://tse4.mm.bing.net/th/id/OIP.ojZDzydRubv_4vRar1ndlgHaFk?w=626&h=471&rs=1&pid=ImgDetMain&o=7&rm=3","https://i.pinimg.com/originals/c0/71/83/c071834170c5215eb6ea121573ed9b6c.jpg","https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fdeco.2Fmaison-pratique.2F5-erreurs-en-nettoyant-vitres-51411.2F15011073-1-fre-FR.2F5-erreurs-qu-on-fait-tous-en-nettoyant-les-vitres.2Ejpg/1200x1200/quality/80/crop-from/center/5-erreurs-qu-on-fait-tous-en-nettoyant-les-vitres.jpeg"]},
    
    {min: 16, max: 16, title: "【Arcade Core】👾気分はアーケードゲーマー！", description: "陽気で楽しいことが大好きなあなたには、Arcade Core（アーケードコア）がおすすめ！このインターネット美学は、名前の通り、アーケードゲームから着想を得たジャンルです。薄暗い店内に光るネオンとゲーム画面…見ているだけでもワクワクしてきますね！ファッション方面でも発達しており、ゲームの世界に飛び込んだような、ポップでカジュアルなコーデが楽しめます♪", images: ["https://64.media.tumblr.com/e2a45bcdee020eb3ba129176aa7e88b8/265524173a9ff5ef-10/s640x960/b84d25a41a95462a9d0efee2cc31886ddb0ab24f.jpg","https://i.pinimg.com/736x/80/f1/34/80f1348157ef2d954f632383f2e8da5b.jpg","https://www.unzzy.com/cdn/shop/products/O1CN01HhRQEt1IOufeIIxO4__3358440884.jpg?v=1624339361"]},
    
    {min: 17, max: 17, title: "【McBling】🦩ショッキングピンクは私のためにあるの", description: "自分らしくありたいと願うあなたには、McBling（マックブリング）がおすすめ！このインターネット美学は、2000年代アメリカのセレブの着こなしから着想を得たジャンルです。きらびやかでド派手なショッキングピンクや、ヒョウ柄のアイテムを取り入れて、いつもと違う自分に出会ってみるのもアリかもしれません✨", images: ["https://highxtar.com/wp-content/uploads/2022/09/highxtar-regreso-estetica-mcbling-6.jpg","https://preview.redd.it/trashy-y2k-aesthetic-v0-jzsdt39mvlzb1.jpg?width=750&format=pjpg&auto=webp&s=bc1a456e50ad31bd7ef36cde4440b83a3b31ea56","https://i.scdn.co/image/ab67706c0000da84aed12c164cafdf710676fe57"]},
    
   {min: 18, max: 18, title: "【Kid Core】🪁忘れたくない幼少期", description: "少年の心を忘れないあなたには、Kid Core（キッドコア）がおすすめ！このインターネット美学は、子供時代を連想させる、カラフルなおもちゃやファッションを扱うジャンルです。虹色のクレヨンやシール、ビーズのブレスレットなど、懐かしい気分に浸れるアイテムがてんこ盛り！いくつになっても、素敵なものは素敵に映るんですね…！", images: ["https://i.pinimg.com/originals/df/76/a0/df76a0bfe095cfeae9bb65f616bb31f8.png","https://styles.redditmedia.com/t5_bsy6pj/styles/communityIcon_6jx5sbvcx88d1.png","https://wallpapers.com/images/hd/kidcore-pictures-gshn0ju6wxme9p3m.jpg"]},
    
    {min: 19, max: 19, title: "【Liminal Space】🚪あなたは来訪者に選ばれました", description: "一人の時間を愛するあなたには、Liminal Space（リミナルスペース）がおすすめ！このインターネット美学は、「人がいるはずなのに誰もいない…」「明るいはずなのに真っ暗…」そんな違和感が織りなす異質な雰囲気、そこから生まれる不安と安心感が混ざったような、不思議な感覚が味わえるジャンルです。こんな空間に迷いこんだらどうしよう…そこにあるのは孤独？それともワクワク？", images: ["https://thevaultpublication.com/wp-content/uploads/2022/03/6.jpg?w=1024","https://i.ytimg.com/vi/fiO69UzTWxg/maxresdefault.jpg","https://rascoh.com/wp-content/uploads/2023/05/liminal-space-images-architecture-28.jpg"]},
    
    {min: 20, max: 20, title: "【Frutiger Metro】🪇気分は音楽フェス！", description: "いつだって楽しむことを忘れないあなたには、Frutiger Metro（フルティガーメトロ）がおすすめ！このインターネット美学は、2000～2010年代のポスターやパッケージのデザインから着想を得ており、円や曲線、鮮やかな色使いがポイントのジャンルです。音符やスピーカーなど、音楽的なモチーフもよく取り入れられ、賑やかでテンションが上がるスタイルになっています♪", images: ["https://frutiger-aero.org/img/frutiger-metro-1.webp","https://wallpapers.com/images/high/vibrant-d-j-party-scene-kex3hudxf5aif7f6.webp","https://assets.st-note.com/img/1688971323666-OaZuppfLIQ.png?width=800"]},
    
       {min: 21, max: 21, title: "【Internet Awesome Sauce】🖥️インターネットSUGEEEEEEEEEEE!!!!!!", description: "面白い話題が大好きなあなたには、Internet Awesome Sauce（インターネット オーサムソース）がおすすめ！このインターネット美学は、2000～2010年代にかけてネット上で流行した、おもしろおかしい、そしてシュールなネタを扱うジャンルです。猫が宇宙を飛んでいたり、目からビームを出していたり…このハチャメチャ具合が最大のアピールポイントです！", images: ["https://storage.modworkshop.net/mods/images/137400_1676453875_cd00ba025ada6a3011537788c3cc0860.webp","https://static.wikia.nocookie.net/aesthetics/images/d/d5/Epicface.jpg/revision/latest?cb=20231018213931","https://static.wikia.nocookie.net/aesthetics/images/2/25/Awesomesauce.jpg/revision/latest?cb=20231018210015"]},
    
    {min: 22, max: 22, title: "【Dream Core】💤夢？現実？不思議な世界", description: "夢見がちな性格のあなたには、Dream Core（ドリームコア）がおすすめ！このインターネット美学は、夢の中にいるような不安定な感覚と、幼少期のぼんやりした記憶みたいな雰囲気を持つジャンルです。こうした絶妙なバランスの中に、自分だけが見ている夢ならではの安心感や、ワクワクする好奇心を見出す人もいるとか！", images: ["https://www.the-sun.com/wp-content/uploads/sites/6/2023/05/comp-skc-dream-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1","https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2453060/ss_e488885310c0d2edb2a66a6c4a3803a6bd2995ed.1920x1080.jpg?t=1741978327","https://i.pinimg.com/originals/84/13/f2/8413f2a3da1c57177850a87c04dd4a9f.jpg"]},
    
      {min: 23, max: 24, title: "【Frutevil Aero】🔥希望の裏に抱えた地獄", description: "刺激に飢えているあなたには、Frutevil Aero（フルテビルエアロ）がおすすめ！このインターネット美学は、未来への希望を表現したFrutiger Aero（フルティガーエアロ）とは正反対の、地獄のようなビジュアルが特徴的なジャンルです。これを壁紙やLINEの背景に使えば、周囲から一目置かれること間違いなし…！！", images: ["https://preview.redd.it/ive-created-frutevil-aero-a-new-sick-and-twisted-aesthetic-v0-2w8bu6o2yjoc1.jpg?width=2048&format=pjpg&auto=webp&s=87b72e31879c12b9a0915c99d1f8aa8dfbba0510","https://preview.redd.it/ive-created-frutevil-aero-a-new-sick-and-twisted-aesthetic-v0-g2gaatx2yjoc1.jpg?width=640&crop=smart&auto=webp&s=0a35c911211eed1cb19dc04ac38e71c44882a653","https://preview.redd.it/ive-created-frutevil-aero-a-new-sick-and-twisted-aesthetic-v0-4k6hotqg04qc1.png?width=640&crop=smart&auto=webp&s=eca9e352de079ba18f0472c17638d27fee44ca25"]},
  ];
 const result = results.find(r => totalScore >= r.min && totalScore <= r.max);
  currentImages = result.images;
currentImageIndex = 0;
showPopup(`
    <h2>${result.title}</h2>
    <p>${result.description}</p>
    <img id="resultImage" src="${currentImages[0]}" alt="" onclick="nextImage()" style="cursor:pointer;">
  <p style="font-size:12px; opacity:0.7;">画像をクリック/タップして切り替えてみましょう</p>
`);
}
function launchConfetti() {
  for (let i = 0; i < 90; i++) { 
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 10000);
  }
}

function showPopup(html) {
   alert("あなたにぴったりなのは…");

  const overlay = document.getElementById("overlay");
  const content = document.getElementById("popupContent");

  content.innerHTML = html;
  overlay.style.display = "flex";
  requestAnimationFrame(() => {
    overlay.classList.add("active");});
  launchConfetti();
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

let currentImages = [];
let currentImageIndex = 0;

function nextImage() {
  if (currentImages.length === 0) return;

  currentImageIndex =
    (currentImageIndex + 1) % currentImages.length;

  const img = document.getElementById("resultImage");
  img.src = currentImages[currentImageIndex];
}
