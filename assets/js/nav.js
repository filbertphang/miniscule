---
---
var header = document.getElementsByClassName("site-header")[0]


const storeScroll = () => {
    if (window.pageYOffset > 0) {
        header.classList.add('shadow');
        if (header.id) {
            header.classList.remove('fat');
            console.log('fatty bom bom')
        }
    }
    else {
        header.classList.remove('shadow');
        if (header.id) {
            header.classList.add('fat');
        }
    }
}
document.addEventListener('scroll', storeScroll);
storeScroll()

function modifyProgressbar(item){
    percent = ((window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100) + "%";
    item.style.width = percent;
}

var ids = []
{% for feature in site.features %}
ids.push("#{{ feature.id }}".replace(/\//g, "\\/"))
{%- endfor %}

window.addEventListener('DOMContentLoaded', () => {
    progressbar = document.querySelector('.progress')
    modifyProgressbar(progressbar)

    window.addEventListener('scroll', () => {
        for (j = 0; j < ids.length; j++){
            cur_scroll = window.scrollY + 100
            cur_elem = document.querySelector(ids[j])
            mystr = 'a[href="' + ids[j] + '"]'

            if (cur_scroll >= cur_elem.offsetTop && cur_scroll < (cur_elem.offsetTop + cur_elem.offsetHeight)){
                document.querySelector(mystr).classList.add('active')
            }
            else{
                document.querySelector(mystr).classList.remove('active')
            }
        }

        modifyProgressbar(progressbar)
    })
})