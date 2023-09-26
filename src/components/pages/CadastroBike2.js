import React from 'react';
import { Link } from 'react-router-dom';
import "./CadastroBike2.css";

const CadastroBike2 = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Cadastrar Bike</h1>
                <p>Tudo certo! Agora, tire uma foto de sua bike para que possamos
                    analisar suas informações e o seu estado.</p>
                <p>Você tem duas opções para enviar suas imagens: </p>
                <p><strong>1.</strong> Usando a sua webcam: Você pode tirar uma foto instantaneamente. <br />
                    <strong>2.</strong> Escaneando o QR code: Se preferir,
                    você pode escanear o QR code com outro <br /> dispositivo
                    para capturar a imagem de sua bike rapidamente.</p>
                <div className="bike-container">
                    <div className="qr-code-container">
                        <img src="/images/qrcode.png" alt="QR Code" className="qr-code" />
                    </div>
                    <div className="bike-imgs">
                        <p>Seguindo as imagens, envie uma foto de sua bike de acordo com as posições:</p>
                        <div className="bike-row-container">
                            <div className="bike-img">
                                <img src="/images/bike-1.png" alt="Bike" className="bike" />
                                <div className="center-button">
                                    <button className="button-upload">Foto 1</button>
                                </div>
                            </div>
                            <div className="bike-img">
                                <img src="/images/bike-2.png" alt="Bike" className="bike" />
                                <div className="center-button">
                                    <button className="button-upload">Foto 2</button>
                                </div>
                            </div>
                        </div>
                        <div className="bike-row-container">
                            <div className="bike-img">
                                <img src="/images/bike-3.png" alt="Bike" className="bike-3" />
                                <div className="center-button">
                                    <button className="button-upload">Foto 3</button>
                                </div>
                            </div>
                            <div className="bike-img">
                                <img src="/images/bike-4.png" alt="Bike" className="bike-4" />
                                <div className="center-button">
                                    <button className="button-upload-4">Foto 4</button>
                                </div>
                            </div>
                        </div>
                        <button className="button-enviar">
                            <Link to="/vistoria" className="enviar">Enviar</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastroBike2;
