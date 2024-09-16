import './assets/css/style.css';
import GeraCPF from './modules/geraCPF';

(function(){
    const cpfGerado = document.querySelector('.cpfGerado')
    let gerador = new GeraCPF()
    console.log(gerador.geraCPF())
    cpfGerado.innerHTML = gerador.geraCPF()
})()