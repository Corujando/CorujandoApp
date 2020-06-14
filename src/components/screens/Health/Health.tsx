import React from 'react'
import './Health.scss'
import logo from '../../../assets/jojo-horizontal.png'

export function Health() {

    const mock = [
        {
            id: 'B7mqT29eDXPgE4mTEkOd',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/corujando.appspot.com/o/article%2Fcomo_o_sono_ajuda_na_saude_mental.jpg?alt=media&token=b8be677e-2ae9-45a1-bf68-d750c51c477a',
            title: 'Como o sono ajuda na saúde mental?',
            subtitle: 'Descubra isso e ainda dicas para te auxiliar a dormir!'
        },
        {
            id: 'B7mqT29eDXPgE4mTEkOH',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/corujando.appspot.com/o/article%2Fcomo_o_sono_ajuda_na_saude_mental.jpg?alt=media&token=b8be677e-2ae9-45a1-bf68-d750c51c477a',
            title: 'Como o sono ajuda na saúde mental?',
            subtitle: 'Descubra isso e ainda dicas para te auxiliar a dormir!'
        }
    ]

    function renderArticle() {
        return (
            mock.map((value, key) => (
                <div className='Article'>
                    <hr/>
                    <div className='Content'>
                        <img className='Image' src={value.imageUrl} alt=''/>
                        <div className='Write'>
                            <h4 className='Title'>{value.title}</h4>
                            <h6 className='SubTitle'>{value.subtitle}</h6>
                        </div>
                    </div>
                </div>
        )))
    }

    return (
        <div className="Health">
            <div className="Card">
                <h2 className='Title'>Minha Saúde</h2>
                {renderArticle()}
            </div>
            <img src={logo} alt='Logo' className='Img'/>
        </div>
    )
}