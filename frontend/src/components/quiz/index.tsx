import { Link, useLocation } from "react-router-dom"
import btnVoltar from '../../assets/formacoes/botoes/voltar.svg'
import './quiz.css'

const getNivel = () => {
    const location = useLocation()
    const { from } = location.state
    return from
}

export const Quiz = () => {
    if(getNivel() == 'lvl1'){
        return(
            <>
                <Link to={'/nivel1'}>
                    <img src={btnVoltar} alt='Voltar' className='backButton' />
                </Link>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdn8CWCgbYM26YKiRa-97nrc-AWgaIhEUZrkzZQVX43mWi6hg/viewform?embedded=true" width="100%" height="1000vh">Carregando…</iframe>
            </>
        )
    }

    if(getNivel() == 'lvl2'){
        return(
            <>
                <Link to={'/nivel2'}>
                    <img src={btnVoltar} alt='Voltar' className='backButton' />
                </Link>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScuu4MJixtp8iGYAhle634Q1SlVrRba2OKHqM0lDLyvxD_8gQ/viewform?embedded=true" width="100%" height="1000vh">Carregando…</iframe>
            </>
        )
    }

    if(getNivel() == 'lvl3'){
        return(
            <>
                <Link to={'/nivel3'}>
                    <img src={btnVoltar} alt='Voltar' className='backButton' />
                </Link>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIEPcKNvKfPTXGzDi3rVwqt2edNCIxDGNi7fNgo1u3rmqNnA/viewform?embedded=true" width="100%" height="1000vh">Carregando…</iframe>
            </>
        )
    }
}