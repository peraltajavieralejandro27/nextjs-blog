import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import archivesOrg from "../lib/archives";

export async function getServerSideProps() {
  const archives = await archivesOrg();
  return {
    props: {
      archives,
    },
  };
}

export default function Home({archives}) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {archives.files.map((file,index) => (
            <li className={utilStyles.listItem} key={index}>
              <b>{file.name}</b>
              <br/>
              Source: {file.source}
              <br/>
              Mtime: {file.mtime}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}