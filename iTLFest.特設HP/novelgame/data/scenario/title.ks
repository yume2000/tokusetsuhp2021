
[cm]

@clearstack
@bg storage ="title.jpg" time=100
@wait time = 200

*start

[button x=1200 y=650 graphic="title/start.png" enterimg="title/start_p.png"  target="gamestart"]
[button x=1200 y=800 graphic="title/cont.png" enterimg="title/cont_p.png" role="load" ]
[button x=1200 y=950 graphic="title/conf.png" enterimg="title/conf_p.png" role="sleepgame" storage="config.ks" ]

[s]

*gamestart
;一番最初のシナリオファイルへジャンプする
@jump storage="zeropoint.ks"
