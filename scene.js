class Scene {
	constructor(objs) {
		this.objs = objs;
	}
	addObj(obj) {
		this.objs.push(obj);

	}
	draw() {
		renderImage('./assets/bg.jpg', 0, 0, canvas.width, canvas.height);

		for (var i = 0; i < this.objs.length; i ++) {
			this.objs[i].draw();
		}
	}
	spawnItems() {
		if (iteration % 500 === 0) {
			this.objs.push(new Item('HealthPack', rd(0, canvas.width), rd(0, canvas.height), './assets/health.jpg'));
		}
	}
	rmItems() {
		for (var i = 0; i < this.objs.length; i ++) {
			const obj = this.objs[i];
			if (obj.constructor.name === 'Item' && (iteration - obj.birthTime > 1000)) {
				this.objs.splice(i, 1);
			}
		}
	}
	nextFrame() {
		for (var i = 0; i < this.objs.length; i ++) {
			var obj = this.objs[i];
			if (obj.health <= 0) {
				this.objs.splice(this.objs.indexOf(obj), 1);
			}
		}
		this.spawnItems();
		this.rmItems();
		this.draw();
	}
}

var scene1 = new Scene([]);

scene1.addObj(new Wall(-5, 124));
scene1.addObj(new Wall(15, 122));
scene1.addObj(new Wall(15, 122));
scene1.addObj(new Wall(32, 120));
scene1.addObj(new Wall(48, 119));
scene1.addObj(new Wall(72, 120));
scene1.addObj(new Wall(100, 118));
scene1.addObj(new Wall(130, 112));
scene1.addObj(new Wall(165, 112));
scene1.addObj(new Wall(190, 114));
scene1.addObj(new Wall(222, 114));
scene1.addObj(new Wall(241, 114));
scene1.addObj(new Wall(272, 113));
scene1.addObj(new Wall(300, 113));
scene1.addObj(new Wall(334, 112));
scene1.addObj(new Wall(364, 111));
scene1.addObj(new Wall(390, 111));
scene1.addObj(new Wall(417, 110));
scene1.addObj(new Wall(447, 113));
scene1.addObj(new Wall(470, 113));
scene1.addObj(new Wall(506, 113));
scene1.addObj(new Wall(527, 112));
scene1.addObj(new Wall(485, 108));
scene1.addObj(new Wall(555, 108));
scene1.addObj(new Wall(583, 108));
scene1.addObj(new Wall(608, 108));
scene1.addObj(new Wall(637, 107));
scene1.addObj(new Wall(-16, 731));
scene1.addObj(new Wall(4, 730));
scene1.addObj(new Wall(32, 730));
scene1.addObj(new Wall(62, 726));
scene1.addObj(new Wall(95, 724));
scene1.addObj(new Wall(122, 726));
scene1.addObj(new Wall(155, 724));
scene1.addObj(new Wall(178, 721));
scene1.addObj(new Wall(206, 726));
scene1.addObj(new Wall(234, 724));
scene1.addObj(new Wall(260, 719));
scene1.addObj(new Wall(281, 719));
scene1.addObj(new Wall(310, 719));
scene1.addObj(new Wall(337, 719));
scene1.addObj(new Wall(370, 715));
scene1.addObj(new Wall(417, 711));
scene1.addObj(new Wall(389, 714));
scene1.addObj(new Wall(438, 714));
scene1.addObj(new Wall(457, 713));
scene1.addObj(new Wall(477, 710));
scene1.addObj(new Wall(499, 710));
scene1.addObj(new Wall(524, 707));
scene1.addObj(new Wall(551, 705));
scene1.addObj(new Wall(572, 704));
scene1.addObj(new Wall(607, 703));
scene1.addObj(new Wall(631, 703));
scene1.addObj(new Wall(637, 115));
scene1.addObj(new Wall(633, 124));
scene1.addObj(new Wall(637, 145));
scene1.addObj(new Wall(637, 166));
scene1.addObj(new Wall(636, 195));
scene1.addObj(new Wall(628, 305));
scene1.addObj(new Wall(628, 330));
scene1.addObj(new Wall(626, 354));
scene1.addObj(new Wall(626, 374));
scene1.addObj(new Wall(626, 389));
scene1.addObj(new Wall(626, 416));
scene1.addObj(new Wall(626, 440));
scene1.addObj(new Wall(626, 458));
scene1.addObj(new Wall(631, 481));
scene1.addObj(new Wall(631, 677));
scene1.addObj(new Wall(631, 644));
scene1.addObj(new Wall(631, 608));
scene1.addObj(new Wall(629, 577));
scene1.addObj(new Wall(629, 617));
scene1.addObj(new Wall(626, 660));
scene1.addObj(new Wall(624, 290));
scene1.addObj(new Wall(628, 277));
scene1.addObj(new Wall(505, 593));
scene1.addObj(new Wall(505, 565));
scene1.addObj(new Wall(502, 534));
scene1.addObj(new Wall(502, 496));
scene1.addObj(new Wall(502, 510));
scene1.addObj(new Wall(501, 474));
scene1.addObj(new Wall(500, 443));
scene1.addObj(new Wall(503, 609));
scene1.addObj(new Wall(489, 323));
scene1.addObj(new Wall(488, 300));
scene1.addObj(new Wall(485, 271));
scene1.addObj(new Wall(486, 243));
scene1.addObj(new Wall(485, 205));
scene1.addObj(new Wall(483, 218));
scene1.addObj(new Wall(485, 178));
scene1.addObj(new Wall(484, 341));
scene1.addObj(new Wall(345, 219));
scene1.addObj(new Wall(343, 239));
scene1.addObj(new Wall(342, 267));
scene1.addObj(new Wall(344, 288));
scene1.addObj(new Wall(340, 319));
scene1.addObj(new Wall(342, 351));
scene1.addObj(new Wall(341, 379));
scene1.addObj(new Wall(341, 402));
scene1.addObj(new Wall(342, 415));
scene1.addObj(new Wall(341, 430));
scene1.addObj(new Wall(343, 446));
scene1.addObj(new Wall(342, 485));
scene1.addObj(new Wall(344, 470));
scene1.addObj(new Wall(343, 510));
scene1.addObj(new Wall(343, 527));
scene1.addObj(new Wall(340, 550));
scene1.addObj(new Wall(341, 565));
scene1.addObj(new Wall(339, 590));
scene1.addObj(new Wall(342, 601));
scene1.addObj(new Wall(354, 344));
scene1.addObj(new Wall(368, 339));
scene1.addObj(new Wall(392, 338));
scene1.addObj(new Wall(408, 337));
scene1.addObj(new Wall(353, 450));
scene1.addObj(new Wall(379, 449));
scene1.addObj(new Wall(398, 446));
scene1.addObj(new Wall(412, 441));
scene1.addObj(new Wall(321, 266));
scene1.addObj(new Wall(292, 269));
scene1.addObj(new Wall(272, 284));
scene1.addObj(new Wall(274, 312));
scene1.addObj(new Wall(267, 334));
scene1.addObj(new Wall(267, 356));
scene1.addObj(new Wall(261, 411));
scene1.addObj(new Wall(261, 432));
scene1.addObj(new Wall(256, 446));
scene1.addObj(new Wall(258, 466));
scene1.addObj(new Wall(258, 484));
scene1.addObj(new Wall(260, 503));
scene1.addObj(new Wall(283, 506));
scene1.addObj(new Wall(304, 505));
scene1.addObj(new Wall(320, 503));
scene1.addObj(new Wall(95, 130));
scene1.addObj(new Wall(93, 152));
scene1.addObj(new Wall(94, 170));
scene1.addObj(new Wall(94, 192));
scene1.addObj(new Wall(93, 209));
scene1.addObj(new Wall(92, 227));
scene1.addObj(new Wall(65, 234));
scene1.addObj(new Wall(44, 234));
scene1.addObj(new Wall(15, 236));
scene1.addObj(new Wall(14, 599));
scene1.addObj(new Wall(32, 597));
scene1.addObj(new Wall(51, 592));
scene1.addObj(new Wall(70, 595));
scene1.addObj(new Wall(86, 598));
scene1.addObj(new Wall(84, 619));
scene1.addObj(new Wall(88, 642));
scene1.addObj(new Wall(88, 664));
scene1.addObj(new Wall(89, 683));
scene1.addObj(new Wall(89, 695));
scene1.addObj(new Wall(152, 289));
scene1.addObj(new Wall(150, 319));
scene1.addObj(new Wall(152, 353));
scene1.addObj(new Wall(148, 379));
scene1.addObj(new Wall(154, 407));
scene1.addObj(new Wall(148, 428));
scene1.addObj(new Wall(152, 453));
scene1.addObj(new Wall(152, 474));
scene1.addObj(new Wall(151, 498));
scene1.addObj(new Wall(152, 512));
scene1.addObj(new Wall(153, 533));
scene1.addObj(new Wall(1069, 103));
scene1.addObj(new Wall(1092, 106));
scene1.addObj(new Wall(1116, 104));
scene1.addObj(new Wall(1149, 106));
scene1.addObj(new Wall(1190, 108));
scene1.addObj(new Wall(1169, 109));
scene1.addObj(new Wall(1198, 110));
scene1.addObj(new Wall(1229, 112));
scene1.addObj(new Wall(1245, 107));
scene1.addObj(new Wall(1262, 109));
scene1.addObj(new Wall(1291, 105));
scene1.addObj(new Wall(1308, 108));
scene1.addObj(new Wall(1333, 107));
scene1.addObj(new Wall(1359, 106));
scene1.addObj(new Wall(1389, 107));
scene1.addObj(new Wall(1415, 104));
scene1.addObj(new Wall(1442, 104));
scene1.addObj(new Wall(1465, 108));
scene1.addObj(new Wall(1491, 103));
scene1.addObj(new Wall(1521, 106));
scene1.addObj(new Wall(1551, 102));
scene1.addObj(new Wall(1570, 102));
scene1.addObj(new Wall(1589, 102));
scene1.addObj(new Wall(1619, 103));
scene1.addObj(new Wall(1658, 101));
scene1.addObj(new Wall(1631, 103));
scene1.addObj(new Wall(1688, 102));
scene1.addObj(new Wall(1713, 102));
scene1.addObj(new Wall(1749, 103));
scene1.addObj(new Wall(1731, 105));
scene1.addObj(new Wall(1768, 101));
scene1.addObj(new Wall(1802, 98));
scene1.addObj(new Wall(1780, 100));
scene1.addObj(new Wall(1825, 102));
scene1.addObj(new Wall(1057, 113));
scene1.addObj(new Wall(1058, 144));
scene1.addObj(new Wall(1055, 178));
scene1.addObj(new Wall(1049, 152));
scene1.addObj(new Wall(1049, 162));
scene1.addObj(new Wall(1047, 251));
scene1.addObj(new Wall(1044, 276));
scene1.addObj(new Wall(1048, 292));
scene1.addObj(new Wall(1047, 316));
scene1.addObj(new Wall(1042, 336));
scene1.addObj(new Wall(1043, 368));
scene1.addObj(new Wall(1043, 387));
scene1.addObj(new Wall(1043, 409));
scene1.addObj(new Wall(1038, 430));
scene1.addObj(new Wall(1039, 447));
scene1.addObj(new Wall(1039, 469));
scene1.addObj(new Wall(1031, 553));
scene1.addObj(new Wall(1034, 569));
scene1.addObj(new Wall(1032, 598));
scene1.addObj(new Wall(1032, 632));
scene1.addObj(new Wall(1035, 654));
scene1.addObj(new Wall(1035, 676));
scene1.addObj(new Wall(1035, 699));
scene1.addObj(new Wall(1031, 610));
scene1.addObj(new Wall(1052, 694));
scene1.addObj(new Wall(1088, 702));
scene1.addObj(new Wall(1067, 693));
scene1.addObj(new Wall(1112, 694));
scene1.addObj(new Wall(1136, 689));
scene1.addObj(new Wall(1157, 683));
scene1.addObj(new Wall(1186, 680));
scene1.addObj(new Wall(1212, 681));
scene1.addObj(new Wall(1236, 677));
scene1.addObj(new Wall(1273, 676));
scene1.addObj(new Wall(1289, 677));
scene1.addObj(new Wall(1253, 674));
scene1.addObj(new Wall(1305, 676));
scene1.addObj(new Wall(1326, 675));
scene1.addObj(new Wall(1343, 675));
scene1.addObj(new Wall(1369, 671));
scene1.addObj(new Wall(1389, 673));
scene1.addObj(new Wall(1420, 675));
scene1.addObj(new Wall(1444, 676));
scene1.addObj(new Wall(1471, 672));
scene1.addObj(new Wall(1511, 669));
scene1.addObj(new Wall(1544, 674));
scene1.addObj(new Wall(1493, 666));
scene1.addObj(new Wall(1570, 668));
scene1.addObj(new Wall(1604, 671));
scene1.addObj(new Wall(1645, 670));
scene1.addObj(new Wall(1627, 667));
scene1.addObj(new Wall(1666, 664));
scene1.addObj(new Wall(1698, 664));
scene1.addObj(new Wall(1728, 661));
scene1.addObj(new Wall(1744, 661));
scene1.addObj(new Wall(1767, 660));
scene1.addObj(new Wall(1785, 659));
scene1.addObj(new Wall(1813, 655));
scene1.addObj(new Wall(1832, 652));
scene1.addObj(new Wall(1189, 185));
scene1.addObj(new Wall(1188, 205));
scene1.addObj(new Wall(1186, 224));
scene1.addObj(new Wall(1186, 247));
scene1.addObj(new Wall(1189, 268));
scene1.addObj(new Wall(1189, 291));
scene1.addObj(new Wall(1191, 320));
scene1.addObj(new Wall(1189, 332));
scene1.addObj(new Wall(1183, 404));
scene1.addObj(new Wall(1181, 425));
scene1.addObj(new Wall(1182, 439));
scene1.addObj(new Wall(1181, 452));
scene1.addObj(new Wall(1180, 469));
scene1.addObj(new Wall(1182, 488));
scene1.addObj(new Wall(1183, 507));
scene1.addObj(new Wall(1185, 532));
scene1.addObj(new Wall(1186, 557));
scene1.addObj(new Wall(1185, 577));
scene1.addObj(new Wall(1185, 588));
scene1.addObj(new Wall(1187, 599));
scene1.addObj(new Wall(1255, 323));
scene1.addObj(new Wall(1271, 320));
scene1.addObj(new Wall(1294, 321));
scene1.addObj(new Wall(1330, 320));
scene1.addObj(new Wall(1308, 318));
scene1.addObj(new Wall(1252, 436));
scene1.addObj(new Wall(1270, 436));
scene1.addObj(new Wall(1282, 432));
scene1.addObj(new Wall(1305, 427));
scene1.addObj(new Wall(1330, 424));
scene1.addObj(new Wall(1341, 215));
scene1.addObj(new Wall(1339, 274));
scene1.addObj(new Wall(1337, 229));
scene1.addObj(new Wall(1336, 253));
scene1.addObj(new Wall(1343, 294));
scene1.addObj(new Wall(1342, 330));
scene1.addObj(new Wall(1342, 365));
scene1.addObj(new Wall(1343, 374));
scene1.addObj(new Wall(1344, 396));
scene1.addObj(new Wall(1344, 416));
scene1.addObj(new Wall(1348, 442));
scene1.addObj(new Wall(1350, 471));
scene1.addObj(new Wall(1352, 490));
scene1.addObj(new Wall(1350, 517));
scene1.addObj(new Wall(1352, 522));
scene1.addObj(new Wall(1347, 535));
scene1.addObj(new Wall(1349, 542));
scene1.addObj(new Wall(1348, 556));
scene1.addObj(new Wall(1340, 309));
scene1.addObj(new Wall(1337, 351));
scene1.addObj(new Wall(1347, 246));
scene1.addObj(new Wall(1369, 246));
scene1.addObj(new Wall(1391, 244));
scene1.addObj(new Wall(1416, 244));
scene1.addObj(new Wall(1415, 264));
scene1.addObj(new Wall(1418, 284));
scene1.addObj(new Wall(1415, 317));
scene1.addObj(new Wall(1413, 304));
scene1.addObj(new Wall(1413, 344));
scene1.addObj(new Wall(1366, 550));
scene1.addObj(new Wall(1388, 548));
scene1.addObj(new Wall(1409, 546));
scene1.addObj(new Wall(1409, 520));
scene1.addObj(new Wall(1410, 496));
scene1.addObj(new Wall(1413, 470));
scene1.addObj(new Wall(1412, 438));
scene1.addObj(new Wall(1411, 409));
scene1.addObj(new Wall(1527, 238));
scene1.addObj(new Wall(1526, 275));
scene1.addObj(new Wall(1522, 255));
scene1.addObj(new Wall(1520, 292));
scene1.addObj(new Wall(1522, 303));
scene1.addObj(new Wall(1524, 316));
scene1.addObj(new Wall(1524, 349));
scene1.addObj(new Wall(1526, 372));
scene1.addObj(new Wall(1527, 397));
scene1.addObj(new Wall(1527, 416));
scene1.addObj(new Wall(1532, 442));
scene1.addObj(new Wall(1533, 467));
scene1.addObj(new Wall(1531, 490));
scene1.addObj(new Wall(1530, 515));
scene1.addObj(new Wall(1529, 539));
scene1.addObj(new Wall(1692, 120));
scene1.addObj(new Wall(1692, 120));
scene1.addObj(new Wall(1689, 146));
scene1.addObj(new Wall(1691, 166));
scene1.addObj(new Wall(1691, 190));
scene1.addObj(new Wall(1689, 201));
scene1.addObj(new Wall(1705, 211));
scene1.addObj(new Wall(1746, 208));
scene1.addObj(new Wall(1757, 207));
scene1.addObj(new Wall(1789, 208));
scene1.addObj(new Wall(1714, 207));
scene1.addObj(new Wall(1772, 205));
scene1.addObj(new Wall(1806, 205));
scene1.addObj(new Wall(1683, 636));
scene1.addObj(new Wall(1677, 609));
scene1.addObj(new Wall(1678, 585));
scene1.addObj(new Wall(1678, 569));
scene1.addObj(new Wall(1676, 557));
scene1.addObj(new Wall(1671, 531));
scene1.addObj(new Wall(1694, 531));
scene1.addObj(new Wall(1711, 528));
scene1.addObj(new Wall(1729, 524));
scene1.addObj(new Wall(1751, 525));
scene1.addObj(new Wall(1764, 525));
scene1.addObj(new Wall(1782, 518));
scene1.addObj(new Wall(1804, 517));
scene1.addObj(new Wall(758, 170));
scene1.addObj(new Wall(754, 196));
scene1.addObj(new Wall(755, 222));
scene1.addObj(new Wall(751, 249));
scene1.addObj(new Wall(749, 272));
scene1.addObj(new Wall(749, 297));
scene1.addObj(new Wall(747, 321));
scene1.addObj(new Wall(745, 357));
scene1.addObj(new Wall(743, 378));
scene1.addObj(new Wall(742, 415));
scene1.addObj(new Wall(743, 451));
scene1.addObj(new Wall(744, 471));
scene1.addObj(new Wall(744, 490));
scene1.addObj(new Wall(743, 521));
scene1.addObj(new Wall(743, 540));
scene1.addObj(new Wall(744, 567));
scene1.addObj(new Wall(742, 427));
scene1.addObj(new Wall(743, 392));
scene1.addObj(new Wall(747, 338));
scene1.addObj(new Wall(745, 590));
scene1.addObj(new Wall(745, 611));
scene1.addObj(new Wall(766, 602));
scene1.addObj(new Wall(794, 596));
scene1.addObj(new Wall(818, 593));
scene1.addObj(new Wall(834, 593));
scene1.addObj(new Wall(862, 593));
scene1.addObj(new Wall(871, 593));
scene1.addObj(new Wall(896, 591));
scene1.addObj(new Wall(908, 590));
scene1.addObj(new Wall(932, 588));
scene1.addObj(new Wall(935, 549));
scene1.addObj(new Wall(932, 560));
scene1.addObj(new Wall(941, 523));
scene1.addObj(new Wall(932, 510));
scene1.addObj(new Wall(931, 486));
scene1.addObj(new Wall(931, 448));
scene1.addObj(new Wall(929, 445));
scene1.addObj(new Wall(927, 467));
scene1.addObj(new Wall(921, 422));
scene1.addObj(new Wall(922, 400));
scene1.addObj(new Wall(918, 375));
scene1.addObj(new Wall(921, 351));
scene1.addObj(new Wall(917, 329));
scene1.addObj(new Wall(923, 298));
scene1.addObj(new Wall(918, 269));
scene1.addObj(new Wall(912, 237));
scene1.addObj(new Wall(913, 207));
scene1.addObj(new Wall(913, 182));
scene1.addObj(new Wall(912, 158));
scene1.addObj(new Wall(875, 146));
scene1.addObj(new Wall(888, 147));
scene1.addObj(new Wall(838, 151));
scene1.addObj(new Wall(857, 145));
scene1.addObj(new Wall(813, 150));
scene1.addObj(new Wall(792, 153));
scene1.addObj(new Wall(778, 155));
scene1.addObj(new Wall(760, 155));
scene1.addObj(new Wall(910, 141));
