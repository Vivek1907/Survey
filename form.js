class Form{
    constructor(){
        this.start = createButton("Start The Survey");
        this.name = createInput();
        this.Yes = createButton("YES");
        this.No = createButton("NO");
        this.one = createElement("h3");
        this.next = createButton("NEXT");
        this.greeting = createElement("h3");
    }
     displayStart(){
        this.Yes.hide();
        this.No.hide();
        this.name.hide();
        this.one.hide();
        this.next.hide();
        this.greeting.hide();
        this.start.position(200,200);
        this.start.mousePressed(()=>{
            stateNumber+=1;
        });
    }
    displayOne(){
      this.start.hide();
      this.one.show();
      this.one.html("ENTER YOUR NAME");
      this.one.position(15,180);
      this.name.show();
      this.name.position(200,200);
      this.next.show();
      this.next.position(300,300);
      this.next.mousePressed(()=>{
          this.one.hide();
          this.name.hide();
          this.next.hide();
          stateNumber+=1;
          this.greeting.show();
          this.greeting.html("Hi "+this.name.value()+" !");
          this.greeting.position(200,10);
         });
    }

    displayYesNO(){
        this.Yes.show();
        this.No.show();
        this.Yes.position(150,height/4);
        this.No.position(250,height/4);
        this.Yes.mousePressed(()=>{
           yes1+=1;
           response1.updateYes(yes1);
           stateNumber+=1;
           this.Yes.hide();
           this.No.hide();
        });
        this.No.mousePressed(()=>{
            no1+=1;
            response1.updateNo(no1);
            stateNumber+=1;
            this.Yes.hide();
            this.No.hide();
         });
         if(yes1>0||no1>0){
         text("YES: "+ (yes1/(yes1+no1))*100+"%",200,400);
         text("NO: "+ (no1/(yes1+no1))*100+"%",200,430);
         }
    }
    displayYesNO2(){
        this.Yes.show();
        this.No.show();
        this.Yes.position(150,height/4);
        this.No.position(250,height/4);
        this.Yes.mousePressed(()=>{
           yes2+=1;
           response2.updateYes(yes2);
           stateNumber+=1;
           this.Yes.hide();
           this.No.hide();
        });
        this.No.mousePressed(()=>{
            no2+=1;
            response2.updateNo(no2);
            stateNumber+=1;
            this.Yes.hide();
            this.No.hide();
         });
         console.log(yes2);
         if(yes2>0||no2>0){
         text("YES: "+ (yes2/(yes2+no2))*100+"%",200,400);
         text("NO: "+ (no2/(yes2+no2))*100+"%",200,430);
         }
    }
    }
