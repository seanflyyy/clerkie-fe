import React from 'react'
import styles from '@/styles/General.module.css'
import { useRouter } from 'next/router'

export default function TopMenu() {
  const router = useRouter();

  function makeFirstLetterUpperCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.topMenu}>
      <h3>{makeFirstLetterUpperCase(router.pathname.split('/')[1])}</h3>
    </div>
  )
}