import '../CSS/Home.css';
import medalhaOuro from '../../components/Imagens/medalha-de-ouro.png'
import medalhaPrata from '../../components/Imagens/medalha-de-prata.png'
import medalhaBronze from '../../components/Imagens/medalha-de-bronze.png'
import medalhaQuarto from '../../components/Imagens/medalha-quarto.png'
import medalhaQuinto from '../../components/Imagens/medalha-quinto.png'
import charizard from '../../components/Imagens/Charizard.gif'
import gengar from '../../components/Imagens/Gengar.gif'
import bulbasaur from '../../components/Imagens/Bulbasaur.gif'
import blaziken from '../../components/Imagens/Blaziken.gif'
import umbreon from '../../components/Imagens/Umbreon.gif'
import noticia1 from '../../components/Imagens/Noticia1.png'
import noticia2 from '../../components/Imagens/Noticia2.png'
import noticia3 from '../../components/Imagens/Noticia3.png'
import noticia4 from '../../components/Imagens/Noticia4.png'
import noticia5 from '../../components/Imagens/Noticia5.png'
import noticia6 from '../../components/Imagens/Noticia6.png'
import Navbar from '../../components/Navbar/index';

function Home() {

    return (

        

        <div className='home home-div-principal'>
            <Navbar/>

            <div className='home home-div-conteudo-top'>

                <h1>TOP 5 POKÉMONS MAIS POPULARES</h1>

                <div className='home home-div-pokemons-populares'>

                    <div className='home home-div-pokemons-populares-top1'>

                        <div className='home home-div-pokemons-linha'>
                            <img className='home home-img-medalha' src={medalhaOuro} />
                            <h2 className='home home-h2-top5'>Charizard</h2>
                        </div>

                        <img className='home home-img-charizard' src={charizard} />

                    </div>

                    <div className='home home-div-pokemons-populares-top2'>

                        <div className='home home-div-pokemons-linha'>
                            <img className='home home-img-medalha' src={medalhaPrata} />
                            <h2 className='home home-h2-top5'>Gengar</h2>
                        </div>

                        <img className='home home-img-gengar' src={gengar} />

                    </div>
                    <div className='home home-div-pokemons-populares-top3'>

                        <div className='home home-div-pokemons-linha'>
                            <img className='home home-img-medalha' src={medalhaBronze} />
                            <h2 className='home home-h2-top5'>Bulbasaur</h2>
                        </div>
                        <img className='home home-img-bulbasaur' src={bulbasaur} />

                    </div>
                    <div className='home home-div-pokemons-populares-top4'>

                        <div className='home home-div-pokemons-linha'>
                            <img className='home home-img-medalha' src={medalhaQuarto} />
                            <h2 className='home home-h2-top5'>Blaziken</h2>
                        </div>
                        <img className='home home-img-blaziken' src={blaziken} />

                    </div>
                    <div className='home home-div-pokemons-populares-top5'>

                        <div className='home home-div-pokemons-linha'>
                            <img className='home home-img-medalha' src={medalhaQuinto} />
                            <h2 className='home home-h2-top5'>Umbreon</h2>
                        </div>

                        <img className='home home-img-umbreon' src={umbreon} />

                    </div>
                </div> {/* Fim div-pokemons-populares */}
            </div> {/* Fim div-conteudo */}

            <div className='home home-div-conteudo-noticias'>
                <h1>Notícias</h1>
                <div className='home home-div-noticias'>

                    <div className='home home-div-noticias-1'>
                        <a href="https://www.omelete.com.br/pokemon/ash-jornadas-supremas-pokemon" target="_blank">
                            <img className='home home-img-noticia' src={noticia1} />
                            <h3>Jornadas Supremas Pokémon | Terceira parte estreia na Netflix em junho</h3>
                        </a>
                    </div>

                    <div className='home home-div-noticias-2'>
                        <a href="https://www.pichauarena.com.br/pokemon-unite/pokemon-unite-umbreon-leafeon-festival/" target="_blank">
                            <img className='home home-img-noticia' src={noticia2} />
                            <h3>Pokémon Unite anuncia Festival de Eevee, com estreia de Umbreon e Leafeon</h3>
                        </a>
                    </div>

                    <div className='home home-div-noticias-3'>
                        <a href="https://www.legiaodosherois.com.br/quiz/primeiro-pokemon-voce-capturaria.html" target="_blank">
                            <img className='home home-img-noticia' src={noticia3} />
                            <h3>[Quiz] Qual seria o primeiro Pokémon que você capturaria?</h3>
                        </a>
                    </div>

                    <div className='home home-div-noticias-4'>
                        <a href="https://br.ign.com/pokemon/108524/news/sindrome-do-pai-ausente-todos-os-pokemon-que-ash-deixiu-pelo-caminho-durante-o-anime" target="_blank">
                            <img className='home home-img-noticia' src={noticia4} />
                            <h3>Síndrome do pai ausente? Todos os Pokémon que Ash deixou durante o anime</h3>
                        </a>
                    </div>

                    <div class='home home-div-noticias-5'>
                        <a href="https://www.tudocelular.com/tech/noticias/n206337/pokemon-home-integracao-scarlet-violet.html" target="_blank">
                            <img class='home home-img-noticia' src={noticia5} />
                            <h3>Pokémon HOME anuncia data de integração com Scarlet e Violet</h3>
                        </a>

                    </div>



                    <div className='home home-div-noticias-6'>
                        <a href="https://www.omelete.com.br/anime-manga/tudo-sobre-final-pokemon-spoilers" target="_blank">
                            <img className='home home-img-noticia' src={noticia6} />
                            <h3>Decepções e reencontros | Tudo o que rolou na temporada final de Pokémon</h3>
                        </a>
                    </div>
                </div>
            </div>

        </div> //Fim div-principal


    )
}

export default Home;
