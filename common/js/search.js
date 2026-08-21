// JavaScript Document

// ======================
// 正規化（←追加）
// ======================
function normalize(str) {
  return (str || "")
    .trim()                 // 前後の空白削除
    .replace(/\s+/g, "")    // 空白全部削除
    .toLowerCase();         // 小文字化
}

// ======================
// キーワード取得（強化版）
// ======================
let query = null;

// ① 通常（本番用）
let params = new URLSearchParams(window.location.search);
query = params.get("q");

// ② オフライン用 fallback
if (!query) {
  query = sessionStorage.getItem("searchQuery");
}

// ③ それでもなければ空
if (!query) {
  query = "";
}

// ✅ デバッグ（必要なら外してOK）
console.log("query:", query);

// 表示エリア
const resultDiv = document.getElementById("results");
const countText = document.getElementById("resultCount");

// データ読み込み
const data = SEARCH_DATA;
const ITEMS_PER_PAGE = 10;
let currentPage = 1;

// ======================
// 初期処理
// ======================
if (!query) {
  countText.textContent = "キーワードを入力してください";
} else {
  runSearch(query);
}

// ======================
// 検索実行（修正版）
// ======================
function runSearch(query) {
currentPage = 1;
  const q = normalize(query);

  let results = [];

  data.forEach(page => {

    const title = normalize(page.title);
    const content = normalize(page.content);

    let score = 0;

    if (title.includes(q)) score += 2;
    if (content.includes(q)) score += 1;

    if (score > 0) {
      results.push({
        ...page,
        score: score
      });
    }
  });

  results.sort((a, b) => b.score - a.score);

  renderResults(results, query);
}

// ======================
// 描画
// ======================
function renderResults(results, query) {
  countText.textContent = `「${query}」の検索結果：${results.length}件`;

  resultDiv.innerHTML = "";

  if (results.length === 0) {
    resultDiv.innerHTML = "<p>該当するページが見つかりませんでした。</p>";
    return;
  }


const start = (currentPage - 1) * ITEMS_PER_PAGE;
const end = start + ITEMS_PER_PAGE;
const pageItems = results.slice(start, end);

pageItems.forEach(page => {

    const snippet = createSnippet(page.content, query);

    const el = document.createElement("div");
    el.className = "search-item";

    el.innerHTML = `
      <h3 class="search-title">
        <a href="${page.url}">
          ${highlight(page.title, query)}
        </a>
      </h3>
      <p class="search-snippet">${highlight(snippet, query)}</p>
    `;

    resultDiv.appendChild(el);

  });
  
      // ページボタン
const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

const pagination = document.createElement("div");

for (let i = 1; i <= totalPages; i++) {
  const btn = document.createElement("button");
  btn.textContent = i;

  // ✅ ここ追加！！
  if (i === currentPage) {
    btn.disabled = true;
  }

  btn.onclick = () => {
    currentPage = i;
    renderResults(results, query);
  };

  pagination.appendChild(btn);
}

resultDiv.appendChild(pagination);
}

// ======================
// 抜粋生成
// ======================
function createSnippet(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) {
    return text.substring(0, 80) + "...";
  }

  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + 40);

  return "..." + text.substring(start, end) + "...";
}

// ======================
// ハイライト
// ======================
function highlight(text, query) {
  const reg = new RegExp(`(${query})`, "gi");
  return text.replace(reg, '<span class="search-highlight">$1</span>');
}
