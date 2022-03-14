import { GetServerSidePropsContext } from "next/types/index";

const DOM = ({ developer }:any) => {
    console.log(developer)
return (
        <div className='page-container'>
            <div>
                <h1>Developer of the month</h1>
            </div>
        </div>
    )
}
export const getServerSideProps = async (  context: GetServerSidePropsContext) => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/nabendu82/news-next/devOfMonth',
    );
    const developer = await apiResponse.json();
return {
        props: {
            developer,
        },
    };
};
export default DOM
