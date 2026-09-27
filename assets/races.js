/* Mage Forever TL;DR: the race picker every page shows near the top.
   Load it after site.js. Pages call window.racePickerHTML() when they draw, and any radio named
   "race" (outside a read-only shared view) switches the race for every page on this site. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  var CSS = ""
    + ".rp{margin:0;padding:0;border:0;min-width:0;display:grid;gap:8px;container-type:inline-size}"
    + ".rp-title{margin:0;font-family:var(--font-mono);font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}"
    + ".rp-groups{display:grid;gap:8px}"
    + ".rp-group{display:grid;grid-template-columns:minmax(0,1fr);gap:4px}"
    + "@container (min-width:400px){.rp-group{grid-template-columns:62px minmax(0,1fr);align-items:center;gap:8px}}"
    + ".rp-fac{font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fc)}"
    + ".rp-group[data-fac=a]{--fc:var(--alliance,#2458B3);--fs:var(--alliance-soft,#DDE7F8)}"
    + ".rp-group[data-fac=h]{--fc:var(--horde,#A3262A);--fs:var(--horde-soft,#F6DEDD)}"
    + ".rp-opts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}"
    + ".rp-opt{position:relative;display:grid;cursor:pointer;min-width:0}"
    + ".rp-opt input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}"
    + ".rp-body{display:grid;justify-items:center;align-content:center;gap:0;padding:6px 4px;border:1px solid var(--line);border-radius:10px;background:var(--surface);text-align:center;transition:background .12s,border-color .12s}"
    + ".rp-name{font-size:14.5px;font-weight:500;line-height:1.2;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}"
    + ".rp-sub{font-size:11.5px;line-height:1.2;color:var(--ink-3);white-space:nowrap}"
    + ".rp-opt:hover .rp-body{border-color:var(--fc)}"
    + ".rp-opt input:checked + .rp-body{border-color:var(--fc);background:var(--fs)}"
    + ".rp-opt input:checked + .rp-body .rp-name{color:var(--fc);font-weight:700}"
    + ".rp-opt input:focus-visible + .rp-body{outline:2px solid var(--focus,var(--accent));outline-offset:2px}"
    + ".rp-opt input:disabled{cursor:default}"
    + ".rp-opt input:disabled:not(:checked) + .rp-body{opacity:.55}"
    + ".rp-hint{margin:0;font-size:13.5px;line-height:1.4;color:var(--warn,#9A5B00)}"
    + ".rp.is-big .rp-groups{gap:12px}"
    + ".rp.is-big .rp-group{grid-template-columns:minmax(0,1fr)}"
    + ".rp.is-big .rp-body{padding:12px 6px 10px;border-radius:14px}"
    + ".rp.is-big .rp-name{font-family:var(--font-display);font-size:19px;font-weight:400}"
    + ".rp.is-big .rp-opt input:checked + .rp-body .rp-name{font-weight:400}"
    + ".rp.is-big .rp-sub{font-size:12.5px}"
    + ".rp.is-big .rp-fac{font-size:12px}"
    + "@media (min-width:700px){.rp.is-big .rp-groups{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}}";

  (function injectCSS() {
    if (document.getElementById("rp-css")) return;
    var s = document.createElement("style");
    s.id = "rp-css";
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  })();

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }

  var uid = 0;
  // opts: { race, readOnly, big, title, hint, subs }
  window.racePickerHTML = function (opts) {
    opts = opts || {};
    var cur = opts.race || S.race();
    var ro = !!opts.readOnly;
    var tid = "rp-title-" + (++uid);
    var subs = opts.subs || {};
    var groups = ["a", "h"].map(function (f) {
      var races = S.RACE_ORDER.filter(function (k) { return S.RACES[k].fac === f; });
      return '<div class="rp-group" data-fac="' + f + '"><span class="rp-fac">' + esc(S.FACTION[f]) + '</span><div class="rp-opts">'
        + races.map(function (k) {
          var r = S.RACES[k];
          // The compact picker keeps every button one line tall; the big one has room for a second line.
          var sub = subs[k] != null ? subs[k] : (opts.big && r.sub ? r.sub : "");
          return '<label class="rp-opt"><input type="radio" name="race" value="' + k + '"' + (k === cur ? " checked" : "") + (ro ? " disabled" : "")
            + ' aria-label="' + esc(r.name + (r.sub ? " (" + r.sub + ")" : "") + ", " + S.FACTION[f]) + '">'
            + '<span class="rp-body"><span class="rp-name">' + esc(r.name) + "</span>" + (sub ? '<span class="rp-sub">' + esc(sub) + "</span>" : "") + "</span></label>";
        }).join("") + "</div></div>";
    }).join("");
    var hint = "";
    if (!ro && !S.racePicked()) hint = opts.hint || ("Showing " + S.RACES[cur].name + ". Pick yours: it changes your trainers, quests and routes.");
    return '<div class="rp' + (opts.big ? " is-big" : "") + '" role="radiogroup" aria-labelledby="' + tid + '">'
      + '<p class="rp-title" id="' + tid + '">' + esc(opts.title || (ro ? "Their race" : "Your race")) + "</p>"
      + '<div class="rp-groups">' + groups + "</div>"
      + (hint ? '<p class="rp-hint">' + esc(hint) + "</p>" : "")
      + "</div>";
  };

  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t || t.name !== "race" || t.disabled || !S.RACES[t.value]) return;
    var v = t.value;
    // Record the pick for the owner's stats. Pages with progress send a fuller summary right after.
    try { if (window.mageTrack) window.mageTrack("state", { race: v }); } catch (err) { /* stats are optional */ }
    S.setRace(v);
    // Pages redraw when the race changes, so put focus back on the new choice.
    var again = document.querySelector('input[name="race"][value="' + v + '"]:not([disabled])');
    if (again && again !== document.activeElement) { try { again.focus({ preventScroll: true }); } catch (err) { again.focus(); } }
  });
})();
