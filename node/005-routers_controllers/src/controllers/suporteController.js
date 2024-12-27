exports.paginaInicial = (req,res) => {
    res.send(`
        <h1>Seja bem vindo ao suporte!</h1>
        <form action="/suporte" method="post">
        Mensagem:<br><br><textarea type="text" name="mensagem" required></textarea>
        <br><br>
        <input type="submit" value="Enviar">
        </form>
        `)
}

exports.mensagemSuporte = (req,res) => {
    res.send(`Olá visitante,sua mensagem:"${req.body.mensagem}".<br>Foi recebida com sucesso!`)
}