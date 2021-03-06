import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../../../model/article'
import { Badge } from '../../../model/badge'
import { ArticleService } from '../../../services/article.service'
import { BadgeService } from '../../../services/badge.service'
import { Card } from '../../generics/Card/Card'
import { CardItem } from '../../generics/CardItem/CardItem'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { CRPopUp } from '../../generics/CRPopUp/CRPopUp'
import './Health.scss'

const hasSeenHealth = localStorage.getItem('hasSeenHealth')

export function Health() {
  const [articles, setArticles] = useState<Article[]>([])
  const [badges, setBadges] = useState<Badge[]>([])
  const articleService = new ArticleService()
  const badgeService = new BadgeService()

  useEffect(() => {
    handleArticle()
    loadBadges()
  }, [])

  async function loadBadges() {
    const badgesFromDB = await badgeService.getAllBadges()
    setBadges(badgesFromDB!!)
  }

  async function handleArticle() {
    const article = await articleService.get()
    setArticles(article)
  }

  function renderArticle() {
    return articles.map(value => (
      <>
        <Link to={`/article/${value.id}`}>
          <CardItem title={value.title} subtitle={value.subtitle} imageUrl={value.imageUrl} />
        </Link>
      </>
    ))
  }

  function renderBadgeModal() {
    const badge = badges.find(b => b.title === 'Por dentro da saúde')
    return (
      !hasSeenHealth &&
      badge && (
        <CRPopUp
          faded
          image={badge.imageUrl}
          title={badge.title}
          subTitle={badge.description}
          titleSecondaryButton="Que legal, obrigado!"
          onClickSecondaryButton={() => {
            localStorage.setItem('hasSeenHealth', 'true')
            setBadges([])
          }}>
          <p className="">
            Parabéns! Por você ter se interessado e clicado para aprender mais sobre saúde você
            ganhou esse troféu. Você pode vê-lo e todos os outros que possuir acessando a tela de
            <span className="azul"> Minhas Conquistas</span> no menu inicial
          </p>
        </CRPopUp>
      )
    )
  }

  return (
    <div className="Health">
      {renderBadgeModal()}
      <Card title="Minha Saúde">{renderArticle()}</Card>
      <CRFooter />
    </div>
  )
}
