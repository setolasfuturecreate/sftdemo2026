// JavaScript Document


//Clarity Tag Manager---------------------------------------------------------------------
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vav544upe7");



window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
  document.getElementById("loading").style.display = "none";
});





//ログインの設定---------------------------------------------------------------------







//スクロールの設定---------------------------------------------------------------------
$(function () {
    var topBtn = $('.return');
    topBtn.hide();
    //スクロール100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップへ
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 50);
        return false;
    });
});





//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});




//ふわっと出現
$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 120){
				$(this).addClass('scrollin');
			}
	});
});











//ルートパス検索---------------------------------------------------------------------
document.querySelectorAll('form[action="/search/"]').forEach(form => {
  form.addEventListener("submit", function () {
    const input = this.querySelector('input[name="q"]');
    sessionStorage.setItem("searchQuery", input.value);
  });
});



// URLパラメータ取得

const urlParams = new URLSearchParams(window.location.search);
query = urlParams.get("q");






//パス正規化開発環境---------------------------------------------------------------------

(function () {
  const INDEX_NAME = "index.html";

  // file:// のときだけ動作
  if (location.protocol !== "file:") return;

  function isDirLikePathname(pathname) {
    if (!pathname) return true;
    if (pathname.endsWith("/")) return true;
    const last = pathname.split("/").pop();
    return !last.includes(".");
  }

  function withIndexHtml(u) {
    const url = new URL(u, document.baseURI);
    const pathname = url.pathname.endsWith("/")
      ? url.pathname + INDEX_NAME
      : url.pathname + "/" + INDEX_NAME;
    url.pathname = pathname;
    return url.toString();
  }

  function isInternalLink(a) {
    const url = new URL(a.href, document.baseURI);
    return url.protocol === "file:";
  }

  // ✅ 初期ロード時
  (function redirectOnInitialLoad() {
    try {
      const url = new URL(location.href);

      // すでに index.html の場合はOK
      if (!url.pathname.endsWith("/" + INDEX_NAME)) {
        if (isDirLikePathname(url.pathname)) {
          // ✅ searchはクエリ保持してindex.htmlへ
          if (url.pathname.startsWith("/search")) {
            location.replace("/search/index.html" + url.search);
            return;
          }

          location.replace(withIndexHtml(url));
          return;
        }
      }

      // ✅ 表示URLから index.html を消す（ここが重要）
      if (url.pathname.endsWith("/" + INDEX_NAME)) {
        const cleanPath = url.pathname.replace("/" + INDEX_NAME, "/");
        history.replaceState(null, "", cleanPath + url.search + url.hash);
      }

    } catch (_) {}
  })();

  // ✅ クリック時
  function enhanceAnchorClicks() {
    document.addEventListener(
      "click",
      function (ev) {
        const a = ev.target.closest("a[href]");
        if (!a) return;
        if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
        if (!isInternalLink(a)) return;

        const dest = new URL(a.getAttribute("href"), document.baseURI);

        // ✅ search専用処理
        if (dest.pathname.startsWith("/search")) {
          ev.preventDefault();
          location.assign("/search/index.html" + dest.search);
          return;
        }

        // 通常ページ
        if (dest.pathname.endsWith("/" + INDEX_NAME)) return;
        if (!isDirLikePathname(dest.pathname)) return;

        ev.preventDefault();
        location.assign(withIndexHtml(dest));
      },
      { capture: true }
    );
  }

  // 有効化
  enhanceAnchorClicks();

})();







































// 検索オーバーレイ---------------------------------------------------------------------
const toggleBtn = document.getElementById("searchToggle");
const overlay = document.getElementById("searchOverlay");
const closeBtn = document.getElementById("searchClose");
const input = document.querySelector(".search-input");

// 開く
toggleBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  setTimeout(() => input.focus(), 200);
});

// 閉じる（×）
closeBtn.addEventListener("click", closeOverlay);

// 外クリックで閉じる
document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeOverlay();
  }
});

// Escで閉じる
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeOverlay();
  }
});

function closeOverlay() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}








