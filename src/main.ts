
const cardTypes=['itemcardborder','powercardborder','feat']
var domTool =(window as any).$tw.modules.execute("$:/core/modules/utils/dom.js");
setInterval(() => {
  let cards: any[] =[]
  for (let type of cardTypes){
    let temp= document.getElementsByClassName(type);
    cards=[...cards,...temp]
  }
  console.log(cards)
  for (let card of cards) {
    card = card as any;

    let haveCopy = false;
    if (card.Clipboard==true){
      haveCopy=true
    }
    if (!haveCopy) {
      (card as HTMLElement).ondblclick=()=>{
        domTool.copyToClipboard((card as HTMLElement).innerText)
      }
      card.Clipboard=true
    }
  }
}, 500);
