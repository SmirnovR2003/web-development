window.onload = function() {
    const canvas1 = document.getElementById("myCanvas1");
    const canvas2 = document.getElementById("myCanvas2");

    const context1 = canvas1.getContext("2d");
    const context2 = canvas2.getContext("2d");

    DrawKenny(context1);
    DrawSten(context2);
};

function DrawSten(context) {
// туловище
// штаны
	context.beginPath();
	context.fillStyle = 'rgb(99, 118, 158)';
	context.rect(28, 222, 106, 19);
	context.fill();

// куртка
	context.beginPath();
	context.fillStyle = 'rgb(144, 100, 85)';
	context.moveTo(31, 145);
	context.bezierCurveTo(31, 145, 15, 167, 12, 176);
	context.bezierCurveTo(9, 184, 5, 205, 13, 212);
	context.bezierCurveTo(20, 219, 26, 229, 80, 229);
	context.bezierCurveTo(134, 229, 145, 218, 150, 206);
	context.bezierCurveTo(156, 195, 126, 145, 126, 145);
	context.closePath();
	context.fill();

// молния
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(80, 182);
	context.lineTo(79, 229);
	context.lineTo(81, 229);
	context.lineTo(82, 182);
	context.closePath();
	context.fill();

// пуговица1
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(74, 187, 2, 0, 2 * Math.PI, 1);
	context.fill();

// пуговица2
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(74, 204, 2, 0, 2 * Math.PI, 1);
	context.fill();

// пуговица3
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(73, 219, 2, 0, 2 * Math.PI, 1);
	context.fill();

// ботинки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.rect(16, 238, 130, 7);
	context.fill();
	context.save();

// левый воротник
	context.beginPath();
	context.transform(0.9, 0.4, -0.4, 0.9, 0, 0);
	context.fillStyle = 'rgb(177, 29, 64)';
	context.moveTo(117, 127);
	context.bezierCurveTo(133, 127, 145, 130, 145, 134);
	context.bezierCurveTo(145, 137, 133, 140, 117, 140);
	context.bezierCurveTo(102, 140, 89, 137, 89, 134);
	context.bezierCurveTo(89, 130, 102, 127, 117, 127);
	context.fill();
	context.restore();
	context.save();

// правый воротник
	context.beginPath();
	context.transform(0.9, -0.4, 0.4, 0.9, 0, 0);
	context.fillStyle = 'rgb(177, 29, 64)';
	context.moveTo(26, 192);
	context.bezierCurveTo(41, 192, 54, 195, 54, 198);
	context.bezierCurveTo(54, 202, 41, 205, 26, 205);
	context.bezierCurveTo(10, 205, -1, 202, -1, 198);
	context.bezierCurveTo(-1, 195, 10, 192, 26, 192);
	context.fill();
	context.restore();

// левый кулак
	context.beginPath();
	context.fillStyle = 'rgb(177, 29, 64)';
	context.arc(18, 209, 11, 0, 2 * Math.PI, 1);
	context.fill();

// правый кулак
	context.beginPath();
	context.fillStyle = 'rgb(177, 29, 64)';
	context.arc(141, 209, 11, 0, 2 * Math.PI, 1);
	context.fill();

// складка левой руки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(30, 184);
	context.lineTo(25, 202);
	context.lineTo(28, 203);
	context.closePath();
	context.fill();

//  складка правой руки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(125, 185);
	context.lineTo(130, 207);
	context.lineTo(132, 205);
	context.closePath();
	context.fill();

// левый палец
	context.beginPath();
	context.fillStyle = 'rgb(158, 26, 57)';
	context.arc(27, 206, 4, 0, 2 * Math.PI, 1);
	context.fill();

// правый палец
	context.beginPath();
	context.fillStyle = 'rgb(158, 26, 57)';
	context.arc(133, 208, 3, 0, 2 * Math.PI, 1);
	context.fill();

// голова
// лицо
	context.beginPath();
	context.fillStyle = 'rgb(232, 212, 184)';
	context.arc(79, 96, 78, 0, 2 * Math.PI, 1);
	context.fill();

// шапка
	context.beginPath();
	context.fillStyle = 'rgb(97, 114, 154)';
	context.moveTo(3, 80);
	context.bezierCurveTo(6, 61, 16, 44, 30, 33);
	context.bezierCurveTo(44, 21, 63, 14, 81, 15);
	context.bezierCurveTo(99, 15, 117, 22, 130, 34);
	context.bezierCurveTo(144, 45, 153, 62, 156, 80);
	context.fill();

// кайомка шапки
	context.beginPath();
	context.fillStyle = 'rgb(189, 31, 74)';
	context.moveTo(1, 90);
	context.lineTo(0, 76);
	context.bezierCurveTo(0, 76, 32, 64, 81, 64);
	context.bezierCurveTo(129, 64, 158, 75, 158, 75);
	context.lineTo(158, 90);
	context.bezierCurveTo(158, 90, 138, 80, 81, 80);
	context.bezierCurveTo(23, 80, 1, 90, 1, 90);
	context.closePath();
	context.fill();

// помпон
	context.beginPath();
	context.fillStyle = 'rgb(189, 31, 74)';
	context.arc(75, 15, 14, 0, 2 * Math.PI, 1);
	context.fill();
	context.save();

// левый глаз
	context.beginPath();
	context.transform(0.81, 0.58, -0.58, 0.81, 0, 0);
	context.fillStyle = 'rgb(255, 255, 255)';
	context.moveTo(110, 25);
	context.bezierCurveTo(122, 25, 131, 36, 131, 49);
	context.bezierCurveTo(131, 62, 122, 73, 110, 73);
	context.bezierCurveTo(99, 73, 90, 62, 90, 49);
	context.bezierCurveTo(90, 36, 99, 25, 110, 25);
	context.fill();	
	context.restore();
	context.save();

// правый глаз
	context.beginPath();
	context.transform(0.75, -0.66, 0.66, 0.75, 0, 0);
	context.fillStyle = 'rgb(255, 255, 255)';
	context.moveTo(8, 122);
	context.bezierCurveTo(19, 122, 29, 133, 29, 146);
	context.bezierCurveTo(29, 159, 19, 169, 8, 169);
	context.bezierCurveTo(-2, 169, -12, 159, -12, 146);
	context.bezierCurveTo(-12, 133, -2, 122, 8, 122);
	context.fill();	
	context.restore();

// линия межглаз
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(82, 94);
	context.bezierCurveTo(82, 94, 81, 99, 81, 101);
	context.bezierCurveTo(81, 104, 82, 108, 82, 108);
	context.lineTo(82, 108);
	context.bezierCurveTo(82, 108, 82, 104, 82, 101);
	context.bezierCurveTo(81, 99, 82, 95, 82, 95);
	context.closePath();
	context.fill();

// левый зрачок
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(69, 103, 2, 0, 2 * Math.PI, 1);
	context.fill();

// правый зрачок
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(94, 103, 2, 0, 2 * Math.PI, 1);
	context.fill();

// рот
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(68, 151);
	context.bezierCurveTo(68, 151, 76, 154, 82, 153);
	context.bezierCurveTo(88, 153, 95, 150, 95, 150);
	context.lineTo(94, 149);
	context.bezierCurveTo(94, 149, 89, 152, 83, 152);
	context.bezierCurveTo(76, 152, 68, 149, 68, 149);
	context.closePath();
	context.fill();
}

