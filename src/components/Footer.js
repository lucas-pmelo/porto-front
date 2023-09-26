import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-nomes'>
        <p className='footer-nomes-heading'>
          <i className="fa fa-users" aria-hidden="true"></i><strong> 1TDSB</strong> <br />
          Ana Júlia Almeida Silva Neves – RM: 98974 (1TDSS) <br />
          Felipe Rodrigues Franco de Oliveira – RM: 552101 <br />
          Lucas Pinheiro de Melo – RM: 97707 <br />
          Murilo Ribeiro Valério da Silva – RM: 550858 <br />
          Sarah Santos Teixeira – RM: 550635
        </p>
        <a href="https://www.github.com/ribeiromurilo/SPRINT3" rel="noreferrer" target="_blank">Repositório</a>
      </section>
    </div>
  );
}

export default Footer;
