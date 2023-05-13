import type { ArticleQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

interface Props extends CellSuccessProps<ArticleQuery> {
  id: number
  rand: number
}

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

export const Success = ({ article, id, rand }: Props) => {
  return (
    <>
      <div>{JSON.stringify(article)}</div>
      <h1>{id}</h1>
      <h1>{rand}</h1>
    </>
  )
}
