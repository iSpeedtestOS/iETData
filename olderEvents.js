function olderEvents() {
    document.getElementById("fix").classList.add("player");
    addOldEvents(6);
    document.getElementById("oldEvents").classList.add("active");
    document.body.style.position = "fixed";
    refresher.destroy();
}

function closeOlderEvents() {
    document.getElementById("oldEvents").classList.remove("active");
    document.getElementById("fix").classList.remove("player");
    document.body.style.position = "initial";
    let allEvents = document.getElementById("allEvents").innerHTML = "";
    numberOfOldEvents = 0;
    refresher = PullToRefresh.init({
  mainElement: '#one', 
  onRefresh: function() {

setTimeout(function() {
    sitecontent.classList.add("invisible");
    oldEventsPage.classList.remove("active");
    footer.classList.remove("animated");
    setTimeout(function() {
        aetlogo.classList.remove("animated");
            setTimeout(function() {
                window.location.reload();
            }, 800);
    }, 200);
}, 100);

  }
});
}

//var oldEventss = [];

var oldEvents = [
		{
			"name": "It's Glowtime.",
			"month": "September",
			"year": 2024,
			"url": "https://events-delivery.apple.com/2907awdhsyhpvlytqgjqgskvlqzxnhph/m3u8/vod_index-wQcWZLpctCRAsNbtagWZNbgMeoyExYKV.m3u8"
		},
		{
			"name": "WWDC 2024",
			"month": "June",
			"year": 2024,
			"url": "https://events-delivery.apple.com/1505clvgxdwlbjrjhxtjdgcdxaiabvuf/m3u8/vod_index-LHDoZDhTrsKLsbrZKqYpbWraixsWQHkw.m3u8"
		},
		{
			"name": "Let loose.",
			"month": "May",
			"year": 2024,
			"url": "https://events-delivery.apple.com/2403kaqfcpzjjnpkkkkmbtyqacnyrknu/m3u8/vod_index-FWvkXNNmsRMrZDXBaxokUYtHsLjfLzXu.m3u8"
		},
		{
			"name": "Scary fast.",
			"month": "October",
			"year": 2023,
			"url": "https://events-delivery.apple.com/2409nbcxymeynatwojbbrjuhryomtudb/m3u8/vod_index-oXZvssLWyjfQDEQuVuCBHPWDywaNEipk.m3u8"
		},
		{
			"name": "Wonderlust.",
			"month": "September",
			"year": 2023,
			"url": "https://events-delivery.apple.com/1008yunfyueoofvvgxpjmmvcblgnjsel/m3u8/vod_index-CtXiJhDFfUsjjmudzvWNpveYoQAuZgpd.m3u8"
		},
		{
			"name": "WWDC 2023",
			"month": "June",
			"year": 2023,
			"url": "https://events-delivery.apple.com/0105cftwpxxsfrpdwklppzjhjocakrsk/m3u8/vod_index-PQsoJoECcKHTYzphNkXohHsQWACugmET.m3u8"
		},
		{
			"name": "MacBook Pro & Mac mini 2023",
			"month": "January",
			"year": 2023,
			"url": "https://www.apple.com/105/media/us/mac/2022/56a714a6-7476-4896-b369-0ee5fa649290/films/macbook-pro-14-and-16-mac-mini-product/mac-macbook-pro-14-and-16-mac-mini-product-tpl-us-2022_16x9.m3u8"
		},
		{
			"name": "Far out.",
			"month": "September",
			"year": 2022,
			"url": "https://events-delivery.apple.com/2807skttevpekgjkgcyolyxgkexyahqp/m3u8/vod_index-bHTtMFcgdqmJGoHoDBPadNWwGwrNevrj.m3u8"
		},
		{
			"name": "WWDC 2022",
			"month": "June",
			"year": 2022,
			"url": "https://events-delivery.apple.com/0205eyyhwbbqexozkwmgccegwnjyrktg/m3u8/vod_index-dpyfrsVksFWjneFiptbXnAMYBtGYbXeZ.m3u8"
		},
		{
			"name": "Peek performance.",
			"month": "March",
			"year": 2022,
			"url": "https://events-delivery.apple.com/1402uekefjejgldkvaqrqxgjmtehwhez/m3u8/vod_index-VEPhheWQmQZLrgakajRXoUbKAmmjVXxZ.m3u8"
		},
		{
			"name": "Unleashed.",
			"month": "October",
			"year": 2021,
			"url": "https://p-events-delivery.akamaized.net/1001azawzugclrwbvehhawhkerzwfetq/m3u8/vod_index-agCWsdckuFvVLyLxmYPmAmbvWchCtJQq.m3u8"
		},
		{
			"name": "California Streaming.",
			"month": "September",
			"year": 2021,
			"url": "https://p-events-delivery.akamaized.net/1608dybnfpdpxtjascmtuvqexvyggavm/m3u8/vod_index-sMoFLPWqoKYiqpMDonkKjMGsbqGnKWso.m3u8"
		},
		{
			"name": "WWDC 2021",
			"month": "June",
			"year": 2021,
			"url": "https://p-events-delivery.akamaized.net/1805asrvgvurxcrkewleraugwqathmvg/m3u8/vod_index-YVvsDudyWzBdgmtcMPabYTdjaWWmbLaA.m3u8"
		},
		{
			"name": "Spring Loaded.",
			"month": "April",
			"year": 2021,
			"url": "https://p-events-delivery.akamaized.net/2503gakrdvgbtjurznurjjqymkcddibq/m3u8/vod_index-K6CoBBbf8HHUAvAfk9LyGj2iaPiGyi9d.m3u8"
		},
		{
			"name": "One more thing.",
			"month": "November",
			"year": 2020,
			"url": "https://p-events-delivery.akamaized.net/2010ayctcrodak763xivpxn4htcuhco9/m3u8/vod_index-2MxnV7vcNFJoAHxqBcV9CU3w3JsXVVgh.m3u8"
		},
		{
			"name": "Hi, Speed.",
			"month": "October",
			"year": 2020,
			"url": "https://p-events-delivery.akamaized.net/2109isftrwvmiekgrjkbbhxhfbkxjkoj/m3u8/vod_index.m3u8"
		},
		{
			"name": "Time flies.",
			"month": "September",
			"year": 2020,
			"url": "https://p-events-delivery.akamaized.net/1108byjxmnoakagswdphbwatymztxxew/m3u8/vod_index.m3u8"
		},
		{
			"name": "WWDC 2020",
			"month": "June",
			"year": 2020,
			"url": "https://p-events-delivery.akamaized.net/2605bdtgclbnfypwzfkzdsupvcyzhhbx/m3u8/hls_vod_mvp.m3u8"
		},
		{
			"name": "By innovation only.",
			"month": "September",
			"year": 2019,
			"url": "https://p-events-delivery.akamaized.net/0208bkzcptukmgbpuqyfyqjhkxxtzwaw/m3u8/hls_vod_mvp.m3u8"
		},
		{
			"name": "WWDC 2019",
			"month": "June",
			"year": 2019,
			"url": "https://p-events-delivery.akamaized.net/3004qzusahnbjppuwydgjzsdyzsippar/m3u8/hls_vod_mvp.m3u8"
		},
		{
			"name": "It's show time.",
			"month": "March",
			"year": 2019,
			"url": "https://p-events-delivery.akamaized.net/1902irnvksjfherhvkajxmyvnwjdkvld/m3u8/hls_ac_vod_mvp.m3u8"
		},
		{
			"name": "There's more in the making.",
			"month": "October",
			"year": 2018,
			"url": "https://p-events-delivery.akamaized.net/1810hbasdviuhbadsvouhibnascvokjn/vod/18iuhbedfviuhb10b.mp4"
		},
		{
			"name": "Gather round.",
			"month": "September",
			"year": 2018,
			"url": "https://p-events-delivery.akamaized.net/189kljhbasdcvjhasbdscvoahsbdcvaoshdbvaosdhbvasodhjbv/vod/1809lohijboijnij.mp4"
		},
		{
			"name": "WWDC 2018",
			"month": "June",
			"year": 2018,
			"url": "https://p-events-delivery.akamaized.net/18oijbasfvuhbfsdvoijhbsdfvljkb6/vod/1806jbsdfvoijbsdfv.mp4"
		},
		{
			"name": "Let's take a field trip.",
			"month": "March",
			"year": 2018,
			"url": "https://p-events-delivery.akamaized.net/18oihuabsdfvoiuhbsdfv03/vod327/1803lohjbsdfvaspdijhbn.mp4"
		},
		{
			"name": "Let's meet at our place.",
			"month": "September",
			"year": 2017,
			"url": "https://p-events-delivery.akamaized.net/17oiubaewrvouhboiubasdfv09/vod3/1709jbiuygwdfiug.mp4"
		},
		{
			"name": "WWDC 2017",
			"month": "June",
			"year": 2017,
			"url": "https://p-events-delivery.akamaized.net/17qopibbefvoiuhbsefvbsefvopihb06/vod2/1706iobnouhbljhbsdfv.mp4"
		},
		{
			"name": "hello again",
			"month": "October",
			"year": 2016,
			"url": "https://p-events-delivery.akamaized.net/16oibfvohbfvoihbdfvoihbefv10/vod5/1610oibadvoihbdvohb.mp4"
		}
	];
	
	// <div id="oldEventFull">October 2016<br><video id="oldVideo" data-src="https://p-events-delivery.akamaized.net/16oibfvohbfvoihbdfvoihbefv10/vod5/1610oibadvoihbdvohb.mp4" controls="" playsinline="true"></video></div>
	
	
var numberOfOldEvents = 0;

function addOldEvents(amount) {
    let allEvents = document.getElementById("allEvents");
    var number = 0;
    
    if (numberOfOldEvents + amount > oldEvents.length) {
    	number = oldEvents.length - numberOfOldEvents;
    } else {
    	number = amount;
    }
    number += numberOfOldEvents;
    
    for (var i=numberOfOldEvents; i<number; i++) {
    	let element = document.createElement("div");
    	element.id = "oldEventFull";
    	let name = oldEvents[i].month + " " + oldEvents[i].year;
    	let url = oldEvents[i].url;
    	element.innerHTML = `${name}<br><video id="oldVideo" src="${url}" controls="" playsinline="true"></video>`;
    	allEvents.appendChild(element);
    }
    numberOfOldEvents = number;
    
    if (number < oldEvents.length) {
    	document.getElementById("moreOldEvents").style.display = "";
    } else {
    	document.getElementById("moreOldEvents").style.display = "none";
    }
}
