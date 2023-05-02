import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Backgroundimage from '../component/homepage/backgroundimage/backgroundimage';
import Grid4 from "../component/homepage/description/grid4"
import Queryform  from '../component/homepage/description/queryform';
export default function Home() {
  return (
    <>
    <Backgroundimage/>
    <Grid4/>
    <Queryform/>
    </>
  )
}
