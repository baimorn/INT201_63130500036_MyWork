let zodiac1 = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horse','sheep'];
let year = 2001 ;
let output=zodiac1[year%12];
console.log(output)

function zodiac(years){ 
    let yourzodiac = years % 12 
    switch(yourzodiac){
        case 0 : console.log('monkey') //ถ้า % แล้วเหลือเศษตาม case ไหนให้ console.log ออกมาตามนั้น 
        break;

        case 1 : console.log('rooster')
        break;

        case 2 : console.log('dog')
        break;

        case 3 : console.log('pig')
        break;

        case 4 : console.log('rat')
        break;

        case 5 : console.log('ox')
        break;

        case 6 : console.log('tiger')
        break;

        case 7 : console.log('rabbit')
        break;

        case 8 : console.log('drason')
        break;

        case 9 : console.log('snake')
        break;

        case 10 : console.log('horse')
        break;

        case 11 : console.log('sheep')
        break;
    }
}

//zodiac(1900) //ยกตัวอย่างปีที่เราจะใช้
zodiac(2002) //horse
