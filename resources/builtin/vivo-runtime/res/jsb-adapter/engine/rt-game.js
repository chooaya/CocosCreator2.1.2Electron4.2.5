cc.game.restart = function () {
};

qg.onHide(function (data) {
    cc.game.emit(cc.game.EVENT_HIDE);
});

qg.onShow(function () {
    cc.game.emit(cc.game.EVENT_SHOW);
});