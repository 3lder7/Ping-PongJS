function draw() {
    background(0);
    bola()
    movbola()
    colisbord()
    raq()
    raqop()
    raqmov()
    raqcolishub(xRaq, yRaq)
    raqcolishub(xRaqop, yRaqop)
    raqopmov()
    placar()
    detecponto()
    linha()
    corplacar()
  }  
  //CENÁRIO-----------------------
  function setup(){
    createCanvas(600, 400);
    trilha.loop()
  }
  let xlinha=90
  let ylinha=5
  let wlinha=90
  let hlinha=400
  
  function linha(){
  line(width/2, 0, width/2,700) 
  stroke(300)
  }
  
  //BOLA---------------------------
  let xBola = 300
  let yBola = 200
  let dBola = 20
  let raio = dBola / 2;
  let velxBola=5
  let velyBola=5
  function bola(){
    fill(color(255))
    circle(xBola, yBola, dBola);
  }
  function movbola(){
    xBola += velxBola
    yBola += velyBola
  }
  //RAQUETES------------------------
  let xRaq = 5
  let yRaq = 150  
  let wRaq = 10
  let hRaq = 70
  
  let xRaqop = 585
  let yRaqop = 150
  let wRaqop = 10
  let hRaqop = 70
  function raq(){
    fill(color(255))
    rect(xRaq,yRaq , wRaq, hRaq) 
  }
  function raqop(){
    rect(xRaqop, yRaqop, wRaqop, hRaqop)
  }
  //RAQUETE MOVIMENTO-------------------------
  function raqmov(){
    if(keyIsDown(UP_ARROW))
    yRaq -= 10
    if(keyIsDown(DOWN_ARROW))
    yRaq += 10   
  }
  //MOVIMENTO OPONENTE------------------------------
  function raqopmov(){
    velyOp = yBola - yRaqop - wRaq / 2 - 30
    yRaqop += velyOp
  }
  
  function raqopmov(){
    velyOp = yBola - yRaqop - wRaq / 2 - 30
    yRaqop += velyOp + chancedeerro
    calculochancedeerro()
  }
  //CHANCE DE ERRO-----------------------------
  let chancedeerro = 0
  function calculochancedeerro() {
    if (Robô >= Você) {
      chancedeerro += 1
      if (chancedeerro >= 39){
      chancedeerro = 40
      }
    } else {
      chancedeerro -= 1
      if (chancedeerro <= 35){
      chancedeerro = 35
      }
    }
  }
  //COLISÃO--------------------------
  let colisao = false
  function colisbord(){
    if(xBola + raio > width || xBola - raio < 0){velxBola *= -1}
    if(yBola + raio > height || yBola - raio < 0){velyBola *= -1}
  }
  function raqcolishub(x, y){
    colisao = 
  collideRectCircle(x, y, wRaq, hRaq, xBola, yBola, raio)
    if(colisao){velxBola *= -1; raquetada.play()}
  }
  //PLACAR---------------------------
  let Você = 0
  let Robô = 0
  
  function placar(){
    
  textAlign(CENTER)
  textSize(16)  
  fill(color(128,0,128));  
  rect(250, 10, 40, 20) 
  fill(color(128,0,128));  
  rect(310, 10, 40, 20)  
  }
  function corplacar(){
  fill(255)
  text(Você, 270, 26)
  fill(255)  
  text(Robô, 330, 26)
  }
  //PONTOS------------------------------
  function detecponto(){
  if(xBola > 590) {Você += 1;ponto.play()}
  if(xBola < 10)  {Robô += 1;ponto.play()}
  }
  //SONS----------------------------------
  let raquetada
  let ponto
  let trilha
  
  function preload(){
    trilha = loadSound ('trilha.mp3')
    ponto = loadSound ('ponto.mp3')
    raquetada = loadSound ('raquetada.mp3')
  }
  