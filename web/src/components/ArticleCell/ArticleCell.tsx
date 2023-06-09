import type { ArticleQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from '../Article/Article'

interface Props extends CellSuccessProps<ArticleQuery> {}

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }: Props) => {
  return (
    <>
      <Article article={article} />
    </>
  )
}
