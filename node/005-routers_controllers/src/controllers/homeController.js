exports.paginaInicial = (req,res) => {
    // res.send(`
    //     <form action="/" method="post">
    //     Nome do cliente:<input type="text" name="nome" required>
    //     <br>
    //     <br>
    //     <input type="submit" value="Cadastrar">
    //     </form>
    //     `)
    res.render('index')
}

exports.trataPost = (req,res) => {
    console.log(req.body)
    res.send(`Ei ${req.body.nome}, sou sua nova rota de post.`)
}