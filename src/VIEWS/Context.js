import { createContext, useContext, useEffect, useRef, useState } from "react";
import nk from '../../src/PHONES/NOKIA/NOKIA1.4.647000.jpg';
import nk1 from '../../src/PHONES/NOKIA/NOKIA2.469200.jpg';
import nk2 from '../../src/PHONES/NOKIA/NOKIA6.156990.jpg';
import nk3 from '../../src/PHONES/NOKIA/NOKIA1056400.jpg';
import nk4 from '../../src/PHONES/NOKIA/NOKIA15011000.jpg';
import nk5 from '../../src/PHONES/NOKIA/Nokia15013200.jpg';
import nk6 from '../../src/PHONES/NOKIA/NOKIAC135499.jpg';
import nk7 from '../../src/PHONES/NOKIA/NokiaG2086000.jpg';
import nk8 from '../../src/PHONES/NOKIA/NOKIAX10160000.jpg';


import sm from '../../src/PHONES/SAMSUNG/SamGalA22-6.499340.jpg';
import sm1 from '../../src/PHONES/SAMSUNG/SamGalA0371478.jpg';
import sm2 from '../../src/PHONES/SAMSUNG/SamGalA1279900.jpg';
import sm3 from '../../src/PHONES/SAMSUNG/SamGalNote8140000.jpg';
import sm4 from '../../src/PHONES/SAMSUNG/SamGalnote20495900.jpg';
import sm5 from '../../src/PHONES/SAMSUNG/SamGals10252300.jpg';
import sm6 from '../../src/PHONES/SAMSUNG/SamNoteedge47400.jpg';
import sm7 from '../../src/PHONES/SAMSUNG/SamNotes9135000.jpg';


import wd from '../../src/PHONES/WINDOWS/NokiaLumia63016900.jpg';
import wd1 from '../../src/PHONES/WINDOWS/Htchd2.jpg';
import wd2 from '../../src/PHONES/WINDOWS/Htcphone8s.jpg';
import wd3 from '../../src/PHONES/WINDOWS/Htcphone8x.jpg';
import wd4 from '../../src/PHONES/WINDOWS/NokiaLumia640.jpg';
import wd5 from '../../src/PHONES/WINDOWS/NokiaLumia650.jpg';
import wd6 from '../../src/PHONES/WINDOWS/NokiaLumia930.jpg';
import wd7 from '../../src/PHONES/WINDOWS/Htcphone8s.jpg';


import gn from '../../src/PHONES/GIONEE/Gioneef103.jpg';
import gn1 from '../../src/PHONES/GIONEE/Gioneek30.jpg';
import gn2 from '../../src/PHONES/GIONEE/Gioneem3.jpg';
import gn3 from '../../src/PHONES/GIONEE/Gioneem5.jpg';
import gn4 from '../../src/PHONES/GIONEE/Gioneem12.jpg';
import gn5 from '../../src/PHONES/GIONEE/Gionees8.jpg';
import gn6 from '../../src/PHONES/GIONEE/Gionees10.jpg';
import gn7 from '../../src/PHONES/GIONEE/Gionees11.jpg';

import tn from '../../src/PHONES/TECNO/infinixhot9.jpg';
import tn1 from '../../src/PHONES/TECNO/infinixhot10.jpg';
import tn2 from '../../src/PHONES/TECNO/spark3.jpg';
import tn3 from '../../src/PHONES/TECNO/spark4.jpg';
import tn4 from '../../src/PHONES/TECNO/spark5.jpg';
import tn5 from '../../src/PHONES/TECNO/spark5power.jpg';
import tn6 from '../../src/PHONES/TECNO/spark6.jpg';
import tn7 from '../../src/PHONES/TECNO/spark6go.jpg';
import tn8 from '../../src/PHONES/TECNO/spark7t.jpg';
import tn9 from '../../src/PHONES/TECNO/Tecnocamon11.jpg';
import tn10 from '../../src/PHONES/TECNO/Tecnocamon14.jpg';
import tn11 from '../../src/PHONES/TECNO/Tecnocamon15.jpg';
import tn12 from '../../src/PHONES/TECNO/Tecnocamon16.jpg';
import tn13 from '../../src/PHONES/TECNO/Tecnocamon17.jpg';
import tn14 from '../../src/PHONES/TECNO/Tecnocamoni2x.jpg';
import tn15 from '../../src/PHONES/TECNO/Tecnocamoni4.jpg';



