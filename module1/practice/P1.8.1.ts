//destructuring 


{

    const user = {
        id : 34578,
        name: {
            firstName : 'Reduan',
            middleName : 'Ahmad',
            lastName : 'Rasel',
        },
        contactNo : 83495934,
        address : 'Dhaka'

    };


   const myfrands = ['reduan','ahmad','rasel','jabbar','rahmat','rahim'];

   const [a,b,c,...rest] = myfrands;


   console.log(myfrands);

}