import React, { useEffect, useState } from 'react'
import './Health.scss'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { Link } from 'react-router-dom';
import { Card } from '../../generics/Card/Card';
import { CardItem } from '../../generics/CardItem/CardItem';
import { ArticleService } from '../../../services/article.service' 
import { Article } from '../../../model/article';

export function Health() {
    const [articles, setArticles] = useState<Article[]>([])
    const articleService = new ArticleService()

    useEffect(() => {
        handleArticle()
    }, [])

    async function handleArticle() {
        const article = await articleService.get()
        setArticles(article)
    }

    function renderArticle() {
        return (
            articles.map(value => (
                <>
                    <Link to={`/article/${value.id}`}>
                        <CardItem title={value.title} subtitle={value.subtitle} imageUrl={value.imageUrl} />
                    </Link>
                </>
            )))
    }

    return (
        <div className="Health">
            <Card title="Minha Saúde">
                {renderArticle()}
            </Card>
            <CRFooter />
        </div>
    )
}