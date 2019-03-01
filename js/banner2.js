(function() {
    var data = [{
        src: 'img/pic_1.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_2.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_3.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_4.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_5.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_6.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_7.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_8.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_9.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_10.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_11.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_12.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_13.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_14.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_15.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_16.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_17.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_18.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_19.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }, {
        src: 'img/pic_20.jpg',
        href: 'https://www.iqiyi.com/v_19rrc9o0vw.html'
    }];


    var privateC_pic = U.getClass('privateC_pic')[0];
    var privateC_arrL = U.getClass('privateC_arrL')[0];
    var privateC_arrR = U.getClass('privateC_arrR')[0];
    var imgBg = U.getId('imgBg');

    var imgArr = []; // 存储创建的20个图片
    var imgPos = []; // 存储前面五张图的样式

    // [{
    //     width: 330,
    //     height: 180,
    //     left: 0,
    //     top: 40,
    //     z: 10
    // }]

    // 创建图片
    for (var i = 0; i < data.length; i++) {
        var img = U.create('img');
        img.src = data[i].src;
        // 两个自定义属性
        img.setAttribute('index', (i + 1)); // 点击时确定是第几个图
        img.setAttribute('datahref', data[i].href); // 点击时打开播放
        U.append(privateC_pic, img);
        imgArr.push(img);
    }

    imgBg.src = data[2].src; // 给背景图指定src

    for (var i = 0; i < 5; i++) {
        imgPos.push({
            width: parseInt(U.getStyle(imgArr[i], 'width')),
            height: parseInt(U.getStyle(imgArr[i], 'height')),
            left: parseInt(U.getStyle(imgArr[i], 'left')),
            top: parseInt(U.getStyle(imgArr[i], 'top')),
            z: parseInt(U.getStyle(imgArr[i], 'z-index')),
        })
    }

    // 下一张
    privateC_arrL.onclick = function() {
        imgArr.unshift(imgArr.pop());
        change();
    }

    // 下一张
    privateC_arrR.onclick = function() {
        imgArr.push(imgArr.shift());
        change();
    }

    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].onclick = function() {
            var n = this.getAttribute('index');
            // console.log(n)
            switch (n) {
                case '1':
                    imgArr.unshift(imgArr.pop());
                    imgArr.unshift(imgArr.pop());
                    change();
                    break;

                case '2':
                    imgArr.unshift(imgArr.pop());
                    change();
                    break;

                case '3':
                    open(this.getAttribute('datahref'));
                    break;

                case '4':
                    imgArr.push(imgArr.shift());
                    change();
                    break;

                case '5':
                    imgArr.push(imgArr.shift());
                    imgArr.push(imgArr.shift());
                    change();
                    break;
            }
        }
    }

    function change() {
        imgBg.src = imgArr[2].src;
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].setAttribute('index', (i + 1)); // 重置一下index
            if (i < 5) {
                // 前面5张调整样式
                imgArr[i].style.zIndex = imgPos[i].z;
                U.move(imgArr[i], {
                    width: imgPos[i].width,
                    height: imgPos[i].height,
                    left: imgPos[i].left,
                    top: imgPos[i].top
                })
            } else {
                // 6--20的样式
                imgArr[i].style.zIndex = 1;
                U.move(imgArr[i], {
                    width: 330,
                    height: 186,
                    left: 345,
                    top: 42
                });
            }
        }
    }

})();