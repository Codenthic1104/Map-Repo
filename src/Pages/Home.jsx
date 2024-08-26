
import React from 'react'
import { Nav } from '../Component/Nav'
import { Container } from '../Component/Container'
import { Footer } from '../Component/Footer'
import { NewsLetter } from '../Component/NewsLetter'
import { Content1 } from '../Component/Content1'
import { Content2 } from '../Component/Content2'
import { Content3 } from '../Component/Content3'

function Home() {
  return (
    <>
      <Nav />
      <Container />
      <Content2 />
      <Content3 />
      <Content1 />
      <NewsLetter />
      <Footer />
    </>
  )
}

export {Home}