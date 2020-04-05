var webhook = 'https://192.168.1.133:8123/api/webhook/2a5b9d4109fb3db4ef729999596012f41a69044cb0a87ddefa4c7d4b4c2aaada';
var last_update = new Date('2020/04/05 03:20:02');
var graph = 'digraph G { node[shape=record];   "0x00124b0018e1a869" [style="bold, filled", fillcolor="#e04e5d", fontcolor="#ffffff", label="{Coordinator|0x00124b0018e1a869 (0)|2020-04-05T03:20:02+01:00}"];   "0x00124b0018e1a869" -> "0x000d6ffffe9c0233" [penwidth=0.5, weight=0, color="#994444", label="64"]   "0x00158d0001f9d417" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{movimento_sala|0x00158d0001f9d417 (1709)|Xiaomi Aqara human body movement and illuminance sensor (RTCGQ11LM)|2020-04-05T03:13:40+01:00}"];   "0x00158d0001f9d417" -> "0x000d6ffffe9c0233" [penwidth=1, weight=0, color="#994444", label="128"]   "0x000d6ffffe9c0233" [style="rounded, filled", fillcolor="#4ea3e0", fontcolor="#ffffff", label="{tomada_hall|0x000d6ffffe9c0233 (7006)|IKEA TRADFRI control outlet (E1603/E1702)|2020-04-05T03:19:17+01:00}"];   "0x000d6ffffe9c0233" -> "0x00124b0018e1a869" [penwidth=0.5, weight=0, color="#994444", label="12"]   "0x000d6ffffe9c0233" -> "0x000d6ffffe2efe21" [penwidth=0.5, weight=0, color="#994444", label="155"]   "0x000d6ffffe9c0233" -> "0x680ae2fffec92973" [penwidth=0.5, weight=0, color="#994444", label="37"]   "0x000d6ffffea264bc" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{botao_leds|0x000d6ffffea264bc (48606)|IKEA TRADFRI ON/OFF switch (E1743)|2020-04-04T16:34:55+01:00}"];   "0x000d6ffffea264bc" -> "0x000d6ffffe2efe21" [penwidth=1, weight=0, color="#994444", label="134"]   "0x00158d000359e754" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{botao_ilu_exterior|0x00158d000359e754 (64247)|Xiaomi MiJia wireless switch (WXKG01LM)|2020-04-05T02:34:00+01:00}"];   "0x00158d000359e754" -> "0x000d6ffffe9c0233" [penwidth=1, weight=0, color="#994444", label="117"]   "0x000d6ffffe2efe21" [style="rounded, filled", fillcolor="#4ea3e0", fontcolor="#ffffff", label="{tomada_sala|0x000d6ffffe2efe21 (41391)|IKEA TRADFRI control outlet (E1603/E1702)|2020-04-05T03:18:34+01:00}"];   "0x000d6ffffe2efe21" -> "0x00124b0018e1a869" [penwidth=0.5, weight=0, color="#994444", label="0"]   "0x000d6ffffe2efe21" -> "0x000d6ffffe9c0233" [penwidth=0.5, weight=0, color="#994444", label="152"]   "0x000d6ffffe2efe21" -> "0x680ae2fffec92973" [penwidth=0.5, weight=0, color="#994444", label="90"]   "0x00158d00034d819f" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{janela_mafalda|0x00158d00034d819f (44503)|Xiaomi MiJia door & window contact sensor (MCCGQ01LM)|2020-04-05T02:44:55+01:00}"];   "0x00158d00034d819f" -> "0x000d6ffffe2efe21" [penwidth=1, weight=0, color="#994444", label="178"]   "0x00158d00034d844d" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{janela_sala|0x00158d00034d844d (55090)|Xiaomi MiJia door & window contact sensor (MCCGQ01LM)|2020-04-05T02:23:07+01:00}"];   "0x00158d00034d844d" -> "0x000d6ffffe2efe21" [penwidth=1, weight=0, color="#994444", label="149"]   "0x000d6ffffebcd992" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{botao_multiuso|0x000d6ffffebcd992 (64308)|IKEA TRADFRI ON/OFF switch (E1743)|2020-04-04T17:19:28+01:00}"];   "0x000d6ffffebcd992" -> "0x680ae2fffec92973" [penwidth=1, weight=0, color="#994444", label="83"]   "0x680ae2fffec92973" [style="rounded, filled", fillcolor="#4ea3e0", fontcolor="#ffffff", label="{lampada_ikea|0x680ae2fffec92973 (41376)|IKEA TRADFRI LED bulb E26/E27 806 lumen, dimmable, warm white (LED1836G9)|2020-04-05T03:19:02+01:00}"];   "0x680ae2fffec92973" -> "0x00124b0018e1a869" [penwidth=0.5, weight=0, color="#994444", label="0"]   "0x680ae2fffec92973" -> "0x000d6ffffe9c0233" [penwidth=0.5, weight=0, color="#994444", label="45"]   "0x680ae2fffec92973" -> "0x000d6ffffe2efe21" [penwidth=0.5, weight=0, color="#994444", label="101"]   "0x00158d00044b86f8" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{temperatura_stuva|0x00158d00044b86f8 (31372)|Xiaomi MiJia temperature & humidity sensor (WSDCGQ01LM)|2020-04-05T02:32:36+01:00}"];   "0x00158d00044b86f8" -> "0x00124b0018e1a869" [penwidth=1, weight=0, color="#994444", label="164"]   "0x00158d0002e7f816" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{portao_jardim|0x00158d0002e7f816 (60215)|Xiaomi Aqara door & window contact sensor (MCCGQ11LM)|2020-04-05T03:18:40+01:00}"];   "0x00158d0002e7f816" -> "0x000d6ffffe9c0233" [penwidth=1, weight=0, color="#994444", label="100"]   "0x00158d0002f8d190" [style="rounded, dashed, filled", fillcolor="#fff8ce", fontcolor="#000000", label="{movimento_despensa|0x00158d0002f8d190 (43789)|Xiaomi Aqara human body movement and illuminance sensor (RTCGQ11LM)|2020-04-05T03:05:04+01:00}"];   "0x00158d0002f8d190" -> "0x680ae2fffec92973" [penwidth=1, weight=0, color="#994444", label="175"] }'