// お知らせN件ピックアップ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
  const TARGET_TBODY = document.getElementById('latest-news-body');
  const LIMIT = 5;

  if (!TARGET_TBODY) return;

  const NEWS_URL = '/news/'; // 404になる環境なら '/news/index.html' にする

  try {
    const res = await fetch(NEWS_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`fetch失敗: ${res.status}`);

    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const sourceTable = doc.querySelector('#news-list');
    if (!sourceTable) throw new Error('#news-list が見つかりません');

    const rows = [...sourceTable.querySelectorAll('tbody.list > tr')]
      .filter(r => r.querySelectorAll('td, th').length > 0)
      .slice(0, LIMIT);

    // いったんクリア（任意）
    TARGET_TBODY.textContent = '';

    const frag = document.createDocumentFragment();

    for (const row of rows) {
      const clone = row.cloneNode(true);

      // 相対リンク補正（/news/ 基準に直す）
      clone.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href')?.trim();
        if (!href) return;
        if (
          href.startsWith('#') ||
          href.startsWith('javascript:') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:')
        ) return;

        a.href = new URL(href, res.url).toString();
      });

      frag.appendChild(clone);
    }

    TARGET_TBODY.appendChild(frag);

  } catch (e) {
    console.error('最新ニュース取得エラー:', e);
  }
});






(function () {
  var base = "https://setolasfuturecrete.com";

  var fullPath = location.pathname;

  var path = fullPath.split("setolasfuturecrete.com").pop();

  // ✅ index.htmlだけ削除
  path = path.replace(/index\.html$/, "");

  // ✅ .htmlは触らない

  if (!path || path === "") path = "/";

  var shareUrl = base + path;

  var shareText = document.title;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    try {
      var u = encodeURIComponent(shareUrl);
      var t = encodeURIComponent(shareText);
      var combined = encodeURIComponent(shareText + "\n" + shareUrl);

      // ===== LINE =====
      var lineEl = document.getElementById("share-line");
      if (lineEl) {
        var ua = navigator.userAgent || "";
        var mobile = /iPhone|iPad|iPod|Android/i.test(ua);

        lineEl.href = mobile
          ? "line://msg/text/?" + combined
          : "https://social-plugins.line.me/lineit/share?url=" + u;

        lineEl.classList.add("no-rewrite");
      }

      // ===== X =====
      var xEl = document.getElementById("share-x");
      if (xEl) {
        xEl.href =
          "https://twitter.com/intent/tweet?text=" + t + "&url=" + u;

        xEl.classList.add("no-rewrite");
      }

      // ===== Facebook =====
      var fbEl = document.getElementById("share-fb");
      if (fbEl) {
        fbEl.href =
          "https://www.facebook.com/sharer/sharer.php?u=" + u + "&quote=" + t;

        fbEl.classList.add("no-rewrite");
      }

      // ===== Instagram =====
      var igBtn = document.getElementById("share-ig");
      if (igBtn) {
        igBtn.addEventListener("click", function () {

          if (navigator.share) {
            navigator.share({
              title: shareText,
              text: shareText,
              url: shareUrl
            }).catch(function () {});
            return;
          }

          var text = shareText + "\n" + shareUrl;

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
              .then(function () {
                alert("リンクをコピーしました。");
              })
              .catch(function () {
                fallbackCopy(text);
              });
          } else {
            fallbackCopy(text);
          }
        });
      }

      function fallbackCopy(text) {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        alert("コピーしました。");
      }

      console.log("shareUrl:", shareUrl);

    } catch (err) {
      console.warn("Share script error:", err);
    }
  });
})();











