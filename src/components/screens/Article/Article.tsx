import React from 'react'
import './Article.scss'

interface ArticleProps {
    id: string
    imageUrl: string
    title: string
    subtitle: string
    reference: string
    text: string
}

export function Article() {

    return (
        <div className="Article">
            <img className='Image' src='https://firebasestorage.googleapis.com/v0/b/corujando.appspot.com/o/article%2Fcomo_o_sono_ajuda_na_saude_mental.jpg?alt=media&token=b8be677e-2ae9-45a1-bf68-d750c51c477a' alt=''/>
            <h2 className='Title'>Como o sono ajuda na saúde mental?</h2>
            <h4 className='SubTitle'>Como o sono ajuda na saúde mental?</h4>
            <p className='SubTitle'>
                A cada 90 minutos dormindo, uma pessoa normal alterna entre duas categorias de sono: o sono silencioso e o sono REM.  Durante o sono silencioso, a pessoa passa por 4 estágios do sono, que fica cada vez mais profundo. A temperatura corporal diminui, os músculos relaxam, os batimentos cardíacos e a respiração ficam mais lentos. O estágio mais profundo provoca alterações fisiológicas que ajudam a melhorar o funcionamento do Sistema Imunológico.  Já durante o sono REM (movimento rápido dos olhos) é quando as pessoas sonham. A temperatura corporal, pressão arterial, frequência cardíaca e respiração aumentam. É comprovado cientificamente que o sono REM melhora o aprendizado e a memória, além de contribuir para a saúde emocional. No entanto, ficar sem dormir ou ter o sono interrompido pode afetar os níveis de neurotransmissores e hormônios do estresse, além de causar estragos no cérebro, prejudicando o pensamento e a regulação emocional, podendo potencializar os efeitos de distúrbios psiquiátricos.  Alguns sintomas potenciais podem indicar a existência de um distúrbio do sono: - Dificuldade persistente de iniciar ou continuar dormindo; - Comportamento anormais durante o sono (como por exemplo: chutar, falar, gritar, roncar, ter pesadelos, etc); - Sonolência diurna; - Comer de maneira não controlada à noite; - Fadiga e redução da concentração; - Aumento na probabilidade de erros e/ou acidentes; - Despertar com falta de ar, roncos ou apneias; - Declínio da memória; - Irritabilidade ou depressão; - Agressividade e/ou impulsividade; - Desconforto nas pernas ao dormir; - Ranger os dentes; - Prejuízo no funcionamento ocupacional ou social; - Acordar com dor de cabeça, nos maxilares ou regiões auriculares.  Algumas dicas para auxiliar a minimizar a dificuldade em dormir: - Banho morno duas ou três horas antes de deitar; - Não fique na cama se não estiver sonolento, saia do quarto e encontre um lugar silencioso para relaxar e só retorne quando estiver com sono; - Se estiver com os pés frios, use meias para dormir; - Evite discussões estressantes no início da noite; - Se o motivo da sua falta de sono são as preocupações, tente reservar 15 minutos pela manhã para concentrar-se nos problemas, o que pode diminuir a preocupação noturna; - Faça terapias de relaxamento como respiração profunda e meditação; - Identifique seu melhor ambiente e melhor posição para dormir, incluindo posição de travesseiros; - Evite cochilos prolongados ao longo do dia, o indicado são apenas 30 minutos após o almoço.
            </p>

            <img src='' alt=''/>
        </div>
    )
}