"use strict";
{
    //spread operator
    //rest oprator
    //distructuring
    //learn spread operator
    const bros1 = [
        'Reduan',
        'Rafiq',
        'Rifat',
    ];
    const bros2 = ['Rabbi', 'Rahman', 'jabbar'];
    bros1.push(...bros2);
    const mentor = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan',
    };
    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tonmy',
        cloud: 'Nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentor), mentor2);
    //learn rest operator
    const greatFriends = (...friend) => {
        // console.log(`My best friend is ${friend1}, ${friend2} and ${friend}`);
        friend.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greatFriends('Reduan', 'Rafiq', 'Rifat', 'abul', 'babul', 'kabul', 'sabul', 'tabul', 'zabul', 'mabul', 'nabul', 'pabul', 'qabul', 'rabul', 'sabul', 'tabul', 'vabul', 'wabul', 'xabul', 'yabul', 'zabul');
}
