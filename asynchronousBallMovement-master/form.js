class Form {
constructor() {
    this.input=createInput("name")
    this.button= createButton("play")
    this.greeting=createElement('h2')
}
hide(){
this.input.hide();
this.button.hide();
}
display(){
    var title= createElement('h2')
    title.html("Car Racing Game")
    title.position(displayWidth/2 -125, 10)
    this.input.position(displayWidth/2 -125, 200)
    this.button.position(displayWidth/2 -50, 400)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
           playerCount=playerCount+1
           player.update();
           player.updateCount(playerCount) 
           this.greeting.html("Hello "+player.name)   
           this.greeting.position(500,250)       
    })


}
}

