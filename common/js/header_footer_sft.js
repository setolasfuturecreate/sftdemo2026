// JavaScript Document

function header_a(){
    var html = "";
    html += '\
      <!--js_header_a-->\
      <!--トップメニュー PC-->\
      <nav class="top-navigation-global pc" aria-label="トップメニュー">\
        <ul>\
          <li><a href="#skip">本文へ</a></li>\
          <li><a href="/contact/">お問い合わせ</a></li>\
          <li><a href="#" id="searchToggle" class="search-toggle">検索\
            <svg width="18" height="18" viewBox="0 -10 32 32">\
              <circle cx="10" cy="10" r="7" stroke="black" stroke-width="3" fill="none"/>\
              <line x1="15" y1="15" x2="22" y2="22" stroke="black" stroke-width="3"/>\
            </svg></a>\
          </li><!-- 検索トグル -->\
        </ul>\
        <!-- 検索フォーム -->\
        <div id="searchOverlay" class="search-overlay">\
          <div class="search-inner">\
            <button id="searchClose" class="search-close" aria-label="閉じる" accesskey="s" tabindex="0">\
              <svg width="20" height="20" viewBox="0 0 24 24">\
                <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2"/>\
                <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" stroke-width="2"/>\
              </svg>\
            </button>\
            <form action="/search/" method="get" class="search-form">\
              <input type="text"  name="q"  placeholder="サイト内検索" class="search-input">\
              <button type="submit" class="search-button" accesskey="s" tabindex="0">検索</button>\
            </form>\
          </div>\
        </div>\
      </nav>\
      <!--グローバルナビ PC-->\
      <nav class="p-navigation-global pc" aria-label="グローバルナビ">\
        <ul class="p-navigation-global__list">\
          <li class="js-megaMenu p-navigation-global__list-item p-megaMenu">\
            <button type="button" class="js-button-megaMenu p-megaMenu__open" accesskey="s" tabindex="0">Brands</button>\
            <nav class="p-megaMenu__navigation" aria-label="ブランドのサブメニュー">\
              <div class="header_inner">\
                <span class="p-megaMenu__list_title">Brands<span class="m_font">（ブランド）</span></span>\
                <ul class="p-megaMenu__list">\
                  <li class="p-megaMenu__list-item"><a href="/brands/">カテゴリ、ブランド一覧</a></li>\
                  <li class="p-megaMenu__list-item"><a href="/brands/dining/">Dining<span class="s_font">（食事、レストラン）</span></a></li>\
                  <li class="p-megaMenu__list-item"><a href="/brands/cafe/">Cafe<span class="s_font">（カフェ）</span></a></li>\
                  <li class="p-megaMenu__list-item"><a href="/brands/sweets/">Sweets<span class="s_font">（スイーツ）</span></a></li>\
                  <li class="p-megaMenu__list-item"><a href="/brands/local_specialties/">Local Specialties<span class="s_font">（特産品）</span></a></li>\
                </ul>\
              </div>\
              <p><span class="p-megaMenu__close">close</span></p>\
            </nav>\
          </li>\
          <li class="js-megaMenu p-navigation-global__list-item p-megaMenu">\
            <button type="button" class="js-button-megaMenu p-megaMenu__open" accesskey="s" tabindex="0">News</button>\
            <nav class="p-megaMenu__navigation" aria-label="新着情報のサブメニュー">\
              <div class="header_inner">\
                <span class="p-megaMenu__list_title">News<span class="m_font">（新着情報）</span></span>\
                <ul class="p-megaMenu__list">\
                  <li class="p-megaMenu__list-item"><a href="/news/">新着情報一覧</a></li>\
                </ul>\
              </div>\
              <p><span class="p-megaMenu__close">close</span></p>\
            </nav>\
          </li>\
          <li class="js-megaMenu p-navigation-global__list-item p-megaMenu">\
            <button type="button" class="js-button-megaMenu p-megaMenu__open">About</button>\
            <nav class="p-megaMenu__navigation" aria-label="企業情報のサブメニュー">\
              <div class="header_inner">\
                <span class="p-megaMenu__list_title">About<span class="m_font">（企業情報）</span></span>\
                <ul class="p-megaMenu__list">\
                  <li class="p-megaMenu__list-item"><a href="/about/">企業情報</a></li>\
                  <li class="p-megaMenu__list-item"><a href="/about/message/">トップメッセージ</a></li>\
                  <li class="p-megaMenu__list-item"><a href="/about/outline/">会社概要</a></li>\
                  <!--li class="p-megaMenu__list-item"><a href="/about/history/">沿革</a></li>\
                  <li class="p-megaMenu__list-item"><a href="/about/group/">グループ会社</a></li-->\
                </ul>\
              </div>\
              <p><span class="p-megaMenu__close">close</span></p>\
            </nav>\
          </li>\
          <li class="js-megaMenu p-navigation-global__list-item p-megaMenu">\
            <button type="button" class="js-button-megaMenu p-megaMenu__open" accesskey="s" tabindex="0">Careers</button>\
            <nav class="p-megaMenu__navigation" aria-label="採用情報のサブメニュー">\
              <div class="header_inner">\
                <span class="p-megaMenu__list_title">Careers<span class="m_font">（採用情報）</span></span>\
                <ul class="p-megaMenu__list">\
                  <li class="p-megaMenu__list-item"><a href="/careers/">採用情報</a></li>\
                </ul>\
              </div>\
              <p><span class="p-megaMenu__close">close</span></p>\
            </nav>\
          </li>\
        </ul>\
      </nav>\
      <!--js_header_a-->';
    html += '';
    document.write(html);
}


