import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function PaginationConatiner() {
  return (
    <Pagination>
        <Pagination.First />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{32}</Pagination.Item>
        <Pagination.Last />
    </Pagination>
  )
}
