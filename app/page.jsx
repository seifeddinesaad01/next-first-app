import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"

export default function Home() {
  return <>
  <h2>SEIF EDDINE SAAD</h2>
  <ul>
    <li><Link href='/about'>About</Link></li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>
  </>;
}
