import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import logo from '../../../assets/jojo-blue-horizontal.png'
import { Article } from '../../../model/article'
import { ArticleService } from '../../../services/article.service'
import './Articles.scss'

interface ArticleProps {
  id: string
}

export function Articles() {
  const [article, setArticle] = useState({} as Article)
  const articleService = new ArticleService()
  const { id } = useParams<ArticleProps>()

  useEffect(() => {
    handleArticleById()
  }, [])

  async function handleArticleById() {
    const data = await articleService.getArticleById(id)
    setArticle(data)
  }

  return (
    <div className="ArticleScreen">
      <img className="Image" src={article.imageUrl} alt="" />
      <h2 className="Title">{article.title}</h2>
      <h4 className="SubTitle">{article.subtitle}</h4>
      <ReactMarkdown source={article.text} className="Text" />
      <h4 className="SubTitle">
        Fonte:
        <a className="Link" href={article.reference}>
          {article.title}
        </a>
      </h4>
      <div className="Icon">
        <img className="Logo" src={logo} alt="" />
      </div>
    </div>
  )
}
