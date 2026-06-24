(function () {
  "use strict";

  var app = document.getElementById("app");
  var IG_URL = "https://instagram.com/" + MENU.instagram;

  var ICON_IG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/>' +
    '<circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>';
  var ICON_BACK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M15 18l-6-6 6-6"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function focusTitle() {
    var t = document.getElementById("screen-title");
    if (t) t.focus();
  }

  function findCategoria(id) {
    for (var g = 0; g < MENU.grupos.length; g++) {
      var cats = MENU.grupos[g].categorias;
      for (var c = 0; c < cats.length; c++) {
        if (cats[c].id === id) return cats[c];
      }
    }
    return null;
  }

  function itemHTML(it) {
    var desc = it.d ? '<div class="item__desc">' + esc(it.d) + "</div>" : "";
    return (
      '<div class="item"><div class="item__top">' +
      '<span class="item__name">' + esc(it.n) + "</span>" +
      '<span class="item__price">R$ ' + esc(it.p) + "</span>" +
      "</div>" + desc + "</div>"
    );
  }

  function renderHome() {
    document.title = "Cardápio · Cordeiro Bar & Armazém";
    var html =
      '<section class="home">' +
      '<div class="brand">' +
      '<img class="brand__logo" src="logo.svg" alt="Logo do Cordeiro Bar & Armazém">' +
      '<div class="brand__txt">' +
      '<h1 class="brand__name" id="screen-title" tabindex="-1">' + esc(MENU.nome) + "</h1>" +
      '<div class="brand__sub">' + esc(MENU.subtitulo) + "</div>" +
      '<a class="brand__ig" href="' + esc(IG_URL) + '" target="_blank" rel="noopener">' +
      ICON_IG + "@" + esc(MENU.instagram) + "</a>" +
      "</div></div>" +
      '<p class="home__hint">Toque numa categoria pra ver os preços</p>';

    for (var g = 0; g < MENU.grupos.length; g++) {
      var grupo = MENU.grupos[g];
      html += '<div class="group"><div class="group__title">' + esc(grupo.titulo) + "</div>";
      html += '<div class="cats">';
      for (var c = 0; c < grupo.categorias.length; c++) {
        var cat = grupo.categorias[c];
        html +=
          '<a class="cat-btn" href="#cat/' + esc(cat.id) + '">' + esc(cat.nome) + "</a>";
      }
      html += "</div></div>";
    }

    html +=
      '<div class="foot"><a href="' + esc(IG_URL) + '" target="_blank" rel="noopener">' +
      ICON_IG + "Siga @" + esc(MENU.instagram) + "</a></div>";
    html += "</section>";
    app.innerHTML = html;
    focusTitle();
  }

  function renderCategoria(cat) {
    document.title = cat.nome + " · Cordeiro";
    var html =
      '<section class="cat">' +
      '<div class="topbar">' +
      '<button class="back" type="button" onclick="location.hash=\'\'">' +
      ICON_BACK + "Voltar</button>" +
      '<h1 class="tag" id="screen-title" tabindex="-1">' + esc(cat.nome) + "</h1>" +
      "</div>";

    if (cat.nota) html += '<div class="cat__note">' + esc(cat.nota) + "</div>";

    html += '<div class="list">';
    for (var i = 0; i < cat.itens.length; i++) html += itemHTML(cat.itens[i]);
    html += "</div>";

    if (cat.acrescimos) {
      html += '<div class="acrescimos"><div class="acrescimos__title">' +
        esc(cat.acrescimos.titulo) + "</div>";
      for (var a = 0; a < cat.acrescimos.itens.length; a++) {
        html += itemHTML(cat.acrescimos.itens[a]);
      }
      html += "</div>";
    }

    html += "</section>";
    app.innerHTML = html;
    window.scrollTo(0, 0);
    focusTitle();
  }

  function router() {
    var hash = location.hash || "";
    var m = hash.match(/^#cat\/(.+)$/);
    if (m) {
      var id;
      try { id = decodeURIComponent(m[1]); } catch (e) { renderHome(); return; }
      var cat = findCategoria(id);
      if (cat) { renderCategoria(cat); return; }
    }
    renderHome();
  }

  window.addEventListener("hashchange", router);
  router();
})();