function DrawKenny(context) {

// туловище
// ноги
	context.beginPath();
	context.fillStyle = 'rgb(209, 100, 39)';
	context.rect(44, 208, 100, 24);
	context.fill();
	
// куртка
    context.beginPath();
	context.fillStyle = 'rgb(190, 93, 37)';
	context.moveTo(37, 143);
	context.lineTo(19, 197);
	context.bezierCurveTo(19, 197, 30, 219, 95, 218);
	context.bezierCurveTo(166, 217, 172, 196, 172, 196);
	context.lineTo(149, 143);
	context.closePath();
	context.fill();
	
// молния
	context.beginPath();
	context.fillStyle = 'black';
	context.rect(95, 173, 2, 44);
	context.fill();
	
// ботинки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.rect(38, 228, 111, 5);
	context.fill();
	
// голова
	context.beginPath();
	context.fillStyle = 'rgb(209, 100, 39)';
	context.arc(92, 89, 85, 0, 2 * Math.PI, 1);
	context.fill();
	
// левый кулак
	context.beginPath();
	context.fillStyle = 'rgb(101, 66, 37)';
	context.arc(27, 200, 12, 0, 2 * Math.PI, 1);
	context.fill();
	
// правый кулак
	context.beginPath();
	context.fillStyle = 'rgb(101, 66, 37)';
	context.arc(162, 201, 12, 0, 2 * Math.PI, 1);
	context.fill();

// складка левой руки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(44, 180);
	context.lineTo(38, 197);
	context.lineTo(40, 198);
	context.bezierCurveTo(40, 198, 44, 186, 44, 180);
	context.closePath();
	context.fill();
	
// складка правой руки
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.moveTo(147, 181);
	context.lineTo(153, 200);
	context.lineTo(151, 200);
	context.bezierCurveTo(151, 200, 145, 190, 146, 181);
	context.closePath();
	context.fill();
	
// левый палец
	context.beginPath();
	context.fillStyle = 'rgb(76, 48, 24)';
	context.arc(36, 197, 4, 0, 2 * Math.PI, 1);
	context.fill();
	
// правый палец
	context.beginPath();
	context.fillStyle = 'rgb(76, 48, 24)';
	context.arc(155, 198, 4, 0, 2 * Math.PI, 1);
	context.fill();
	
// лицо
	context.beginPath();
	context.fillStyle = 'rgb(232, 212, 175)';
	context.lineWidth = 0.342427;
	context.moveTo(91, 42);
	context.bezierCurveTo(114, 42, 133, 63, 133, 89);
	context.bezierCurveTo(133, 115, 114, 136, 91, 136);
	context.bezierCurveTo(68, 136, 49, 115, 49, 89);
	context.bezierCurveTo(49, 63, 68, 42, 91, 42);
	context.fill();
	
// обводка капюшон
	context.beginPath();
	context.strokeStyle = 'rgb(0, 0, 0)';
	context.lineWidth = 1;
	context.moveTo(92, 43);
	context.bezierCurveTo(125, 43, 152, 66, 152, 95);
	context.bezierCurveTo(152, 125, 125, 148, 92, 148);
	context.bezierCurveTo(59, 148, 32, 125, 32, 95);
	context.bezierCurveTo(32, 66, 59, 43, 92, 43);
	context.stroke();
	context.save();
	context.transform(1.22, 0.42, -0.36, 1.05, 173.94, -129.41);
	context.save();
	
// левый глаз
	context.beginPath();
	context.transform(0.92, -0.37, 0.12, 1, 0, 0);
	context.fillStyle = 'rgb(241, 242, 241)';
	context.moveTo(-50.154449, 177.167442);
	context.bezierCurveTo(-41, 177, -33, 187, -33, 200);
	context.bezierCurveTo(-33, 212, -40, 223, -50, 223);
	context.bezierCurveTo(-59, 223, -66, 212, -66, 200);
	context.bezierCurveTo(-66, 187, -59, 177, -50, 177);
	context.fill();	
	context.restore();
	context.save();

//правый глаз
	context.beginPath();
	context.transform(-0.95, 0.37, 0.44, 0.9, 0, 0);
	context.fillStyle = 'rgb(241, 242, 241)';
	context.moveTo(80, 172);
	context.bezierCurveTo(89, 172, 96, 182, 96, 194);
	context.bezierCurveTo(96, 206, 89, 216, 80, 216);
	context.bezierCurveTo(71, 216, 63, 206, 63, 194);
	context.bezierCurveTo(63, 182, 71, 172, 80, 172);
	context.fill();	
	context.restore(); 
	context.restore();
	
// левый капюшон
	context.beginPath();
	context.fillStyle = 'rgb(98, 62, 31)';
	context.lineWidth = 1;
	context.moveTo(92, 42);
	context.bezierCurveTo(91, 42, 48, 44, 41, 75);
	context.bezierCurveTo(34, 107, 47, 121, 49, 123);
	context.bezierCurveTo(70, 139, 93, 136, 93, 136);
	context.bezierCurveTo(93, 136, 55, 119, 55, 90);
	context.bezierCurveTo(55, 62, 91, 42, 91, 42);
	context.closePath();
	context.fill();
	
// правый капюшон
	context.beginPath();
	context.fillStyle = 'rgb(98, 62, 31)';
	context.lineWidth = 1;
	context.moveTo(91, 42);
	context.bezierCurveTo(91, 42, 135, 44, 142, 75);
	context.bezierCurveTo(149, 107, 136, 121, 133, 123);
	context.bezierCurveTo(113, 139, 90, 136, 90, 136);
	context.bezierCurveTo(90, 136, 127, 119, 127, 90);
	context.bezierCurveTo(127, 62, 91, 42, 91, 42);
	context.closePath();
	context.fill();
	context.save();
	
// линия межглаз
	context.beginPath();
	context.transform(-0.95, -0.29, -0.28, 0.96, 0, 0);
	context.strokeStyle = 'rgb(0, 0, 0)';
	context.lineWidth = 1;
	context.moveTo(-110, 48);
	context.bezierCurveTo(-109, 52, -111, 56, -113, 59);
	context.stroke();
	context.restore();
	
// левый зрачок
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(78, 86, 2.5, 0, 2 * Math.PI, 1);
	context.fill();
	
// правый зрачок
	context.beginPath();
	context.fillStyle = 'rgb(0, 0, 0)';
	context.arc(100, 86, 2.5, 0, 2 * Math.PI, 1);
	context.fill();
	context.save();
	
// правый шнурок
	context.beginPath();
	context.transform(0.95, -0.3, 0.3, 0.95, 0, 0);
	context.fillStyle = 'rgb(0, 0, 0)';
	context.lineWidth = 1;
	context.rect(46, 157, 1, 30);
	context.fill();
	context.restore();
	context.save();
	
// левый шнурок
	context.beginPath();
	context.transform(0.97, 0.23, -0.22, 0.97, 0, 0);
	context.fillStyle = 'rgb(0, 0, 0)';
	context.lineWidth = 0.5;
	context.rect(119, 111, 1, 21);
	context.fill();	
	context.restore();   
}