import Link from 'next/link';
import React from 'react';

function index(props) {
    return (
        <div>
            <h1>Le blog</h1>
            <Link href={'/blog/10 plats basque'}>
                <a>10 plats basque</a>
            </Link>
        </div>
    );
}

export default index;