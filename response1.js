class Response1{
    constructor(){}
    getYes(){
        database.ref('YES1').on("value",(data)=>{
            yes1 = data.val();
        });
    }
    updateYes(yes){
        database.ref('/').update({
            'YES1': yes
        });
    }
    getNo(){
        database.ref('NO1').on("value",(data)=>{
            no1 = data.val();
        });
    }
    updateNo(no){
        database.ref('/').update({
            'NO1': no
        });
    }
}
class Response2{
    constructor(){}
    getYes(){
        database.ref('YES2').on("value",(data)=>{
            yes2 = data.val();
        });
    }
    updateYes(yes){
        database.ref('/').update({
            'YES2': yes
        });
    }
    getNo(){
        database.ref('NO2').on("value",(data)=>{
            no2 = data.val();
        });
    }
    updateNo(no){
        database.ref('/').update({
            'NO2': no
        });
    }
}