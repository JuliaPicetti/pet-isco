document.addEventListener("DOMContentLoaded", function() {
    const scrollAmount = 312; // 18rem + 1.5rem gap in px (assuming 16px rem)

    document.querySelectorAll(".scroll-left").forEach(btn => {
        btn.addEventListener("click", function() {
            const target = document.getElementById(this.dataset.target);
            target.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    });

    document.querySelectorAll(".scroll-right").forEach(btn => {
        btn.addEventListener("click", function() {
            const target = document.getElementById(this.dataset.target);
            target.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Agendamento
    window.showAgendamento = function(servico) {
        document.getElementById('agendamentoSection').style.display = 'block';
        // Scroll to the section
        document.getElementById('agendamentoSection').scrollIntoView({ behavior: 'smooth' });
    };

    function updateTotal() {
        const servicos = document.querySelectorAll('input[name="servico"]:checked');
        const tipo = document.querySelector('input[name="tipo"]:checked');
        let price = 0;
        servicos.forEach(s => {
            if (s.value === 'banho') price += 80;
            else if (s.value === 'tosa') price += 100;
        });
        if (tipo && tipo.value === 'telebusca') price += 30;
        document.getElementById('total').textContent = price.toFixed(2).replace('.', ',');
    }

    document.querySelectorAll('input[name="servico"]').forEach(radio => radio.addEventListener('change', updateTotal));
    document.querySelectorAll('input[name="tipo"]').forEach(radio => radio.addEventListener('change', updateTotal));

    document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Agendamento confirmado! Entraremos em contato para mais detalhes.');
    });

    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cadastro realizado com sucesso!');
    });
});