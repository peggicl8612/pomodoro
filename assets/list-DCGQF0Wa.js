import{a3 as d}from"./index-B9R6Xz58.js";const e=parseInt("1500"),n=parseInt("300"),m=d("list",{state:()=>({items:[],id:1,timeleft:e,break:!1,finishedItems:[],current:""}),actions:{addItem(i){this.items.push({id:this.id++,text:i,edit:!1,model:i})},findIndexById(i){return this.items.findIndex(t=>t.id===i)},delItem(i){const t=this.findIndexById(i);this.items.splice(t,1)},editItem(i){const t=this.findIndexById(i);this.items[t].edit=!0},confirmEditItem(i){const t=this.findIndexById(i);this.items[t].text=this.items[t].model,this.items[t].edit=!1},cancelEditItem(i){const t=this.findIndexById(i);this.items[t].model=this.items[t].text,this.items[t].edit=!1},setCurrentItem(){this.current=this.break?"休息一下":this.items.shift().text},countdown(){this.timeleft--},setFinishItem(){this.break||this.finishedItems.push({id:this.id++,text:this.current}),this.current="",this.items.length>0&&(this.break=!this.break),this.timeleft=this.break?n:e},delFinishedItem(i){const t=this.finishedItems.findIndex(s=>s.id===i);this.finishedItems.splice(t,1)}},persist:{key:"pomodoro-list"}});export{m as u};