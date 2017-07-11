/**
* Created by admin on 2017/7/10 0010.
*/
<script type="text/javascript">
    /*
     * 链接--例子
     *	:href="bindLink('TaskWrite', [item.taskReportedId, item.taskCataId],[{index: item.taskReportedId,id: item.taskCataId}])"
     *	返回：href = '/TaskWrite/1711818/1/?index=1711818&id:1'
     */
    function bindLink(path,params,query){
        let pathHead = '/'+ path + '/';

        //判断params参数是否为空
        if(params != undefined && params.length != 0){
            for(let i=0;i<params.length;i++){
                if(params[i] == null && params[i] == undefined ){
                    if(i < params.length){
                        continue;
                    }else{
                        return pathHead;
                    }
                }
                else{
                    pathHead = pathHead + params[i] + '/';

                    if(i+1 == params.length && query == undefined){
                        return pathHead;
                    } else if(i+1 >= params.length && query.length != 0){
                        let queryStr = JSON.stringify(query[0]).replace(/{/, '?').replace(/,/, '&').replace(/:/g, '=').replace(/"/g, '').replace(/}/, '');
                        return pathHead + queryStr;
                    }
                }
            }
        }else{
            return pathHead;
        }

    }

    /*
     * 计算剩余时间
     */
    function timeRemaining(end) {
        //计算时间
        let currTime = new Date().getTime(),//当前时间
                endTime = new Date(end).getTime();//结束时间
        if(end != null && endTime >= currTime){
            let remaining = endTime - currTime,
                    h = Math.floor(remaining/(3600*1000)),//时
                    min = Math.floor((remaining%(3600*1000))/(60*1000));//分
            return h + '时' + min + '分'
        }else{
            return "已过期"
        }

    }

    /*
     * 截取时间 10位
     */
    function issueTimeSub(time) {
        return time.substring(0, 10);
    }

    /*
     * 时间格式转换和截取
     */
    function timeChange(date){
        var d = new Date(date);
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();//2022-02-02
        //return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();//2022-02-02 09:00:00
    }
    export default{
        bindLink,
        timeRemaining,
        issueTimeSub,
        timeChange
    }
</script>