// お知らせ一覧絞り込み---------------------------------------------------------------------
  $(function(){
  var box = $('.js_target');//検索対象の DOM を指定する
  var conditions = $('.js_conditions');//現在の条件の選択状況を保持するオブジェクト
  var findConditions;//data-type の子要素（input）を取得する
  var currentType;//現在の data-type を示す
  var count = 0;//讀懃ｴ｢繝偵ャ繝域焚
  var checkcount = 0;//蜷�data-type縺ｮ繝√ぉ繝�け繝懊ャ繧ｯ繧ｹ驕ｸ謚樊焚
  var data_check = 0;//蟇ｾ雎｡鬆�岼縺ｮ繝��繧ｿ縺後←繧後□縺代メ繧ｧ繝�け迥ｶ諷九→荳閾ｴ縺励※縺�ｋ縺�
  var condition ={};//繝√ぉ繝�け繝懊ャ繧ｯ繧ｹ縺ｮ蜈･蜉帷憾諷九ｒ菫晄戟縺吶ｋ繧ｪ繝悶ず繧ｧ繧ｯ繝�

  $('.js_denominator').text(box.length);//莉ｶ謨ｰ陦ｨ遉ｺ縺ｮ蛻�ｯ阪ｒ繧ｻ繝�ヨ
  for(var i = 0; i < conditions.length; i++){//繧ｿ繝ｼ繧ｲ繝�ヨ縺ｮdata-type繧貞盾辣ｧ縺励√Γ繧ｽ繝�ラ縺ｨ縺励※condition縺ｫ蛟句挨縺ｫ莉｣蜈･縺吶ｋ
    currentType = conditions[i].getAttribute('data-type');
    condition[currentType] = [];
  }
  function setConditions(){//譚｡莉ｶ險ｭ螳�
    count = 0;
    box.removeClass('js_selected');
    for(var i = 0; i < conditions.length; i++){//data-type縺斐→縺ｮ蜃ｦ逅�
      currentType = conditions[i].getAttribute('data-type');
      findConditions = conditions[i].querySelectorAll('input');
      for(var n = 0; n< findConditions.length; n++){//input縺斐→縺ｮ蜃ｦ逅�
        if(findConditions[n].checked){//迴ｾ蝨ｨ驕ｸ謚樔ｸｭ縺ｮ繧､繝ｳ繝励ャ繝医′驕ｸ謚槭＆繧後※縺�ｋ蝣ｴ蜷�
          condition[currentType][findConditions[n].value] = true;
          checkcount++
        } else {
          condition[currentType][findConditions[n].value] = false;
        }
        if(findConditions.length === n+1){//繝ｫ繝ｼ繝励′譛蠕後�蝣ｴ蜷�
          if(checkcount === 0){
            for(var t = 0; t < findConditions.length; t++){
              condition[currentType][findConditions[t].value] = true;
            }
          }
          checkcount = 0;
        }
      }
    }
    for(var m = 0, len = box.length; m< len; ++m){//譛蛻昴↓蜿門ｾ励＠縺溘ち繝ｼ繧ｲ繝�ヨ縺ｮ諠��ｱ縺ｨ縲∫樟蝨ｨ縺ｮinput縺ｮ驕ｸ謚樒憾諷九ｒ豈碑ｼ�＠縺ｦ蜃ｦ逅�ｒ陦後≧
      for(var i = 0; i < conditions.length; i++){//繧ｿ繝ｼ繧ｲ繝�ヨ縺ｮdata-type繧貞盾辣ｧ縺励√Γ繧ｽ繝�ラ縺ｨ縺励※condition縺ｫ蛟句挨縺ｫ莉｣蜈･縺吶ｋ
        currentType = conditions[i].getAttribute('data-type');
        //迴ｾ蝨ｨ縺ｮ繧ｿ繝ｼ繧ｲ繝�ヨ縺ｮtype諠��ｱ繧偵き繝ｳ繝槫玄蛻�ｊ縺ｧ蛻�牡縺励��蛻励↓莉｣蜈･
        var currentBoxTypes = $(box[m]).data(currentType).split(',');
        for(var j = 0; j < currentBoxTypes.length; j++){
          if(condition[currentType][currentBoxTypes[j]]){
            data_check++;//驕ｸ謚槭＠縺滓擅莉ｶ縺ｮ縺�■縺ｲ縺ｨ縺､縺ｧ繧ゅ�繝�メ縺励※縺溘ｉdata_check繧貞刈邂励＠縺ｦ繝ｫ繝ｼ繝励ｒ謚懊￠繧�
            break;
          } else {
          }
        }
      }
        if(data_check === conditions.length){
          count++;
          $(box[m]).addClass('js_selected');
        }else{
        }
        data_check = 0;
    }
    $('.js_numerator').text(count);//莉ｶ謨ｰ陦ｨ遉ｺ縺ｮ蛻�ｭ舌ｒ繧ｻ繝�ヨ
  }
  setConditions();
  $(document).on('click','input',function(){
    setConditions();
  });
  $(document).on('click','.js_release',function(){
    $('.bl_selectBlock_check input').each(function(){
        $(this).prop('checked', false);
    });
    setConditions();
  });
});






