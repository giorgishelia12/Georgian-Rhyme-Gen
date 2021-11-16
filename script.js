let ans =[];

document.querySelector('.bt').addEventListener('click', ()=>{
    let sent = document.getElementById('nm').value.replace(/\s+/g, '')
    let num = parseInt(document.getElementById('nr').value)
    let ola = {sentence: sent, num: num}
    $.get(`/list/?sentence=${ola.sentence}&num=${ola.num}`, function(data){
        ans.push(data)
        document.querySelector('.ans').querySelectorAll('li').forEach((e)=>{
            e.remove()
        })
        for(let i = 0; i <  data.length; i++){
            let l = document.createElement('li')
            l.innerHTML = data[i]
            document.querySelector('.ans').appendChild(l)
        }
    })

})
