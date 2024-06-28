'use client'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({item, onClick}) => {
    const pathName = usePathname()
  return (
    <Link onClick={onClick} className={`${styles.container} ${pathName === item.path && styles.active}`} href={item.path}>{item.title}</Link>
  )
}

export default NavLink