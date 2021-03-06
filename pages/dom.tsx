import { GetServerSidePropsContext } from "next/types/index";
import styles from '../styles/Dom.module.scss'
import Image from 'next/image'


const DOM = ({ developer }:any) => {
  console.log(developer)
  return (
    <div className={styles.pagecontainer}>

    <h1>Developer of the month</h1>
    <p>{developer.name}</p>
    <p style={{fontWeight:"lighter"}}>{developer.position}</p>
    <div className={styles.image_container}>
    <Image src={developer.image} alt="developer image" layout="fill" className={styles.dev_img}/>
    </div>
    <p  style={{fontWeight:"lighter"}}>{developer.description}</p>

    </div>
  )
}

export const getServerSideProps = async (  context: GetServerSidePropsContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/bashidagha/first-next-project/devOfMonth',
  );
  const developer = await apiResponse.json();
  return ({
    props: {
      developer,
    },
  });
};
export default DOM
