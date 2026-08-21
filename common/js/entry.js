// JavaScript Document


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


