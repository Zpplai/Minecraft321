function atualizarRelogio() {
            const agora = new Date();
            let horas = agora.getHours().toString().padStart(2, '0');
            let minutos = agora.getMinutes().toString().padStart(2, '0');
            let segundos = agora.getSeconds().toString().padStart(2, '0');
            
            document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
        }

        setInterval(atualizarRelogio, 1000);
        atualizarRelogio();
   


// Cria um objeto Date com a data atual
let dataAtual = new Date();

// Obtém o dia, mês e ano
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1; // Meses começam do zero, então somamos 1
let ano = dataAtual.getFullYear();

// Exibe o resultado
console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);
