/**
 * Created by m2wasabi on 2015/01/06.
 */


ZGN(function() {

    // id=1のTerminalインスタンスを取得します
    var term = ZGN.term(1);
    var gpio = term.gpio;
    gpio.pinMode('17', ZGN.OUTPUT);
    gpio.pinMode('27', ZGN.INPUT);

    // Start testing
    gpio.digitalWrite('17', ZGN.HIGH, function () {

        // 動作完了を ブラウザのコンソールログに表示させます
        console.log('GPIO:HIGH');
        $("#result").append('<p>GPIO:HIGH</p>');
        gpio.digitalRead('27', function (data) {
            if(data == ZGN.HIGH) {
                console.log('GPIO:READ ... HI OK');
                $("#result").append('<p>GPIO:READ ... HI OK</p>');
            } else {
                console.log('GPIO:READ ... LOW NG');
                $("#result").append('<p>GPIO:READ ... LOW NG</p>');
            }
        });
    });

});