// Lightbox（キャプション付き、複数対応）---------------------------------------------------------------------
document.querySelectorAll('.gallery').forEach(gallery => {
  const images = gallery.querySelectorAll('img');

  // Lightbox要素を作る
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lb-close" aria-label="閉じる">×</button>
    <button class="lb-prev" aria-label="前">‹</button>
    <img class="lb-image" alt="">
    <button class="lb-next" aria-label="次">›</button>
  `;
  document.body.appendChild(lightbox);
  lightbox.hidden = true;

  const lbImage = lightbox.querySelector('.lb-image');
  const btnClose = lightbox.querySelector('.lb-close');
  const btnPrev  = lightbox.querySelector('.lb-prev');
  const btnNext  = lightbox.querySelector('.lb-next');

  let current = 0;

  function show(index) {
    current = index;
    lbImage.src = images[index].src;
    lbImage.alt = images[index].alt;
    lightbox.hidden = false;
  }

  // クリック
  images.forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => show(i));
  });

  // 閉じる
  btnClose.onclick = () => {
    lightbox.hidden = true;
  };

  // 前後移動
  btnPrev.onclick = () => {
    show((current - 1 + images.length) % images.length);
  };

  btnNext.onclick = () => {
    show((current + 1) % images.length);
  };

  // 背景クリックで閉じる
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.hidden = true;
    }
  });

  // ESCキー
  document.addEventListener('keydown', e => {
    if (!lightbox.hidden) {
      if (e.key === 'Escape') lightbox.hidden = true;
      if (e.key === 'ArrowLeft') btnPrev.click();
      if (e.key === 'ArrowRight') btnNext.click();
    }
  });
});








document.querySelectorAll('.gallery').forEach(gallery => {

  const figures = gallery.querySelectorAll('figure');

  // Lightbox作成
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;

  lightbox.innerHTML = `
    <button class="lb-close" aria-label="閉じる">×</button>
    <button class="lb-prev" aria-label="前の画像">‹</button>

    <div class="lb-content">
      <img class="lb-image" src="" alt="">
      <div class="lb-caption"></div>
    </div>

    <button class="lb-next" aria-label="次の画像">›</button>
  `;

  document.body.appendChild(lightbox);

  const lbImage = lightbox.querySelector('.lb-image');
  const lbCaption = lightbox.querySelector('.lb-caption');
  const btnClose = lightbox.querySelector('.lb-close');
  const btnPrev  = lightbox.querySelector('.lb-prev');
  const btnNext  = lightbox.querySelector('.lb-next');

  let current = 0;

  function getData(i) {
    const figure = figures[i];
    if (!figure) return null;

    const img = figure.querySelector('img');
    if (!img) return null;

    const captionEl = figure.querySelector('figcaption');

    return {
      src: img.currentSrc || img.src,
      alt: img.alt || '',
      caption: captionEl ? captionEl.textContent : ''
    };
  }

  function show(index) {
    const data = getData(index);
    if (!data) return;

    current = index;

    lbImage.src = data.src;
    lbImage.alt = data.alt;
    lbCaption.textContent = data.caption;

    lightbox.hidden = false;

    requestAnimationFrame(() => {
      lightbox.classList.add('is-visible');
    });
  }

  function closeLightbox() {
    lightbox.classList.remove('is-visible');

    setTimeout(() => {
      lightbox.hidden = true;
    }, 250);
  }

  // クリック
  figures.forEach((figure, i) => {
    figure.style.cursor = 'pointer';

    figure.addEventListener('click', () => {
      show(i);
    });
  });

  // 操作
  btnClose.onclick = closeLightbox;

  btnPrev.onclick = () => {
    show((current - 1 + figures.length) % figures.length);
  };

  btnNext.onclick = () => {
    show((current + 1) % figures.length);
  };

  // 背景クリック
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // キーボード
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') btnPrev.click();
    if (e.key === 'ArrowRight') btnNext.click();
  });

});





// map ---------------------------------------------------------------------


// -------------------------
// 地図（mapShop）
// -------------------------
var mapShop = L.map('mapShop').setView([34.345085, 134.047958], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(mapShop);

// -------------------------
// データ
// -------------------------
var locations = [
  [34.345076,134.047506, "創作和食 瀬to菜", "japanese-restaurant", "/brands/food_and_dining/#setona"],
  [34.344883,134.051239, "割烹 匠", "japanese-restaurant", "/brands/food_and_dining/#takumi"],
  [34.307522,133.809052, "バーガーキング® イオンタウン宇多津", "fast-food", "/brands/food_and_dining/#burger-king"],
  [34.350414,134.047607, "バーガーキング® 高松オルネ", "fast-food", "/brands/food_and_dining/#burger-king"],
  [34.603951,133.761246, "バーガーキング® アリオ倉敷", "fast-food", "/brands/food_and_dining/#burger-king"],
  [34.343304,134.049057, "サウィ食堂 高松店", "korean-restaurant", "/brands/food_and_dining/#sawee-syokudou"],
  [34.328655,134.041946, "Cafe de Ritsuin（カフェ・ド・リツリン）", "cafe", "/brands/cafe_and_sweets/#cafe-de-ritsurin"],
  [34.350414,134.047607, "Passerelle（パスレル）", "sweets", "/brands/cafe_and_sweets/#passerelle"],
  [34.346642,134.050781, "Maison de CIELetMER（メゾン・ド・シエルエメア）", "sweets", "/brands/cafe_and_sweets/#maison-de-cleletmer"]
];

// -------------------------
// 色アイコン
// -------------------------
function getColorIcon(category) {

  var colorMap = {
    "cafe": "blue",
    "japanese-restaurant": "red",
    "fast-food": "orange",
    "sweets": "violet",
    "korean-restaurant": "green"
  };

  var color = colorMap[category] || "grey"; // 未指定はグレー

  return L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-' + color + '.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });
}

// -------------------------
// 描画処理
// -------------------------
var markers = [];
var shopList = document.getElementById("shopList");

function drawAll(data) {

  // マーカー削除
  markers.forEach(m => mapShop.removeLayer(m));
  markers = [];

  // リスト初期化
  if (shopList) {
    shopList.innerHTML = "";
  }

  data.forEach(function(loc, index) {

    // マーカー
    var marker = L.marker([loc[0], loc[1]], {
      icon: getColorIcon(loc[3])
    })
    .addTo(mapShop)
    .bindPopup('<b>' + loc[2] + '</b><br><a href="' + loc[4] + '">詳細を見る</a>');

    markers.push(marker);

    // ✅ 横並びリスト生成
    if (shopList) {
      var item = document.createElement("div");
      item.className = "list-item";

      // HTMLタグ除去
      var text = loc[2].replace(/<[^>]+>/g, "");
      item.innerText = text;

      item.onclick = function() {
        // 選択状態（ハイライト）
        document.querySelectorAll("#shopList .list-item")
          .forEach(el => el.classList.remove("active"));

        item.classList.add("active");

        // 地図連動
        mapShop.setView(marker.getLatLng(), 15);
        marker.openPopup();
      };

      shopList.appendChild(item);
    }
  });

  // 範囲調整
  var group = new L.featureGroup(markers);
  if (markers.length > 0) {
    mapShop.fitBounds(group.getBounds(), {
      padding: [30, 30],
      maxZoom: 13
    });
  }
}

// 初期表示
drawAll(locations);

// -------------------------
// 検索
// -------------------------
document.getElementById("search")?.addEventListener("keyup", function() {
  var keyword = this.value.toLowerCase();

  var filtered = locations.filter(loc =>
    loc[2].toLowerCase().includes(keyword)
  );

  drawAll(filtered);
});

// -------------------------
// カテゴリ
// -------------------------
function filterCategory(cat) {
  if (cat === "all") {
    drawAll(locations);
  } else {
    drawAll(locations.filter(loc => loc[3] === cat));
  }
}

// -------------------------
// 北→南
// -------------------------
function sortNorth() {
  var sorted = [...locations].sort((a, b) => b[0] - a[0]);
  drawAll(sorted);
}



// =====================
// エリアマップ
// =====================
var mapArea = L.map('mapArea').setView([34.300000, 134.000000],11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(mapArea);

// データ
var areaLocations = [
  [34.345085,134.047958, "セトラスホールディングス 株式会社 "],
  [34.334942,133.877563, "協和化学工業 株式会社"],
  [34.296478,134.147675, "マグミット製薬 株式会社"],
  [34.345085,134.047958, "株式会社 セトラスフューチャークリエイト"],
  [34.345085,134.047958, "株式会社 セトラスフードテック"],
  [34.345085,134.047958, "合同会社 EaTime"],
  [34.345085,134.047958, "合同会社 多島美"],
  [34.292347,133.999695, "株式会社 ハーモニーフーズ"],
  [34.305088,133.802155, "大西食品 株式会社"],
  [34.243782,133.715942, "株式会社 蒼のダイヤ"],
  [34.334306,134.055147, "株式会社 tao."]
];


var areaMarkers = [];
var areaList = document.getElementById("areaList");

areaList.innerHTML = "";

areaLocations.forEach(function(loc, index) {

  var marker = L.marker([loc[0], loc[1]])
    .addTo(mapArea)
    .bindPopup(loc[2]);

  areaMarkers.push(marker);

  // ✅ リスト生成
  var item = document.createElement("div");
  item.className = "list-item";

  // HTMLタグ除去して表示
  var text = loc[2].replace(/<[^>]+>/g, "");
  item.innerText = text;

  item.onclick = function() {
    mapArea.setView(marker.getLatLng(), 15);
    marker.openPopup();
  };

  areaList.appendChild(item);
});

// 全件表示タグ
var areaGroup = L.featureGroup(areaMarkers);

var areaReset = document.createElement("div");
areaReset.className = "list-item";
areaReset.innerText = "🔄 全件表示";

areaReset.onclick = function() {
  mapArea.setView([34.300000, 134.000000], 11);
  mapArea.closePopup();
};

areaList.prepend(areaReset);




// =====================
// 世界マップ
// =====================
var mapWorld = L.map('mapWorld').setView([30, 130], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(mapWorld);

// データ
var worldLocations = [
  [53.112025, 6.89442, "Kisuma Chemicals B.V.（オランダ）"],
  [39.86164, 124.146498, "凱司瑪（丹東）高新材料科技有限公司（中国）"],
  [29.811748, -95.422204, "KISUMA AMERICAS INC.（アメリカ）"],
  [1.278279, 103.847904, "KISUMA ASIA SINGAPORE PTE. LTD.（シンガポール）"],
  [31.20226, 121.4043, "凱司瑪化学貿易（上海）有限公司（中国）"]
];

var worldMarkers = [];
var worldList = document.getElementById("worldList");

worldList.innerHTML = "";

worldLocations.forEach(function(loc, index) {

  var marker = L.marker([loc[0], loc[1]])
    .addTo(mapWorld)
    .bindPopup(loc[2]);

  worldMarkers.push(marker);

  var item = document.createElement("div");
  item.className = "list-item";

  item.innerText = loc[2];

  item.onclick = function() {
    mapWorld.setView(marker.getLatLng(), 7);
    marker.openPopup();
  };

  worldList.appendChild(item);
});

// 全件表示タグ
var worldGroup = L.featureGroup(worldMarkers);

var worldReset = document.createElement("div");
worldReset.className = "list-item";
worldReset.innerText = "🔄 全件表示";

worldReset.onclick = function() {
  mapWorld.setView([30, 130], 2);
  mapWorld.closePopup();
};

worldList.prepend(worldReset);









// entry-btn & entry-form 代入 ---------------------------------------------------------------------







const entryParams = new URLSearchParams(window.location.search);

const title = entryParams.get("title");
const url = entryParams.get("url");

const titleInput = document.getElementById("job_title");
const urlInput = document.getElementById("job_url");

if (titleInput) {
  titleInput.value = title || "";
}

if (urlInput) {
  urlInput.value = url || "";
}






// E-mail ---------------------------------------------------------------------















// 404 ---------------------------------------------------------------------

function render(path) {
  if (routes[path]) {
    showPage(routes[path]);
  } else {
    show404();
  }
}

function show404() {
  document.body.innerHTML = `
    <h1>404</h1>
    <p>ページが見つかりません</p>
    <a href="/">ホームへ戻る</a>
  `;
}












