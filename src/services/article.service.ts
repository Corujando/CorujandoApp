import { Article } from '../model/article'
import { BaseService } from './base.service'

export class ArticleService extends BaseService {
    PATH = 'article'

    get() {
        return this.getAll().then(({ empty, docs }) => {
            return docs.map(doc => {
                const article = doc.data()
                return {
                    id: doc.id,
                    imageUrl: article.imageUrl,
                    reference: article.reference,
                    subtitle: article.subtitle,
                    text: article.text,
                    title: article.title
                }
            })
        })
    }

    async getArticleById(id: string) {
        const result = await this.getDocumentFromId(id)
        const article = result.data()
        if (article) {
            return {
                id: result.id,
                imageUrl: article.imageUrl,
                reference: article.reference,
                subtitle: article.subtitle,
                text: article.text,
                title: article.title
            } as Article
        }
        return {
            id: '',
            imageUrl: '',
            reference: '',
            subtitle: '',
            text: '',
            title: ''
        } as Article
    }
}
