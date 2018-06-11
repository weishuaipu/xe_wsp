
    var data1 = ['管理员项','客户信息','管理动作','业务考评','资产管理维护','分析图表','退出'];
    var data2 = [['权限分配','部门设置','员工管理','押品设置','操作纪录', "客户性质", "货款产品", "收款方式", "合作银行", "全部银行", "渠道"],
    ['费用发放', '相关人员', '客户照片','数据导入', '贷款明细','还款明细'],
    ['客户签约', '签约审核', '风控验收', '货款到款', '货款发放', '客户调查'],
    ['业绩情况','市场开放','市场维护','费用支出'],
    ['资产管理','设备设置','设备保修','保修审核','已审核问题'],
    ['月日均变化图','贷款笔数变化图'],
    ['通知','个人资料','退出']];
    var data3=['全部','房贷','车贷'];
    // array = [1,2,3];
    // array2 = [[11],[21],[31]];
    // array[0] = 1;
    // array[1][1] = 2;
    // [1,11,2,21,3,31]
    var datas = new Array();
    for(var i = 0;i<data1.length;i++){
        datas.push(data1[i]);
        // datas.push(data2[i]);
        var dd = data2[i];
        for(var j = 0; j < dd.length ;j++){
            
            datas.push(dd[j]);
        }
        // if(i == 0)break;
    }
    console.log(datas);


    function initTree(t) {
        var tree = document.getElementById(t);

        var lists = tree.getElementsByTagName('li');
        for (var i = 0; i < lists.length; i++) {
            var item = lists[i];//li
            (function (num) {
                var sub_ul = item.getElementsByTagName('ul');
                var a_el = item.getElementsByTagName('a');
                var b_el = item.getElementsByTagName('b');
                if (sub_ul.length != 0) {//1表
                    sub_ul[0].style.display = 'none';
                    a_el[0].onclick = function () {
                        if (sub_ul[0].style.display == 'block') {
                            sub_ul[0].style.display = 'none';
                            b_el[0].style.backgroundImage = 'url("./sources/images/arrow-right.png")';
                        } else {
                            sub_ul[0].style.display = 'block';
                            b_el[0].style.backgroundImage = 'url("./sources/images/arrow-down.png")';
                            
                        }
                    }
                } else {//2表
                    
                    a_el[0].onclick = function () {
                        var li_el = this.parentNode.parentNode.getElementsByTagName('li');
                        for (var i = 0; i < li_el.length; i++) {
                            var sub_a = li_el[i].getElementsByTagName('a');
                            // sub_a[0].classList.remove('item-selected');
                            sub_a[0].style.borderLeft = '4px solid #f8f6f7';
                            sub_a[0].style.color='#999';
                        }
                        // this.classList.add('item-selected');
                        this.style.borderLeft = '4px solid #f47f03';
                        this.style.color='#f47f03';
                        console.log(datas[num]);
                        // 内容在show里面显示
                        // document.getElementById('show').innerText = datas[num];
                       (function(num){
                        for(var j= 1;j<3;j++){
                            var wei=document.getElementById('show1');
                            wei.style.display='inline-block';  
                        }
                       })(i);
                          
                    }
                }

            })(i);
        }

    }

    function createLeftNavs(id){
        var ul_el = document.getElementById(id);
        if (data1.length != 0){
            for(var i = 0;i < data1.length;i++){
                var li = document.createElement('li');
                var b = document.createElement('b');
                var a = document.createElement('a');
                a.style.background='#f5f3f3 url(./sources/images/n'+i+'.png) no-repeat 10px center';
                a.style.backgroundSize='26px';
                a.innerText = data1[i];
                a.setAttribute('href','javascript:void(0);');
                li.appendChild(b);
                li.appendChild(a);
                var sub_ul = document.createElement('ul');
                sub_ul.classList.add('sub-item');
                for(var j = 0;j<data2[i].length;j++){
                    var s_li = document.createElement('li');
                    var s_a = document.createElement('a');
                    s_a.style.background='#f8f6f7 url(./sources/images/n'+i+j+'.png) no-repeat 10% center';
                    s_a.style.backgroundSize='26px';
                    s_a.innerText = data2[i][j];
                    s_li.appendChild(s_a);
                    sub_ul.appendChild(s_li);
                }
                li.appendChild(sub_ul);
                ul_el.appendChild(li);
            }
        }

    }
    function c1wsp(){
        var ul_c1 = document.createElement('ul');
        // console.log(ul_c1);
        for(var i =0;i<3;i++){
            var li_c1 = document.createElement('li');
            li_c1.innerText = data3[i];
            // console.log(li_c1);
            ul_c1.appendChild(li_c1);
        }
    //    console.log(document.getElementById('c1_show_top'));
        document.getElementById('c1_show_top').appendChild(ul_c1);
    }
    function input1(){
        var put1 = document.createElement('input');
        
    }
    window.onload = function () {
        createLeftNavs('main_navs');
        initTree('main_navs');
        c1wsp();
    }

