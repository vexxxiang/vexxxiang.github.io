
function animate(){
    var _map = document.getElementById("Map");
    _map.classList.add("_map_animate");
}
function show(_name){
    var _title = document.getElementById("title");
    var _view = document.getElementById("view");
    _title.textContent =  _name
    /*_view.src = "img/location/" + _name + ".jpg";*/
}
function zoom(_name){
    
    var source = "img/location/" + _name + ".svg";
    var _scaled = document.getElementById("scaled");
    _scaled.src = source;
    _scaled.classList.remove('hidden');
    var _map = document.getElementById("MapSvg");
    _map.remove();
    var _selectPanel = document.getElementById("selectPanel");
    _selectPanel.classList.remove('hidden');
}


function showL(_loc)
{
    var _locations = ["Dobryszyce","Gidle","Gomunice","Kamiensk","KobieleWielkie",
    "Kodrab","Ladzice","LgotaW","Maslowice","Przedborz",
    "RadomskoMniejsze","RadomskoWielkie","Wielgomlyny","Zytno"];
    console.log(_locations);
    var source = "img/location/" + _locations[parseInt(_loc)] + ".svg"
    var _scaled = document.getElementById("scaled");
    _scaled.src = source;

    var _title = document.getElementById("title");

    console.log(_locations[parseInt(_loc)]);
    switch (_locations[parseInt(_loc)]){
        case("Dobryszyce"):
            _title.textContent =  "Gmina Dobryszyce";
        break;
        case("Gidle"):
            _title.textContent =  "Gmina Gidle";
        break;
        case("Gomunice"):
            _title.textContent =  "Gmina Gomunice";
        break;
        case("Kamiensk"):
            _title.textContent =  "Gmina Kamieńsk";
        break;
        case("KobieleWielkie"):
            _title.textContent =  "Gmina Kobiele Wielkie";
        break;
        case("Kodrab"):
            _title.textContent =  "Gmina Kodrąb";
        break;
        case("Ladzice"):
            _title.textContent =  "Gmina Ładzice";
        break;
        case("LgotaW"):
            _title.textContent =  "Gmina Lgota Wielka";
        break;
        case("Maslowice"):
            _title.textContent =  "Gmina Masłowice";
        break;
        case("Przedborz"):
            _title.textContent =  "Gmina Przedbórz";
        break;
        case("RadomskoMniejsze"):
            _title.textContent =  "Gmina Radomsko";
        break;
        case("RadomskoWielkie"):
            _title.textContent =  "Radomsko";
        break;
        case("Wielgomlyny"):
            _title.textContent =  "Gmina Wielgomłyny";
        break;Zytno
        case("Zytno"):
            _title.textContent =  "Gmina Żytno";
        break;
    }
}

function scrollPlus()
{
    const _holder = document.getElementById('holder');
    var _number = parseInt(_holder.classList);
    if( _number <= 12){
        
        _holder.classList.remove(_number);
        _holder.classList.add(_number += 1);
    }
    else{
        _holder.classList.remove(_number);
        _holder.classList.add("0");
    }
    showL(parseInt(_holder.classList));
}   
function scrollMinus()
{
    const _holder = document.getElementById('holder');
    var _number = parseInt(_holder.classList);
    if( _number > 0){
        _holder.classList.remove(_number);
        _holder.classList.add(_number -= 1);
    }
    else{
        _holder.classList.remove(_number);
        _holder.classList.add("13");
    }
    showL(parseInt(_holder.classList));
}

function changeModel()
{
    const _viewer = document.getElementById("viewer");
    _viewer.src = "model2.glb";
}


