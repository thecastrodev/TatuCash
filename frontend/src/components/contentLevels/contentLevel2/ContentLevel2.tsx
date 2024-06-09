import { Link } from 'react-router-dom'
import '../contentLevel.css'

export const ContentLevel2 = () => {
    return(
        <>           
            <section className="content">
            <Link to={'/formacao'}>Voltar</Link>
                <h2 className="contentTitle">Gertão Financeira</h2>
                <h3 className="contentSubtitle">O que é orçamento</h3>
                <p>O orçamento é um plano que ajuda a estimar despesas, ganhos e oportunidades de investimentos em um período determinado de tempo. Com um orçamento bem definido é possível estabelecer objetivos, que vão permitir que os resultados sejam acompanhados de perto e medidos.</p>

                <h3 className="contentSubtitle">O que é orçamento pessoal</h3>
                <p>A ideia do orçamento pessoal é ter como foco você e a sua relação com o dinheiro. Ou seja, o planejamento é feito considerando a sua renda e os seus gastos, sempre de olho nos objetivos definidos.</p>

                <h3 className="contentSubtitle">O que é orçamento domesticos</h3>
                <p>O orçamento doméstico tem o foco específico nos gastos que estão relacionados ao lar e tudo aquilo que ele precisa para funcionar bem. Um dos aspectos principais é a alimentação, responsável por consumir boa parte dos recursos.</p>

                

                <div className="contentVideos">
                    

                </div>
            </section>
        </>
    )
}