//laptops
import sml from '../../src/LAPTOP/SAMSUNG/samAnd.jpg';
import sml1 from '../../src/LAPTOP/SAMSUNG/samGalBook.jpg';
import sml2 from '../../src/LAPTOP/SAMSUNG/samNote.jpg';
import sml3 from '../../src/LAPTOP/SAMSUNG/samNote9.jpg';
import sml4 from '../../src/LAPTOP/SAMSUNG/samATIVBOOK9.jpg';
import sml5 from '../../src/LAPTOP/SAMSUNG/samATIVULTRABOOK.jpg';
import sml6 from '../../src/LAPTOP/SAMSUNG/samnp300.jpg';
import sml7 from '../../src/LAPTOP/SAMSUNG/samnotebook7.jpg';

import hpl from '../../src/LAPTOP/HP/hp14.jpg';
import hpl1 from '../../src/LAPTOP/HP/hp15.jpg';
import hpl2 from '../../src/LAPTOP/HP/hp240.jpg';
import hpl3 from '../../src/LAPTOP/HP/hp348.jpg';
import hpl4 from '../../src/LAPTOP/HP/hpnotebook.jpg';
import hpl5 from '../../src/LAPTOP/HP/hppavillion15.jpg';
import hpl6 from '../../src/LAPTOP/HP/hpprobook.jpg';
import hpl7 from '../../src/LAPTOP/HP/sonyHpcoreI5.jpg';

import lnl from '../../src/LAPTOP/LENOVO/2in1.jpg';
import lnl1 from '../../src/LAPTOP/LENOVO/ideapad5i.jpg';
import lnl2 from '../../src/LAPTOP/LENOVO/thinkbook14s.jpg';
import lnl3 from '../../src/LAPTOP/LENOVO/thinkbookx1.jpg';


import asl from '../../src/LAPTOP/ASUS/k55.jpg';
import asl1 from '../../src/LAPTOP/ASUS/vivoBook14.jpg';
import asl2 from '../../src/LAPTOP/ASUS/vivoBooks15.jpg';
import asl3 from '../../src/LAPTOP/ASUS/x543.jpg';

import dll from '../../src/LAPTOP/DELL/corei5.jpg';
import dll1 from '../../src/LAPTOP/DELL/dellinspirion15.jpg';
import dll2 from '../../src/LAPTOP/DELL/dellinspirion1525.jpg';
import dll3 from '../../src/LAPTOP/DELL/dellxps13.jpg';

//HOMEDEVICES
import hdlg from '../../src/HOMEDEVICES/LG/43inch.jpg';
import hdlg1 from '../../src/HOMEDEVICES/LG/300w5.1ch.jpg';
import hdlg2 from '../../src/HOMEDEVICES/LG/Ai-enabled.jpg';
import hdlg3 from '../../src/HOMEDEVICES/LG/digitaldvdmicros.jpg';
import hdlg4 from '../../src/HOMEDEVICES/LG/dvdplayer.jpg';
import hdlg5 from '../../src/HOMEDEVICES/LG/electriccooker.jpg';
import hdlg6 from '../../src/HOMEDEVICES/LG/hometheaterbluethoot.jpg';
import hdlg7 from '../../src/HOMEDEVICES/LG/hometheatersys.jpg';
import hdlg8 from '../../src/HOMEDEVICES/LG/personalbeauty.jpg';
import hdlg9 from '../../src/HOMEDEVICES/LG/tvoled.jpg';
import hdlg10 from '../../src/HOMEDEVICES/LG/washeranddryer.jpg';
import hdlg11 from '../../src/HOMEDEVICES/LG/washingm.jpg';

