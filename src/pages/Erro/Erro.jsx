import '../CSS/Erro.css'
import snorlaxerro from '../../components/Imagens/SnorlaxErro.gif'
import setas from '../../components/Imagens/setas.png'

function Erro() {



    return (
        <div className="erro erro-div-principal">
            <div className='erro erro-div-conteudo'>
                <h1>ERRO AO ENTRAR NA PÁGINA...</h1>
                <div className='erro erro-div-conteudo-esquerdo-direito'>
                    <div className='erro erro-div-conteudo-direito'>
                        <img className='erro erro-img-snorlax-erro' src={snorlaxerro} />
                    </div>
                    <div className='erro erro-div-conteudo-esquerdo'>
                        <h2 className='erro erro-h2'>Clique no botão abaixo e volte a página principal</h2>
                        <img className='erro erro-img-setas' src={setas} />
                        <div className='erro erro-div-botao'>
                            <a href="/">
                            <button type="button">CLIQUE AQUI!!!</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Erro;