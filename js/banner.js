(function() {
    var oBanner = U.getClass('banner')[0]; // 获取最外层元素
    var aLi = oBanner.getElementsByTagName('li');
    var aSpan = oBanner.getElementsByTagName('span');
    var title = U.getClass(oBanner, 'msg_title')[0]; // 标题
    var message = U.getClass(oBanner, 'msg_message')[0]; // 描述

    var rightBtn = U.getClass(oBanner, 'rightBtn')[0];
    var leftBtn = U.getClass(oBanner, 'leftBtn')[0];

    var count = 0; // 计数
    var timer = null; // 时间对象

    // 一打开就执行定时器
    timer = setInterval(auto, 2000);
    // 滑上停止定时器
    oBanner.onmouseover = function() {
        clearInterval(timer);
    };
    // 滑离开启定时器
    oBanner.onmouseout = function() {
        timer = setInterval(auto, 2000);
    };

    // 上一张
    leftBtn.onclick = function() {
        count--;
        if (count < 0) {
            count = aLi.length - 1;
        }
        change();
    };

    // 下一张
    rightBtn.onclick = function() {
        auto();
    }

    // 滑上分页按钮
    for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].index = i;
        aSpan[i].onmouseover = function() {
            count = this.index;
            change();
        }
    }


    function auto() {
        count++;
        if (count >= aLi.length) {
            count = 0;
        }
        change();
    }

    function change() {
        for (var i = 0; i < aLi.length; i++) {
            if (count === i) {
                U.addClass(aSpan[i], 'active');
                aLi[i].style.zIndex = 10;
                U.move(aLi[i], {
                    opacity: 100
                });
            } else {
                U.removeClass(aSpan[i], 'active');
                aLi[i].style.zIndex = 0;
                U.move(aLi[i], {
                    opacity: 0
                });
            }
        }
        title.innerHTML = aLi[count].title;
        message.innerHTML = aLi[count].getAttribute('message');
    }

})();