function header_b(){
    var html = "";
    html += '\
    <!--js_header_b-->\
    <input type="checkbox" id="menu-toggle" class="menu-checkbox" value="1"><label for="menu-toggle" class="menu-button"><span></span></label>\
    <!--トップメニュー SP-->\
    <div class="drawer-menu">\
      <div class="header_inner">\
        <nav class="sp" aria-label="トップメニュー グローバルナビ">\
          <div class="drawer__nav">\
            <!--トップメニュー SP-->\
            <!-- 検索フォーム -->\
            <div class="search-inner">\
              <form action="/search/" method="get" class="search-form">\
                <input type="text" name="q"  placeholder="サイト内検索" class="search-input">\
                <button type="submit" class="search-button" accesskey="s" tabindex="0">検索</button>\
              </form>\
            </div>\
            <ul class="menu top-navigation-sp">\
              <li><a href="#skip">本文へ</a></li>\
              <li><a href="/contact/">お問い合わせ</a></li>\
            </ul>\
            <!--グローバルナビ SP-->\
            <div class="menu">\
              <details class="accordion">\
                <summary>Brands</summary>\
                <ul class="sub_list">\
                  <li><a href="/brands/">カテゴリ、ブランド一覧</a></li>\
                  <li><a href="/brands/dining/">Dining<span class="s_font">（食事、レストラン）</span></a></li>\
                  <li><a href="/brands/cafe/">Cafe<span class="s_font">（カフェ）</span></a></li>\
                  <li><a href="/brands/sweets/">Sweets<span class="s_font">（スイーツ）</span></a></li>\
                  <li><a href="/brands/local_specialties/">Local Specialties<span class="s_font">（特産品）</span></a></li>\
                </ul>\
              </details>\
              <details class="accordion">\
                <summary>News</summary>\
                <ul class="sub_list">\
                  <li><a href="/news/">新着情報一覧</a></li>\
                </ul>\
              </details>\
              <details class="accordion">\
                <summary>About</summary>\
                <ul class="sub_list">\
                  <li><a href="/about/">企業情報</a></li>\
                  <li><a href="/about/message/">トップメッセージ</a></li>\
                  <li><a href="/about/outline/">会社概要</a></li>\
                  <!--li><a href="/about/history/">沿革</a></li>\
                  <li><a href="/about/group/">グループ会社</a></li-->\
                </ul>\
              </details>\
              <details class="accordion">\
                <summary>Careers</summary>\
                <ul class="sub_list">\
                  <li><a href="/careers/">採用情報</a></li>\
                </ul>\
              </details>\
              <ul class="accordion_list_close">\
                <li><a href="#">close</a></li>\
              </ul>\
            </div><!--menu-->\
          </div><!--drawer__nav-->\
        </nav>\
      </div><!--header_inner-->\
    </div><!--drawer-menu-->\
    <!--js_header_b-->';
    html += '';
    document.write(html);
}


