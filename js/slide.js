(function() {
    var data = [{
        src: 'img/img_1.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_2.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_3.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_4.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_5.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_6.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_7.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_8.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_9.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_10.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_11.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_12.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_13.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_14.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_15.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_16.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_17.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_18.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_19.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_20.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }, {
        src: 'img/img_20.jpg',
        title: '悲伤逆流成河',
        message: '郭敬明揭校园暴力'
    }];

    var createDivArr = []; // 存储创建出来的li
    var qyModList = U.getClass('qy-mod-list');

    for (var i = 0; i < qyModList.length; i++) {
        // 函数传参
        slide(qyModList[i]);
    };


    function slide(obj) {
        var liArr = []; // 存储所有的创建出来的li

        // 创建左右按钮
        var leftBtn = U.create('i');
        leftBtn.className = 'iconfont icon-fanhui btnLeft pa undis';
        U.append(obj, leftBtn);
        var rightBtn = U.create('i');
        rightBtn.className = 'iconfont icon-gengduo btnRight pa';
        U.append(obj, rightBtn);

        // 创建ul
        var oUl = U.create('ul');
        oUl.className = 'qy-mod-ul pa';
        for (var i = 0; i < data.length; i++) {
            var li = U.create('li');
            // 模板字符串
            li.innerHTML = `<img src="${data[i].src}">
            <div class="title-wrap">
                <h3 class="link-txt">${data[i].title}</h3>
                <p class="sub">${data[i].message}</p>
            </div>`;
            U.append(oUl, li);
            liArr.push(li);
        }
        U.append(obj, oUl);


        // 样式调整
        var len = data.length; // 图片的总个数
        var picWidth = 215; // 一个图的宽
        var clientWidth = document.documentElement.clientWidth; // 可视区的宽
        var pageMax = Math.floor(clientWidth / picWidth); // 一页放的图片的个数
        obj.style.width = pageMax * picWidth - 5 + 'px';
        obj.previousElementSibling.style.width = pageMax * picWidth - 5 + 'px';
        var pageLen = Math.ceil(len / pageMax); // 总共有几屏
        var count = 0; // 计数

        // 上一屏
        leftBtn.onclick = function() {
            count--;
            change();
        }

        // 下一屏
        rightBtn.onclick = function() {
            count++;
            change();
        }

        function change() {
            if (count !== 0) {
                U.removeClass(leftBtn, 'undis');
            } else {
                U.addClass(leftBtn, 'undis');
            }

            if (count >= pageLen - 1) {
                // 到了最后一屏
                // console.log('到了最后一屏') // 先把最后这一屏的图留下，其它的滚过去
                U.addClass(rightBtn, 'undis');
                U.move(oUl, {
                    left: -(len - pageMax) * picWidth
                })
            } else {
                // 正常滚动
                // console.log('正常')
                U.removeClass(rightBtn, 'undis');
                U.move(oUl, {
                    left: -pageMax * picWidth * count
                })
            }
        }


        // -----------------------------------------
        // 滑上变大
        // console.log(liArr);
        // onmouseenter
        // onmouseleave

        for (var i = 0; i < liArr.length; i++) {
            liArr[i].onmouseenter = function() {
                // 清除数组中的元素
                while (createDivArr.length) {
                    U.remove(createDivArr.pop());
                }

                var _this = this;
                this.timer = setTimeout(function() {
                    var pos = U.getPos(_this); // 取得当前元素的座标
                    var left = pos.left;
                    var top = pos.top;

                    // 创建div元素
                    var oDiv = U.create('div');
                    oDiv.className = 'createDiv';
                    oDiv.style.left = left + 'px';
                    oDiv.style.top = top + 'px';
                    // 找到滑上这个元素下面的图片，把它克隆一份
                    var oImg = _this.getElementsByTagName('img')[0].cloneNode();
                    U.append(oDiv, oImg);
                    U.append(document.body, oDiv);
                    createDivArr.push(oDiv); // 把创建出来的div添加到一个数组中

                    // 变大
                    U.move(oDiv, {
                        width: 250,
                        height: 361,
                        left: left - 20,
                        top: top - 20
                    });

                    oDiv.onmouseleave = function() {

                        // 删除这个创建出来的元素的时候，同时也得把数组中对应的值清除
                        var i = createDivArr.indexOf(this);
                        if (i !== -1) {
                            createDivArr.splice(i, 1);
                            U.remove(this);
                        }
                    }
                }, 200);
            }

            liArr[i].onmouseleave = function() {
                clearTimeout(this.timer);
            }
        }

    }

})();