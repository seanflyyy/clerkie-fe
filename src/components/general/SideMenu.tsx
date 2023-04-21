import React, { useEffect } from 'react';
import styles from '@/styles/General.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SideMenu() {
    const router = useRouter();

    return (
        <div className={styles.sideMenu}>
            <div className={styles.clerkie}>
                <Image
                    src={"/general/sideMenu/ClerkieIcon.svg"}
                    alt={`Clerkie logo`}
                    width={24}
                    height={24}
                />
                <div>Clerkie Challenge</div>
            </div>
            {
                [
                    {
                        name: 'Home',
                        link: '/home',
                        icon: 'HomeIcon.svg',
                    },
                    {
                        name: 'Friends',
                        link: '/friends',
                        icon: 'FriendsIcon.svg',
                    }
                ]
                    .map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div
                                className={router.pathname == item.link
                                    ? styles.sidePanelRowSelected
                                    : styles.sidePanelRow
                                }
                            >
                                {/* <div className={styles.icon}>{item.icon}</div> */}
                                <Image
                                    src={"/general/sideMenu/" + item.icon}
                                    alt={`${item.name} logo`}
                                    width={24}
                                    height={24}
                                />
                                <div className={styles.name}>{item.name}</div>
                            </div>
                        </Link>
                    ))
            }
        </div>
    )
}