function footer(){
    var html = "";
    html += '\
    <!--js_footer-->\
    <div class="footer_01 container">\
      <div id="f_site_map" class="f_site_map">\
        <hr class="gray print_none">\
        <div class="f_logo">\
          <div class="corporate_logo">\
            <ul>\
              <li><a href="/"><img src="/common/img/logo.png" alt="フッターロゴ" width="440" height="72"></a></li>\
            </ul>\
          </div>\
        </div><!--f_logo-->\
        <div class="footr_grid">\
          <div class="f_box none480">\
            <dl>\
              <dt>Brands</dt>\
              <dd>\
                <ul class="letter_0">\
                  <li><a href="/brands/">カテゴリ、ブランド一覧</a></li>\
                  <li><a href="/brands/dining/">Dining<span class="s_font none720">（食事、レストラン）</span></a></li>\
                  <li><a href="/brands/cafe/">Cafe<span class="s_font none720">（カフェ）</span></a></li>\
                  <li><a href="/brands/sweets/">CSweets<span class="s_font none720">（スイーツ）</span></a></li>\
                  <li><a href="/brands/local_specialties/">Local Specialties<span class="s_font none720">（特産品）</span></a></li>\
                </ul>\
              </dd>\
            </dl>\
          </div><!--f_box-->\
          <div class="f_box none480">\
            <dl>\
              <dt>News</dt>\
              <dd>\
                <ul>\
                  <li><a href="/news/">新着情報一覧</a></li>\
                </ul>\
              </dd>\
            </dl>\
          </div><!--f_box-->\
          <div class="f_box none480">\
            <dl>\
              <dt>About</dt>\
              <dd>\
                <ul>\
                  <li><a href="/about/">企業情報</a></li>\
                  <li><a href="/about/message/">トップメッセージ</a></li>\
                  <li><a href="/about/outline/">会社概要</a></li>\
                  <!--li><a href="/about/history/">沿革</a></li>\
                  <li><a href="/about/group/">グループ会社</a></li-->\
                </ul>\
              </dd>\
            </dl>\
          </div><!--f_box-->\
          <div class="f_box none480">\
            <dl>\
              <dt>Careers</dt>\
              <dd>\
                <ul>\
                  <li><a href="/careers/">採用情報</a></li>\
                </ul>\
              </dd>\
            </dl>\
          </div><!--f_box-->\
        </div><!--footr_grid-->\
        <div class="footer-share">\
          <div class="share-wrap">\
            <a id="share-line" class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="LINEで送る">\
              <svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="28" height="28">\
                <path fill="#000" d="M19.6 4.2A9.9 9.9 0 0 0 12 1.6C6.6 1.6 2.2 5.3 2.2 9.8c0 2.6 1.4 4.9 3.6 6.5l-.2 3.1c0 .2.2.4.4.3l3-1.6c.9.3 1.9.4 3 .4 5.4 0 9.8-3.7 9.8-8.2 0-2.2-1.1-4.2-3.2-5.9zM8.7 12.4H7V7.3h1.7v5.1zm2.7 0H9.7V7.3h1.7v5.1zm2.7 0H12.4V7.3H14v5.1zm4.2 0h-1.7V7.3h1.7v5.1z"/>\
              </svg>\
              LINEで送る\
            </a>\
            <a id="share-x" class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="Xでシェア">\
              <svg class="share-icon" viewBox="0 0 1200 1227" aria-hidden="true" focusable="false" width="28" height="28">\
                <path fill="#000" d="M714.163 519.913 1160.9 0H1052.6L670.968 442.694 358.343 0H0l467.878 654.551L0 1226.65h107.354l404.757-461.21 331.476 461.21H1200L714.163 519.913Zm-143.02 163.19-47.37-65.27L145.795 80.04h163.77l330.58 437.43 131.18 156.06 398.96 540.99H1005.7L571.143 683.103Z"/>\
              </svg>\
              Xでシェア\
            </a>\
            <a id="share-fb" class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebookでシェア">\
              <svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="28" height="28">\
                <path fill="#000" d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.78-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22c4.78-.74 8.43-4.91 8.43-9.93z"/>\
              </svg>\
              Facebookでシェア\
            </a>\
            <button id="share-ig" class="share-btn" type="button" aria-label="Instagramで使うためにリンクをコピー" accesskey="s" tabindex="0">\
              <svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="28" height="28">\
                <path fill="#000" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.2-3a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"/>\
              </svg>\
              リンクをコピー\
            </button>\
          </div><!--share-wrap-->\
        </div><!--footer-share-->\
      </div><!--f_site_map-->\
    </div><!--footer_01-->\
    <div class="footer_02">\
      <hr class="gray print_none">\
      <ul class="link_area">\
        <li><a href="/">Home</a></li>\
        <li><a href="/sitemap/">サイトマップ</a></li>\
        <!--li><a href="/faq/">FAQ</a></li-->\
        <li><a href="/contact/">お問い合わせ</a></li>\
        <li><a href="/policy/privacy-policy/">プライバシーポリシー</a></li>\
        <li><a href="/policy/site-policy/">サイトポリシー</a></li>\
        <li><a href="/policy/social-media-policy/">ソーシャルメディアポリシー</a></li>\
        <li><a href="/policy/web-accessibility/">ウェブアクセシビリティ対応</a></li>\
      </ul>\
    </div><!--footer_02-->\
    <div class="copyright"><p><span lang="en">&copy; 2026-<script>document.write(new Date().getFullYear());</script> SETOLAS Foodtech Co.,Ltd.</span></p></div>\
    <div class="return">\
      <a href="#page-top">\
        <div class="button-up">\
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#f5f5f5" d="m12.9 5.1 10.7 10.7c.5.5.5 1.4 0 1.9l-1.2 1.2c-.5.5-1.3.5-1.9 0L12 10.4l-8.5 8.5c-.5.5-1.3.5-1.9 0L.4 17.7c-.5-.5-.5-1.4 0-1.9L11.1 5.1c.5-.5 1.3-.5 1.8 0z"/></svg>\
        </div>\
      </a>\
    </div>\
    <!--js_footer-->';
    html += '';
    document.write(html);
}


