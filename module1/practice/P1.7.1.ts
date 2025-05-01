    //spread operator
    //rest oprator
    //distructuring
    

    const bros1 : string[] = ['reduan ', 'ahmad','rasel'];
    console.log(bros1);
    const bros2 : string[] = ['rabbi','rafsan','ramzan'];
    console.log(bros2);
    bros1.push(...bros2);
    console.log(bros1);


    const mentor = {
        typescript : 'mezba',
        redux : 'mir',
        dbms :'mizan',
    }

    console.log(mentor);

    const mentor2 ={
        prisma : 'firoz',
        next : 'tonmy',
        cloud : 'nahid',
    }

    console.log(mentor2);

    const mentorList ={
        ...mentor,
        ...mentor2,
    }

    console.log(mentorList);


    //rest operator 
    const greatFriends = (...friend : string[])=>{
        friend.forEach((friend)=>console.log(`Hi ${friend}`));
    }

    greatFriends('Reduan', 'Rafiq', 'Rifat','abul', 'babul', 'kabul', 'sabul', 'tabul', 'zabul', 'mabul', 'nabul', 'pabul', 'qabul', 'rabul', 'sabul', 'tabul', 'vabul', 'wabul', 'xabul', 'yabul', 'zabul')