import hdsg from '../../src/HOMEDEVICES/SAMSUNG/dvd.jpg';
import hdsg1 from '../../src/HOMEDEVICES/SAMSUNG/dvd1.jpg';
import hdsg2 from '../../src/HOMEDEVICES/SAMSUNG/dvdwhite.jpg';
import hdsg3 from '../../src/HOMEDEVICES/SAMSUNG/electronics.jpg';
import hdsg4 from '../../src/HOMEDEVICES/SAMSUNG/mtv.jpg';
import hdsg5 from '../../src/HOMEDEVICES/SAMSUNG/mtv2.jpg';
import hdsg6 from '../../src/HOMEDEVICES/SAMSUNG/mtv3.jpg';
import hdsg7 from '../../src/HOMEDEVICES/SAMSUNG/qled.jpg';

import hdox from '../../src/HOMEDEVICES/OX/fan.jpg';
import hdox1 from '../../src/HOMEDEVICES/OX/fan1.jpg';
import hdox2 from '../../src/HOMEDEVICES/OX/fan2.jpg';
import hdox3 from '../../src/HOMEDEVICES/OX/fan3.jpg';

import hdtg from '../../src/HOMEDEVICES/TIGER/foodjar.jpg';
import hdtg1 from '../../src/HOMEDEVICES/TIGER/generator.jpg';
import hdtg2 from '../../src/HOMEDEVICES/TIGER/icecrusher.jpg';
import hdtg3 from '../../src/HOMEDEVICES/TIGER/jug.jpg';
import hdtg4 from '../../src/HOMEDEVICES/TIGER/oven.jpg';
import hdtg5 from '../../src/HOMEDEVICES/TIGER/ricecooker.jpg';
import hdtg6 from '../../src/HOMEDEVICES/TIGER/steamless.jpg';
import hdtg7 from '../../src/HOMEDEVICES/TIGER/tablefan.jpg';

import  hdep from '../../src/HOMEDEVICES/ELEPAQ/generator.jpg';
import  hdep1 from '../../src/HOMEDEVICES/ELEPAQ/generator1.3kw.jpg';
import  hdep2 from '../../src/HOMEDEVICES/ELEPAQ/generator1.jpg';
import  hdep3 from '../../src/HOMEDEVICES/ELEPAQ/generator2.jpg';
import  hdep4 from '../../src/HOMEDEVICES/ELEPAQ/generator3.5kva.jpg';
import  hdep5 from '../../src/HOMEDEVICES/ELEPAQ/generator3.jpg';
import  hdep6 from '../../src/HOMEDEVICES/ELEPAQ/generator4kva.jpg';
import  hdep7 from '../../src/HOMEDEVICES/ELEPAQ/generator5.5kva.jpg';

//watches
import  wme from '../../src/WATCHES/MEN/eight.jpg';
import  wme1 from '../../src/WATCHES/MEN/seven.jpg';
import  wme2 from '../../src/WATCHES/MEN/six.jpg';
import  wme3 from '../../src/WATCHES/MEN/five.jpg';
import  wme4 from '../../src/WATCHES/MEN/four.jpg';
import  wme5 from '../../src/WATCHES/MEN/three.jpg';
import  wme6 from '../../src/WATCHES/MEN/two.jpg';
import  wme7 from '../../src/WATCHES/MEN/one.jpg';

import  wwme from '../../src/WATCHES/WOMEN/eight.jpg';
import  wwme1 from '../../src/WATCHES/WOMEN/seven.jpg';
import  wwme2 from '../../src/WATCHES/WOMEN/six.jpg';
import  wwme3 from '../../src/WATCHES/WOMEN/five.jpg';
import  wwme4 from '../../src/WATCHES/WOMEN/four.jpg';
import  wwme5 from '../../src/WATCHES/WOMEN/three.jpg';
import  wwme6 from '../../src/WATCHES/WOMEN/two.jpg';
import  wwme7 from '../../src/WATCHES/WOMEN/one.jpg';

