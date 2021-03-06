(function () {

  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }


  var GameView = Breakout.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.timerId = null;
    game.setView(this);
  };

  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 20
    );
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
    this.ctx.clearRect(0, 0, Breakout.Game.DIM_X, Breakout.Game.DIM_Y);
    this.ctx.fillStyle = "#669900";
    this.ctx.fillRect(0, 0, Breakout.Game.DIM_X, Breakout.Game.DIM_Y);
  };

})();