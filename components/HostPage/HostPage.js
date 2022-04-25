import React from 'react';
import styles from './HostPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

const HostPage = ({ host }) => {
  const MDXContent = useMDXComponent(host.body.code);
  return (
    <div className={styles.container}>
      <div className={styles.userImage}>
        <Image alt={'Host image'} src={host.image} width='333' height='333' />
      </div>
      <div className={styles.userDescription}>
        <h2>{host.name}</h2>
        <h3>
          {host.location} |{' '}
          <small>
            Host in{' '}
            <Link href='/locations/la-broma-infinita'>
              <a>
                <em>{host.locationName}</em>
              </a>
            </Link>
          </small>
        </h3>

        <h3>Currently working at {host.workplace}</h3>
        <MDXContent components={mdxComponents} />
      </div>
    </div>
  );
};

export default HostPage;