import  wfn from '../../src/WATCHES/FASHION/eight.jpg';
import  wfn1 from '../../src/WATCHES/FASHION/seven.jpg';
import  wfn2 from '../../src/WATCHES/FASHION/six.jpg';
import  wfn3 from '../../src/WATCHES/FASHION/five.jpg';
import  wfn4 from '../../src/WATCHES/FASHION/four.jpg';
import  wfn5 from '../../src/WATCHES/FASHION/three.jpg';
import  wfn6 from '../../src/WATCHES/FASHION/two.jpg';
import  wfn7 from '../../src/WATCHES/FASHION/one.jpg';

import  wth from '../../src/WATCHES/TECH/eight.jpg';
import  wth1 from '../../src/WATCHES/TECH/seven.jpg';
import  wth2 from '../../src/WATCHES/TECH/six.jpg';
import  wth3 from '../../src/WATCHES/TECH/five.jpg';
import  wth4 from '../../src/WATCHES/TECH/four.jpg';
import  wth5 from '../../src/WATCHES/TECH/three.jpg';
import  wth6 from '../../src/WATCHES/TECH/two.jpg';
import  wth7 from '../../src/WATCHES/TECH/one.jpg';

import  wtk from '../../src/WATCHES/TRACKER/eight.jpg';
import  wtk1 from '../../src/WATCHES/TRACKER/seven.jpg';
import  wtk2 from '../../src/WATCHES/TRACKER/six.jpg';
import  wtk3 from '../../src/WATCHES/TRACKER/five.jpg';
import  wtk4 from '../../src/WATCHES/TRACKER/four.jpg';
import  wtk5 from '../../src/WATCHES/TRACKER/three.jpg';
import  wtk6 from '../../src/WATCHES/TRACKER/two.jpg';
import  wtk7 from '../../src/WATCHES/TRACKER/one.jpg';

const context = createContext();

export function useTodo() {
    return useContext(context);
}

