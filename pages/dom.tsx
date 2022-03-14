import { GetServerSidePropsContext } from "next/types/index";
import styles from '../styles/Dom.module.scss'


const DOM = ({ developer }:any) => {
  console.log(developer)
  return (
    <div className={styles.pagecontainer}>

    <h1>Developer of the month</h1>
    <p>{developer.name}</p>
    <p style={{fontWeight:"lighter"}}>{developer.position}</p>
    <img src={developer.image} alt=""></img>
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