function logo_name(){
    var html = "";
    html += '\
        <div class="logo_name">\
          <!--div>\
            <a href="https://setonasft.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/setona/logo.png" alt="瀬to菜 ロゴ" width="320" height="125">\
              </div>\
              <span>創作和食 瀬to菜<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
          <div>\
            <a href="https://takumisft.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/takumi/logo.png" alt="匠 ロゴ" width="320" height="320">\
              </div>\
              <span>割烹 匠<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://www.mitsukoshi.mistore.jp/takamatsu/shops/restaurant/landmark.html" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/landmark/logo.png" alt="landmark ロゴ" width="320" height="77">\
              </div>\
              <span>高松三越ランドマーク<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <!--div>\
            <a href="https://www.burgerking.co.jp/home" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/burger-king/logo.png" alt="バーガーキング ロゴ" width="320" height="39">\
              </div>\
              <span>バーガーキング&#174;<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
          <!--div>\
            <a href="https://www.sawee-japan.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/sawee-syokudou/logo.png" alt="サウィ食堂 ロゴ" width="320" height="320">\
              </div>\
              <span>サウィ食堂<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
          <div>\
            <a href="https://harmonyfoods.jp/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/harmony-foods/logo.png" alt="ハーモニーフーズ ロゴ" width="320" height="118">\
              </div>\
              <span>ハーモニーフーズ<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://www.ikunas.com/view/page/stm" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/sanuki-toy-museum/logo.png" alt="讃岐おもちゃ美術館 cafe ロゴ" width="320" height="35">\
              </div>\
              <span>讃岐おもちゃ美術館 cafe<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://9nanbaratei.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/kyu-nanbaratei/logo.png" alt="旧南原邸 ロゴ" width="300" height="212">\
              </div>\
              <span>旧南原邸<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://zentsuji.com/shukubou/mamocafe/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/maocafe/logo.png" alt="まおかふぇ ロゴ" width="320" height="51">\
              </div>\
              <span>まおかふぇ<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://cafe-de-ritsurin.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/cafe-de-ritsurin/logo.png" alt="Cafe de Ritsurin ロゴ" width="320" height="116">\
              </div>\
              <span>Café de Ritsurin（カフェ・ド・リツリン）<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://passerelle-ss.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/passerelle/logo.png" alt="Passerelle ロゴ" width="320" height="67">\
              </div>\
              <span>Passerelle（パスレル）<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://maisondeCIELetMER.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/maison-de-cleletmer/logo.png" alt="Maison de CIELetMER ロゴ" width="320" height="237">\
              </div>\
              <span>Maison de CIELetMER（メゾン・ド・シエルエメア）<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <!--div>\
            <a href="https://shikoku-arcade.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/shikoku-arcade/logo.png" alt="しこくあーけーど ロゴ" width="320" height="220">\
              </div>\
              <span>しこくあーけーど&#174;<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
          <div>\
            <a href="https://aonodia.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/aono-dia/logo.png" alt="蒼のダイヤ ロゴ" width="320" height="103">\
              </div>\
              <span>蒼のダイヤ<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://www.onisi.co.jp/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/oonishisyokuhin/logo.png" alt="大西食品 ロゴ" width="320" height="83">\
              </div>\
              <span>大西食品<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <!--div>\
            <a href="https://www.tao-works.jp/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/tao/logo.png" alt="tao ロゴ" width="320" height="135">\
              </div>\
              <span>tao.<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
          <!--div>\
            <a href="https://www.ikunas.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/tao/logo_ikunas.png" alt="イクナス ロゴ" width="320" height="36">\
              </div>\
              <span>イクナス<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div>\
          <div>\
            <a href="https://akiyatorinobe.com/" target="_blank" rel="noopener">\
              <div class="logo_name-child">\
                <img src="/common/img/tao/logo_akirino.png" alt="アキリノ ロゴ" width="320" height="76">\
              </div>\
              <span>アキリノ<img src="/common/img/i_window.png" alt="別ウィンドウで開く" width="15" height="15"></span>\
            </a>\
          </div-->\
        </div>\
        <!-- logo_name -->';
    html += '';
    document.write(html);
}



document.addEventListener("DOMContentLoaded", () => {

  const DOMAIN = "setolas.co.jp";

  const mailMap = {
    "js-mail-c": "contact-sfc",
    "js-mail-p": "policy-sfc",
    "js-mail-r": "recruit",
    "js-mail-s": "sales-sfc",
  };

  Object.keys(mailMap).forEach(className => {
    const user = mailMap[className];

    document.querySelectorAll("." + className).forEach(el => {
//      const mail = user;
      const mail = user + "@" + DOMAIN;
      el.textContent = mail;
    });
  });

});


