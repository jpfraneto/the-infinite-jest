import React from 'react';
import HostPage from '../../components/HostPage/HostPage';
import { allHosts } from 'contentlayer/generated';

export async function getStaticPaths() {
  const paths = allHosts.map(host => {
    return { params: { host: host.hostname } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisHost = allHosts.find(x => x.hostname === params.host);
  return { props: { thisHost } };
}

const Host = ({ thisHost }) => {
  return <HostPage host={thisHost} />;
};

export default Host;
