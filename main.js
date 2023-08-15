/* -------------------Chuyển icon play / pause-----------------*/
const btnPlayPause = document.querySelector(".div_play_pause");

/*---------------------get element------------*/
var img = document.querySelector(".div_img-song");
const nameSongCurrent = document.querySelector('.name_song');
const desSongCurrent = document.querySelector('.describe_song');
const audio = document.querySelector(".audio");
const testtitle = document.querySelector(".title")
const time1 = document.querySelector(".timer_1")
const time2 = document.querySelector(".timer_2")


/*--------------------------------------------*/

const App = {
    /*---------------Values------------*/
    songs: [
        {
            "name" : "Chầu Văn Ông Hoàng Bảy",
            "Singer": "Nghệ sỹ Khắc Tư",
            "srcImg": "../img_song/onghoangbay.jpeg",
            "link": "./audio/onghoangbay.mp3"
        },
        {
            "name" : "Ông hoàng mười",
            "Singer": "Nghệ sỹ Khắc Tư",
            "srcImg": "../img_song/onghoangmuoi.jpeg",
            "link": "./audio/onghoangmuoi.mp3"
        },
        {
            "name" : "Đệ nhị",
            "Singer": "Nghệ sỹ Khắc Tư",
            "srcImg": "../img_song/denhi.jpeg",
            "link": "./audio/denhi.mp3"
        },
        {
            "name" : "Giá Cô Đôi Thượng Ngàn",
            "Singer": "Ngọc Ký & Minh Đức",
            "srcImg": "../img_song/codoithuongngan.jpeg",
            "link": "./audio/codoithuongngan.mp3"
        },
        {
            "name" : "Best lover",
            "Singer": "BiBi",
            "srcImg": "../img_song/bestlove.jpeg",
            "link": "./audio/bestlove.mp3"
        },
        {
            "name" : "Die For You",
            "Singer": "The Weeked",
            "srcImg": "../img_song/dieforyou.jpeg",
            "link": "./audio/dieforyou.mp3"
        },
        {
            "name" : "Do You Love Me",
            "Singer": "Taeyeon",
            "srcImg": "../img_song/doyouloveme.jpeg",
            "link": "./audio/doyouloveme.mp3"
        },
        {
            "name" : "INVU",
            "Singer": "Taeyeon",
            "srcImg": "../img_song/invu.jpeg",
            "link": "./audio/invu.mp3"
        },
        {
            "name" : "Kingdom Come",
            "Singer": "TaeyeoRed Velvet",
            "srcImg": "../img_song/kingdomcome.jpeg",
            "link": "./audio/kingdomcome.mp3"
        },
        {
            "name" : "Limbo",
            "Singer": "Keshi",
            "srcImg": "../img_song/limbo.jpeg",
            "link": "./audio/limbo.mp3"
        },
        {
            "name" : "Lowkey",
            "Singer": "Niki",
            "srcImg": "../img_song/lowkey.jpeg",
            "link": "./audio/lowkey.mp3"
        },
        {
            "name" : "Million Dollar Man",
            "Singer": "Lanna Del Key",
            "srcImg": "../img_song/miliondollarman.jpeg",
            "link": "./audio/miliondollarman.mp3"
        },
        {
            "name" : "Moonlight",
            "Singer": "Ariana Grande",
            "srcImg": "../img_song/moonlight.jpeg",
            "link": "./audio/moonlight.mp3"
        },
        {
            "name" : "Mùa hè của em",
            "Singer": "Vũ",
            "srcImg": "../img_song/muhecuaem.jpeg",
            "link": "./audio/muhecuaem.mp3"
        },
        {
            "name" : "Bước qua nhau",
            "Singer": "Vũ",
            "srcImg": "../img_song/buocquanhau.jpeg",
            "link": "./audio/buocquanhau.mp3"
        },
        {
            "name" : "Lạ lùng",
            "Singer": "Vũ",
            "srcImg": "../img_song/lalung.jpeg",
            "link": "./audio/lalung.mp3"
        },
        {
            "name" : "Needy",
            "Singer": "Ariana Grande",
            "srcImg": "../img_song/needy.jpeg",
            "link": "./audio/needy.mp3"
        },
        {
            "name" : "Once upon a dream",
            "Singer": " Lanal Del Rey",
            "srcImg": "../img_song/onceuponadream.jpeg",
            "link": "./audio/onceuponadream.mp3"
        },
        {
            "name" : "Out of time",
            "Singer": " The Weeknd",
            "srcImg": "../img_song/outoftime.jpeg",
            "link": "./audio/outoftime.mp3"
        },
        {
            "name" : "Siren",
            "Singer": " Taeyeon",
            "srcImg": "../img_song/siren.jpeg",
            "link": "./audio/siren.mp3"
        },
        {
            "name" : "Snooze",
            "Singer": " SZA",
            "srcImg": "../img_song/snooze.jpeg",
            "link": "./audio/snooze.mp3"
        },
        {
            "name" : "Style",
            "Singer": " Taylor Swift",
            "srcImg": "../img_song/style.jpeg",
            "link": "./audio/style.mp3"
        },
        {
            "name" : "Tứ phủ",
            "Singer": " Hoàng Thùy Linh",
            "srcImg": "../img_song/tuphu.jpeg",
            "link": "./audio/tuphu.mp3"
        },
        {
            "name" : "You right",
            "Singer": " Doja Cat & the Weeknd",
            "srcImg": "../img_song/youright.jpeg",
            "link": "./audio/youright.mp3"
        },
        {
            "name" : "Young and Beautiful",
            "Singer": "Lana Del Rey",
            "srcImg": "../img_song/youngandbeautiful.jpeg",
            "link": "./audio/youngandbeautiful.mp3"
        },
        {
            "name" : "Sit Down",
            "Singer": "NTC 127",
            "srcImg": "../img_song/sitdown.jpeg",
            "link": "./audio/sitdown.mp3"
        },
        {
            "name" : "Doin Time",
            "Singer": "Lana Del Rey",
            "srcImg": "../img_song/dointime.jpeg",
            "link": "./audio/dointime.mp3"
        },
        {
            "name" : "So this is love",
            "Singer": " Ilene Woods và Mike Douglas",
            "srcImg": "../img_song/sothisislove.mp3.jpeg",
            "link": "./audio/sothisislove.mp3"
        },
        {
            "name" : "Ghệ yêu dấu của em ơi",
            "Singer": "Tlinh",
            "srcImg": "../img_song/gheiudaucuaemoi.jpeg",
            "link": "./audio/gheiudaucuaemoi.mp3"
        },
        {
            "name" : "Nếu lúc đó",
            "Singer": "Tlinh",
            "srcImg": "../img_song/neulucdo.jpeg",
            "link": "./audio/neulucdo.mp3"
        },
        {
            "name" : "Kiss me more",
            "Singer": "Doja Cat",
            "srcImg": "../img_song/kissmemore.jpeg",
            "link": "./audio/kissmemore.mp3"
        },
        {
            "name" : "Bonnie & Clyde",
            "Singer": "DeVita",
            "srcImg": "../img_song/bonnieclyde.jpeg",
            "link": "./audio/bonnieclyde.mp3"
        },
        {
            "name" : "Bad Romance",
            "Singer": "Lady Gaga",
            "srcImg": "../img_song/badromance.jpeg",
            "link": "./audio/badromance.mp3"
        },
        
    ],
    curentIndex: 0,
    loop: false,
    isRandom: false,

    

    event: function () {
        _this = this;
        playing: false;
        //Bật tắt audio
        btnPlayPause.addEventListener("click", function () {
            if(_this.playing) {
                audio.pause();
                testtitle.innerHTML = "Tú Anh";
            }
            else {
                audio.play();
                testtitle.innerHTML = _this.CurrentSong.name;
            }
        })

        const test = document.querySelector(".list_song")
        var width = img.offsetWidth;
        test.onscroll = function() {
            var srcoll = test.scrollTop;
            var newWidth = width-srcoll;
            if(newWidth < 0 ) {
                newWidth = 0;
            }
            img.style.height = newWidth + 'px';
            img.style.width = newWidth + 'px';
            img.style.opacity = newWidth/width;
        }

        // Ấn nút Next 
        document.querySelector(".div_next").addEventListener("click", function() {
           if(_this.isRandom) {
            _this.random();
           }
           else {
            _this.nextSong();
           }
           audio.play();
           testtitle.innerHTML = _this.CurrentSong.name;
        })
        //Ấn nút black
        document.querySelector(".div_back").addEventListener("click", function() {
            if(_this.isRandom) {
                _this.random();
            }
            else {
                _this.perSong();
            }
            audio.play();
            testtitle.innerHTML = _this.CurrentSong.name;
        })
        // Ấn nút Random 
        const btnRandom = document.querySelector(".random")
        btnRandom.addEventListener("click", function() {
            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle('btnActive', _this.isRandom)
        })

        //Khi audio đang phát nhạc
        audio.onplay = function () {
            quayImg.play();
            _this.playing = true;
            btnPlayPause.classList.add("playing");
        }
        //Khi Audio tắt
        audio.onpause = function () {
            quayImg.pause();
            _this.playing = false;
            btnPlayPause.classList.remove("playing");
        }
        //kiểm tra audio đã phát xong chưa
        audio.onended = function () {
            img.style.setProperty('--percent',0);
            if(!this.loop) {
                btnPlayPause.classList.remove("playing");
                audio.pause();
                _this.nextSong();
                audio.play();
                testtitle.innerHTML = _this.CurrentSong.name;
            }
        }
        //Khi audio chạy cần set thanh prosess
        audio.ontimeupdate = function () {
            img.style.setProperty('--percent',audio.currentTime/audio.duration);
            var t = audio.currentTime.toFixed();
            if (t != 0) {
                time1.innerHTML = `${(t/60).toFixed()}:${(t%60).toFixed()}`;
            }
            else {
                time1.innerHTML = "--:--"
            }
            t = audio.duration - t;
            if(!isNaN(t)){
                time2.innerHTML = `-${(t/60).toFixed()}:${(t%60).toFixed()}`;
            }
            else {
                time2.innerHTML = "--:--";
            }
        }

        //Kiếm tra nút ấn phát lại
        const btnRot = document.querySelector('.rot');
        btnRot.addEventListener("click", function() {
           if (!btnRot.classList.contains("btnActive")){
            audio.loop = true;
            this.loop = true;
            btnRot.classList.add("btnActive")
           }
           else {
            audio.loop = false;
            this.loop = false;
            btnRot.classList.remove("btnActive")
           }
        })
        

            const cd = document.querySelector(".cd")
            const quayImg =  cd.animate([
                    {transform: 'rotate(360deg)'}
                ], {
                    duration: 10000,
                    iterations: Infinity
                })

            quayImg.pause();
            const listSongItem = document.querySelectorAll(".list_item");
            listSongItem.forEach(funt);
            function funt(item, index) {
                item.addEventListener("click", function() {
                _this.curentIndex = index;
                _this.LoadSong();
                audio.play();
                testtitle.innerHTML = _this.CurrentSong.name;
                })
            }
                
        },
    
    /*---------------------Define Property-----------------*/
    Dinhnghia: function() {
        Object.defineProperty(this, 'CurrentSong', {
            get: function() {
                return this.songs[this.curentIndex];
            }
        })
    },
    /*----------------main-------------------*/
    start: function() {
        this.render()
        this.event();
        this.Dinhnghia();
        this.LoadSong();
        
    },
    /*-------------------load song--------------------*/
    LoadSong: function () {
        const list = document.querySelectorAll(".list_item")
        _this = this
        nameSongCurrent.textContent = this.CurrentSong.name;
        desSongCurrent.textContent = this.CurrentSong.Singer;
        img.style.setProperty('--bg',`url(${this.CurrentSong.srcImg})`)
        img.style.setProperty('--percent',0);
        audio.src = this.CurrentSong.link;
        list.forEach(function(item, index) {
            _this.curentIndex === index ? item.classList.add("currentSong") : item.classList.remove("currentSong")
        })
    },
    /*----------------Render play list -----------------*/
    render: function() {
        var htmls = "";
        this.songs.forEach(song => {
            htmls += `
                <li class="list_item">
                <div class="cd_img" style="background-image: url(${song.srcImg});"></div>
                    <span> 
                        <p class="name_song_list">${song.name}</p>
                        <p class="Singer_list">${song.Singer}</p>
                    </span>
                    <a class="btn_download" title="Tải xuống" href = ${song.link} download = ${song.name}>
                        <i class="fa-solid fa-download"></i>
                    </a>
                </li>
            `
        });
        document.querySelector(".list_song").innerHTML = htmls;
    },
    nextSong: function () {
        this.curentIndex++;
        if(this.curentIndex >= this.songs.length) {
            this.curentIndex = 0;
        }
        this.LoadSong();
    },
    perSong: function() {
        this.curentIndex--;
        if(this.curentIndex <  0) {
            this.curentIndex = this.songs.length - 1;
        }
        this.LoadSong();
    },
    random: function() {
        var newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }
        while (newIndex === this.curentIndex)
        this.curentIndex = newIndex;
        this.LoadSong();
    }
}
App.start()


