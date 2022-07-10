"use strict";

// ライブラリ用のオブジェクトの作成
if (window.game === undefined) {window.game = {}}
if (window.game.anim === undefined) {window.game.anim = {}}

(function() {
  var _t = game.anim; // ショートカットの作成

  // アニメーション実行/停止用関数
  _t.rqstAnmFrm = function(cd) {
    var id = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cd) {
        return window.setTimeout(cd, 1000 / 60);
      })(cd);
    return id;
  };

  _t.cnclAnmFrm = function(id) {
    (window.cancelAnimationFrame ||
     window.webkitCancelRequestAnimationFrame ||
     window.mozCancelRequestAnimationFrame ||
     window.oCancelRequestAnimationFrame ||
     window.msCancelRequestAnimationFrame ||
     window.clearTimeout)(id)
  };

})();