export function TodoProvider({ children }) {
    const [array, setarray] = useState(['PHONES', 'LAPTOPS', 'HOME-DEVICES', 'SMART-WATCHES']);
    const [cartArray, setcartArray] = useState([]);
    const [navId, setnavId] = useState(0);
    const [cartNo, setcartNo] = useState(0);
    let no = 0;
    function handleDelete(params) {
        const newCartArray = [...cartArray];
        setcartNo(cartNo - 1);
        setcartArray(
            newCartArray.filter((max) => max !== params)
        )
    }


    function handleNav(params) {
        console.log(params);
        setnavId(params)
    }
    function handleAddCart(what, model, product, price) {
        no++;
        console.log(what, model, product, price);
        setcartNo(cartNo + 1);
        console.log(cartNo);
            setcartArray([...cartArray, { what: what, model: model, product: product, price: price }])
    }

     function handleCancel(params, one, two, three) {
        params.current.hidden = true;
        setcartArray([]);
        setcartNo(0); 
        console.log(cartArray, setcartNo);
        one.value="";
        two.value="";
        three.value="";

    }

    function handleClear(){
        setcartArray([]);
        setcartNo(0); 
        console.log(cartArray, setcartNo);
    }


    const store = [
        [{
            type: "NOKIA",
            model: [
                { phone: "NOKIA 1.4.6", img: nk, price: Math.round(47000 / 560) },
                { phone: "NOKIA 2.4", img: nk1, price: Math.round(69200 / 560) },
                { phone: "NOKIA 6.1", img: nk2, price: Math.round(56990 / 560) },
                { phone: "NOKIA 105", img: nk3, price: Math.round(6400 / 560) },
                { phone: "NOKIA 150", img: nk4, price: Math.round(11000 / 560) },
                { phone: "NOKIA 150.1", img: nk5, price: Math.round(13200 / 560) },
                { phone: "NOKIA C13", img: nk6, price: Math.round(5499 / 560) },
                { phone: "NOKIA G20", img: nk7, price: Math.round(86000 / 560) },
                { phone: "NOKIA X10", img: nk8, price: Math.round(160000 / 560) },
            ]
        },
        {
            type: "SAMSUNG",
            model: [
                { phone: "GALAXY A22", img: sm, price: Math.round(99340 / 560) },
                { phone: "GALAXY A03", img: sm1, price: Math.round(71478 / 560) },
                { phone: "GALAXY A12", img: sm2, price: Math.round(79900 / 560) },
                { phone: "GALAXY NOTE 8", img: sm3, price: Math.round(140000 / 560) },
                { phone: "GALAXY NOTE 20", img: sm4, price: Math.round(495900 / 560) },
                { phone: "GALAXY 10", img: sm5, price: Math.round(252300 / 560) },
                { phone: "NOTE EDGE", img: sm6, price: Math.round(47400 / 560) },
                { phone: "NOTE 9", img: sm7, price: Math.round(135000 / 560) }
            ]
        },
        {
            type: "WINDOWS",
            model: [
                { phone: "LUMIA 630", img: wd, price: Math.round(16900 / 560) },
                { phone: "WINDOWS HTC HIGH DISPLAY2", img: wd1, price: Math.round(32900 / 560) },
                { phone: "HTC 8s", img: wd2, price: Math.round(50900 / 560) },
                { phone: "HTC 8x", img: wd3, price: Math.round(45000 / 560) },
                { phone: "LUMIA 640", img: wd4, price: Math.round(25900 / 560) },
                { phone: "NOKIA LUMIA 650", img: wd5, price: Math.round(45900 / 560) },
                { phone: "LUMIA 930", img: wd6, price: Math.round(75900 / 560) },
                { phone: "HTC 8s", img: wd7, price: Math.round(60900 / 560) },
              
            ]

        },
        {
            type: "GIONEE",
            model: [
                { phone: "GIONEE F103", img: gn, price: Math.round(45000 / 560) },
                { phone: "GIONEE k30", img: gn1, price: Math.round(59200 / 560) },
                { phone: "GIONEE M3", img: gn2, price: Math.round(56590 / 560) },
                { phone: "GIONEE M5", img: gn3, price: Math.round(64000 / 560) },
                { phone: "GIONEE M12", img: gn4, price: Math.round(70000 / 560) },
                { phone: "GIONEE S8", img: gn5, price: Math.round(75000 / 560) },
                { phone: "GIONEE S10", img: gn6, price: Math.round(78000 / 560) },
                { phone: "GIONEE S11", img: gn7, price: Math.round(89000 / 560) },
            ]
        },
        {
            type: "TECNO",
            model: [
                { phone: "INFINIX HOT 9", img: tn, price: Math.round(47000 / 560) },
                { phone: "INFINIX HOT 10", img: tn1, price: Math.round(69200 / 560) },
                { phone: "SPARK 3", img: tn2, price: Math.round(56990 / 560) },
                { phone: "SPARK 4", img: tn3, price: Math.round(62400 / 560) },
                { phone: "SPARK 5", img: tn4, price: Math.round(43000 / 560) },
                { phone: "SPARK 5 POWER", img: tn5, price: Math.round(53200 / 560) },
                { phone: "SPARK 6", img: tn6, price: Math.round(5499 / 560) },
                { phone: "SPARK 6 GO", img: tn7, price: Math.round(86000 / 560) },
                { phone: "CAMON 11", img: tn8, price: Math.round(65000 / 560) },
                { phone: "CAMON 14", img: tn9, price: Math.round(70000 / 560) },
                { phone: "CAMON 15", img: tn10, price: Math.round(80000 / 560) },
                { phone: "CAMON 16", img: tn11, price: Math.round(75000 / 560) },
                { phone: "CAMON 17", img: tn12, price: Math.round(60000 / 560) },
                { phone: "CAMON I2", img: tn13, price: Math.round(80000 / 560) },
                { phone: "CAMON 7T", img: tn14, price: Math.round(45000 / 560) },
                { phone: "CAMON I4", img: tn15, price: Math.round(60000 / 560) },
            ]
        }
        ],

        //laptops

        [{
            type: "SAMSUNG",
            model: [
                { phone: "S-ANDROID", img: sml, price: Math.round(430000 / 560) },
                { phone: "GALAXY BOOK", img: sml1, price: Math.round(200000 / 560) },
                { phone: "NOTE", img: sml2, price: Math.round(250000 / 560) },
                { phone: "NOTE 9", img: sml3, price: Math.round(300000 / 560) },
                { phone: "ATIV BOOK 9", img: sml4, price: Math.round(110000 / 560) },
                { phone: "ATIV ULTRA", img: sml5, price: Math.round(130200 / 560) },
                { phone: "NP 300", img: sml6, price: Math.round(90499 / 560) },
                { phone: "NOTEBOOK 7", img: sml7, price: Math.round(86000 / 560) },
               
            ]
        },
        {
            type: "HP",
            model: [
                { phone: "HP 14", img: hpl, price: Math.round(100000 / 560) },
                { phone: "HP 14", img: hpl1, price: Math.round(140000 / 560) },
                { phone: "HP 240", img: hpl2, price: Math.round(140000 / 560) },
                { phone: "HP 348", img: hpl3, price: Math.round(102400 / 560) },
                { phone: "HP NOTEBOOK", img: hpl4, price: Math.round(111000 / 560) },
                { phone: "HP PAVILLION 15", img: hpl5, price: Math.round(130200 / 560) },
                { phone: "HP PRO BOOK", img: hpl6, price: Math.round(150000 / 560) },
                { phone: "SONY CORE 5", img: hpl7, price: Math.round(100000 / 560) },
            ]
        },
        {
            type: "LENOVO",
            model: [
                { phone: "2 IN 1", img: lnl, price: Math.round(470000 / 560) },
                { phone: "IDEA PAD 5i", img: lnl1, price: Math.round(100200 / 560) },
                { phone: "THINKBOOK 14s", img: lnl2, price: Math.round(130000 / 560) },
                { phone: "THINKBOOK x1", img: lnl3, price: Math.round(120000 / 560) },
            ]

        },
        {
            type: "ASUS",
            model: [
                { phone: "K55", img:asl, price: Math.round(97000 / 560) },
                { phone: "VIVO BOOK 14", img:asl1, price: Math.round(100200 / 560) },
                { phone: "VIVO BOOK 15", img:asl2, price: Math.round(130000 / 560) },
                { phone: "X543", img:asl3, price: Math.round(120000 / 560) },
            ]
        },
        {
            type: "DELL",
            model: [
                { phone: "CORE i5", img:dll, price: Math.round(47000 / 560) },
                { phone: "INSPIRION 15", img:dll1, price: Math.round(69200 / 560) },
                { phone: "INSPIRION 1525", img:dll2, price: Math.round(56990 / 560) },
                { phone: "XPS 13", img:dll3, price: Math.round(6400 / 560) }
            ]
        }
        ],
        //HOMEDEVICES
        [{
            type: "LG",
            model: [
                { phone: "TV 43INCH", img: hdlg, price: Math.round(150000 / 560) },
                { phone: "HOME THEATER", img: hdlg1, price: Math.round(70000 / 560) },
                { phone: "TV AI-ENABLED", img: hdlg2, price: Math.round(190000 / 560) },
                { phone: "DVD MICROS", img: hdlg3, price: Math.round(140000 / 560) },
                { phone: "DVD PLAYER", img: hdlg4, price: Math.round(30000 / 560) },
                { phone: "ELECTRIC COOKER", img: hdlg5, price: Math.round(90000 / 560) },
                { phone: "BLUETOOTH ENABLED", img: hdlg6, price: Math.round(60000 / 560) },
                { phone: "SUBWOOFER", img: hdlg7, price: Math.round(86000 / 560) },
                { phone: "PERSONAL BEAUTY", img: hdlg8, price: Math.round(16000 / 560) },
                { phone: "OLED", img: hdlg9, price: Math.round(160000 / 560) },
                { phone: "WASHER AND DRYER", img: hdlg10, price: Math.round(120000 / 560) },
                { phone: "WASHING MACHING", img: hdlg11, price: Math.round(100000 / 560) },
            ]
        },
        {
            type: "SAMSUNG",
            model: [
                { phone: "DVD PLAYER", img: hdsg, price: Math.round(30000 / 560) },
                { phone: "DVD PLAYER", img: hdsg1, price: Math.round(40000 / 560) },
                { phone: "DVD PLAYER", img: hdsg2, price: Math.round(30000 / 560) },
                { phone: "ELECTRONICS", img: hdsg3, price: Math.round(100000 / 560) },
                { phone: "TV", img: hdsg4, price: Math.round(120000 / 560) },
                { phone: "TV", img: hdsg5, price: Math.round(135000 / 560) },
                { phone: "TV", img: hdsg6, price: Math.round(80000 / 560) },
                { phone: "QLED", img: hdsg7, price: Math.round(86000 / 560) },
            ]
        },
        {
            type: "OX",
            model: [
                { phone: "FAN", img: hdox, price: Math.round(20000 / 560) },
                { phone: "FAN", img: hdox1, price: Math.round(25000 / 560) },
                { phone: "FAN", img: hdox2, price: Math.round(30000 / 560) },
                { phone: "FAN", img: hdox3, price: Math.round(2000 / 560) },
            ]

        },
        {
            type: "TIGER",
            model: [
                { phone: "FOOD JAR", img: hdtg, price: Math.round(27000 / 560) },
                { phone: "GENERATOR", img: hdtg1, price: Math.round(30000 / 560) },
                { phone: "ICE CRUSHER", img: hdtg2, price: Math.round(56000 / 560) },
                { phone: "WATER HEATER", img: hdtg3, price: Math.round(60000 / 560) },
                { phone: "MICROWAVE", img: hdtg4, price: Math.round(60000 / 560) },
                { phone: "RICE COOKER", img: hdtg5, price: Math.round(30000 / 560) },
                { phone: "STEAMLESS", img: hdtg6, price: Math.round(20000 / 560) },
                { phone: "TABLE FAN", img: hdtg7, price: Math.round(30000 / 560) },
              
            ]
        },
        {
            type: "ELEPAQ",
            model: [
                { phone: "GENERATOR", img: hdep, price: Math.round(90000 / 560) },
                { phone: "GENERATOR", img: hdep1, price: Math.round(69000 / 560) },
                { phone: "GENERATOR", img: hdep2, price: Math.round(70000 / 560) },
                { phone: "GENERATOR", img: hdep3, price: Math.round(100000 / 560) },
                { phone: "GENERATOR", img: hdep4, price: Math.round(120000 / 560) },
                { phone: "GENERATOR", img: hdep5, price: Math.round(60000 / 560) },
                { phone: "GENERATOR", img: hdep6, price: Math.round(50000 / 560) },
                { phone: "GENERATOR", img: hdep7, price: Math.round(86000 / 560) },
            ]
        }
        ],
        //watch
        [{
            type: "MEN",
            model: [
                { phone: "WRIST WATCH", img: wme, price: Math.round(47000 / 560) },
                { phone: "WRIST WATCH", img: wme1, price: Math.round(69200 / 560) },
                { phone: "WRIST WATCH", img: wme2, price: Math.round(56990 / 560) },
                { phone: "WRIST WATCH", img: wme3, price: Math.round(6400 / 560) },
                { phone: "WRIST WATCH", img: wme4, price: Math.round(20000 / 560) },
                { phone: "WRIST WATCH", img: wme5, price: Math.round(30200 / 560) },
                { phone: "WRIST WATCH", img: wme6, price: Math.round(2099 / 560) },
                { phone: "WRIST WATCH", img: wme7, price: Math.round(21000 / 560) },
            ]
        },
        {
            type: "WOMEN",
            model: [
                { phone: "WRIST WATCH", img: wwme, price: Math.round(23000 / 560) },
                { phone: "WRIST WATCH", img: wwme1, price: Math.round(23200 / 560) },
                { phone: "WRIST WATCH", img: wwme2, price: Math.round(56990 / 560) },
                { phone: "WRIST WATCH", img: wwme3, price: Math.round(30000 / 560) },
                { phone: "WRIST WATCH", img: wwme4, price: Math.round(11000 / 560) },
                { phone: "WRIST WATCH", img: wwme5, price: Math.round(32000 / 560) },
                { phone: "WRIST WATCH", img: wwme6, price: Math.round(19000 / 560) },
                { phone: "WRIST WATCH", img: wwme7, price: Math.round(30000 / 560) },
            ]
        },
        {
            type: "FASHION",
            model: [
                { phone: "WRIST WATCH", img: wfn, price: Math.round(47000 / 560) },
                { phone: "WRIST WATCH", img: wfn1, price: Math.round(69200 / 560) },
                { phone: "WRIST WATCH", img: wfn2, price: Math.round(56990 / 560) },
                { phone: "WRIST WATCH", img: wfn3, price: Math.round(6400 / 560) },
                { phone: "WRIST WATCH", img: wfn4, price: Math.round(11000 / 560) },
                { phone: "WRIST WATCH", img: wfn5, price: Math.round(13200 / 560) },
                { phone: "WRIST WATCH", img: wfn6, price: Math.round(5499 / 560) },
                { phone: "WRIST WATCH", img: wfn7, price: Math.round(86000 / 560) },
            ]

        },
        {
            type: "TECH",
            model: [
                { phone: "WRIST WATCH", img: wth, price: Math.round(47000 / 560) },
                { phone: "WRIST WATCH", img: wth1, price: Math.round(69200 / 560) },
                { phone: "WRIST WATCH", img: wth2, price: Math.round(56990 / 560) },
                { phone: "WRIST WATCH", img: wth3, price: Math.round(70000 / 560) },
                { phone: "WRIST WATCH", img: wth4, price: Math.round(60000 / 560) },
                { phone: "WRIST WATCH", img: wth5, price: Math.round(13200 / 560) },
                { phone: "WRIST WATCH", img: wth6, price: Math.round(5499 / 560) },
                { phone: "WRIST WATCH", img: wth7, price: Math.round(86000 / 560) },
            ]
        },
        {
            type: "TRACKER",
            model: [
                { phone: "WRIST WATCH", img: wtk, price: Math.round(47000 / 560) },
                { phone: "WRIST WATCH", img: wtk1, price: Math.round(34200 / 560) },
                { phone: "WRIST WATCH", img: wtk2, price: Math.round(30990 / 560) },
                { phone: "WRIST WATCH", img: wtk3, price: Math.round(23000 / 560) },
                { phone: "WRIST WATCH", img: wtk4, price: Math.round(11000 / 560) },
                { phone: "WRIST WATCH", img: wtk5, price: Math.round(40000 / 560) },
                { phone: "WRIST WATCH", img: wtk6, price: Math.round(30000 / 560) },
                { phone: "WRIST WATCH", img: wtk7, price: Math.round(40000 / 560) },
            ]
        }
        ],
    ]
    const value = { array, cartArray, cartNo, store, handleNav, navId, handleAddCart, handleDelete, handleCancel, handleClear }
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}