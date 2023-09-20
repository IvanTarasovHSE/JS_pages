const node_for_click = document.getElementById("for_click")

function find_edit(){
    const Name  = document.getElementsByTagName('span')[6]
    console.log(Name.innerHTML)
    Name.innerHTML = 'Ivan'

    const surName  = document.getElementsByTagName('span')[5]
    console.log(surName.innerHTML)
    surName.innerHTML = 'Tarasov'


}
node_for_click.addEventListener("click",find_edit)

