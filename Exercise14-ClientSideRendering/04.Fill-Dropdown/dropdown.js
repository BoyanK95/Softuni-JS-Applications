import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-	html/directives/repeat.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

async function addItem() {
    let serverResponse = await fetch(url)
    let data =await serverResponse.json()
    let dataArr=Object.values(data)
    
    let templateFullList = (dataArr) => html`${repeat(dataArr,(listInfo) => listInfo._id,(listInfo,index) => html`<option .value=${listInfo._id}>${listInfo.text}</option>`)}`

    let container=document.getElementById('menu');
    render(templateFullList(dataArr),container)

    let form =document.querySelector('form');
    form.addEventListener('submit',submitOption)

    async function submitOption(ev){
        ev.preventDefault();
        let formData=document.getElementById('itemText').value
        let sendData={}
        sendData['text']=formData;
        let dataStringified=JSON.stringify(sendData)
        let serverResponse=await fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:dataStringified
        });
        if (!serverResponse.ok){
            throw new Error('Err')
        }
        let data1=await serverResponse.json()
        let serverResponse1=await fetch(url)
        let data =await serverResponse1.json()
        let dataArr=Object.values(data)
        console.log(dataArr)
        form.reset()
        render(templateFullList(dataArr),container)
    }
}


addItem()