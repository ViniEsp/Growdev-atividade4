let saque = parseInt(prompt('digite o valor do saque'));
      let qtd50 = 0;
      let qtd10 = 0;
      let qtd5 = 0;
      let qtd1 = 0;

      if (saque >= 50) {
        while (saque >= 50) {
          qtd50++;
          saque = saque - 50;
        }
      }
      document.write("Você recebera "+qtd50+ " notas de R$50,00 <br>");
      if (saque >= 10) {
        while (saque >= 10) {
          qtd10++;
          saque = saque - 10;
        }
      }
      document.write("Você recebera "+qtd10+ " notas de R$10,00 <br>");
      if (saque >= 5) {
        while (saque >= 5) {
          qtd5++;
          saque = saque - 5;
        }
      }
      document.write("Você recebera "+qtd5+ " notas de R$5,00 <br>");
      if (saque >= 1) {
        while (saque >= 1) {
          qtd1++;
          saque = saque - 1;
        }
      }
      document.write("Você recebera "+qtd1+ " moedas de R$1,00 <br>");