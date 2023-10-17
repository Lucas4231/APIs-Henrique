/* API de Criptomoeda */
const btnclique = document.getElementById('btnclique');
const lblValor = document.getElementById('lblValor');

const api = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

/* API de Previsão do Tempo */

const btnTrmpo = document.getElementById('btnTempo');
const lblTempo = document.getElementById('lblTempo');
const lblTemperatura = document.getElementById('lblTemperatura');
const lblDescricao = document.getElementById('lblDescricao');

const apiTempo = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?format=json-cors&key=c45fb802&city_name=Volta_Redonda,RJ'
});

/* API do Preço do Dólar */

const btndolar = document.getElementById('btndolar');
const lblnamedolar = document.getElementById('lblnamedolar');
const lblcompradolar = document.getElementById('lblcompradolar');

const apiDolar = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL'
});

/* API Consulta Localizção por IP */

const btnip = document.getElementById('btnip');
const lbliplocation = document.getElementById('lbliplocation');
const lbltypeIP = document.getElementById('lbltypeIP');
const lblipaddress = document.getElementById('lblipaddress');

const apiIP = axios.create({
    baseURL: 'https://api.hgbrasil.com/geoip?format=json-cors&key=c45fb802&address=remote&precision=false'
})


async function consulta(){
    const responseCript = await api.get();
    console.log(responseCript.data);
    lblValor.innerHTML = '⠀⠀⠀⠀⠀R$ ' + responseCript.data.ticker.buy;
    Swal.fire(
    'Criptomoeda Consultada!',
    'R$ ' + responseCript.data.ticker.buy,
    'success');
};

async function consultaTempo(){
    const responseTempo = await apiTempo.get();
    console.log(responseTempo.data);
    lblTempo.innerHTML = '⠀⠀⠀⠀⠀⠀' + responseTempo.data.results.city;
    lblTemperatura.innerHTML = '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀' + responseTempo.data.results.condition_code + ' °C';
    lblDescricao.innerHTML = '⠀⠀⠀⠀⠀⠀⠀⠀' + responseTempo.data.results.description;
    Swal.fire(
        'Previsão do Tempo Consultada!',
        responseTempo.data.results.condition_code + ' °C' + ' em ' + responseTempo.data.results.city,
        'success');
};

async function consultadolar(){
    const responseDolar = await apiDolar.get();
    console.log(responseDolar.data);
    lblnamedolar.innerHTML = responseDolar.data.USDBRL.name;
    lblcompradolar.innerHTML = 'R$ ' + responseDolar.data.USDBRL.high;
    Swal.fire(
        'Preço do Dólar Consultado',
        'R$ ' + responseDolar.data.USDBRL.high,
        'success');
};

async function consultaIP(){
    const responseIP = await apiIP.get();
    console.log(responseIP.data);
    lbliplocation.innerHTML = responseIP.data.results.city + ', ' + responseIP.data.results.region_code;
    lbltypeIP.innerHTML = responseIP.data.results.type;
    lblipaddress.innerHTML = 'IP: ' + responseIP.data.results.address;
    Swal.fire(
        'IP Localizado!',
        'IP: ' + responseIP.data.results.address,
        'success');
};

btnclique.onclick = ()=>{
    consulta()
};

btnTempo.onclick = ()=>{
    consultaTempo()
};

btndolar.onclick = ()=>{
    consultadolar()
};

btnip.onclick = ()=>{
    consultaIP()
}
