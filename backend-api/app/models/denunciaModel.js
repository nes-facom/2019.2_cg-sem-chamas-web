function Denuncia(protocolo,foto,geo,intensidade,
    observacao,data) {       
    this.protocolo  = protocolo  || null;
    this.foto  = foto  || null;
    this.geo  = geo  || null;
    this.intensidade  = intensidade  || null;
    this.observacao  = observacao  || null;
    this.data  = data  || null;
}





module.exports = Denuncia;     // Export the Cat function as it is