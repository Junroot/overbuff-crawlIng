(function(){
    document.evaluate("/html/body/div[1]/div[3]/div/div[2]/div/div[1]/div/div[1]/div[1]",document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
    setTimeout(function() {document.evaluate("/html/body/div[1]/div[3]/div/div[2]/div/div[1]/div/div[5]/div[8]",document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();}, 500);
    setTimeout(function() {
        var table = document.getElementsByTagName('tbody');
        var heroes = table[0].getElementsByTagName('tr');
        var harray = new Array();
        var offnum = 0;
        var tnknum = 0;
        var sptnum = 0;
        var pickm = [-1, -1, -1];

        for(var i = 0; i < heroes.length;i++)
        {
            var name = heroes[i].getElementsByTagName('a')[0].pathname;
            name = name.replace('/heroes/','');
            var position = heroes[i].getElementsByTagName('span')[0].getElementsByTagName('small')[0].innerText;
            if (position == 'DEFENSE')  position = 'OFFENSE';
            if (name == 'symmetra') position = 'OFFENSE';
            var pickrate = Number(heroes[i].getElementsByTagName('span')[1].innerText.replace('%',''));
            var winrate = Number(heroes[i].getElementsByTagName('span')[2].innerText.replace('%',''));
            
            if (position == 'OFFENSE' && pickm[0] < pickrate) pickm[0] = pickrate;
            else if (position == 'TANK' && pickm[1] < pickrate) pickm[1] = pickrate;
            else if (position == 'SUPPORT' && pickm[2] < pickrate) pickm[2] = pickrate; 

            var hobject = new Object();
            hobject.name = name;
            hobject.position = position;
            hobject.pickrate = pickrate;
            hobject.winrate = winrate;
            harray.push(hobject);

            if (position == 'OFFENSE') offnum++;
            else if (position == 'TANK') tnknum++;
            else if (position == 'SUPPORT') sptnum++;
        }

        var pickmax = -1;
        var pickmin = 999999;
        var winmax = -1;
        var winmin = 101;

        setTimeout(function() {
            document.evaluate("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div/div[3]",document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            var damagetable = document.getElementsByTagName('tbody');
            var kill = damagetable[0].getElementsByTagName('tr');

            for (var i = 0; i < heroes.length;i++)
            {
                harray[i].kill = kill[i].getElementsByTagName('td')[3].innerText;
                harray[i].solo = kill[i].getElementsByTagName('td')[4].innerText.replace('%','');
            }

            console.log(offnum + " "+ tnknum + " "+sptnum);

            for (h in harray)
            {
                //if(harray[h].position == 'OFFENSE') harray[h].pickrate *= offnum;
                //else if (harray[h].position == 'TANK')    harray[h].pickrate *= tnknum;
                //else if (harray[h].position == 'SUPPORT') harray[h].pickrate *= sptnum;
                
                if(pickmax < harray[h].pickrate)    pickmax = harray[h].pickrate;
                if(pickmin > harray[h].pickrate)    pickmin = harray[h].pickrate;
                if(winmax < harray[h].winrate)  winmax = harray[h].winrate;
                if(winmin > harray[h].winrate)  winmin = harray[h].winrate;
                //console.log(harray[h].name +"("+ harray[h].position +"): "+ harray[h].pickrate);
            }

            function compare2(a, b){
                return b.pickrate - a.pickrate;
            }

            harray.sort(compare2);

            var result = new Array();

            for (h in harray)
            {
                // harray[h].pickrate = (harray[h].pickrate - pickmin) * 100 / (pickmax - pickmin);
                // harray[h].winrate = (harray[h].winrate - winmin) * 100 / (winmax - winmin);
                if (harray[h].position == 'OFFENSE' && harray[h].pickrate < pickm[0] / 3)    continue;
                else if (harray[h].position == 'TANK' && harray[h].pickrate < pickm[1] / 3) continue;
                else if (harray[h].position == 'SUPPORT' && harray[h].pickrate < pickm[2] / 3)  continue;

                var obj = new Object();
                obj.name = harray[h].name;
                obj.position = harray[h].position;
                // obj.winrate = harray[h].winrate;
                obj.pickrate = harray[h].pickrate;
                obj.score = harray[h].winrate;
                obj.carry = harray[h].kill * harray[h].solo;
                result.push(obj);
                //harray[h].score = harray[h].pickrate * harray[h].winrate * harray[h].winrate / 100;
                //console.log(harray[h].name +"("+ harray[h].position +"): "+ harray[h].pickrate + " "+harray[h].winrate + " " + harray[h].score);
                //console.log(harray[h].name +"("+ harray[h].position +"): "+ harray[h].score);
            }

            function compare(a, b){
                return b.score - a.score;
            }

            result.sort(compare);

            for (r in result)
            {
                console.log(result[r].name + "(" + result[r].position + "): " + result[r].score + " " + result[r].pickrate + " " + result[r].carry);
            }
            // for (h in harray)
            // {
            //     console.log(harray[h].name +"("+ harray[h].position +"): "+ harray[h].score);
            // }
        }, 500);
    },1000);
}());