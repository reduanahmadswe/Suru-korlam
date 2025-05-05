{
    //type guard

    //typeof --> type guard

    type AlphaNewmeric = string | number;

    const add = (param1 : AlphaNewmeric , param2 : AlphaNewmeric): AlphaNewmeric =>{

        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1+param2;
        }else{
            return param1.toString()+param2.toString();
        }
        
    };

    const result1 = add(2,4);
    const result2 = add('2',4);
    console.log(result1);
    console.log(result2);


    //in guard

    type NormalUser = {
        name : string
    }

    type AdminUser ={
        name : string;
        role : 'admin'
    }


    const getUser = (user : NormalUser | AdminUser)=>{
        if('role' in user){
            
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);

        }
    }


    const normalUser : NormalUser = {
        name : 'Mr. Normal Bhai',
    };

    const adminUser : AdminUser={
        name: 'Mr. Admin Bhai',
        role : 'admin',
    };


    getUser(normalUser);
    getUser(adminUser);


}