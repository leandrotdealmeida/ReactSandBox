import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // ENTRADA , RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumeroPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}> Começar a jogar</button>;
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número de {palpite} com {numeroPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }
  // Entrada
  // 0 <> 300
  //palpites que a máquina deu
  return (
    <div className="App">
      <p>o seu número é {palpite}</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
