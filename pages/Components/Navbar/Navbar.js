import Link from 'next/link';
import React from 'react';

import styles from './Navbar.module.css';

function Navbar(props) {
    return (
            <nav className={styles.navbar}>
                <Link href="/">
                    <a>Accueil</a>
                </Link>

                <Link href="/blog">
                    <a>article</a>
                </Link>

                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </nav>
    );
}

export default Navbar;